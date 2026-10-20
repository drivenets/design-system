import type { Cell } from '@tanstack/react-table';
import type { EditingState } from '../hooks/use-editing-state';

/** Whether `cell` is the cell currently open in the inline editor. */
export const isEditingCell = <TData, TValue>(
	editing: EditingState<TData, TValue> | null,
	cell: Cell<TData, unknown>,
): boolean =>
	editing !== null && editing.cell.row.id === cell.row.id && editing.cell.column.id === cell.column.id;
