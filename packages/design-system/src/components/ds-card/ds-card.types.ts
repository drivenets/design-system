import type { CSSProperties, HTMLAttributes, ReactNode, Ref } from 'react';

export const cardSizes = ['small', 'medium', 'large'] as const;
export type DsCardSize = (typeof cardSizes)[number];

/**
 * Props for the Card root component
 */
export interface DsCardRootProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Forwarded ref for the card element
	 */
	ref?: Ref<HTMLDivElement>;

	/**
	 * Card size variant
	 * @default 'medium'
	 */
	size?: DsCardSize;

	/**
	 * Enable selectable/interactive mode. When false, the card is a static display container.
	 * @default false
	 */
	selectable?: boolean;

	/**
	 * Selected state (controlled). Required when selectable is true.
	 * @default false
	 */
	selected?: boolean;

	/**
	 * When true, shows a highlighted background when selected
	 * @default false
	 */
	highlightSelected?: boolean;

	/**
	 * Disabled state - prevents interaction
	 */
	disabled?: boolean;
}

/**
 * Common props for card slot components
 */
export interface DsCardSlotProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Additional CSS class names
	 */
	className?: string;

	/**
	 * Additional styles to apply
	 */
	style?: CSSProperties;

	/**
	 * Slot content
	 */
	children?: ReactNode;

	/**
	 * Forwarded ref
	 */
	ref?: Ref<HTMLDivElement>;
}

export type DsCardHeaderProps = DsCardSlotProps;
export type DsCardBodyProps = DsCardSlotProps;
export type DsCardFooterProps = DsCardSlotProps;
