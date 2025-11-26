import { CSSProperties } from 'react';

export interface ChipItem {
	/**
	 * Unique identifier for the chip
	 */
	id: string;
	/**
	 * The label text to display in the chip
	 */
	label: string;
	/**
	 * Additional metadata to store with the chip
	 */
	metadata?: Record<string, unknown>;
	/**
	 * Whether the chip is selected/checked
	 */
	selected?: boolean;
}

export interface DsChipGroupProps {
	/**
	 * Array of chip items to display
	 */
	items: ChipItem[];
	/**
	 * Label text to display before the chips (e.g., "Filtered by:")
	 * @default "Filtered by:"
	 */
	label?: string;
	/**
	 * Callback when "Clear all" is clicked
	 */
	onClearAll?: () => void;
	/**
	 * Callback when a chip is deleted/unchecked
	 */
	onItemDelete?: (item: ChipItem) => void;
	/**
	 * Callback when a chip is selected
	 */
	onItemSelect?: (item: ChipItem) => void;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: CSSProperties;
}
