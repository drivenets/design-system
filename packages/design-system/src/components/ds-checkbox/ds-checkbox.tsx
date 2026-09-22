import { Checkbox } from '@ark-ui/react/checkbox';
import classNames from 'classnames';
import styles from './ds-checkbox.module.scss';
import type { DsCheckboxProps } from './ds-checkbox.types';
import { DsIcon } from '../ds-icon';

/**
 * @summary Checkbox for single and grouped selection
 *
 * Checkbox for boolean and multi-select inputs. Use standalone for a single
 * toggle, or compose inside `DsCheckboxGroup` for multi-select lists. Import
 * `useCheckboxSelectAll` from `ds-checkbox-group` for parent "select all"
 * checkboxes. `checked` accepts `true`, `false`, or `"indeterminate"`.
 *
 */
const DsCheckbox = ({
	variant = 'default',
	size = 'medium',
	label,
	labelInfo,
	actions,
	className,
	style,
	onCheckedChange,
	value,
	...props
}: DsCheckboxProps) => {
	// `className` and `style` belong to whichever element is outermost, so they
	// move to the wrapper when `actions` adds one.
	const hasActions = Boolean(actions);

	const checkbox = (
		<Checkbox.Root
			className={classNames(styles.root, variant === 'warning' && styles.warning, !hasActions && className)}
			style={hasActions ? undefined : style}
			onCheckedChange={(details) => onCheckedChange?.(details.checked)}
			{...props}
			value={value === undefined ? undefined : String(value)}
			data-size={size}
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

	if (!hasActions) {
		return checkbox;
	}

	return (
		<div
			className={classNames(styles.wrapper, className)}
			style={style}
			data-size={size}
			data-variant={variant}
			data-disabled={props.disabled ? '' : undefined}
		>
			{checkbox}
			<div className={styles.actions} data-size={size}>
				{actions}
			</div>
		</div>
	);
};

DsCheckbox.displayName = 'DsCheckbox';

export default DsCheckbox;
