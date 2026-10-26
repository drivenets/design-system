import type { Row, RowData } from '@tanstack/react-table';
import type { DsTableFeatures } from '../../ds-table-features';

export interface DsTableRowExpandableCellProps<TData extends RowData> {
	/**
	 * TanStack Table row model for the parent row. Used to toggle the row's
	 * expanded state when the button is clicked.
	 */
	row: Row<DsTableFeatures, TData>;
	/**
	 * Additional CSS class name applied to the expand/collapse button.
	 */
	buttonClassName?: string;
}
