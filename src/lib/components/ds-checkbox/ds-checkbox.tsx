import React, { useId } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import classNames from 'classnames';
import styles from './ds-checkbox.module.scss';
import { DsCheckboxProps } from './ds-checkbox.types';
import { DsIcon } from '../ds-icon';

/**
 * Design system Checkbox component
 */
const DsCheckbox: React.FC<DsCheckboxProps> = ({
  id,
  label,
  className,
  checked,
  defaultChecked,
  onCheckedChange,
  ...props
}) => {
  const generatedId = useId();
  const checkboxId = id || generatedId;

  return (
    <div className={classNames(styles.container, className)}>
      <CheckboxPrimitive.Root
        className={styles.checkboxRoot}
        id={checkboxId}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        {...props}
      >
        <div className={styles.checkboxWrapper}>
          <CheckboxPrimitive.Indicator className={styles.checkboxIndicator}>
            <DsIcon icon={checked === 'indeterminate' ? 'remove' : 'check'} size="tiny" />
          </CheckboxPrimitive.Indicator>
        </div>
      </CheckboxPrimitive.Root>
      {label && (
        <label className={styles.label} htmlFor={checkboxId}>
          {label}
        </label>
      )}
    </div>
  );
};

export default DsCheckbox;
