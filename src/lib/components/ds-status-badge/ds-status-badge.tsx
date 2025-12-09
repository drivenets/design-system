import React from 'react';
import classNames from 'classnames';
import styles from './ds-status-badge.module.scss';
import { DsStatusBadgeProps } from './ds-status-badge.types';
import { DsIcon } from '../ds-icon';
import { DsTypography } from '../ds-typography';

/**
 * Design system StatusBadge component
 */
const DsStatusBadge: React.FC<DsStatusBadgeProps> = ({
	icon,
	status,
	label = status,
	className,
	style,
	ghost = false,
	size = 'medium',
	'aria-label': ariaLabel = label,
}) => {
	return (
		<div
			style={style}
			className={classNames(
				styles.container,
				styles[status],
				ghost && styles.ghost,
				size === 'small' && styles.small,
				className,
			)}
			role="status"
			aria-label={ariaLabel}
		>
			<DsIcon icon={icon} size="tiny" filled aria-hidden="true" />
			<DsTypography className={styles.label} variant={ghost ? 'body-xs-md' : 'body-xs-reg'}>
				{label}
			</DsTypography>
		</div>
	);
};

export default DsStatusBadge;
