import type { CSSProperties } from 'react';
import { defaultColumnSizing, type ColumnSizingState } from '@tanstack/react-table';
import { BUILTIN_COLUMN_IDS, RESIZE_MIN_COLUMN_WIDTH } from './constants';

const DEFAULT_MAX_COLUMN_SIZE = Number.MAX_SAFE_INTEGER;

type ColumnWidthSource = {
	id: string;
	columnDef: { size?: number; minSize?: number; maxSize?: number };
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
 * True when the user has resized it (`columnSizing` entry), or when `columnDef.size`
 * was set to a non-default value. Numeric equality with TanStack's default size
 * (150) alone is not enough — a resized column can legitimately be 150px wide.
 */
export const isExplicitColumnWidth = (
	column: ColumnWidthSource,
	columnSizing: ColumnSizingState,
): boolean => {
	if (columnSizing[column.id] !== undefined) {
		return true;
	}

	const definedSize = column.columnDef.size;
	return definedSize !== undefined && definedSize !== defaultColumnSizing.size;
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

/**
 * Sizing entries for leaves that are not yet in `existing`. Does not overwrite
 * user-resized (or previously snapshotted) ids.
 */
export const collectMissingLeafSizing = (
	measured: Record<string, number>,
	existing: ColumnSizingState,
): ColumnSizingState => {
	const next: ColumnSizingState = {};

	for (const [id, width] of Object.entries(measured)) {
		if (existing[id] === undefined) {
			next[id] = Math.round(width);
		}
	}

	return next;
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
