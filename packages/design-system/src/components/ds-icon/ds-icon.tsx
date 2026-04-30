import classNames from 'classnames';
import styles from './ds-icon.module.scss';
import { iconColors, type DsIconProps } from './ds-icon.types';
import { customIcons, isCustomIcon } from './custom-icons';

const iconColorSet = new Set<string>(iconColors);

const resolveColor = (color: string): string => (iconColorSet.has(color) ? `var(--icon-${color})` : color);

/**
 * Design system Icon component that renders Google Material Icons, custom SVG icons, or inline SVGs
 */
const DsIcon = ({
	icon,
	size = 'medium',
	variant = 'outlined',
	filled,
	color,
	className = '',
	style = {},
	...rest
}: DsIconProps) => {
	const iconClass = classNames(styles.icon, styles[size], { [styles.filled]: filled }, className);
	const mergedStyle = color ? { color: resolveColor(color), ...style } : style;

	// 1. SVG component passed directly
	if (typeof icon === 'function') {
		const SvgComponent = icon;
		return <SvgComponent className={iconClass} style={mergedStyle} {...rest} />;
	}

	// 2. Custom registered icon from custom-icons registry
	if (isCustomIcon(icon)) {
		const SvgComponent = customIcons[icon];
		return <SvgComponent className={iconClass} style={mergedStyle} {...rest} />;
	}

	// 3. Material Icon (font-based)
	const variantClass = `material-symbols-${variant}`;

	return (
		<span className={classNames(iconClass, variantClass)} style={mergedStyle} {...rest}>
			{icon}
		</span>
	);
};

export default DsIcon;
