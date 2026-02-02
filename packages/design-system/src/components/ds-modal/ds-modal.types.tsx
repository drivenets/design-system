import type { CSSProperties, ReactNode } from 'react';
import type { UseDialogProps as DialogProps } from '@ark-ui/react/dialog';

/**
 * Available column sizes for modal width
 */
export type DsModalColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const modalVariants = ['default', 'info'] as const;

/**
 * Available modal variants for semantic meaning (determines icon and color)
 */
export type DsModalVariant = (typeof modalVariants)[number];

export const modalLayouts = ['default', 'divided'] as const;

/**
 * Available modal layouts for structural styling.
 * - 'default': Inset header underline, no footer border
 * - 'divided': Full-width borders on header and footer for visual separation
 */
export type DsModalLayout = (typeof modalLayouts)[number];

/**
 * Props for the DsModal component
 */
export interface DsModalProps extends Pick<
	DialogProps,
	'modal' | 'closeOnEscape' | 'closeOnInteractOutside'
> {
	/**
	 * Whether the modal is open
	 */
	open: boolean;

	/**
	 * Number of grid columns for modal width
	 * @default 6
	 */
	columns?: DsModalColumns;

	/**
	 * Modal variant for semantic meaning (determines icon and color)
	 * @default 'default'
	 */
	variant?: DsModalVariant;

	/**
	 * Modal layout for structural styling
	 * @default 'default'
	 */
	layout?: DsModalLayout;

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

	/**
	 * Callback when modal open state changes
	 * @param open - whether the modal is open
	 */
	onOpenChange: (open: boolean) => void;
}
