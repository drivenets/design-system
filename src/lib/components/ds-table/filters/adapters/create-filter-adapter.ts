import { ReactNode } from 'react';
import { FilterAdapter } from '../types/filter-adapter.types';

export interface FilterAdapterConfig<TData, TFilterValue, TCellValue = unknown> {
	/**
	 * Unique identifier (should match column accessorKey)
	 */
	id: string;

	/**
	 * Display label for filter navigation
	 */
	label: string;

	/**
	 * Initial/default value for the filter
	 */
	initialValue: TFilterValue;

	/**
	 * Filter function - determines if row matches filter value
	 */
	filterFn: FilterAdapter<TData, TFilterValue, TCellValue>['columnFilterFn'];

	/**
	 * Convert filter value to display chips
	 */
	toChips: FilterAdapter<TData, TFilterValue, TCellValue>['toChips'];

	/**
	 * Remove chip effect from filter value
	 */
	fromChip: FilterAdapter<TData, TFilterValue, TCellValue>['fromChip'];

	/**
	 * Calculate active filter count
	 */
	getActiveFiltersCount: FilterAdapter<TData, TFilterValue, TCellValue>['getActiveFiltersCount'];

	/**
	 * Render the filter UI
	 */
	renderFilter: (value: TFilterValue, onChange: (value: TFilterValue) => void) => ReactNode;

	/**
	 * Optional custom cell renderer for table cells
	 * Note: This receives the cell value from the table, not the filter value
	 */
	cellRenderer?: (value: TCellValue) => ReactNode;
}

/**
 * Base factory function to create a filter adapter
 *
 * This is the core function that all specialized filter adapters use internally.
 * Use this when checkbox or dual-range adapters don't fit your requirements.
 *
 * ## When to use directly:
 * - Complex filtering logic (e.g., editor + date range)
 * - Unique UI that doesn't fit generic patterns
 * - Combining multiple sub-filters
 * - Special chip generation requirements
 *
 * ## When to use specialized helpers instead:
 * - **Checkbox filters**: Use `createCheckboxFilterAdapter` for multi-select
 * - **Range filters**: Use `createDualRangeFilterAdapter` for numeric ranges
 *
 * ## Example:
 * ```typescript
 * interface MyFilterValue {
 *   users: string[];
 *   dateRange: { from?: Date; to?: Date };
 * }
 *
 * const myFilter = createFilterAdapter<DataType, MyFilterValue>({
 *   id: 'myColumn',
 *   label: 'My Filter',
 *   initialValue: { users: [], dateRange: {} },
 *
 *   filterFn: (row, columnId, filterValue) => {
 *     // Your custom logic
 *     return matchesUsers && matchesDateRange;
 *   },
 *
 *   toChips: (value) => {
 *     // Generate chips from your filter value
 *     return chips;
 *   },
 *
 *   fromChip: (chip, currentValue) => {
 *     // Remove chip's effect from value
 *     return updatedValue;
 *   },
 *
 *   getActiveFiltersCount: (value) => {
 *     // Count active filters (0 means none active)
 *     return count;
 *   },
 *
 *   renderFilter: (value, onChange) => (
 *     <YourCustomFilterComponent
 *       value={value}
 *       onChange={onChange}
 *     />
 *   ),
 * });
 * ```
 *
 * ## Reference Implementation:
 * See `workflow-filters.config.tsx` for a complete example (lastEditedFilterAdapter).
 *
 * ## Note:
 * Most use cases are covered by `createCheckboxFilterAdapter` or `createDualRangeFilterAdapter`.
 * Only use this base function directly when you need completely custom filter logic.
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
