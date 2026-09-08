import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsTable from '../ds-table';
import { columns, defaultData } from '../stories/common/story-data';

const getDataRows = () => page.getByRole('row').all().slice(1);

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

		await expect.element(page.getByRole('row').nth(1)).toHaveTextContent('Daniel');

		await firstNameHeader.click();

		await expect.element(page.getByRole('row').nth(1)).toHaveTextContent('Tanner');
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
