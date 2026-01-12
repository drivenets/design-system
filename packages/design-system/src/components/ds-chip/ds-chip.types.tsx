import type { CSSProperties, KeyboardEvent, MouseEvent, Ref } from 'react';
import type { IconType } from '../ds-icon';

/**
 * @deprecated This type is deprecated. Use `DsTag` instead.
 * @see {@link ../ds-tag} for the replacement component.
 */
export const chipSizes = ['medium', 'small'] as const;

/**
 * @deprecated This type is deprecated. Use `DsTag` instead.
 * @see {@link ../ds-tag} for the replacement component.
 */
export type ChipSize = (typeof chipSizes)[number];

/**
 * @deprecated This interface is deprecated. Use `DsTagProps` from `ds-tag` instead.
 * @see {@link ../ds-tag/ds-tag.types} for the replacement interface.
 */
export interface DsChipProps {
	/**
	 * Ref to the chip element
	 */
	ref?: Ref<HTMLElement>;
	/**
	 * The label text to display in the chip
	 */
	label: string;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: CSSProperties;
	/**
	 * Optional click handler
	 */
	onClick?: (event: MouseEvent<HTMLElement>) => void;
	/**
	 * Callback function when delete icon is clicked
	 */
	onDelete?: (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void;
	/**
	 * Size of the chip
	 * @default 'medium'
	 */
	size?: ChipSize;
	/**
	 * Custom delete icon element
	 */
	deleteIcon?: IconType;
	/**
	 * Whether the chip is in a selected/pressed state
	 * @default false
	 */
	selected?: boolean;
}
