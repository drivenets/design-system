import { beforeEach, describe, expect, it, vi } from 'vitest';
import { page, type Locator } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import type {
	DsFilterField,
	DsFiltersBarProps,
	DsFiltersBarSavedFiltersConfig,
} from '../ds-filters-bar.types';

const CONTROL_HEIGHT = 28;
const WIDE_VIEWPORT = { width: 1280, height: 720 };

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [{ value: '=', label: 'equals' }],
		options: [{ value: 'active', label: 'Active' }],
	},
];

const SAVED_FILTERS: DsFiltersBarSavedFiltersConfig = {
	items: [{ id: 'night', name: 'Night shift', document: { conditions: [], query: null } }],
	onSaveAs: vi.fn(),
	onUpdate: vi.fn(),
	onRename: vi.fn(),
	onDelete: vi.fn(),
};

const ToolbarBar = (props: Partial<DsFiltersBarProps>) => (
	<DsFiltersBar fields={FIELDS} savedFilters={SAVED_FILTERS} defaultExpanded {...props} />
);

const disclosure = () => page.getByRole('button', { name: 'Hide filters', exact: true });
const collapsedDisclosure = () => page.getByRole('button', { name: 'Show filters', exact: true });

// A control's box is the toolbar item that holds it, e.g. the tag around the Saved filters button.
const toolbarItem = (locator: Locator) => {
	let element = locator.element() as HTMLElement;

	while (element.parentElement && element.parentElement.dataset.part !== 'toolbar') {
		element = element.parentElement;
	}

	return element;
};

const box = (element: Element) => element.getBoundingClientRect();

const expectAligned = (controls: Record<string, Element>, reference: Element) => {
	const { top } = box(reference);

	for (const [name, element] of Object.entries(controls)) {
		expect.soft(box(element).height, `${name} height`).toBe(CONTROL_HEIGHT);
		expect.soft(box(element).top, `${name} top`).toBe(top);
	}
};

describe('DsFiltersBar toolbar alignment', () => {
	beforeEach(async () => {
		await page.viewport(WIDE_VIEWPORT.width, WIDE_VIEWPORT.height);
	});

	it('lines up saved filters, search, view switch and add button at 28 px in the expanded bar', async () => {
		await page.render(<ToolbarBar views={['filters', 'builder', 'advanced']} />);

		const addButton = page.getByRole('button', { name: 'Add filter', exact: true });
		await expect.element(addButton).toBeVisible();

		expectAligned(
			{
				disclosure: disclosure().element(),
				savedFilters: toolbarItem(page.getByRole('button', { name: 'Saved filters', exact: true })),
				search: toolbarItem(page.getByRole('textbox', { name: 'Search' })),
				viewSwitch: page.getByRole('radiogroup', { name: 'Filter view' }).element(),
				addButton: addButton.element(),
			},
			disclosure().element(),
		);
	});

	it('keeps the advanced query on the same 28 px line', async () => {
		await page.render(<ToolbarBar views={['filters', 'advanced']} defaultView="advanced" />);

		const query = page.getByRole('textbox', { name: 'Advanced query' });
		await expect.element(query).toBeVisible();

		expectAligned(
			{
				savedFilters: toolbarItem(page.getByRole('button', { name: 'Saved filters', exact: true })),
				query: toolbarItem(query),
				viewSwitch: page.getByRole('radiogroup', { name: 'Filter view' }).element(),
			},
			disclosure().element(),
		);
	});

	it('keeps the collapsed bar on one 28 px line', async () => {
		await page.render(<ToolbarBar defaultExpanded={false} />);

		await expect.element(collapsedDisclosure()).toBeVisible();

		const bar = page.getByRole('region').element();

		expect(box(collapsedDisclosure().element()).height).toBe(CONTROL_HEIGHT);
		expect(box(bar).height).toBe(CONTROL_HEIGHT);
	});
});
