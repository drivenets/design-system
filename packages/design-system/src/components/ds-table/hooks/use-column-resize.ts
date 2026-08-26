import {
	useCallback,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
	type CSSProperties,
	type RefObject,
} from 'react';
import type {
	ColumnSizingInfoState,
	ColumnSizingState,
	OnChangeFn,
	Table,
	VisibilityState,
} from '@tanstack/react-table';
import {
	clampColumnSizing,
	collectMissingLeafSizing,
	getColumnSizeCssVars,
	getResizeOriginSize,
	growFillLeavesToContainer,
	isExplicitColumnWidth,
	measureLeafHeaderWidths,
	omitBuiltinColumnSizing,
	shiftColumnTrack,
	type ColumnSizeBoundsSource,
} from '../utils/column-size';
import { RESIZE_DIVIDER_WIDTH, RESIZE_MIN_COLUMN_WIDTH } from '../utils/constants';
import type { DsTableResizePhase } from '../context/ds-table-context';
import { useScrollbarSpacer, type ScrollbarSpacerWidth } from './use-scrollbar-spacer';

const TRACK_MATCH_PX = 3;

const INITIAL_COLUMN_SIZING_INFO: ColumnSizingInfoState = {
	startOffset: null,
	startSize: null,
	deltaOffset: null,
	deltaPercentage: null,
	isResizingColumn: false,
	columnSizingStart: [],
};

const clampResizeOverlayOffset = (offset: number, tableWidth: number): number => {
	if (tableWidth <= RESIZE_DIVIDER_WIDTH) {
		return offset;
	}

	return Math.min(offset, tableWidth - RESIZE_DIVIDER_WIDTH);
};

export interface UseColumnResizeOptions {
	enabled: boolean;
	/**
	 * Persisted widths to restore. Merged under live internal state so seed
	 * measurement fills leaves absent from the map and drags still take effect.
	 */
	columnSizing?: Record<string, number>;
	onColumnSizingChange?: (columnSizing: Record<string, number>) => void;
	/**
	 * Invalidates the leaf-width seed measurement (same role as in the former
	 * `DsTable` layout effect). Read as a dependency only.
	 */
	columns: unknown;
	columnVisibility: VisibilityState;
	/**
	 * Invalidates overflow measurement (row count). Read as a dependency only.
	 */
	overflowKey: number;
}

export interface DsTableResizeContextSlice {
	resizableColumns: boolean;
	resizeSizingReady: boolean;
	resizeContainerRef: RefObject<HTMLDivElement | null>;
	onResizeHover: (columnId: string | null, offset: number | null) => void;
	onResizeDragStart: (offset: number) => void;
	onResizeReset: (columnIds: string[]) => void;
	/**
	 * Keyboard resize for a focused handle. `columnId` is the boundary header's
	 * column (leaf or group); `delta` is the signed px change. Clamps and fires
	 * the persist callback, mirroring drag end.
	 */
	onResizeKeyboardNudge: (columnId: string, delta: number) => void;
	/**
	 * Overflow-only **Scrollbar spacer** width (0 or rest scrollbar size).
	 */
	scrollbarSpacerWidth: ScrollbarSpacerWidth;
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
	onColumnSizingChange: OnChangeFn<ColumnSizingState>;
	onColumnSizingInfoChange: OnChangeFn<ColumnSizingInfoState>;
}

export interface UseColumnResizeResult {
	tableOptions: UseColumnResizeTableOptions;
	state: {
		columnSizing: ColumnSizingState;
		columnSizingInfo: ColumnSizingInfoState;
	};
	bind: <TData>(table: Table<TData>) => UseColumnResizeBindResult;
	scrollbarSpacerWidth: ScrollbarSpacerWidth;
}

/**
 * Owns column-resize state, TanStack sizing handlers, origin snapshots, seed
 * measurement, hover/drag overlay model, and the context slice consumed by
 * resize handles.
 *
 * Call before `useReactTable`, spread `tableOptions` / `state` into it, then
 * `bind(table)` during render for CSS vars, overlay, and context.
 */
export const useColumnResize = ({
	enabled,
	columnSizing: columnSizingProp,
	onColumnSizingChange,
	columns,
	columnVisibility,
	overflowKey,
}: UseColumnResizeOptions): UseColumnResizeResult => {
	const [columnResizeState, setColumnResizeState] = useState<{
		columnSizing: ColumnSizingState;
		columnSizingInfo: ColumnSizingInfoState;
	}>({
		columnSizing: {},
		columnSizingInfo: INITIAL_COLUMN_SIZING_INFO,
	});
	// One useState so TanStack's mousemove updaters (info then sizing) run in
	// call order against the same queue. Split hooks apply sizing first, while
	// the next-width map is still empty.
	const { columnSizing: internalColumnSizing, columnSizingInfo } = columnResizeState;

	// Persisted widths seed the effective map, but internal state wins so a live
	// drag (or seed measurement) of a persisted column still takes effect. Passed
	// to TanStack and read for CSS vars / persist so restore, drag, and persist
	// all see the same widths.
	const columnSizing = useMemo<ColumnSizingState>(
		() => (columnSizingProp ? { ...columnSizingProp, ...internalColumnSizing } : internalColumnSizing),
		[columnSizingProp, internalColumnSizing],
	);
	const [resizeHover, setResizeHover] = useState<{
		columnId: string;
		offset: number;
	} | null>(null);
	const dragStartOffsetRef = useRef<number | null>(null);
	const resizeOriginSizingRef = useRef<ColumnSizingState>({});
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollbarSpacerWidth = useScrollbarSpacer(containerRef, overflowKey);
	const spacerWidthRef = useRef(scrollbarSpacerWidth);
	spacerWidthRef.current = scrollbarSpacerWidth;
	const prevSpacerWidthRef = useRef<ScrollbarSpacerWidth | null>(null);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any -- bind is generic; the ref only calls sizing APIs
	const tableRef = useRef<Table<any> | null>(null);

	const columnSizingRef = useRef(columnSizing);
	columnSizingRef.current = columnSizing;
	const columnSizingInfoRef = useRef(columnSizingInfo);
	columnSizingInfoRef.current = columnSizingInfo;
	const onColumnSizingChangeRef = useRef(onColumnSizingChange);
	onColumnSizingChangeRef.current = onColumnSizingChange;
	const leafSizeBoundsRef = useRef<ColumnSizeBoundsSource[]>([]);

	const handleColumnSizingChange: OnChangeFn<ColumnSizingState> = useCallback((updaterOrValue) => {
		// Resolve against the ref and write it synchronously (same pattern as
		// columnSizingInfoRef), before queuing the React state update. TanStack's
		// mouseup applies the final sizing and then fires the persist callback in
		// the same tick, so the ref must already hold the final widths — the state
		// updater runs later (at render), which would leave persist reading a stale
		// last-move value. Resolving against the effective map also keeps persisted
		// (prop-provided) leaves in the reported map.
		const next =
			typeof updaterOrValue === 'function' ? updaterOrValue(columnSizingRef.current) : updaterOrValue;
		const clamped = clampColumnSizing(next, leafSizeBoundsRef.current);
		columnSizingRef.current = clamped;
		setColumnResizeState((prev) => ({ ...prev, columnSizing: clamped }));
	}, []);

	const handleColumnSizingInfoChange: OnChangeFn<ColumnSizingInfoState> = useCallback((updaterOrValue) => {
		const prevInfo = columnSizingInfoRef.current;
		const nextInfo = typeof updaterOrValue === 'function' ? updaterOrValue(prevInfo) : updaterOrValue;
		const ended = Boolean(prevInfo.isResizingColumn) && nextInfo.isResizingColumn === false;

		columnSizingInfoRef.current = nextInfo;
		setColumnResizeState((prev) => ({
			...prev,
			columnSizingInfo: nextInfo,
		}));

		if (ended) {
			onColumnSizingChangeRef.current?.(omitBuiltinColumnSizing(columnSizingRef.current));
		}
	}, []);

	const handleResizeHover = useCallback((columnId: string | null, offset: number | null) => {
		setResizeHover(columnId === null || offset === null ? null : { columnId, offset });
	}, []);

	const handleResizeDragStart = useCallback((offset: number) => {
		dragStartOffsetRef.current = offset;
	}, []);

	const handleResizeReset = useCallback(
		(columnIds: string[]) => {
			const next = { ...columnSizingRef.current };

			for (const id of columnIds) {
				const origin = resizeOriginSizingRef.current[id];
				if (origin !== undefined) {
					next[id] = origin;
				}
			}

			const clamped = clampColumnSizing(next, leafSizeBoundsRef.current);
			handleColumnSizingChange(clamped);
			onColumnSizingChangeRef.current?.(omitBuiltinColumnSizing(clamped));
		},
		[handleColumnSizingChange],
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
			const next = { ...columnSizingRef.current };
			for (const leaf of leaves) {
				const size = leaf.getSize();
				next[leaf.id] = Math.round(size + delta * (size / totalSize));
			}

			const clamped = clampColumnSizing(next, leafSizeBoundsRef.current);
			handleColumnSizingChange(clamped);
			onColumnSizingChangeRef.current?.(omitBuiltinColumnSizing(clamped));
		},
		[handleColumnSizingChange],
	);

	useLayoutEffect(() => {
		prevSpacerWidthRef.current = null;

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
			const trackWidth = container.clientWidth - spacerWidthRef.current;
			const missing = collectMissingLeafSizing(measured, columnSizingRef.current, trackWidth, fillableIds);

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

			if (Object.keys(missing).length > 0) {
				const bounds = leafSizeBoundsRef.current;
				const clamped = clampColumnSizing(missing, bounds);
				const grown = growFillLeavesToContainer(
					clamped,
					columnSizingRef.current,
					Object.keys(measured),
					trackWidth,
					fillableIds,
					bounds,
				);
				handleColumnSizingChange((prev) => ({
					...grown,
					...prev,
				}));
			}

			prevSpacerWidthRef.current = spacerWidthRef.current;

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
	}, [enabled, columns, columnVisibility, handleColumnSizingChange]);

	// After seed, a vertical scrollbar can appear or disappear (Infinite Scroll,
	// filter, shorter viewport). The **Scrollbar spacer** then toggles 0↔10px.
	// Shrink or grow the column track by that delta so leaves + spacer still
	// fill the container — internally only, never via onColumnSizingChange.
	// Skip when the leaves were not filling the previous track (already
	// overflowing horizontally) so authored-wide columns are left alone.
	useLayoutEffect(() => {
		if (!enabled) {
			return;
		}

		const prevSpacerWidth = prevSpacerWidthRef.current;
		if (prevSpacerWidth === null || prevSpacerWidth === scrollbarSpacerWidth) {
			return;
		}

		const container = containerRef.current;
		const table = tableRef.current;
		if (!container || !table) {
			return;
		}

		const leafIds = table.getVisibleLeafColumns().map((column) => column.id);
		let leafTotal = 0;

		for (const id of leafIds) {
			leafTotal += columnSizingRef.current[id] ?? 0;
		}

		const prevTrack = container.clientWidth - prevSpacerWidth;
		prevSpacerWidthRef.current = scrollbarSpacerWidth;

		if (Math.abs(leafTotal - prevTrack) > TRACK_MATCH_PX) {
			return;
		}

		const delta = prevSpacerWidth - scrollbarSpacerWidth;
		handleColumnSizingChange(
			shiftColumnTrack(columnSizingRef.current, leafIds, delta, leafSizeBoundsRef.current),
		);
	}, [enabled, scrollbarSpacerWidth, handleColumnSizingChange]);

	const tableOptions = useMemo<UseColumnResizeTableOptions>(
		() => ({
			enableColumnResizing: enabled,
			columnResizeMode: 'onChange',
			// Only constrain the minimum width while resizing is on. TanStack merges
			// `defaultColumn` onto every column, so spreading this when resizing is
			// off would clamp unrelated columns (e.g. 36px utility columns) up to the
			// resize minimum and break existing layouts.
			...(enabled ? { defaultColumn: { minSize: RESIZE_MIN_COLUMN_WIDTH } } : {}),
			onColumnSizingChange: handleColumnSizingChange,
			onColumnSizingInfoChange: handleColumnSizingInfoChange,
		}),
		[enabled, handleColumnSizingChange, handleColumnSizingInfoChange],
	);

	const bind = <TData>(table: Table<TData>): UseColumnResizeBindResult => {
		tableRef.current = table;
		leafSizeBoundsRef.current = table.getAllLeafColumns();

		const visibleLeafIds = table.getVisibleLeafColumns().map((column) => column.id);
		const resizeSizingReady =
			enabled && visibleLeafIds.length > 0 && visibleLeafIds.every((id) => columnSizing[id] !== undefined);

		const columnSizeVars: CSSProperties | undefined = resizeSizingReady
			? {
					...getColumnSizeCssVars(table.getFlatHeaders()),
					width: table.getTotalSize() + scrollbarSpacerWidth,
				}
			: undefined;

		if (!enabled) {
			return {
				columnSizeVars: undefined,
				activeResize: null,
				context: {
					resizableColumns: false,
					resizeSizingReady: false,
					resizeContainerRef: containerRef,
					onResizeHover: handleResizeHover,
					onResizeDragStart: handleResizeDragStart,
					onResizeReset: handleResizeReset,
					onResizeKeyboardNudge: handleResizeKeyboardNudge,
					scrollbarSpacerWidth,
				},
			};
		}

		const isResizingColumn = columnSizingInfo.isResizingColumn;
		const resizingHeader =
			typeof isResizingColumn === 'string'
				? table.getFlatHeaders().find((header) => header.column.id === isResizingColumn)
				: undefined;
		const startSize = columnSizingInfo.startSize;
		const clampedResizeDelta =
			resizingHeader && startSize !== null
				? resizingHeader.getSize() - startSize
				: (columnSizingInfo.deltaOffset ?? 0);
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
				resizeContainerRef: containerRef,
				onResizeHover: handleResizeHover,
				onResizeDragStart: handleResizeDragStart,
				onResizeReset: handleResizeReset,
				onResizeKeyboardNudge: handleResizeKeyboardNudge,
				scrollbarSpacerWidth,
			},
		};
	};

	return {
		tableOptions,
		state: {
			columnSizing,
			columnSizingInfo,
		},
		bind,
		scrollbarSpacerWidth,
	};
};
