import React from 'react';
import classNames from 'classnames';
import styles from './dn-icon.module.scss';
import { DnIconProps } from './dn-icon.types';

/**
 * DnIcon component that renders Google Material Icons
 */
const DnIcon: React.FC<DnIconProps> = ({
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

export default DnIcon;
