import type React from 'react';
import { Progress } from '@ark-ui/react';
import classNames from 'classnames';

import { DsIcon } from '../ds-icon';
import { DsTypography } from '../ds-typography';
import styles from './ds-progress-donut.module.scss';
import type {
	DsProgressDonutProps,
	ProgressDonutSize,
	ProgressDonutVariant,
} from './ds-progress-donut.types';
import { clampValue } from './utils';

const sizeStyleMap: Record<ProgressDonutSize, string> = Object.freeze({
	small: styles.small,
	medium: styles.medium,
});

const variantStyleMap: Record<ProgressDonutVariant, string> = Object.freeze({
	default: styles.default,
	success: styles.success,
	error: styles.error,
});

const DsProgressDonut = ({
	value = 0,
	size = 'medium',
	variant = 'default',
	children,
	className,
	style,
	ref,
}: DsProgressDonutProps) => {
	const effectiveValue = variant === 'success' ? 100 : clampValue(value);

	const renderIcon = (iconName: 'check' | 'close', colorClass: string) => (
		<DsIcon
			variant="rounded"
			icon={iconName}
			size="large"
			className={classNames({ [styles.iconMediumSize]: size === 'medium' }, colorClass)}
		/>
	);

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
		<Progress.Root
			ref={ref as React.Ref<HTMLDivElement>}
			value={effectiveValue}
			className={classNames(styles.root, sizeStyleMap[size], variantStyleMap[variant], className)}
			style={style}
		>
			<Progress.Circle className={styles.circle}>
				<Progress.CircleTrack className={styles.track} />
				<Progress.CircleRange className={styles.range} />
			</Progress.Circle>

			<div className={styles.center}>{renderCenter()}</div>
		</Progress.Root>
	);
};

export default DsProgressDonut;
