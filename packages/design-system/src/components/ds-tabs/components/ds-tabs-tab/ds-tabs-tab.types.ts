import type { CSSProperties, ReactNode } from 'react';
import type { IconType } from '../../../ds-icon';

export interface DsTabsDropdownItem {
	value: string;
	label: string;
	icon?: IconType;
	disabled?: boolean;
}

export interface DsTabsTabProps {
	value: string;
	disabled?: boolean;
	icon?: IconType;
	label?: string;
	badge?: number | string;
	tooltip?: string;
	hasMenu?: boolean;
	dropdownItems?: DsTabsDropdownItem[];
	onDropdownSelect?: (value: string) => void;
	className?: string;
	style?: CSSProperties;
	children?: ReactNode;
}
