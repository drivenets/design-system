import classNames from 'classnames';
import type React from 'react';
import { Children, isValidElement } from 'react';
import styles from './ds-button-new.module.scss';
import type { DsButtonProps } from './ds-button-new.types';
import DsIcon from '../../../ds-icon/ds-icon';

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
		{ [styles.iconButton]: isIconOnly(children) },
		styles[size],
		className,

		// @ts-expect-error: we don't have all variations of classnames defined
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		styles[`${type}-${variant}`],
	);

	return (
		<button type="button" className={buttonClass} disabled={disabled} {...props}>
			<span className={classNames(styles.content, contentClassName)}>{children}</span>
		</button>
	);
};

export default DsButton;
