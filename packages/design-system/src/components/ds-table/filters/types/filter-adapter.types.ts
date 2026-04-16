import type { ReactNode } from 'react';
import type { Row } from '@tanstack/react-table';
import type { TagFilterItem } from '../../../ds-tag-filter';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyAdapter = FilterAdapter<any, any, any>;

/**
 * Contract every filter implements. `TData` is the row type, `TFilterValue`
 * the adapter's state, `TCellValue` the cell value returned by the column.
 */
export interface FilterAdapter<TData, TFilterValue, TCellValue = unknown> {
	/** Unique id, should match the column `accessorKey`. */
	id: string;
	/** Display label used in the filter navigation. */
	label: string;
	/** Initial / reset value. */
	initialValue: TFilterValue;
	/** TanStack `filterFn` — returns whether a row matches the current value. */
	columnFilterFn: (row: Row<TData>, columnId: string, filterValue: TFilterValue) => boolean;
	/** Optional cell renderer; receives the cell value, not the filter value. */
	cellRenderer?: (value: TCellValue) => ReactNode;
	/**
	 * Convert the filter value into tags for `DsTagFilter`. Each tag's
	 * `metadata.key` / `metadata.value` must let `fromTag` undo it.
	 */
	toTags: (value: TFilterValue) => TagFilterItem[];
	/** Remove a tag's effect from the current value. */
	fromTag: (tag: TagFilterItem, currentValue: TFilterValue) => TFilterValue;
	/** Number of active sub-filters; `0` means the filter is inactive. */
	getActiveFiltersCount: (value: TFilterValue) => number;
	/** Return the initial value. */
	reset: () => TFilterValue;
	/** Render the filter UI for a given value + onChange. */
	renderFilter: (value: TFilterValue, onChange: (value: TFilterValue) => void) => ReactNode;
}

export interface FilterNavItem {
	/** Matches `FilterAdapter.id`. */
	id: string;
	label: string;
	/** Active filter count badge. */
	count?: number;
	disabled?: boolean;
}

/** Map of filter id → adapter value. */
export interface FilterState<TValue> {
	[filterId: string]: TValue;
}

export interface ColumnFilterState<TValue> {
	/** Column id (matches the column `accessorKey`). */
	id: string;
	/** Value passed to the column's filter function. */
	value: TValue;
}

/**
 * Set by the consumer on `column.meta.filter` to opt a column into the
 * per-column filter popover. Provide an `adapter` inline or just `adapterId`
 * to resolve against `useTableFilters({ filterAdapters })`.
 */
export interface ColumnFilterMeta {
	/** Mutually exclusive with `adapterId`. */
	adapter?: AnyAdapter;
	/** Mutually exclusive with `adapter`. */
	adapterId?: string;
}

/**
 * What `useTableFilters` injects onto `column.meta.filter` of each enhanced
 * column. Consumers don't build this — they set `ColumnFilterMeta` and the
 * hook swaps it for this resolved shape on `enhancedColumns`.
 */
export interface ResolvedColumnFilter {
	filterId: string;
	hasActiveFilter: boolean;
	/** Renders the adapter's filter UI for this column. */
	render: () => ReactNode;
	onApply: () => void;
	onClear: () => void;
	onCancel: () => void;
}
