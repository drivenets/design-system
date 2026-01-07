import type { ReactNode } from 'react';
import type { IconType } from '../../../ds-icon';

export interface TabDropdownItem {
	value: string;
	label?: string;
	icon?: IconType;
	badge?: number | string;
	disabled?: boolean;
}

export interface TabDropdownProps {
	trigger: ReactNode;
	items: TabDropdownItem[];
	onItemSelect: (value: string) => void;
	isOverflowDropdown?: boolean;
}
