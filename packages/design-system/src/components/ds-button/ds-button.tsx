import classNames from 'classnames';
import { DsIcon, type IconSize } from '../ds-icon';
import { DsSpinner } from '../ds-spinner';
import styles from './ds-button.module.scss';
import type { ButtonSize, DsButtonProps } from './ds-button.types';

const iconSizeMap: Record<ButtonSize, IconSize> = Object.freeze({
	large: 'small',
	medium: 'tiny',
	small: 'tiny',
	tiny: 'tiny',
});

const DsButton = ({
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
	type = 'button',
	slotProps,
	...rest
}: DsButtonProps) => {
	const isIconOnly = icon !== undefined && !children;

	return (
		<button
			ref={ref}
			// eslint-disable-next-line react/button-has-type -- Dynamic by nature of this component
			type={type}
			disabled={disabled || loading}
			aria-busy={loading || undefined}
			aria-pressed={selected}
			className={classNames(styles.root, className)}
			style={style}
			data-color={color}
			data-variant={variant}
			data-size={size}
			data-selected={selected ? 'true' : undefined}
			data-icon-only={isIconOnly || undefined}
			data-loading={loading && !disabled ? '' : undefined}
			{...rest}
		>
			{loading ? (
				<DsSpinner />
			) : (
				icon && <DsIcon size={iconSizeMap[size]} aria-hidden {...slotProps?.icon} icon={icon} />
			)}
			{children}
		</button>
	);
};

export default DsButton;
