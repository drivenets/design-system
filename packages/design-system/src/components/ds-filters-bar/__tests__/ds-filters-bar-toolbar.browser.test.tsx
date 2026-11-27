import { describe, expect, it } from 'vitest';
import { page, type Locator } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import type {
	DsFilterField,
	DsFiltersBarProps,
	DsFiltersBarSavedFiltersConfig,
} from '../ds-filters-bar.types';

const CONTROL_HEIGHT = 28;
const LAYOUT_TOLERANCE_PX = 1;

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		options: [
			{ value: 'active', label: 'Active' },
			{ value: 'failed', label: 'Failed' },
		],
	},
];

const SAVED_FILTERS: DsFiltersBarSavedFiltersConfig = {
	items: [{ id: 'night', name: 'Night shift', document: { conditions: [] } }],
	onSaveAs: () => 'new',
	onUpdate: () => undefined,
	onRename: () => undefined,
	onDelete: () => undefined,
};

const ToolbarBar = (props: DsFiltersBarProps) => (
	<DsFiltersBar fields={FIELDS} savedFilters={SAVED_FILTERS} {...props} />
);

const region = () => page.getByRole('region', { name: 'Filters' });
const disclosure = () => page.getByRole('button', { name: /^(Show|Hide) filters$/ });
const savedFiltersTrigger = () => page.getByRole('button', { name: 'Saved filters', exact: true });
const searchField = () => page.getByRole('textbox', { name: 'Search' });
const viewSwitch = () => page.getByRole('radiogroup', { name: 'Filter view' });
const addFilterButton = () => page.getByRole('button', { name: 'Add filter', exact: true });
const summaryLabel = () => page.getByText(/^Search:?$/);

// The bar renders its parts as direct children, so the part holding a located element is its child of the region.
const partOf = (locator: Locator): HTMLElement => {
	const root = region().element();
	let element = locator.element() as HTMLElement;

	while (element.parentElement && element.parentElement !== root) {
		element = element.parentElement;
	}

	return element;
};

// The search field's item in the toolbar is the visible control; the bare input is shorter.
const searchControl = (): HTMLElement => {
	const control = searchField().element().closest<HTMLElement>('[data-part="toolbar"] > *');

	if (!control) {
		throw new Error('Search is not an item of the toolbar');
	}

	return control;
};

const rectOf = (target: Locator | HTMLElement) =>
	(target instanceof HTMLElement ? target : target.element()).getBoundingClientRect();

const centerOf = (target: Locator | HTMLElement) => {
	const rect = rectOf(target);

	return rect.top + rect.height / 2;
};

const expectCenteredOn = (target: Locator | HTMLElement, center: number) =>
	expect(Math.abs(centerOf(target) - center)).toBeLessThanOrEqual(LAYOUT_TOLERANCE_PX);

describe('DsFiltersBar toolbar sizing', () => {
	it('renders search, the add button and the disclosure button 28 px high', async () => {
		await page.render(<ToolbarBar defaultExpanded />);

		await expect.element(searchField()).toBeVisible();

		expect(rectOf(disclosure()).height).toBe(CONTROL_HEIGHT);
		expect(rectOf(searchControl()).height).toBe(CONTROL_HEIGHT);
		expect(rectOf(addFilterButton()).height).toBe(CONTROL_HEIGHT);
	});

	it('centers every toolbar control on the disclosure button', async () => {
		await page.render(<ToolbarBar defaultExpanded style={{ width: 1200 }} />);

		await expect.element(searchField()).toBeVisible();

		const center = centerOf(disclosure());

		expectCenteredOn(savedFiltersTrigger(), center);
		expectCenteredOn(searchControl(), center);
		expectCenteredOn(viewSwitch(), center);
		expectCenteredOn(addFilterButton(), center);
	});

	it('centers the summary on the disclosure button in the collapsed bar', async () => {
		await page.render(<ToolbarBar defaultValue={{ conditions: [{ kind: 'search', text: 'router' }] }} />);

		await expect.element(summaryLabel()).toBeVisible();

		expect(rectOf(disclosure()).height).toBe(CONTROL_HEIGHT);
		expectCenteredOn(partOf(summaryLabel()), centerOf(disclosure()));
	});
});
