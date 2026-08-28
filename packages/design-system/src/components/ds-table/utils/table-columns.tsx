import type { ColumnDef } from '@tanstack/react-table';
import { DsSkeletonText } from '../../ds-skeleton';
import { DsTableHeaderSelectableCell } from '../components/ds-table-header-selectable-cell';
import { DsTableRowExpandableCell } from '../components/ds-table-row-expandable-cell';
import { DsTableRowSelectableCell } from '../components/ds-table-row-selectable-cell';
import { resolveUtilityColumnWidth } from './column-size';
import {
	EXPANDER_COLUMN_ID,
	EXPANDER_COLUMN_WIDTH,
	REORDER_COLUMN_ID,
	REORDER_COLUMN_WIDTH,
	SELECT_COLUMN_ID,
	SELECT_COLUMN_WIDTH,
	SKELETON_ROW_COUNT,
} from './constants';

export type GetAugmentedColumnsOptions = {
	selectable: boolean;
	expandable: boolean;
	reorderable: boolean;
	virtualized: boolean;
	showSelectAllCheckbox: boolean;
	selectableColumnWidth?: number;
	expandableColumnWidth?: number;
	reorderableColumnWidth?: number;
};

const EXPLICIT_SIZE_META = { hasExplicitSize: true } as const;

/**
 * Clones leaf defs that authored `size` so `meta.hasExplicitSize` survives
 * TanStack’s default-size merge. Group defs are cloned only to recurse;
 * unsized leaves are returned as-is.
 */
const stampExplicitSize = <TData, TValue>(columns: ColumnDef<TData, TValue>[]): ColumnDef<TData, TValue>[] =>
	columns.map((column) => {
		if ('columns' in column && column.columns) {
			return { ...column, columns: stampExplicitSize(column.columns) };
		}

		if (column.size === undefined) {
			return column;
		}

		return { ...column, meta: { ...column.meta, ...EXPLICIT_SIZE_META } };
	});

/** Pin min/max so the table-wide resize `minSize` cannot stretch this column. */
const pinUtilityColumnSize = (width: number) => ({
	size: width,
	minSize: width,
	maxSize: width,
});

/**
 * Prepends the builtin select / expander / reorder columns when those features
 * are on. Reorder is omitted for virtualized tables. Unshift order yields
 * visual order: reorder, expander, select, then consumer columns.
 */
export const getAugmentedColumns = <TData, TValue>(
	columns: ColumnDef<TData, TValue>[],
	{
		selectable,
		expandable,
		reorderable,
		virtualized,
		showSelectAllCheckbox,
		selectableColumnWidth,
		expandableColumnWidth,
		reorderableColumnWidth,
	}: GetAugmentedColumnsOptions,
): ColumnDef<TData, TValue>[] => {
	const augmentedColumns: ColumnDef<TData, TValue>[] = stampExplicitSize(columns);

	if (selectable) {
		const width = resolveUtilityColumnWidth(selectableColumnWidth, SELECT_COLUMN_WIDTH);
		augmentedColumns.unshift({
			id: SELECT_COLUMN_ID,
			...pinUtilityColumnSize(width),
			enableSorting: false,
			enableResizing: false,
			meta: EXPLICIT_SIZE_META,
			header: ({ table }) => (showSelectAllCheckbox ? <DsTableHeaderSelectableCell table={table} /> : null),
			cell: ({ row }) => <DsTableRowSelectableCell row={row} />,
		});
	}

	if (expandable) {
		const width = resolveUtilityColumnWidth(expandableColumnWidth, EXPANDER_COLUMN_WIDTH);
		augmentedColumns.unshift({
			id: EXPANDER_COLUMN_ID,
			...pinUtilityColumnSize(width),
			enableSorting: false,
			enableResizing: false,
			meta: EXPLICIT_SIZE_META,
			header: () => null,
			cell: ({ row }) => (row.getCanExpand() ? <DsTableRowExpandableCell row={row} /> : null),
		});
	}

	if (reorderable && !virtualized) {
		const width = resolveUtilityColumnWidth(reorderableColumnWidth, REORDER_COLUMN_WIDTH);
		// Cell is rendered inline by DsTableRow when it encounters REORDER_COLUMN_ID,
		// since the drag handle needs row-level useSortable state.
		augmentedColumns.unshift({
			id: REORDER_COLUMN_ID,
			...pinUtilityColumnSize(width),
			enableSorting: false,
			enableResizing: false,
			meta: EXPLICIT_SIZE_META,
			header: 'Order',
			cell: () => null,
		});
	}

	return augmentedColumns;
};

/**
 * Replaces each leaf `cell` with `loadingCell` (or a default text skeleton).
 * Group columns are cloned with the same transform applied to their children.
 */
export const toSkeletonColumns = <TData, TValue>(
	columns: ColumnDef<TData, TValue>[],
): ColumnDef<TData, TValue>[] =>
	columns.map((column) =>
		'columns' in column && column.columns
			? { ...column, columns: toSkeletonColumns(column.columns) }
			: { ...column, cell: column.loadingCell ?? (() => <DsSkeletonText width="60%" />) },
	);

export const createSkeletonRows = <TData extends { id: string }>(): TData[] =>
	Array.from({ length: SKELETON_ROW_COUNT }, (_, i) => ({ id: `ds-table-skeleton-${String(i)}` }) as TData);
