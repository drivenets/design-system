import {type CSSProperties} from 'react';
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
     * Divider line color. Falls back to currentColor with low opacity.
     */
    backgroundColor?: string;
    /**
     * Height for horizontal OR width for vertical.
     * Examples: 1, "2px", "0.5rem"
     */
    thickness?: number | string;
    /**
     * Additional CSS styles
     */
    style?: CSSProperties;
}