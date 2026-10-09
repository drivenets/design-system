import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import { useFilteredRows } from '../row-matcher';
import {
	emptyFilterDocument,
	type DsFilterDocument,
	type DsFilterField,
	type DsFilterPin,
	type DsFiltersBarSavedFilter,
} from '../ds-filters-bar.types';

interface Device {
	name: string;
	status: string;
}

const DEVICES: ReadonlyArray<Device> = [
	{ name: 'core-router', status: 'active' },
	{ name: 'edge-router', status: 'failed' },
	{ name: 'lab-router', status: 'active' },
	{ name: 'tor-switch', status: 'active' },
	{ name: 'spine-switch', status: 'failed' },
];

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [{ value: '=', label: 'equals' }],
		options: [
			{ value: 'active', label: 'Active' },
			{ value: 'failed', label: 'Failed' },
		],
	},
	{
		type: 'text',
		id: 'name',
		label: 'Name',
		operators: [
			{ value: '=', label: 'equals' },
			{ value: '~', label: 'contains' },
		],
	},
];

const PINS: ReadonlyArray<DsFilterPin> = [
	{ field: 'status', value: 'active' },
	{ field: 'status', value: 'failed' },
];

const OR_QUERY = 'status = failed OR name ~ switch';

// A product screen: it keeps the document, the switched-on pins and the saved filters, filters its
// rows with the row matcher, and feeds the counts back to the bar.
const DevicesScreen = () => {
	const [value, setValue] = useState<DsFilterDocument>(emptyFilterDocument);
	const [activeToggles, setActiveToggles] = useState<ReadonlyArray<DsFilterPin>>([]);
	const [items, setItems] = useState<ReadonlyArray<DsFiltersBarSavedFilter>>([]);
	const [activeId, setActiveId] = useState<string | null>(null);
	const { rows, getPinCount } = useFilteredRows(DEVICES, { fields: FIELDS, value, activeToggles });

	return (
		<>
			<DsFiltersBar
				fields={FIELDS}
				value={value}
				defaultPins={PINS}
				activeToggles={activeToggles}
				defaultExpanded
				savedFilters={{
					items,
					activeId,
					onActiveIdChange: setActiveId,
					onSaveAs: (name, document) => {
						const id = `saved-${String(items.length + 1)}`;

						setItems((current) => [...current, { id, name, document }]);

						return id;
					},
					onUpdate: (id, document) =>
						setItems((current) => current.map((item) => (item.id === id ? { ...item, document } : item))),
					onRename: (id, name) =>
						setItems((current) => current.map((item) => (item.id === id ? { ...item, name } : item))),
					onDelete: (id) => setItems((current) => current.filter((item) => item.id !== id)),
				}}
				resultCount={rows.length}
				getPinCount={getPinCount}
				onValueChange={setValue}
				onActiveTogglesChange={setActiveToggles}
			/>
			<ul aria-label="Devices">
				{rows.map((row) => (
					<li key={row.name}>{row.name}</li>
				))}
			</ul>
		</>
	);
};

const deviceNames = () =>
	page
		.getByRole('list', { name: 'Devices' })
		.getByRole('listitem')
		.elements()
		.map((element) => element.textContent);

const tag = (name: string) => page.getByRole('button', { name, exact: true });
const searchInput = () => page.getByRole('textbox', { name: 'Search' });
const queryField = () => page.getByRole('textbox', { name: 'Advanced query' });
const saveFilterButton = () => page.getByRole('button', { name: 'Save filter', exact: true });
const clearAllButton = () => page.getByRole('button', { name: 'Clear all', exact: true });
const viewItem = (name: string) => page.getByRole('radio', { name, exact: true });
// A toggle's name is its option label followed by its count.
const toggle = (label: string) => page.getByRole('button', { name: new RegExp(`^${label}\\s*\\d+$`) });
const region = () => page.getByRole('region', { name: 'Filters' });

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

const saveAsNew = async (name: string) => {
	await saveFilterButton().click();
	await page.getByLabelText('Filter name').fill(name);
	await page.getByRole('button', { name: /^Save$/ }).click();
};

const loadSavedFilter = async (name: string) => {
	await tag('Saved filters').click();
	await page
		.getByRole('dialog', { name: 'Saved filters' })
		.getByRole('button', { name: `bookmark ${name}` })
		.click();
};

describe('DsFiltersBar flow', () => {
	it('filters the rows, saves the filter, clears everything, then loads the filter back', async () => {
		await page.render(<DevicesScreen />);

		await expect.poll(deviceNames).toHaveLength(DEVICES.length);
		await expect.element(saveFilterButton()).toBeDisabled();

		await search('router');

		await expect.poll(deviceNames).toEqual(['core-router', 'edge-router', 'lab-router']);
		await expect.element(toggle('Active')).toHaveAccessibleName(/^Active\s*2$/);
		await expect.element(toggle('Failed')).toHaveAccessibleName(/^Failed\s*1$/);

		await toggle('Failed').click();

		await expect.poll(deviceNames).toEqual(['edge-router']);

		await saveAsNew('Routers');

		await expect.element(tag('Routers')).toBeVisible();

		await page.getByRole('button', { name: 'Hide filters' }).click();

		await expect.element(region()).toMatchTextContent(/Filter: Routers\s*Search: router;\s*\(1\)/);

		await page.getByRole('button', { name: 'Show filters' }).click();
		await clearAllButton().click();

		await expect.poll(deviceNames).toHaveLength(DEVICES.length);
		await expect.element(searchInput()).toHaveFocus();
		await expect.element(tag('Saved filters')).toBeVisible();
		await expect.element(toggle('Failed')).toHaveAttribute('aria-pressed', 'false');
		await expect.element(saveFilterButton()).toBeDisabled();

		await loadSavedFilter('Routers');

		// A saved filter holds the document only, so the toggle stays off.
		await expect.poll(deviceNames).toEqual(['core-router', 'edge-router', 'lab-router']);
		await expect.element(tag('Routers')).toBeVisible();
		await expect.element(toggle('Failed')).toHaveAttribute('aria-pressed', 'false');
	});

	it('flags edits to the Active saved filter as unsaved until it is updated', async () => {
		await page.render(<DevicesScreen />);

		await search('router');
		await saveAsNew('Routers');
		await search('edge');

		await expect.element(tag('Routers, Unsaved changes')).toBeVisible();
		await expect.poll(deviceNames).toEqual(['edge-router']);

		await saveFilterButton().click();
		await page.getByRole('menuitem', { name: 'Update “Routers”' }).click();

		await expect.element(tag('Routers')).toBeVisible();
	});

	it('filters by an Advanced query, saves it and loads it back into the locked advanced view', async () => {
		await page.render(<DevicesScreen />);

		await selectView('Advanced query');
		await queryField().fill(OR_QUERY);

		await expect.poll(deviceNames).toEqual(['edge-router', 'tor-switch', 'spine-switch']);
		await expect.element(viewItem('Filters')).toBeDisabled();

		await saveAsNew('Failed or switches');
		await clearAllButton().click();

		await expect.poll(deviceNames).toHaveLength(DEVICES.length);
		await expect.element(viewItem('Filters')).toBeEnabled();

		await loadSavedFilter('Failed or switches');

		await expect.element(queryField()).toHaveValue(OR_QUERY);
		await expect.element(viewItem('Query builder')).toBeDisabled();
		await expect.poll(deviceNames).toEqual(['edge-router', 'tor-switch', 'spine-switch']);
	});
});
