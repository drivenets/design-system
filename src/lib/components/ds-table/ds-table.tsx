import * as React from 'react';
import {
  type ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  RowSelectionState,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from '@tanstack/react-table';
import { useVirtualizer, type VirtualItem } from '@tanstack/react-virtual';
import classnames from 'classnames';

import { Table, TableBody, TableCell, TableRow } from './components/core-table';
import { DsTableBulkActions } from './components/ds-table-bulk-actions';
import { DsTableHeader } from './components/ds-table-header';
import styles from './ds-table.module.scss';
import type { DataTableProps } from './ds-table.types';
import { DsTableRow } from './components/ds-table-row';

/**
 * Design system Table component
 */
const DsTable = <TData, TValue>({
  columns,
  data,
  virtualized = false,
  virtualizedOptions = {
    estimateSize: 48,
    overscan: 10,
  },
  pagination = true,
  pageSize = 10,
  className,
  onRowClick,
  emptyState,
  stickyHeader = true,
  bordered = true,
  fullWidth = true,
  highlightOnHover = true,
  expandable = false,
  renderExpandedRow,
  filterElement,
  onTableCreated,
  selectable = false,
  onSelectionChange,
  actions = [],
  onRowDoubleClick,
  primaryRowActions = [],
  secondaryRowActions,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
  const [expandedRows, setExpandedRows] = React.useState<Record<string, boolean>>({});

  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (onSelectionChange && selectable) {
      onSelectionChange(rowSelection);
    }
  }, [rowSelection, onSelectionChange, selectable]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: pagination ? getPaginationRowModel() : undefined,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
    enableRowSelection: selectable,
  });

  React.useEffect(() => {
    if (onTableCreated) {
      onTableCreated(table);
    }
  }, [table, onTableCreated]);

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => virtualizedOptions.estimateSize || 48,
    overscan: virtualizedOptions.overscan || 10,
  });

  const toggleRowExpanded = (rowId: string) => {
    setExpandedRows(prev => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const virtualItems = virtualized ? rowVirtualizer.getVirtualItems() : null;
  const totalSize = virtualized ? rowVirtualizer.getTotalSize() : null;

  const renderEmptyState = () => (
    <TableRow>
      <TableCell
        colSpan={columns.length + (expandable ? 1 : 0) + (selectable ? 1 : 0)}
        className={styles.emptyState}
      >
        {emptyState || 'No results.'}
      </TableCell>
    </TableRow>
  );

  const selectedRows = Object.keys(rowSelection)
    .map(key => rows.find(row => row.id === key))
    .filter(Boolean)
    .map(row => row!.original);

  return (
    <div className={classnames(styles.container, className)}>
      {filterElement}
      <div
        ref={tableContainerRef}
        className={classnames(styles.dataTableContainer, virtualized && styles.virtualized)}
      >
        {virtualized && totalSize ? (
          <div
            className={styles.virtualRowContainer}
            style={{
              height: `${totalSize}px`,
            }}
          >
            <table className={classnames(styles.table, !bordered && styles.tableNoBorder)}>
              <DsTableHeader
                table={table}
                stickyHeader={stickyHeader}
                bordered={bordered}
                expandable={expandable}
                selectable={selectable}
              />
              <TableBody>
                {virtualItems &&
                  virtualItems.map((virtualRow: VirtualItem) => {
                    const row = rows[virtualRow.index];
                    return (
                      <DsTableRow
                        key={row.id}
                        row={row}
                        virtualRow={virtualRow}
                        expandable={expandable}
                        expandedRows={expandedRows}
                        selectable={selectable}
                        onRowClick={onRowClick}
                        onRowDoubleClick={onRowDoubleClick}
                        renderExpandedRow={renderExpandedRow}
                        virtualized={virtualized}
                        bordered={bordered}
                        highlightOnHover={highlightOnHover}
                        toggleRowExpanded={toggleRowExpanded}
                        primaryRowActions={primaryRowActions}
                        secondaryRowActions={secondaryRowActions}
                      />
                    );
                  })}
              </TableBody>
            </table>
          </div>
        ) : (
          <Table
            className={classnames(fullWidth && styles.fullWidth, !bordered && styles.tableNoBorder)}
          >
            <DsTableHeader
              table={table}
              stickyHeader={stickyHeader}
              bordered={bordered}
              expandable={expandable}
              selectable={selectable}
            />
            <TableBody>
              {rows.length
                ? rows.map(row => (
                  <DsTableRow
                    key={row.id}
                    row={row}
                    expandable={expandable}
                    expandedRows={expandedRows}
                    selectable={selectable}
                    onRowClick={onRowClick}
                    onRowDoubleClick={onRowDoubleClick}
                    renderExpandedRow={renderExpandedRow}
                    virtualized={virtualized}
                    bordered={bordered}
                    highlightOnHover={highlightOnHover}
                    toggleRowExpanded={toggleRowExpanded}
                    primaryRowActions={primaryRowActions}
                    secondaryRowActions={secondaryRowActions}
                  />
                ))
                : renderEmptyState()}
            </TableBody>
          </Table>
        )}
      </div>
      {selectable && actions.length > 0 && (
        <DsTableBulkActions
          numSelectedRows={selectedRows.length}
          actions={actions.map(action => ({
            ...action,
            onClick: () => action.onClick(selectedRows),
          }))}
          onClearSelection={table.resetRowSelection}
        />
      )}
    </div>
  );
};

export default DsTable;
