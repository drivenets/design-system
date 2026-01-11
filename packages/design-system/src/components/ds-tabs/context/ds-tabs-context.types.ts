import type { DsTabsOrientation, DsTabsSize } from '../ds-tabs.types';

/**
 * Context value for the tabs component
 * Provides shared state and configuration to all tab subcomponents
 * @interface DsTabsContextType
 */
export interface DsTabsContextType {
	/**
	 * Tab orientation - horizontal or vertical layout
	 * @type {DsTabsOrientation}
	 */
	orientation: DsTabsOrientation;

	/**
	 * Size variant of the tabs
	 * @type {DsTabsSize}
	 */
	size: DsTabsSize;

	/**
	 * Maximum number of visible tabs before showing overflow dropdown
	 * @type {number}
	 */
	maxVisibleTabs?: number;

	/**
	 * Currently selected tab value
	 * @type {string}
	 */
	currentValue?: string;

	/**
	 * Callback fired when the selected tab changes
	 * @param {string | null} value - The new selected tab value
	 */
	onValueChange?: (value: string | null) => void;
}
