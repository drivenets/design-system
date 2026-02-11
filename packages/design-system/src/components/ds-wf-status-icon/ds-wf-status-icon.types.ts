import type { CSSProperties } from 'react';

export const wfStatuses = ['running', 'warning', 'failed', 'paused'] as const;

export type WfStatus = (typeof wfStatuses)[number];

export interface DsWfStatusIconProps {
	/**
	 * The workflow status type
	 */
	status: WfStatus;
	/**
	 * Whether the status icon is active or non-active
	 * @default true
	 */
	active?: boolean;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: CSSProperties;
}
