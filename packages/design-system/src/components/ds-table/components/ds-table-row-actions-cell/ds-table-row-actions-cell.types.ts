import type { Row } from '@tanstack/react-table';
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
	 * Optional function to determine if the action should be hidden for a specific row.
	 * When it returns `true`, the action is omitted from that row's menu. Takes precedence over `disabled`.
	 */
	hidden?: (row: TData) => boolean;

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

	/**
	 * Optional className to apply custom styling to the action item
	 */
	className?: string;
};

/**
 * Props for the row actions cell component
 */
export interface DsTableRowActionsCellProps<TData> {
	/**
	 * The row whose actions are rendered
	 */
	row: Row<TData>;
}
