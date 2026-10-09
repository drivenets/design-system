import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import type {
	DsFilterCondition,
	DsFilterDocument,
	DsFilterField,
	DsFiltersBarProps,
} from '../ds-filters-bar.types';

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [
			{ value: '=', label: 'equals', symbol: '=' },
			{ value: '!=', label: 'not equals', symbol: '≠' },
		],
		options: [
			{ value: 'active', label: 'Active' },
			{ value: 'pending', label: 'Pending' },
		],
	},
	{
		type: 'enum',
		id: 'trigger',
		label: 'Trigger',
		operators: [{ value: '=', label: 'equals', symbol: '=' }],
		options: [{ value: 'manual', label: 'Manual' }],
	},
	{
		type: 'number',
		id: 'parents',
		label: 'Parents',
		operators: [
			{ value: '=', label: 'equals', symbol: '=' },
			{ value: '>', label: 'greater than', symbol: '>' },
		],
	},
	{
		type: 'compound',
		id: 'input',
		label: 'Input',
		subfields: [
			{
				type: 'text',
				id: 'name',
				label: 'Name',
				operators: [
					{ value: '~', label: 'contains' },
					{ value: '!~', label: 'does not contain' },
				],
			},
		],
	},
];

const STATUS: DsFilterCondition = {
	kind: 'field',
	id: 'status-1',
	field: 'status',
	operator: '!=',
	value: ['active', 'pending'],
};
const TRIGGER: DsFilterCondition = {
	kind: 'field',
	id: 'trigger-1',
	field: 'trigger',
	operator: '=',
	value: ['manual'],
};
const PARENTS: DsFilterCondition = {
	kind: 'field',
	id: 'parents-1',
	field: 'parents',
	operator: '>',
	value: 3,
};
const PARENTS_RANGE: DsFilterCondition = {
	kind: 'field',
	id: 'parents-2',
	field: 'parents',
	operator: '=',
	value: { from: 1, to: 5 },
};
const INPUT_NAME: DsFilterCondition = {
	kind: 'field',
	id: 'input-1',
	field: 'input',
	subfield: 'name',
	operator: '~',
	value: 'WF456',
};
const REMOVED: DsFilterCondition = {
	kind: 'field',
	id: 'removed-1',
	field: 'owner',
	operator: '=',
	value: ['me'],
};
const AAA: DsFilterCondition = { kind: 'search', id: 'search-1', text: 'AAA' };

const OR_QUERY = 'status = "active" OR status = "pending"';

const conditions = (...items: DsFilterCondition[]): DsFilterDocument => ({ conditions: items, query: null });

const ConditionsBar = (props: DsFiltersBarProps) => (
	<DsFiltersBar defaultExpanded fields={FIELDS} {...props} />
);

const removeButton = (description: string) =>
	page.getByRole('button', { name: `Remove filter: ${description}`, exact: true });
const operatorButton = (fieldLabel: string) =>
	page.getByRole('button', { name: `${fieldLabel} operator`, exact: true });
// A chip's own name is its field path; the operator and remove buttons inside it have their own.
const chip = (label: string) => page.getByRole('button', { name: label, exact: true });
const menuItem = (name: string) => page.getByRole('menuitem', { name, exact: true });
const addFilterButton = () => page.getByRole('button', { name: 'Add filter', exact: true });
const filtersDialog = () => page.getByRole('dialog', { name: 'Filters' });
const fieldTab = (label: string) => page.getByRole('tab', { name: new RegExp(`^${label}(\\s|$)`) });

describe('DsFiltersBar filters view field chips', () => {
	it('renders one chip per condition, in document order, with the field path and value', async () => {
		await page.render(<ConditionsBar defaultValue={conditions(STATUS, AAA, INPUT_NAME)} />);

		await expect.element(chip('Status').getByText('Active, Pending', { exact: true })).toBeVisible();
		await expect.element(chip('Input › Name').getByText('WF456', { exact: true })).toBeVisible();

		const removeNames = page
			.getByRole('button', { name: /^Remove filter: / })
			.elements()
			.map((element) => element.getAttribute('aria-label'));

		expect(removeNames).toEqual([
			'Remove filter: Status not equals Active, Pending',
			'Remove filter: AAA',
			'Remove filter: Input Name contains WF456',
		]);
	});

	it('removes the condition with its remove button', async () => {
		const onValueChange = vi.fn();

		await page.render(
			<ConditionsBar defaultValue={conditions(STATUS, PARENTS)} onValueChange={onValueChange} />,
		);

		await removeButton('Status not equals Active, Pending').click();

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith(conditions(PARENTS));
		await expect.element(removeButton('Status not equals Active, Pending')).not.toBeInTheDocument();
		await expect.element(removeButton('Parents greater than 3')).toBeVisible();
	});

	it('names the remove button through the locale', async () => {
		await page.render(
			<ConditionsBar
				defaultValue={conditions(PARENTS)}
				locale={{ chips: { removeCondition: (condition) => `Drop ${condition}` } }}
			/>,
		);

		await expect
			.element(page.getByRole('button', { name: 'Drop Parents greater than 3', exact: true }))
			.toBeVisible();
	});
});

describe('DsFiltersBar filters view operator menu', () => {
	it("lists the field's operators and marks the current one", async () => {
		await page.render(<ConditionsBar defaultValue={conditions(STATUS)} />);

		await expect.element(operatorButton('Status').getByText('≠', { exact: true })).toBeVisible();

		await operatorButton('Status').click();

		const items = page.getByRole('menuitem').elements();

		// Each item's first node is its text; the check mark follows it on the current operator.
		expect(items.map((element) => element.firstChild?.textContent)).toEqual(['= (equals)', '≠ (not equals)']);
		await expect.element(menuItem('≠ (not equals)').getByText('check')).toBeVisible();
		await expect.element(menuItem('= (equals)').getByText('check')).not.toBeInTheDocument();
	});

	it('switches the operator in place, keeping the condition id and position', async () => {
		const onValueChange = vi.fn();

		await page.render(
			<ConditionsBar defaultValue={conditions(STATUS, PARENTS)} onValueChange={onValueChange} />,
		);

		await operatorButton('Status').click();
		await page.getByRole('menuitem', { name: '= (equals)' }).click();

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith(conditions({ ...STATUS, operator: '=' }, PARENTS));
		await expect.element(operatorButton('Status').getByText('=', { exact: true })).toBeVisible();
	});

	it('reports nothing when the current operator is picked again', async () => {
		const onValueChange = vi.fn();

		await page.render(<ConditionsBar defaultValue={conditions(STATUS)} onValueChange={onValueChange} />);

		await operatorButton('Status').click();
		await page.getByRole('menuitem', { name: '≠ (not equals)' }).click();

		expect(onValueChange).not.toHaveBeenCalled();
	});

	it('shows the operator token when the operator has no symbol', async () => {
		await page.render(<ConditionsBar defaultValue={conditions(INPUT_NAME)} />);

		await expect.element(operatorButton('Input Name').getByText('~', { exact: true })).toBeVisible();
	});

	it('edits a compound subfield operator, named by the field path', async () => {
		const onValueChange = vi.fn();

		await page.render(<ConditionsBar defaultValue={conditions(INPUT_NAME)} onValueChange={onValueChange} />);

		await operatorButton('Input Name').click();
		await page.getByRole('menuitem', { name: '≁ (does not contain)' }).click();

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith(conditions({ ...INPUT_NAME, operator: '!~' }));
	});

	it('words the menu button and items through the locale', async () => {
		await page.render(
			<ConditionsBar
				defaultValue={conditions(STATUS)}
				locale={{
					chips: {
						operator: (fieldLabel) => `Comparison for ${fieldLabel}`,
						operatorOption: (operator) => operator.label,
					},
				}}
			/>,
		);

		await page.getByRole('button', { name: 'Comparison for Status', exact: true }).click();

		await expect.element(page.getByRole('menuitem', { name: 'not equals', exact: true })).toBeVisible();
	});

	it('shows the operator as text when there is nothing to pick', async () => {
		await page.render(<ConditionsBar defaultValue={conditions(TRIGGER, REMOVED)} />);

		await expect.element(removeButton('Trigger equals Manual')).toBeVisible();
		await expect.element(removeButton('owner = me')).toBeVisible();
		await expect.element(operatorButton('Trigger')).not.toBeInTheDocument();
		await expect.element(operatorButton('owner')).not.toBeInTheDocument();
		expect(page.getByText('=', { exact: true }).elements()).toHaveLength(2);
	});

	it('shows no operator for a range', async () => {
		await page.render(<ConditionsBar defaultValue={conditions(PARENTS_RANGE)} />);

		await expect.element(page.getByText('1 – 5', { exact: true })).toBeVisible();
		await expect.element(operatorButton('Parents')).not.toBeInTheDocument();
		await expect.element(page.getByText('=', { exact: true })).not.toBeInTheDocument();
	});
});

describe('DsFiltersBar filters view chip click', () => {
	it('opens the filters dialog on the tab of an enum chip', async () => {
		await page.render(<ConditionsBar defaultValue={conditions(TRIGGER)} />);

		await chip('Trigger').click();

		await expect.element(filtersDialog()).toBeVisible();
		await expect.element(fieldTab('Trigger')).toHaveAttribute('aria-selected', 'true');
	});

	it('opens the dialog on the first tab from the add button after a chip opened it', async () => {
		await page.render(<ConditionsBar defaultValue={conditions(TRIGGER)} />);

		await chip('Trigger').click();
		await page.getByRole('button', { name: 'Close' }).click();
		await addFilterButton().click();

		await expect.element(fieldTab('Status')).toHaveAttribute('aria-selected', 'true');
	});

	it('opens the dialog on the tab of a number, range or compound subfield chip', async () => {
		await page.render(<ConditionsBar defaultValue={conditions(PARENTS_RANGE, INPUT_NAME)} />);

		await chip('Parents').click();

		await expect.element(fieldTab('Parents')).toHaveAttribute('aria-selected', 'true');
		await expect.element(page.getByRole('spinbutton', { name: 'Parents from' })).toHaveValue('1');

		await page.getByRole('button', { name: 'Close' }).click();
		// The middle of this chip is its operator menu, so click the label.
		await chip('Input › Name').getByText('Input › Name', { exact: true }).click();

		await expect.element(fieldTab('Input › Name')).toHaveAttribute('aria-selected', 'true');
		await expect.element(page.getByRole('textbox', { name: 'Input › Name value' })).toHaveValue('WF456');
	});

	it('saves an edited range back in place', async () => {
		const onValueChange = vi.fn();

		await page.render(
			<ConditionsBar defaultValue={conditions(STATUS, PARENTS_RANGE)} onValueChange={onValueChange} />,
		);

		await chip('Parents').click();
		await page.getByRole('spinbutton', { name: 'Parents to' }).fill('9');
		await page.getByRole('button', { name: 'Save filters' }).click();

		expect(onValueChange).toHaveBeenLastCalledWith(
			conditions(STATUS, { ...PARENTS_RANGE, value: { from: 1, to: 9 } }),
		);
	});

	it('does not open the dialog from a chip whose field is missing from fields', async () => {
		await page.render(<ConditionsBar defaultValue={conditions(TRIGGER, REMOVED)} />);

		await expect.element(chip('Trigger')).toHaveAttribute('aria-pressed', 'true');
		await expect.element(chip('owner')).not.toHaveAttribute('aria-pressed');

		await chip('owner').click();

		await expect.element(filtersDialog()).not.toBeInTheDocument();
	});
});

describe('DsFiltersBar filters view while an Advanced query is the source', () => {
	it('shows no chips and no add button until the query is cleared', async () => {
		await page.render(<ConditionsBar defaultValue={{ conditions: [STATUS, AAA], query: OR_QUERY }} />);

		await expect.element(addFilterButton()).not.toBeInTheDocument();
		await expect.element(removeButton('AAA')).not.toBeInTheDocument();
		await expect.element(removeButton('Status not equals Active, Pending')).not.toBeInTheDocument();

		await page.getByRole('button', { name: 'Clear all', exact: true }).click();

		await expect.element(addFilterButton()).toBeVisible();
	});

	it('closes an open filters dialog when a query takes over', async () => {
		const onValueChange = vi.fn();
		const { rerender } = await page.render(
			<ConditionsBar value={conditions(TRIGGER)} onValueChange={onValueChange} />,
		);

		await addFilterButton().click();
		await expect.element(filtersDialog()).toBeVisible();

		await rerender(
			<ConditionsBar value={{ conditions: [TRIGGER], query: OR_QUERY }} onValueChange={onValueChange} />,
		);
		await rerender(<ConditionsBar value={conditions(TRIGGER)} onValueChange={onValueChange} />);

		await expect.element(addFilterButton()).toBeVisible();
		await expect.element(filtersDialog()).not.toBeInTheDocument();
	});

	it('brings the kept conditions back once the query is dropped', async () => {
		const onValueChange = vi.fn();
		const { rerender } = await page.render(
			<ConditionsBar value={{ conditions: [STATUS], query: OR_QUERY }} onValueChange={onValueChange} />,
		);

		await expect.element(removeButton('Status not equals Active, Pending')).not.toBeInTheDocument();

		await rerender(<ConditionsBar value={conditions(STATUS)} onValueChange={onValueChange} />);

		await expect.element(removeButton('Status not equals Active, Pending')).toBeVisible();
		await expect.element(addFilterButton()).toBeVisible();
	});
});
