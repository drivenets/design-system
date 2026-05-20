import type { ComponentPropsWithRef, ReactNode } from 'react';
import type { IconType } from '../ds-icon';

export interface DsCatalogProps extends ComponentPropsWithRef<'div'> {
	/**
	 * Whether the catalog layout should fill its parent height (`100%`) instead of the viewport (`100vh`).
	 * @default false
	 */
	fillParent?: boolean;
}

export type DsCatalogHeaderProps = ComponentPropsWithRef<'header'>;

export interface DsCatalogSideMenuProps extends ComponentPropsWithRef<'aside'> {
	/**
	 * Whether the side menu is pinned open (expanded width pushes content).
	 * @default false
	 */
	pinned?: boolean;
	/**
	 * Called when the pinned state changes (consumer-driven; no built-in pin control).
	 */
	onPinnedChange?: (pinned: boolean) => void;
}

export interface DsCatalogSideMenuItemProps extends ComponentPropsWithRef<'button'> {
	icon: IconType;
	/**
	 * Visible when the side menu is expanded (hover or pinned). Also used as `aria-label` when omitted.
	 */
	label?: string;
	/**
	 * @default false
	 */
	selected?: boolean;
}

export type DsCatalogBodyProps = ComponentPropsWithRef<'div'>;

export type DsCatalogMainProps = ComponentPropsWithRef<'div'>;

export type DsCatalogContentProps = ComponentPropsWithRef<'div'>;

export interface DsCatalogContentHeaderProps extends Omit<ComponentPropsWithRef<'div'>, 'title'> {
	title: ReactNode;
	headerActions?: ReactNode;
}

export type DsCatalogControlsProps = ComponentPropsWithRef<'div'>;

export type DsCatalogResultsProps = ComponentPropsWithRef<'div'>;

export type DsCatalogEmptyProps = ComponentPropsWithRef<'div'>;
