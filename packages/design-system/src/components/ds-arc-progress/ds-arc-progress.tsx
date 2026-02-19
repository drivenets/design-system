import classNames from 'classnames';

import { DsIcon } from '../ds-icon';
import styles from './ds-arc-progress.module.scss';
import type { ArcProgressVariant, DsArcProgressProps } from './ds-arc-progress.types';
import { getArcGeometry, getEffectiveValue, getProgressDasharray, getTrackDasharray } from './utils';

const variantStyleMap: Record<ArcProgressVariant, string> = Object.freeze({
	default: styles.default,
	success: styles.success,
	failed: styles.failed,
});

const DsArcProgress = ({
	value = 0,
	size = 'medium',
	variant = 'default',
	children,
	className,
	style,
	ref,
	...props
}: DsArcProgressProps) => {
	const { containerSize, strokeWidth, radius, circumference, arcLength, center, startRotation } =
		getArcGeometry(size);

	const effectiveValue = getEffectiveValue(variant, value);
	const trackDasharray = getTrackDasharray(arcLength, circumference);
	const progressDasharray = getProgressDasharray(effectiveValue, arcLength, circumference);

	const renderIcon = (iconName: 'check' | 'close', colorClass: string) => {
		return (
			<DsIcon
				variant="rounded"
				icon={iconName}
				size="large"
				className={classNames({ [styles.iconMediumSize]: size === 'medium' }, colorClass)}
			/>
		);
	};

	const renderCenter = () => {
		if (children) {
			return children;
		}

		if (variant === 'success') {
			return renderIcon('check', styles.iconSuccess);
		}

		if (variant === 'failed') {
			return renderIcon('close', styles.iconFailed);
		}

		return (
			<span className={size === 'medium' ? styles.valueMedium : styles.valueSmall}>{effectiveValue}%</span>
		);
	};

	return (
		<div
			{...props}
			className={classNames(styles.root, className)}
			style={{ width: containerSize, height: containerSize, ...style }}
			ref={ref}
			role="progressbar"
			aria-valuenow={effectiveValue}
			aria-valuemin={0}
			aria-valuemax={100}
		>
			<svg
				className={styles.svg}
				width={containerSize}
				height={containerSize}
				viewBox={`0 0 ${String(containerSize)} ${String(containerSize)}`}
			>
				<circle
					className={styles.track}
					cx={center}
					cy={center}
					r={radius}
					fill="none"
					strokeWidth={strokeWidth}
					strokeDasharray={trackDasharray}
					strokeLinecap="round"
					transform={`rotate(${String(startRotation)} ${String(center)} ${String(center)})`}
				/>

				<circle
					className={classNames(styles.progress, variantStyleMap[variant])}
					cx={center}
					cy={center}
					r={radius}
					fill="none"
					strokeWidth={strokeWidth}
					strokeDasharray={progressDasharray}
					strokeLinecap="round"
					transform={`rotate(${String(startRotation)} ${String(center)} ${String(center)})`}
				/>
			</svg>

			<div className={styles.center}>{renderCenter()}</div>
		</div>
	);
};

export default DsArcProgress;
