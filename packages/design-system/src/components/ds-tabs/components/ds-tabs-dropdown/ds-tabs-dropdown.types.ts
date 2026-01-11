import type { ReactNode } from 'react';
import type { IconType } from '../../../ds-icon';

/**
 * Item in a tab dropdown menu
 * @interface DsTabsDropdownItem
 */
export interface DsTabsDropdownItem {
	/**
	 * Unique value for the dropdown item
	 * @type {string}
	 */
	value: string;

	/**
	 * Display label for the item
	 * @type {string}
	 */
	label?: string;

	/**
	 * Icon to display before the label
	 * @type {IconType}
	 */
	icon?: IconType;

	/**
	 * Badge content (number or text) to display
	 * @type {number | string}
	 */
	badge?: number | string;

	/**
	 * Whether the item is disabled
	 * @type {boolean}
	 */
	disabled?: boolean;
}

/**
 * Props for the DsTabsDropdown component
 * @interface DsTabsDropdownProps
 */
export interface DsTabsDropdownProps {
	/**
	 * Element that triggers the dropdown (e.g., a button or tab)
	 * @type {ReactNode}
	 */
	trigger: ReactNode;

	/**
	 * Array of dropdown menu items
	 * @type {DsTabsDropdownItem[]}
	 */
	items: DsTabsDropdownItem[];

	/**
	 * Callback fired when a dropdown item is selected
	 * @param {string} value - The value of the selected item
	 */
	onItemSelect: (value: string) => void;

	/**
	 * Whether this dropdown is used for overflow tabs (applies specific styling)
	 * @type {boolean}
	 * @default false
	 */
	isOverflowDropdown?: boolean;
}
