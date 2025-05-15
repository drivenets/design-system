import React from 'react';
import classNames from 'classnames';
import { DsIcon } from '../ds-icon';
import { DsSelect } from '../ds-select';
import styles from './ds-form-control.module.scss';
import { DsFormControlProps } from './ds-form-control.types';

const DsFormControl: React.FC<DsFormControlProps> = ({
  id,
  schema = 'info',
  label,
  required = false,
  disabled,
  icon,
  message,
  messageIcon = 'info',
  className,
  as = 'input',
  ...props
}) => {
  const controlId = id || React.useId();

  const renderControl = () => {
    if (as === 'select') {
      const value = props.value || (props as any).defaultValue;
      const options = props.options || [];
      return <DsSelect id={controlId} value={value} options={options} disabled={disabled} {...props} />;
    }

    const ControlElement = as;
    return (
      <ControlElement
        id={controlId}
        className={classNames(styles.control, className, {
          [styles.withIcon]: icon,
        })}
        disabled={disabled}
        {...props}
      />
    );
  };

  return (
    <div className={classNames(styles.container, styles[schema])}>
      <label
        htmlFor={controlId}
        className={classNames(styles.label, {
          [styles.required]: required,
          [styles.disabled]: disabled,
        })}
      >
        {label}
      </label>

      <div
        className={classNames(styles.controlWrapper, {
          [styles.input]: as === 'input',
          [styles.textarea]: as === 'textarea',
        })}
      >
        {icon && <DsIcon className={styles.icon} name={icon} size="medium" />}
        {renderControl()}
      </div>

      {message && (
        <div className={styles.message}>
          <DsIcon name={messageIcon} size="small" />
          <span className={styles.messageText}>{message}</span>
        </div>
      )}
    </div>
  );
};

export default DsFormControl;
