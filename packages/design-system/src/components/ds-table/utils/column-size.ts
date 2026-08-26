import type { CSSProperties } from 'react';
import { type ColumnSizingState } from '@tanstack/react-table';
import { BUILTIN_COLUMN_IDS, RESIZE_MIN_COLUMN_WIDTH } from './constants';

const DEFAULT_MAX_COLUMN_SIZE = Number.MAX_SAFE_INTEGER;

type ColumnWidthSource = {
	id: string;
	columnDef: { size?: number; minSize?: number; maxSize?: number; meta?: { hasExplicitSize?: boolean } };
};

/**
 * Leaf column used to resolve `minSize` / `maxSize` when clamping a sizing map.
 */
export type ColumnSizeBoundsSource = {
	id: string;
	columnDef: { minSize?: number; maxSize?: number };
};

type SizeHeader = {
	id: string;
	getSize: () => number;
	column: { id: string; getSize: () => number };
};

/**
 * Whether a column should use a fixed width rather than fill (`flex: 1`).
 *
 * True when the user has resized it (`columnSizing` entry), or when the raw
 * column def authored `size` (`meta.hasExplicitSize`). TanStack merges a
 * default size of 150 onto every column, so `columnDef.size` alone cannot
 * tell authored 150px from an unsized fill column.
 */
export const isExplicitColumnWidth = (
	column: ColumnWidthSource,
	columnSizing: ColumnSizingState,
): boolean => {
	if (columnSizing[column.id] !== undefined) {
		return true;
	}

	return column.columnDef.meta?.hasExplicitSize === true;
};

/**
 * Style for a table column/cell based on its size and whether that size is explicit.
 *
 * Explicit columns get a fixed `width` plus `minWidth` and `flexShrink: 0` so they
 * enforce horizontal overflow on the table container. Fill columns grow evenly via
 * `flex: 1`.
 */
export const getColumnSizeStyle = (columnSize: number, isExplicit: boolean): CSSProperties => {
	if (isExplicit) {
		return { width: columnSize, minWidth: columnSize, flexShrink: 0 };
	}

	return { flex: 1, minWidth: 0 };
};

export const getHeaderSizeCssVar = (headerId: string): string => `--header-${headerId}-size`;

export const getColumnSizeCssVar = (columnId: string): string => `--col-${columnId}-size`;

/**
 * Pixel width via a CSS variable on an ancestor, so frozen (memoized) cells still
 * track live resize without React reconciling each row.
 */
export const getResizableHeaderStyle = (headerId: string): CSSProperties => ({
	width: `calc(var(${getHeaderSizeCssVar(headerId)}) * 1px)`,
	minWidth: `calc(var(${getHeaderSizeCssVar(headerId)}) * 1px)`,
	flexShrink: 0,
});

export const getResizableColumnStyle = (columnId: string): CSSProperties => ({
	width: `calc(var(${getColumnSizeCssVar(columnId)}) * 1px)`,
	minWidth: `calc(var(${getColumnSizeCssVar(columnId)}) * 1px)`,
	flexShrink: 0,
});

export const getHeaderCellSizeStyle = (
	headerId: string,
	columnSize: number,
	isExplicit: boolean,
	resizeSizingReady: boolean,
): CSSProperties => {
	if (resizeSizingReady) {
		return getResizableHeaderStyle(headerId);
	}

	return getColumnSizeStyle(columnSize, isExplicit);
};

export const getBodyCellSizeStyle = (
	columnId: string,
	columnSize: number,
	isExplicit: boolean,
	resizeSizingReady: boolean,
): CSSProperties => {
	if (resizeSizingReady) {
		return getResizableColumnStyle(columnId);
	}

	return getColumnSizeStyle(columnSize, isExplicit);
};

/**
 * TanStack v8 performant-resize map: header ids for header cells, column ids for
 * body cells. Values are unitless px; consumers use `calc(var(...) * 1px)`.
 */
export const getColumnSizeCssVars = (headers: SizeHeader[]): Record<string, number> => {
	const colSizes: Record<string, number> = {};

	for (const header of headers) {
		colSizes[getHeaderSizeCssVar(header.id)] = header.getSize();
		colSizes[getColumnSizeCssVar(header.column.id)] = header.column.getSize();
	}

	return colSizes;
};

/**
 * TanStack `getSize()` formula: `min(max(minSize, width), maxSize)`. Defaults
 * match DsTable (`RESIZE_MIN_COLUMN_WIDTH`, unlimited max).
 */
export const clampColumnSize = (
	width: number,
	minSize: number = RESIZE_MIN_COLUMN_WIDTH,
	maxSize: number = DEFAULT_MAX_COLUMN_SIZE,
): number => Math.min(Math.max(minSize, width), maxSize);

/**
 * Clamps every finite entry in `sizing` to that leaf's `minSize` / `maxSize`.
 * Non-finite widths are omitted so they do not poison state. Ids missing from
 * `columns` use the table defaults.
 */
export const clampColumnSizing = (
	sizing: ColumnSizingState,
	columns: ReadonlyArray<ColumnSizeBoundsSource>,
): ColumnSizingState => {
	const boundsById = new Map(columns.map((column) => [column.id, column.columnDef]));
	const next: ColumnSizingState = {};

	for (const [id, width] of Object.entries(sizing)) {
		if (!Number.isFinite(width)) {
			continue;
		}

		const bounds = boundsById.get(id);
		next[id] = clampColumnSize(
			width,
			bounds?.minSize ?? RESIZE_MIN_COLUMN_WIDTH,
			bounds?.maxSize ?? DEFAULT_MAX_COLUMN_SIZE,
		);
	}

	return next;
};

/**
 * Width to restore on double-click: explicit `columnDef.size`, otherwise the
 * snapshotted measured width.
 */
export const getResizeOriginSize = (column: ColumnWidthSource, measuredWidth: number): number => {
	if (isExplicitColumnWidth(column, {})) {
		return column.columnDef.size as number;
	}

	return measuredWidth;
};

/**
 * Measured leaf header widths keyed by column id. Group header cells share
 * `data-column-id` with a different id, so only `leafColumnIds` are read.
 */
export const measureLeafHeaderWidths = (
	tableEl: HTMLElement,
	leafColumnIds: string[],
): Record<string, number> => {
	const widths: Record<string, number> = {};

	for (const id of leafColumnIds) {
		const cell = tableEl.querySelector(`thead th[data-column-id="${CSS.escape(id)}"]`);
		if (cell instanceof HTMLElement) {
			widths[id] = cell.getBoundingClientRect().width;
		}
	}

	return widths;
};

const CONTAINER_SIZE_SNAP_PX = 1;

const absorbSizingDrift = (sizing: ColumnSizingState, ids: string[], drift: number): void => {
	for (const id of [...ids].reverse()) {
		if (drift === 0) {
			break;
		}

		const current = sizing[id];
		if (current === undefined) {
			continue;
		}

		const nextSize = Math.max(RESIZE_MIN_COLUMN_WIDTH, current - drift);
		drift -= current - nextSize;
		sizing[id] = nextSize;
	}
};

const toIdSet = (ids: ReadonlySet<string> | readonly string[]): ReadonlySet<string> =>
	ids instanceof Set ? ids : new Set(ids);

/**
 * Grows `ids` so their combined increase equals `extra`. Shares follow each
 * id's current width; leftover rounding is absorbed on the last id.
 */
const distributeExtraSpace = (
	sizing: ColumnSizingState,
	ids: string[],
	extra: number,
	maxById?: ReadonlyMap<string, number>,
): void => {
	if (ids.length === 0 || extra <= 0) {
		return;
	}

	let remaining = extra;
	let open = ids.filter((id) => (sizing[id] ?? 0) < (maxById?.get(id) ?? DEFAULT_MAX_COLUMN_SIZE));

	while (remaining > 0 && open.length > 0) {
		let weightSum = 0;

		for (const id of open) {
			weightSum += sizing[id] ?? 0;
		}

		let assigned = 0;
		const stillOpen: string[] = [];

		for (const id of open) {
			const current = sizing[id] ?? 0;
			const max = maxById?.get(id) ?? DEFAULT_MAX_COLUMN_SIZE;
			const room = max - current;
			const rawShare = weightSum <= 0 ? remaining / open.length : remaining * (current / weightSum);
			const share = Math.min(room, Math.round(rawShare));
			sizing[id] = current + share;
			assigned += share;

			if (current + share < max) {
				stillOpen.push(id);
			}
		}

		let leftover = remaining - assigned;

		for (const id of stillOpen) {
			if (leftover <= 0) {
				break;
			}

			const max = maxById?.get(id) ?? DEFAULT_MAX_COLUMN_SIZE;
			const add = Math.min(leftover, max - (sizing[id] ?? 0));
			sizing[id] = (sizing[id] ?? 0) + add;
			leftover -= add;
		}

		if (assigned === 0 && leftover === remaining) {
			break;
		}

		remaining = leftover;
		open = stillOpen.filter((id) => (sizing[id] ?? 0) < (maxById?.get(id) ?? DEFAULT_MAX_COLUMN_SIZE));
	}
};

/**
 * Sizing entries for leaves that are not yet in `existing`. Does not overwrite
 * user-resized (or previously snapshotted) ids. Rounds each measurement, then
 * shifts leftover pixels onto the last missing leaf so the visible total
 * matches the measured width (or the container, when they differ by 1px).
 * When the measured total is short of the container, leftover space is shared
 * across missing fill leaves in `fillableIds`.
 */
export const collectMissingLeafSizing = (
	measured: Record<string, number>,
	existing: ColumnSizingState,
	containerWidth?: number,
	fillableIds?: ReadonlySet<string> | readonly string[],
): ColumnSizingState => {
	const next: ColumnSizingState = {};
	const missingIds: string[] = [];

	for (const [id, width] of Object.entries(measured)) {
		if (existing[id] === undefined) {
			next[id] = Math.round(width);
			missingIds.push(id);
		}
	}

	if (missingIds.length === 0) {
		return next;
	}

	let roundedMissingSum = 0;
	let unroundedMissingSum = 0;

	for (const id of missingIds) {
		roundedMissingSum += next[id] ?? 0;
		unroundedMissingSum += measured[id] ?? 0;
	}

	absorbSizingDrift(next, missingIds, roundedMissingSum - Math.round(unroundedMissingSum));

	if (containerWidth === undefined || !Number.isFinite(containerWidth) || containerWidth <= 0) {
		return next;
	}

	let projected = 0;

	for (const id of Object.keys(measured)) {
		projected += existing[id] ?? next[id] ?? 0;
	}

	const delta = projected - containerWidth;

	if (Math.abs(delta) <= CONTAINER_SIZE_SNAP_PX) {
		absorbSizingDrift(next, missingIds, delta);
		return next;
	}

	if (delta < 0 && fillableIds) {
		const fillable = toIdSet(fillableIds);
		distributeExtraSpace(
			next,
			missingIds.filter((id) => fillable.has(id)),
			-delta,
		);
	}

	return next;
};

const maxSizeOf = (id: string, boundsById: Map<string, ColumnSizeBoundsSource['columnDef']>): number =>
	boundsById.get(id)?.maxSize ?? DEFAULT_MAX_COLUMN_SIZE;

/**
 * After clamp, grow fill leaves that still have room so the projected
 * measured total matches the container. A leaf that hit `maxSize` must not
 * leave a gap — leftover pixels go to siblings.
 */
export const growFillLeavesToContainer = (
	sizing: ColumnSizingState,
	existing: ColumnSizingState,
	measuredIds: readonly string[],
	containerWidth: number,
	fillableIds: ReadonlySet<string> | readonly string[],
	bounds: ReadonlyArray<ColumnSizeBoundsSource>,
): ColumnSizingState => {
	if (!Number.isFinite(containerWidth) || containerWidth <= 0 || measuredIds.length === 0) {
		return sizing;
	}

	let projected = 0;

	for (const id of measuredIds) {
		projected += existing[id] ?? sizing[id] ?? 0;
	}

	const extra = containerWidth - projected;
	if (extra <= 0) {
		return sizing;
	}

	const fillable = toIdSet(fillableIds);
	const growable = Object.keys(sizing).filter((id) => fillable.has(id));
	if (growable.length === 0) {
		return sizing;
	}

	const next = { ...sizing };
	const boundsById = new Map(bounds.map((column) => [column.id, column.columnDef]));
	distributeExtraSpace(
		next,
		growable,
		extra,
		new Map(growable.map((id) => [id, maxSizeOf(id, boundsById)])),
	);

	return next;
};

const minSizeOf = (id: string, boundsById: Map<string, ColumnSizeBoundsSource['columnDef']>): number =>
	boundsById.get(id)?.minSize ?? RESIZE_MIN_COLUMN_WIDTH;

const shrinkColumnTrack = (
	sizing: ColumnSizingState,
	ids: readonly string[],
	amount: number,
	bounds: ReadonlyArray<ColumnSizeBoundsSource>,
): void => {
	const boundsById = new Map(bounds.map((column) => [column.id, column.columnDef]));
	let remaining = amount;

	for (const id of [...ids].reverse()) {
		if (remaining <= 0) {
			break;
		}

		const current = sizing[id];
		if (current === undefined) {
			continue;
		}

		const nextSize = Math.max(minSizeOf(id, boundsById), current - remaining);
		remaining -= current - nextSize;
		sizing[id] = nextSize;
	}
};

/**
 * Grows or shrinks `ids` so the column track changes by `delta` (positive =
 * grow). Used when the **Scrollbar spacer** toggles after seed; does not
 * invent ids missing from `sizing`.
 */
export const shiftColumnTrack = (
	sizing: ColumnSizingState,
	ids: readonly string[],
	delta: number,
	bounds: ReadonlyArray<ColumnSizeBoundsSource>,
): ColumnSizingState => {
	if (!Number.isFinite(delta) || delta === 0 || ids.length === 0) {
		return sizing;
	}

	const next = { ...sizing };

	if (delta > 0) {
		const boundsById = new Map(bounds.map((column) => [column.id, column.columnDef]));
		distributeExtraSpace(
			next,
			[...ids],
			delta,
			new Map(ids.map((id) => [id, maxSizeOf(id, boundsById)])),
		);
	} else {
		shrinkColumnTrack(next, ids, -delta, bounds);
	}

	return clampColumnSizing(next, bounds);
};

/**
 * Copy of `columnSizing` without injected utility leaves. Use at the public
 * `onColumnSizingChange` boundary so consumers persist only their own columns.
 */
export const omitBuiltinColumnSizing = (columnSizing: ColumnSizingState): ColumnSizingState => {
	const next: ColumnSizingState = {};

	for (const [id, size] of Object.entries(columnSizing)) {
		if (!BUILTIN_COLUMN_IDS.has(id)) {
			next[id] = size;
		}
	}

	return next;
};
