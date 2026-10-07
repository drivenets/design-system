import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import {
	emptyFilterDocument,
	type DsFilterCondition,
	type DsFilterDocument,
	type DsFilterField,
	type DsFilterPin,
	type DsFiltersBarProps,
	type DsFiltersBarSavedFiltersConfig,
} from '../ds-filters-bar.types';

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [{ value: '=', label: 'equals' }],
		options: [
			{ value: 'A', label: 'Active' },
			{ value: 'B', label: 'Blocked' },
		],
	},
];

const SEARCH: DsFilterCondition = { kind: 'search', id: 'search-1', text: 'AAA' };
const withSearch: DsFilterDocument = { conditions: [SEARCH], query: null };
const withQuery: DsFilterDocument = { conditions: [], query: 'status = "A" OR status = "B"' };
const ACTIVE: DsFilterPin = { field: 'status', value: 'A' };

const savedFilters = (
	overrides: Partial<DsFiltersBarSavedFiltersConfig> = {},
): DsFiltersBarSavedFiltersConfig => ({
	items: [{ id: 'mine', name: 'Mine', document: withSearch }],
	onSaveAs: () => 'new',
	onUpdate: () => undefined,
	onRename: () => undefined,
	onDelete: () => undefined,
	...overrides,
});

const ClearAllBar = (props: DsFiltersBarProps) => <DsFiltersBar fields={FIELDS} defaultExpanded {...props} />;

const clearAll = (name = 'Clear all') => page.getByRole('button', { name, exact: true });
const searchInput = () => page.getByRole('textbox', { name: 'Search' });
const activeToggle = () => page.getByRole('button', { name: 'Active', exact: true });

describe('DsFiltersBar clear all', () => {
	it('renders only while there is something to clear', async () => {
		await page.render(<ClearAllBar />);

		await expect.element(clearAll()).not.toBeInTheDocument();

		await searchInput().fill('AAA');
		await userEvent.keyboard('{Enter}');

		await expect.element(clearAll()).toBeVisible();
	});

	it.each([
		{ state: 'a switched-on toggle', props: { defaultPins: [ACTIVE], defaultActiveToggles: [ACTIVE] } },
		{ state: 'an Active saved filter', props: { savedFilters: savedFilters({ defaultActiveId: 'mine' }) } },
	])('renders for $state on an empty document', async ({ props }) => {
		await page.render(<ClearAllBar {...props} />);

		await expect.element(clearAll()).toBeVisible();
	});

	it.each([
		{ source: 'conditions', defaultValue: withSearch },
		{ source: 'an Advanced query', defaultValue: withQuery },
	])('empties a document driven by $source, reporting it once', async ({ defaultValue }) => {
		const onValueChange = vi.fn();

		await page.render(<ClearAllBar defaultValue={defaultValue} onValueChange={onValueChange} />);

		await clearAll().click();

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith(emptyFilterDocument);
		await expect.element(page.getByRole('button', { name: 'Remove filter: AAA' })).not.toBeInTheDocument();
		await expect.element(clearAll()).not.toBeInTheDocument();
	});

	it('switches every toggle off and keeps the pins', async () => {
		const onActiveTogglesChange = vi.fn();
		const onPinsChange = vi.fn();

		await page.render(
			<ClearAllBar
				defaultValue={withSearch}
				defaultPins={[ACTIVE]}
				defaultActiveToggles={[ACTIVE]}
				onActiveTogglesChange={onActiveTogglesChange}
				onPinsChange={onPinsChange}
			/>,
		);

		await clearAll().click();

		expect(onActiveTogglesChange).toHaveBeenCalledExactlyOnceWith([]);
		expect(onPinsChange).not.toHaveBeenCalled();
		await expect.element(activeToggle()).toHaveAttribute('aria-pressed', 'false');
	});

	it('drops the Active saved filter', async () => {
		const onActiveIdChange = vi.fn();

		await page.render(
			<ClearAllBar
				defaultValue={withSearch}
				savedFilters={savedFilters({ defaultActiveId: 'mine', onActiveIdChange })}
			/>,
		);

		await expect.element(page.getByRole('button', { name: 'Mine', exact: true })).toBeVisible();

		await clearAll().click();

		expect(onActiveIdChange).toHaveBeenCalledExactlyOnceWith(null);
		await expect.element(page.getByRole('button', { name: 'Saved filters', exact: true })).toBeVisible();
	});

	it.each([
		{ source: 'conditions', defaultValue: withSearch },
		{ source: 'an Advanced query', defaultValue: withQuery },
	])('moves focus to the search input after clearing $source', async ({ defaultValue }) => {
		await page.render(<ClearAllBar defaultValue={defaultValue} />);

		await clearAll().click();

		await expect.element(clearAll()).not.toBeInTheDocument();
		await expect.element(searchInput()).toHaveFocus();
	});

	it('moves focus to the disclosure button when the search input is disabled', async () => {
		await page.render(<ClearAllBar defaultValue={withSearch} slotProps={{ search: { disabled: true } }} />);

		await clearAll().click();

		await expect.element(page.getByRole('button', { name: 'Hide filters' })).toHaveFocus();
	});

	it('takes its label from locale.clearAll', async () => {
		await page.render(<ClearAllBar defaultValue={withSearch} locale={{ clearAll: { label: 'Reset' } }} />);

		await expect.element(clearAll('Reset')).toBeVisible();
	});
});
