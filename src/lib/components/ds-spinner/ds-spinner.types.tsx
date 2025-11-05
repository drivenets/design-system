import React from 'react';

export const spinnerSizes = ['small', 'medium', 'large'] as const;
export type SpinnerSize = (typeof spinnerSizes)[number];

export interface DsSpinnerProps {
	/**
	 * The size of the spinner
	 * @default 'medium'
	 */
	size?: SpinnerSize;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: React.CSSProperties;
}
