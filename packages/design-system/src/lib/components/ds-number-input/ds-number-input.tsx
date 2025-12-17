import type { FC } from 'react';
import classNames from 'classnames';
import { NumberInput } from '@ark-ui/react';
import styles from './ds-number-input.module.scss';
import type { DsNumberInputProps } from './ds-number-input.types';
import { DsIcon } from '../ds-icon';

const DsNumberInput: FC<DsNumberInputProps> = ({
	id,
	ref,
	name,
	size = 'default',
	onBlur,
	onChange,
	onValueChange,
	className,
	style = {},
	placeholder,
	disabled = false,
	min,
	max,
	step,
	value,
	defaultValue,
}) => {
	const containerClass = classNames(
		styles.textInputContainer,
		{
			[styles.small]: size === 'small',
			[styles.default]: size === 'default',
		},
		className,
	);

	return (
		<NumberInput.Root
			id={id}
			min={min}
			max={max}
			step={step}
			disabled={disabled}
			value={typeof value !== 'undefined' ? String(value) : undefined}
			defaultValue={typeof defaultValue !== 'undefined' ? String(defaultValue) : undefined}
			onValueChange={(details) => onValueChange?.(details.valueAsNumber)}
		>
			<NumberInput.Control asChild>
				<div className={containerClass} style={style}>
					<NumberInput.DecrementTrigger asChild>
						<button type="button" className={classNames(styles.iconButton)} aria-label="Decrease value">
							<DsIcon icon="remove" size="tiny" />
						</button>
					</NumberInput.DecrementTrigger>

					<NumberInput.Input
						ref={ref}
						name={name}
						type="number"
						className={classNames(styles.input)}
						placeholder={placeholder}
						onBlur={onBlur}
						onChange={onChange}
					></NumberInput.Input>

					<NumberInput.IncrementTrigger asChild>
						<button type="button" className={classNames(styles.iconButton)} aria-label="Increase value">
							<DsIcon icon="add" size="tiny" />
						</button>
					</NumberInput.IncrementTrigger>
				</div>
			</NumberInput.Control>
		</NumberInput.Root>
	);
};

export default DsNumberInput;
