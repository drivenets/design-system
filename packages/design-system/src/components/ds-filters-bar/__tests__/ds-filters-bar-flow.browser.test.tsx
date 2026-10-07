import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import { serializeFilterQuery } from '../query-language';
import type { DsFilterCondition, DsFilterField } from '../ds-filters-bar.types';

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [{ value: '=', label: 'equals' }],
		options: [
			{ value: 'active', label: 'Active' },
			{ value: 'pending', label: 'Pending' },
		],
	},
];

const OR_QUERY = 'status = "active" OR status = "pending"';

interface SavedFilter {
	id: string;
	name: string;
	conditions: ReadonlyArray<DsFilterCondition>;
	query: string | null;
}

interface FilterDocument {
	conditions: ReadonlyArray<DsFilterCondition>;
	query: string | null;
}

const documentKey = ({ conditions, query }: FilterDocument) => query ?? serializeFilterQuery(conditions);

interface FlowBarProps {
	initialSavedFilters?: ReadonlyArray<SavedFilter>;
}

// The consumer side of the loop: it controls the document, keeps the snapshots and the Active saved
// filter, and derives `dirty` by comparing the document with the active snapshot.
const FlowBar = ({ initialSavedFilters = [] }: FlowBarProps) => {
	const [conditions, setConditions] = useState<ReadonlyArray<DsFilterCondition>>([]);
	const [query, setQuery] = useState<string | null>(null);
	const [savedFilters, setSavedFilters] = useState(initialSavedFilters);
	const [activeId, setActiveId] = useState<string | null>(null);

	const active = savedFilters.find((item) => item.id === activeId);
	const dirty = !!active && documentKey(active) !== documentKey({ conditions, query });
	const items = savedFilters.map(({ id, name }) => ({ id, name }));

	const load = (id: string | null) => {
		const saved = savedFilters.find((item) => item.id === id);

		setActiveId(saved?.id ?? null);

		if (saved) {
			setConditions(saved.conditions);
			setQuery(saved.query);
		}
	};

	return (
		<DsFiltersBar.Root
			fields={FIELDS}
			conditions={conditions}
			query={query}
			defaultExpanded
			onConditionsChange={setConditions}
			onQueryChange={setQuery}
		>
			<DsFiltersBar.Toolbar>
				<DsFiltersBar.SavedFilters
					items={items}
					value={activeId}
					dirty={dirty}
					onValueChange={load}
					onClear={() => setActiveId(null)}
					onRename={() => undefined}
					onDelete={() => undefined}
				/>
				<DsFiltersBar.Search />
				<DsFiltersBar.ViewSwitch />
				<DsFiltersBar.View value="filters">
					<DsFiltersBar.Conditions />
				</DsFiltersBar.View>
				<DsFiltersBar.View value="advanced">
					<DsFiltersBar.Query />
				</DsFiltersBar.View>
				<DsFiltersBar.SaveFilter
					items={items}
					value={activeId}
					onUpdate={() =>
						setSavedFilters((current) =>
							current.map((item) => (item.id === activeId ? { ...item, conditions, query } : item)),
						)
					}
					onSaveAs={(name) => {
						const id = `saved-${String(savedFilters.length + 1)}`;

						setSavedFilters((current) => [...current, { id, name, conditions, query }]);
						setActiveId(id);
					}}
				/>
				<DsFiltersBar.ClearAll onClick={() => setActiveId(null)} />
			</DsFiltersBar.Toolbar>
		</DsFiltersBar.Root>
	);
};

const savedFiltersTag = (name: string) => page.getByRole('button', { name, exact: true });
const searchChip = (text: string) =>
	page.getByRole('button', { name: `Remove filter: ${text}`, exact: true });
const saveFilterButton = () => page.getByRole('button', { name: 'Save filter', exact: true });
const clearAllButton = () => page.getByRole('button', { name: 'Clear all', exact: true });
const clearSavedFilterButton = () => page.getByRole('button', { name: 'Clear filters', exact: true });
const queryField = () => page.getByRole('textbox', { name: 'Advanced query' });
const viewItem = (name: string) => page.getByRole('radio', { name, exact: true });

const search = async (text: string) => {
	await page.getByRole('textbox', { name: 'Search' }).fill(text);
	await userEvent.keyboard('{Enter}');
};

const saveAsNew = async (name: string) => {
	await saveFilterButton().click();
	await page.getByLabelText('Filter name').fill(name);
	await page.getByRole('button', { name: /^Save$/ }).click();
};

const loadSavedFilter = async (name: string) => {
	await savedFiltersTag('Saved filters').click();
	await page
		.getByRole('dialog')
		.getByRole('button', { name: `bookmark ${name}` })
		.click();
};

describe('DsFiltersBar saved filter flow', () => {
	it('saves the filtered document as the Active saved filter and flags later edits as unsaved', async () => {
		await page.render(<FlowBar />);

		await expect.element(saveFilterButton()).toBeDisabled();

		await search('router');

		await expect.element(searchChip('router')).toBeVisible();
		await expect.element(saveFilterButton()).toBeEnabled();

		await saveAsNew('Routers');

		await expect.element(savedFiltersTag('Routers')).toBeVisible();

		await search('edge');

		await expect.element(searchChip('edge')).toBeVisible();
		await expect.element(savedFiltersTag('Routers, Unsaved changes')).toBeVisible();
	});

	it('clears the Active saved filter with its document, then loads the snapshot back from the list', async () => {
		await page.render(<FlowBar />);

		await search('router');
		await saveAsNew('Routers');
		await search('edge');
		await expect.element(savedFiltersTag('Routers, Unsaved changes')).toBeVisible();

		await clearSavedFilterButton().click();

		await expect.element(savedFiltersTag('Saved filters')).toBeVisible();
		await expect.element(searchChip('router')).not.toBeInTheDocument();
		await expect.element(searchChip('edge')).not.toBeInTheDocument();
		await expect.element(clearAllButton()).not.toBeInTheDocument();
		await expect.element(saveFilterButton()).toBeDisabled();

		await loadSavedFilter('Routers');

		await expect.element(savedFiltersTag('Routers')).toBeVisible();
		await expect.element(searchChip('router')).toBeVisible();
		await expect.element(searchChip('edge')).not.toBeInTheDocument();
		await expect.element(clearAllButton()).toBeVisible();
		await expect.element(saveFilterButton()).toBeEnabled();
	});

	it('loads a saved Advanced query into the advanced view and locks the other views until cleared', async () => {
		await page.render(
			<FlowBar
				initialSavedFilters={[{ id: 'either', name: 'Either status', conditions: [], query: OR_QUERY }]}
			/>,
		);

		await expect.element(viewItem('Filters')).toBeChecked();

		await loadSavedFilter('Either status');

		await expect.element(savedFiltersTag('Either status')).toBeVisible();
		await expect.element(queryField()).toHaveValue(OR_QUERY);
		await expect.element(viewItem('Advanced query')).toBeChecked();
		await expect.element(viewItem('Filters')).toBeDisabled();
		await expect.element(viewItem('Query builder')).toBeDisabled();

		await clearSavedFilterButton().click();

		await expect.element(queryField()).not.toBeInTheDocument();
		await expect.element(viewItem('Filters')).toBeChecked();
		await expect.element(viewItem('Query builder')).toBeEnabled();
		await expect.element(saveFilterButton()).toBeDisabled();
	});
});
