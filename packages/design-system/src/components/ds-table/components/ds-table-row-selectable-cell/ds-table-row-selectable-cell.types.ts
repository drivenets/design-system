import type { Row } from '@tanstack/react-table';

export interface DsTableRowSelectableCellProps<TData> {
	/**
	 * TanStack Table row model for the parent row. Used to toggle the row's
	 * selection state when the checkbox is clicked.
	 */
	row: Row<TData>;
	/**
	 * Whether the parent row is currently selected. Drives the checkbox's
	 * checked state.
	 */
	isSelected: boolean;
	/**
	 * Additional CSS class name applied to the cell element.
	 */
	className?: string;
}
