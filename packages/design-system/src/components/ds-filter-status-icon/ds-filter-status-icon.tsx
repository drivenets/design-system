import classNames from 'classnames';
import styles from './ds-filter-status-icon.module.scss';
import type { DsFilterStatusIconProps } from './ds-filter-status-icon.types';
import { DsIcon } from '../ds-icon';

/**
 * Design system Filter Status Icon component
 * Status icons for toggle filter buttons to help users quickly distinguish workflow states
 */
export const DsFilterStatusIcon = ({
	status,
	active = true,
	size = 'small',
	className,
	style,
}: DsFilterStatusIconProps) => {
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
			size={size}
			aria-label={statusLabel}
		/>
	);
};
