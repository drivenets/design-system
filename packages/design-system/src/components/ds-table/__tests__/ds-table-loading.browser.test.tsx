import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import type { ColumnDef } from '@tanstack/react-table';
import DsTable from '../ds-table';
import { columns, defaultData, type Person } from '../stories/common/story-data';
import { SKELETON_ROW_COUNT } from '../utils/constants';

const getDataRows = () => page.getByRole('row').all().slice(1);

const getSkeletons = () => document.querySelectorAll('tbody [aria-hidden="true"]');

describe('DsTable loading', () => {
	it('renders skeleton placeholder rows instead of data while loading', async () => {
		await page.render(<DsTable columns={columns} data={defaultData} loading />);

		expect(getDataRows()).toHaveLength(SKELETON_ROW_COUNT);
		expect(getSkeletons().length).toBeGreaterThan(0);

		await expect.element(page.getByText('First Name')).toBeVisible();
		await expect.element(page.getByText('Tanner')).not.toBeInTheDocument();
	});

	it('renders real data when not loading', async () => {
		await page.render(<DsTable columns={columns} data={defaultData} loading={false} />);

		expect(getDataRows()).toHaveLength(defaultData.length);
		expect(getSkeletons().length).toBe(0);
	});

	it('does not fire onRowClick while loading', async () => {
		const onRowClick = vi.fn();

		await page.render(<DsTable columns={columns} data={defaultData} loading onRowClick={onRowClick} />);

		await page.getByRole('row').nth(1).click();

		expect(onRowClick).not.toHaveBeenCalled();
	});

	it('renders a column-defined custom loadingCell while loading', async () => {
		const customColumns: ColumnDef<Person>[] = columns.map((column, index) =>
			index === 0
				? Object.assign({}, column, { loadingCell: () => <span data-testid="custom-loading-cell" /> })
				: column,
		);

		await page.render(<DsTable columns={customColumns} data={defaultData} loading />);

		const customCells = document.querySelectorAll('[data-testid="custom-loading-cell"]');
		expect(customCells).toHaveLength(SKELETON_ROW_COUNT);

		// Columns without a custom loadingCell still render the default skeleton.
		expect(getSkeletons().length).toBeGreaterThan(0);
	});
});
