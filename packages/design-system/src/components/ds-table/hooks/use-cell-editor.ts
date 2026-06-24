import { type KeyboardEventHandler, type MouseEvent, type MouseEventHandler } from 'react';
import type { CellContext, RowData } from '@tanstack/react-table';
import { useDsTableContext } from '../context/ds-table-context';

export interface UseCellEditorOptions<TData extends RowData, TValue> {
	/**
	 * The TanStack Table CellContext for this cell. Pass through
	 * the argument received in `ColumnDef.editCell`.
	 */
	cellContext: CellContext<TData, TValue>;
}

export interface UseCellEditorContainerProps {
	onKeyDown: KeyboardEventHandler<HTMLElement>;
	onClick: MouseEventHandler;
	onDoubleClick: MouseEventHandler;
}

export interface UseCellEditorResult<TValue> {
	/** The in-progress draft value for the active editor. */
	value: TValue;
	/** Validation error from the most recent commit attempt, if any. */
	error: string | null;
	/** Update the in-progress draft value. */
	setValue: (value: TValue) => void;
	/** Validate and commit the draft. */
	commit: (overrideValue?: TValue) => void;
	/** Discard the draft and exit edit mode. */
	cancel: () => void;
	/** Stop mouse events from triggering row-level handlers. */
	stopPropagation: (event: MouseEvent) => void;
	/** Spread on the custom `editCell` root for pointer isolation from row handlers. */
	editorContainerProps: UseCellEditorContainerProps;
}

/**
 * Wires a TanStack Table `editCell` renderer into DsTable's hoisted editing state.
 * Only mount this hook inside `ColumnDef.editCell` — the table cell layer handles
 * entering edit mode on double-click.
 */
export const useCellEditor = <TData extends RowData, TValue>({
	cellContext,
}: UseCellEditorOptions<TData, TValue>): UseCellEditorResult<TValue> => {
	const ctx = useDsTableContext<TData, TValue>();
	const { row, column, getValue } = cellContext;

	const isActiveCell =
		ctx.editing !== null && ctx.editing.cell.row.id === row.id && ctx.editing.cell.column.id === column.id;
	const value = isActiveCell && ctx.editing ? ctx.editing.draftValue : getValue();
	const error = isActiveCell && ctx.editing ? ctx.editing.error : null;

	const setValue = (next: TValue) => {
		ctx.setDraft(next);
	};

	const commit = (overrideValue?: TValue) => {
		ctx.commit(overrideValue);
	};

	const cancel = () => {
		ctx.cancel();
	};

	const stopPropagation = (event: MouseEvent) => {
		event.stopPropagation();
	};

	return {
		value,
		error,
		setValue,
		commit,
		cancel,
		stopPropagation,
		editorContainerProps: {
			onKeyDown: () => {},
			onClick: stopPropagation,
			onDoubleClick: stopPropagation,
		},
	};
};
