import {
	columnFilteringFeature,
	columnPinningFeature,
	columnResizingFeature,
	columnSizingFeature,
	columnVisibilityFeature,
	createColumnHelper,
	createExpandedRowModel,
	createFilteredRowModel,
	createSortedRowModel,
	filterFn_arrIncludes,
	filterFn_equals,
	filterFn_inDateRange,
	filterFn_includesString,
	filterFn_inNumberRange,
	filterFn_weakEquals,
	metaHelper,
	rowExpandingFeature,
	rowSelectionFeature,
	rowSortingFeature,
	sortFn_alphanumeric,
	sortFn_datetime,
	sortFn_text,
	tableFeatures,
	type CellContext,
	type CellData,
	type ColumnDef,
	type ColumnHelper,
	type RowData,
	type TableFeature,
} from '@tanstack/react-table';
import './ds-table-column.types';
import type { DsColumnDisplayMeta } from './components/ds-table-column-display/column-display-meta.types';
import type { DsColumnFilteringMeta } from './filters/types/column-filter-meta.types';
import type { DsColumnGroupingMeta } from './grouping/types/column-group-meta.types';
import type { DsColumnSizeMeta } from './utils/column-size-meta.types';

const dsColumnDefFeature: TableFeature = Object.freeze({});

export interface DsColumnMeta
	extends DsColumnFilteringMeta, DsColumnGroupingMeta, DsColumnDisplayMeta, DsColumnSizeMeta {}

/**
 * TanStack Table features `DsTable` registers. Column defs use `DsColumnDef`; pass
 * `typeof dsTableFeatures` as the first type argument of other TanStack types such as `Row`.
 *
 * @example
 * ```tsx
 * const row: Row<typeof dsTableFeatures, Person> = table.getRow(id);
 * ```
 */
export const dsTableFeatures = tableFeatures({
	columnSizingFeature,
	columnResizingFeature,
	columnVisibilityFeature,
	columnPinningFeature,
	columnFilteringFeature,
	rowSortingFeature,
	rowExpandingFeature,
	rowSelectionFeature,
	dsColumnDefFeature,
	filteredRowModel: createFilteredRowModel(),
	sortedRowModel: createSortedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	// Only the names `'auto'` sorting and filtering look up; `basic` is the built-in sort fallback.
	sortFns: { alphanumeric: sortFn_alphanumeric, text: sortFn_text, datetime: sortFn_datetime },
	filterFns: {
		includesString: filterFn_includesString,
		inNumberRange: filterFn_inNumberRange,
		equals: filterFn_equals,
		arrIncludes: filterFn_arrIncludes,
		inDateRange: filterFn_inDateRange,
		weakEquals: filterFn_weakEquals,
	},
	columnMeta: metaHelper<DsColumnMeta>(),
});

export type DsTableFeatures = typeof dsTableFeatures;

/**
 * A `DsTable` column definition.
 *
 * @example
 * ```tsx
 * const columns: DsColumnDef<Person>[] = [{ accessorKey: 'name', header: 'Name' }];
 * ```
 */
export type DsColumnDef<TData extends RowData, TValue extends CellData = unknown> = ColumnDef<
	DsTableFeatures,
	TData,
	TValue
>;

/** Cell context passed to `cell`, `editCell`, and other `DsColumnDef` callbacks. */
export type DsCellContext<TData extends RowData, TValue extends CellData = unknown> = CellContext<
	DsTableFeatures,
	TData,
	TValue
>;

/**
 * TanStack's `createColumnHelper` bound to `DsTable` features.
 *
 * @example
 * ```tsx
 * const columnHelper = createDsColumnHelper<Person>();
 * const columns = columnHelper.columns([columnHelper.accessor('name', { header: 'Name' })]);
 * ```
 */
export const createDsColumnHelper = <TData extends RowData>(): ColumnHelper<DsTableFeatures, TData> =>
	createColumnHelper<DsTableFeatures, TData>();
