import type { Ref } from 'react';
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden';
import classNames from 'classnames';
import styles from './ds-status-badge-v2.module.scss';
import type { DsStatusBadgeV2BaseProps } from './ds-status-badge-v2.types';
import { phaseIconMap } from './phase-config';
import { DsIcon } from '../ds-icon';
import { DsTooltip } from '../ds-tooltip';
import { DsTypography } from '../ds-typography';

const DsStatusBadgeV2 = ({
	phase,
	label,
	icon,
	iconOnly = false,
	variant = 'primary',
	size = 'medium',
	className,
	style,
	ref,
	'aria-label': ariaLabel,
	'aria-live': ariaLive,
}: DsStatusBadgeV2BaseProps) => {
	const resolvedIcon = icon === null ? null : (icon ?? phaseIconMap[phase]);
	const hasIcon = resolvedIcon !== null;
	const isTextOnly = !hasIcon;
	const tooltipContent = iconOnly ? label : undefined;

	// Icon-only and custom-named badges expose their name as hidden text: aria-label isn't allowed
	// on a role-less div, and changes to it aren't announced by live regions.
	const hasHiddenName = iconOnly || ariaLabel !== undefined;

	const iconStyle =
		size === 'small'
			? {
					fontSize: 'var(--_badge-icon-size)',
					width: 'var(--_badge-icon-size)',
					height: 'var(--_badge-icon-size)',
				}
			: undefined;

	const rootClass = classNames(
		styles.root,
		styles[phase],
		styles[size],
		{
			[styles.secondary]: variant === 'secondary',
			[styles.iconOnly]: iconOnly,
			[styles.textOnly]: isTextOnly,
		},
		className,
	);

	const badge = (
		<div
			ref={ref as Ref<HTMLDivElement>}
			className={rootClass}
			style={style}
			aria-live={ariaLive}
			aria-atomic={ariaLive ? true : undefined}
		>
			{hasIcon && (
				<span className={styles.icon}>
					<DsIcon icon={resolvedIcon} size="tiny" filled aria-hidden="true" style={iconStyle} />
				</span>
			)}

			{!iconOnly && (
				<DsTypography className={styles.label} variant="body-xs-reg" aria-hidden={hasHiddenName || undefined}>
					{label}
				</DsTypography>
			)}

			{hasHiddenName && <VisuallyHidden>{ariaLabel ?? label}</VisuallyHidden>}
		</div>
	);

	if (iconOnly) {
		return <DsTooltip content={tooltipContent}>{badge}</DsTooltip>;
	}

	return badge;
};

export default DsStatusBadgeV2;
