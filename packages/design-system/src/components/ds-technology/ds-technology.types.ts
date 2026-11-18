import type { CSSProperties, MouseEvent, Ref } from 'react';

export const technologyTypes = [
	'och',
	'odu',
	'oms',
	'ots',
	'fbb-gpon',
	'fbb-pon-access',
	'fbb-pon-network',
	'carrier-ethernet-customer',
	'carrier-ethernet-infra',
	'network-management',
] as const;
export type TechnologyType = (typeof technologyTypes)[number];

export const technologyStages = ['deployed', 'planned', 'designed'] as const;
export type TechnologyStage = (typeof technologyStages)[number];

export interface DsTechnologyProps {
	ref?: Ref<SVGSVGElement>;
	/**
	 * Technology the path belongs to. Sets the line color, which is fixed per type.
	 * @default 'och'
	 */
	type?: TechnologyType;
	/**
	 * Lifecycle stage of the path: `deployed` is solid, `planned` is dotted, `designed` is dashed.
	 * @default 'deployed'
	 */
	stage?: TechnologyStage;
	/**
	 * SVG path data (the `d` attribute) of the line, in the pixel space of the element, e.g. a curve
	 * between two locations. Size and position the element with `className` or `style`, or render it
	 * inside a parent `<svg>` to share that parent's coordinates. Without it, a fixed-size sample
	 * curve is drawn, for legends and filters.
	 */
	path?: string;
	/**
	 * Shows the selected style (thicker line on a light halo) and marks the line with `aria-current`.
	 * Render the selected line after the others so it is drawn on top.
	 * @default false
	 */
	selected?: boolean;
	/**
	 * Accessible name, e.g. `"OCH service Haifa North to Tel Aviv, planned"`. Required with `onClick`.
	 * Without it and without `onClick`, the line is hidden from assistive technology.
	 */
	'aria-label'?: string;
	className?: string;
	style?: CSSProperties;
	/**
	 * Makes the line a button: it reacts to hover and focus, is reachable with Tab and is activated
	 * with a click, Enter or Space. The clickable area is wider than the visible line.
	 */
	onClick?: (event: MouseEvent<SVGSVGElement>) => void;
}
