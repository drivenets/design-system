import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsFiltersBar } from '../../../ds-filters-bar';
import type { DsFilterCondition, DsFilterField, DsFiltersBarRootProps } from '../../../ds-filters-bar.types';
import type { DsFiltersBarBuilderLocale } from '../ds-filters-bar-builder.types';

const FIELDS: ReadonlyArray<DsFilterField> = [
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
					{ value: '~', label: 'Contains' },
					{ value: '=', label: 'Equal' },
				],
			},
		],
	},
	{ type: 'text', id: 'output', label: 'Output', operators: [{ value: '=', label: 'Equal' }] },
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [
			{ value: '=', label: 'equals' },
			{ value: '!=', label: 'not equals', symbol: '≠' },
		],
		options: [
			{ value: 'active', label: 'Active' },
			{ value: 'pending', label: 'Pending' },
		],
	},
	{ type: 'number', id: 'parents', label: 'Parents', operators: [{ value: '>', label: 'greater than' }] },
	{
		type: 'date',
		id: 'lastRun',
		label: 'Last run',
		operators: [{ value: '=', label: 'is' }],
		presets: [{ value: 'today', label: 'Today' }],
	},
];

const INPUT_NAME: DsFilterCondition = {
	kind: 'field',
	id: 'input-1',
	field: 'input',
	subfield: 'name',
	operator: '~',
	value: 'AAA',
};
const STATUS_BOTH: DsFilterCondition = {
	kind: 'field',
	id: 'status-1',
	field: 'status',
	operator: '!=',
	value: ['active', 'pending'],
};
const SEARCH: DsFilterCondition = { kind: 'search', id: 'search-1', text: 'BBB' };

const OR_QUERY = 'status = "active" OR status = "pending"';

const dialog = () => page.getByRole('dialog', { name: 'Query builder' });
const choice = (name: string) => page.getByRole('button', { name, exact: true });
const field = () => page.getByRole('textbox', { name: 'Search field' });
const valueInput = () => page.getByRole('textbox', { name: 'Value' });
const addFilterButton = () => page.getByRole('button', { name: 'Add filter', exact: true });
// A chip's own name is its field path; the operator and remove buttons inside it have their own.
const chip = (label: string) => page.getByRole('button', { name: label, exact: true });
const removeButton = (description: string) =>
	page.getByRole('button', { name: `Remove filter: ${description}`, exact: true });
const pathSegment = (text: string) => dialog().getByText(text, { exact: true });
const viewItem = (name: string) => page.getByRole('radio', { name, exact: true });

// Ark renders the radio as a visually hidden input outside the viewport, so fire a native click
// on the element directly instead of a Playwright pointer click.
const selectView = (name: string) => {
	(viewItem(name).element() as HTMLElement).click();
};

interface HarnessProps extends Omit<DsFiltersBarRootProps, 'children'> {
	builderLocale?: DsFiltersBarBuilderLocale;
}

const Harness = ({ builderLocale, ...props }: HarnessProps) => (
	<DsFiltersBar.Root fields={FIELDS} defaultExpanded defaultView="builder" {...props}>
		<DsFiltersBar.Toolbar>
			<DsFiltersBar.Search />
			<DsFiltersBar.ViewSwitch />
			<DsFiltersBar.View value="filters">
				<DsFiltersBar.Conditions />
			</DsFiltersBar.View>
			<DsFiltersBar.View value="builder">
				<DsFiltersBar.Builder suggestedFields={['input', 'status']} locale={builderLocale} />
			</DsFiltersBar.View>
		</DsFiltersBar.Toolbar>
	</DsFiltersBar.Root>
);

// Builder outside a View, so it stays mounted while a query takes over and its own guard shows.
const UnwrappedHarness = (props: Omit<DsFiltersBarRootProps, 'children'>) => (
	<DsFiltersBar.Root fields={FIELDS} defaultExpanded {...props}>
		<DsFiltersBar.Toolbar>
			<DsFiltersBar.Builder />
		</DsFiltersBar.Toolbar>
	</DsFiltersBar.Root>
);

describe('DsFiltersBar.Builder view', () => {
	it('shows the add button and the condition chips without opening the dialog when switched to', async () => {
		const onViewChange = vi.fn();

		await page.render(
			<Harness defaultView="filters" defaultConditions={[INPUT_NAME, SEARCH]} onViewChange={onViewChange} />,
		);

		selectView('Query builder');

		await expect.element(viewItem('Query builder')).toBeChecked();
		expect(onViewChange).toHaveBeenCalledExactlyOnceWith('builder');
		await expect.element(dialog()).not.toBeInTheDocument();
		await expect.element(addFilterButton()).toBeVisible();
		await expect.element(chip('Input › Name').getByText('AAA', { exact: true })).toBeVisible();
		await expect.element(removeButton('BBB')).toBeVisible();
	});

	it('removes a condition with its chip remove button', async () => {
		const onConditionsChange = vi.fn();

		await page.render(
			<Harness defaultConditions={[INPUT_NAME, STATUS_BOTH]} onConditionsChange={onConditionsChange} />,
		);

		await removeButton('Input Name Contains AAA').click();

		expect(onConditionsChange).toHaveBeenCalledExactlyOnceWith([STATUS_BOTH]);
		await expect.element(chip('Input › Name')).not.toBeInTheDocument();
	});

	it('switches a chip operator in place', async () => {
		const onConditionsChange = vi.fn();

		await page.render(<Harness defaultConditions={[STATUS_BOTH]} onConditionsChange={onConditionsChange} />);

		await page.getByRole('button', { name: 'Status operator', exact: true }).click();
		await page.getByRole('menuitem', { name: '= (equals)', exact: true }).click();

		expect(onConditionsChange).toHaveBeenCalledExactlyOnceWith([{ ...STATUS_BOTH, operator: '=' }]);
		await expect.element(dialog()).not.toBeInTheDocument();
	});

	it('hands a search chip back to the search input instead of opening the dialog', async () => {
		await page.render(<Harness defaultConditions={[SEARCH]} />);

		await chip('BBB').click();

		await expect.element(page.getByRole('textbox', { name: 'Search' })).toHaveValue('BBB');
		await expect.element(removeButton('BBB')).not.toBeInTheDocument();
		await expect.element(dialog()).not.toBeInTheDocument();
	});
});

describe('DsFiltersBar.Builder adding a condition', () => {
	it('opens an empty dialog from the add button, offering suggested fields and searching the others', async () => {
		await page.render(<Harness defaultConditions={[INPUT_NAME]} />);

		await addFilterButton().click();

		await expect.element(dialog()).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Clear selection' })).not.toBeInTheDocument();
		await expect.element(choice('Input')).toBeVisible();
		await expect.element(choice('Status')).toBeVisible();
		await expect.element(choice('Output')).not.toBeInTheDocument();

		await field().fill('out');

		await expect.element(choice('Output')).toBeVisible();
		await expect.element(choice('Input')).not.toBeInTheDocument();
	});

	it('adds a compound condition as a chip and closes, staying in the builder view', async () => {
		const onConditionsChange = vi.fn();
		const onViewChange = vi.fn();

		await page.render(
			<Harness
				defaultConditions={[SEARCH]}
				onConditionsChange={onConditionsChange}
				onViewChange={onViewChange}
			/>,
		);

		await addFilterButton().click();
		await choice('Input').click();
		await choice('Name').click();
		await choice('Contains').click();
		await valueInput().fill('AAA');
		await choice('Save query').click();

		expect(onConditionsChange).toHaveBeenCalledOnce();
		expect(onConditionsChange.mock.calls[0]?.[0]).toEqual([
			SEARCH,
			expect.objectContaining({
				kind: 'field',
				field: 'input',
				subfield: 'name',
				operator: '~',
				value: 'AAA',
			}),
		]);
		await expect.element(dialog()).not.toBeInTheDocument();
		await expect.element(chip('Input › Name').getByText('AAA', { exact: true })).toBeVisible();
		await expect.element(viewItem('Query builder')).toBeChecked();
		expect(onViewChange).not.toHaveBeenCalled();
	});

	it('saves an enum option without asking for an operator', async () => {
		const onConditionsChange = vi.fn();

		await page.render(<Harness onConditionsChange={onConditionsChange} />);

		await addFilterButton().click();
		await choice('Status').click();

		await expect.element(choice('equals')).not.toBeInTheDocument();
		await expect.element(page.getByText('Select a value')).toBeVisible();

		await choice('Active').click();
		await choice('Save query').click();

		expect(onConditionsChange.mock.calls[0]?.[0]).toEqual([
			expect.objectContaining({ field: 'status', operator: '=', value: ['active'] }),
		]);
	});

	it('keeps save disabled until a number is complete, including when submitted with Enter', async () => {
		const onConditionsChange = vi.fn();

		await page.render(<Harness onConditionsChange={onConditionsChange} />);

		await addFilterButton().click();
		await field().fill('parents');
		await userEvent.keyboard('{Enter}');
		await choice('greater than').click();

		await valueInput().fill('12.');
		await expect.element(choice('Save query')).toBeDisabled();

		await valueInput().fill('3');
		await userEvent.keyboard('{Enter}');

		expect(onConditionsChange.mock.calls[0]?.[0]).toEqual([
			expect.objectContaining({ field: 'parents', operator: '>', value: 3 }),
		]);
		await expect.element(dialog()).not.toBeInTheDocument();
	});

	it('saves a date preset by its value', async () => {
		const onConditionsChange = vi.fn();

		await page.render(<Harness onConditionsChange={onConditionsChange} />);

		await addFilterButton().click();
		await field().fill('last');
		await choice('Last run').click();
		await choice('is').click();
		await choice('Today').click();

		await expect.element(valueInput()).toHaveValue('Today');
		await choice('Save query').click();

		expect(onConditionsChange.mock.calls[0]?.[0]).toEqual([
			expect.objectContaining({ field: 'lastRun', operator: '=', value: 'today' }),
		]);
	});
});

describe('DsFiltersBar.Builder editing a condition', () => {
	it('opens the dialog filled from a field chip and replaces that condition on save', async () => {
		const onConditionsChange = vi.fn();

		await page.render(
			<Harness defaultConditions={[INPUT_NAME, SEARCH]} onConditionsChange={onConditionsChange} />,
		);

		// The middle of this chip is its operator menu, so click the label.
		await chip('Input › Name').getByText('Input › Name', { exact: true }).click();

		await expect.element(dialog()).toBeVisible();
		for (const segment of ['Input', 'Name', 'Contains', 'AAA']) {
			await expect.element(pathSegment(segment)).toBeVisible();
		}
		await expect.element(valueInput()).toHaveValue('AAA');

		await valueInput().fill('CCC');
		await choice('Save query').click();

		expect(onConditionsChange).toHaveBeenCalledExactlyOnceWith([{ ...INPUT_NAME, value: 'CCC' }, SEARCH]);
		await expect.element(dialog()).not.toBeInTheDocument();
		await expect.element(chip('Input › Name').getByText('CCC', { exact: true })).toBeVisible();
		expect(page.getByRole('button', { name: /^Remove filter: / }).elements()).toHaveLength(2);
	});

	it('opens a chip with several enum values at the value step and replaces it on save', async () => {
		const onConditionsChange = vi.fn();

		await page.render(<Harness defaultConditions={[STATUS_BOTH]} onConditionsChange={onConditionsChange} />);

		await chip('Status').click();

		await expect.element(dialog()).toBeVisible();
		await expect.element(page.getByText('Select a value')).toBeVisible();
		await expect.element(pathSegment('Status')).toBeVisible();
		await expect.element(choice('Active')).not.toHaveAttribute('aria-pressed', 'true');
		await expect.element(choice('Save query')).toBeDisabled();

		await choice('Pending').click();
		await choice('Save query').click();

		expect(onConditionsChange).toHaveBeenCalledExactlyOnceWith([{ ...STATUS_BOTH, value: ['pending'] }]);
		await expect.element(dialog()).not.toBeInTheDocument();
		await expect.element(chip('Status').getByText('Pending', { exact: true })).toBeVisible();
		expect(page.getByRole('button', { name: /^Remove filter: / }).elements()).toHaveLength(1);
	});

	it('does not open the dialog from a chip whose field is missing from fields', async () => {
		await page.render(
			<Harness
				defaultConditions={[{ kind: 'field', id: 'gone-1', field: 'owner', operator: '=', value: ['me'] }]}
			/>,
		);

		await chip('owner').click();

		await expect.element(dialog()).not.toBeInTheDocument();
	});
});

describe('DsFiltersBar.Builder closing', () => {
	it.each([
		['the close button', () => choice('Close').click()],
		['Escape', () => userEvent.keyboard('{Escape}')],
	])('closes on %s, staying in the builder view and dropping the draft', async (_name, close) => {
		const onConditionsChange = vi.fn();
		const onViewChange = vi.fn();

		await page.render(<Harness onConditionsChange={onConditionsChange} onViewChange={onViewChange} />);

		await addFilterButton().click();
		await choice('Input').click();
		await expect.element(choice('Name')).toBeVisible();

		await close();

		await expect.element(dialog()).not.toBeInTheDocument();
		await expect.element(viewItem('Query builder')).toBeChecked();
		expect(onViewChange).not.toHaveBeenCalled();
		expect(onConditionsChange).not.toHaveBeenCalled();

		await addFilterButton().click();

		await expect.element(choice('Input')).toBeVisible();
		await expect.element(choice('Name')).not.toBeInTheDocument();
	});

	it('clears the selection in progress', async () => {
		await page.render(<Harness />);

		await addFilterButton().click();
		await choice('Input').click();
		await page.getByRole('button', { name: 'Clear selection' }).click();

		await expect.element(choice('Name')).not.toBeInTheDocument();
		await expect.element(choice('Input')).toBeVisible();
	});
});

describe('DsFiltersBar.Builder while an Advanced query is the source', () => {
	it('shows no chips and no add button', async () => {
		await page.render(<UnwrappedHarness defaultConditions={[INPUT_NAME]} defaultQuery={OR_QUERY} />);

		await expect.element(addFilterButton()).not.toBeInTheDocument();
		await expect.element(chip('Input › Name')).not.toBeInTheDocument();
	});

	it('closes an open dialog when a query takes over', async () => {
		const controlled = { conditions: [INPUT_NAME], onConditionsChange: vi.fn(), onQueryChange: vi.fn() };
		const { rerender } = await page.render(<UnwrappedHarness {...controlled} query={null} />);

		await addFilterButton().click();
		await expect.element(dialog()).toBeVisible();

		await rerender(<UnwrappedHarness {...controlled} query={OR_QUERY} />);
		await expect.element(addFilterButton()).not.toBeInTheDocument();

		await rerender(<UnwrappedHarness {...controlled} query={null} />);

		await expect.element(addFilterButton()).toBeVisible();
		await expect.element(dialog()).not.toBeInTheDocument();
	});
});

describe('DsFiltersBar.Builder locale', () => {
	it('words the dialog and the chips through the locale', async () => {
		await page.render(
			<Harness
				defaultConditions={[STATUS_BOTH]}
				builderLocale={{
					title: 'Build a condition',
					save: 'Add condition',
					close: 'Dismiss',
					addFilter: 'New condition',
					removeCondition: (condition) => `Drop ${condition}`,
					operator: (fieldLabel) => `Change ${fieldLabel} operator`,
				}}
			/>,
		);

		await expect.element(choice('Drop Status not equals Active, Pending')).toBeVisible();
		await expect.element(choice('Change Status operator')).toBeVisible();

		await choice('New condition').click();

		await expect.element(page.getByRole('dialog', { name: 'Build a condition' })).toBeVisible();
		await expect.element(choice('Add condition')).toBeVisible();
		await expect.element(choice('Dismiss')).toBeVisible();
	});
});
