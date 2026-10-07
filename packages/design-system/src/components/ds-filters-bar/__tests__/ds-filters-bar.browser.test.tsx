import { createRef, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import {
	emptyFilterDocument,
	type DsFilterCondition,
	type DsFilterDocument,
	type DsFilterField,
	type DsFilterFieldCondition,
	type DsFilterOperatorValue,
	type DsFilterPin,
	type DsFiltersBarProps,
	type DsFiltersBarSavedFiltersConfig,
	type DsFiltersBarSlotProps,
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
		type: 'number',
		id: 'latency',
		label: 'Latency',
		operators: [{ value: '>=', label: 'at least' }],
	},
];

const STATUS: DsFilterFieldCondition = {
	kind: 'field',
	id: 'status-1',
	field: 'status',
	operator: '=',
	value: ['active'],
};
const SEARCH: DsFilterCondition = { kind: 'search', id: 'search-1', text: 'AAA' };
const OR_QUERY = 'status = "active" OR status = "pending"';
const PINS: ReadonlyArray<DsFilterPin> = [{ field: 'status', value: 'active' }];

const savedFiltersConfig = (
	overrides: Partial<DsFiltersBarSavedFiltersConfig> = {},
): DsFiltersBarSavedFiltersConfig => ({
	items: [{ id: 'night', name: 'Night shift', document: { conditions: [STATUS], query: null } }],
	onSaveAs: vi.fn(() => 'new'),
	onUpdate: vi.fn(),
	onRename: vi.fn(),
	onDelete: vi.fn(),
	...overrides,
});

const region = (name = 'Filters') => page.getByRole('region', { name });
const showButton = () => page.getByRole('button', { name: 'Show filters', exact: true });
const hideButton = () => page.getByRole('button', { name: 'Hide filters', exact: true });
const searchInput = () => page.getByRole('textbox', { name: 'Search' });
const queryField = () => page.getByRole('textbox', { name: 'Advanced query' });
const addFilterButton = (name = 'Add filter') => page.getByRole('button', { name, exact: true });
const clearAllButton = () => page.getByRole('button', { name: 'Clear all', exact: true });
const saveFilterButton = () => page.getByRole('button', { name: 'Save filter', exact: true });
const savedFiltersTag = () => page.getByRole('button', { name: 'Saved filters', exact: true });
const viewSwitch = () => page.getByRole('radiogroup', { name: 'Filter view' });
const viewItem = (name: string) => page.getByRole('radio', { name, exact: true });
const pinnedGroup = (name: string) => page.getByRole('group', { name });
const removeChip = (text: string) =>
	page.getByRole('button', { name: `Remove filter: ${text}`, exact: true });

// Ark renders the radio as a visually hidden input outside the viewport, so fire a native click
// on the element directly instead of a Playwright pointer click.
const selectView = async (name: string) => {
	await expect.element(viewItem(name)).toBeInTheDocument();
	(viewItem(name).element() as HTMLElement).click();
};

const search = async (text: string) => {
	await searchInput().fill(text);
	await userEvent.keyboard('{Enter}');
};

const isBefore = (first: Element, second: Element) =>
	Boolean(first.compareDocumentPosition(second) & Node.DOCUMENT_POSITION_FOLLOWING);

// Names of the parts, sorted by where their elements sit in the document
const documentOrderOf = (parts: Record<string, Element>) =>
	Object.entries(parts)
		.sort(([, first], [, second]) => (isBefore(first, second) ? -1 : 1))
		.map(([name]) => name);

describe('DsFiltersBar composition', () => {
	it('is one component, not a namespace of parts', () => {
		for (const part of ['Root', 'Toolbar', 'Search', 'Summary', 'Conditions', 'Pinned', 'View']) {
			expect(part in DsFiltersBar).toBe(false);
		}
	});

	it('shows the summary while collapsed and the toolbar while expanded, with the pinned row in both', async () => {
		await page.render(<DsFiltersBar fields={FIELDS} defaultPins={PINS} />);

		await expect.element(region()).toMatchTextContent('View: All;');
		await expect.element(searchInput()).not.toBeInTheDocument();
		await expect.element(pinnedGroup('Status')).toBeVisible();
		expect(isBefore(page.getByText(/^View:?$/).element(), pinnedGroup('Status').element())).toBe(true);

		await showButton().click();

		await expect.element(searchInput()).toBeVisible();
		await expect.element(page.getByText(/^View:?$/)).not.toBeInTheDocument();
		await expect.element(pinnedGroup('Status')).toBeVisible();
		expect(isBefore(searchInput().element(), pinnedGroup('Status').element())).toBe(true);
	});

	it('renders the expanded toolbar in Figma order', async () => {
		await page.render(
			<DsFiltersBar
				fields={FIELDS}
				defaultExpanded
				defaultValue={{ conditions: [SEARCH], query: null }}
				savedFilters={savedFiltersConfig()}
			/>,
		);

		const parts = {
			disclosure: hideButton().element(),
			savedFilters: savedFiltersTag().element(),
			search: searchInput().element(),
			viewSwitch: viewSwitch().element(),
			addFilter: addFilterButton().element(),
			chip: removeChip('AAA').element(),
			saveFilter: saveFilterButton().element(),
			clearAll: clearAllButton().element(),
		};

		expect(documentOrderOf(parts)).toEqual(Object.keys(parts));
	});

	it('names the region by the locale and forwards ref, className and style to it', async () => {
		const ref = createRef<HTMLDivElement>();

		await page.render(
			<DsFiltersBar
				locale={{ label: 'Device filters' }}
				ref={ref}
				className="custom"
				style={{ marginLeft: '3px' }}
			/>,
		);

		const bar = region('Device filters');

		await expect.element(bar).toHaveClass('custom');
		await expect.element(bar).toHaveStyle({ marginLeft: '3px' });
		expect(ref.current).toBe(bar.element());
	});

	it('renders a search-only bar without fields', async () => {
		const onValueChange = vi.fn();

		await page.render(<DsFiltersBar defaultExpanded defaultView="builder" onValueChange={onValueChange} />);

		await expect.element(searchInput()).toBeVisible();
		await expect.element(viewSwitch()).not.toBeInTheDocument();
		await expect.element(addFilterButton()).not.toBeInTheDocument();
		await expect.element(queryField()).not.toBeInTheDocument();

		await search('router');

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith({
			conditions: [expect.objectContaining({ kind: 'search', text: 'router' })],
			query: null,
		});
	});
});

describe('DsFiltersBar filter document', () => {
	it('starts from defaultValue and reports the whole document once per change', async () => {
		const onValueChange = vi.fn();

		await page.render(
			<DsFiltersBar
				fields={FIELDS}
				defaultExpanded
				defaultValue={{ conditions: [STATUS], query: null }}
				onValueChange={onValueChange}
			/>,
		);

		await search('AAA');

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith({
			conditions: [STATUS, expect.objectContaining({ kind: 'search', text: 'AAA' })],
			query: null,
		});

		await removeChip('Status equals Active').click();

		expect(onValueChange).toHaveBeenCalledTimes(2);
		expect(onValueChange).toHaveBeenLastCalledWith({
			conditions: [expect.objectContaining({ kind: 'search', text: 'AAA' })],
			query: null,
		});
	});

	it('reports a query and its conditions together in one document', async () => {
		const onValueChange = vi.fn();

		await page.render(
			<DsFiltersBar
				fields={FIELDS}
				defaultExpanded
				defaultView="advanced"
				defaultValue={{ conditions: [STATUS], query: null }}
				onValueChange={onValueChange}
			/>,
		);

		await queryField().fill(OR_QUERY);

		await expect.poll(() => onValueChange.mock.calls).toEqual([[{ conditions: [STATUS], query: OR_QUERY }]]);
	});

	it('reports the next document and keeps the controlled value', async () => {
		const onValueChange = vi.fn();

		await page.render(
			<DsFiltersBar
				fields={FIELDS}
				defaultExpanded
				value={{ conditions: [STATUS], query: null }}
				onValueChange={onValueChange}
			/>,
		);

		await removeChip('Status equals Active').click();

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith(emptyFilterDocument);
		await expect.element(removeChip('Status equals Active')).toBeVisible();
	});

	it('follows a controlled value', async () => {
		const ControlledBar = () => {
			const [value, setValue] = useState<DsFilterDocument>(emptyFilterDocument);

			return <DsFiltersBar fields={FIELDS} defaultExpanded value={value} onValueChange={setValue} />;
		};

		await page.render(<ControlledBar />);

		await search('AAA');
		await expect.element(removeChip('AAA')).toBeVisible();

		await removeChip('AAA').click();
		await expect.element(removeChip('AAA')).not.toBeInTheDocument();
	});
});

describe('DsFiltersBar UI state', () => {
	it('starts collapsed on the filters view', async () => {
		await page.render(<DsFiltersBar fields={FIELDS} />);

		await expect.element(showButton()).toHaveAttribute('aria-expanded', 'false');

		await showButton().click();

		await expect.element(viewItem('Filters')).toBeChecked();
		await expect.element(addFilterButton()).toBeVisible();
	});

	it('reports expanded and view changes while uncontrolled', async () => {
		const onExpandedChange = vi.fn();
		const onViewChange = vi.fn();

		await page.render(
			<DsFiltersBar fields={FIELDS} onExpandedChange={onExpandedChange} onViewChange={onViewChange} />,
		);

		await showButton().click();
		await selectView('Advanced query');

		expect(onExpandedChange).toHaveBeenCalledExactlyOnceWith(true);
		expect(onViewChange).toHaveBeenCalledExactlyOnceWith('advanced');
		await expect.element(queryField()).toBeVisible();
	});

	it('reports expanded and view changes and keeps the controlled values', async () => {
		const onExpandedChange = vi.fn();
		const onViewChange = vi.fn();
		const props: DsFiltersBarProps = { fields: FIELDS, view: 'filters', onExpandedChange, onViewChange };

		const { rerender } = await page.render(<DsFiltersBar {...props} expanded={false} />);

		await showButton().click();

		expect(onExpandedChange).toHaveBeenCalledExactlyOnceWith(true);
		await expect.element(showButton()).toHaveAttribute('aria-expanded', 'false');

		await rerender(<DsFiltersBar {...props} expanded />);

		await selectView('Advanced query');

		expect(onViewChange).toHaveBeenCalledExactlyOnceWith('advanced');
		await expect.element(addFilterButton()).toBeVisible();
		await expect.element(queryField()).not.toBeInTheDocument();
	});

	it.each(['filters', 'builder'] as const)(
		'shows the advanced view while a query overrides the asked-for %s view, then that view after clear',
		async (defaultView) => {
			const onViewChange = vi.fn();

			await page.render(
				<DsFiltersBar
					fields={FIELDS}
					defaultExpanded
					defaultView={defaultView}
					defaultValue={{ conditions: [], query: OR_QUERY }}
					onViewChange={onViewChange}
				/>,
			);

			await expect.element(viewItem('Advanced query')).toBeChecked();
			await expect.element(queryField()).toHaveValue(OR_QUERY);

			await clearAllButton().click();

			await expect.element(queryField()).not.toBeInTheDocument();
			await expect.element(viewItem(defaultView === 'filters' ? 'Filters' : 'Query builder')).toBeChecked();
			expect(onViewChange).not.toHaveBeenCalled();
		},
	);

	it('shows the advanced view over a controlled view without reporting a change', async () => {
		const onViewChange = vi.fn();

		await page.render(
			<DsFiltersBar
				fields={FIELDS}
				defaultExpanded
				view="builder"
				value={{ conditions: [], query: OR_QUERY }}
				onViewChange={onViewChange}
			/>,
		);

		await expect.element(queryField()).toHaveValue(OR_QUERY);
		await expect.element(viewItem('Advanced query')).toBeChecked();
		expect(onViewChange).not.toHaveBeenCalled();
	});
});

describe('DsFiltersBar slotProps', () => {
	it('focuses the search input through slotProps.search.ref', async () => {
		const ref = createRef<HTMLInputElement>();

		await page.render(<DsFiltersBar defaultExpanded slotProps={{ search: { ref } }} />);

		ref.current?.focus();

		await expect.element(searchInput()).toHaveFocus();
	});

	const slotCases: ReadonlyArray<{
		slot: keyof DsFiltersBarSlotProps;
		props?: Partial<DsFiltersBarProps>;
		// An element inside the part; the part is it or its closest ancestor with the slot class.
		anchor: () => Element;
		// Where `ref` lands: the part, or the anchor for parts whose ref reaches an inner control.
		refTo?: 'part' | 'anchor';
	}> = [
		{ slot: 'disclosure', anchor: () => hideButton().element() },
		{
			slot: 'summary',
			props: { defaultExpanded: false, defaultValue: emptyFilterDocument },
			anchor: () => page.getByText(/^View:?$/).element(),
		},
		{ slot: 'toolbar', anchor: () => searchInput().element() },
		{ slot: 'savedFilters', anchor: () => savedFiltersTag().element() },
		{ slot: 'saveFilter', anchor: () => saveFilterButton().element() },
		{ slot: 'search', anchor: () => searchInput().element(), refTo: 'anchor' },
		{ slot: 'viewSwitch', anchor: () => viewSwitch().element() },
		{ slot: 'conditions', anchor: () => addFilterButton().element() },
		{ slot: 'builder', props: { defaultView: 'builder' }, anchor: () => addFilterButton().element() },
		{
			slot: 'query',
			props: { defaultView: 'advanced' },
			anchor: () => queryField().element(),
			refTo: 'anchor',
		},
		{ slot: 'clearAll', anchor: () => clearAllButton().element() },
		{ slot: 'pinned', anchor: () => pinnedGroup('Status').element() },
	];

	it.each(slotCases)(
		'forwards slotProps.$slot ref, className and style',
		async ({ slot, props, anchor, refTo }) => {
			const ref = createRef<HTMLElement>();
			const slotProps = { [slot]: { ref, className: 'slot-part', style: { marginLeft: '3px' } } };

			await page.render(
				<DsFiltersBar
					fields={FIELDS}
					defaultExpanded
					defaultValue={{ conditions: [SEARCH], query: null }}
					defaultPins={PINS}
					savedFilters={savedFiltersConfig()}
					slotProps={slotProps}
					{...props}
				/>,
			);

			await expect.poll(anchor).toBeInstanceOf(Element);

			const part = anchor().closest('.slot-part');

			expect(part).toBeInstanceOf(HTMLElement);
			expect(part).toHaveStyle({ marginLeft: '3px' });
			expect(ref.current).toBe(refTo === 'anchor' ? anchor() : part);
		},
	);
});

describe('DsFiltersBar locale', () => {
	it('overrides strings by part, keeping the defaults of the rest', async () => {
		await page.render(
			<DsFiltersBar
				fields={FIELDS}
				defaultExpanded
				savedFilters={savedFiltersConfig()}
				locale={{
					collapse: 'Fold filters',
					search: { placeholder: 'Find…' },
					chips: { addFilter: 'New filter' },
					viewSwitch: { views: { builder: 'Builder' } },
					savedFilters: { saveFilter: 'Keep filter' },
				}}
			/>,
		);

		await expect.element(page.getByRole('button', { name: 'Fold filters', exact: true })).toBeVisible();
		await expect.element(searchInput()).toHaveAttribute('placeholder', 'Find…');
		await expect.element(addFilterButton('New filter')).toBeVisible();
		await expect.element(viewItem('Builder')).toBeVisible();
		await expect.element(viewItem('Filters')).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Keep filter', exact: true })).toBeVisible();
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

const ConditionsBar = (props: DsFiltersBarProps) => (
	<DsFiltersBar defaultExpanded fields={DIALOG_FIELDS} {...props} />
);

interface ControlledConditionsBarProps {
	initialConditions?: ReadonlyArray<DsFilterCondition>;
	initialPins?: ReadonlyArray<DsFilterPin>;
	onValueChange: (value: DsFilterDocument) => void;
	onPinsChange: (pins: ReadonlyArray<DsFilterPin>) => void;
}

// Holds the document outside the bar to cover the controlled path.
const ControlledConditionsBar = ({
	initialConditions = [],
	initialPins = [],
	onValueChange,
	onPinsChange,
}: ControlledConditionsBarProps) => {
	const [value, setValue] = useState<DsFilterDocument>({ conditions: initialConditions, query: null });
	const [pins, setPins] = useState(initialPins);

	return (
		<ConditionsBar
			value={value}
			pins={pins}
			onValueChange={(next) => {
				onValueChange(next);
				setValue(next);
			}}
			onPinsChange={(next) => {
				onPinsChange(next);
				setPins(next);
			}}
		/>
	);
};

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

describe('DsFiltersBar filters view add filter', () => {
	it('renders an icon-only button named by the default locale', async () => {
		await page.render(<ConditionsBar />);

		await expect.element(addFilterButton()).toHaveAccessibleName('Add filter');
		await expect.element(page.getByText('Add filter')).not.toBeInTheDocument();
		await expect.element(filtersDialog()).not.toBeInTheDocument();
	});

	it('names the button by locale.chips', async () => {
		await page.render(<ConditionsBar locale={{ chips: { addFilter: 'New filter' } }} />);

		await expect.element(addFilterButton('New filter')).toBeVisible();
		await expect.element(addFilterButton()).not.toBeInTheDocument();
	});
});

describe('DsFiltersBar filters dialog', () => {
	it('opens a dialog with one tab per field, in fields order', async () => {
		await page.render(
			<ConditionsBar defaultValue={{ conditions: [SEARCH_CONDITION, PARENTS_CONDITION], query: null }} />,
		);

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

	it('titles the dialog and its save button by locale.conditions', async () => {
		await page.render(<ConditionsBar locale={{ conditions: { title: 'Refine', save: 'Apply' } }} />);

		await addFilterButton().click();

		await expect.element(filtersDialog('Refine')).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Apply', exact: true })).toBeVisible();
	});

	it('passes the other dialog strings through locale.conditions', async () => {
		await page.render(
			<ConditionsBar
				locale={{
					conditions: { close: 'Dismiss', operator: 'Match', search: (label) => `Find in ${label}` },
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
		const onValueChange = vi.fn();
		const onPinsChange = vi.fn();

		await page.render(<ControlledConditionsBar onValueChange={onValueChange} onPinsChange={onPinsChange} />);

		await openFiltersDialog();
		await pickOperator('Status ≠ (not equals)');
		await optionCheckbox('Active').click();
		await optionCheckbox('Pending').click();
		await pinToggle('Deprecated').click();
		await fieldTab('Trigger').click();
		await optionCheckbox('Manual').click();
		await fieldTab('Workflow').click();
		await pinToggle('Backup').click();

		expect(onValueChange).not.toHaveBeenCalled();
		expect(onPinsChange).not.toHaveBeenCalled();

		await saveFilters();

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith({
			conditions: [
				newEnumCondition('status', '!=', ['active', 'pending']),
				newEnumCondition('trigger', '=', ['manual']),
			],
			query: null,
		});
		expect(onPinsChange).toHaveBeenCalledExactlyOnceWith([
			{ field: 'status', value: 'deprecated' },
			{ field: 'workflow', value: 'backup' },
		]);
		await expect.element(filtersDialog()).not.toBeInTheDocument();
	});

	it('leaves conditions the dialog does not produce untouched on save', async () => {
		const onValueChange = vi.fn();

		await page.render(
			<ControlledConditionsBar
				initialConditions={[SEARCH_CONDITION, STATUS_CONDITION, PARENTS_CONDITION]}
				onValueChange={onValueChange}
				onPinsChange={vi.fn()}
			/>,
		);

		await openFiltersDialog();
		await fieldTab('Workflow').click();
		await optionCheckbox('Deploy').click();
		await saveFilters();

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith({
			conditions: [
				SEARCH_CONDITION,
				STATUS_CONDITION,
				PARENTS_CONDITION,
				newEnumCondition('workflow', 'IN', ['deploy']),
			],
			query: null,
		});
	});

	it('seeds the dialog from the existing conditions and pins', async () => {
		await page.render(
			<ConditionsBar
				defaultValue={{
					conditions: [
						SEARCH_CONDITION,
						{
							kind: 'field',
							id: 'status-2',
							field: 'status',
							operator: '!=',
							value: ['deprecated', 'pending'],
						},
					],
					query: null,
				}}
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
		const onValueChange = vi.fn();
		const onPinsChange = vi.fn();

		await page.render(<ConditionsBar onValueChange={onValueChange} onPinsChange={onPinsChange} />);

		await openFiltersDialog();
		await pickOperator('Status ≠ (not equals)');
		await optionCheckbox('Draft').click();
		await pinToggle('Pending').click();
		await saveFilters();
		await expect.element(filtersDialog()).not.toBeInTheDocument();

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith({
			conditions: [newEnumCondition('status', '!=', ['draft'])],
			query: null,
		});
		expect(onPinsChange).toHaveBeenCalledExactlyOnceWith([{ field: 'status', value: 'pending' }]);

		await openFiltersDialog();

		await expect.element(fieldTab('Status')).toHaveAccessibleName('Status 1 selected Pinned');
		await expect.element(operatorSelect()).toMatchTextContent('Status ≠ (not equals)');
		await expect.element(optionCheckbox('Draft')).toBeChecked();
		await expect.element(optionCheckbox('Active')).not.toBeChecked();
		await expect.element(pinToggle('Pending')).toHaveAttribute('aria-pressed', 'true');
	});

	it.each(closeWays)('discards the draft when closed with $way', async ({ close }) => {
		const onValueChange = vi.fn();
		const onPinsChange = vi.fn();

		await page.render(
			<ControlledConditionsBar
				initialConditions={[STATUS_CONDITION]}
				initialPins={[{ field: 'status', value: 'pending' }]}
				onValueChange={onValueChange}
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
		expect(onValueChange).not.toHaveBeenCalled();
		expect(onPinsChange).not.toHaveBeenCalled();

		await openFiltersDialog();

		await expect.element(operatorSelect()).toMatchTextContent('Status = (equals)');
		await expect.element(optionCheckbox('Active')).toBeChecked();
		await expect.element(optionCheckbox('Deprecated')).not.toBeChecked();
		await expect.element(pinToggle('Active')).toHaveAttribute('aria-pressed', 'false');
		await expect.element(pinToggle('Pending')).toHaveAttribute('aria-pressed', 'true');
	});
});
