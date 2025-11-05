import { CSSProperties, ReactNode } from 'react';

export const toastVariants = ['info', 'success', 'warning', 'error'] as const;
export type ToastVariant = (typeof toastVariants)[number];

export type DsToastConfig =
	| {
			persistent?: never;
			/**
			 * Duration in milliseconds before auto-dismiss (ignored if persistent is true)
			 * @default 6000 (6 seconds)
			 */
			duration?: number;
	  }
	| {
			duration?: never;
			/**
			 * Whether the toast should persist until manually dismissed
			 * @default false
			 */
			persistent?: boolean;
	  };

export type DsToastProps = DsToastConfig & {
	/**
	 * Toast type that determines styling and icon
	 */
	variant?: ToastVariant;
	/**
	 * Toast title
	 */
	title?: ReactNode;
	/**
	 * Toast description/message
	 */
	description?: ReactNode;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: CSSProperties;
	/**
	 * Optional action buttons to be rendered inside the component
	 */
	actions?: ReactNode;
	/**
	 * Callback when toast is dismissed
	 */
	onDismiss?: () => void;
};
