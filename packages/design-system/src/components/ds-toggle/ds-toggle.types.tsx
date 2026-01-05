import type { CSSProperties, MouseEvent, ReactNode, Ref } from 'react';

export const toggleSizes = ['default', 'small'] as const;
export type ToggleSize = (typeof toggleSizes)[number];

/**
 * Props for the DsToggle component
 */
export type DsToggleProps = {
	/**
	 * Forwarded ref for the toggle label element
	 */
	ref?: Ref<HTMLElement>;

	/**
	 * Optional form field name
	 */
	name?: string;

	/**
	 * Additional CSS class names
	 */
	className?: string;

	/**
	 * Additional styles to apply to the component
	 */
	style?: CSSProperties;

	/**
	 * Event handler called on user interaction.
	 * Note: prefer `onValueChange` for checked-state changes.
	 */
	onChange?: (event: MouseEvent<HTMLElement>) => void;

	/**
	 * Event handler called when the checked state changes
	 */
	onValueChange?: (checked: boolean) => void;

	/**
	 * Visual size of the toggle
	 */
	size?: ToggleSize;

	/**
	 * Controlled checked state
	 */
	checked?: boolean;

	/**
	 * Whether the toggle is disabled
	 */
	disabled?: boolean;
} & (
	| {
			/**
			 * Optional children (e.g., custom label content)
			 */
			children: ReactNode;
			label?: never;
			labelInfo?: never;
	  }
	| {
			children?: never;
			/**
			 * Optional label text displayed next to the toggle
			 */
			label?: string;

			/**
			 * Optional additional info text displayed below the label
			 */
			labelInfo?: string;
	  }
);
