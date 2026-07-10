import type { CSSProperties, MouseEvent, Ref } from 'react';

export const siteNodeStates = ['default', 'selected', 'muted', 'overflow'] as const;
export type SiteNodeState = (typeof siteNodeStates)[number];

export interface DsSiteNodeProps {
	ref?: Ref<HTMLButtonElement>;
	/**
	 * Scope/selection state within the site hierarchy path.
	 * `overflow` renders a collapsed summary node (no tier/site code).
	 */
	state?: SiteNodeState;
	/**
	 * Short tier label shown in the pill, e.g. `"T1"`. Ignored when `state="overflow"`.
	 */
	tier?: string;
	/**
	 * Site identifier. Truncates with an ellipsis and reveals the full value in a
	 * tooltip when it overflows. Ignored when `state="overflow"`.
	 */
	siteCode?: string;
	/**
	 * Summary label for the collapsed branch, e.g. `"+2 more"`. Only used when
	 * `state="overflow"`.
	 */
	overflowLabel?: string;
	className?: string;
	style?: CSSProperties;
	/**
	 * Overrides the accessible name. By default the node is named by its visible
	 * content (tier + site code, or the overflow label); set this to give the
	 * overflow node a more descriptive name, e.g. `"Show 2 more sites"`.
	 */
	'aria-label'?: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
