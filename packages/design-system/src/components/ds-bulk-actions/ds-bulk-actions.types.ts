import type { CSSProperties, ReactNode, Ref } from 'react';
import type { IconType } from '../ds-icon';

export const bulkActionsPlacements = ['static', 'floating'] as const;
export type BulkActionsPlacement = (typeof bulkActionsPlacements)[number];

export interface DsBulkActionDefault {
	/**
	 * Icon displayed above the action label
	 */
	icon: IconType;

	/**
	 * Action label; truncated with ellipsis between 60px and 84px, full text in tooltip
	 */
	label: string;

	/**
	 * Called when the action is activated
	 */
	onClick: () => void;

	/**
	 * Whether the action is non-interactive
	 * @default false
	 */
	disabled?: boolean;
}

export interface DsBulkActionCustom {
	/**
	 * Stable key for custom action slots
	 */
	key: string;

	/**
	 * Renders a custom action control in the actions region
	 */
	render: () => ReactNode;
}

export type DsBulkAction = DsBulkActionDefault | DsBulkActionCustom;

export interface DsBulkActionsLocale {
	/**
	 * Label shown next to the selection count
	 * @default 'Items selected'
	 */
	itemsSelectedLabel?: string;

	/**
	 * Accessible name for the dismiss control
	 * @default 'Clear selection'
	 */
	clearSelectionLabel?: string;
}

export interface DsBulkActionsProps {
	/**
	 * Number of selected items. The bar mounts at 1+ and unmounts when cleared to 0.
	 */
	selectedCount: number;

	/**
	 * Bulk actions rendered between the selection summary and the dismiss control
	 */
	actions: DsBulkAction[];

	/**
	 * Called when the dismiss control is activated; should clear the selection
	 */
	onClearSelection: () => void;

	/**
	 * Placement of the toolbar. `floating` anchors to the bottom center of a positioned
	 * ancestor; `static` leaves placement to the consumer via `className` / `style`.
	 * @default 'static'
	 */
	placement?: BulkActionsPlacement;

	/**
	 * Localized strings for user-facing copy
	 */
	locale?: DsBulkActionsLocale;

	className?: string;
	style?: CSSProperties;
	ref?: Ref<HTMLDivElement>;
}
