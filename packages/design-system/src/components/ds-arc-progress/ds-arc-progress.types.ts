import type { ComponentPropsWithoutRef, ReactNode, Ref } from 'react';

export const arcProgressSizes = ['small', 'medium'] as const;
export type ArcProgressSize = (typeof arcProgressSizes)[number];

export const arcProgressVariants = ['default', 'success', 'failed'] as const;
export type ArcProgressVariant = (typeof arcProgressVariants)[number];

export interface DsArcProgressProps extends ComponentPropsWithoutRef<'div'> {
	/**
	 * Progress value between 0 and 100
	 * @default 0
	 */
	value?: number;

	/**
	 * Size of the arc progress indicator
	 * @default 'medium'
	 */
	size?: ArcProgressSize;

	/**
	 * Visual variant of the arc progress indicator
	 * @default 'default'
	 */
	variant?: ArcProgressVariant;

	/**
	 * Custom content to display in the center of the arc, overriding the default text or icon
	 */
	children?: ReactNode;

	/**
	 * Ref to the root element
	 */
	ref?: Ref<HTMLDivElement>;
}
