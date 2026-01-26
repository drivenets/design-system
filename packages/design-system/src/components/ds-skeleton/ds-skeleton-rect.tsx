import type React from 'react';
import classNames from 'classnames';
import type { DsSkeletonRectProps } from './ds-skeleton.types';
import { radiusMap } from './ds-skeleton.config';
import styles from './ds-skeleton.module.scss';

/**
 * Rectangle skeleton component - for buttons, images, and custom shapes
 */
const DsSkeletonRect = ({
	width,
	height,
	radius = 'default',
	color = 'grey',
	className,
	style,
}: DsSkeletonRectProps) => {
	const borderRadius = typeof radius === 'number' ? radius : radiusMap[radius];

	const rectStyle: React.CSSProperties = {
		width: typeof width === 'number' ? `${String(width)}px` : width,
		height: typeof height === 'number' ? `${String(height)}px` : height,
		borderRadius: `${String(borderRadius)}px`,
		...style,
	};

	return (
		<span
			className={classNames(styles.skeleton, styles.rectangle, styles[color], className)}
			style={rectStyle}
			aria-hidden="true"
		/>
	);
};

export default DsSkeletonRect;
