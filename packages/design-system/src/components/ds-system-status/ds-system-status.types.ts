/**
 * @deprecated This type is deprecated. Use `DsStatusBadge` and its related types instead.
 * @see {@link ../ds-status-badge/ds-status-badge} for the replacement component.
 */
export const systemStatuses = [
	'healthy',
	'neutral',
	'error',
	'in-progress',
	'pending',
	'alert',
	'disabled',
] as const;

/**
 * @deprecated This type is deprecated. Use `DsStatus` from `ds-status-badge` instead.
 */
export type SystemStatus = (typeof systemStatuses)[number];

/**
 * @deprecated This interface is deprecated. Use `DsStatusBadgeProps` from `ds-status-badge` instead.
 * @see {@link ../ds-status-badge/ds-status-badge.types} for the replacement interface.
 */
export interface DsSystemStatusProps {
	/**
	 * The status of the system
	 */
	status: SystemStatus;
	/**
	 * The label to be displayed
	 */
	label?: string;
	/**
	 * Additional CSS class names
	 */
	className?: string;
}
