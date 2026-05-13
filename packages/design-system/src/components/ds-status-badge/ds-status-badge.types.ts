import type { CSSProperties } from 'react';
import type { IconType } from '../ds-icon';

/**
 * @deprecated Use `statusBadgeV2Phases` and `StatusBadgeV2Phase` from `DsStatusBadgeV2` instead.
 */
export const dsStatuses = ['active', 'running', 'pending', 'draft', 'inactive', 'warning', 'failed'] as const;

/**
 * @deprecated Use `StatusBadgeV2Phase` from `DsStatusBadgeV2` instead.
 */
export type DsStatus = (typeof dsStatuses)[number];

/**
 * @deprecated Use `statusBadgeV2Sizes` and `StatusBadgeV2Size` from `DsStatusBadgeV2` instead.
 */
export const statusBadgeSizes = ['medium', 'small'] as const;
/**
 * @deprecated Use `StatusBadgeV2Size` from `DsStatusBadgeV2` instead.
 */
export type StatusBadgeSize = (typeof statusBadgeSizes)[number];

/**
 * @deprecated Use `DsStatusBadgeV2Props` and `DsStatusBadgeV2` instead.
 */
export interface DsStatusBadgeProps {
	/**
	 * The icon of the status badge
	 */
	icon?: IconType;
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
