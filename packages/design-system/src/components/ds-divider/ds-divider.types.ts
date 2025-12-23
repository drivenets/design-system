import type React from 'react';

export interface DsDividerProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
	/**
	 * Controls orientation of the divider. Horizontal by default.
	 */
	orientation?: 'horizontal' | 'vertical';
	/**
	 * Underlying element/component to render.
	 * Examples: "hr", "div", "span", Link, etc.
	 */
	component?: React.ElementType;
}
