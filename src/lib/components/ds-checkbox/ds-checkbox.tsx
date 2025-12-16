import type React from 'react';
import { useId } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import classNames from 'classnames';
import styles from './ds-checkbox.module.scss';
import type { DsCheckboxProps } from './ds-checkbox.types';
import { DsIcon } from '../ds-icon';

/**
 * Design system Checkbox component
 */
const DsCheckbox: React.FC<DsCheckboxProps> = ({
	id,
	label,
	labelInfo,
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
						<DsIcon
							icon={checked === 'indeterminate' ? 'check_indeterminate_small' : 'check_small'}
							size="small"
							variant="outlined"
						/>
					</CheckboxPrimitive.Indicator>
				</div>
			</CheckboxPrimitive.Root>
			{label && (
				<label className={styles.label} htmlFor={checkboxId}>
					{label}
					{labelInfo && <div className={styles.labelInfo}>{labelInfo}</div>}
				</label>
			)}
		</div>
	);
};

export default DsCheckbox;
