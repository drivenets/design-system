import { Progress } from '@ark-ui/react';
import classNames from 'classnames';

import { DsIcon, type IconName } from '../ds-icon';

import styles from './ds-progress-linear.module.scss';
import type { DsProgressLinearProps, ProgressLinearVariant } from './ds-progress-linear.types';
import { calculatePercentage } from './utils';

const rangeVariantClass: Record<ProgressLinearVariant, string | undefined> = Object.freeze({
	initial: undefined,
	progress: styles.variantProgress,
	interrupted: styles.variantInterrupted,
	success: styles.variantSuccess,
	failed: styles.variantFailed,
});

const captionVariantClass: Record<ProgressLinearVariant, string> = Object.freeze({
	initial: styles.captionDefault,
	progress: styles.captionDefault,
	interrupted: styles.captionInterrupted,
	success: styles.captionSuccess,
	failed: styles.captionFailed,
});

const captionIcon: Partial<Record<ProgressLinearVariant, IconName>> = Object.freeze({
	success: 'check_circle',
	failed: 'cancel',
	interrupted: 'warning',
});

const sizeClass: Record<string, string> = Object.freeze({
	small: styles.sizeSmall,
	medium: styles.sizeMedium,
	large: styles.sizeLarge,
});

const trackSizeClass: Record<string, string> = Object.freeze({
	small: styles.trackSmall,
	medium: styles.trackMedium,
	large: styles.trackLarge,
});

/**
 * Design system ProgressLinear component
 */
const DsProgressLinear = ({
	value = 0,
	min = 0,
	max = 100,
	variant = 'progress',
	size = 'medium',
	label,
	showValue = true,
	caption,
	className,
	style,
	ref,
}: DsProgressLinearProps) => {
	const hasHeader = label !== undefined || showValue;
	const icon = captionIcon[variant];
	const percentage = calculatePercentage(value, min, max);

	const renderCaption = (caption?: DsProgressLinearProps['caption']) => {
		if (caption === undefined) {
			return null;
		}

		if (typeof caption !== 'string') {
			return caption;
		}

		return (
			<div className={classNames(styles.caption, captionVariantClass[variant])}>
				{icon && <DsIcon icon={icon} size="tiny" filled />}
				<span>{caption}</span>
			</div>
		);
	};

	return (
		<Progress.Root
			ref={ref}
			value={value}
			min={min}
			max={max}
			className={classNames(styles.root, sizeClass[size], className)}
			style={style}
		>
			{hasHeader && (
				<div className={styles.header}>
					{label && <Progress.Label className={styles.label}>{label}</Progress.Label>}

					{showValue && <Progress.ValueText className={styles.valueText}>{percentage}%</Progress.ValueText>}
				</div>
			)}

			<Progress.Track className={classNames(styles.track, trackSizeClass[size])}>
				<Progress.Range className={classNames(styles.range, rangeVariantClass[variant])} />
			</Progress.Track>

			{renderCaption(caption)}
		</Progress.Root>
	);
};

export default DsProgressLinear;
