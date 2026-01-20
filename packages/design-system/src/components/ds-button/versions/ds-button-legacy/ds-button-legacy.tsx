import classNames from 'classnames';
import type React from 'react';
import styles from './ds-button-legacy.module.scss';
import type { DsButtonProps } from './ds-button-legacy.types';

/**
 * Design system Button component
 */
const DsButton: React.FC<DsButtonProps> = ({
	schema = 'primary',
	variant = 'filled',
	size = 'medium',
	disabled = false,
	className,
	contentClassName,
	children,
	...props
}) => {
	const buttonClass = classNames(styles.button, styles[`${schema}-${variant}`], styles[size], className);

	return (
		<button type="button" className={buttonClass} disabled={disabled} {...props}>
			<span className={classNames(styles.content, contentClassName)}>{children}</span>
		</button>
	);
};

export default DsButton;
