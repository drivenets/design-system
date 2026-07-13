import type { CSSProperties } from 'react';
import classNames from 'classnames';
import type { DsSkeletonCircleProps } from './ds-skeleton.types';
import { circleSizeMap } from './ds-skeleton.config';
import styles from './ds-skeleton.module.scss';

/**
 * Circle skeleton component - for avatars and icons
 * Matches DsAvatar sizes
 */
const DsSkeletonCircle = ({ size = 'regular', color = 'gray', className, style }: DsSkeletonCircleProps) => {
	const pixelSize = typeof size === 'number' ? size : circleSizeMap[size];

	const circleStyle: CSSProperties = {
		width: `${String(pixelSize)}px`,
		height: `${String(pixelSize)}px`,
		...style,
	};

	return (
		<span
			className={classNames(styles.skeleton, styles.circle, styles[color], className)}
			style={circleStyle}
			aria-hidden="true"
		/>
	);
};

DsSkeletonCircle.displayName = 'DsSkeletonCircle';

export default DsSkeletonCircle;
