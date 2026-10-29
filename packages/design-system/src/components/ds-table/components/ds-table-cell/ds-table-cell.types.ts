import type { RowData } from '@tanstack/react-table';
import type { DsCell, DsRow } from '../../ds-table-features';

/**
 * Props for the table cell component
 */
export interface DsTableCellProps<TData extends RowData, TValue> {
	/**
	 * The row data from the table
	 */
	row: DsRow<TData>;

	/**
	 * The cell data from the table
	 */
	cell: DsCell<TData, TValue>;
}
