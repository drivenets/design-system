import type { CSSProperties, ReactNode } from 'react';

/**
 * Props for the DsConfirmation component
 */
export interface DsConfirmationProps {
	/**
	 * Whether the modal is open
	 */
	open: boolean;
	/**
	 * Callback when modal open state changes
	 * @param open - whether the modal is open
	 */
	onOpenChange: (open: boolean) => void;
	/**
	 * Additional CSS styles
	 */
	style?: CSSProperties;
	/**
	 * Additional CSS class name
	 */
	className?: string;
	/**
	 * Modal body content
	 */
	children: ReactNode;
}
