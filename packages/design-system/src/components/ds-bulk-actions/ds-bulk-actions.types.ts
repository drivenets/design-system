import type { CSSProperties, ReactNode, Ref } from 'react';
import type { IconType } from '../ds-icon';

export const bulkActionsPlacements = ['static', 'floating'] as const;
export type BulkActionsPlacement = (typeof bulkActionsPlacements)[number];

export const bulkActionsMenuPlacements = ['top', 'bottom'] as const;
export type BulkActionsMenuPlacement = (typeof bulkActionsMenuPlacements)[number];

export const bulkActionsMenuItemVariants = ['default', 'error'] as const;
export type BulkActionsMenuItemVariant = (typeof bulkActionsMenuItemVariants)[number];

export const bulkActionsItemWidthModes = ['fixed', 'fit-content'] as const;
export type BulkActionsItemWidthMode = (typeof bulkActionsItemWidthModes)[number];

/**
 * `'fixed'` keeps the 64–84px column. `'fit-content'` hugs the label. A number is an exact pixel width and truncates.
 */
export type DsBulkActionsItemWidth = BulkActionsItemWidthMode | number;

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

	/**
	 * Label for the overflow trigger that holds collapsed actions
	 * @default 'More'
	 */
	moreActionsLabel?: string;
}

interface DsBulkActionsMenuEntryBase {
	value: string;
	label: string;
	icon?: IconType;
	disabled?: boolean;
	/**
	 * @default 'default'
	 */
	variant?: BulkActionsMenuItemVariant;
}

type DsBulkActionsMenuLeafEntry = DsBulkActionsMenuEntryBase & {
	onSelect?: () => void;
	menu?: never;
};

type DsBulkActionsMenuBranchEntry = DsBulkActionsMenuEntryBase & {
	/**
	 * Nested submenu entries. Mutually exclusive with `onSelect`.
	 */
	menu: DsBulkActionsMenuEntry[];
	onSelect?: never;
};

export type DsBulkActionsMenuEntry = DsBulkActionsMenuLeafEntry | DsBulkActionsMenuBranchEntry;

interface DsBulkActionsItemSharedProps {
	/**
	 * Action column width.
	 * @default 'fixed'
	 */
	width?: DsBulkActionsItemWidth;

	/**
	 * Whether the action is non-interactive
	 * @default false
	 */
	disabled?: boolean;

	className?: string;
	style?: CSSProperties;
	ref?: Ref<HTMLDivElement>;
	children?: never;
}

type DsBulkActionsItemClickProps = DsBulkActionsItemSharedProps & {
	/**
	 * Icon displayed above the action label
	 */
	icon: IconType;

	/**
	 * Action label under the icon. Truncates when `width` is `'fixed'` or a pixel length; full text in tooltip.
	 */
	label: string;

	/**
	 * Called when the action is activated. Mutually exclusive with `menu`.
	 */
	onClick: () => void;

	menu?: never;
};

type DsBulkActionsItemMenuProps = DsBulkActionsItemSharedProps & {
	/**
	 * Icon displayed above the action label
	 */
	icon: IconType;

	/**
	 * Action label under the icon. Truncates when `width` is `'fixed'` or a pixel length; full text in tooltip.
	 */
	label: string;

	/**
	 * Declarative menu shown from this action. Mutually exclusive with `onClick`.
	 */
	menu: DsBulkActionsMenuEntry[];

	onClick?: never;
};

/**
 * Slot in the bulk-actions toolbar. `onClick` and `menu` are mutually exclusive.
 */
export type DsBulkActionsItemProps = DsBulkActionsItemClickProps | DsBulkActionsItemMenuProps;

export interface DsBulkActionsProps {
	/**
	 * Number of selected items. The bar mounts at 1+ and unmounts when cleared to 0.
	 */
	selectedCount: number;

	/**
	 * Action slots rendered between the selection summary and the dismiss control
	 */
	children?: ReactNode;

	/**
	 * Called when the dismiss control is activated; should clear the selection
	 */
	onClearSelection: () => void;

	/**
	 * Placement of the toolbar. `floating` anchors to the bottom center of a positioned
	 * ancestor; `static` leaves placement to the consumer via `className` / `style`.
	 *
	 * Action overflow ("More") only activates when the toolbar width is bounded via
	 * `style.width`, `style.maxWidth`, or a CSS `max-width`; a bare `width` set through
	 * `className` is not detected (the default `fit-content` width is indistinguishable).
	 * @default 'static'
	 */
	placement?: BulkActionsPlacement;

	/**
	 * Flyout direction for `menu` items and the overflow More menu.
	 * @default 'top' when `placement="floating"`, otherwise `'bottom'`
	 */
	menuPlacement?: BulkActionsMenuPlacement;

	/**
	 * Localized strings for user-facing copy
	 */
	locale?: DsBulkActionsLocale;

	className?: string;
	style?: CSSProperties;
	ref?: Ref<HTMLDivElement>;
}
