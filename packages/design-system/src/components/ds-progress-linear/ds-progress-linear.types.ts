import type React from 'react';

export const progressLinearVariants = ['initial', 'progress', 'interrupted', 'success', 'failed'] as const;
export type ProgressLinearVariant = (typeof progressLinearVariants)[number];

export const progressLinearSizes = ['small', 'medium', 'large'] as const;
export type ProgressLinearSize = (typeof progressLinearSizes)[number];

export interface DsProgressLinearProps {
	/**
	 * The current progress value (0–100)
	 * @default 0
	 */
	value?: number;

	/**
	 * The minimum value
	 * @default 0
	 */
	min?: number;

	/**
	 * The maximum value
	 * @default 100
	 */
	max?: number;

	/**
	 * The visual variant controlling bar color and caption styling
	 * @default 'progress'
	 */
	variant?: ProgressLinearVariant;

	/**
	 * The size of the progress bar track
	 * @default 'medium'
	 */
	size?: ProgressLinearSize;

	/**
	 * Label displayed above the progress bar (left side)
	 */
	label?: React.ReactNode;

	/**
	 * Whether to show the percentage value text (right side of label row)
	 * @default true
	 */
	showValue?: boolean;

	/**
	 * Caption/helper text below the progress bar.
	 * When a string is provided, it is auto-styled with an icon and color based on the variant.
	 * When a ReactNode is provided, it is rendered as-is.
	 */
	caption?: React.ReactNode | string;

	/**
	 * Additional CSS class names
	 */
	className?: string;

	/**
	 * Additional styles to apply to the component
	 */
	style?: React.CSSProperties;

	/**
	 * Ref to the root element
	 */
	ref?: React.Ref<HTMLDivElement>;
}
