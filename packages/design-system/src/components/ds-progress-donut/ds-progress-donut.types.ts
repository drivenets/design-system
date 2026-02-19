import type { CSSProperties, ReactNode, Ref } from 'react';

export const progressDonutSizes = ['small', 'medium'] as const;
export type ProgressDonutSize = (typeof progressDonutSizes)[number];

export const progressDonutVariants = ['default', 'success', 'failed'] as const;
export type ProgressDonutVariant = (typeof progressDonutVariants)[number];

export interface DsProgressDonutProps {
	/**
	 * Progress value between 0 and 100
	 * @default 0
	 */
	value?: number;

	/**
	 * Size of the donut progress indicator
	 * @default 'medium'
	 */
	size?: ProgressDonutSize;

	/**
	 * Visual variant of the donut progress indicator
	 * @default 'default'
	 */
	variant?: ProgressDonutVariant;

	/**
	 * Custom content to display in the center of the donut, overriding the default text or icon
	 */
	children?: ReactNode;

	className?: string;

	style?: CSSProperties;

	ref?: Ref<HTMLElement>;
}
