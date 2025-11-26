import { ReactNode } from 'react';
import { Row } from '@tanstack/react-table';
import { ChipItem } from '@design-system/ui';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyAdapter = FilterAdapter<any, any, any>;

/**
 * Base filter adapter interface that all filters must implement
 * This provides a consistent contract for filter behavior
 *
 * @template TData - The row data type
 * @template TFilterValue - The filter state value type
 * @template TCellValue - The actual cell value type from the table (defaults to unknown)
 */
export interface FilterAdapter<TData, TFilterValue, TCellValue = unknown> {
	/**
	 * Unique identifier for the filter (should match column accessorKey)
	 */
	id: string;

	/**
	 * Display label for the filter in the navigation
	 */
	label: string;

	/**
	 * Initial/default value for the filter state
	 */
	initialValue: TFilterValue;

	/**
	 * TanStack Table filter function
	 * Determines if a row matches the current filter value
	 */
	columnFilterFn: (row: Row<TData>, columnId: string, filterValue: TFilterValue) => boolean;

	/**
	 * Optional custom cell renderer for the table column
	 * Receives the actual cell value from the table, not the filter value
	 * If not provided, default rendering will be used
	 */
	cellRenderer?: (value: TCellValue) => ReactNode;

	/**
	 * Convert filter value to filter chips for display
	 * Returns empty array if no chips should be shown
	 */
	toChips: (value: TFilterValue) => ChipItem[];

	/**
	 * Remove a chip from the filter value
	 * Returns updated filter value with the chip's effect removed
	 */
	fromChip: (chip: ChipItem, currentValue: TFilterValue) => TFilterValue;

	/**
	 * Calculate how many active filters are applied
	 * Used for the count indicator in filter navigation
	 * Can also be used to check if filter is active (count > 0)
	 */
	getActiveFiltersCount: (value: TFilterValue) => number;

	/**
	 * Reset filter to initial state
	 */
	reset: () => TFilterValue;

	/**
	 * Render the filter UI component
	 * Receives current value and onChange callback
	 */
	renderFilter: (value: TFilterValue, onChange: (value: TFilterValue) => void) => ReactNode;
}

/**
 * Filter navigation item used to render filter tabs in the UI
 */
export interface FilterNavItem {
	/**
	 * Unique identifier for the filter (matches FilterAdapter.id)
	 */
	id: string;
	/**
	 * Display label for the filter tab
	 */
	label: string;
	/**
	 * Optional count badge to display active filters
	 */
	count?: number;
	/**
	 * Whether this filter is disabled
	 */
	disabled?: boolean;
}

/**
 * Filter state managed by useTableFilters hook
 */
export interface FilterState<TValue> {
	[filterId: string]: TValue;
}

/**
 * Column filter for TanStack Table
 */
export interface ColumnFilterState<TValue> {
	id: string;
	value: TValue;
}
