import type React from 'react';

import type { ResponsiveValue } from '../../../../utils/responsive';

export const buttonTypes = ['primary', 'secondary', 'secondary-light', 'tertiary'] as const;
export type ButtonType = (typeof buttonTypes)[number];

export const buttonVariants = ['filled', 'ghost', 'danger', 'dark'] as const;
export type ButtonVariant = (typeof buttonVariants)[number];

export const buttonSizes = ['large', 'medium', 'small', 'tiny'] as const;
export type ButtonSize = (typeof buttonSizes)[number];

export interface DsButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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

export interface DsButtonProps extends Omit<DsButtonBaseProps, 'size'> {
	/**
	 * Size of the button. Accepts a static value or a responsive object.
	 * @default 'medium'
	 */
	size?: ResponsiveValue<ButtonSize>;
}
