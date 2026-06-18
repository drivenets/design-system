import type { CSSProperties, KeyboardEvent, MouseEvent, ReactNode, Ref } from 'react';

export const tagSizes = ['medium', 'small'] as const;
export type TagSize = (typeof tagSizes)[number];

export const tagVariants = ['default', 'include', 'exclude', 'key-value'] as const;
export type TagVariant = (typeof tagVariants)[number];

interface DsTagBaseProps {
	/**
	 * Ref to the tag element
	 */
	ref?: Ref<HTMLElement>;
	/**
	 * The label text to display in the tag. For the `key-value` variant this is the key.
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
		/**
		 * aria-label for the delete button (shown when `onDelete` is provided).
		 */
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
	 * Whether the tag is disabled
	 * @default false
	 */
	disabled?: boolean;

	/**
	 * Optional render slots for customizing parts of the tag.
	 */
	slots?: {
		/**
		 * Icon to display at the start of the input
		 */
		icon?: ReactNode;
	};
}

interface DsTagStandardProps extends DsTagBaseProps {
	/**
	 * Variant of the tag
	 * @default 'default'
	 */
	variant?: 'default' | 'include' | 'exclude';
	value?: never;
}

interface DsTagKeyValueProps extends DsTagBaseProps {
	variant: 'key-value';
	/**
	 * Secondary-colored value rendered after the key (`label`). Required for the `key-value` variant.
	 */
	value: ReactNode;
}

export type DsTagProps = DsTagStandardProps | DsTagKeyValueProps;
