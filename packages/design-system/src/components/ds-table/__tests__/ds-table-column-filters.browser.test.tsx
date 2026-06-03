import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import type { ColumnDef } from '@tanstack/react-table';
import DsTable from '../ds-table';
import { DsTagFilter } from '../../ds-tag-filter';
import { createCheckboxFilterAdapter, useTableFilters } from '../filters';

type DeviceRow = {
	id: string;
	name: string;
	type: 'PP-LGX' | 'ME10' | 'OLT' | 'Role-4';
};

const rows: DeviceRow[] = [
	{ id: '1', name: 'edge-01', type: 'ME10' },
	{ id: '2', name: 'core-01', type: 'PP-LGX' },
	{ id: '3', name: 'edge-02', type: 'OLT' },
	{ id: '4', name: 'agg-01', type: 'Role-4' },
	{ id: '5', name: 'edge-03', type: 'ME10' },
	{ id: '6', name: 'core-02', type: 'PP-LGX' },
];

const typeFilter = createCheckboxFilterAdapter<DeviceRow, DeviceRow['type']>({
	id: 'type',
	label: 'Type',
	items: [
		{ value: 'PP-LGX', label: 'PP-LGX' },
		{ value: 'ME10', label: 'ME10' },
		{ value: 'OLT', label: 'OLT' },
		{ value: 'Role-4', label: 'Role-4' },
	],
	searchable: true,
	selectAll: true,
	locale: { searchPlaceholder: 'Search role' },
});

const baseColumns: ColumnDef<DeviceRow>[] = [
	{ id: 'name', accessorKey: 'name', header: 'Name', cell: (info) => info.getValue() },
	{
		id: 'type',
		accessorKey: 'type',
		header: 'Type',
		meta: { filter: { adapterId: 'type' } },
		cell: (info) => info.getValue(),
	},
];

function TableWithColumnFilters() {
	const { columnFilters, filterChips, enhancedColumns, handlers } = useTableFilters({
		filterAdapters: [typeFilter],
		baseColumns,
	});

	return (
		<div>
			{filterChips.length > 0 && (
				<DsTagFilter items={filterChips} onClearAll={handlers.clearAll} onItemDelete={handlers.deleteChip} />
			)}
			<DsTable columns={enhancedColumns} columnFilters={columnFilters} data={rows} />
		</div>
	);
}

const getDataRows = () => page.getByRole('row').all().slice(1);

describe('DsTable - column filters', () => {
	it('opens the per-column popover, applies a selection, and filters the rows', async () => {
		await page.render(<TableWithColumnFilters />);

		expect(getDataRows()).toHaveLength(6);

		await page.getByRole('button', { name: 'Filter column' }).click();

		const ppLgxCheckbox = page.getByRole('checkbox', { name: 'PP-LGX' });
		const me10Checkbox = page.getByRole('checkbox', { name: 'ME10' });

		await ppLgxCheckbox.click();
		await me10Checkbox.click();

		await page.getByRole('button', { name: 'Save' }).click();

		expect(getDataRows()).toHaveLength(4);

		await expect.element(page.getByText(/Filtered by/i)).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Type: PP-LGX' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Type: ME10' })).toBeVisible();
	});

	it('discards the draft selection when the popover is dismissed without Save', async () => {
		await page.render(<TableWithColumnFilters />);

		const triggerLocator = page.getByRole('button', { name: 'Filter column' });
		await triggerLocator.click();
		await page.getByRole('checkbox', { name: 'OLT' }).click();
		await expect.element(page.getByRole('checkbox', { name: 'OLT' })).toBeChecked();

		// Dismiss the popover by clicking the trigger again (toggles closed)
		await triggerLocator.click();
		await expect.element(page.getByRole('checkbox', { name: 'OLT' })).not.toBeInTheDocument();

		await triggerLocator.click();
		await expect.element(page.getByRole('checkbox', { name: 'OLT' })).not.toBeChecked();
	});

	it('closes the popover and discards the draft when the user clicks outside', async () => {
		await page.render(
			<div>
				<button type="button">Outside</button>
				<TableWithColumnFilters />
			</div>,
		);

		const triggerLocator = page.getByRole('button', { name: 'Filter column' });
		await triggerLocator.click();
		await page.getByRole('checkbox', { name: 'OLT' }).click();
		await expect.element(page.getByRole('checkbox', { name: 'OLT' })).toBeChecked();

		await page.getByRole('button', { name: 'Outside' }).click();
		await expect.element(page.getByRole('checkbox', { name: 'OLT' })).not.toBeInTheDocument();

		await triggerLocator.click();
		await expect.element(page.getByRole('checkbox', { name: 'OLT' })).not.toBeChecked();
	});

	it('filters the in-popover list with the search input', async () => {
		await page.render(<TableWithColumnFilters />);

		await page.getByRole('button', { name: 'Filter column' }).click();

		const searchInput = page.getByPlaceholder('Search role');
		await searchInput.fill('ME');

		await expect.element(page.getByRole('checkbox', { name: 'ME10' })).toBeVisible();
		await expect.element(page.getByRole('checkbox', { name: 'PP-LGX' })).not.toBeInTheDocument();
		await expect.element(page.getByRole('checkbox', { name: 'OLT' })).not.toBeInTheDocument();
	});

	it('clears a single column filter from the popover Clear button', async () => {
		await page.render(<TableWithColumnFilters />);

		await page.getByRole('button', { name: 'Filter column' }).click();
		await page.getByRole('checkbox', { name: 'ME10' }).click();
		await page.getByRole('button', { name: 'Save' }).click();

		expect(getDataRows()).toHaveLength(2);

		await page.getByRole('button', { name: 'Filter column' }).click();
		await page.getByRole('button', { name: 'Clear', exact: true }).click();

		expect(getDataRows()).toHaveLength(6);
		await expect.element(page.getByText(/Filtered by/i)).not.toBeInTheDocument();
	});

	it('does not toggle column sorting when Save or Clear is clicked inside the popover', async () => {
		await page.render(<TableWithColumnFilters />);

		// Sort indicator is rendered as a `arrow_drop_up` / `arrow_drop_down`
		// material-symbol span next to the column label; absent when unsorted.
		// React portals bubble events through the React tree, so a missing
		// `stopPropagation` on the Popover.Content would let the Save / Clear
		// click reach the parent `<th onClick={sortHandler}>` and toggle sort.
		const ascending = page.getByText('arrow_drop_up');
		const descending = page.getByText('arrow_drop_down');

		await page.getByRole('button', { name: 'Filter column' }).click();
		await page.getByRole('checkbox', { name: 'ME10' }).click();
		await page.getByRole('button', { name: 'Save' }).click();

		await expect.element(ascending).not.toBeInTheDocument();
		await expect.element(descending).not.toBeInTheDocument();

		await page.getByRole('button', { name: 'Filter column' }).click();
		await page.getByRole('button', { name: 'Clear', exact: true }).click();

		await expect.element(ascending).not.toBeInTheDocument();
		await expect.element(descending).not.toBeInTheDocument();
	});
});
