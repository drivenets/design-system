import type { Ref } from 'react';
import type { Row } from '@tanstack/react-table';
import type { VirtualItem } from '@tanstack/react-virtual';

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
