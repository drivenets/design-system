import type { Table, RowData } from '@tanstack/react-table';
import type { DsTableFeatures } from '../../ds-table-features';

export interface DsTableHeaderSelectableCellProps<TData extends RowData> {
	/**
	 * TanStack Table instance for the table. Used to read the aggregate
	 * selection state and toggle selection across all rows.
	 */
	table: Table<DsTableFeatures, TData>;
}
