import type { Table } from '@tanstack/react-table';

/**
 * Props for the table header component
 */
export interface DsTableHeaderProps<TData> {
  /**
   * The table instance from @tanstack/react-table
   */
  table: Table<TData>;

  /**
   * Whether the header should stick to the top when scrolling
   * @default false
   */
  stickyHeader?: boolean;

  /**
   * Whether the table cells should have borders
   * @default false
   */
  bordered?: boolean;

  /**
   * Whether the table rows are expandable
   * @default false
   */
  expandable?: boolean;

  /**
   * Whether the table rows are selectable
   * @default false
   */
  selectable?: boolean;
}
