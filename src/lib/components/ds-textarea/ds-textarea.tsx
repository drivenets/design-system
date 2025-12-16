import type React from 'react';
import classNames from 'classnames';
import styles from './ds-textarea.module.scss';
import type { DsTextareaProps } from './ds-textarea.types';

const DsTextarea: React.FC<DsTextareaProps> = ({
	id,
	ref,
	name,
	onBlur,
	onChange,
	onValueChange,
	className,
	style = {},
	value,
	defaultValue,
	disabled = false,
	rows = 3,
	placeholder,
	minLength,
	maxLength,
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = event.target.value;
		onChange?.(event);
		onValueChange?.(newValue);
	};

	return (
		<textarea
			id={id}
			ref={ref}
			name={name}
			className={classNames(styles.textarea, className)}
			style={style}
			value={value}
			defaultValue={defaultValue}
			placeholder={placeholder}
			disabled={disabled}
			rows={rows}
			onBlur={onBlur}
			onChange={handleChange}
			minLength={minLength}
			maxLength={maxLength}
		/>
	);
};

export default DsTextarea;
