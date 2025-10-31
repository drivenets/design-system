// AI Generated file
import { CSSProperties } from 'react';

export interface FilterChipItem {
	/**
	 * Unique identifier for the filter chip
	 */
	id: string;
	/**
	 * The label text to display in the chip
	 */
	label: string;
	/**
	 * Callback when the chip is deleted/unchecked
	 */
	onDelete?: () => void;
}

export interface ChipFilterPanelProps {
	/**
	 * Array of filter chip items to display
	 */
	filters: FilterChipItem[];
	/**
	 * Callback when "Clear all filters" is clicked
	 */
	onClearAll?: () => void;
	/**
	 * Maximum number of filters to show before showing "+X filters" chip
	 * @default 5
	 */
	maxVisibleFilters?: number;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: CSSProperties;
}
