import {
	columnFilteringFeature,
	columnPinningFeature,
	columnResizingFeature,
	columnSizingFeature,
	columnVisibilityFeature,
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
 * TanStack Table features `DsTable` registers. Pass `typeof dsTableFeatures` as the first
 * type argument of `ColumnDef`, `createColumnHelper`, `Row`, and other TanStack types.
 *
 * @example
 * ```tsx
 * const columns: ColumnDef<typeof dsTableFeatures, Person>[] = [...];
 * const columnHelper = createColumnHelper<typeof dsTableFeatures, Person>();
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
