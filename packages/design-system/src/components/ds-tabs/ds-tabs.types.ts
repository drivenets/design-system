import type { CSSProperties, ReactNode } from 'react';

/**
 * Orientation of the tabs component
 * @type {string}
 */
export type DsTabsOrientation = 'horizontal' | 'vertical';

/**
 * Size variant for tabs
 * @type {string}
 */
export type DsTabsSize = 'medium' | 'small';

/**
 * Props for the DsTabs root component
 * @interface DsTabsProps
 */
export interface DsTabsProps {
	/**
	 * Currently selected tab value (controlled mode)
	 * @type {string}
	 */
	value?: string;

	/**
	 * Default selected tab value (uncontrolled mode)
	 * @type {string}
	 */
	defaultValue?: string;

	/**
	 * Callback fired when the selected tab changes
	 * @param {string | null} value - The new selected tab value
	 */
	onValueChange?: (value: string | null) => void;

	/**
	 * Tab orientation - horizontal or vertical layout
	 * @type {DsTabsOrientation}
	 * @default 'horizontal'
	 */
	orientation?: DsTabsOrientation;

	/**
	 * Size variant of the tabs
	 * @type {DsTabsSize}
	 * @default 'medium'
	 */
	size?: DsTabsSize;

	/**
	 * Maximum number of visible tabs before showing overflow dropdown
	 * When exceeded, remaining tabs are shown in a "More" dropdown
	 * @type {number}
	 */
	maxVisibleTabs?: number;

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
	 * Tab components and content
	 * @type {ReactNode}
	 */
	children: ReactNode;
}
