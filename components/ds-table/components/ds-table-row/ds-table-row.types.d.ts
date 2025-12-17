import { Ref } from '../../../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import { Row } from '@tanstack/react-table';
import { VirtualItem } from '@tanstack/react-virtual';
/**
 * Props for the table row component
 */
export interface DsTableRowProps<TData> {
    /**
     * Ref for the table row
     */
    ref?: Ref<HTMLTableRowElement>;
    /**
     * The row data from the table
     */
    row: Row<TData>;
    /**
     * Virtual row data for virtualized tables
     */
    virtualRow?: VirtualItem;
}
//# sourceMappingURL=ds-table-row.types.d.ts.map