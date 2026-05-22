import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface DsCatalogLayoutProps extends ComponentPropsWithRef<'div'> {
	/**
	 * Whether the catalog layout should fill its parent height (`100%`) instead of the viewport (`100vh`).
	 * Useful when the layout is rendered inside an existing app shell that already manages height.
	 * @default false
	 */
	fillParent?: boolean;
}

export type DsCatalogLayoutHeaderProps = ComponentPropsWithRef<'header'>;

export type DsCatalogLayoutBodyProps = ComponentPropsWithRef<'div'>;

export interface DsCatalogLayoutSideMenuProps extends ComponentPropsWithRef<'aside'> {
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

export type DsCatalogLayoutContentProps = ComponentPropsWithRef<'div'>;

export interface DsCatalogLayoutContentHeaderProps extends Omit<ComponentPropsWithRef<'div'>, 'title'> {
	/** Page title node, typically a `DsTypography` heading. Rendered on the title row. */
	title: ReactNode;
	/**
	 * Optional actions rendered on the trailing side of the title row (search, filter, refresh,
	 * primary action, etc.). Accepts any `ReactNode`.
	 */
	headerActions?: ReactNode;
	/**
	 * Optional content-header item rendered as a row below the title (e.g. a smart tabs group or
	 * filter bar). When omitted, only the title row is rendered.
	 */
	children?: ReactNode;
}
