import type { ButtonHTMLAttributes, CSSProperties, ReactNode, Ref } from 'react';
import type { IconType } from '../../../ds-icon';

export const buttonV3Variants = ['primary', 'secondary', 'tertiary'] as const;
export type ButtonV3Variant = (typeof buttonV3Variants)[number];

export const buttonV3Colors = ['default', 'negative'] as const;
export type ButtonV3Color = (typeof buttonV3Colors)[number];

export const buttonV3Sizes = ['large', 'medium', 'small', 'tiny'] as const;
export type ButtonV3Size = (typeof buttonV3Sizes)[number];

export interface DsButtonV3Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	ref?: Ref<HTMLButtonElement>;
	className?: string;
	style?: CSSProperties;
	children?: ReactNode;

	/**
	 * - `default` — standard light-UI palette
	 * - `negative` — destructive / danger palette (red tones)
	 * @default 'default'
	 */
	color?: ButtonV3Color;

	/**
	 * Render the button for a dark-background surface (Figma **Type** onDark).
	 * Applies the on-dark token set regardless of `color`.
	 * @default false
	 */
	onDark?: boolean;

	/**
	 * @default 'primary'
	 */
	variant?: ButtonV3Variant;

	/**
	 * @default 'medium'
	 */
	size?: ButtonV3Size;

	/**
	 * If true the 'pressed' styles are applied
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
