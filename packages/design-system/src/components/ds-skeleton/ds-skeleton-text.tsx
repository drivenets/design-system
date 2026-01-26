import type { CSSProperties } from 'react';
import classNames from 'classnames';
import type { DsSkeletonTextProps } from './ds-skeleton.types';
import { typographyHeightMap, DEFAULT_LINE_GAP, radiusMap } from './ds-skeleton.config';
import styles from './ds-skeleton.module.scss';

/**
 * Text skeleton component - matches typography variants
 * It renders pill-shaped lines that match the height of text content
 */
const DsSkeletonText = ({
	typographyVariant = 'body-sm-reg',
	color = 'grey',
	lines = 1,
	width,
	radius = 'default',
	className,
	style,
}: DsSkeletonTextProps) => {
	const height = typographyHeightMap[typographyVariant];
	const borderRadius = typeof radius === 'number' ? radius : radiusMap[radius];

	const getLineWidth = (): string | number => {
		if (width !== undefined) {
			return width;
		}

		return '100%';
	};

	const lineClassName = classNames(styles.skeleton, styles.text, styles[color], className);

	const createLineStyle = (lineWidth: string | number): CSSProperties => ({
		height,
		width: typeof lineWidth === 'number' ? String(lineWidth) + 'px' : lineWidth,
		borderRadius,
		...style,
	});

	return (
		<div className={styles.container} style={{ gap: DEFAULT_LINE_GAP }}>
			{Array.from({ length: lines }, (_, index) => (
				<span
					key={index}
					className={lineClassName}
					style={createLineStyle(getLineWidth())}
					aria-hidden="true"
				/>
			))}
		</div>
	);
};

export default DsSkeletonText;
