import type { CSSProperties } from 'react';

/**
 * Props for the DsTabsIndicator component
 * Visual indicator that highlights the currently selected tab
 * @interface DsTabsIndicatorProps
 */
export interface DsTabsIndicatorProps {
	/**
	 * Additional CSS class name
	 * @type {string}
	 */
	className?: string;

	/**
	 * Inline styles (note: position and size are calculated automatically)
	 * @type {CSSProperties}
	 */
	style?: CSSProperties;
}
