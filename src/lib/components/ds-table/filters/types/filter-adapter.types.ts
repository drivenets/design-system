import { ReactNode } from 'react';
import { Row } from '@tanstack/react-table';
import { ChipItem } from '@design-system/ui';

/**
 * Base filter adapter interface that all filters must implement
 * This provides a consistent contract for filter behavior
 */
export interface FilterAdapter<TData, TFilterValue> {
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
	 * If not provided, default rendering will be used
	 */
	cellRenderer?: (value: TFilterValue) => ReactNode;

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
	 */
	getActiveCount: (value: TFilterValue) => number;

	/**
	 * Check if the filter has any active values
	 * Used to determine if "Clear all" should be enabled
	 */
	hasActiveFilters: (value: TFilterValue) => boolean;

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
