import type React from 'react';

export const variants = ['spinner', 'pulsing'] as const;
export type LoaderVariant = (typeof variants)[number];

export interface DsLoaderProps {
	/**
	 * Loader variant
	 * @default 'spinner'
	 */
	variant?: LoaderVariant;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: React.CSSProperties;
	/**
	 * Ref to the loader container element
	 */
	ref?: React.Ref<HTMLDivElement>;
}
