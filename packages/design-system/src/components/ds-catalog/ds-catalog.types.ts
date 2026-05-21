import type { ComponentPropsWithRef, ReactNode } from 'react';
import type { IconType } from '../ds-icon';

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
	 * @default false
	 */
	pinned?: boolean;
}

export interface DsCatalogSideMenuItemProps extends ComponentPropsWithRef<'button'> {
	/** Material icon name shown as the rail glyph; always visible. */
	icon: IconType;
	/**
	 * Visible only when the side menu is expanded (hovered or pinned). Also used as the implicit
	 * `aria-label` when the prop is omitted, so users of the collapsed rail still get a label.
	 */
	label?: string;
	/**
	 * Marks the item as the active page; renders as `aria-current="page"` for accessibility.
	 * @default false
	 */
	selected?: boolean;
}

export type DsCatalogMainProps = ComponentPropsWithRef<'div'>;

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

export type DsCatalogResultsProps = ComponentPropsWithRef<'div'>;

export type DsCatalogEmptyProps = ComponentPropsWithRef<'div'>;
