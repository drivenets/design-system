import type { CSSProperties, KeyboardEvent, MouseEvent, Ref } from 'react';

export const cableTypes = ['general', 'iof', 'loop', 'tie'] as const;
export type CableType = (typeof cableTypes)[number];

export const cableLines = ['solid', 'dotted', 'dashed'] as const;
export type CableLine = (typeof cableLines)[number];

export interface CablePoint {
	x: number;
	y: number;
}

interface CableEndpoints {
	/**
	 * Start of the cable in pixels, measured from the top-left corner of the nearest positioned ancestor,
	 * or in the user space of the parent `<svg>` when nested in one. Nothing is drawn while a coordinate
	 * of `from` or `to` is not a finite number.
	 */
	from: CablePoint;
	/**
	 * End of the cable, in the same coordinates as `from`.
	 */
	to: CablePoint;
	/**
	 * Bend of the cable as a fraction of its length; `0` is a straight line. The sign picks the side:
	 * positive bends up for a cable drawn left to right. Give cables that share both ends different
	 * values so they do not overlap.
	 * @default 0
	 */
	curvature?: number;
	path?: never;
}

interface CablePath {
	/**
	 * SVG path data for a route that is not a single bend, e.g. one that follows a road or avoids
	 * other content. Uses the same coordinates as `from` and replaces `from`, `to` and `curvature`.
	 */
	path: string;
	from?: never;
	to?: never;
	curvature?: never;
}

interface DsCableBaseProps {
	ref?: Ref<SVGSVGElement>;
	/**
	 * Kind of cable; sets the color.
	 * @default 'general'
	 */
	type?: CableType;
	/**
	 * Line style, for the status of the cable, e.g. deployed (`solid`), planned (`dotted`)
	 * or in design (`dashed`).
	 * @default 'solid'
	 */
	line?: CableLine;
	/**
	 * Shows the selected style, raises the cable above unselected ones and marks it with `aria-current`.
	 * @default false
	 */
	selected?: boolean;
	/**
	 * Accessible name of the cable, e.g. `"IOF cable, Haifa North to Haifa South, planned"`.
	 * Required because the line does not identify the cable on its own.
	 */
	'aria-label': string;
	className?: string;
	style?: CSSProperties;
	/**
	 * Makes the cable interactive: it reacts to hover, takes keyboard focus and fires on click, Enter
	 * and Space. Without it the cable is a static image that lets pointer events through.
	 */
	onClick?: (event: MouseEvent<SVGGElement> | KeyboardEvent<SVGGElement>) => void;
}

export type DsCableProps = DsCableBaseProps & (CableEndpoints | CablePath);
