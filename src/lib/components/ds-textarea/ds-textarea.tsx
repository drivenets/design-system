import React from 'react';
import classNames from 'classnames';
import styles from './ds-textarea.module.scss';
import { DsTextareaProps } from './ds-textarea.types';

const DsTextarea: React.FC<DsTextareaProps> = ({
	onChange,
	onValueChange,
	className,
	style = {},
	value,
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
			className={classNames(styles.textarea, className)}
			style={style}
			value={value}
			placeholder={placeholder}
			disabled={disabled}
			rows={rows}
			onChange={handleChange}
			minLength={minLength}
			maxLength={maxLength}
		/>
	);
};

export default DsTextarea;
