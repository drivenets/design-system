import type { Row } from '@tanstack/react-table';

export interface DsTableRowSelectableCellProps<TData> {
	/**
	 * TanStack Table row model for the parent row. Used to read the row's
	 * selection state and toggle it when the checkbox is clicked.
	 */
	row: Row<TData>;
}
