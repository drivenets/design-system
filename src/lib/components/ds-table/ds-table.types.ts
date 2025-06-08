import React from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import { IconType } from '../ds-icon';

/**
 * Represents a bulk action that can be performed on multiple selected rows
 */
export interface Action<TData> {
  /**
   * Icon to be displayed for the action
   */
  icon: IconType;

  /**
   * Label text for the action
   */
  label: string;

  /**
   * Function to be called when the action is clicked, receives the selected rows as parameter
   */
  onClick: (rows: TData[]) => void;
}

/**
 * Represents an action that can be performed on a single row
 */
export interface RowAction<TData> {
  /**
   * Icon to be displayed for the action
   */
  icon: IconType;

  /**
   * Label text for the action
   */
  label: string;

  /**
   * Optional tooltip text to show on hover
   */
  tooltip?: string;

  /**
   * Optional function to determine if the action should be disabled for a specific row
   */
  disabled?: (row: TData) => boolean;

  /**
   * Function to be called when the action is clicked, receives the row data as parameter
   */
  onClick: (row: TData) => void;
}

export interface DataTableProps<TData, TValue> {
  /**
   * Columns of the table
   */
  columns: ColumnDef<TData, TValue>[];

  /**
   * Data of the table
   */
  data: TData[];

  /**
   * Whether the table is virtualized
   * @default false
   */
  virtualized?: boolean;

  /**
   * Options for the virtualized table
   */
  virtualizedOptions?: {
    /**
     * Estimate size of the table
     */
    estimateSize?: number;

    /**
     * Overscan of the table
     */
    overscan?: number;
  };

  /**
   * Whether the table has pagination
   * @default false
   */
  pagination?: boolean;

  /**
   * Size of the table
   * @default 10
   */
  pageSize?: number;

  /**
   * Class name of the table
   */
  className?: string;

  /**
   * Function to handle row click
   */
  onRowClick?: (row: TData) => void;

  /**
   * Function to handle row double click
   */
  onRowDoubleClick?: (row: TData) => void;

  /**
   * Empty state of the table
   */
  emptyState?: React.ReactNode;

  /**
   * Whether the table has sticky header
   */
  stickyHeader?: boolean;

  /**
   * Whether the table has zebra stripes
   */
  zebra?: boolean;

  /**
   * Whether the table has bordered cells
   */
  bordered?: boolean;

  /**
   * Whether the table is full width
   */
  fullWidth?: boolean;

  /**
   * Whether the table has highlight on hover
   */
  highlightOnHover?: boolean;

  /**
   * Whether the table is expandable
   */
  expandable?: boolean;

  /**
   * Function to render the expanded row
   */
  renderExpandedRow?: (row: TData) => React.ReactNode;

  /**
   * Filter element of the table
   */
  filterElement?: React.ReactNode;

  /**
   * Function to handle table creation
   */
  onTableCreated?: (table: any) => void;

  /**
   * Whether the table rows are selectable
   * @default false
   */
  selectable?: boolean;

  /**
   * Function to handle selection change
   */
  onSelectionChange?: (selectedRows: Record<string, boolean>) => void;

  /**
   * Actions to be shown in the bulk actions
   */
  actions?: Action<TData>[];

  /**
   * Primary actions to be shown on each row (on hover)
   */
  primaryRowActions?: RowAction<TData>[];

  /**
   * Secondary actions to be shown in a dropdown on each row (on hover)
   */
  secondaryRowActions?: RowAction<TData>[];
}
