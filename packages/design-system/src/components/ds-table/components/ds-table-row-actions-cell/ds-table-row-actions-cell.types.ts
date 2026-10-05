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
	 * Optional tooltip text to show on hover, either static or resolved per row.
	 * For secondary actions it is also shown when the action is disabled (e.g. to explain why).
	 */
	tooltip?: string | ((row: TData) => string | undefined);

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

type SecondaryRowActionBase<TData> = Omit<RowAction<TData>, 'icon' | 'onClick'> & {
	/**
	 * Optional icon to be displayed for the action
	 */
	icon?: IconType;

	/**
	 * Optional className to apply custom styling to the action item
	 */
	className?: string;
};

type SecondaryRowActionLeaf<TData> = SecondaryRowActionBase<TData> & {
	/**
	 * Function to be called when the action is clicked, receives the row data as parameter
	 */
	onClick: (row: TData) => void;
	children?: never;
};

type SecondaryRowActionBranch<TData> = SecondaryRowActionBase<TData> & {
	/**
	 * Nested actions rendered as a cascading submenu. Mutually exclusive with `onClick`.
	 * `hidden` and `disabled` on the parent apply to the whole submenu; a parent whose
	 * children are all hidden is omitted.
	 */
	children: SecondaryRowAction<TData>[];
	onClick?: never;
};

/**
 * Represents a secondary action that can be performed on a single row.
 * Either a leaf with `onClick`, or a parent with nested `children` that opens a submenu.
 */
export type SecondaryRowAction<TData> = SecondaryRowActionLeaf<TData> | SecondaryRowActionBranch<TData>;

/**
 * Props for the row actions cell component
 */
export interface DsTableRowActionsCellProps<TData> {
	/**
	 * The row whose actions are rendered
	 */
	row: Row<TData>;
}
