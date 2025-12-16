import type React from 'react';

export const buttonTypes = ['primary', 'secondary', 'secondary-light', 'tertiary'] as const;
export type ButtonType = (typeof buttonTypes)[number];

export const buttonVariants = ['filled', 'ghost', 'danger', 'dark'] as const;
export type ButtonVariant = (typeof buttonVariants)[number];

export const buttonSizes = ['large', 'medium', 'small'] as const;
export type ButtonSize = (typeof buttonSizes)[number];

export interface DsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Type of the button
	 * @default 'primary'
	 */
	buttonType?: ButtonType;

	/**
	 * Visual variant of the button
	 * @default 'filled'
	 */
	variant?: ButtonVariant;

	/**
	 * Size of the button
	 * @default 'medium'
	 */
	size?: ButtonSize;

	/**
	 * Whether the button is disabled
	 * @default false
	 */
	disabled?: boolean;

	/**
	 * Class name for the button content
	 */
	contentClassName?: string;
}
