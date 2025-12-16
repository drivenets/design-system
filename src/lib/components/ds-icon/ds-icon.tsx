import type React from 'react';
import classNames from 'classnames';
import styles from './ds-icon.module.scss';
import type { DsIconProps } from './ds-icon.types';

/**
 * Design system Icon component that renders Google Material Icons or inline SVGs
 */
const DsIcon: React.FC<DsIconProps> = ({
	icon,
	size = 'medium',
	variant = 'outlined',
	filled,
	className = '',
	style = {},
	...rest
}) => {
	const variantClass = `material-symbols-${variant}`;
	const iconClass = classNames(styles.icon, styles[size], { [styles.filled]: filled }, className);

	if (typeof icon === 'function') {
		const SvgComponent = icon;
		return <SvgComponent className={iconClass} style={style} {...rest} />;
	}

	return (
		<span className={classNames(iconClass, variantClass)} style={style} {...rest}>
			{icon}
		</span>
	);
};

export default DsIcon;
