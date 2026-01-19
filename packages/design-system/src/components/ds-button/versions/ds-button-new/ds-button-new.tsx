import classNames from 'classnames';
import type React from 'react';
import { Children, isValidElement } from 'react';
import styles from './ds-button-new.module.scss';
import type { ButtonSize, ButtonType, ButtonVariant, DsButtonProps } from './ds-button-new.types';
import DsIcon from '../../../ds-icon/ds-icon';

const typeVariantClasses: Partial<Record<`${ButtonType}-${ButtonVariant}`, string>> = {
	'primary-filled': styles['primary-filled'],
	'primary-danger': styles['primary-danger'],
	'primary-dark': styles['primary-dark'],
	'secondary-filled': styles['secondary-filled'],
	'secondary-ghost': styles['secondary-ghost'],
	'secondary-danger': styles['secondary-danger'],
	'secondary-dark': styles['secondary-dark'],
	'secondary-light-dark': styles['secondary-light-dark'],
	'tertiary-filled': styles['tertiary-filled'],
	'tertiary-ghost': styles['tertiary-ghost'],
	'tertiary-danger': styles['tertiary-danger'],
	'tertiary-dark': styles['tertiary-dark'],
};

const sizeClasses: Record<ButtonSize, string | undefined> = {
	small: styles.small,
	medium: styles.medium,
	large: styles.large,
};

const isIconOnly = (children: React.ReactNode) => {
	if (Children.count(children) !== 1) {
		return false;
	}

	const childArray = Children.toArray(children);
	const onlyChild = childArray[0];

	return isValidElement(onlyChild) && onlyChild.type === DsIcon;
};

/**
 * Design system Button component
 */
const DsButton: React.FC<DsButtonProps> = ({
	buttonType,
	variant = 'filled',
	size = 'medium',
	disabled = false,
	className,
	contentClassName,
	children,
	...props
}) => {
	const type = buttonType ?? (variant === 'ghost' ? 'secondary' : 'primary');
	const buttonClass = classNames(
		styles.button,
		isIconOnly(children) && styles.iconButton,
		typeVariantClasses[`${type}-${variant}`],
		sizeClasses[size],
		className,
	);

	return (
		<button type="button" className={buttonClass} disabled={disabled} {...props}>
			<span className={classNames(styles.content, contentClassName)}>{children}</span>
		</button>
	);
};

export default DsButton;
