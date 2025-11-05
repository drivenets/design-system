import { CSSProperties, ReactNode } from 'react';
import { UseDialogProps as DialogProps } from '@ark-ui/react/dialog';

/**
 * Available positions for the drawer
 */
export type DsDrawerPosition = 'start' | 'end';
/**
 * Available column sizes for drawer width
 */
export type DsDrawerColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface DsDrawerProps extends Pick<DialogProps, 'closeOnEscape' | 'closeOnInteractOutside'> {
	/**
	 * Whether the drawer is open
	 */
	open: boolean;
	/**
	 * Callback when the drawer open state changes
	 */
	onOpenChange: (open: boolean) => void;
	/**
	 * Number of grid columns the drawer should span (1-12)
	 * @default 4
	 */
	columns?: DsDrawerColumns;
	/**
	 * Position of the drawer
	 * @default 'end'
	 */
	position?: DsDrawerPosition;
	/**
	 * Whether to show backdrop overlay
	 * @default false
	 */
	backdrop?: boolean;
	/**
	 * Whether to append the drawer to the body instead of rendering in place
	 * @default false
	 */
	portal?: boolean;
	/**
	 * Additional CSS styles
	 */
	style?: CSSProperties;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Children components
	 */
	children: ReactNode;
}
