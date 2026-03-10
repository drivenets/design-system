import type React from 'react';

export interface DsDialogProps {
	/**
	 * Controls whether the dialog is open.
	 */
	open: boolean;
	/**
	 * Callback fired when the open state should change.
	 */
	onOpenChange?: (open: boolean) => void;
	/**
	 * The accessible title for the dialog. Required for accessibility.
	 */
	title: string;
	/**
	 * If true, the dialog title will be visually hidden but accessible to screen readers.
	 */
	hideTitle?: boolean;
	/**
	 * The accessible description for the dialog. Optional, but recommended for accessibility.
	 */
	description?: string;
	/**
	 * If true, the dialog description will be visually hidden but accessible to screen readers.
	 */
	hideDescription?: boolean;
	/**
	 * The content to render inside the dialog.
	 */
	children: React.ReactNode;
	/**
	 * Additional CSS class names for the dialog container.
	 */
	className?: string;
	/**
	 * Ref to the element the dialog should be anchored to (for relative placement)
	 */
	anchorRef?: React.RefObject<HTMLElement>;
	/**
	 * Custom fixed position (e.g., { top: number, left: number })
	 */
	customPosition?: { top: number; left: number };
	/**
	 * If true, show modal overlay and center dialog (default: true)
	 */
	modal?: boolean;
}
