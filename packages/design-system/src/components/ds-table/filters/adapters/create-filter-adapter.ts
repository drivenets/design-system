import type { ReactNode } from 'react';
import type { FilterAdapter } from '../types/filter-adapter.types';

export interface FilterAdapterConfig<TData, TFilterValue, TCellValue = unknown> {
	/** Unique id, should match the column `accessorKey`. */
	id: string;
	label: string;
	initialValue: TFilterValue;
	/** TanStack `filterFn` for this column. */
	filterFn: FilterAdapter<TData, TFilterValue, TCellValue>['columnFilterFn'];
	toChips: FilterAdapter<TData, TFilterValue, TCellValue>['toChips'];
	fromChip: FilterAdapter<TData, TFilterValue, TCellValue>['fromChip'];
	getActiveFiltersCount: FilterAdapter<TData, TFilterValue, TCellValue>['getActiveFiltersCount'];
	renderFilter: (value: TFilterValue, onChange: (value: TFilterValue) => void) => ReactNode;
	/** Cell renderer; receives the cell value, not the filter value. */
	cellRenderer?: (value: TCellValue) => ReactNode;
}

/**
 * Base factory used by every specialized adapter. Reach for it only when
 * `createCheckboxFilterAdapter` / `createDualRangeFilterAdapter` don't fit
 * (custom UI, mixed sub-filters, bespoke chip logic).
 */
export function createFilterAdapter<TData, TFilterValue, TCellValue = unknown>(
	config: FilterAdapterConfig<TData, TFilterValue, TCellValue>,
): FilterAdapter<TData, TFilterValue, TCellValue> {
	return {
		id: config.id,
		label: config.label,
		initialValue: config.initialValue,
		columnFilterFn: config.filterFn,
		cellRenderer: config.cellRenderer,
		toChips: config.toChips,
		fromChip: config.fromChip,
		getActiveFiltersCount: config.getActiveFiltersCount,
		reset: () => config.initialValue,
		renderFilter: config.renderFilter,
	};
}
