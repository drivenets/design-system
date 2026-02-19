import type { ComponentPropsWithoutRef, ReactNode, Ref } from 'react';

export const progressArcSizes = ['small', 'medium'] as const;
export type ProgressArcSize = (typeof progressArcSizes)[number];

export const progressArcVariants = ['default', 'success', 'error'] as const;
export type ProgressArcVariant = (typeof progressArcVariants)[number];

export interface DsProgressArcProps extends ComponentPropsWithoutRef<'div'> {
	/**
	 * Progress value between 0 and 100
	 * @default 0
	 */
	value?: number;

	/**
	 * Size of the arc progress indicator
	 * @default 'medium'
	 */
	size?: ProgressArcSize;

	/**
	 * Visual variant of the arc progress indicator
	 * @default 'default'
	 */
	variant?: ProgressArcVariant;

	/**
	 * Custom content to display in the center of the arc, overriding the default text or icon
	 */
	children?: ReactNode;

	ref?: Ref<HTMLElement>;
}
