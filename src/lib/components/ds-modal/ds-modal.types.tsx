import { CSSProperties, ReactNode } from 'react';
import { UseDialogProps as DialogProps } from '@ark-ui/react/dialog';

/**
 * Available column sizes for modal width
 */
export type DsModalColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Props for the DsModal component
 */
export interface DsModalProps
	extends Pick<DialogProps, 'modal' | 'closeOnEscape' | 'closeOnInteractOutside'> {
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
	 * Number of grid columns for modal width
	 * @default 6
	 */
	columns?: DsModalColumns;
	/**
	 * Optional inline styles to apply to the component
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
