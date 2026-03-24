import classNames from 'classnames';
import { DsIcon, type IconSize } from '../../../ds-icon';
import { DsSpinner } from '../../../ds-spinner';
import styles from './ds-button-v3.module.scss';
import type { ButtonV3Size, DsButtonV3Props } from './ds-button-v3.types';

const sizeClassMap = {
	large: styles.sizeLarge,
	medium: styles.sizeMedium,
	small: styles.sizeSmall,
	tiny: styles.sizeTiny,
} as const;

const iconSizeMap: Record<ButtonV3Size, IconSize> = Object.freeze({
	large: 'small',
	medium: 'tiny',
	small: 'tiny',
	tiny: 'tiny',
});

const DsButtonV3 = ({
	ref,
	className,
	style,
	children,
	icon,
	disabled,
	loading = false,
	color = 'default',
	onDark = false,
	variant = 'primary',
	size = 'medium',
	selected = false,
	type = 'button',
	...rest
}: DsButtonV3Props) => {
	const isIconOnly = icon !== undefined && !children;

	return (
		<button
			ref={ref}
			// Dynamic by nature of this component
			// eslint-disable-next-line react/button-has-type
			type={type}
			disabled={disabled}
			aria-busy={loading || undefined}
			className={classNames(
				styles.root,
				sizeClassMap[size],
				{ [styles.iconOnly]: isIconOnly, [styles.loading]: loading },
				className,
			)}
			style={style}
			data-color={color}
			data-on-dark={onDark ? 'true' : undefined}
			data-variant={variant}
			data-selected={selected ? 'true' : undefined}
			{...rest}
		>
			{loading ? <DsSpinner /> : icon && <DsIcon icon={icon} size={iconSizeMap[size]} aria-hidden />}
			{children}
		</button>
	);
};

export default DsButtonV3;
