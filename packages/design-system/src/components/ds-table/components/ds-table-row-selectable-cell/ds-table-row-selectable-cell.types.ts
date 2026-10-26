import type { Row, RowData } from '@tanstack/react-table';
import type { DsTableFeatures } from '../../ds-table-features';

export interface DsTableRowSelectableCellProps<TData extends RowData> {
	/**
	 * TanStack Table row model for the parent row. Used to read the row's
	 * selection state and toggle it when the checkbox is clicked.
	 */
	row: Row<DsTableFeatures, TData>;
}
