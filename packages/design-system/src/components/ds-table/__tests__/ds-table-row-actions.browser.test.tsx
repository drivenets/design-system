import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsTable from '../ds-table';
import type { Action } from '../ds-table.types';
import { columns, defaultData, type Person } from '../stories/common/story-data';

describe('DsTable - Row Actions', () => {
	it('should render reorderable table with order column', async () => {
		const onOrderChange = vi.fn();
		const fiveItems = defaultData.slice(0, 5);

		await page.render(
			<DsTable columns={columns} data={fiveItems} reorderable onOrderChange={onOrderChange} />,
		);

		const dataRows = page.getByRole('row').all().slice(1);

		expect(dataRows).toHaveLength(5);

		await expect.element(page.getByText('Order')).toBeVisible();
		await expect.element(page.getByRole('row').nth(1)).toHaveTextContent('Tanner');
		await expect.element(page.getByRole('row').nth(2)).toHaveTextContent('Kevin');
	});

	it('should show row action buttons on hover and respect disabled state', async () => {
		const editHandler = vi.fn();
		const openHandler = vi.fn();

		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				primaryRowActions={[
					{ icon: 'edit', label: 'Edit', onClick: editHandler },
					{
						icon: 'open_in_new',
						label: 'Open in New Window',
						disabled: (data: Person) => data.firstName === 'Tanner',
						onClick: openHandler,
					},
				]}
			/>,
		);

		const secondDataRow = page.getByRole('row').nth(2);

		await secondDataRow.hover();

		await secondDataRow.getByRole('button', { name: /^edit$/i }).click();
		expect(editHandler).toHaveBeenCalled();

		const firstDataRow = page.getByRole('row').nth(1);

		await firstDataRow.hover();

		await expect
			.element(firstDataRow.getByRole('button', { name: /open in new window/i }))
			.toHaveAttribute('aria-disabled', 'true');
	});

	it('should show bulk actions when rows are selected', async () => {
		const deleteHandler = vi.fn();
		const notifyHandler = vi.fn();

		const actions: Action<Person>[] = [
			{ icon: 'alarm', label: 'Notify', onClick: notifyHandler },
			{ icon: 'delete_outline', label: 'Delete', onClick: deleteHandler },
		];

		await page.render(<DsTable columns={columns} data={defaultData} selectable actions={actions} />);

		await page.getByRole('checkbox').nth(1).click();
		await page.getByRole('checkbox').nth(2).click();

		await expect.element(page.getByText(/items selected/i)).toBeVisible();

		await page.getByRole('button', { name: /notify/i }).click();
		expect(notifyHandler).toHaveBeenCalled();

		await page.getByRole('button', { name: /delete/i }).click();
		expect(deleteHandler).toHaveBeenCalled();

		await page.getByRole('checkbox').nth(1).click();
		await page.getByRole('checkbox').nth(2).click();

		await expect.element(page.getByText(/items selected/i)).not.toBeInTheDocument();
	});
});
