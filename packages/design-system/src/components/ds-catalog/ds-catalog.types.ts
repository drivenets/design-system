import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface DsCatalogProps extends ComponentPropsWithRef<'div'> {
	/**
	 * Whether the catalog layout should fill its parent height (`100%`) instead of the viewport (`100vh`).
	 * Useful when the layout is rendered inside an existing app shell that already manages height.
	 * @default false
	 */
	fillParent?: boolean;
}

export type DsCatalogHeaderProps = ComponentPropsWithRef<'header'>;

export type DsCatalogBodyProps = ComponentPropsWithRef<'div'>;

export interface DsCatalogSideMenuProps extends ComponentPropsWithRef<'aside'> {
	/**
	 * Whether the side menu is pinned open. When `true`, the expanded width pushes the content area
	 * to the right; when `false`, the collapsed rail is shown and hovering the rail overlays an
	 * expanded panel without shifting the content. Consumers manage the pinned state externally
	 * (e.g. by rendering their own pin affordance inside the side menu).
	 *
	 * The pinned state is also reflected as a `data-pinned` attribute on the rendered `<aside>`,
	 * so consumers can target nested items with descendant selectors (e.g. expand a label only
	 * when the rail is hovered or pinned).
	 * @default false
	 */
	pinned?: boolean;
}

export type DsCatalogContentProps = ComponentPropsWithRef<'div'>;

export interface DsCatalogContentHeaderProps extends Omit<ComponentPropsWithRef<'div'>, 'title'> {
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
