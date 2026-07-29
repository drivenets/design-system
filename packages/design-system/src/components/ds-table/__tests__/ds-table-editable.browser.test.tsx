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
			editDisabled: (info: CellContext<TestRow, number>) => {
				if (info.row.original.id === '1') {
					return { reason: 'Age is locked' };
				}
				if (info.row.original.id === '2') {
					return true;
				}
				return false;
			},
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

const getCell = (rowIndex: number, columnIndex: number): HTMLElement => {
	const selector = `tbody tr:nth-child(${String(rowIndex)}) td:nth-child(${String(columnIndex)})`;
	const cell = document.querySelector(selector);
	if (!(cell instanceof HTMLElement)) {
		throw new Error(`Expected cell at row ${String(rowIndex)} col ${String(columnIndex)}`);
	}
	return cell;
};

const confirmEdit = async () => {
	await page.getByRole('button', { name: 'Confirm edit' }).click();
};

interface Deferred<T> {
	promise: Promise<T>;
	resolve: (value: T) => void;
	reject: (reason?: unknown) => void;
}

const createDeferred = <T,>(): Deferred<T> => {
	let resolve!: (value: T) => void;
	let reject!: (reason?: unknown) => void;
	const promise = new Promise<T>((res, rej) => {
		resolve = res;
		reject = rej;
	});
	return { promise, resolve, reject };
};

/** Rejects with a plain string (non-`Error`) to exercise the generic fallback message. */
const rejectWithString = (): Promise<string | null> => {
	// eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
	return Promise.reject('non-error reason');
};

type CommitResult = string | null | undefined;

interface AsyncEditWrapperProps {
	save: (value: string, signal: AbortSignal) => CommitResult | Promise<CommitResult>;
	onCommitted?: (rowId: string, columnId: string, value: unknown) => void;
}

/** Exercises a fallible `onCellEdit` (save-on-commit) with no separate validator. */
const AsyncEditWrapper = ({ save, onCommitted }: AsyncEditWrapperProps) => {
	const [rows, setRows] = useState(initialRows);

	const columns: ColumnDef<TestRow>[] = [
		{
			accessorKey: 'firstName',
			header: 'First Name',
			cell: (info) => info.getValue(),
			editCell: (info: CellContext<TestRow, string>) => <DsTableEditCellText cellContext={info} />,
		},
	];

	return (
		<DsTable
			data={rows}
			columns={columns}
			onCellEdit={(row, columnId, value, signal) => {
				const applyResult = (error: CommitResult): string | null => {
					const message = error ?? null;
					if (message !== null) {
						return message;
					}
					onCommitted?.(row.id, columnId, value);
					setRows((prev) => prev.map((r) => (r.id === row.id ? { ...r, [columnId]: value } : r)));
					return null;
				};

				const result = save(value as string, signal);
				if (result instanceof Promise) {
					return result.then(applyResult);
				}
				return applyResult(result);
			}}
		/>
	);
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

	it('live validation: error appears on keystroke and disables Confirm before any commit attempt', async () => {
		const onCellEdit = vi.fn();

		await page.render(<TableWrapper onCellEdit={onCellEdit} />);

		await page.elementLocator(getEditableCell(1, 1)).dblClick();

		const input = page.getByRole('textbox').first();
		await input.clear();

		await expect.element(page.getByText('Required')).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Confirm edit' })).toBeDisabled();
		expect(onCellEdit).not.toHaveBeenCalled();
	});

	it('live validation: fixing the value clears the error, re-enables Confirm, and commits', async () => {
		const onCellEdit = vi.fn();

		await page.render(<TableWrapper onCellEdit={onCellEdit} />);

		await page.elementLocator(getEditableCell(1, 1)).dblClick();

		const input = page.getByRole('textbox').first();
		await input.clear();
		await expect.element(page.getByRole('button', { name: 'Confirm edit' })).toBeDisabled();

		await userEvent.keyboard('Valid');
		await expect.element(page.getByText('Required')).not.toBeInTheDocument();

		const confirm = page.getByRole('button', { name: 'Confirm edit' });
		await expect.element(confirm).toBeEnabled();
		await confirm.click();

		expect(onCellEdit).toHaveBeenCalledWith('1', 'firstName', 'Valid');
		await expect.element(page.getByText('Valid')).toBeVisible();
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

		// Edit the lower row and switch up: the invalid draft surfaces a live error,
		// which grows the editing overlay downward, so we open a cell above it.
		await page.elementLocator(getEditableCell(2, 1)).dblClick();

		const input = page.getByRole('textbox').first();
		await input.clear();
		await expect.element(page.getByText('Required')).toBeVisible();

		await page.elementLocator(getEditableCell(1, 1)).dblClick();

		expect(onCellEdit).not.toHaveBeenCalled();
		await expect.element(page.getByText('Kevin')).toBeVisible();

		const editingInput = page.getByRole('textbox').first();
		await expect.element(editingInput).toBeVisible();
		await expect.element(editingInput).toHaveValue('Tanner');
	});

	it('locked cell with a reason: shows the lock icon and double-click does not enter edit mode', async () => {
		const onCellEdit = vi.fn();

		await page.render(<TableWrapper onCellEdit={onCellEdit} />);

		const ageCell = getCell(1, 2);
		const lockIcon = page.elementLocator(ageCell).getByRole('img', { name: 'Editing disabled' });
		await expect.element(lockIcon).toBeVisible();

		await page.elementLocator(ageCell).dblClick();

		await expect.element(page.getByRole('spinbutton')).not.toBeInTheDocument();
		expect(onCellEdit).not.toHaveBeenCalled();
	});

	it('locked cell with a reason: hovering the lock icon reveals the reason tooltip', async () => {
		await page.render(<TableWrapper />);

		const ageCell = getCell(1, 2);
		await page.elementLocator(ageCell).getByRole('img', { name: 'Editing disabled' }).hover();

		await expect.element(page.getByRole('tooltip', { name: 'Age is locked' })).toBeVisible();
	});

	it('locked cell without a reason: shows the lock icon and no tooltip on hover', async () => {
		await page.render(<TableWrapper />);

		const ageCell = getCell(2, 2);
		const lockIcon = page.elementLocator(ageCell).getByRole('img', { name: 'Editing disabled' });
		await expect.element(lockIcon).toBeVisible();

		await lockIcon.hover();
		await expect.element(page.getByRole('tooltip')).not.toBeInTheDocument();
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

describe('DsTable Async Cell Commit (fallible onCellEdit)', () => {
	it('async commit resolves nothing: closes the editor and reflects the new value', async () => {
		const onCommitted = vi.fn();

		await page.render(<AsyncEditWrapper save={() => Promise.resolve(null)} onCommitted={onCommitted} />);

		await page.elementLocator(getEditableCell(1, 1)).dblClick();
		await userEvent.keyboard('NewName');
		await userEvent.keyboard('{Enter}');

		await expect.element(page.getByText('NewName')).toBeVisible();
		expect(onCommitted).toHaveBeenCalledWith('1', 'firstName', 'NewName');
		await expect.element(page.getByRole('textbox')).not.toBeInTheDocument();
	});

	it('async commit resolves an error string: keeps the cell open with the message', async () => {
		const onCommitted = vi.fn();

		await page.render(
			<AsyncEditWrapper save={() => Promise.resolve('Name taken')} onCommitted={onCommitted} />,
		);

		await page.elementLocator(getEditableCell(1, 1)).dblClick();
		await userEvent.keyboard('Bad');
		await userEvent.keyboard('{Enter}');

		await expect.element(page.getByText('Name taken')).toBeVisible();
		expect(onCommitted).not.toHaveBeenCalled();
		await expect.element(page.getByRole('textbox').first()).toBeVisible();
	});

	it('pending commit locks the input and Confirm while Cancel stays enabled and discards the late result', async () => {
		const onCommitted = vi.fn();
		const deferred = createDeferred<string | null>();

		await page.render(<AsyncEditWrapper save={() => deferred.promise} onCommitted={onCommitted} />);

		await page.elementLocator(getEditableCell(1, 1)).dblClick();
		await userEvent.keyboard('NewName');
		await userEvent.keyboard('{Enter}');

		const input = page.getByRole('textbox').first();
		await expect.element(input).toBeDisabled();
		await expect.element(page.getByRole('button', { name: 'Confirm edit' })).toBeDisabled();
		await expect.element(page.getByRole('button', { name: 'Cancel edit' })).toBeEnabled();

		await page.getByRole('button', { name: 'Cancel edit' }).click();
		await expect.element(page.getByRole('textbox')).not.toBeInTheDocument();

		// A late resolution (even an error) must not reopen the editor or surface its result.
		deferred.resolve('Late error');

		await expect.element(page.getByText('Tanner')).toBeVisible();
		await expect.element(page.getByText('Late error')).not.toBeInTheDocument();
		await expect.element(page.getByRole('textbox')).not.toBeInTheDocument();
	});

	it('rejected commit with an Error shows the error message and keeps the cell open', async () => {
		const onCommitted = vi.fn();

		await page.render(
			<AsyncEditWrapper
				save={() => Promise.reject(new Error('Server unavailable'))}
				onCommitted={onCommitted}
			/>,
		);

		await page.elementLocator(getEditableCell(1, 1)).dblClick();
		await userEvent.keyboard('NewName');
		await userEvent.keyboard('{Enter}');

		await expect.element(page.getByText('Server unavailable')).toBeVisible();
		expect(onCommitted).not.toHaveBeenCalled();
		await expect.element(page.getByRole('textbox').first()).toBeVisible();
	});

	it('rejected commit with a non-Error shows the fallback message and keeps the cell open', async () => {
		const onCommitted = vi.fn();

		await page.render(<AsyncEditWrapper save={rejectWithString} onCommitted={onCommitted} />);

		await page.elementLocator(getEditableCell(1, 1)).dblClick();
		await userEvent.keyboard('NewName');
		await userEvent.keyboard('{Enter}');

		await expect.element(page.getByText('Save failed')).toBeVisible();
		expect(onCommitted).not.toHaveBeenCalled();
		await expect.element(page.getByRole('textbox').first()).toBeVisible();
	});
});

describe('DsTable Async Cell AbortSignal', () => {
	it('aborts the commit signal when the edit is cancelled', async () => {
		const deferred = createDeferred<string | null>();
		let signal: AbortSignal | undefined;

		await page.render(
			<AsyncEditWrapper
				save={(_value, received) => {
					signal = received;
					return deferred.promise;
				}}
			/>,
		);

		await page.elementLocator(getEditableCell(1, 1)).dblClick();
		await userEvent.keyboard('NewName');
		await userEvent.keyboard('{Enter}');

		await expect.element(page.getByRole('textbox').first()).toBeDisabled();
		expect(signal?.aborted).toBe(false);

		await page.getByRole('button', { name: 'Cancel edit' }).click();

		expect(signal?.aborted).toBe(true);
	});

	it('aborts the commit signal when the user switches to another cell', async () => {
		const deferred = createDeferred<string | null>();
		let signal: AbortSignal | undefined;

		await page.render(
			<AsyncEditWrapper
				save={(_value, received) => {
					signal = received;
					return deferred.promise;
				}}
			/>,
		);

		await page.elementLocator(getEditableCell(1, 1)).dblClick();
		await userEvent.keyboard('NewName');
		await userEvent.keyboard('{Enter}');

		await expect.element(page.getByRole('textbox').first()).toBeDisabled();
		expect(signal?.aborted).toBe(false);

		await page.elementLocator(getEditableCell(2, 1)).dblClick();

		expect(signal?.aborted).toBe(true);

		const editingInput = page.getByRole('textbox').first();
		await expect.element(editingInput).toBeVisible();
		await expect.element(editingInput).toHaveValue('Kevin');
	});
});
