import type { Ref } from 'react';
import type { typographyColors, typographyVariantConfig } from './ds-typography.config';

export type SemanticVariant = keyof typeof typographyVariantConfig;
export type TypographyColor = (typeof typographyColors)[number];

export interface DsTypographyProps {
	/**
	 * Ref to the rendered element.
	 */
	ref?: Ref<HTMLElement>;
	/**
	 * The semantic variant of the component
	 */
	variant: SemanticVariant;
	/**
	 * Text color. Semantic names map to `--font-*` tokens; raw CSS color values
	 * (hex, rgb, hsl, CSS variables, named colors) pass through unchanged.
	 * Omit to inherit.
	 */
	color?: TypographyColor | (string & {});
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the typography component
	 */
	style?: React.CSSProperties;
	/**
	 * When true, composes typography styles onto the child element without extra DOM nodes
	 */
	asChild?: boolean;
	/**
	 * Truncates overflowing text with an ellipsis. A number clamps to that many lines
	 * (`true` is a single line). Needs a width-constrained layout context.
	 */
	truncate?: boolean | number;
	/**
	 * Reveals the full text in a tooltip on hover/focus, but only while it overflows.
	 */
	tooltip?: boolean;
	/**
	 * Tooltip content override; defaults to `children`.
	 */
	tooltipContent?: React.ReactNode;
	/**
	 * The content of the component
	 */
	children: React.ReactNode;
}
