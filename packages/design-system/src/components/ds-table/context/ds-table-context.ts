import { createContext, useCallback, useContext, useRef, useState } from 'react';
import type { Cell } from '@tanstack/react-table';
import type { DsDataTableProps, DsTableRowSize } from '../ds-table.types';

export interface EditingState<TData, TValue> {
	cell: Cell<TData, TValue>;
	draftValue: TValue;
	error: string | null;
}

export interface DsTableContextType<TData, TValue> extends Partial<DsDataTableProps<TData, TValue>> {
	/**
	 * Whether the table is virtualized
	 * @default false
	 */
	virtualized?: boolean;
	/**
	 * Row size variant
	 * @default 'medium'
	 */
	rowSize: DsTableRowSize;
	/**
	 * ID of the currently active row
	 */
	activeRowId?: string | null;
	/**
	 * Toggles the collapsed state of a column group by its id.
	 */
	onToggleColumnGroup?: (groupId: string) => void;
	/** The cell currently in edit mode, if any. */
	editing: EditingState<TData, TValue> | null;
	beginEdit: (cell: Cell<TData, TValue>) => void;
	setDraft: (value: TValue) => void;
	commit: (overrideValue?: TValue) => void;
	cancel: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DsTableContext = createContext<DsTableContextType<any, any> | null>(null);

export const useDsTableContext = <TData, TValue>(): DsTableContextType<TData, TValue> => {
	const context = useContext(DsTableContext);
	if (!context) {
		throw new Error('useDsTableContext must be used within DsTable');
	}
	return context as DsTableContextType<TData, TValue>;
};

/**
 * Hoisted editing state for single-cell-at-a-time inline editing.
 * Lives on {@link DsTableContext} so cell renderers and editors share one provider.
 */
export const useEditingState = <TData, TValue>(
	onCellEdit?: (row: TData, columnId: string, value: TValue) => void,
	onCellValidate?: (row: TData, columnId: string, value: TValue) => string | null,
) => {
	const [editing, setEditing] = useState<EditingState<TData, TValue> | null>(null);

	const onCellEditRef = useRef(onCellEdit);
	onCellEditRef.current = onCellEdit;

	const onCellValidateRef = useRef(onCellValidate);
	onCellValidateRef.current = onCellValidate;

	const editingRef = useRef(editing);
	editingRef.current = editing;

	const beginEdit = useCallback((cell: Cell<TData, TValue>) => {
		const current = editingRef.current;
		if (current) {
			const isSameCell = current.cell.row.id === cell.row.id && current.cell.column.id === cell.column.id;
			if (isSameCell) {
				return;
			}
		}
		setEditing({
			cell,
			draftValue: cell.getValue(),
			error: null,
		});
	}, []);

	const setDraft = useCallback((value: TValue) => {
		const current = editingRef.current;
		if (!current) {
			return;
		}
		setEditing({ ...current, draftValue: value, error: null });
	}, []);

	const commit = useCallback((overrideValue?: TValue) => {
		const current = editingRef.current;
		if (!current) {
			return;
		}
		const valueToCommit = overrideValue !== undefined ? overrideValue : current.draftValue;
		const error =
			onCellValidateRef.current?.(current.cell.row.original, current.cell.column.id, valueToCommit) ?? null;
		if (error !== null) {
			setEditing({ ...current, draftValue: valueToCommit, error });
			return;
		}
		onCellEditRef.current?.(current.cell.row.original, current.cell.column.id, valueToCommit);
		setEditing(null);
	}, []);

	const cancel = useCallback(() => {
		setEditing(null);
	}, []);

	return { editing, beginEdit, setDraft, commit, cancel };
};
