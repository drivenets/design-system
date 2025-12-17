import type React from 'react';

export const buttonSchemas = ['primary', 'secondary', 'error'] as const;
export type ButtonSchema = (typeof buttonSchemas)[number];

export const buttonVariants = ['filled', 'ghost', 'borderless', 'round', 'dashed'] as const;
export type ButtonVariant = (typeof buttonVariants)[number];

export const buttonSizes = ['large', 'medium', 'small'] as const;
export type ButtonSize = (typeof buttonSizes)[number];

export interface DsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Color schema of the button
	 * @default 'primary'
	 */
	schema?: ButtonSchema;

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
