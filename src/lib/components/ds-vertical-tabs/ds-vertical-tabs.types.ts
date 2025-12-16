import type { CSSProperties, ReactNode } from 'react';

export interface DsVerticalTabsRootProps {
	/**
	 * Currently selected tab value
	 */
	value?: string;
	/**
	 * Callback when selected tab changes
	 */
	onValueChange?: (value: string | null) => void;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Optional inline styles
	 */
	style?: CSSProperties;
	/**
	 * Child components (DsVerticalTabs.List, etc.)
	 */
	children: ReactNode;
}

export interface DsVerticalTabsListProps {
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Tab trigger components
	 */
	children: ReactNode;
}

export interface DsVerticalTabsTabProps {
	/**
	 * Value that identifies this tab
	 */
	value: string;
	/**
	 * Whether the tab is disabled
	 */
	disabled?: boolean;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Tab content (label, icons, badges, etc.)
	 */
	children: ReactNode;
}

export interface DsVerticalTabsContentProps {
	/**
	 * Value that identifies which tab this content belongs to
	 */
	value: string;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Content to display when tab is active
	 */
	children: ReactNode;
}
