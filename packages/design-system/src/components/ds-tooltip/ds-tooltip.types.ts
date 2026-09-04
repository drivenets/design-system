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
	 * When true, content is pointer-reachable and the tooltip stays open while the
	 * pointer is over it. Pair with a non-zero `closeDelay` (e.g. 150) so the pointer
	 * can travel from the trigger onto the content; `0` can lose that handoff.
	 * @default false
	 */
	interactive?: boolean;
	/**
	 * Milliseconds after pointer enter or focus before the tooltip opens.
	 * @default 200
	 */
	openDelay?: number;
	/**
	 * Milliseconds after pointer leave before the tooltip closes.
	 * @default 0
	 */
	closeDelay?: number;
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
