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
});
