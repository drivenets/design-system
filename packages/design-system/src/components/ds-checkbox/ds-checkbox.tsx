import { Checkbox } from '@ark-ui/react/checkbox';
import classNames from 'classnames';
import styles from './ds-checkbox.module.scss';
import type { DsCheckboxProps } from './ds-checkbox.types';
import { DsIcon } from '../ds-icon';

/**
 * Design system Checkbox component
 */
const DsCheckbox = ({
	variant = 'default',
	label,
	labelInfo,
	className,
	onCheckedChange,
	value,
	...props
}: DsCheckboxProps) => {
	return (
		<Checkbox.Root
			className={classNames(styles.root, variant === 'warning' && styles.warning, className)}
			onCheckedChange={(details) => onCheckedChange?.(details.checked)}
			{...props}
			value={value === undefined ? undefined : String(value)}
		>
			<Checkbox.Control className={styles.control}>
				<Checkbox.Indicator className={styles.indicator}>
					<DsIcon icon="check_small" size="tiny" variant="rounded" />
				</Checkbox.Indicator>
				<Checkbox.Indicator className={styles.indicator} indeterminate>
					<DsIcon icon="check_indeterminate_small" size="tiny" variant="rounded" />
				</Checkbox.Indicator>
			</Checkbox.Control>
			<Checkbox.HiddenInput className={styles.hiddenInput} />
			{(label || labelInfo) && (
				<div className={styles.labelColumn}>
					{label && <Checkbox.Label className={styles.label}>{label}</Checkbox.Label>}
					{labelInfo && <div className={styles.labelInfo}>{labelInfo}</div>}
				</div>
			)}
		</Checkbox.Root>
	);
};

export default DsCheckbox;
