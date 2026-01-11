import type { ReactElement } from 'react';
import type { DsTabsTabProps } from '../ds-tabs-tab';

/**
 * Props for the DsTabsOverflowDropdown component
 * Handles tabs that don't fit within maxVisibleTabs limit
 * @interface DsTabsOverflowDropdownProps
 */
export interface DsTabsOverflowDropdownProps {
	/**
	 * Array of tab elements that overflow and should be in the dropdown
	 * @type {ReactElement<DsTabsTabProps>[]}
	 */
	overflowTabs: ReactElement<DsTabsTabProps>[];

	/**
	 * The currently selected tab from the overflow tabs
	 * @type {ReactElement<DsTabsTabProps>}
	 */
	selectedTab?: ReactElement<DsTabsTabProps>;

	/**
	 * Currently selected tab value
	 * @type {string}
	 */
	currentValue?: string;

	/**
	 * Callback fired when a tab is selected from the overflow dropdown
	 * @param {string | null} value - The value of the selected tab
	 */
	onValueChange?: (value: string | null) => void;
}
