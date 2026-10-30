import type { CSSProperties } from 'react';
import type { ColumnPinningState, RowData } from '@tanstack/react-table';
import type { DsTableStickyColumns } from '../ds-table.types';
import { getBodyCellSizeStyle, getColumnSizeCssVar, isExplicitColumnWidth } from './column-size';
import {
	BUILTIN_COLUMN_IDS,
	COLUMN_DISPLAY_COLUMN_ID,
	EXPANDER_COLUMN_ID,
	REORDER_COLUMN_ID,
	ROW_ACTIONS_COLUMN_ID,
	SELECT_COLUMN_ID,
} from './constants';
import type { DsCell, DsColumn, DsTableInstance } from '../ds-table-features';

/** Visual order of the always-sticky left utility columns (matches `getAugmentedColumns`). */
const LEFT_UTILITY_COLUMN_IDS = [REORDER_COLUMN_ID, EXPANDER_COLUMN_ID, SELECT_COLUMN_ID] as const;

/** Always-sticky right utility columns; a table renders at most one of them. */
const RIGHT_UTILITY_COLUMN_IDS = [ROW_ACTIONS_COLUMN_ID, COLUMN_DISPLAY_COLUMN_ID] as const;

export type DsTableStickySide = 'left' | 'right';

const STICKY_OFFSET_CSS_VAR = '--ds-table-sticky-offset';

type ColumnDefNode = {
	id?: string;
	accessorKey?: unknown;
	header?: unknown;
	columns?: readonly ColumnDefNode[];
};

/** Same id TanStack derives for a column def: `id`, then `accessorKey` (dots → `_`), then a string header. */
const getDefId = (def: ColumnDefNode): string | undefined => {
	if (def.id !== undefined) {
		return def.id;
	}

	if (typeof def.accessorKey === 'string') {
		return def.accessorKey.replaceAll('.', '_');
	}

	return typeof def.header === 'string' ? def.header : undefined;
};

const getDefLeafIds = (def: ColumnDefNode): string[] => {
	if (!def.columns?.length) {
		const id = getDefId(def);
		return id === undefined ? [] : [id];
	}

	return def.columns.flatMap(getDefLeafIds);
};

/**
 * Expands group ids (and leaves that belong to a group) to every leaf of that
 * top-level group, so a group header never splits across sticky and scrolling
 * areas. Utility ids are dropped: those columns are pinned by the table.
 */
const expandToGroupLeaves = (ids: readonly string[], columnDefs: readonly ColumnDefNode[]): string[] => {
	const result: string[] = [];

	for (const id of ids) {
		if (BUILTIN_COLUMN_IDS.has(id)) {
			continue;
		}

		const topLevel = columnDefs.find((def) => getDefId(def) === id || getDefLeafIds(def).includes(id));
		const leafIds = topLevel ? getDefLeafIds(topLevel) : [id];

		for (const leafId of leafIds) {
			if (!result.includes(leafId)) {
				result.push(leafId);
			}
		}
	}

	return result;
};

/**
 * Public `stickyColumns` → TanStack `columnPinning`, with utility columns always
 * pinned (left: reorder / expander / select, right: row actions or column
 * display). A column listed on both sides stays on the left.
 */
export const resolveColumnPinning = (
	stickyColumns: DsTableStickyColumns | undefined,
	columnDefs: readonly ColumnDefNode[],
): ColumnPinningState => {
	const left = expandToGroupLeaves(stickyColumns?.left ?? [], columnDefs);
	const right = expandToGroupLeaves(stickyColumns?.right ?? [], columnDefs).filter(
		(id) => !left.includes(id),
	);

	return {
		start: [...LEFT_UTILITY_COLUMN_IDS, ...left],
		end: [...right, ...RIGHT_UTILITY_COLUMN_IDS],
	};
};

const toStickySide = (
	nextIds: readonly string[],
	previousIds: readonly string[],
	columnDefs: readonly ColumnDefNode[],
): string[] => {
	const nextLeafIds = nextIds.filter((id) => !BUILTIN_COLUMN_IDS.has(id));
	const kept = previousIds.filter((id) => {
		const leafIds = expandToGroupLeaves([id], columnDefs);
		return leafIds.length > 0 && leafIds.every((leafId) => nextLeafIds.includes(leafId));
	});
	const covered = new Set(expandToGroupLeaves(kept, columnDefs));

	return [...kept, ...nextLeafIds.filter((id) => !covered.has(id))];
};

/**
 * TanStack `columnPinning` → public `stickyColumns`, without utility ids.
 * Ids from `previous` (e.g. a group id) stay as listed while all of their
 * leaves are still pinned on that side; newly pinned leaves are appended.
 */
export const toStickyColumns = (
	columnPinning: ColumnPinningState,
	previous: DsTableStickyColumns,
	columnDefs: readonly ColumnDefNode[],
): Required<DsTableStickyColumns> => ({
	left: toStickySide(columnPinning.start, previous.left ?? [], columnDefs),
	right: toStickySide(columnPinning.end, previous.right ?? [], columnDefs),
});

const toCssLength = (value: string | number): string =>
	typeof value === 'number' ? `${String(value)}px` : value;

const sizeExpression = <TData extends RowData>(
	columns: DsColumn<TData>[],
	resizeSizingReady: boolean,
): string | number => {
	if (columns.length === 0) {
		return 0;
	}

	if (!resizeSizingReady) {
		return columns.reduce((sum, column) => sum + column.getSize(), 0);
	}

	// Track live resize: frozen body cells read widths from CSS vars on the table element.
	return `calc((${columns.map((column) => `var(${getColumnSizeCssVar(column.id)})`).join(' + ')}) * 1px)`;
};

export interface StickyCellProps {
	'data-sticky'?: DsTableStickySide;
	'data-sticky-edge'?: DsTableStickySide;
	style?: CSSProperties;
}

/**
 * Sticky attributes for a header or body cell spanning `leafIds` (one id for a
 * leaf cell, all visible leaves for a group header). Non-sticky cells get `{}`.
 * The edge cell (last left / first right) carries `data-sticky-edge` for the
 * divider.
 */
const computeStickyCellProps = <TData extends RowData>(
	leftColumns: DsColumn<TData>[],
	rightColumns: DsColumn<TData>[],
	leafIds: readonly string[],
	resizeSizingReady: boolean,
): StickyCellProps => {
	const firstId = leafIds[0];
	const lastId = leafIds[leafIds.length - 1];

	if (firstId === undefined || lastId === undefined) {
		return {};
	}

	const leftIndex = leftColumns.findIndex((column) => column.id === firstId);

	if (leftIndex !== -1) {
		const isEdge = leftColumns[leftColumns.length - 1]?.id === lastId;

		return {
			'data-sticky': 'left',
			'data-sticky-edge': isEdge ? 'left' : undefined,
			style: {
				[STICKY_OFFSET_CSS_VAR]: toCssLength(
					sizeExpression(leftColumns.slice(0, leftIndex), resizeSizingReady),
				),
			} as CSSProperties,
		};
	}

	const rightIndex = rightColumns.findIndex((column) => column.id === lastId);

	if (rightIndex !== -1) {
		const isEdge = rightColumns[0]?.id === firstId;

		return {
			'data-sticky': 'right',
			'data-sticky-edge': isEdge ? 'right' : undefined,
			style: {
				[STICKY_OFFSET_CSS_VAR]: toCssLength(
					sizeExpression(rightColumns.slice(rightIndex + 1), resizeSizingReady),
				),
			} as CSSProperties,
		};
	}

	return {};
};

interface StickyPropsCache {
	leftColumns: readonly unknown[];
	rightColumns: readonly unknown[];
	columnSizing: unknown;
	resizeSizingReady: boolean;
	byLeafIds: Map<string, StickyCellProps>;
}

// Offsets are identical for every row, so they are computed once per column
// layout instead of once per cell per render. Keyed by `store`, which every
// per-render `useTable` wrapper shares with the instance.
const stickyPropsCaches = new WeakMap<object, StickyPropsCache>();

export const getStickyCellProps = <TData extends RowData>(
	table: DsTableInstance<TData>,
	leafIds: readonly string[],
	resizeSizingReady: boolean,
): StickyCellProps => {
	const leftColumns = table.getStartVisibleLeafColumns();
	const rightColumns = table.getEndVisibleLeafColumns();
	const columnSizing = table.store.state.columnSizing;
	let cache = stickyPropsCaches.get(table.store);

	if (
		!cache ||
		cache.leftColumns !== leftColumns ||
		cache.rightColumns !== rightColumns ||
		cache.columnSizing !== columnSizing ||
		cache.resizeSizingReady !== resizeSizingReady
	) {
		cache = { leftColumns, rightColumns, columnSizing, resizeSizingReady, byLeafIds: new Map() };
		stickyPropsCaches.set(table.store, cache);
	}

	const key = leafIds.join('\0');
	const cached = cache.byLeafIds.get(key);

	if (cached) {
		return cached;
	}

	const props = computeStickyCellProps(leftColumns, rightColumns, leafIds, resizeSizingReady);
	cache.byLeafIds.set(key, props);

	return props;
};

/**
 * Whether a cell is sticky. Sticky cells need a fixed width (fill columns take
 * `getSize()`) so the offsets of the cells after them stay correct.
 */
export const isStickyCell = (props: StickyCellProps): boolean => props['data-sticky'] !== undefined;

export interface BodyCellLayoutProps {
	style: CSSProperties;
	stickyAttributes: Omit<StickyCellProps, 'style'>;
}

/**
 * Size and sticky props for a body cell. Sticky fill columns take a fixed
 * width so the offsets of the sticky cells after them stay correct.
 */
export const getBodyCellLayoutProps = <TData extends RowData>(
	cell: DsCell<TData>,
	resizeSizingReady: boolean,
): BodyCellLayoutProps => {
	const table = cell.getContext().table;
	const { style: stickyStyle, ...stickyAttributes } = getStickyCellProps(
		table,
		[cell.column.id],
		resizeSizingReady,
	);
	const columnSizing = resizeSizingReady ? table.store.state.columnSizing : {};
	const isExplicit = isExplicitColumnWidth(cell.column, columnSizing) || isStickyCell(stickyAttributes);

	return {
		style: {
			...getBodyCellSizeStyle(cell.column.id, cell.column.getSize(), isExplicit, resizeSizingReady),
			...stickyStyle,
		},
		stickyAttributes,
	};
};
