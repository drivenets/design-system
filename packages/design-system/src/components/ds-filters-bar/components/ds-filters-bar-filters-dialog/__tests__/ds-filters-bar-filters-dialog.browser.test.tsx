import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { FiltersDialog } from '../index';
import type {
	DsFiltersBarFiltersDialogEntry,
	DsFiltersBarFiltersDialogEnumEntry,
	DsFiltersBarFiltersDialogLocale,
	DsFiltersBarFiltersDialogTab,
	DsFiltersBarFiltersDialogValue,
} from '../ds-filters-bar-filters-dialog.types';
import type { DsFilterEnumField, DsFilterScalarField } from '../../../ds-filters-bar.types';

const STATUS: DsFilterEnumField = {
	id: 'status',
	label: 'Status',
	type: 'enum',
	operators: [
		{ value: '=', label: 'equals', symbol: '=' },
		{ value: '!=', label: 'not equals', symbol: '≠' },
	],
	options: [
		{ value: 'active', label: 'Active' },
		{ value: 'deprecated', label: 'Deprecated' },
		{ value: 'inactive', label: 'Inactive' },
		{ value: 'pending', label: 'Pending' },
		{ value: 'draft', label: 'Draft' },
	],
};

const WORKFLOW: DsFilterEnumField = {
	id: 'workflow',
	label: 'Workflow',
	type: 'enum',
	operators: [{ value: 'IN', label: 'is any of' }],
	options: [
		{ value: 'deploy', label: 'Deploy' },
		{ value: 'backup', label: 'Backup' },
	],
};

const RESULT: DsFilterEnumField = {
	id: 'result',
	label: 'Result',
	type: 'enum',
	operators: [{ value: '=', label: 'equals', symbol: '=' }],
	options: [
		{ value: 'passed', label: 'Passed' },
		{ value: 'failed', label: 'Failed' },
	],
};

const tabOf = (schema: DsFilterScalarField): DsFiltersBarFiltersDialogTab => ({
	id: schema.id,
	field: schema.id,
	label: schema.label,
	schema,
});

const TABS = [STATUS, WORKFLOW, RESULT].map(tabOf);

const entry = (
	overrides: Partial<DsFiltersBarFiltersDialogEnumEntry> & { field: string },
): DsFiltersBarFiltersDialogEnumEntry => ({
	type: 'enum',
	operator: '=',
	selected: [],
	pinned: [],
	...overrides,
});

interface HarnessProps {
	tabs?: ReadonlyArray<DsFiltersBarFiltersDialogTab>;
	initialValue?: DsFiltersBarFiltersDialogValue;
	initialTab?: string;
	locale?: DsFiltersBarFiltersDialogLocale;
	onChange?: (changed: DsFiltersBarFiltersDialogEntry, value: DsFiltersBarFiltersDialogValue) => void;
	onSave?: (value: DsFiltersBarFiltersDialogValue) => void;
	onOpenChange?: (open: boolean) => void;
}

const Harness = ({
	tabs = TABS,
	initialValue = [],
	initialTab,
	locale,
	onChange,
	onSave,
	onOpenChange,
}: HarnessProps) => {
	const [open, setOpen] = useState(true);
	const [value, setValue] = useState(initialValue);

	return (
		<>
			<button type="button" onClick={() => setOpen(true)}>
				Open filters
			</button>
			<FiltersDialog
				open={open}
				tabs={tabs}
				value={value}
				initialTab={initialTab}
				locale={locale}
				onOpenChange={(next) => {
					onOpenChange?.(next);
					setOpen(next);
				}}
				onChange={(changed, next) => {
					onChange?.(changed, next);
					setValue(next);
				}}
				onSave={(next) => onSave?.(next)}
			/>
		</>
	);
};

const dialog = () => page.getByRole('dialog', { name: 'Filters' });
// A tab's name is its field label, followed by the checked count and pin indicator when present.
const tab = (label: string) => page.getByRole('tab', { name: new RegExp(`^${label}(\\s|$)`) });
const operatorSelect = () => page.getByRole('combobox', { name: 'Operator' });
const optionCheckbox = (name: string) => page.getByRole('checkbox', { name, exact: true });
const pinToggle = (name: string) => page.getByRole('button', { name: `Pin ${name}`, exact: true });

const opacityOf = (name: string) => () => getComputedStyle(pinToggle(name).element()).opacity;

// `data-size` is DsCheckbox's size contract on its Ark root; the checkbox role sits on the hidden input inside it.
const CHECKBOX_ROOT = '[data-scope="checkbox"][data-part="root"]';

describe('DsFiltersBar.FiltersDialog', () => {
	it('renders a dialog titled by the locale with one tab per field, in order', async () => {
		await page.render(<Harness locale={{ title: 'Refine results' }} />);

		await expect.element(page.getByRole('dialog', { name: 'Refine results' })).toBeVisible();

		const tabs = page.getByRole('tab').elements();

		expect(tabs.map((element) => element.textContent)).toEqual(['Status', 'Workflow', 'Result']);
	});

	it('selects the first tab on open and shows the selected field panel', async () => {
		await page.render(<Harness />);

		await expect.element(tab('Status')).toHaveAttribute('aria-selected', 'true');
		await expect.element(page.getByRole('group', { name: 'Status' })).toBeVisible();

		await tab('Workflow').click();

		await expect.element(tab('Workflow')).toHaveAttribute('aria-selected', 'true');
		await expect.element(tab('Status')).toHaveAttribute('aria-selected', 'false');
		await expect.element(optionCheckbox('Deploy')).toBeVisible();
		await expect.element(optionCheckbox('Active')).not.toBeInTheDocument();
	});

	it('resets the selected tab and search when reopened', async () => {
		await page.render(<Harness />);

		await tab('Workflow').click();
		await page.getByRole('textbox', { name: 'Search Workflow' }).fill('dep');
		await page.getByRole('button', { name: 'Close' }).click();
		await expect.element(dialog()).not.toBeInTheDocument();

		await page.getByRole('button', { name: 'Open filters' }).click();

		await expect.element(tab('Status')).toHaveAttribute('aria-selected', 'true');
		await expect.element(page.getByRole('textbox', { name: 'Search Status' })).toHaveValue('');
	});

	it('selects the initial field tab on every open', async () => {
		await page.render(<Harness initialTab="workflow" />);

		await expect.element(tab('Workflow')).toHaveAttribute('aria-selected', 'true');
		await expect.element(optionCheckbox('Deploy')).toBeVisible();

		await tab('Status').click();
		await page.getByRole('button', { name: 'Close' }).click();
		await page.getByRole('button', { name: 'Open filters' }).click();

		await expect.element(tab('Workflow')).toHaveAttribute('aria-selected', 'true');
	});

	it('falls back to the first tab for an unknown initial field', async () => {
		await page.render(<Harness initialTab="removed" />);

		await expect.element(tab('Status')).toHaveAttribute('aria-selected', 'true');
		await expect.element(page.getByRole('group', { name: 'Status' })).toBeVisible();
	});

	it('lists the field operators and defaults to the first one without a value entry', async () => {
		await page.render(<Harness />);

		await expect.element(operatorSelect()).toMatchTextContent('Status = (equals)');

		await operatorSelect().click();

		await expect.element(page.getByRole('option', { name: 'Status = (equals)' })).toBeVisible();
		await expect.element(page.getByRole('option', { name: 'Status ≠ (not equals)' })).toBeVisible();
	});

	it('shows the operator from the value entry', async () => {
		await page.render(<Harness initialValue={[entry({ field: 'status', operator: '!=' })]} />);

		await expect.element(operatorSelect()).toMatchTextContent('Status ≠ (not equals)');
	});

	it('fires onChange with the updated entry when an operator is picked', async () => {
		const onChange = vi.fn();
		await page.render(<Harness onChange={onChange} />);

		await operatorSelect().click();
		await page.getByRole('option', { name: 'Status ≠ (not equals)' }).click();

		const changed = entry({ field: 'status', operator: '!=' });

		expect(onChange).toHaveBeenCalledExactlyOnceWith(changed, [changed]);
		await expect.element(operatorSelect()).toMatchTextContent('Status ≠ (not equals)');
	});

	it('labels the search input separately from its placeholder', async () => {
		await page.render(
			<Harness
				locale={{
					search: (fieldLabel) => `Find in ${fieldLabel}`,
					searchPlaceholder: () => 'Type to filter',
				}}
			/>,
		);

		await expect
			.element(page.getByRole('textbox', { name: 'Find in Status' }))
			.toHaveAttribute('placeholder', 'Type to filter');
	});

	it('renders every option as a large checkbox', async () => {
		await page.render(<Harness />);

		const sizes = page
			.getByRole('checkbox')
			.elements()
			.map((element) => element.closest(CHECKBOX_ROOT)?.getAttribute('data-size'));

		expect(sizes).toEqual(STATUS.options.map(() => 'large'));
	});

	it('narrows the options by label, case-insensitively', async () => {
		await page.render(<Harness />);

		await page.getByRole('textbox', { name: 'Search Status' }).fill('ACT');

		await expect.element(optionCheckbox('Active')).toBeVisible();
		await expect.element(optionCheckbox('Inactive')).toBeVisible();
		await expect.element(optionCheckbox('Deprecated')).not.toBeInTheDocument();
		await expect.element(optionCheckbox('Pending')).not.toBeInTheDocument();
		await expect.element(optionCheckbox('Draft')).not.toBeInTheDocument();
	});

	it('fires onChange when an option is checked and unchecked', async () => {
		const onChange = vi.fn();
		await page.render(<Harness onChange={onChange} />);

		await optionCheckbox('Active').click();

		await expect.element(optionCheckbox('Active')).toBeChecked();
		expect(onChange).toHaveBeenLastCalledWith(entry({ field: 'status', selected: ['active'] }), [
			entry({ field: 'status', selected: ['active'] }),
		]);

		await optionCheckbox('Active').click();

		await expect.element(optionCheckbox('Active')).not.toBeChecked();
		expect(onChange).toHaveBeenLastCalledWith(entry({ field: 'status' }), [entry({ field: 'status' })]);
	});

	it('fires onChange when an option is pinned and unpinned', async () => {
		const onChange = vi.fn();
		await page.render(<Harness onChange={onChange} />);

		await expect.element(pinToggle('Active')).toHaveAttribute('aria-pressed', 'false');

		await pinToggle('Active').click();

		await expect.element(pinToggle('Active')).toHaveAttribute('aria-pressed', 'true');
		await expect.element(optionCheckbox('Active')).not.toBeChecked();
		expect(onChange).toHaveBeenLastCalledWith(entry({ field: 'status', pinned: ['active'] }), [
			entry({ field: 'status', pinned: ['active'] }),
		]);

		await pinToggle('Active').click();

		await expect.element(pinToggle('Active')).toHaveAttribute('aria-pressed', 'false');
		expect(onChange).toHaveBeenLastCalledWith(entry({ field: 'status' }), [entry({ field: 'status' })]);
	});

	it('hides unpinned pins until the row is hovered and keeps pinned ones visible', async () => {
		await page.render(<Harness initialValue={[entry({ field: 'status', pinned: ['active'] })]} />);

		await page.getByRole('heading', { name: 'Filters' }).hover();

		await expect.poll(opacityOf('Active')).toBe('1');
		await expect.poll(opacityOf('Draft')).toBe('0');

		await optionCheckbox('Draft').hover();

		await expect.poll(opacityOf('Draft')).toBe('1');
	});

	it('shows an unpinned pin while its row has keyboard focus', async () => {
		await page.render(<Harness />);

		await page.getByRole('heading', { name: 'Filters' }).hover();
		await expect.poll(opacityOf('Draft')).toBe('0');

		optionCheckbox('Draft').element().focus();

		await expect.poll(opacityOf('Draft')).toBe('1');
		await expect.poll(opacityOf('Active')).toBe('0');
	});

	it('shows a pin icon on tabs that have pinned options', async () => {
		await page.render(
			<Harness initialValue={[entry({ field: 'workflow', operator: 'IN', pinned: ['deploy'] })]} />,
		);

		await expect.element(tab('Workflow').getByRole('img', { name: 'Pinned' })).toBeVisible();
		await expect.element(tab('Status').getByRole('img', { name: 'Pinned' })).not.toBeInTheDocument();

		await pinToggle('Draft').click();

		await expect.element(tab('Status').getByRole('img', { name: 'Pinned' })).toBeVisible();
	});

	it('shows the checked count on the tab, and no badge at zero', async () => {
		await page.render(<Harness initialValue={[entry({ field: 'status', selected: ['active', 'draft'] })]} />);

		await expect.element(tab('Status')).toHaveAccessibleName('Status 2 selected');
		await expect.element(tab('Workflow')).toHaveAccessibleName('Workflow');

		await optionCheckbox('Active').click();
		await expect.element(tab('Status')).toHaveAccessibleName('Status 1 selected');

		await optionCheckbox('Draft').click();
		await expect.element(tab('Status')).toHaveAccessibleName('Status');
	});

	it('words the checked count by the locale', async () => {
		await page.render(
			<Harness
				initialValue={[entry({ field: 'status', selected: ['active'], pinned: ['draft'] })]}
				locale={{ selectedCount: (count) => `${String(count)} checked`, pinned: 'Has pins' }}
			/>,
		);

		await expect.element(tab('Status')).toHaveAccessibleName('Status 1 checked Has pins');
	});

	it('appends a materialized entry for a field without one', async () => {
		const onChange = vi.fn();
		const workflow = entry({ field: 'workflow', operator: 'IN', selected: ['deploy'] });
		await page.render(<Harness initialValue={[workflow]} onChange={onChange} />);

		await optionCheckbox('Pending').click();

		const changed = entry({ field: 'status', selected: ['pending'] });

		expect(onChange).toHaveBeenCalledExactlyOnceWith(changed, [workflow, changed]);
	});

	it('replaces the existing entry in place', async () => {
		const onChange = vi.fn();
		const status = entry({ field: 'status', operator: '!=', selected: ['draft'], pinned: ['active'] });
		const result = entry({ field: 'result', selected: ['failed'] });
		await page.render(<Harness initialValue={[status, result]} onChange={onChange} />);

		await optionCheckbox('Pending').click();

		const changed = { ...status, selected: ['draft', 'pending'] };

		expect(onChange).toHaveBeenCalledExactlyOnceWith(changed, [changed, result]);
	});

	it('saves the current value and requests close', async () => {
		const onSave = vi.fn();
		const onOpenChange = vi.fn();
		await page.render(<Harness onSave={onSave} onOpenChange={onOpenChange} />);

		await optionCheckbox('Active').click();
		await page.getByRole('button', { name: 'Save filters' }).click();

		expect(onSave).toHaveBeenCalledExactlyOnceWith([entry({ field: 'status', selected: ['active'] })]);
		expect(onOpenChange).toHaveBeenCalledExactlyOnceWith(false);
		await expect.element(dialog()).not.toBeInTheDocument();
	});

	it('closes from the close button without saving', async () => {
		const onSave = vi.fn();
		const onOpenChange = vi.fn();
		await page.render(<Harness onSave={onSave} onOpenChange={onOpenChange} />);

		await page.getByRole('button', { name: 'Close' }).click();

		expect(onOpenChange).toHaveBeenCalledExactlyOnceWith(false);
		expect(onSave).not.toHaveBeenCalled();
		await expect.element(dialog()).not.toBeInTheDocument();
	});

	it('closes on an outside click without saving', async () => {
		const onSave = vi.fn();
		const onOpenChange = vi.fn();
		await page.render(<Harness onSave={onSave} onOpenChange={onOpenChange} />);

		await expect.element(dialog()).toBeVisible();
		// The open modal disables pointer events outside it, backdrop included, so a click in the
		// viewport corner lands on <html> — outside the dialog, as a real click would.
		await page.elementLocator(document.documentElement).click({ position: { x: 1, y: 1 } });

		expect(onOpenChange).toHaveBeenCalledExactlyOnceWith(false);
		expect(onSave).not.toHaveBeenCalled();
		await expect.element(dialog()).not.toBeInTheDocument();
	});

	it('closes on Escape without saving', async () => {
		const onSave = vi.fn();
		const onOpenChange = vi.fn();
		await page.render(<Harness onSave={onSave} onOpenChange={onOpenChange} />);

		await expect.element(dialog()).toBeVisible();
		await userEvent.keyboard('{Escape}');

		expect(onOpenChange).toHaveBeenCalledExactlyOnceWith(false);
		expect(onSave).not.toHaveBeenCalled();
		await expect.element(dialog()).not.toBeInTheDocument();
	});
});

const PARENTS = tabOf({
	type: 'number',
	id: 'parents',
	label: 'Parents',
	operators: [
		{ value: '=', label: 'equals', symbol: '=' },
		{ value: '>', label: 'greater than', symbol: '>' },
	],
});
const LAST_RUN = tabOf({
	type: 'date',
	id: 'lastRun',
	label: 'Last run',
	operators: [
		{ value: '=', label: 'is', symbol: '=' },
		{ value: '>', label: 'after', symbol: '>' },
	],
	presets: [
		{ value: 'today', label: 'Today' },
		{ value: 'last7Days', label: 'Last 7 days' },
	],
});
const INPUT_NAME: DsFiltersBarFiltersDialogTab = {
	id: 'input.name',
	field: 'input',
	subfield: 'name',
	label: 'Input › Name',
	schema: { type: 'text', id: 'name', label: 'Name', operators: [{ value: '~', label: 'contains' }] },
};

const OPEN_RANGE = { from: null, to: null };

describe('DsFiltersBar.FiltersDialog other field types', () => {
	it('edits a compound subfield as text, labelled by its path', async () => {
		const onSave = vi.fn();
		await page.render(<Harness tabs={[INPUT_NAME]} onSave={onSave} />);

		await expect.element(tab('Input › Name')).toHaveAttribute('aria-selected', 'true');
		await page.getByRole('textbox', { name: 'Input › Name value' }).fill('WF456');
		await page.getByRole('button', { name: 'Save filters' }).click();

		expect(onSave).toHaveBeenCalledExactlyOnceWith([
			{ type: 'text', field: 'input', subfield: 'name', operator: '~', text: 'WF456' },
		]);
	});

	it('edits a number with one input, and a range after picking between', async () => {
		const onChange = vi.fn();
		await page.render(<Harness tabs={[PARENTS]} onChange={onChange} />);

		await page.getByRole('spinbutton', { name: 'Parents value' }).fill('3');

		expect(onChange).toHaveBeenLastCalledWith(
			{ type: 'number', field: 'parents', operator: '=', value: 3, range: OPEN_RANGE },
			expect.anything(),
		);

		await operatorSelect().click();
		await page.getByRole('option', { name: 'Parents (between)' }).click();
		await page.getByRole('spinbutton', { name: 'Parents from' }).fill('1');
		await page.getByRole('spinbutton', { name: 'Parents to' }).fill('5');

		expect(onChange).toHaveBeenLastCalledWith(
			expect.objectContaining({ operator: 'between', range: { from: 1, to: 5 } }),
			expect.anything(),
		);
	});

	it('picks a date preset, clearing the date, and offers between on date fields', async () => {
		const onChange = vi.fn();
		await page.render(
			<Harness
				tabs={[LAST_RUN]}
				initialValue={[
					{
						type: 'date',
						field: 'lastRun',
						operator: '>',
						preset: null,
						date: '2026-09-13',
						range: OPEN_RANGE,
					},
				]}
				onChange={onChange}
			/>,
		);

		await page.getByText('Last 7 days', { exact: true }).click();

		expect(onChange).toHaveBeenLastCalledWith(
			{ type: 'date', field: 'lastRun', operator: '>', preset: 'last7Days', date: null, range: OPEN_RANGE },
			expect.anything(),
		);
		await expect.element(page.getByRole('radio', { name: 'Last 7 days' })).toBeChecked();

		await operatorSelect().click();

		await expect.element(page.getByRole('option', { name: 'Last run (between)' })).toBeVisible();
	});

	it('moves a preset picked under between to equals, so it saves', async () => {
		const onSave = vi.fn();
		await page.render(
			<Harness
				tabs={[LAST_RUN]}
				initialValue={[
					{
						type: 'date',
						field: 'lastRun',
						operator: 'between',
						preset: null,
						date: null,
						range: { from: '2026-09-01', to: '2026-09-30' },
					},
				]}
				onSave={onSave}
			/>,
		);

		await page.getByText('Last 7 days', { exact: true }).click();
		await page.getByRole('button', { name: 'Save filters' }).click();

		expect(onSave).toHaveBeenCalledExactlyOnceWith([
			{ type: 'date', field: 'lastRun', operator: '=', preset: 'last7Days', date: null, range: OPEN_RANGE },
		]);
	});

	it('shows a count of one on a scalar tab with a value', async () => {
		await page.render(
			<Harness
				tabs={[TABS[0] as DsFiltersBarFiltersDialogTab, PARENTS]}
				initialValue={[{ type: 'number', field: 'parents', operator: '>', value: 2, range: OPEN_RANGE }]}
			/>,
		);

		await expect.element(tab('Parents')).toHaveAccessibleName('Parents 1 selected');
	});

	it('shows no pins on a compound subfield', async () => {
		const subfield: DsFiltersBarFiltersDialogTab = {
			id: 'output.status',
			field: 'output',
			subfield: 'status',
			label: 'Output › Status',
			schema: STATUS,
		};

		await page.render(<Harness tabs={[subfield]} />);

		await expect.element(optionCheckbox('Active')).toBeVisible();
		await expect.element(pinToggle('Active')).not.toBeInTheDocument();
	});
});
