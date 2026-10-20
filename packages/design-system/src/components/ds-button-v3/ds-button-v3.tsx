import { useContext, useId, type MouseEvent } from 'react';
import classNames from 'classnames';
import { DsIcon, type IconSize } from '../ds-icon';
import { DsSpinner } from '../ds-spinner';
import styles from './ds-button-v3.module.scss';
import type { ButtonV3Size, DsButtonV3BaseProps } from './ds-button-v3.types.ts';
import { TooltipTriggerContext } from '../../utils/tooltip-trigger-context';

const iconSizeMap: Record<ButtonV3Size, IconSize> = Object.freeze({
	large: 'small',
	medium: 'tiny',
	small: 'tiny',
	tiny: 'tiny',
});

const blockClick = (event: MouseEvent<HTMLButtonElement>) => {
	event.preventDefault();
	event.stopPropagation();
};

/**
 * Button for user-triggered actions that do not navigate to another route.
 * Supports color palettes, emphasis variants, sizes, icon-only layout, loading and selected states.
 * Wrapped in `DsTooltip` while disabled, it stays focusable so the tooltip can explain why.
 *
 * @summary action button with color/variant/size, icon-only, loading and selected states
 */
const DsButtonV3 = ({
	ref,
	className,
	style,
	children,
	icon,
	disabled,
	loading = false,
	color = 'default',
	variant = 'primary',
	size = 'medium',
	selected = false,
	highEmphasis = false,
	type = 'button',
	id,
	onClick,
	'aria-describedby': ariaDescribedBy,
	...rest
}: DsButtonV3BaseProps) => {
	const tooltip = useContext(TooltipTriggerContext);
	const descriptionId = useId();
	const isIconOnly = icon !== undefined && !children;
	// A natively disabled button gets no hover or focus, so its tooltip could never open.
	const explainsDisabled = Boolean(disabled && id && id === tooltip?.triggerId);
	// Zag links the tooltip only while it is open; link a hidden copy instead, so it is always read once.
	const describedBy = explainsDisabled
		? [descriptionId, ariaDescribedBy === tooltip?.contentId ? undefined : ariaDescribedBy]
				.filter(Boolean)
				.join(' ')
		: ariaDescribedBy;

	return (
		<button
			ref={ref}
			id={id}
			// eslint-disable-next-line react/button-has-type -- Dynamic by nature of this component
			type={type}
			disabled={!explainsDisabled && (disabled || loading)}
			aria-disabled={explainsDisabled || undefined}
			aria-describedby={describedBy}
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
			data-disabled={explainsDisabled ? '' : undefined}
			onClick={explainsDisabled ? blockClick : onClick}
			{...rest}
		>
			{loading ? <DsSpinner /> : icon && <DsIcon icon={icon} size={iconSizeMap[size]} aria-hidden />}
			{children}
			{explainsDisabled && (
				<span id={descriptionId} hidden>
					{tooltip?.content}
				</span>
			)}
		</button>
	);
};

export default DsButtonV3;
