import type { Cell, Row } from '@tanstack/react-table';
import type { IconType } from '../../../ds-icon';

/**
 * Represents an action that can be performed on a single row
 */
export interface RowAction<TData> {
	/**
	 * Icon to be displayed for the action
	 */
	icon: IconType;

	/**
	 * Label text for the action
	 */
	label: string | ((row: TData) => string);

	/**
	 * Optional tooltip text to show on hover
	 */
	tooltip?: string;

	/**
	 * Optional function to determine if the action should be disabled for a specific row
	 */
	disabled?: (row: TData) => boolean;

	/**
	 * Function to be called when the action is clicked, receives the row data as parameter
	 */
	onClick: (row: TData) => void;
}

/**
 * Represents a secondary action that can be performed on a single row
 */
export type SecondaryRowAction<TData> = Omit<RowAction<TData>, 'icon'> & {
	/**
	 * Optional icon to be displayed for the action
	 */
	icon?: IconType;
};

/**
 * Props for the table cell component
 */
export interface DsTableCellProps<TData, TValue> {
	/**
	 * The row data from the table
	 */
	row: Row<TData>;

	/**
	 * The cell data from the table
	 */
	cell: Cell<TData, TValue>;

	/**
	 * Primary actions to be shown on each row (on hover)
	 */
	primaryRowActions?: RowAction<TData>[];

	/**
	 * Secondary actions to be shown in a dropdown on each row (on hover)
	 */
	secondaryRowActions?: SecondaryRowAction<TData>[];
}
