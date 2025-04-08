import React from 'react';
import classNames from 'classnames';
import styles from './ds-button.module.scss';
import { DsButtonProps } from './ds-button.types';

/**
 * Design system Button component
 */
const DsButton: React.FC<DsButtonProps> = ({
  schema = 'primary',
  variant = 'filled',
  size = 'medium',
  disabled = false,
  className,
  children,
  ...props
}) => {
  const buttonClass = classNames(
    styles.button,
    styles[`${schema}-${variant}`],
    styles[size],
    { [styles.disabled]: disabled },
    className,
  );

  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      <span className={styles.content}>{children}</span>
    </button>
  );
};

export default DsButton;
