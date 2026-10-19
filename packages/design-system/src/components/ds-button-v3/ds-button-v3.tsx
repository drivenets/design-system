import { useId, type MouseEvent } from 'react';
import classNames from 'classnames';
import { DsIcon, type IconSize } from '../ds-icon';
import { DsSpinner } from '../ds-spinner';
import { DsTooltip } from '../ds-tooltip';
import styles from './ds-button-v3.module.scss';
import type { ButtonV3Size, DsButtonV3BaseProps } from './ds-button-v3.types.ts';

const iconSizeMap: Record<ButtonV3Size, IconSize> = Object.freeze({
	large: 'small',
	medium: 'tiny',
	small: 'tiny',
	tiny: 'tiny',
});

// Like a natively disabled button: no click handler, no form submit, nothing reaching ancestors.
const blockClick = (event: MouseEvent<HTMLButtonElement>) => {
	event.preventDefault();
	event.stopPropagation();
};

/**
 * Button for user-triggered actions that do not navigate to another route.
 * Supports color palettes, emphasis variants, sizes, icon-only layout, loading and selected states,
 * and a `disabledReason` that keeps a disabled button focusable and explains why it is unavailable.
 *
 * @summary action button with color/variant/size, icon-only, loading, selected and disabled-reason states
 */
const DsButtonV3 = ({
	ref,
	className,
	style,
	children,
	icon,
	disabled,
	disabledReason,
	loading = false,
	color = 'default',
	variant = 'primary',
	size = 'medium',
	selected = false,
	highEmphasis = false,
	type = 'button',
	onClick,
	'aria-describedby': ariaDescribedBy,
	...rest
}: DsButtonV3BaseProps) => {
	const reasonId = useId();
	const isIconOnly = icon !== undefined && !children;
	// A natively disabled button gets no hover or focus, so it could never open the reason tooltip.
	const showsReason = Boolean(disabled && disabledReason);

	const button = (
		<button
			ref={ref}
			// eslint-disable-next-line react/button-has-type -- Dynamic by nature of this component
			type={type}
			disabled={!showsReason && (disabled || loading)}
			aria-disabled={showsReason || undefined}
			aria-describedby={showsReason ? [reasonId, ariaDescribedBy].filter(Boolean).join(' ') : ariaDescribedBy}
			aria-busy={loading || undefined}
			aria-pressed={selected}
			className={classNames(styles.root, className)}
			style={style}
			data-color={color}
			data-variant={variant}
			data-size={size}
			data-selected={selected ? 'true' : undefined}
			data-high-emphasis={highEmphasis ? 'true' : undefined}
			data-icon-only={isIconOnly || undefined}
			data-loading={loading && !disabled ? '' : undefined}
			data-disabled={showsReason ? '' : undefined}
			onClick={showsReason ? blockClick : onClick}
			{...rest}
		>
			{loading ? <DsSpinner /> : icon && <DsIcon icon={icon} size={iconSizeMap[size]} aria-hidden />}
			{children}
			{/* Screen readers get the reason even while the tooltip is closed. */}
			{showsReason && (
				<span id={reasonId} hidden>
					{disabledReason}
				</span>
			)}
		</button>
	);

	if (!disabledReason) {
		return button;
	}

	return (
		<DsTooltip content={disabledReason} disabled={!disabled}>
			{button}
		</DsTooltip>
	);
};

export default DsButtonV3;
