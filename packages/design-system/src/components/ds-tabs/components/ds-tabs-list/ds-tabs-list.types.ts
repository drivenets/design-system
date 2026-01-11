import type { CSSProperties, ReactNode } from 'react';

/**
 * Props for the DsTabsList component
 * Container for tab triggers and the indicator
 * @interface DsTabsListProps
 */
export interface DsTabsListProps {
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
	 * Tab components to be rendered
	 * @type {ReactNode}
	 */
	children: ReactNode;
}
