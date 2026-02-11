import classNames from 'classnames';
import styles from './ds-wf-status-icon.module.scss';
import type { DsWfStatusIconProps } from './ds-wf-status-icon.types';
import { DsIcon } from '../ds-icon';

/**
 * Design system Workflow Status Icon component
 * Status icons for toggle filter buttons to help users quickly distinguish workflow states
 */
export const DsWfStatusIcon = ({ status, active = true, className, style }: DsWfStatusIconProps) => {
	const iconMap = {
		running: 'special-running',
		warning: 'special-warning',
		failed: 'special-failed',
		paused: 'special-paused',
	} as const;

	const statusLabel = active ? `${status} status` : `${status} status (inactive)`;

	return (
		<DsIcon
			className={classNames(!active && styles.inactive, className)}
			style={style}
			icon={iconMap[status]}
			size="small"
			aria-label={statusLabel}
		/>
	);
};
