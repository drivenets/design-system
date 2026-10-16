import { useId, type MouseEvent, type PointerEvent } from 'react';
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

// Lets the pointer travel from the button onto the reason without it closing (WCAG 1.4.13).
const REASON_CLOSE_DELAY_MS = 150;

// A natively disabled button receives none of these, so neither does one kept focusable to
// explain itself, including handlers an `asChild` trigger (menu, popover) injects.
// `preventDefault` also stops form submission and keeps the reason tooltip open.
const blockedActivation = Object.freeze({
	onClick: (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		event.stopPropagation();
	},
	onPointerDown: (event: PointerEvent<HTMLButtonElement>) => event.preventDefault(),
	onMouseDown: undefined,
	onKeyDown: undefined,
	onKeyUp: undefined,
});

/**
 * Button for user-triggered actions that do not navigate to another route.
 * Supports color palettes, emphasis variants, sizes, icon-only layout, loading and selected states,
 * and a `disabledReason` that keeps a disabled button focusable and explains why it is unavailable.
 *
 * @summary action button with color/variant/size, icon-only, loading, selected and disabled-reason states
 */
const DsButtonV3 = (props: DsButtonV3BaseProps) => {
	const {
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
		'aria-disabled': ariaDisabled,
		'aria-describedby': ariaDescribedBy,
		...rest
	} = props;

	const reasonId = useId();
	const isIconOnly = icon !== undefined && !children;
	const showsReason = Boolean(disabled && disabledReason);

	const button = (
		<button
			ref={ref}
			// eslint-disable-next-line react/button-has-type -- Dynamic by nature of this component
			type={type}
			disabled={!showsReason && (disabled || loading)}
			aria-disabled={showsReason || ariaDisabled}
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
			{...rest}
			{...(showsReason ? blockedActivation : {})}
		>
			{loading ? <DsSpinner /> : icon && <DsIcon icon={icon} size={iconSizeMap[size]} aria-hidden />}
			{children}
			{showsReason && (
				<span id={reasonId} hidden>
					{disabledReason}
				</span>
			)}
		</button>
	);

	// Wrap whenever the prop is passed, even while enabled or unset, so toggling `disabled` or the
	// reason never remounts the button and drops its focus.
	if (!('disabledReason' in props)) {
		return button;
	}

	return (
		<DsTooltip
			content={disabledReason ?? null}
			disabled={!showsReason}
			interactive
			closeDelay={REASON_CLOSE_DELAY_MS}
		>
			{button}
		</DsTooltip>
	);
};

export default DsButtonV3;
