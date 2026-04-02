import type { ButtonHTMLAttributes, Ref } from 'react';
import type { IconType } from '../ds-icon';

export const buttonV3Variants = ['primary', 'secondary', 'tertiary'] as const;
export type ButtonV3Variant = (typeof buttonV3Variants)[number];

export const buttonV3Colors = ['default', 'negative', 'light'] as const;
export type ButtonV3Color = (typeof buttonV3Colors)[number];

export const buttonV3Sizes = ['large', 'medium', 'small', 'tiny'] as const;
export type ButtonV3Size = (typeof buttonV3Sizes)[number];

export interface DsButtonV3Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	ref?: Ref<HTMLButtonElement>;

	/**
	 * - `default` — standard light-UI palette
	 * - `negative` — destructive / danger palette (red tones)
	 * - `light` — palette for dark-background surfaces (Figma **Type** onDark)
	 * @default 'default'
	 */
	color?: ButtonV3Color;

	/**
	 * @default 'primary'
	 */
	variant?: ButtonV3Variant;

	/**
	 * @default 'medium'
	 */
	size?: ButtonV3Size;

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
