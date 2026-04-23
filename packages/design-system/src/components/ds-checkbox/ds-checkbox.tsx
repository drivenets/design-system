import type React from 'react';
import { Checkbox } from '@ark-ui/react/checkbox';
import classNames from 'classnames';
import styles from './ds-checkbox.module.scss';
import type { DsCheckboxProps } from './ds-checkbox.types';
import { DsIcon } from '../ds-icon';

/**
 * Design system Checkbox component
 */
const DsCheckbox: React.FC<DsCheckboxProps> = ({
	variant = 'default',
	label,
	labelInfo,
	className,
	onCheckedChange,
	...props
}) => {
	return (
		<Checkbox.Root
			className={classNames(styles.root, variant === 'warning' && styles.warning, className)}
			onCheckedChange={(details) => onCheckedChange?.(details.checked)}
			{...props}
		>
			<Checkbox.Control className={styles.control}>
				<Checkbox.Indicator className={styles.indicator}>
					<DsIcon icon="check_small" size="tiny" variant="rounded" />
				</Checkbox.Indicator>
				<Checkbox.Indicator className={styles.indicator} indeterminate>
					<DsIcon icon="check_indeterminate_small" size="tiny" variant="rounded" />
				</Checkbox.Indicator>
			</Checkbox.Control>
			{(label || labelInfo) && (
				<div className={styles.labelColumn}>
					{label && <Checkbox.Label className={styles.label}>{label}</Checkbox.Label>}
					{labelInfo && <div className={styles.labelInfo}>{labelInfo}</div>}
				</div>
			)}
			<Checkbox.HiddenInput />
		</Checkbox.Root>
	);
};

export default DsCheckbox;
