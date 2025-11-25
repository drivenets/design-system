import { ReactNode } from 'react';
import { FilterAdapter } from '../types/filter-adapter.types';

export interface CustomFilterAdapterConfig<TData, TFilterValue> {
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
	filterFn: FilterAdapter<TData, TFilterValue>['columnFilterFn'];

	/**
	 * Convert filter value to display chips
	 */
	toChips: FilterAdapter<TData, TFilterValue>['toChips'];

	/**
	 * Remove chip effect from filter value
	 */
	fromChip: FilterAdapter<TData, TFilterValue>['fromChip'];

	/**
	 * Calculate active filter count
	 */
	getActiveCount: FilterAdapter<TData, TFilterValue>['getActiveCount'];

	/**
	 * Check if filter has active values
	 */
	hasActiveFilters: FilterAdapter<TData, TFilterValue>['hasActiveFilters'];

	/**
	 * Render the filter UI
	 */
	renderFilter: (value: TFilterValue, onChange: (value: TFilterValue) => void) => ReactNode;

	/**
	 * Optional custom cell renderer
	 */
	cellRenderer?: (value: TFilterValue) => ReactNode;
}

/**
 * Factory function to create a custom filter adapter
 *
 * Provides maximum flexibility for app-specific filtering needs.
 * Use this when checkbox or dual-range adapters don't fit your requirements.
 *
 * ## When to use:
 * - Complex filtering logic (e.g., editor + date range)
 * - Unique UI that doesn't fit generic patterns
 * - Combining multiple sub-filters
 * - Special chip generation requirements
 *
 * ## Example:
 * ```typescript
 * interface MyFilterValue {
 *   users: string[];
 *   dateRange: { from?: Date; to?: Date };
 * }
 *
 * const myFilter = createCustomFilterAdapter<DataType, MyFilterValue>({
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
 *   getActiveCount: (value) => {
 *     // Count active filters
 *     return count;
 *   },
 *
 *   hasActiveFilters: (value) => {
 *     // Check if filter is active
 *     return isActive;
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
 * See `workflow-filters.config.tsx` for a complete example (lastEditedFilterAdapter).
 */
export function createCustomFilterAdapter<TData, TFilterValue>(
	config: CustomFilterAdapterConfig<TData, TFilterValue>,
): FilterAdapter<TData, TFilterValue> {
	return {
		id: config.id,
		label: config.label,
		initialValue: config.initialValue,
		columnFilterFn: config.filterFn,
		cellRenderer: config.cellRenderer,
		toChips: config.toChips,
		fromChip: config.fromChip,
		getActiveCount: config.getActiveCount,
		hasActiveFilters: config.hasActiveFilters,
		reset: () => config.initialValue,
		renderFilter: config.renderFilter,
	};
}
