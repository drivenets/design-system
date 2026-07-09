import { type CSSProperties, useRef } from 'react';
import classNames from 'classnames';
import type { DsTypographyProps } from './ds-typography.types';
import { typographyColors, typographyVariantConfig } from './ds-typography.config';
import { useTruncation } from './hooks/use-truncation';
import { mergeRefs } from '../../utils/merge-refs';
import { DsTooltip } from '../ds-tooltip';
import styles from './ds-typography.module.scss';

const semanticColorSet = new Set<string>(typographyColors);

const resolveColor = (color: string): string =>
	semanticColorSet.has(color) ? `var(--font-${color})` : color;

const resolveLineClamp = (truncate: boolean | number): number =>
	typeof truncate === 'number' ? Math.max(1, Math.floor(truncate)) : 1;

/*
 * Design system Typography component that provides consistent text styling
 */
const DsTypography = ({
	ref,
	variant,
	asChild = false,
	className,
	style,
	color,
	truncate = false,
	tooltip = false,
	tooltipContent,
	children,
	...props
}: DsTypographyProps) => {
	const Component = typographyVariantConfig[variant].component;

	const internalRef = useRef<HTMLElement>(null);

	const truncationEnabled = truncate !== false;
	const lineClamp = resolveLineClamp(truncate);
	const isMultiline = truncationEnabled && lineClamp > 1;

	const tooltipEnabled = truncationEnabled && tooltip;
	const { isTruncated, getAnchorRect } = useTruncation(internalRef, tooltipEnabled, [children, truncate]);

	let resolvedStyle: CSSProperties | undefined;

	if (color || isMultiline || style) {
		resolvedStyle = {};

		if (color) {
			resolvedStyle.color = resolveColor(color);
		}

		if (isMultiline) {
			Object.assign(resolvedStyle, { '--ds-typography-line-clamp': lineClamp });
		}

		if (style) {
			Object.assign(resolvedStyle, style);
		}
	}

	const truncateClass = truncationEnabled
		? isMultiline
			? styles.truncateMultiline
			: styles.truncateSingle
		: undefined;

	const element = (
		<Component
			ref={mergeRefs(ref, internalRef)}
			asChild={asChild}
			className={classNames(styles[variant], truncateClass, className)}
			style={resolvedStyle}
			{...props}
		>
			{children}
		</Component>
	);

	if (!tooltipEnabled) {
		return element;
	}

	return (
		<DsTooltip
			content={tooltipContent ?? children}
			placement="top"
			disabled={!isTruncated}
			getAnchorRect={getAnchorRect}
		>
			{element}
		</DsTooltip>
	);
};

DsTypography.displayName = 'DsTypography';

export default DsTypography;
