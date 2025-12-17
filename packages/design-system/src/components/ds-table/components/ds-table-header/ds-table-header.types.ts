import type { Table } from '@tanstack/react-table';

/**
 * Props for the table header component
 */
export interface DsTableHeaderProps<TData> {
	/**
	 * The table instance from @tanstack/react-table
	 */
	table: Table<TData>;
}
