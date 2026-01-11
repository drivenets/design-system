import type { CSSProperties, ReactNode } from 'react';

/**
 * Props for the DsTabsContent component
 * Container for the content associated with each tab
 * @interface DsTabsContentProps
 */
export interface DsTabsContentProps {
	/**
	 * Tab value this content is associated with
	 * Content is shown when this value matches the selected tab
	 * @type {string}
	 */
	value: string;

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
	 * Content to display when this tab is active
	 * @type {ReactNode}
	 */
	children: ReactNode;
}
