import type { Table, RowData } from '@tanstack/react-table';
import type { DsTableFeatures } from '../../ds-table-features';

/**
 * Props for the table header component
 */
export interface DsTableHeaderProps<TData extends RowData> {
	/**
	 * The table instance from @tanstack/react-table
	 */
	table: Table<DsTableFeatures, TData>;
}
