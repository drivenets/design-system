import { ReactNode } from '../../../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import { ColumnDef } from '@tanstack/react-table';
import { ChipItem } from '../../../ds-chip-group';
import { AnyAdapter, ColumnFilterState, FilterAdapter, FilterNavItem, FilterState } from '../types/filter-adapter.types';
export interface UseTableFiltersResult<TData, TValue> {
    /**
     * Current filter state
     */
    filterState: FilterState<TValue>;
    /**
     * Column filters for TanStack Table
     */
    columnFilters: ColumnFilterState<TValue>[];
    /**
     * Filter chips for display
     */
    filterChips: ChipItem[];
    /**
     * Filter navigation items with counts
     */
    filterNavItems: FilterNavItem[];
    /**
     * Enhanced column definitions with filter functions
     */
    enhancedColumns: ColumnDef<TData>[];
    /**
     * Handlers
     */
    handlers: {
        /**
         * Update a specific filter's value
         */
        updateFilter: (filterId: string, value: TValue) => void;
        /**
         * Apply all filters (converts to TanStack format)
         */
        applyFilters: () => void;
        /**
         * Clear all filters
         */
        clearAll: () => void;
        /**
         * Delete a specific chip
         */
        deleteChip: (chip: ChipItem) => void;
    };
    /**
     * Render function for filter modal content
     */
    renderFilterContent: (selectedFilter: FilterNavItem) => ReactNode;
}
/**
 * Hook to orchestrate table filtering with adapters
 * Manages filter state, generates chips, handles column definitions
 *
 * @param filterAdapters Array of filter adapters
 * @param baseColumns Base column definitions (optional)
 * @returns Complete filter management system
 */
export declare function useTableFilters<TData, TValue, TCellValue>(filterAdapters: FilterAdapter<TData, TValue, TCellValue>[] | AnyAdapter[], baseColumns?: ColumnDef<TData>[]): UseTableFiltersResult<TData, TValue>;
//# sourceMappingURL=use-table-filters.d.ts.map