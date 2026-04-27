import type { Row } from '@tanstack/react-table';

export interface DsTableRowExpandableCellProps<TData> {
	/**
	 * TanStack Table row model for the parent row. Used to toggle the row's
	 * expanded state when the button is clicked.
	 */
	row: Row<TData>;
	/**
	 * Additional CSS class name applied to the cell element.
	 */
	className?: string;
	/**
	 * Additional CSS class name applied to the expand/collapse button.
	 */
	buttonClassName?: string;
}
