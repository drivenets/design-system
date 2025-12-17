import type { FC } from 'react';
import classNames from 'classnames';
import { PasswordInput } from '@ark-ui/react';
import styles from './ds-password-input.module.scss';
import type { DsPasswordInputProps } from './ds-password-input.types';
import { DsIcon } from '../ds-icon';

const DsPasswordInput: FC<DsPasswordInputProps> = ({
	id,
	ref,
	name,
	size = 'default',
	onBlur,
	onChange,
	onValueChange,
	className,
	style = {},
	value,
	defaultValue,
	placeholder,
	disabled = false,
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
		<PasswordInput.Root disabled={disabled}>
			<PasswordInput.Control>
				<div className={containerClass} style={style}>
					<PasswordInput.Input asChild>
						<input
							id={id}
							ref={ref}
							name={name}
							className={classNames(styles.input)}
							value={value}
							defaultValue={defaultValue}
							placeholder={placeholder}
							onBlur={onBlur}
							onChange={(event) => {
								onChange?.(event);
								onValueChange?.(event.target.value);
							}}
						/>
					</PasswordInput.Input>

					<PasswordInput.VisibilityTrigger className={styles.trigger} aria-label="Toggle password visibility">
						<PasswordInput.Indicator
							className={styles.indicator}
							fallback={<DsIcon icon="visibility_off" size="tiny" />}
						>
							<DsIcon icon="visibility" size="tiny" />
						</PasswordInput.Indicator>
					</PasswordInput.VisibilityTrigger>
				</div>
			</PasswordInput.Control>
		</PasswordInput.Root>
	);
};

export default DsPasswordInput;
