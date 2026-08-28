import { createContext, useContext, useMemo, type ReactNode, type RefObject } from 'react';
import type { DsDataTableProps, DsTableRowSize } from '../ds-table.types';
import type { DsTablePropsWithDefaults } from '../ds-table-defaults';
import type { DsTableResizeContextSlice } from '../hooks/use-column-resize';
import type { ScrollbarSpacerWidth } from '../hooks/use-scrollbar-spacer';
import { useEditingState, type UseEditingStateResult } from '../hooks/use-editing-state';

/** Visual phase of the full-height column-resize divider. */
export type DsTableResizePhase = 'hover' | 'dragging';

export interface DsTableContextType<TData, TValue>
	extends Partial<DsDataTableProps<TData, TValue>>, UseEditingStateResult<TData, TValue> {
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
	/**
	 * Ref to the scroll container, used to anchor the full-height resize drag
	 * indicator and to measure boundary offsets while resizing.
	 */
	resizeContainerRef?: RefObject<HTMLDivElement | null>;
	/**
	 * True once every visible leaf has a `columnSizing` entry (snapshotted or
	 * user-resized), so cells should read widths from CSS variables.
	 */
	resizeSizingReady?: boolean;
	/**
	 * Reports hover on a resize handle. Pass the column id and boundary x-offset
	 * (relative to the scroll container), or `null` to clear.
	 */
	onResizeHover?: (columnId: string | null, offset: number | null) => void;
	/**
	 * Captures the cell right-edge offset at pointer-down so the overlay can
	 * follow `columnSizingInfo.deltaOffset` without extra context updates.
	 */
	onResizeDragStart?: (offset: number) => void;
	/**
	 * Restores snapshotted (or `columnDef.size`) widths for the given leaf ids.
	 */
	onResizeReset?: (columnIds: string[]) => void;
	/**
	 * Keyboard resize for a focused handle: signed px `delta` applied to the
	 * boundary header's column (leaf or group). Clamps and fires persist.
	 */
	onResizeKeyboardNudge?: (columnId: string, delta: number) => void;
	/**
	 * Overflow-only **Scrollbar spacer** width (0 or rest scrollbar size).
	 */
	scrollbarSpacerWidth: ScrollbarSpacerWidth;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DsTableContext = createContext<DsTableContextType<any, any> | null>(null);

export const useDsTableContext = <TData, TValue>(): DsTableContextType<TData, TValue> => {
	const context = useContext(DsTableContext);
	if (!context) {
		throw new Error('useDsTableContext must be used within DsTable');
	}
	return context as DsTableContextType<TData, TValue>;
};

interface DsTableContextProviderDerived {
	grouping: {
		collapsedColumnGroups: string[];
		onToggleColumnGroup: (groupId: string) => void;
	};
	resize: DsTableResizeContextSlice;
}

export interface DsTableContextProviderProps<TData, TValue> {
	tableProps: DsTablePropsWithDefaults<TData, TValue>;
	derived: DsTableContextProviderDerived;
	children: ReactNode;
}

/**
 * Assembles {@link DsTableContext} from public table props plus derived grouping
 * and resize slices. Owns inline-edit state. Picks context fields from
 * `tableProps` and ignores the rest (`columns`, `data`, etc.).
 */
export const DsTableContextProvider = <TData, TValue>({
	tableProps,
	derived,
	children,
}: DsTableContextProviderProps<TData, TValue>) => {
	const {
		stickyHeader,
		bordered,
		fullWidth,
		rowSize,
		expandable,
		selectable,
		reorderable,
		showSelectAllCheckbox,
		loading,
		onRowClick,
		onRowDoubleClick,
		primaryRowActions,
		secondaryRowActions,
		renderExpandedRow,
		virtualized,
		activeRowId,
		locale,
		onCellEdit,
		onCellValidate,
	} = tableProps;

	const { collapsedColumnGroups, onToggleColumnGroup } = derived.grouping;
	const {
		resizableColumns,
		resizeSizingReady,
		resizeContainerRef,
		onResizeHover,
		onResizeDragStart,
		onResizeReset,
		onResizeKeyboardNudge,
		scrollbarSpacerWidth,
	} = derived.resize;

	const { editing, beginEdit, setDraft, commit, cancel } = useEditingState<TData, TValue>(
		onCellEdit,
		onCellValidate,
	);

	const contextValue: DsTableContextType<TData, TValue> = useMemo(
		() => ({
			stickyHeader,
			bordered,
			fullWidth,
			rowSize,
			expandable,
			selectable,
			reorderable,
			showSelectAllCheckbox,
			loading,
			onRowClick: loading ? undefined : onRowClick,
			onRowDoubleClick: loading ? undefined : onRowDoubleClick,
			primaryRowActions,
			secondaryRowActions,
			renderExpandedRow,
			virtualized,
			activeRowId,
			collapsedColumnGroups,
			onToggleColumnGroup,
			locale,
			onCellEdit,
			resizableColumns,
			resizeSizingReady,
			resizeContainerRef,
			onResizeHover,
			onResizeDragStart,
			onResizeReset,
			onResizeKeyboardNudge,
			scrollbarSpacerWidth,
			editing,
			beginEdit,
			setDraft,
			commit,
			cancel,
		}),
		[
			stickyHeader,
			bordered,
			fullWidth,
			rowSize,
			expandable,
			selectable,
			reorderable,
			showSelectAllCheckbox,
			loading,
			onRowClick,
			onRowDoubleClick,
			primaryRowActions,
			secondaryRowActions,
			renderExpandedRow,
			virtualized,
			activeRowId,
			collapsedColumnGroups,
			onToggleColumnGroup,
			locale,
			onCellEdit,
			resizableColumns,
			resizeSizingReady,
			resizeContainerRef,
			onResizeHover,
			onResizeDragStart,
			onResizeReset,
			onResizeKeyboardNudge,
			scrollbarSpacerWidth,
			editing,
			beginEdit,
			setDraft,
			commit,
			cancel,
		],
	);

	return <DsTableContext.Provider value={contextValue}>{children}</DsTableContext.Provider>;
};

DsTableContextProvider.displayName = 'DsTableContextProvider';
