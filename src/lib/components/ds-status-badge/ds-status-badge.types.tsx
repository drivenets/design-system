import { CSSProperties } from 'react';
import { IconType } from '../ds-icon';

export const dsStatuses = ['active', 'running', 'pending', 'draft', 'inactive', 'warning', 'failed'] as const;

export type DsStatus = (typeof dsStatuses)[number];

export const statusBadgeSizes = ['medium', 'small'] as const;
export type StatusBadgeSize = (typeof statusBadgeSizes)[number];

export interface DsStatusBadgeProps {
	/**
	 * The icon of the status badge
	 */
	icon: IconType;
	/**
	 * The value of the status badge
	 */
	status: DsStatus;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: CSSProperties;
	/**
	 * Optional label to display instead of the default status text
	 */
	label?: string;
	/**
	 * Whether the status badge should use ghost style (light background)
	 * @default false
	 */
	ghost?: boolean;
	/**
	 * Size of the status badge
	 * @default 'medium'
	 */
	size?: StatusBadgeSize;
	/**
	 * Accessible label for screen readers, if provided, will override default label/status text.
	 */
	'aria-label'?: string;
}
