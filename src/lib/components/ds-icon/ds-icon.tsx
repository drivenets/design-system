import React from 'react';
import classNames from 'classnames';
import styles from './ds-icon.module.scss';
import { DsIconProps } from './ds-icon.types';

/**
 * Design system Icon component that renders Google Material Icons or inline SVGs
 */
const DsIcon: React.FC<DsIconProps> = ({
  icon,
  size = 'medium',
  variant = 'filled',
  className = '',
  style = {},
  onClick,
  ...rest
}) => {
  const variantClass = variant !== 'filled' ? `material-icons-${variant}` : 'material-icons';
  const iconClass = classNames(styles.icon, styles[size], className);

  if (typeof icon === 'function') {
    const SvgComponent = icon;
    return <SvgComponent className={iconClass} style={style} onClick={onClick} {...rest} />;
  }

  return (
    <span className={classNames(iconClass, variantClass)} style={style} onClick={onClick} {...rest}>
      {icon}
    </span>
  );
};

export default DsIcon;
