import type { CSSProperties } from 'react';
import type { DsTagProps, TagSize } from '../ds-tag';

export interface TagFilterItem {
	/**
	 * Unique identifier for the tag
	 */
	id: string;
	/**
	 * The label text to display in the tag
	 */
	label: string;
	/**
	 * Additional metadata to store with the tag
	 */
	metadata?: Record<string, unknown>;
	/**
	 * Whether the tag is selected/checked
	 */
	selected?: boolean;
	/**
	 * Additional props to pass to the components
	 */
	slotProps?: {
		tag?: Partial<DsTagProps>;
	};
}

export interface DsTagFilterProps {
	/**
	 * Array of tag items to display
	 */
	items: TagFilterItem[];
	/**
	 * Size of the tags
	 * @default 'medium'
	 */
	size?: TagSize;
	/**
	 * Locale object (you can pass custom strings for localization)
	 */
	locale?: {
		label?: string;
		clearButton?: string;
		showMore?: string;
		showLess?: string;
	};
	/**
	 * Callback when "Clear all" is clicked
	 */
	onClearAll?: () => void;
	/**
	 * Callback when a tag is deleted/removed
	 */
	onItemDelete?: (item: TagFilterItem) => void;
	/**
	 * Callback when a tag is selected
	 */
	onItemSelect?: (item: TagFilterItem) => void;
	/**
	 * Callback when the Expand button is clicked
	 */
	onExpand?: (expanded?: boolean) => void;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: CSSProperties;
}
