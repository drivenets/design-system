import type { RefObject } from 'react';

export interface TimeItemProps {
	/**
	 * Ref forwarded to the item button element
	 */
	ref?: RefObject<HTMLButtonElement | null>;
	/**
	 * Additional CSS class name applied to the item button
	 */
	className?: string;
	/**
	 * Text displayed in the item button (e.g., "03", "15", "AM").
	 */
	label: string;
	/**
	 * Whether this item is the currently selected value on its scroller.
	 */
	selected: boolean;
	/**
	 * Whether the item is disabled and cannot be selected.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Called when the item button is clicked.
	 */
	onClick: () => void;
}
