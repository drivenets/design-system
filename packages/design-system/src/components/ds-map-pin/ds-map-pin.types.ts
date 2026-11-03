import type { CSSProperties, MouseEvent, Ref } from 'react';

export const mapPinSizes = ['large', 'medium', 'small'] as const;
export type MapPinSize = (typeof mapPinSizes)[number];

export const mapPinColors = ['blue', 'orange', 'teal', 'pink'] as const;
export type MapPinColor = (typeof mapPinColors)[number];

export const mapPinRings = ['none', 'dotted', 'dashed'] as const;
export type MapPinRing = (typeof mapPinRings)[number];

export const mapPinBadgeBorders = ['solid', 'dotted', 'dashed'] as const;
export type MapPinBadgeBorder = (typeof mapPinBadgeBorders)[number];

export interface DsMapPinProps {
	ref?: Ref<HTMLButtonElement>;
	/**
	 * Use one size per kind of location so pins stay comparable on the map.
	 * @default 'medium'
	 */
	size?: MapPinSize;
	/**
	 * Core color. Map each kind of location to one color and keep it consistent across the map.
	 * @default 'blue'
	 */
	color?: MapPinColor;
	/**
	 * Ring around the core, in the core color, for a secondary status such as planned (`dotted`)
	 * or in design (`dashed`).
	 * @default 'none'
	 */
	ring?: MapPinRing;
	/**
	 * Short code shown in the core, e.g. `"T1"`. Ignored when `count` is set.
	 */
	label?: string;
	/**
	 * Number shown in the core instead of `label`, e.g. how many items share one location.
	 * Values above 99 show as `99+`.
	 */
	count?: number;
	/**
	 * Short code shown in a tag on the top-right corner, e.g. `"oR"` for equipment at the location.
	 */
	badge?: string;
	/**
	 * Border of the badge, for the status of what it marks, e.g. planned (`dotted`) or in design (`dashed`).
	 * Set it independently of `ring`.
	 * @default 'solid'
	 */
	badgeBorder?: MapPinBadgeBorder;
	/**
	 * Shows the selected outline and marks the pin with `aria-current`.
	 * @default false
	 */
	selected?: boolean;
	/**
	 * Shows the dragged style and raises the pin above all others while the consumer moves it.
	 * @default false
	 */
	dragging?: boolean;
	/**
	 * Accessible name of the location, e.g. `"Central office T1, Haifa North, planned"`.
	 * Required because the code in the core does not identify the location on its own.
	 */
	'aria-label': string;
	className?: string;
	style?: CSSProperties;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
