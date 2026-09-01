import type { CSSProperties, ReactElement, ReactNode, Ref } from 'react';
import type { DsPopoverAlign, DsPopoverSide } from '../ds-popover';
import type { IconType } from '../ds-icon';

export const mainMenuItemStates = ['default', 'disabled', 'comingSoon', 'extend'] as const;
export type DsMainMenuItemState = (typeof mainMenuItemStates)[number];

export const mainMenuVariants = ['compact', 'expanded'] as const;
export type DsMainMenuVariant = (typeof mainMenuVariants)[number];

export interface DsMainMenuItem {
	id: string;
	label: string;
	/**
	 * Tile graphic. Material/custom icon name (`'speed'`) or an SVG component for branded marks.
	 */
	icon: IconType;
	/**
	 * Supporting copy shown beneath the label in the `'expanded'` variant. Ignored in `'compact'`.
	 */
	description?: string;
	href?: string;
	state?: DsMainMenuItemState;
	/**
	 * Element rendered in the top-right badge slot. When omitted, a default badge is shown for
	 * `'comingSoon'` (wrench icon) and `'extend'` (fullscreen icon). Pass `null` to suppress it.
	 */
	statusBadge?: ReactElement | null;
}

export interface DsMainMenuUtilityLink {
	id: string;
	label: string;
	/** Leading graphic. Material/custom icon name or an SVG component. */
	icon: IconType;
	href?: string;
}

export interface DsMainMenuProps {
	/** Single focusable element that toggles the menu panel. */
	trigger: ReactNode;
	items: DsMainMenuItem[];
	utilityLinks: DsMainMenuUtilityLink[];
	/**
	 * Layout of the menu items. `'compact'` renders square icon tiles in a grid;
	 * `'expanded'` renders wide cards with an icon, heading, and `description`.
	 * Chosen once per menu — the two layouts are never mixed.
	 * @default 'compact'
	 */
	variant?: DsMainMenuVariant;
	/** Currently selected app tile. Matched against `items[].id`. */
	selectedId?: string;
	onItemSelect?: (id: string) => void;
	/** Accessible name for the navigation landmark. */
	'aria-label'?: string;
	className?: string;
	style?: CSSProperties;
	ref?: Ref<HTMLElement>;
	/**
	 * Preferred side of the trigger to render the panel against.
	 * @default 'bottom'
	 */
	side?: DsPopoverSide;
	/**
	 * Alignment of the panel along the trigger edge.
	 * @default 'start'
	 */
	align?: DsPopoverAlign;
	/**
	 * Gap in pixels between the trigger and the panel.
	 * @default 8
	 */
	gutter?: number;
	/**
	 * Returns the element the panel should position against instead of the trigger.
	 * Useful when the trigger lives in a sidebar and the panel should open beside the content area.
	 */
	getAnchorElement?: () => HTMLElement | null;
	/** Controlled open state. Pair with `onOpenChange`. */
	open?: boolean;
	/** Fires when the popover opens or closes. */
	onOpenChange?: (open: boolean) => void;
}

export const COMING_SOON_TOOLTIP = 'Coming soon — this app is still under construction';
export const EXTEND_TOOLTIP = 'Click to open the app';
