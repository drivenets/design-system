import type { ButtonHTMLAttributes, Ref } from 'react';
import type { IconType } from '../ds-icon';
import type { ResponsiveValue } from '../../utils/responsive';

export const buttonVariants = ['primary', 'secondary', 'tertiary'] as const;
export type ButtonVariant = (typeof buttonVariants)[number];

export const buttonColors = ['default', 'error', 'light'] as const;
export type ButtonColor = (typeof buttonColors)[number];

export const buttonSizes = ['large', 'medium', 'small', 'tiny'] as const;
export type ButtonSize = (typeof buttonSizes)[number];

export interface DsButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	ref?: Ref<HTMLButtonElement>;

	/**
	 * - `default` — standard light-UI palette
	 * - `error` — destructive / danger palette (red tones)
	 * - `light` — palette for dark-background surfaces (Figma **Type** onDark)
	 * @default 'default'
	 */
	color?: ButtonColor;

	/**
	 * @default 'primary'
	 */
	variant?: ButtonVariant;

	/**
	 * @default 'medium'
	 */
	size?: ButtonSize;

	/**
	 * @default false
	 */
	selected?: boolean;

	/**
	 * Leading icon. When set without children, renders as icon-only (square) layout.
	 */
	icon?: IconType;

	/**
	 * Shows a spinner as the leading element and disables interaction.
	 * @default false
	 */
	loading?: boolean;
}

export interface DsButtonProps extends Omit<DsButtonBaseProps, 'size'> {
	/**
	 * Size of the button. Accepts a static value or a responsive object.
	 * @default 'medium'
	 */
	size?: ResponsiveValue<ButtonSize>;
}
