import type { ButtonHTMLAttributes, Ref } from 'react';

export interface DsPinToggleProps extends Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	'aria-label' | 'aria-labelledby' | 'aria-pressed' | 'children' | 'type'
> {
	ref?: Ref<HTMLButtonElement>;

	itemLabel: string;

	/**
	 * @default false
	 */
	pinned?: boolean;

	/**
	 * @default false
	 */
	disabled?: boolean;

	locale?: {
		/**
		 * @default 'Pin'
		 */
		pin?: string;
	};

	onPinnedChange?: (pinned: boolean) => void;
}
