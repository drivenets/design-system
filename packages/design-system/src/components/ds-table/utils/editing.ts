import type { RowData } from '@tanstack/react-table';
import type { EditingState } from '../hooks/use-editing-state';
import type { DsCell } from '../ds-table-features';

/** Whether `cell` is the cell currently open in the inline editor. */
export const isEditingCell = <TData extends RowData, TValue>(
	editing: EditingState<TData, TValue> | null,
	cell: DsCell<TData>,
): boolean =>
	editing !== null && editing.cell.row.id === cell.row.id && editing.cell.column.id === cell.column.id;
