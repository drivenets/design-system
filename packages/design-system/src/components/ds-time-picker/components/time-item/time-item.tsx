import classNames from 'classnames';
import type { TimeItemProps } from './time-item.types';
import styles from './time-item.module.scss';
import { DsTypography } from '../../../ds-typography';

export const TimeItem = ({ ref, className, selected, disabled, onClick, label }: TimeItemProps) => {
	return (
		<button
			ref={ref}
			type="button"
			role="option"
			aria-selected={selected}
			aria-disabled={disabled || undefined}
			disabled={disabled}
			className={classNames(
				styles.container,
				selected && styles.selected,
				disabled && styles.disabled,
				className,
			)}
			onClick={onClick}
		>
			<DsTypography variant="body-md-md">{label}</DsTypography>
		</button>
	);
};
