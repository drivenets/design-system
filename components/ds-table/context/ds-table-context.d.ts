import { DsDataTableProps, DsTableRowSize } from '../ds-table.types';
export interface DsTableContextType<TData, TValue> extends Partial<DsDataTableProps<TData, TValue>> {
    /**
     * The expanded rows
     */
    expandedRows: Record<string, boolean>;
    /**
     * Toggle the expanded state of a row
     * @param rowId - The id of the row to toggle
     */
    toggleRowExpanded: (rowId: string) => void;
    /**
     * Whether the table is virtualized
     * @default false
     */
    virtualized?: boolean;
    /**
     * Row size variant
     * @default 'medium'
     */
    rowSize: DsTableRowSize;
    /**
     * ID of the currently active row
     */
    activeRowId?: string | null;
}
export declare const DsTableContext: import('../../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react').Context<DsTableContextType<any, any> | null>;
export declare const useDsTableContext: <TData, TValue>() => DsTableContextType<TData, TValue>;
//# sourceMappingURL=ds-table-context.d.ts.map