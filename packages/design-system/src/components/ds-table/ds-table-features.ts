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
	type Cell,
	type CellContext,
	type CellData,
	type Column,
	type ColumnDef,
	type ColumnHelper,
	type FilterFn,
	type Header,
	type HeaderContext,
	type HeaderGroup,
	type Row,
	type RowData,
	type SortFn,
	type Table,
	type TableFeature,
	type TableState,
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
 * TanStack Table features `DsTable` registers. The `Ds*` types such as `DsColumnDef`
 * and `DsRow` are TanStack's types bound to these features.
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

/** Context passed to `cell`, `editCell`, and other cell callbacks of a `DsColumnDef`. */
export type DsCellContext<TData extends RowData, TValue extends CellData = unknown> = CellContext<
	DsTableFeatures,
	TData,
	TValue
>;

/** Context passed to `header` and `footer` callbacks of a `DsColumnDef`. */
export type DsHeaderContext<TData extends RowData, TValue extends CellData = unknown> = HeaderContext<
	DsTableFeatures,
	TData,
	TValue
>;

/** The TanStack table instance behind `DsTable`, as passed to `onTableCreated`. */
export type DsTableInstance<TData extends RowData> = Table<DsTableFeatures, TData>;

/** State of a `DsTableInstance`, as read from `table.store.state`. */
export type DsTableState = TableState<DsTableFeatures>;

export type DsRow<TData extends RowData> = Row<DsTableFeatures, TData>;

export type DsCell<TData extends RowData, TValue extends CellData = unknown> = Cell<
	DsTableFeatures,
	TData,
	TValue
>;

export type DsColumn<TData extends RowData, TValue extends CellData = unknown> = Column<
	DsTableFeatures,
	TData,
	TValue
>;

export type DsHeader<TData extends RowData, TValue extends CellData = unknown> = Header<
	DsTableFeatures,
	TData,
	TValue
>;

export type DsHeaderGroup<TData extends RowData> = HeaderGroup<DsTableFeatures, TData>;

/** A custom `filterFn` for a `DsColumnDef`. */
export type DsFilterFn<TData extends RowData> = FilterFn<DsTableFeatures, TData>;

/** A custom `sortFn` for a `DsColumnDef`. */
export type DsSortFn<TData extends RowData> = SortFn<DsTableFeatures, TData>;

export type DsColumnHelper<TData extends RowData> = ColumnHelper<DsTableFeatures, TData>;

/**
 * TanStack's `createColumnHelper` bound to `DsTable` features.
 *
 * @example
 * ```tsx
 * const columnHelper = createDsColumnHelper<Person>();
 * const columns = columnHelper.columns([columnHelper.accessor('name', { header: 'Name' })]);
 * ```
 */
export const createDsColumnHelper = <TData extends RowData>(): DsColumnHelper<TData> =>
	createColumnHelper<DsTableFeatures, TData>();
