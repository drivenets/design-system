import type { ComponentPropsWithRef, MouseEvent, ReactNode } from 'react';
import type { DsDropdownMenuPositioning } from '../ds-dropdown-menu';

/** Count above which the notification badge collapses to `<cap>+`. */
export const notificationCountCap = 99;

export type DsTopBarNavigationProps = ComponentPropsWithRef<'div'>;

export interface DsTopBarNavigationLogoProps extends Omit<ComponentPropsWithRef<'div'>, 'children'> {
	/**
	 * Brand glyph rendered at 32px before the wordmark. Kept as a slot, so the bar stays
	 * tenant-neutral — no brand asset ships with the design system.
	 */
	logo?: ReactNode;
	/**
	 * Brand wordmark rendered beside the glyph. Styled with the heading font; pass a node
	 * when the mark needs custom kerning.
	 */
	wordmark?: ReactNode;
	/**
	 * Turns the glyph and wordmark into a link to the platform home.
	 */
	href?: string;
	locale?: {
		/**
		 * Accessible name for the logo link. Only applied when `href` is set; useful when the
		 * wordmark is an image rather than text.
		 */
		homeLinkLabel?: string;
		/**
		 * @default 'Apps'
		 */
		appsButtonLabel?: string;
	};
	/**
	 * Fires on the logo link itself, not the surrounding zone. Call `preventDefault` here to
	 * hand navigation to a client-side router instead of letting the browser reload the document.
	 */
	onLogoClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
	/**
	 * Renders the app-switcher button. Omit to hide the button entirely. Ignored when
	 * `appsMenu` is set.
	 */
	onAppsClick?: () => void;
	/**
	 * Takes over the app-switcher slot with your own control — pass a `DsMainMenu` to open the
	 * app grid from the brand zone. The node is rendered as-is, so it owns its own trigger,
	 * open state, and positioning.
	 */
	appsMenu?: ReactNode;
}

export type DsTopBarNavigationBreadcrumbProps = ComponentPropsWithRef<'div'>;

export type DsTopBarNavigationCenterProps = ComponentPropsWithRef<'div'>;

export type DsTopBarNavigationActionsProps = ComponentPropsWithRef<'div'>;

export interface DsTopBarNavigationNotificationsProps extends Omit<
	ComponentPropsWithRef<'button'>,
	'children' | 'aria-label' | 'color'
> {
	/**
	 * Unread count. `0` or omitted renders the bell with no badge; anything above
	 * `notificationCountCap` collapses to a capped label.
	 */
	count?: number;
	locale?: {
		/**
		 * Accessible name when there are no unread notifications.
		 * @default 'Notifications'
		 */
		notificationsButtonLabel?: string;
		/**
		 * Accessible name when unread notifications exist. Receives the uncapped count.
		 * @default (count) => `Notifications, ${count} unread`
		 */
		notificationsButtonLabelWithCount?: (count: number) => string;
	};
}

export interface DsTopBarNavigationUserMenuProps extends Omit<
	ComponentPropsWithRef<'button'>,
	'children' | 'aria-label' | 'onSelect'
> {
	/**
	 * Drives the avatar initials and its accessible name.
	 */
	name: string;
	/**
	 * Avatar photo URL. Omit, or let it fail to load, to fall back to initials.
	 */
	src?: string;
	/**
	 * Menu entries — `DsDropdownMenu.Item`, `.Separator`, `.ItemGroup` and friends.
	 */
	children?: ReactNode;
	/**
	 * Open state for controlled usage.
	 */
	open?: boolean;
	/**
	 * Placement and offset of the menu. Defaults to `bottom-end` so the menu stays inside the
	 * viewport when the trigger sits against the right edge of the bar.
	 */
	positioning?: DsDropdownMenuPositioning;
	locale?: {
		/**
		 * Accessible name for the trigger. Receives `name`; the default distinguishes the
		 * control from the avatar's own name tooltip.
		 * @default (name) => `Account menu for ${name}`
		 */
		userMenuButtonLabel?: (name: string) => string;
	};
	onOpenChange?: (open: boolean) => void;
	onSelect?: (value: string) => void;
}
