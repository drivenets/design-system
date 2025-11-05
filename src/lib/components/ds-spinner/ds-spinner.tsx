import React from 'react';
import classNames from 'classnames';
import styles from './ds-spinner.module.scss';
import { DsSpinnerProps, SpinnerSize } from './ds-spinner.types';

const sizeMap: Record<SpinnerSize, number> = {
	small: 50,
	medium: 75,
	large: 100,
};

const widthMap: Record<SpinnerSize, number> = {
	small: 4,
	medium: 7,
	large: 9,
};

/**
 * Design system Spinner component
 */
const DsSpinner: React.FC<DsSpinnerProps> = ({ size = 'medium', className, style = {}, ...props }) => {
	const actualSize = sizeMap[size];
	const actualWidth = widthMap[size];
	const radius = (actualSize - actualWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const strokeDasharray = `${0.25 * circumference} ${circumference}`;

	return (
		<div className={classNames(styles.spinnerContainer, styles[size], className)} style={style} {...props}>
			<svg
				className={classNames(styles.progressCircle, styles.spin)}
				width={actualSize}
				height={actualSize}
				viewBox={`0 0 ${actualSize} ${actualSize}`}
			>
				<circle
					className={styles.progressArc}
					cx={actualSize / 2}
					cy={actualSize / 2}
					r={radius}
					fill="none"
					strokeWidth={actualWidth}
					strokeDasharray={strokeDasharray}
					strokeLinecap="round"
				/>
			</svg>
		</div>
	);
};

export default DsSpinner;
