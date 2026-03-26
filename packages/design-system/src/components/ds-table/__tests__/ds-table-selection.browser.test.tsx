import { useRef, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsTable from '../ds-table';
import type { DsTableApi } from '../ds-table.types';
import { columns, defaultData, type Person } from '../stories/common/story-data';

describe('DsTable Selection', () => {
	it('should select and deselect rows via checkboxes', async () => {
		const onSelectionChange = vi.fn();

		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				selectable={true}
				onSelectionChange={onSelectionChange}
			/>,
		);

		const selectAll = page.getByRole('checkbox').nth(0);
		const firstRowCheckbox = page.getByRole('checkbox').nth(1);

		await expect.element(selectAll).not.toBeChecked();

		await firstRowCheckbox.click();
		await expect.element(firstRowCheckbox).toBeChecked();
		expect(onSelectionChange).toHaveBeenCalled();

		await selectAll.click();

		const checkboxesAfterSelectAll = page.getByRole('checkbox').all();

		for (const checkbox of checkboxesAfterSelectAll.slice(1)) {
			await expect.element(checkbox).toBeChecked();
		}

		await selectAll.click();

		const checkboxesAfterDeselectAll = page.getByRole('checkbox').all();

		for (const checkbox of checkboxesAfterDeselectAll.slice(1)) {
			await expect.element(checkbox).not.toBeChecked();
		}
	});

	it('should support programmatic row selection via ref API', async () => {
		function ProgrammaticSelectionWrapper() {
			const tableRef = useRef<DsTableApi<Person>>(null);
			const [selectedRows, setSelectedRows] = useState<string[]>([]);

			const handleSelectionChange = (selection: Record<string, boolean>) => {
				setSelectedRows(Object.keys(selection));
			};

			return (
				<div>
					<p>Selected rows: {selectedRows.length > 0 ? selectedRows.join(', ') : 'None'}</p>
					<button type="button" onClick={() => tableRef.current?.selectRow('1')}>
						Select Row 1
					</button>
					<button type="button" onClick={() => tableRef.current?.selectAllRows()}>
						Select All
					</button>
					<button type="button" onClick={() => tableRef.current?.deselectAllRows()}>
						Deselect All
					</button>
					<button type="button" onClick={() => tableRef.current?.selectRows(['1', '2', '3'])}>
						Select First 3 Rows
					</button>
					<DsTable
						columns={columns}
						data={defaultData}
						selectable
						showSelectAllCheckbox={false}
						ref={tableRef}
						onSelectionChange={handleSelectionChange}
					/>
				</div>
			);
		}

		await page.render(<ProgrammaticSelectionWrapper />);

		await expect.element(page.getByText(/selected rows: none/i)).toBeVisible();

		await page.getByRole('button', { name: /select row 1/i }).click();
		await expect.element(page.getByText(/Selected rows: 1$/)).toBeVisible();

		await page.getByRole('button', { name: /^select all$/i }).click();

		const checkboxes = page.getByRole('checkbox').all();

		for (const checkbox of checkboxes) {
			await expect.element(checkbox).toBeChecked();
		}

		await page.getByRole('button', { name: /deselect all/i }).click();
		await expect.element(page.getByText(/selected rows: none/i)).toBeVisible();

		await page.getByRole('button', { name: /select first 3 rows/i }).click();

		const checkedCheckboxes = page.getByRole('checkbox', { checked: true }).all();

		expect(checkedCheckboxes).toHaveLength(3);
	});

	it('should enforce max selection limit', async () => {
		function MaxSelectionWrapper() {
			const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
			const maxSelections = 2;
			const selectedCount = Object.keys(rowSelection).filter((id) => rowSelection[id]).length;

			return (
				<div>
					<p>
						Selected: {selectedCount} / {maxSelections}
					</p>
					<DsTable
						columns={columns}
						data={defaultData}
						onSelectionChange={setRowSelection}
						selectable={(rowData) => rowSelection[rowData.id] || selectedCount < maxSelections}
						showSelectAllCheckbox={false}
					/>
				</div>
			);
		}

		await page.render(<MaxSelectionWrapper />);

		await expect.element(page.getByText('Selected: 0 / 2')).toBeVisible();

		await page.getByRole('checkbox').nth(0).click();
		await expect.element(page.getByText('Selected: 1 / 2')).toBeVisible();

		await page.getByRole('checkbox').nth(1).click();
		await expect.element(page.getByText('Selected: 2 / 2')).toBeVisible();

		await expect.element(page.getByRole('checkbox').nth(2)).toBeDisabled();

		await page.getByRole('checkbox').nth(0).click();
		await expect.element(page.getByText('Selected: 1 / 2')).toBeVisible();

		await expect.element(page.getByRole('checkbox').nth(2)).not.toBeDisabled();
	});
});
