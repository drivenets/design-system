import type { CSSProperties, ReactNode } from 'react';

export const tooltipPlacements = [
	'top',
	'top-start',
	'top-end',
	'bottom',
	'bottom-start',
	'bottom-end',
	'left',
	'left-start',
	'left-end',
	'right',
	'right-start',
	'right-end',
] as const;

export type TooltipPlacement = (typeof tooltipPlacements)[number];

/**
 * Viewport-relative rect (CSS pixels) the tooltip anchors to, instead of the trigger.
 */
export interface TooltipAnchorRect {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface DsTooltipProps {
	/**
	 * Tooltip content
	 */
	content?: string | ReactNode;
	/**
	 * The content to be rendered inside the tooltip
	 */
	children: ReactNode;
	/**
	 * Placement relative to the trigger; `-start` / `-end` align to that edge.
	 */
	placement?: TooltipPlacement;
	/**
	 * When true the trigger renders but the tooltip never opens.
	 */
	disabled?: boolean;
	/**
	 * Anchors the tooltip to a virtual rect instead of the trigger, re-evaluated on
	 * each reposition. Return `null` to fall back to the trigger.
	 */
	getAnchorRect?: () => TooltipAnchorRect | null;
	/**
	 * Props forwarded to nested sub-components.
	 */
	slotProps?: {
		/**
		 * Props forwarded to the tooltip content popover (className / inline styles).
		 */
		content?: {
			className?: string;
			style?: CSSProperties;
		};
	};
}
