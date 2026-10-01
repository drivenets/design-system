import type { Cell, Row } from '@tanstack/react-table';

/**
 * Props for the table cell component
 */
export interface DsTableCellProps<TData, TValue> {
	/**
	 * The row data from the table
	 */
	row: Row<TData>;

	/**
	 * The cell data from the table
	 */
	cell: Cell<TData, TValue>;
}
