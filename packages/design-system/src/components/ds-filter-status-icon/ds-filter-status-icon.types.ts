import type { CSSProperties } from 'react';
import type { IconSize } from '../ds-icon';

export const filterStatuses = ['running', 'warning', 'failed', 'paused'] as const;

export type FilterStatus = (typeof filterStatuses)[number];

export interface DsFilterStatusIconProps {
	/**
	 * The workflow status type
	 */
	status: FilterStatus;
	/**
	 * Whether the status icon is active or non-active
	 * @default true
	 */
	active?: boolean;
	/**
	 * Icon size
	 * @default 'small'
	 */
	size?: IconSize;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: CSSProperties;
}
