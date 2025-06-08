import { Cell, Row } from '@tanstack/react-table';
import type { IconType } from '@design-system/ui';

/**
 * Props for the table cell component
 */
export interface TableCellProps<TData, TValue> {
  /**
   * The row data from the table
   */
  row: Row<TData>;

  /**
   * The cell data from the table
   */
  cell: Cell<TData, TValue>;

  /**
   * Primary actions to be shown on each row (on hover)
   */
  primaryRowActions?: Array<{
    /**
     * Optional label text for the action
     */
    label?: string;

    /**
     * Icon to be displayed for the action
     */
    icon: IconType;

    /**
     * Optional tooltip text to show on hover
     */
    tooltip?: string;

    /**
     * Optional function to determine if the action should be disabled
     */
    disabled?: (data: TData) => boolean;

    /**
     * Function to be called when the action is clicked
     */
    onClick: (data: TData) => void;
  }>;

  /**
   * Secondary actions to be shown in a dropdown on each row (on hover)
   */
  secondaryRowActions?: Array<{
    /**
     * Label text for the action
     */
    label: string;

    /**
     * Icon to be displayed for the action
     */
    icon: IconType;

    /**
     * Optional function to determine if the action should be disabled
     */
    disabled?: (data: TData) => boolean;

    /**
     * Function to be called when the action is clicked
     */
    onClick: (data: TData) => void;
  }>;
}
