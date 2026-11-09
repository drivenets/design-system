import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
	type CSSProperties,
	type RefObject,
} from 'react';
import {
	functionalUpdate,
	type ColumnSizingState,
	type ColumnVisibilityState,
	type RowData,
	type Updater,
} from '@tanstack/react-table';
import {
	clampColumnSizing,
	collectMissingLeafSizing,
	getColumnSizeCssVars,
	getResizeOriginSize,
	growFillLeavesToContainer,
	isExplicitColumnWidth,
	isSameColumnSizing,
	measureLeafHeaderWidths,
	omitBuiltinColumnSizing,
	shiftColumnTrack,
	withUtilityColumnSizing,
	type ColumnSizeBoundsSource,
} from '../utils/column-size';
import { BUILTIN_COLUMN_IDS, RESIZE_DIVIDER_WIDTH, RESIZE_MIN_COLUMN_WIDTH } from '../utils/constants';
import type { DsTableResizePhase } from '../context/ds-table-context';
import { getColumnTrackWidth, getReservedScrollbarWidth, useScrollbarGutter } from './use-scrollbar-gutter';
import type { DsTableInstance } from '../ds-table-features';

const TRACK_MATCH_PX = 3;

const clampResizeOverlayOffset = (offset: number, tableWidth: number): number => {
	if (tableWidth <= RESIZE_DIVIDER_WIDTH) {
		return offset;
	}

	return Math.min(offset, tableWidth - RESIZE_DIVIDER_WIDTH);
};

export interface UseColumnResizeOptions {
	enabled: boolean;
	/**
	 * Persisted widths to restore. They fill leaves that have no width yet; seed
	 * measurement sizes the leaves absent from the map.
	 */
	columnSizing?: Record<string, number>;
	onColumnSizingChange?: (columnSizing: Record<string, number>) => void;
	/**
	 * Invalidates the leaf-width seed measurement (same role as in the former
	 * `DsTable` layout effect). Read as a dependency only.
	 */
	columns: unknown;
	columnVisibility: ColumnVisibilityState;
	/**
	 * Authored widths for injected utility leaves. Overlaid last so they win
	 * over persisted and resized widths.
	 */
	utilityColumnSizing?: ColumnSizingState;
}

export interface DsTableResizeContextSlice {
	resizableColumns: boolean;
	resizeSizingReady: boolean;
	scrollContainerRef: RefObject<HTMLDivElement | null>;
	onResizeHover: (columnId: string | null, offset: number | null) => void;
	onResizeDragStart: (offset: number) => void;
	onResizeReset: (columnIds: string[]) => void;
	/**
	 * Keyboard resize for a focused handle. `columnId` is the boundary header's
	 * column (leaf or group); `delta` is the signed px change. Clamps and fires
	 * the persist callback, mirroring drag end.
	 */
	onResizeKeyboardNudge: (columnId: string, delta: number) => void;
}

export interface UseColumnResizeActiveResize {
	offset: number;
	phase: DsTableResizePhase;
}

export interface UseColumnResizeBindResult {
	columnSizeVars: CSSProperties | undefined;
	activeResize: UseColumnResizeActiveResize | null;
	context: DsTableResizeContextSlice;
}

export interface UseColumnResizeTableOptions {
	enableColumnResizing: boolean;
	columnResizeMode: 'onChange';
	defaultColumn?: { minSize: number };
	initialState: { columnSizing: ColumnSizingState };
}

export interface UseColumnResizeResult<TData extends RowData> {
	tableOptions: UseColumnResizeTableOptions;
	bind: (table: DsTableInstance<TData>) => UseColumnResizeBindResult;
}

/**
 * Drives column resizing on the table's own `columnSizing` and `columnResizing`
 * state: origin snapshots, seed measurement, hover/drag overlay model, persist
 * callback, and the context slice consumed by resize handles.
 *
 * Call before `useTable`, spread `tableOptions` into it, then `bind(table)`
 * during render for CSS vars, overlay, and context.
 */
export const useColumnResize = <TData extends RowData>({
	enabled,
	columnSizing: columnSizingProp,
	onColumnSizingChange,
	columns,
	columnVisibility,
	utilityColumnSizing,
}: UseColumnResizeOptions): UseColumnResizeResult<TData> => {
	const [initialColumnSizing] = useState(() =>
		withUtilityColumnSizing(columnSizingProp ?? {}, utilityColumnSizing ?? {}),
	);
	const columnSizingPropRef = useRef(columnSizingProp);
	columnSizingPropRef.current = columnSizingProp;
	const [resizeHover, setResizeHover] = useState<{
		columnId: string;
		offset: number;
	} | null>(null);
	const dragStartOffsetRef = useRef<number | null>(null);
	const resizeOriginSizingRef = useRef<ColumnSizingState>({});
	const containerRef = useRef<HTMLDivElement>(null);
	const reservedScrollbarWidth = useScrollbarGutter(containerRef);
	const prevScrollbarWidthRef = useRef<number | null>(null);
	const utilityTrackWidth = Object.values(utilityColumnSizing ?? {}).reduce((sum, size) => sum + size, 0);
	const utilityTrackWidthRef = useRef(utilityTrackWidth);
	utilityTrackWidthRef.current = utilityTrackWidth;
	const prevUtilityTrackWidthRef = useRef<number | null>(null);
	const tableRef = useRef<DsTableInstance<TData> | null>(null);

	const onColumnSizingChangeRef = useRef(onColumnSizingChange);
	onColumnSizingChangeRef.current = onColumnSizingChange;
	const leafSizeBoundsRef = useRef<ColumnSizeBoundsSource[]>([]);

	const requireTable = useCallback((): DsTableInstance<TData> => {
		if (!tableRef.current) {
			throw new Error('useColumnResize: call bind(table) during render before using the table.');
		}

		return tableRef.current;
	}, []);

	const getColumnSizing = useCallback(
		(): ColumnSizingState => requireTable().atoms.columnSizing.get(),
		[requireTable],
	);

	const setColumnSizing = useCallback(
		(updater: Updater<ColumnSizingState>) => {
			requireTable().setColumnSizing((prev) => {
				const next = clampColumnSizing(functionalUpdate(updater, prev), leafSizeBoundsRef.current);

				return isSameColumnSizing(prev, next) ? prev : next;
			});
		},
		[requireTable],
	);

	const notifyColumnSizingChange = useCallback(() => {
		onColumnSizingChangeRef.current?.(omitBuiltinColumnSizing(getColumnSizing()));
	}, [getColumnSizing]);

	// TanStack drags bypass setColumnSizing's clamp; clamp and persist on drag end.
	useEffect(() => {
		const columnResizingAtom = requireTable().atoms.columnResizing;
		let wasResizing = Boolean(columnResizingAtom.get().isResizingColumn);
		const { unsubscribe } = columnResizingAtom.subscribe(({ isResizingColumn }) => {
			const ended = wasResizing && isResizingColumn === false;
			wasResizing = Boolean(isResizingColumn);

			if (ended) {
				setColumnSizing((prev) => prev);
				notifyColumnSizingChange();
			}
		});

		return unsubscribe;
	}, [requireTable, setColumnSizing, notifyColumnSizingChange]);

	const handleResizeHover = useCallback((columnId: string | null, offset: number | null) => {
		setResizeHover(columnId === null || offset === null ? null : { columnId, offset });
	}, []);

	const handleResizeDragStart = useCallback((offset: number) => {
		dragStartOffsetRef.current = offset;
	}, []);

	const handleResizeReset = useCallback(
		(columnIds: string[]) => {
			setColumnSizing((prev) => {
				const next = { ...prev };

				for (const id of columnIds) {
					const origin = resizeOriginSizingRef.current[id];
					if (origin !== undefined) {
						next[id] = origin;
					}
				}

				return next;
			});
			notifyColumnSizingChange();
		},
		[setColumnSizing, notifyColumnSizingChange],
	);

	const handleResizeKeyboardNudge = useCallback(
		(columnId: string, delta: number) => {
			const table = tableRef.current;
			const column = table?.getColumn(columnId);
			if (!table || !column) {
				return;
			}

			const leaves = column.getLeafColumns().filter((leaf) => leaf.getIsVisible() && leaf.getCanResize());
			const totalSize = leaves.reduce((sum, leaf) => sum + leaf.getSize(), 0);
			if (leaves.length === 0 || totalSize <= 0) {
				return;
			}

			// Distribute the delta across the boundary's leaves by their current
			// share. This mirrors TanStack's group-drag scaling and, for a single
			// leaf, applies the whole delta to it.
			setColumnSizing((prev) => {
				const next = { ...prev };
				for (const leaf of leaves) {
					const size = leaf.getSize();
					next[leaf.id] = Math.round(size + delta * (size / totalSize));
				}

				return next;
			});
			notifyColumnSizingChange();
		},
		[setColumnSizing, notifyColumnSizingChange],
	);

	// Utility columns keep their own width. When it changes, give the difference to the
	// other columns so they still fill the table. Keep above the seed effect: it overwrites the old width.
	useLayoutEffect(() => {
		const consumerLeafIds = requireTable()
			.getVisibleLeafColumns()
			.map((column) => column.id)
			.filter((id) => !BUILTIN_COLUMN_IDS.has(id));

		const getUtilityTrackShift = (): number => {
			const prevUtilityTrackWidth = prevUtilityTrackWidthRef.current;
			const container = containerRef.current;
			if (
				!enabled ||
				prevUtilityTrackWidth === null ||
				prevUtilityTrackWidth === utilityTrackWidth ||
				!container
			) {
				return 0;
			}

			prevUtilityTrackWidthRef.current = utilityTrackWidth;

			const columnSizing = getColumnSizing();
			let consumerTotal = 0;

			for (const id of consumerLeafIds) {
				consumerTotal += columnSizing[id] ?? 0;
			}

			if (Math.abs(consumerTotal + prevUtilityTrackWidth - getColumnTrackWidth(container)) > TRACK_MATCH_PX) {
				return 0;
			}

			return prevUtilityTrackWidth - utilityTrackWidth;
		};

		const shift = getUtilityTrackShift();

		setColumnSizing((prev) =>
			withUtilityColumnSizing(
				shift === 0 ? prev : shiftColumnTrack(prev, consumerLeafIds, shift, leafSizeBoundsRef.current),
				utilityColumnSizing ?? {},
			),
		);
	}, [enabled, utilityTrackWidth, utilityColumnSizing, requireTable, getColumnSizing, setColumnSizing]);

	useLayoutEffect(() => {
		prevScrollbarWidthRef.current = null;

		if (!enabled) {
			return;
		}

		const container = containerRef.current;
		const table = tableRef.current;
		if (!container || !table) {
			return;
		}

		const seedMissingLeaves = (): boolean => {
			if (container.getBoundingClientRect().width === 0) {
				return false;
			}

			const tableEl = container.querySelector('table');
			if (!(tableEl instanceof HTMLElement)) {
				return false;
			}

			const leaves = table.getVisibleLeafColumns();
			const leafIds = leaves.map((column) => column.id);
			const measured = measureLeafHeaderWidths(tableEl, leafIds);
			const fillableIds = leaves
				.filter((column) => !isExplicitColumnWidth(column, {}))
				.map((column) => column.id);
			// Excludes the vertical scrollbar gutter, whether the scrollbar fills it or not.
			const trackWidth = getColumnTrackWidth(container);
			const persisted = omitBuiltinColumnSizing(columnSizingPropRef.current ?? {});
			const columnSizing = { ...persisted, ...getColumnSizing() };
			const missing = collectMissingLeafSizing(measured, columnSizing, trackWidth, fillableIds);

			for (const column of leaves) {
				const measuredWidth = measured[column.id];
				if (measuredWidth === undefined || resizeOriginSizingRef.current[column.id] !== undefined) {
					continue;
				}

				resizeOriginSizingRef.current[column.id] = getResizeOriginSize(
					column,
					missing[column.id] ?? Math.round(measuredWidth),
				);
			}

			const bounds = leafSizeBoundsRef.current;
			const grown = growFillLeavesToContainer(
				clampColumnSizing(missing, bounds),
				columnSizing,
				Object.keys(measured),
				trackWidth,
				fillableIds,
				bounds,
			);
			setColumnSizing((prev) => ({
				...grown,
				...persisted,
				...prev,
			}));

			prevScrollbarWidthRef.current = getReservedScrollbarWidth(container);
			prevUtilityTrackWidthRef.current = utilityTrackWidthRef.current;

			return true;
		};

		if (seedMissingLeaves()) {
			return;
		}

		const observer = new ResizeObserver(() => {
			if (seedMissingLeaves()) {
				observer.disconnect();
			}
		});
		observer.observe(container);

		return () => observer.disconnect();
	}, [enabled, columns, columnVisibility, getColumnSizing, setColumnSizing]);

	// After seed, the table can start or stop overflowing vertically (Infinite
	// Scroll, filter, shorter viewport), which reserves or frees the scrollbar gutter.
	// Shrink or grow the column track by that delta so the leaves still fill the
	// container — internally only, never via onColumnSizingChange. Skip when the
	// leaves were not filling the previous track (already overflowing
	// horizontally) so authored-wide columns are left alone.
	useLayoutEffect(() => {
		if (!enabled) {
			return;
		}

		const prevScrollbarWidth = prevScrollbarWidthRef.current;
		if (prevScrollbarWidth === null || prevScrollbarWidth === reservedScrollbarWidth) {
			return;
		}

		const container = containerRef.current;
		const table = tableRef.current;
		if (!container || !table) {
			return;
		}

		const leafIds = table.getVisibleLeafColumns().map((column) => column.id);
		const columnSizing = getColumnSizing();
		let leafTotal = 0;

		for (const id of leafIds) {
			leafTotal += columnSizing[id] ?? 0;
		}

		const delta = prevScrollbarWidth - reservedScrollbarWidth;
		const prevTrack = getColumnTrackWidth(container) - delta;
		prevScrollbarWidthRef.current = reservedScrollbarWidth;

		if (Math.abs(leafTotal - prevTrack) > TRACK_MATCH_PX) {
			return;
		}

		setColumnSizing(shiftColumnTrack(columnSizing, leafIds, delta, leafSizeBoundsRef.current));
	}, [enabled, reservedScrollbarWidth, getColumnSizing, setColumnSizing]);

	const tableOptions = useMemo<UseColumnResizeTableOptions>(
		() => ({
			enableColumnResizing: enabled,
			columnResizeMode: 'onChange',
			// Only constrain the minimum width while resizing is on. TanStack merges
			// `defaultColumn` onto every column, so spreading this when resizing is
			// off would clamp unrelated columns (e.g. 36px utility columns) up to the
			// resize minimum and break existing layouts.
			...(enabled ? { defaultColumn: { minSize: RESIZE_MIN_COLUMN_WIDTH } } : {}),
			initialState: { columnSizing: initialColumnSizing },
		}),
		[enabled, initialColumnSizing],
	);

	const bind = (table: DsTableInstance<TData>): UseColumnResizeBindResult => {
		tableRef.current = table;
		leafSizeBoundsRef.current = table.getAllLeafColumns();

		const columnSizing = table.atoms.columnSizing.get();
		const visibleLeafIds = table.getVisibleLeafColumns().map((column) => column.id);
		const resizeSizingReady =
			enabled && visibleLeafIds.length > 0 && visibleLeafIds.every((id) => columnSizing[id] !== undefined);

		const columnSizeVars: CSSProperties | undefined = resizeSizingReady
			? {
					...getColumnSizeCssVars(table.getFlatHeaders()),
					width: table.getTotalSize(),
				}
			: undefined;

		if (!enabled) {
			return {
				columnSizeVars: undefined,
				activeResize: null,
				context: {
					resizableColumns: false,
					resizeSizingReady: false,
					scrollContainerRef: containerRef,
					onResizeHover: handleResizeHover,
					onResizeDragStart: handleResizeDragStart,
					onResizeReset: handleResizeReset,
					onResizeKeyboardNudge: handleResizeKeyboardNudge,
				},
			};
		}

		const columnResizing = table.atoms.columnResizing.get();
		const isResizingColumn = columnResizing.isResizingColumn;
		const resizingHeader =
			typeof isResizingColumn === 'string'
				? table.getFlatHeaders().find((header) => header.column.id === isResizingColumn)
				: undefined;
		const startSize = columnResizing.startSize;
		const clampedResizeDelta =
			resizingHeader && startSize !== null
				? resizingHeader.getSize() - startSize
				: (columnResizing.deltaOffset ?? 0);
		const tableWidth = table.getTotalSize();
		const activeResize: UseColumnResizeActiveResize | null =
			isResizingColumn && dragStartOffsetRef.current !== null
				? {
						offset: clampResizeOverlayOffset(dragStartOffsetRef.current + clampedResizeDelta, tableWidth),
						phase: 'dragging',
					}
				: resizeHover
					? { offset: clampResizeOverlayOffset(resizeHover.offset, tableWidth), phase: 'hover' }
					: null;

		return {
			columnSizeVars,
			activeResize,
			context: {
				resizableColumns: enabled,
				resizeSizingReady,
				scrollContainerRef: containerRef,
				onResizeHover: handleResizeHover,
				onResizeDragStart: handleResizeDragStart,
				onResizeReset: handleResizeReset,
				onResizeKeyboardNudge: handleResizeKeyboardNudge,
			},
		};
	};

	return {
		tableOptions,
		bind,
	};
};
