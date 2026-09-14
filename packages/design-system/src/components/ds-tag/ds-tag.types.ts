import type { CSSProperties, KeyboardEvent, MouseEvent, ReactNode, Ref } from 'react';

export const tagSizes = ['medium', 'small'] as const;
export type TagSize = (typeof tagSizes)[number];

export const tagVariants = [
	'default',
	'include',
	'exclude',
	'key-value',
	'operator-filter',
	'query-filter',
] as const;
export type TagVariant = (typeof tagVariants)[number];

export const tagShapes = ['default', 'round'] as const;
export type TagShape = (typeof tagShapes)[number];

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
		/**
		 * Accessible name for the warning dot (shown when `warning` is set).
		 */
		warningAriaLabel?: string;
		/**
		 * Accessible name for the expand chevron (shown when `onExpandClick` is provided).
		 */
		expandAriaLabel?: string;
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
	 * Callback function when the expand chevron is clicked. Providing a handler is what renders the
	 * chevron — the tag keeps no expanded state of its own, so the consumer owns whatever the
	 * chevron reveals.
	 */
	onExpandClick?: (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void;
	/**
	 * Size of the tag
	 * @default 'medium'
	 */
	size?: TagSize;
	/**
	 * Border radius of the tag: `'default'` (4px) or `'round'` (pill)
	 * @default 'default'
	 */
	shape?: TagShape;
	/**
	 * Whether the tag is in a selected/pressed state
	 * @default false
	 */
	selected?: boolean;
	/**
	 * Whether to render a trailing warning dot. Copy and any tooltip around it belong to the
	 * consumer; only the dot's accessible name is configurable, via `locale.warningAriaLabel`.
	 * @default false
	 */
	warning?: boolean;
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
		/**
		 * Fully-wired operator trigger (for example a `DsSelect`) rendered between `label` and
		 * `value`. Honoured only by `variant="operator-filter"` and ignored by every other variant.
		 *
		 * The tag cannot disable an arbitrary node, so `disabled` does not reach the slotted
		 * control — pass `disabled` to it yourself.
		 */
		operator?: ReactNode;
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
	 * Secondary-colored value rendered after the key (`label`) and its `:` separator. The key
	 * carries the emphasis. Required for the `key-value` variant.
	 */
	value: ReactNode;
}

interface DsTagOperatorFilterProps extends DsTagBaseProps {
	variant: 'operator-filter';
	/**
	 * Value rendered last, after `label` and the `slots.operator` trigger that sits between them.
	 * Required for the `operator-filter` variant.
	 */
	value: ReactNode;
}

interface DsTagQueryFilterProps extends DsTagBaseProps {
	variant: 'query-filter';
	/**
	 * Emphasized value rendered after `label` and a `keyboard_arrow_right` separator. Emphasis is
	 * inverted compared to `key-value`: the value is the strong segment and `label` is regular.
	 * Required for the `query-filter` variant.
	 */
	value: ReactNode;
}

export type DsTagProps =
	| DsTagStandardProps
	| DsTagKeyValueProps
	| DsTagOperatorFilterProps
	| DsTagQueryFilterProps;
