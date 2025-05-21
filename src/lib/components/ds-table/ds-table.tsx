import {
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  RowSelectionState,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from '@tanstack/react-table';
import { useVirtualizer, type VirtualItem } from '@tanstack/react-virtual';
import classnames from 'classnames';
import * as React from 'react';
import { CSSProperties } from 'react';

import DsIcon from '../ds-icon/ds-icon';
import { Table, TableBody, TableCell, TableRow } from './core-table';
import DsTableBulkActions from './ds-table-bulk-actions';
import DsTableHeader from './ds-table-header';
import Button from '../ds-button/ds-button';
import { DsCheckbox } from '../ds-checkbox';
import styles from './ds-table.module.scss';
import type { DataTableProps } from './ds-table.types';

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

  const renderRow = (row: Row<TData>, virtualRow?: VirtualItem) => {
    const isExpanded = expandable && expandedRows[row.id];

    const rowStyle: CSSProperties = virtualRow
      ? {
          height: `${virtualRow.size}px`,
          transform: `translateY(${virtualRow.start}px)`,
          position: 'absolute',
          width: '100%',
        }
      : {};

    return (
      <React.Fragment key={row.id}>
        <TableRow
          data-state={row.getIsSelected() && 'selected'}
          className={classnames(
            styles.tableRow,
            virtualized && styles.virtualizedRow,
            onRowClick && styles.clickableRow,
            highlightOnHover && styles.highlightHoverRow,
            !bordered && styles.rowNoBorder,
          )}
          style={rowStyle}
          onClick={() => onRowClick && onRowClick(row.original)}
          onDoubleClick={() => onRowDoubleClick && onRowDoubleClick(row.original)}
        >
          {selectable && (
            <TableCell className={classnames(styles.tableCell, styles.cellCheckbox)}>
              <DsCheckbox
                className={styles.checkboxContainer}
                checked={row.getIsSelected()}
                onClick={e => {
                  e.stopPropagation();
                  const toggleHandler = row.getToggleSelectedHandler();
                  toggleHandler(e);
                }}
              />
            </TableCell>
          )}
          {expandable && (
            <TableCell className={classnames(styles.tableCell, styles.cellButton)}>
              <Button
                variant={virtualized ? 'ghost' : 'borderless'}
                size="small"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  toggleRowExpanded(row.id);
                }}
                className={styles.expandToggleButton}
              >
                <DsIcon
                  icon={virtualized ? (isExpanded ? 'arrow_drop_down' : 'arrow_right') : 'chevron_right'}
                  className={classnames(
                    styles.pageButtonIcon,
                    !virtualized && isExpanded && 'rotate-90',
                  )}
                />
              </Button>
            </TableCell>
          )}
          {row.getVisibleCells().map((cell: any) => (
            <TableCell
              key={cell.id}
              className={styles.tableCell}
              style={
                virtualized
                  ? {
                      width: cell.column.getSize(),
                      minWidth: cell.column.getSize(),
                    }
                  : undefined
              }
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
        {isExpanded && renderExpandedRow && (
          <TableRow
            style={
              virtualRow
                ? {
                    transform: `translateY(${virtualRow.start + virtualRow.size}px)`,
                    position: 'absolute',
                    width: '100%',
                  }
                : undefined
            }
            className={styles.expandedRow}
          >
            <TableCell
              colSpan={row.getVisibleCells().length + (selectable ? 1 : 0) + (expandable ? 1 : 0)}
              className={styles.tableCell}
            >
              {renderExpandedRow(row.original)}
            </TableCell>
          </TableRow>
        )}
      </React.Fragment>
    );
  };

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
                    return renderRow(row, virtualRow);
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
            <TableBody>{rows.length ? rows.map(row => renderRow(row)) : renderEmptyState()}</TableBody>
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
