import type { ButtonHTMLAttributes, Ref } from 'react';
import type { IconType } from '../ds-icon';
import type { ResponsiveValue } from '../../utils/responsive';

export const buttonV3Variants = ['primary', 'secondary', 'tertiary'] as const;
export type ButtonV3Variant = (typeof buttonV3Variants)[number];

export const buttonV3Colors = ['default', 'error', 'light'] as const;
export type ButtonV3Color = (typeof buttonV3Colors)[number];

export const buttonV3Sizes = ['large', 'medium', 'small', 'tiny'] as const;
export type ButtonV3Size = (typeof buttonV3Sizes)[number];

export interface DsButtonV3BaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	ref?: Ref<HTMLButtonElement>;

	/**
	 * - `default` — standard light-UI palette
	 * - `error` — destructive / danger palette (red tones)
	 * - `light` — palette for dark-background surfaces (Figma **Type** onDark)
	 * @default 'default'
	 */
	color?: ButtonV3Color;

	/**
	 * Visual variant of the button:
	 * - `primary` — filled, highest-emphasis action
	 * - `secondary` — outlined, medium-emphasis action
	 * - `tertiary` — borderless, low-emphasis action (text-like)
	 * @default 'primary'
	 */
	variant?: ButtonV3Variant;

	/**
	 * Size of the button. Controls height, padding, font size, and icon size.
	 * @default 'medium'
	 */
	size?: ButtonV3Size;

	/**
	 * Whether the button is in a selected/pressed state. Used for toggle buttons
	 * and segmented controls.
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

export interface DsButtonV3Props extends Omit<DsButtonV3BaseProps, 'size'> {
	/**
	 * Size of the button. Accepts a static value or a responsive object.
	 * @default 'medium'
	 */
	size?: ResponsiveValue<ButtonV3Size>;
}
