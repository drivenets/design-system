import type { CSSProperties, ReactNode, Ref } from 'react';
import type { UseDialogProps as DialogProps } from '@ark-ui/react/dialog';

/**
 * Available column sizes for modal width
 */
export type DsModalColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Props for the DsModal component
 */
export interface DsModalProps extends Pick<
	DialogProps,
	'modal' | 'closeOnEscape' | 'closeOnInteractOutside'
> {
	/**
	 * Whether the modal traps focus and blocks interaction with the page behind the
	 * backdrop. When `false`, users can continue interacting with the underlying page.
	 * @default true
	 */
	modal?: DialogProps['modal'];
	/**
	 * Whether pressing the Escape key closes the modal.
	 * @default true
	 */
	closeOnEscape?: DialogProps['closeOnEscape'];
	/**
	 * Whether clicking or focusing outside the modal closes it.
	 * @default false
	 */
	closeOnInteractOutside?: DialogProps['closeOnInteractOutside'];
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
	 * Whether the modal fills the viewport. Passing this prop makes full screen controlled:
	 * `DsModal.FullScreenTrigger` then only calls `onFullScreenChange`.
	 * `columns` has no effect while full screen.
	 */
	fullScreen?: boolean;

	/**
	 * Initial full screen state when uncontrolled. The modal returns to it after closing.
	 * @default false
	 */
	defaultFullScreen?: boolean;

	/**
	 * Show full-width dividers between header, body, and footer sections
	 * @default false
	 */
	dividers?: boolean;

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

	/**
	 * Called when `DsModal.FullScreenTrigger` requests a full screen change
	 * @param fullScreen - the requested full screen state
	 */
	onFullScreenChange?: (fullScreen: boolean) => void;
}

export interface DsModalFullScreenTriggerProps {
	/**
	 * Accessible name of the icon-only trigger
	 */
	'aria-label': string;
	ref?: Ref<HTMLButtonElement>;
	style?: CSSProperties;
	className?: string;
}
