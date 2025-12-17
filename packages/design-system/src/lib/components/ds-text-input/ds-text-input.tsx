import type { ChangeEvent, FC } from 'react';
import { Fragment } from 'react';
import classNames from 'classnames';
import styles from './ds-text-input.module.scss';
import type { DsTextInputProps } from './ds-text-input.types';

const DsTextInput: FC<DsTextInputProps> = ({
	id,
	ref,
	name,
	size = 'default',
	type = 'text',
	onBlur,
	onKeyDown,
	onChange,
	onValueChange,
	className,
	style = {},
	value,
	defaultValue,
	min,
	max,
	minLength,
	maxLength,
	placeholder,
	disabled = false,
	tabIndex,
	slots,
}) => {
	const InputWrapper = slots?.inputWrapper ?? Fragment;

	const containerClass = classNames(
		styles.textInputContainer,
		{
			[styles.small]: size === 'small',
			[styles.default]: size === 'default',
		},
		className,
	);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		onChange?.(event);
		onValueChange?.(newValue);
	};

	return (
		<div className={containerClass} style={style}>
			{slots?.startAdornment && <div className={styles.adornment}>{slots.startAdornment}</div>}
			<InputWrapper>
				<input
					id={id}
					ref={ref}
					name={name}
					className={classNames(styles.input)}
					type={type}
					value={value}
					defaultValue={defaultValue}
					min={min}
					max={max}
					minLength={minLength}
					maxLength={maxLength}
					placeholder={placeholder}
					disabled={disabled}
					onBlur={onBlur}
					onKeyDown={onKeyDown}
					onChange={handleChange}
					tabIndex={tabIndex}
				/>
			</InputWrapper>
			{slots?.endAdornment && <div className={styles.adornment}>{slots.endAdornment}</div>}
		</div>
	);
};

export default DsTextInput;
