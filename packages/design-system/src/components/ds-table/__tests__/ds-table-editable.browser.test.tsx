import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import DsTable from '../ds-table';
import {
	DsTableEditCellCheckbox,
	DsTableEditCellNumber,
	DsTableEditCellSelect,
	DsTableEditCellText,
} from '../components/edit/cell-editors';

interface TestRow {
	id: string;
	firstName: string;
	age: number;
	status: string;
	active: boolean;
}

const initialRows: TestRow[] = [
	{ id: '1', firstName: 'Tanner', age: 33, status: 'single', active: true },
	{ id: '2', firstName: 'Kevin', age: 28, status: 'relationship', active: false },
];

const statusOptions = [
	{ label: 'Single', value: 'single' },
	{ label: 'Relationship', value: 'relationship' },
	{ label: 'Complicated', value: 'complicated' },
];

interface WrapperProps {
	onCellEdit?: (rowId: string, columnId: string, value: unknown) => void;
	onRowClick?: (row: TestRow) => void;
	onRowDoubleClick?: (row: TestRow) => void;
}

const TableWrapper = ({ onCellEdit, onRowClick, onRowDoubleClick }: WrapperProps) => {
	const [rows, setRows] = useState(initialRows);

	const columns: ColumnDef<TestRow>[] = [
		{
			accessorKey: 'firstName',
			header: 'First Name',
			cell: (info) => info.getValue(),
			editCell: (info: CellContext<TestRow, string>) => <DsTableEditCellText cellContext={info} />,
		},
		{
			accessorKey: 'age',
			header: 'Age',
			cell: (info) => info.getValue(),
			editCell: (info: CellContext<TestRow, number>) => <DsTableEditCellNumber cellContext={info} />,
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: (info) => info.getValue(),
			editCell: (info: CellContext<TestRow, string>) => (
				<DsTableEditCellSelect cellContext={info} options={statusOptions} />
			),
		},
		{
			accessorKey: 'active',
			header: 'Active',
			cell: (info) => ((info.getValue() as boolean) ? 'Yes' : 'No'),
			editCell: (info: CellContext<TestRow, boolean>) => <DsTableEditCellCheckbox cellContext={info} />,
		},
	];

	return (
		<DsTable
			data={rows}
			columns={columns}
			onRowClick={onRowClick}
			onRowDoubleClick={onRowDoubleClick}
			onCellValidate={(_row, columnId, value) => {
				if (columnId === 'firstName') {
					return String(value).trim().length === 0 ? 'Required' : null;
				}
				if (columnId === 'age') {
					return Number(value) < 0 ? 'Must be \u2265 0' : null;
				}
				return null;
			}}
			onCellEdit={(row, columnId, value) => {
				onCellEdit?.(row.id, columnId, value);
				setRows((prev) => prev.map((r) => (r.id === row.id ? { ...r, [columnId]: value } : r)));
			}}
		/>
	);
};

const getEditableCell = (rowIndex: number, columnIndex: number): HTMLElement => {
	const selector = `tbody tr:nth-child(${String(rowIndex)}) td:nth-child(${String(columnIndex)}) [role="button"]`;
	const cell = document.querySelector(selector);
	if (!(cell instanceof HTMLElement)) {
		throw new Error(`Expected editable cell at row ${String(rowIndex)} col ${String(columnIndex)}`);
	}
	return cell;
};

const confirmEdit = async () => {
	await page.getByRole('button', { name: 'Confirm edit' }).click();
};

describe('DsTable Editable Cells', () => {
	it('text editor: double-click, type, Enter commits via onCellEdit', async () => {
		const onCellEdit = vi.fn();

		await page.render(<TableWrapper onCellEdit={onCellEdit} />);

		const firstNameCell = getEditableCell(1, 1);
		await page.elementLocator(firstNameCell).dblClick();

		const input = page.getByRole('textbox').first();
		await expect.element(input).toBeVisible();

		await userEvent.keyboard('NewName');
		await userEvent.keyboard('{Enter}');

		expect(onCellEdit).toHaveBeenCalledWith('1', 'firstName', 'NewName');
		await expect.element(page.getByText('NewName')).toBeVisible();
	});

	it('text editor: Escape cancels without firing onCellEdit', async () => {
		const onCellEdit = vi.fn();

		await page.render(<TableWrapper onCellEdit={onCellEdit} />);

		const firstNameCell = getEditableCell(1, 1);
		await page.elementLocator(firstNameCell).dblClick();

		await userEvent.keyboard('Discarded');
		await userEvent.keyboard('{Escape}');

		expect(onCellEdit).not.toHaveBeenCalled();
		await expect.element(page.getByText('Tanner')).toBeVisible();
	});

	it('text editor: validation rejects empty value, error message visible, onCellEdit not fired', async () => {
		const onCellEdit = vi.fn();

		await page.render(<TableWrapper onCellEdit={onCellEdit} />);

		const firstNameCell = getEditableCell(1, 1);
		await page.elementLocator(firstNameCell).dblClick();

		const input = page.getByRole('textbox').first();
		await input.clear();
		await userEvent.keyboard('{Enter}');

		await expect.element(page.getByText('Required')).toBeVisible();
		expect(onCellEdit).not.toHaveBeenCalled();
	});

	it('checkbox editor: double-click, toggle, confirm commits', async () => {
		const onCellEdit = vi.fn();

		await page.render(<TableWrapper onCellEdit={onCellEdit} />);

		const activeCell = getEditableCell(1, 4);
		await page.elementLocator(activeCell).dblClick();

		const checkbox = page.getByRole('checkbox').first();
		await checkbox.click();
		await confirmEdit();

		expect(onCellEdit).toHaveBeenCalledWith('1', 'active', false);
	});

	it('select editor: picking an option and confirming commits', async () => {
		const onCellEdit = vi.fn();

		await page.render(<TableWrapper onCellEdit={onCellEdit} />);

		const statusCell = getEditableCell(1, 3);
		await page.elementLocator(statusCell).dblClick();

		await page.getByRole('combobox').click();
		await page.getByRole('option', { name: 'Complicated' }).click();
		await confirmEdit();

		expect(onCellEdit).toHaveBeenCalledWith('1', 'status', 'complicated');
	});

	it('single-cell invariant: opening a second cell discards the first draft', async () => {
		const onCellEdit = vi.fn();

		await page.render(<TableWrapper onCellEdit={onCellEdit} />);

		await page.elementLocator(getEditableCell(1, 1)).dblClick();

		const input = page.getByRole('textbox').first();
		await input.clear();
		await input.fill('Updated');

		await page.elementLocator(getEditableCell(2, 1)).dblClick();

		expect(onCellEdit).not.toHaveBeenCalled();
		await expect.element(page.getByText('Tanner')).toBeVisible();

		const editingInput = page.getByRole('textbox').first();
		await expect.element(editingInput).toBeVisible();
		await expect.element(editingInput).toHaveValue('Kevin');
	});

	it('single-cell invariant: switching cells discards invalid draft on the first cell', async () => {
		const onCellEdit = vi.fn();

		await page.render(<TableWrapper onCellEdit={onCellEdit} />);

		await page.elementLocator(getEditableCell(1, 1)).dblClick();

		const input = page.getByRole('textbox').first();
		await input.clear();

		await page.elementLocator(getEditableCell(2, 1)).dblClick();

		expect(onCellEdit).not.toHaveBeenCalled();
		await expect.element(page.getByText('Tanner')).toBeVisible();

		const editingInput = page.getByRole('textbox').first();
		await expect.element(editingInput).toBeVisible();
		await expect.element(editingInput).toHaveValue('Kevin');
	});

	it('row interactions: single-click on an editable cell does not fire onRowDoubleClick', async () => {
		const onRowClick = vi.fn();
		const onRowDoubleClick = vi.fn();

		await page.render(<TableWrapper onRowClick={onRowClick} onRowDoubleClick={onRowDoubleClick} />);

		const firstNameCell = getEditableCell(1, 1);

		await page.elementLocator(firstNameCell).click();
		expect(onRowClick).toHaveBeenCalledTimes(1);

		await page.elementLocator(firstNameCell).dblClick();
		expect(onRowDoubleClick).not.toHaveBeenCalled();
	});
});
