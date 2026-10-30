import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsTable from '../ds-table';
import { columns, defaultData } from '../stories/common/story-data';
import { type DsColumnDef } from '../ds-table-features';

const getDataRows = () => page.getByRole('row').all().slice(1);

type Release = {
	id: string;
	name: string;
	releasedAt: Date;
};

const releaseColumns: DsColumnDef<Release>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
	},
	{
		accessorKey: 'releasedAt',
		header: 'Released At',
		cell: (info) => info.getValue<Date>().toISOString().slice(0, 10),
	},
];

const releaseData: Release[] = [
	{ id: '1', name: 'Beta', releasedAt: new Date('2024-03-15') },
	{ id: '2', name: 'Alpha', releasedAt: new Date('2023-11-02') },
	{ id: '3', name: 'Gamma', releasedAt: new Date('2025-06-20') },
	{ id: '4', name: 'Delta', releasedAt: new Date('2024-01-08') },
];

describe('DsTable', () => {
	it('should render all rows and column headers, and handle row click', async () => {
		const onRowClick = vi.fn();

		await page.render(<DsTable columns={columns} data={defaultData} onRowClick={onRowClick} />);

		expect(getDataRows()).toHaveLength(15);

		await expect.element(page.getByText('First Name')).toBeVisible();
		await expect.element(page.getByText('Last Name')).toBeVisible();
		await expect.element(page.getByText('Age')).toBeVisible();
		await expect.element(page.getByText('Visits')).toBeVisible();
		await expect.element(page.getByText('Status')).toBeVisible();
		await expect.element(page.getByText('Profile Progress')).toBeVisible();

		await page.getByRole('row').nth(1).click();

		expect(onRowClick).toHaveBeenCalled();
	});

	it('should sort data when clicking a column header', async () => {
		await page.render(<DsTable columns={columns} data={defaultData} />);

		const firstNameHeader = page.getByText('First Name');

		await firstNameHeader.click();

		await expect.element(page.getByRole('row').nth(1)).toMatchTextContent('Daniel');

		await firstNameHeader.click();

		await expect.element(page.getByRole('row').nth(1)).toMatchTextContent('Tanner');
	});

	it('should sort a number column descending first, then ascending', async () => {
		await page.render(<DsTable columns={columns} data={defaultData} />);

		const ageHeader = page.getByText('Age');

		await ageHeader.click();

		await expect.element(page.getByRole('row').nth(1)).toMatchTextContent('David');

		await ageHeader.click();

		await expect.element(page.getByRole('row').nth(1)).toMatchTextContent('Peter');
	});

	it('should sort a date column descending first, then ascending', async () => {
		await page.render(<DsTable columns={releaseColumns} data={releaseData} />);

		const releasedAtHeader = page.getByText('Released At');

		await releasedAtHeader.click();

		await expect.element(page.getByRole('row').nth(1)).toMatchTextContent('Gamma');

		await releasedAtHeader.click();

		await expect.element(page.getByRole('row').nth(1)).toMatchTextContent('Alpha');
	});

	it('should call onSortingChange with the sorting state on each header click', async () => {
		const onSortingChange = vi.fn();

		await page.render(<DsTable columns={columns} data={defaultData} onSortingChange={onSortingChange} />);

		const firstNameHeader = page.getByText('First Name');

		await firstNameHeader.click();

		expect(onSortingChange).toHaveBeenLastCalledWith([{ id: 'firstName', desc: false }]);

		await firstNameHeader.click();

		expect(onSortingChange).toHaveBeenLastCalledWith([{ id: 'firstName', desc: true }]);
		expect(onSortingChange).toHaveBeenCalledTimes(2);
	});

	it('should call the latest onSortingChange after it changes between renders', async () => {
		const initialOnSortingChange = vi.fn();
		const nextOnSortingChange = vi.fn();

		const { rerender } = await page.render(
			<DsTable columns={columns} data={defaultData} onSortingChange={initialOnSortingChange} />,
		);
		await rerender(<DsTable columns={columns} data={defaultData} onSortingChange={nextOnSortingChange} />);

		await page.getByText('First Name').click();

		expect(nextOnSortingChange).toHaveBeenCalledExactlyOnceWith([{ id: 'firstName', desc: false }]);
		expect(initialOnSortingChange).not.toHaveBeenCalled();
	});

	it('should show empty state when no data is provided', async () => {
		await page.render(
			<DsTable columns={columns} data={[]} emptyState={<div>No matching records found</div>} />,
		);

		await expect.element(page.getByText('No matching records found')).toBeVisible();
	});

	it('infers no-data empty state when data is empty and emptyState is omitted', async () => {
		await page.render(<DsTable columns={columns} data={[]} />);

		await expect.element(page.getByRole('status')).toHaveTextContent('No data to display.');
		await expect.element(page.getByText('First Name')).toBeVisible();
	});

	it('infers no-matches empty state when filters hide every row', async () => {
		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				columnFilters={[{ id: 'firstName', value: '__no-match__' }]}
			/>,
		);

		await expect.element(page.getByRole('status')).toHaveTextContent('No matching records found.');
		await expect.element(page.getByText('Tanner')).not.toBeInTheDocument();
	});

	it('does not show empty state while loading with empty data', async () => {
		await page.render(<DsTable columns={columns} data={[]} loading />);

		await expect.element(page.getByRole('status')).not.toBeInTheDocument();
		await expect.element(page.getByText('First Name')).toBeVisible();
	});
});
