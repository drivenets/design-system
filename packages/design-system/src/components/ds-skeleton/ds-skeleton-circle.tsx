import type React from 'react';
import classNames from 'classnames';
import type { DsSkeletonCircleProps } from './ds-skeleton.types';
import { circleSizeMap } from './ds-skeleton.config';
import styles from './ds-skeleton.module.scss';

/**
 * Circle skeleton component - for avatars and icons
 * Matches DsAvatar sizes
 */
const DsSkeletonCircle: React.FC<DsSkeletonCircleProps> = ({ size, variant = 'grey', className, style }) => {
	const pixelSize = typeof size === 'number' ? size : circleSizeMap[size];

	const circleStyle: React.CSSProperties = {
		width: `${String(pixelSize)}px`,
		height: `${String(pixelSize)}px`,
		...style,
	};

	return (
		<span
			className={classNames(styles.skeleton, styles.circle, styles[variant], className)}
			style={circleStyle}
			aria-hidden="true"
		/>
	);
};

export default DsSkeletonCircle;
