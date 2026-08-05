import { createContext, useCallback, useContext, useRef, useState } from 'react';
import type { Cell } from '@tanstack/react-table';
import type { DsDataTableProps, DsTableRowSize } from '../ds-table.types';

export interface EditingState<TData, TValue> {
	cell: Cell<TData, TValue>;
	draftValue: TValue;
	error: string | null;
	/** True while an async `onCellEdit` commit Promise is pending for this cell. */
	pending: boolean;
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

/** Shown when an async `onCellEdit` commit rejects with a non-`Error` reason. */
const EDIT_FALLBACK_ERROR = 'Save failed';

const isThenable = (value: unknown): value is Promise<unknown> =>
	typeof value === 'object' && value !== null && typeof (value as { then?: unknown }).then === 'function';

/** Prefer a thrown `Error`'s message; fall back to a generic string otherwise. */
const extractErrorMessage = (reason: unknown, fallback: string): string =>
	reason instanceof Error && reason.message ? reason.message : fallback;

/**
 * Hoisted editing state for single-cell-at-a-time inline editing.
 * Lives on {@link DsTableContext} so cell renderers and editors share one provider.
 */
export const useEditingState = <TData, TValue>(
	onCellEdit?: (
		row: TData,
		columnId: string,
		value: TValue,
		signal: AbortSignal,
	) => string | null | undefined | Promise<string | null | undefined>,
	onCellValidate?: (row: TData, columnId: string, value: TValue) => string | null,
) => {
	const [editing, setEditing] = useState<EditingState<TData, TValue> | null>(null);

	const onCellEditRef = useRef(onCellEdit);
	onCellEditRef.current = onCellEdit;

	const onCellValidateRef = useRef(onCellValidate);
	onCellValidateRef.current = onCellValidate;

	const editingRef = useRef(editing);
	editingRef.current = editing;

	// Bumped whenever the active editing session changes (begin/cancel/commit).
	// A pending async commit captures the current generation token and is discarded
	// on resolve if it no longer matches — guards against stale writes and repeat
	// commits.
	const generationRef = useRef(0);

	// AbortController for the in-flight commit attempt. Aborted when the attempt is
	// superseded (Cancel/Escape or switching cells) so consumers can cancel requests.
	const abortRef = useRef<AbortController | null>(null);

	const abortPending = useCallback(() => {
		abortRef.current?.abort();
		abortRef.current = null;
	}, []);

	const beginEdit = useCallback(
		(cell: Cell<TData, TValue>) => {
			const current = editingRef.current;
			if (current) {
				const isSameCell = current.cell.row.id === cell.row.id && current.cell.column.id === cell.column.id;
				if (isSameCell) {
					return;
				}
			}
			abortPending();
			generationRef.current += 1;
			setEditing({
				cell,
				draftValue: cell.getValue(),
				error: null,
				pending: false,
			});
		},
		[abortPending],
	);

	const setDraft = useCallback((value: TValue) => {
		const current = editingRef.current;
		if (!current) {
			return;
		}
		// Live, per-keystroke validation: surface (or clear) the inline error as the
		// user types so the Confirm button can gate on it.
		const error =
			onCellValidateRef.current?.(current.cell.row.original, current.cell.column.id, value) ?? null;
		setEditing({ ...current, draftValue: value, error });
	}, []);

	const commit = useCallback(
		(overrideValue?: TValue) => {
			const current = editingRef.current;
			if (!current || current.pending) {
				return;
			}

			const valueToCommit = overrideValue !== undefined ? overrideValue : current.draftValue;

			// Synchronous pre-commit gate. Also covers immediate-commit editors
			// (checkbox/select) that pass an override value without going through
			// setDraft, so the live error never had a chance to run.
			const validationError =
				onCellValidateRef.current?.(current.cell.row.original, current.cell.column.id, valueToCommit) ?? null;
			if (validationError !== null) {
				setEditing({ ...current, draftValue: valueToCommit, error: validationError, pending: false });
				return;
			}

			generationRef.current += 1;
			const token = generationRef.current;

			abortPending();
			const controller = new AbortController();
			abortRef.current = controller;
			const { signal } = controller;

			const isStale = () => generationRef.current !== token;

			// Release the controller once this attempt reaches a terminal state, unless a
			// newer attempt has already replaced it.
			const settle = () => {
				if (abortRef.current === controller) {
					abortRef.current = null;
				}
			};

			const showError = (error: string) => {
				settle();
				if (isStale()) {
					return;
				}
				const live = editingRef.current;
				setEditing(live ? { ...live, draftValue: valueToCommit, error, pending: false } : null);
			};

			// Persist via the fallible/async commit handler.
			const editResult = onCellEditRef.current?.(
				current.cell.row.original,
				current.cell.column.id,
				valueToCommit,
				signal,
			);

			const applyEditResult = (error: string | null) => {
				if (error !== null) {
					showError(error);
					return;
				}
				settle();
				if (isStale()) {
					return;
				}
				setEditing(null);
			};

			if (!isThenable(editResult)) {
				applyEditResult(editResult ?? null);
				return;
			}

			setEditing({ ...current, draftValue: valueToCommit, error: null, pending: true });
			editResult.then(
				(value) => {
					applyEditResult(value ?? null);
				},
				(reason: unknown) => {
					applyEditResult(extractErrorMessage(reason, EDIT_FALLBACK_ERROR));
				},
			);
		},
		[abortPending],
	);

	const cancel = useCallback(() => {
		abortPending();
		generationRef.current += 1;
		setEditing(null);
	}, [abortPending]);

	return { editing, beginEdit, setDraft, commit, cancel };
};
