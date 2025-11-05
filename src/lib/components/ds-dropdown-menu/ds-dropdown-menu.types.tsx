import React, { ReactNode } from 'react';
import { IconType } from '../ds-icon';

/**
 * Represents a single option in the dropdown menu
 */
export interface DsDropdownMenuOption {
	/**
	 * The text label to display for this option
	 */
	label: string;
	/**
	 * Optional icon to display next to the option
	 * Uses the IconType from the design system
	 */
	icon?: IconType;
	/**
	 * Whether this option is disabled
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * The event handler to be called when this option is clicked
	 */
	onClick?: () => void;
}

/**
 * Props for the DsDropdownMenu component
 */
export interface DsDropdownMenuProps {
	/**
	 * The options to be displayed in the dropdown menu
	 */
	options: DsDropdownMenuOption[];
	/**
	 * Optional children to be rendered inside the component
	 * Typically used for the trigger element
	 */
	children?: ReactNode | undefined;
	/**
	 * Optional CSS class name to apply to the component
	 */
	className?: string;
	/**
	 * Optional inline styles to apply to the component
	 */
	style?: React.CSSProperties;
	/**
	 * The gap between the trigger and dropdown content in pixels
	 * @default 0
	 */
	contentGap?: number;
	/**
	 * The alignment of the dropdown content
	 * @default 'center'
	 */
	align?: 'start' | 'center' | 'end';
	/**
	 * The side of the dropdown content
	 * @default 'bottom'
	 */
	side?: 'top' | 'right' | 'bottom' | 'left';
	/**
	 * Whether to rendering in place instead of appending the drawer to the body (using portals)
	 * @default false
	 */
	disablePortal?: boolean;
}
