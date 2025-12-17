import { Row } from '@tanstack/react-table';
import { FilterAdapter } from '../types/filter-adapter.types';
export interface RangeValue {
    from?: number;
    to?: number;
}
export interface DualRangeFilterValue {
    [fieldName: string]: RangeValue;
}
export interface DualRangeFilterAdapterConfig<TData> {
    /**
     * Unique identifier (should match column accessorKey)
     */
    id: string;
    /**
     * Display label for filter navigation
     */
    label: string;
    /**
     * Field configurations: { fieldKey: displayLabel }
     * Example: { running: 'Running', completed: 'Completed' }
     */
    fields: Record<string, string>;
    /**
     * Optional formatter for chip display
     * @default (num) => num.toLocaleString('en-US')
     */
    formatNumber?: (num: number) => string;
    /**
     * How to extract the value object from a row
     * @default (row) => row.getValue(id)
     */
    getRowValue?: (row: Row<TData>) => Record<string, number>;
}
/**
 * Factory function to create a dual-range filter adapter
 * Handles filtering on multiple numeric ranges within a single column
 */
export declare function createDualRangeFilterAdapter<TData>(config: DualRangeFilterAdapterConfig<TData>): FilterAdapter<TData, DualRangeFilterValue, Record<string, number>>;
//# sourceMappingURL=create-dual-range-filter-adapter.d.ts.map