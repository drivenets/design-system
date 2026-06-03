import type { ComponentPropsWithRef } from 'react';

export interface DsWorkspaceLayoutProps extends ComponentPropsWithRef<'div'> {
	/**
	 * Whether the workspace should fill its parent height (`100%`) instead of the viewport (`100vh`).
	 * @default false
	 */
	fillParent?: boolean;
}

export type DsWorkspaceLayoutHeaderProps = ComponentPropsWithRef<'header'>;

export type DsWorkspaceLayoutSubHeaderProps = ComponentPropsWithRef<'div'>;

export type DsWorkspaceLayoutContentProps = ComponentPropsWithRef<'div'>;

export type DsWorkspaceLayoutFooterProps = ComponentPropsWithRef<'footer'>;

export type DsWorkspaceLayoutBodyProps = ComponentPropsWithRef<'div'>;

export type DsWorkspaceLayoutLeftPanelProps = ComponentPropsWithRef<'aside'>;

export interface DsWorkspaceLayoutSideMenuProps extends ComponentPropsWithRef<'aside'> {
	/**
	 * Whether the side menu is pinned open. When `true`, the expanded panel pushes the content area
	 * to the right; when `false`, the collapsed rail is shown and hovering it overlays the expanded
	 * panel without shifting the content.
	 * @default false
	 */
	pinned?: boolean;
	/**
	 * Called when the built-in pin/unpin button is clicked. Pass this prop to render the pin
	 * affordance in the top-right corner of the expanded panel; omit it to hide the button (e.g.
	 * when the side menu should always remain in its default collapsed state).
	 */
	onPinnedChange?: (pinned: boolean) => void;
	/**
	 * Locale object (you can pass custom strings for localization).
	 */
	locale?: {
		/**
		 * aria-label for the pin button when the side menu is collapsed/unpinned.
		 * @default 'Pin side menu'
		 */
		pinButtonLabel?: string;
		/**
		 * aria-label for the pin button when the side menu is pinned.
		 * @default 'Unpin side menu'
		 */
		unpinButtonLabel?: string;
	};
}
