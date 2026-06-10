import { useRef, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsTable from '../ds-table';
import type { DsTableApi } from '../ds-table.types';
import { columns, defaultData, type Person } from '../stories/common/story-data';

const CHECKBOX_ROOT_LABEL = 'label[data-scope="checkbox"][data-part="root"]';

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

		const selectAllRoot = document.querySelector(`th ${CHECKBOX_ROOT_LABEL}`) as HTMLLabelElement;
		const firstRowRoot = document.querySelector(
			`tbody tr:nth-child(1) ${CHECKBOX_ROOT_LABEL}`,
		) as HTMLLabelElement;

		const selectAllLabel = page.elementLocator(selectAllRoot);
		const firstRowLabel = page.elementLocator(firstRowRoot);

		const selectAllInput = page.getByRole('checkbox').nth(0);
		const firstRowInput = page.getByRole('checkbox').nth(1);

		await expect.element(selectAllInput).not.toBeChecked();

		await firstRowLabel.click();
		await expect.element(firstRowInput).toBeChecked();
		expect(onSelectionChange).toHaveBeenCalled();

		await selectAllLabel.click();

		const checkboxesAfterSelectAll = page.getByRole('checkbox').all();

		for (const checkbox of checkboxesAfterSelectAll.slice(1)) {
			await expect.element(checkbox).toBeChecked();
		}

		await selectAllLabel.click();

		const checkboxesAfterDeselectAll = page.getByRole('checkbox').all();

		for (const checkbox of checkboxesAfterDeselectAll.slice(1)) {
			await expect.element(checkbox).not.toBeChecked();
		}
	});

	it('should not propagate checkbox click or double click to the row', async () => {
		const onRowClick = vi.fn();
		const onRowDoubleClick = vi.fn();

		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				selectable
				showSelectAllCheckbox={false}
				onRowClick={onRowClick}
				onRowDoubleClick={onRowDoubleClick}
			/>,
		);

		const firstRowCheckboxRoot = document.querySelector(
			`tbody tr:nth-child(1) ${CHECKBOX_ROOT_LABEL}`,
		) as HTMLLabelElement;

		await page.elementLocator(firstRowCheckboxRoot).click();
		expect(onRowClick).not.toHaveBeenCalled();

		await page.elementLocator(firstRowCheckboxRoot).dblClick();
		expect(onRowDoubleClick).not.toHaveBeenCalled();
		expect(onRowClick).not.toHaveBeenCalled();

		const firstNameCell = document.querySelector('tbody tr:nth-child(1) td:nth-child(2)');
		if (!(firstNameCell instanceof HTMLElement)) {
			throw new Error('Expected first name cell in first body row');
		}
		await page.elementLocator(firstNameCell).click();
		expect(onRowClick).toHaveBeenCalledTimes(1);
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

		const firstRowRoot = document.querySelector<HTMLLabelElement>(
			`tbody tr:nth-child(1) ${CHECKBOX_ROOT_LABEL}`,
		);
		const secondRowRoot = document.querySelector<HTMLLabelElement>(
			`tbody tr:nth-child(2) ${CHECKBOX_ROOT_LABEL}`,
		);
		if (!firstRowRoot || !secondRowRoot) {
			throw new Error('Expected first and second body row checkbox roots');
		}

		await page.elementLocator(firstRowRoot).click();
		await expect.element(page.getByText('Selected: 1 / 2')).toBeVisible();

		await page.elementLocator(secondRowRoot).click();
		await expect.element(page.getByText('Selected: 2 / 2')).toBeVisible();

		await expect.element(page.getByRole('checkbox').nth(2)).toBeDisabled();

		await page.elementLocator(firstRowRoot).click();
		await expect.element(page.getByText('Selected: 1 / 2')).toBeVisible();

		await expect.element(page.getByRole('checkbox').nth(2)).not.toBeDisabled();
	});

	it('should render select column alongside the reorder drag handle', async () => {
		const onSelectionChange = vi.fn();
		const onOrderChange = vi.fn();
		const onRowClick = vi.fn();

		await page.render(
			<DsTable
				columns={columns}
				data={defaultData}
				selectable
				reorderable
				onSelectionChange={onSelectionChange}
				onOrderChange={onOrderChange}
				onRowClick={onRowClick}
			/>,
		);

		const headerCells = document.querySelectorAll('thead tr > th');
		expect(headerCells[0]?.textContent).toContain('Order');
		expect(headerCells[1]?.querySelector(CHECKBOX_ROOT_LABEL)).not.toBeNull();

		const firstRowCells = document.querySelectorAll('tbody tr:nth-child(1) > td');
		expect(firstRowCells).toHaveLength(columns.length + 2);

		const firstRowCheckboxRoot = firstRowCells[1]?.querySelector(CHECKBOX_ROOT_LABEL) as HTMLLabelElement;

		await page.elementLocator(firstRowCheckboxRoot).click();
		expect(onSelectionChange).toHaveBeenLastCalledWith({ '1': true });
		await expect.element(page.getByRole('row').nth(1)).toHaveAttribute('data-state', 'selected');

		const dragHandle = document.querySelector('tbody tr:nth-child(1) > td:nth-child(1)') as HTMLElement;
		await page.elementLocator(dragHandle).click();
		expect(onRowClick).not.toHaveBeenCalled();

		const selectAllRoot = document.querySelector(`th ${CHECKBOX_ROOT_LABEL}`) as HTMLLabelElement;
		await page.elementLocator(selectAllRoot).click();
		for (const checkbox of page.getByRole('checkbox').all().slice(1)) {
			await expect.element(checkbox).toBeChecked();
		}

		expect(onOrderChange).not.toHaveBeenCalled();
	});
});
