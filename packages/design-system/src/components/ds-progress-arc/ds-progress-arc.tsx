import type React from 'react';
import classNames from 'classnames';

import { DsIcon } from '../ds-icon';
import { DsTypography } from '../ds-typography';
import styles from './ds-progress-arc.module.scss';
import type { DsProgressArcProps, ProgressArcVariant } from './ds-progress-arc.types';
import { clampValue, getArcGeometry, getProgressDasharray, getTrackDasharray } from './utils';

const variantStyleMap: Record<ProgressArcVariant, string> = Object.freeze({
	default: styles.default,
	success: styles.success,
	error: styles.error,
});

const DsProgressArc = ({
	value = 0,
	size = 'medium',
	variant = 'default',
	children,
	className,
	style,
	ref,
	...props
}: DsProgressArcProps) => {
	const { containerSize, strokeWidth, radius, circumference, arcLength, center, startRotation } =
		getArcGeometry(size);

	const effectiveValue = variant === 'success' ? 100 : clampValue(value);
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

		if (variant === 'error') {
			return renderIcon('close', styles.iconError);
		}

		return (
			<DsTypography variant={size === 'medium' ? 'heading3' : 'body-md-md'} asChild>
				<span>{effectiveValue}%</span>
			</DsTypography>
		);
	};

	return (
		<div
			{...props}
			className={classNames(styles.root, className)}
			style={{ width: containerSize, height: containerSize, ...style }}
			ref={ref as React.Ref<HTMLDivElement>}
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

export default DsProgressArc;
