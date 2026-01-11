import type { CSSProperties, ReactNode } from 'react';
import type { IconType } from '../../../ds-icon';

/**
 * Item in a tab's dropdown menu
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
	label: string;

	/**
	 * Icon to display before the label
	 * @type {IconType}
	 */
	icon?: IconType;

	/**
	 * Whether the item is disabled
	 * @type {boolean}
	 */
	disabled?: boolean;
}

/**
 * Props for the DsTabsTab component
 * Represents a single tab in the tabs component
 * @interface DsTabsTabProps
 */
export interface DsTabsTabProps {
	/**
	 * Unique value that identifies this tab
	 * @type {string}
	 */
	value: string;

	/**
	 * Whether the tab is disabled
	 * @type {boolean}
	 */
	disabled?: boolean;

	/**
	 * Icon to display in the tab
	 * @type {IconType}
	 */
	icon?: IconType;

	/**
	 * Text label for the tab
	 * @type {string}
	 */
	label?: string;

	/**
	 * Badge content (number or text) to display
	 * @type {number | string}
	 */
	badge?: number | string;

	/**
	 * Tooltip text to show on hover
	 * @type {string}
	 */
	tooltip?: string;

	/**
	 * Whether to show a dropdown menu icon
	 * @type {boolean}
	 */
	hasMenu?: boolean;

	/**
	 * Array of dropdown menu items for this tab
	 * @type {DsTabsDropdownItem[]}
	 */
	dropdownItems?: DsTabsDropdownItem[];

	/**
	 * Callback fired when a dropdown item is selected
	 * @param {string} value - The value of the selected dropdown item
	 */
	onDropdownSelect?: (value: string) => void;

	/**
	 * Additional CSS class name
	 * @type {string}
	 */
	className?: string;

	/**
	 * Inline styles
	 * @type {CSSProperties}
	 */
	style?: CSSProperties;

	/**
	 * Custom content for the tab (overrides icon, label, badge)
	 * @type {ReactNode}
	 */
	children?: ReactNode;
}
