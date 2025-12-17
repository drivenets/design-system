import { ReactNode } from '../../../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import { Row } from '@tanstack/react-table';
import { FilterAdapter } from '../types/filter-adapter.types';
import { CheckboxFilterItem } from '../components/checkbox-filter';
export interface CheckboxFilterAdapterConfig<TData, TValue> {
    /**
     * Unique identifier (should match column accessorKey)
     */
    id: string;
    /**
     * Display label for filter navigation
     */
    label: string;
    /**
     * Available items to select from
     */
    items: CheckboxFilterItem<TValue>[];
    /**
     * Optional custom renderer for each item
     */
    renderer?: (item: CheckboxFilterItem<TValue>) => ReactNode;
    /**
     * Optional custom chip label generator
     * @default (item) => `${label}: ${item.label}`
     */
    chipLabelTemplate?: (item: CheckboxFilterItem<TValue>) => string;
    /**
     * Optional custom cell renderer for table column
     */
    cellRenderer?: (value: TValue) => ReactNode;
    /**
     * How to extract the value from a row for comparison
     * @default (row) => row.getValue(id)
     */
    getRowValue?: (row: Row<TData>) => TValue;
}
/**
 * Factory function to create a checkbox filter adapter
 *
 * Handles multi-select checkbox filtering with inclusion model:
 * - Empty selection = show all data (no filter active)
 * - Selected items = show only those items
 */
export declare function createCheckboxFilterAdapter<TData, TValue = string>(config: CheckboxFilterAdapterConfig<TData, TValue>): FilterAdapter<TData, CheckboxFilterItem<TValue>[], TValue>;
//# sourceMappingURL=create-checkbox-filter-adapter.d.ts.map