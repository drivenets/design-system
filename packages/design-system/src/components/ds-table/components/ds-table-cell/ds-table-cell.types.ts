import type { Cell, Row, RowData } from '@tanstack/react-table';
import type { DsTableFeatures } from '../../ds-table-features';

/**
 * Props for the table cell component
 */
export interface DsTableCellProps<TData extends RowData, TValue> {
	/**
	 * The row data from the table
	 */
	row: Row<DsTableFeatures, TData>;

	/**
	 * The cell data from the table
	 */
	cell: Cell<DsTableFeatures, TData, TValue>;
}
