import type { CSSProperties, KeyboardEvent, MouseEvent, ReactNode, Ref } from 'react';

export const tagSizes = ['medium', 'small'] as const;
export type TagSize = (typeof tagSizes)[number];

export const tagVariants = ['default', 'include', 'exclude'] as const;
export type TagVariant = (typeof tagVariants)[number];

export interface DsTagProps {
	/**
	 * Ref to the tag element
	 */
	ref?: Ref<HTMLElement>;
	/**
	 * The label text to display in the tag
	 */
	label: ReactNode;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Locale object (you can pass custom strings for localization)
	 */
	locale?: {
		deleteAriaLabel?: string;
	};
	/**
	 * Additional styles to apply to the component
	 */
	style?: CSSProperties;
	/**
	 * Optional click handler, if not present Tag will not be in "clickable" state
	 */
	onClick?: (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void;
	/**
	 * Callback function when the delete icon is clicked
	 */
	onDelete?: (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void;
	/**
	 * Size of the tag
	 * @default 'medium'
	 */
	size?: TagSize;
	/**
	 * Whether the tag is in a selected/pressed state
	 * @default false
	 */
	selected?: boolean;
	/**
	 * Variant of the tag
	 * @default 'default'
	 */
	variant?: TagVariant;
	/**
	 * Whether the tag is disabled
	 * @default false
	 */
	disabled?: boolean;

	slots?: {
		/**
		 * Icon to display at the start of the input
		 */
		icon?: ReactNode;
	};
}
