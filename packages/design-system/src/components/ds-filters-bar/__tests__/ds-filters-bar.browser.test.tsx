import { createRef, useState, type ComponentProps } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type {
	DsFilterCondition,
	DsFilterField,
	DsFilterFieldCondition,
	DsFilterOperatorValue,
	DsFilterPin,
	DsFiltersBarRootProps,
} from '../ds-filters-bar.types';

// A probe drives the shared context directly, independent of the parts' UI.
const Probe = () => {
	const bar = useDsFiltersBarContext();

	return (
		<div>
			<output aria-label="conditions">{bar.conditions.map((condition) => condition.id).join(',')}</output>
			<output aria-label="query">{String(bar.query)}</output>
			<output aria-label="query text">{bar.queryText}</output>
			<output aria-label="locked">{bar.lockedViews.join(',')}</output>
			<output aria-label="empty">{String(bar.isEmpty)}</output>
			<output aria-label="expanded">{String(bar.expanded)}</output>
			<output aria-label="view">{bar.view}</output>
			<button type="button" onClick={() => bar.addCondition(SEARCH)}>
				add
			</button>
			<button type="button" onClick={() => bar.updateCondition({ ...STATUS, operator: '!=' })}>
				update
			</button>
			<button type="button" onClick={() => bar.removeCondition(STATUS.id)}>
				remove
			</button>
			<button type="button" onClick={() => bar.setQuery('status = "Active"')}>
				query
			</button>
			<button type="button" onClick={() => bar.setQuery('  ')}>
				blank query
			</button>
			<button type="button" onClick={bar.clear}>
				clear
			</button>
			<button type="button" onClick={() => bar.setExpanded(!bar.expanded)}>
				toggle
			</button>
			<button type="button" onClick={() => bar.setView('advanced')}>
				advanced
			</button>
		</div>
	);
};

const STATUS: DsFilterFieldCondition = {
	kind: 'field',
	id: 'status-1',
	field: 'status',
	operator: '=',
	value: 'active',
};
const SEARCH: DsFilterCondition = { kind: 'search', id: 'search-1', text: 'AAA' };

const renderBar = (props: Omit<DsFiltersBarRootProps, 'children'> = {}) =>
	page.render(
		<DsFiltersBar.Root {...props}>
			<Probe />
		</DsFiltersBar.Root>,
	);

const output = (name: string) => page.getByRole('status', { name });

describe('DsFiltersBar filter document', () => {
	it('adds, updates and removes conditions when uncontrolled', async () => {
		await renderBar({ defaultConditions: [STATUS] });

		await page.getByRole('button', { name: 'add' }).click();
		await expect.element(output('conditions')).toHaveTextContent('status-1,search-1');

		await page.getByRole('button', { name: 'remove' }).click();
		await expect.element(output('conditions')).toHaveTextContent('search-1');
	});

	it('reports every change while uncontrolled', async () => {
		const onConditionsChange = vi.fn();
		const onQueryChange = vi.fn();
		const onExpandedChange = vi.fn();
		const onViewChange = vi.fn();

		await renderBar({
			defaultConditions: [STATUS],
			onConditionsChange,
			onQueryChange,
			onExpandedChange,
			onViewChange,
		});

		await page.getByRole('button', { name: 'add' }).click();
		await page.getByRole('button', { name: 'query', exact: true }).click();
		await page.getByRole('button', { name: 'toggle' }).click();
		await page.getByRole('button', { name: 'advanced' }).click();

		expect(onConditionsChange).toHaveBeenCalledExactlyOnceWith([STATUS, SEARCH]);
		expect(onQueryChange).toHaveBeenCalledExactlyOnceWith('status = "Active"');
		expect(onExpandedChange).toHaveBeenCalledExactlyOnceWith(true);
		expect(onViewChange).toHaveBeenCalledExactlyOnceWith('advanced');
		await expect.element(output('conditions')).toHaveTextContent('status-1,search-1');
		await expect.element(output('expanded')).toHaveTextContent('true');
	});

	it('reports the next conditions and keeps the controlled value', async () => {
		const onConditionsChange = vi.fn();

		await renderBar({ conditions: [STATUS], onConditionsChange });

		await page.getByRole('button', { name: 'update' }).click();

		expect(onConditionsChange).toHaveBeenCalledWith([{ ...STATUS, operator: '!=' }]);
		await expect.element(output('conditions')).toHaveTextContent('status-1');
	});

	it('clears conditions and drops the query but reports each change', async () => {
		const onConditionsChange = vi.fn();
		const onQueryChange = vi.fn();

		await renderBar({ conditions: [STATUS], query: 'x', onConditionsChange, onQueryChange });

		await page.getByRole('button', { name: 'clear' }).click();

		expect(onConditionsChange).toHaveBeenCalledWith([]);
		expect(onQueryChange).toHaveBeenCalledWith(null);
	});

	it('is empty only without conditions and without an edited query', async () => {
		await renderBar();

		await expect.element(output('empty')).toHaveTextContent('true');

		await page.getByRole('button', { name: 'query', exact: true }).click();
		await expect.element(output('empty')).toHaveTextContent('false');

		await page.getByRole('button', { name: 'clear' }).click();
		await expect.element(output('empty')).toHaveTextContent('true');
	});
});

describe('DsFiltersBar query source', () => {
	it('shows the conditions in the query language while no query is set', async () => {
		await renderBar({ defaultConditions: [STATUS, SEARCH] });

		await expect.element(output('query')).toHaveTextContent('null');
		await expect.element(output('query text')).toHaveTextContent('status = "active" AND "AAA"');
		await expect.element(output('locked')).toHaveTextContent('');
	});

	it('makes a set query the source and locks the filters and builder views', async () => {
		await renderBar({ defaultConditions: [STATUS] });

		await page.getByRole('button', { name: 'query', exact: true }).click();

		await expect.element(output('query text')).toHaveTextContent('status = "Active"');
		await expect.element(output('locked')).toHaveTextContent('filters,builder');
	});

	it('hands control back to the conditions for a blank query', async () => {
		const onQueryChange = vi.fn();

		await renderBar({ query: 'x', onQueryChange });

		await page.getByRole('button', { name: 'blank query' }).click();

		expect(onQueryChange).toHaveBeenCalledWith(null);
	});
});

describe('DsFiltersBar UI state', () => {
	it('starts collapsed on the filters view', async () => {
		await renderBar();

		await expect.element(output('expanded')).toHaveTextContent('false');
		await expect.element(output('view')).toHaveTextContent('filters');
	});

	it('toggles expanded and switches view when uncontrolled', async () => {
		await renderBar();

		await page.getByRole('button', { name: 'toggle' }).click();
		await page.getByRole('button', { name: 'advanced' }).click();

		await expect.element(output('expanded')).toHaveTextContent('true');
		await expect.element(output('view')).toHaveTextContent('advanced');
	});

	it('reports expanded and view changes when controlled', async () => {
		const onExpandedChange = vi.fn();
		const onViewChange = vi.fn();

		await renderBar({ expanded: false, view: 'filters', onExpandedChange, onViewChange });

		await page.getByRole('button', { name: 'toggle' }).click();
		await page.getByRole('button', { name: 'advanced' }).click();

		expect(onExpandedChange).toHaveBeenCalledWith(true);
		expect(onViewChange).toHaveBeenCalledWith('advanced');
		await expect.element(output('expanded')).toHaveTextContent('false');
		await expect.element(output('view')).toHaveTextContent('filters');
	});

	it('throws when a part is used outside Root', async () => {
		const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);

		await expect(page.render(<DsFiltersBar.Summary />)).rejects.toThrow(
			'DsFiltersBar compound components must be used within DsFiltersBar.Root',
		);

		consoleError.mockRestore();
	});
});

describe('DsFiltersBar layout', () => {
	it('renders a region named by the default label', async () => {
		await renderBar();

		await expect.element(page.getByRole('region', { name: 'Filters' })).toBeInTheDocument();
	});

	it('names the region by a custom label and forwards ref and className', async () => {
		const ref = createRef<HTMLDivElement>();

		await renderBar({ locale: { label: 'Device filters' }, ref, className: 'custom' });

		const region = page.getByRole('region', { name: 'Device filters' });

		await expect.element(region).toHaveClass('custom');
		expect(ref.current).toBe(region.element());
	});

	it('shows and hides the toolbar as expanded toggles', async () => {
		await page.render(
			<DsFiltersBar.Root>
				<Probe />
				<DsFiltersBar.Toolbar>
					<button type="button">add filter</button>
				</DsFiltersBar.Toolbar>
			</DsFiltersBar.Root>,
		);

		const addFilter = page.getByRole('button', { name: 'add filter' });

		await expect.element(addFilter).not.toBeInTheDocument();

		await page.getByRole('button', { name: 'toggle' }).click();
		await expect.element(addFilter).toBeInTheDocument();

		await page.getByRole('button', { name: 'toggle' }).click();
		await expect.element(addFilter).not.toBeInTheDocument();
	});
});

const DIALOG_FIELDS: ReadonlyArray<DsFilterField> = [
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
			{ value: 'deprecated', label: 'Deprecated' },
			{ value: 'pending', label: 'Pending' },
			{ value: 'draft', label: 'Draft' },
		],
	},
	{
		type: 'enum',
		id: 'workflow',
		label: 'Workflow',
		operators: [{ value: 'IN', label: 'is any of' }],
		options: [
			{ value: 'deploy', label: 'Deploy' },
			{ value: 'backup', label: 'Backup' },
		],
	},
	{
		type: 'number',
		id: 'parents',
		label: 'Parents',
		operators: [{ value: '>', label: 'greater than', symbol: '>' }],
	},
	{
		type: 'enum',
		id: 'trigger',
		label: 'Trigger',
		operators: [{ value: '=', label: 'equals', symbol: '=' }],
		options: [
			{ value: 'manual', label: 'Manual' },
			{ value: 'scheduled', label: 'Scheduled' },
		],
	},
];

const SEARCH_CONDITION: DsFilterCondition = { kind: 'search', id: 'search-1', text: 'router' };
const PARENTS_CONDITION: DsFilterCondition = {
	kind: 'field',
	id: 'parents-1',
	field: 'parents',
	operator: '>',
	value: 3,
};
const STATUS_CONDITION: DsFilterCondition = {
	kind: 'field',
	id: 'status-1',
	field: 'status',
	operator: '=',
	value: ['active'],
};

// Saving mints ids for new conditions, so only their shape is asserted.
const newEnumCondition = (
	field: string,
	operator: DsFilterOperatorValue,
	value: ReadonlyArray<string>,
): DsFilterCondition => ({
	kind: 'field',
	id: expect.any(String) as string,
	field,
	operator,
	value,
});

interface ConditionsBarProps extends Omit<DsFiltersBarRootProps, 'children'> {
	conditionsLocale?: ComponentProps<typeof DsFiltersBar.Conditions>['locale'];
}

const ConditionsBar = ({ conditionsLocale, ...props }: ConditionsBarProps) => (
	<DsFiltersBar.Root defaultExpanded fields={DIALOG_FIELDS} {...props}>
		<DsFiltersBar.Toolbar>
			<DsFiltersBar.Conditions locale={conditionsLocale} />
		</DsFiltersBar.Toolbar>
	</DsFiltersBar.Root>
);

interface ControlledConditionsBarProps {
	initialConditions?: ReadonlyArray<DsFilterCondition>;
	initialPins?: ReadonlyArray<DsFilterPin>;
	onConditionsChange: (conditions: ReadonlyArray<DsFilterCondition>) => void;
	onPinsChange: (pins: ReadonlyArray<DsFilterPin>) => void;
}

// Holds the document outside the bar to cover the controlled path.
const ControlledConditionsBar = ({
	initialConditions = [],
	initialPins = [],
	onConditionsChange,
	onPinsChange,
}: ControlledConditionsBarProps) => {
	const [conditions, setConditions] = useState(initialConditions);
	const [pins, setPins] = useState(initialPins);

	return (
		<ConditionsBar
			conditions={conditions}
			pins={pins}
			onConditionsChange={(next) => {
				onConditionsChange(next);
				setConditions(next);
			}}
			onPinsChange={(next) => {
				onPinsChange(next);
				setPins(next);
			}}
		/>
	);
};

const addFilterButton = (name = 'Add filter') => page.getByRole('button', { name, exact: true });
const filtersDialog = (name = 'Filters') => page.getByRole('dialog', { name });
// A tab's name is its field label, followed by the checked count and pin indicator when present.
const fieldTab = (label: string) => page.getByRole('tab', { name: new RegExp(`^${label}(\\s|$)`) });
const operatorSelect = () => page.getByRole('combobox', { name: 'Operator' });
const optionCheckbox = (name: string) => page.getByRole('checkbox', { name, exact: true });
const pinToggle = (name: string) => page.getByRole('button', { name: `Pin ${name}`, exact: true });

const pickOperator = async (name: string) => {
	await operatorSelect().click();
	await page.getByRole('option', { name, exact: true }).click();
};

const openFiltersDialog = async () => {
	await addFilterButton().click();
	await expect.element(filtersDialog()).toBeVisible();
};

const saveFilters = () => page.getByRole('button', { name: 'Save filters', exact: true }).click();

// The open modal disables pointer events outside it, backdrop included, so a click in the
// viewport corner lands on <html> — outside the dialog, as a real click would.
const clickOutsideDialog = () =>
	page.elementLocator(document.documentElement).click({ position: { x: 1, y: 1 } });

const closeWays = [
	{ way: 'the close button', close: () => page.getByRole('button', { name: 'Close', exact: true }).click() },
	{ way: 'Escape', close: () => userEvent.keyboard('{Escape}') },
	{ way: 'an outside click', close: clickOutsideDialog },
];

describe('DsFiltersBar.Conditions add filter', () => {
	it('renders an icon-only button named by the default locale', async () => {
		await page.render(<ConditionsBar />);

		await expect.element(addFilterButton()).toHaveAccessibleName('Add filter');
		await expect.element(page.getByText('Add filter')).not.toBeInTheDocument();
		await expect.element(filtersDialog()).not.toBeInTheDocument();
	});

	it('names the button by a custom locale', async () => {
		await page.render(<ConditionsBar conditionsLocale={{ addFilter: 'New filter' }} />);

		await expect.element(addFilterButton('New filter')).toBeVisible();
		await expect.element(addFilterButton()).not.toBeInTheDocument();
	});

	it('forwards className and style to its wrapper', async () => {
		await page.render(
			<DsFiltersBar.Root defaultExpanded>
				<DsFiltersBar.Toolbar>
					<DsFiltersBar.Conditions className="custom" style={{ marginLeft: '3px' }} />
				</DsFiltersBar.Toolbar>
			</DsFiltersBar.Root>,
		);

		const wrapper = addFilterButton().element().parentElement;

		expect(wrapper).toHaveClass('custom');
		expect(wrapper).toHaveStyle({ marginLeft: '3px' });
	});
});

describe('DsFiltersBar.Conditions filters dialog', () => {
	it('opens a dialog with one tab per field, in fields order', async () => {
		await page.render(<ConditionsBar defaultConditions={[SEARCH_CONDITION, PARENTS_CONDITION]} />);

		await addFilterButton().click();

		await expect.element(filtersDialog()).toBeVisible();

		const tabs = filtersDialog().getByRole('tab').elements();

		// Each tab's first node is its label; a count follows on a tab with a value.
		expect(tabs.map((element) => element.firstChild?.textContent)).toEqual([
			'Status',
			'Workflow',
			'Parents',
			'Trigger',
		]);
	});

	it('titles the dialog and its save button by the locale', async () => {
		await page.render(
			<ConditionsBar conditionsLocale={{ filtersDialogTitle: 'Refine', saveFilters: 'Apply' }} />,
		);

		await addFilterButton().click();

		await expect.element(filtersDialog('Refine')).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Apply', exact: true })).toBeVisible();
	});

	it('passes the other dialog strings through the locale', async () => {
		await page.render(
			<ConditionsBar
				conditionsLocale={{
					filtersDialog: { close: 'Dismiss', operator: 'Match', search: (label) => `Find in ${label}` },
				}}
			/>,
		);

		await addFilterButton().click();

		await expect.element(page.getByRole('button', { name: 'Dismiss', exact: true })).toBeVisible();
		await expect.element(page.getByRole('combobox', { name: 'Match' })).toBeVisible();
		await expect.element(page.getByRole('textbox', { name: 'Find in Status' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Save filters', exact: true })).toBeVisible();
	});

	it('saves one enum condition per field with checked values and the draft pins, then closes', async () => {
		const onConditionsChange = vi.fn();
		const onPinsChange = vi.fn();

		await page.render(
			<ControlledConditionsBar onConditionsChange={onConditionsChange} onPinsChange={onPinsChange} />,
		);

		await openFiltersDialog();
		await pickOperator('Status ≠ (not equals)');
		await optionCheckbox('Active').click();
		await optionCheckbox('Pending').click();
		await pinToggle('Deprecated').click();
		await fieldTab('Trigger').click();
		await optionCheckbox('Manual').click();
		await fieldTab('Workflow').click();
		await pinToggle('Backup').click();

		expect(onConditionsChange).not.toHaveBeenCalled();
		expect(onPinsChange).not.toHaveBeenCalled();

		await saveFilters();

		expect(onConditionsChange).toHaveBeenCalledExactlyOnceWith([
			newEnumCondition('status', '!=', ['active', 'pending']),
			newEnumCondition('trigger', '=', ['manual']),
		]);
		expect(onPinsChange).toHaveBeenCalledExactlyOnceWith([
			{ field: 'status', value: 'deprecated' },
			{ field: 'workflow', value: 'backup' },
		]);
		await expect.element(filtersDialog()).not.toBeInTheDocument();
	});

	it('leaves conditions the dialog does not produce untouched on save', async () => {
		const onConditionsChange = vi.fn();

		await page.render(
			<ControlledConditionsBar
				initialConditions={[SEARCH_CONDITION, STATUS_CONDITION, PARENTS_CONDITION]}
				onConditionsChange={onConditionsChange}
				onPinsChange={vi.fn()}
			/>,
		);

		await openFiltersDialog();
		await fieldTab('Workflow').click();
		await optionCheckbox('Deploy').click();
		await saveFilters();

		expect(onConditionsChange).toHaveBeenCalledExactlyOnceWith([
			SEARCH_CONDITION,
			STATUS_CONDITION,
			PARENTS_CONDITION,
			newEnumCondition('workflow', 'IN', ['deploy']),
		]);
	});

	it('seeds the dialog from the existing conditions and pins', async () => {
		await page.render(
			<ConditionsBar
				defaultConditions={[
					SEARCH_CONDITION,
					{
						kind: 'field',
						id: 'status-2',
						field: 'status',
						operator: '!=',
						value: ['deprecated', 'pending'],
					},
				]}
				defaultPins={[
					{ field: 'status', value: 'draft' },
					{ field: 'workflow', value: 'backup' },
				]}
			/>,
		);

		await openFiltersDialog();

		await expect.element(fieldTab('Status')).toHaveAccessibleName('Status 2 selected Pinned');
		await expect.element(operatorSelect()).toMatchTextContent('Status ≠ (not equals)');
		await expect.element(optionCheckbox('Deprecated')).toBeChecked();
		await expect.element(optionCheckbox('Pending')).toBeChecked();
		await expect.element(optionCheckbox('Active')).not.toBeChecked();
		await expect.element(pinToggle('Draft')).toHaveAttribute('aria-pressed', 'true');
		await expect.element(pinToggle('Active')).toHaveAttribute('aria-pressed', 'false');
		await expect.element(fieldTab('Workflow').getByRole('img', { name: 'Pinned' })).toBeVisible();

		await fieldTab('Workflow').click();

		await expect.element(pinToggle('Backup')).toHaveAttribute('aria-pressed', 'true');
		await expect.element(pinToggle('Deploy')).toHaveAttribute('aria-pressed', 'false');
	});

	it('reports the save and shows it when reopened while uncontrolled', async () => {
		const onConditionsChange = vi.fn();
		const onPinsChange = vi.fn();

		await page.render(<ConditionsBar onConditionsChange={onConditionsChange} onPinsChange={onPinsChange} />);

		await openFiltersDialog();
		await pickOperator('Status ≠ (not equals)');
		await optionCheckbox('Draft').click();
		await pinToggle('Pending').click();
		await saveFilters();
		await expect.element(filtersDialog()).not.toBeInTheDocument();

		expect(onConditionsChange).toHaveBeenCalledExactlyOnceWith([newEnumCondition('status', '!=', ['draft'])]);
		expect(onPinsChange).toHaveBeenCalledExactlyOnceWith([{ field: 'status', value: 'pending' }]);

		await openFiltersDialog();

		await expect.element(fieldTab('Status')).toHaveAccessibleName('Status 1 selected Pinned');
		await expect.element(operatorSelect()).toMatchTextContent('Status ≠ (not equals)');
		await expect.element(optionCheckbox('Draft')).toBeChecked();
		await expect.element(optionCheckbox('Active')).not.toBeChecked();
		await expect.element(pinToggle('Pending')).toHaveAttribute('aria-pressed', 'true');
	});

	it.each(closeWays)('discards the draft when closed with $way', async ({ close }) => {
		const onConditionsChange = vi.fn();
		const onPinsChange = vi.fn();

		await page.render(
			<ControlledConditionsBar
				initialConditions={[STATUS_CONDITION]}
				initialPins={[{ field: 'status', value: 'pending' }]}
				onConditionsChange={onConditionsChange}
				onPinsChange={onPinsChange}
			/>,
		);

		await openFiltersDialog();
		await pickOperator('Status ≠ (not equals)');
		await optionCheckbox('Active').click();
		await optionCheckbox('Deprecated').click();
		await pinToggle('Active').click();
		await pinToggle('Pending').click();

		await close();

		await expect.element(filtersDialog()).not.toBeInTheDocument();
		expect(onConditionsChange).not.toHaveBeenCalled();
		expect(onPinsChange).not.toHaveBeenCalled();

		await openFiltersDialog();

		await expect.element(operatorSelect()).toMatchTextContent('Status = (equals)');
		await expect.element(optionCheckbox('Active')).toBeChecked();
		await expect.element(optionCheckbox('Deprecated')).not.toBeChecked();
		await expect.element(pinToggle('Active')).toHaveAttribute('aria-pressed', 'false');
		await expect.element(pinToggle('Pending')).toHaveAttribute('aria-pressed', 'true');
	});
});
