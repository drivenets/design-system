import { CSSProperties, ReactNode } from 'react';
import { VerticalTabItem } from '@design-system/ui';

export interface FilterModalProps {
	/**
	 * Whether the modal is open
	 */
	open: boolean;
	/**
	 * Callback when the modal open state changes
	 */
	onOpenChange: (open: boolean) => void;
	/**
	 * Number of columns for modal width
	 * @default 2
	 */
	columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	/**
	 * Optional inline styles to apply to the component
	 */
	style?: CSSProperties;
	/**
	 * Optional className for the modal container
	 */
	className?: string;
	/**
	 * Callback when clear all filters is clicked
	 */
	onClearAll?: () => void;
	/**
	 * Callback when apply button is clicked
	 */
	onApply?: () => void;
	/**
	 * Array of filter navigation items
	 */
	filterNavItems?: VerticalTabItem[];
	/**
	 * Currently selected filter category ID
	 */
	selectedFilterId?: string;
	/**
	 * Callback when a filter category is selected
	 */
	onFilterSelect?: (filterId: string) => void;
	/**
	 * Content to display in the filter panel (right side)
	 */
	children?: (item: VerticalTabItem) => ReactNode;
	/**
	 * Whether apply button is disabled
	 */
	applyDisabled?: boolean;
	/**
	 * Whether clear all button is disabled
	 */
	clearAllDisabled?: boolean;
}
