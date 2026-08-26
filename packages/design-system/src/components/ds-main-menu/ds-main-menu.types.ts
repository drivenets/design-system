import type { IconType } from '../ds-icon';

export const mainMenuItemStates = ['default', 'disabled', 'comingSoon'] as const;
export type DsMainMenuItemState = (typeof mainMenuItemStates)[number];

export interface DsMainMenuItem {
	id: string;
	label: string;
	icon: IconType;
	href?: string;
	state?: DsMainMenuItemState;
}

export interface DsMainMenuUtilityLink {
	id: string;
	label: string;
	icon: IconType;
	href?: string;
}

export interface DsMainMenuProps {
	items: DsMainMenuItem[];
	utilityLinks: DsMainMenuUtilityLink[];
	selectedId?: string;
	onItemSelect?: (id: string) => void;
	/** Accessible name for the navigation landmark. */
	'aria-label'?: string;
	className?: string;
}

export const COMING_SOON_TOOLTIP = 'Coming soon — this app is still under construction';
