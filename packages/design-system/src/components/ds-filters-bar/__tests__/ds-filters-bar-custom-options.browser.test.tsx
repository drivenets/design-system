import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import type {
	DsFilterCondition,
	DsFilterDocument,
	DsFilterField,
	DsFilterFieldCondition,
	DsFilterOption,
	DsFiltersBarProps,
} from '../ds-filters-bar.types';

const isFieldCondition = (condition: DsFilterCondition, field: string): condition is DsFilterFieldCondition =>
	condition.kind === 'field' && condition.field === field;

const isPositive = (condition: DsFilterFieldCondition) =>
	condition.operator === '=' || condition.operator === 'IN';

const valuesOf = (condition: DsFilterFieldCondition): ReadonlyArray<unknown> =>
	Array.isArray(condition.value) ? condition.value : [];

const hasOnly = (condition: DsFilterFieldCondition, value: string) =>
	isPositive(condition) && valuesOf(condition).length === 1 && valuesOf(condition)[0] === value;

const isOnlyScheduled = ({ conditions }: DsFilterDocument) =>
	conditions.some((condition) => isFieldCondition(condition, 'type') && hasOnly(condition, 'scheduled'));

const isRecurrenceDisabled = (_option: DsFilterOption, draft: DsFilterDocument) => isOnlyScheduled(draft);

// A scheduled run never recurs; a recurrence implies a recurrent run.
const normalizeDraft = (draft: DsFilterDocument): DsFilterDocument => {
	const { conditions } = draft;

	if (isOnlyScheduled(draft)) {
		return conditions.some((condition) => isFieldCondition(condition, 'recurrence'))
			? { ...draft, conditions: conditions.filter((condition) => !isFieldCondition(condition, 'recurrence')) }
			: draft;
	}

	const hasRecurrence = conditions.some(
		(condition) => isFieldCondition(condition, 'recurrence') && valuesOf(condition).length > 0,
	);

	if (!hasRecurrence) {
		return draft;
	}

	const type = conditions.find((condition) => isFieldCondition(condition, 'type'));

	if (!type) {
		return {
			...draft,
			conditions: [
				...conditions,
				{ kind: 'field', id: 'type-recurrent', field: 'type', operator: '=', value: ['recurrent'] },
			],
		};
	}

	if (hasOnly(type, 'recurrent')) {
		return draft;
	}

	return {
		...draft,
		conditions: conditions.map((condition) =>
			condition === type ? { ...type, operator: '=', value: ['recurrent'] } : condition,
		),
	};
};

const renderBadge = (option: DsFilterOption) => <span>{option.label} badge</span>;

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'enum',
		id: 'type',
		label: 'Type',
		options: [
			{ value: 'scheduled', label: 'Scheduled' },
			{ value: 'recurrent', label: 'Recurrent' },
		],
	},
	{
		type: 'enum',
		id: 'recurrence',
		label: 'Recurrence',
		options: [
			{ value: 'regular', label: 'Regular' },
			{ value: 'moved', label: 'Moved' },
		],
		isOptionDisabled: isRecurrenceDisabled,
	},
];

const BADGE_FIELDS: ReadonlyArray<DsFilterField> = FIELDS.map((field) =>
	field.type === 'enum' ? { ...field, renderOption: renderBadge } : field,
);

const SCHEDULED: DsFilterCondition = {
	kind: 'field',
	id: 'type-1',
	field: 'type',
	operator: '=',
	value: ['scheduled'],
};

const conditions = (...items: DsFilterCondition[]): DsFilterDocument => ({ conditions: items, query: null });

const FiltersBar = (props: DsFiltersBarProps) => <DsFiltersBar defaultExpanded fields={FIELDS} {...props} />;

const BuilderBar = (props: DsFiltersBarProps) => (
	<DsFiltersBar defaultExpanded defaultView="builder" fields={FIELDS} {...props} />
);

const addFilterButton = () => page.getByRole('button', { name: 'Add filter', exact: true });
const filtersDialog = () => page.getByRole('dialog', { name: 'Filters' });
const builderDialog = () => page.getByRole('dialog', { name: 'Query builder' });
const fieldTab = (label: string) => page.getByRole('tab', { name: new RegExp(`^${label}(\\s|$)`) });
const optionCheckbox = (name: string) => filtersDialog().getByRole('checkbox', { name, exact: true });
const choice = (name: string) => page.getByRole('button', { name, exact: true });
const saveFiltersButton = () => page.getByRole('button', { name: 'Save filters', exact: true });
const saveQueryButton = () => page.getByRole('button', { name: 'Save query', exact: true });
// A chip's own name is its field path; the operator and remove buttons inside it have their own.
const chip = (label: string) => page.getByRole('button', { name: label, exact: true });
const region = () => page.getByRole('region', { name: 'Filters' });

const lastDocument = (onValueChange: ReturnType<typeof vi.fn>) =>
	onValueChange.mock.lastCall?.[0] as DsFilterDocument | undefined;

describe('DsFiltersBar renderOption', () => {
	it('draws the filters dialog option rows, while the chip and summary keep the label', async () => {
		await page.render(<FiltersBar fields={BADGE_FIELDS} />);

		await addFilterButton().click();

		await expect.element(filtersDialog().getByText('Scheduled badge', { exact: true })).toBeVisible();
		await expect.element(filtersDialog().getByText('Recurrent badge', { exact: true })).toBeVisible();
		// The custom row keeps the option's label as its accessible name.
		await expect.element(optionCheckbox('Scheduled')).toBeVisible();

		await optionCheckbox('Scheduled').click();
		await saveFiltersButton().click();

		await expect.element(chip('Type').getByText('Scheduled', { exact: true })).toBeVisible();
		await expect.element(chip('Type')).not.toMatchTextContent('badge');

		await page.getByRole('button', { name: 'Hide filters', exact: true }).click();

		await expect.element(region()).toMatchTextContent('Type: Scheduled;');
		await expect.element(region()).not.toMatchTextContent('badge');
	});

	it('draws the builder value list, while the saved chip keeps the label', async () => {
		await page.render(<BuilderBar fields={BADGE_FIELDS} />);

		await addFilterButton().click();
		await choice('Type').click();

		await expect.element(builderDialog().getByText('Scheduled badge', { exact: true })).toBeVisible();
		await expect.element(builderDialog().getByText('Recurrent badge', { exact: true })).toBeVisible();

		await choice('Recurrent').click();
		await saveQueryButton().click();

		await expect.element(chip('Type').getByText('Recurrent', { exact: true })).toBeVisible();
		await expect.element(chip('Type')).not.toMatchTextContent('badge');
	});
});

describe('DsFiltersBar isOptionDisabled', () => {
	it('keeps a checked option enabled so it can be unchecked', async () => {
		const regular: DsFilterCondition = {
			kind: 'field',
			id: 'recurrence-1',
			field: 'recurrence',
			operator: '=',
			value: ['regular'],
		};

		await page.render(<FiltersBar defaultValue={conditions(SCHEDULED, regular)} />);

		await addFilterButton().click();
		await fieldTab('Recurrence').click();

		await expect.element(optionCheckbox('Regular')).toBeChecked();
		await expect.element(optionCheckbox('Regular')).toBeEnabled();
		await expect.element(optionCheckbox('Moved')).toBeDisabled();

		await optionCheckbox('Regular').click();

		await expect.element(optionCheckbox('Regular')).not.toBeChecked();
		await expect.element(optionCheckbox('Regular')).toBeDisabled();
	});

	it('disables options in the filters dialog from the unsaved draft', async () => {
		await page.render(<FiltersBar />);

		await addFilterButton().click();
		await fieldTab('Type').click();
		await optionCheckbox('Scheduled').click();
		await fieldTab('Recurrence').click();

		await expect.element(optionCheckbox('Regular')).toBeDisabled();
		await expect.element(optionCheckbox('Moved')).toBeDisabled();

		await fieldTab('Type').click();
		await optionCheckbox('Scheduled').click();
		await fieldTab('Recurrence').click();

		await expect.element(optionCheckbox('Regular')).toBeEnabled();
		await expect.element(optionCheckbox('Moved')).toBeEnabled();
	});

	it('disables a builder value that cannot be picked against the saved conditions', async () => {
		const onValueChange = vi.fn();

		await page.render(<BuilderBar defaultValue={conditions(SCHEDULED)} onValueChange={onValueChange} />);

		await addFilterButton().click();
		await choice('Recurrence').click();

		await expect.element(choice('Regular')).toBeDisabled();

		await choice('Regular').click({ force: true });

		await expect.element(choice('Regular')).not.toHaveAttribute('aria-pressed', 'true');
		await expect.element(saveQueryButton()).toBeDisabled();
		expect(onValueChange).not.toHaveBeenCalled();
	});
});

describe('DsFiltersBar normalizeDraft', () => {
	it('applies to the filters dialog draft before Save, and Save commits the result', async () => {
		const onValueChange = vi.fn();

		await page.render(<FiltersBar normalizeDraft={normalizeDraft} onValueChange={onValueChange} />);

		await addFilterButton().click();
		await fieldTab('Recurrence').click();
		await optionCheckbox('Regular').click();
		await fieldTab('Type').click();

		await expect.element(optionCheckbox('Recurrent')).toBeChecked();
		await expect.element(optionCheckbox('Scheduled')).not.toBeChecked();
		expect(onValueChange).not.toHaveBeenCalled();

		await saveFiltersButton().click();

		expect(onValueChange).toHaveBeenCalledOnce();
		const saved = lastDocument(onValueChange);

		expect(saved?.query).toBeNull();
		expect(saved?.conditions).toHaveLength(2);
		expect(saved?.conditions).toEqual(
			expect.arrayContaining([
				expect.objectContaining({ field: 'type', value: ['recurrent'] }),
				expect.objectContaining({ field: 'recurrence', value: ['regular'] }),
			]),
		);
	});

	it('applies to the builder, and Save commits the whole normalized condition list', async () => {
		const onValueChange = vi.fn();

		await page.render(<BuilderBar normalizeDraft={normalizeDraft} onValueChange={onValueChange} />);

		await addFilterButton().click();
		await choice('Recurrence').click();
		await choice('Regular').click();
		await saveQueryButton().click();

		expect(onValueChange).toHaveBeenCalledOnce();
		const saved = lastDocument(onValueChange);

		expect(saved?.conditions).toHaveLength(2);
		expect(saved?.conditions).toEqual(
			expect.arrayContaining([
				expect.objectContaining({ field: 'type', value: ['recurrent'] }),
				expect.objectContaining({ field: 'recurrence', value: ['regular'] }),
			]),
		);
		await expect.element(chip('Type').getByText('Recurrent', { exact: true })).toBeVisible();
		await expect.element(chip('Recurrence').getByText('Regular', { exact: true })).toBeVisible();
	});

	it('leaves the builder adding only the built condition without it', async () => {
		const onValueChange = vi.fn();

		await page.render(<BuilderBar onValueChange={onValueChange} />);

		await addFilterButton().click();
		await choice('Recurrence').click();
		await choice('Regular').click();
		await saveQueryButton().click();

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith(
			conditions(expect.objectContaining({ field: 'recurrence', value: ['regular'] }) as DsFilterCondition),
		);
		await expect.element(builderDialog()).not.toBeInTheDocument();
	});
});
