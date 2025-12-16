import type { IconType } from '../../../ds-icon';

/**
 * Represents a bulk action that can be performed on selected table rows
 */
export interface Action {
	/**
	 * Icon to be displayed for the action
	 */
	icon: IconType;

	/**
	 * Label text for the action
	 */
	label: string;

	/**
	 * Function to be called when the action is clicked
	 */
	onClick: () => void;
}

/**
 * Props for the bulk actions component
 */
export interface BulkActionsProps {
	/**
	 * Number of rows currently selected in the table
	 */
	numSelectedRows: number;

	/**
	 * Array of actions to be displayed in the bulk actions bar
	 */
	actions: Action[];

	/**
	 * Function to be called when the selection should be cleared
	 */
	onClearSelection: () => void;
}
