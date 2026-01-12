import type { CSSProperties } from 'react';

/**
 * @deprecated This interface is deprecated. Use `DsTagGroup` types instead.
 * @see {@link ../ds-tag-group} for the replacement types.
 */
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

/**
 * @deprecated This interface is deprecated. Use `DsTagGroupProps` from `ds-tag-group` instead.
 * @see {@link ../ds-tag-group/ds-tag-group.types} for the replacement interface.
 */
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
