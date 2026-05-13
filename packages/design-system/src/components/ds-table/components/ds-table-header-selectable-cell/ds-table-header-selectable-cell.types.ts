import type { Table } from '@tanstack/react-table';

export interface DsTableHeaderSelectableCellProps<TData> {
	/**
	 * TanStack Table instance for the table. Used to read the aggregate
	 * selection state and toggle selection across all rows.
	 */
	table: Table<TData>;
}
