import { DsDataTableProps } from './ds-table.types';
/**
 * Design system Table component
 */
declare const DsTable: <TData extends {
    id: string;
}, TValue>({ ref, columns, data: tableData, virtualized, virtualizedOptions, className, onRowClick, emptyState, stickyHeader, bordered, fullWidth, highlightOnHover, rowSize, expandable, renderExpandedRow, selectable, showSelectAllCheckbox, onSelectionChange, onSortingChange, onScroll, actions, onRowDoubleClick, primaryRowActions, secondaryRowActions, reorderable, onOrderChange, columnFilters: externalColumnFilters, onColumnFiltersChange, columnVisibility: externalColumnVisibility, onColumnVisibilityChange, activeRowId, }: DsDataTableProps<TData, TValue>) => import("react/jsx-runtime").JSX.Element;
export default DsTable;
//# sourceMappingURL=ds-table.d.ts.map