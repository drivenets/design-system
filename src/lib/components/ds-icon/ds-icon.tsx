import React from 'react';
import classNames from 'classnames';
import styles from './ds-icon.module.scss';
import { DsIconProps } from './ds-icon.types';

/**
 * Design system Icon component that renders Google Material Icons
 */
const DsIcon: React.FC<DsIconProps> = ({
  name,
  size = 'medium',
  variant = 'filled',
  className = '',
  style = {},
  onClick,
  ...rest
}) => {
  const variantClass = variant !== 'filled' ? `material-icons-${variant}` : 'material-icons';
  const iconClass = classNames(styles[size], variantClass, className);

  return (
    <span className={iconClass} style={style} onClick={onClick} {...rest}>
      {name}
    </span>
  );
};

export default DsIcon;
