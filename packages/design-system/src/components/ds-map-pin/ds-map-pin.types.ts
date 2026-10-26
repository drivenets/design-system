import type { CSSProperties, MouseEvent, Ref } from 'react';

export const mapPinSizes = ['large', 'medium', 'small'] as const;
export type MapPinSize = (typeof mapPinSizes)[number];

export const mapPinCategories = [
	'central-office',
	'access-site',
	'fiber-broadband',
	'carrier-ethernet',
] as const;
export type MapPinCategory = (typeof mapPinCategories)[number];

export const mapPinPlanningStatuses = ['deployed', 'planned', 'designed'] as const;
export type MapPinPlanning = (typeof mapPinPlanningStatuses)[number];

export interface DsMapPinProps {
	ref?: Ref<HTMLButtonElement>;
	/**
	 * `large` for central offices T1/T2, `medium` for other central offices and access sites,
	 * `small` for customer sites.
	 * @default 'medium'
	 */
	size?: MapPinSize;
	/**
	 * Sets the core color.
	 * @default 'central-office'
	 */
	category?: MapPinCategory;
	/**
	 * `planned` adds a dotted ring around the core, `designed` a dashed ring.
	 * @default 'deployed'
	 */
	planning?: MapPinPlanning;
	/**
	 * Short site code shown in the core, e.g. `"T1"`. Ignored when `count` is set.
	 */
	label?: string;
	/**
	 * Number shown in the core instead of `label`, e.g. customer sites at one location.
	 * Values above 99 show as `99+`.
	 */
	count?: number;
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
	 * Accessible name of the site, e.g. `"Central office T1, Haifa North, planned"`.
	 * Required because the code in the core does not identify the site on its own.
	 */
	'aria-label': string;
	className?: string;
	style?: CSSProperties;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
