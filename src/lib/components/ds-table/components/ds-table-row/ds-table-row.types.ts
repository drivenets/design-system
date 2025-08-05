import { Row } from '@tanstack/react-table';
import { VirtualItem } from '@tanstack/react-virtual';

/**
 * Props for the table row component
 */
export interface TableRowProps<TData> {
	/**
	 * The row data from the table
	 */
	row: Row<TData>;

	/**
	 * Virtual row data for virtualized tables
	 */
	virtualRow?: VirtualItem;
}
