import { type CSSProperties } from 'react';
import type React from 'react';

export interface DsDividerProps {
	/**
	 * Controls orientation of the divider. Horizontal by default.
	 */
	orientation?: 'horizontal' | 'vertical';
	/**
	 * Underlying element/component to render.
	 * Examples: "hr", "div", "span", Link, etc.
	 */
	component?: React.ElementType;
	/**
	 * Additional CSS styles
	 */
	style?: CSSProperties;
}
