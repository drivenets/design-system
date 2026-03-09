import type React from 'react';

export interface DsPopoverProps {
	/**
	 * The element that triggers the popover
	 */
	trigger: React.ReactNode;
	/**
	 * The content to be rendered inside the popover
	 */
	children: React.ReactNode;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * The alignment of the popover content
	 */
	align?: 'start' | 'center' | 'end';
	/**
	 * The position of the popover relative to the trigger element
	 */
	side?: 'top' | 'right' | 'bottom' | 'left';
}
