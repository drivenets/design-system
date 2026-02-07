import classNames from 'classnames';
import styles from './ds-icon.module.scss';
import type { DsIconProps } from './ds-icon.types';
import { customIcons, isCustomIcon } from './custom-icons';

/**
 * Design system Icon component that renders Google Material Icons, custom SVG icons, or inline SVGs
 */
const DsIcon = ({
	icon,
	size = 'medium',
	variant = 'outlined',
	filled,
	className = '',
	style = {},
	...rest
}: DsIconProps) => {
	const iconClass = classNames(styles.icon, styles[size], { [styles.filled]: filled }, className);

	// 1. SVG component passed directly
	if (typeof icon === 'function') {
		const SvgComponent = icon;
		return <SvgComponent className={iconClass} style={style} {...rest} />;
	}

	// 2. Custom registered icon from custom-icons registry
	if (isCustomIcon(icon)) {
		const SvgComponent = customIcons[icon];
		return <SvgComponent className={iconClass} style={style} {...rest} />;
	}

	// 3. Material Icon (font-based)
	const variantClass = `material-symbols-${variant}`;

	return (
		<span className={classNames(iconClass, variantClass)} style={style} {...rest}>
			{icon}
		</span>
	);
};

export default DsIcon;
