import type React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { RadioGroup } from '@ark-ui/react/radio-group';
import classNames from 'classnames';
import styles from './ds-radio-group.module.scss';
import type {
	DsRadioGroupItemProps,
	DsRadioGroupLegacyProps,
	DsRadioGroupRootProps,
} from './ds-radio-group.types';

/**
 * Root component - provides radio group context
 */
const Root: React.FC<DsRadioGroupRootProps> = ({ className, children, onValueChange, ...props }) => (
	<RadioGroup.Root
		className={classNames(styles.radioGroupRoot, className)}
		onValueChange={(details) => onValueChange?.(details.value)}
		{...props}
	>
		{children}
	</RadioGroup.Root>
);

/**
 * Item component - renders a single radio button with optional label
 */
const Item: React.FC<DsRadioGroupItemProps> = ({
	value,
	label,
	labelInfo,
	className,
	style,
	children,
	...props
}) => {
	return (
		<RadioGroup.Item
			value={value}
			className={classNames(styles.radioItemContainer, className)}
			style={style}
			{...props}
		>
			<RadioGroup.ItemControl className={styles.radioItem}>
				<div className={styles.radioItemWrapper}>
					<div className={styles.radioIndicator} data-part="indicator" />
				</div>
			</RadioGroup.ItemControl>
			<RadioGroup.ItemHiddenInput />
			{label ? (
				<RadioGroup.ItemText className={styles.radioLabel}>
					{label}
					{labelInfo && <div className={styles.labelInfo}>{labelInfo}</div>}
				</RadioGroup.ItemText>
			) : (
				children
			)}
		</RadioGroup.Item>
	);
};

/**
 * DEPRECATED: Legacy DsRadioGroup component with options array
 * Use compound component pattern instead: DsRadioGroup.Root + DsRadioGroup.Item
 * @deprecated
 */
export const DsRadioGroupLegacy: React.FC<DsRadioGroupLegacyProps> = ({
	options,
	value,
	defaultValue,
	onValueChange,
	className,
	...props
}) => (
	<RadioGroupPrimitive.Root
		className={classNames(styles.radioGroupRoot, className)}
		value={value}
		defaultValue={defaultValue}
		onValueChange={onValueChange}
		{...props}
	>
		{options.map((option) => (
			<div key={option.value} className={styles.radioItemContainer}>
				<RadioGroupPrimitive.Item
					className={styles.radioItem}
					value={option.value}
					disabled={option.disabled}
					id={option.value}
				>
					<div className={styles.radioItemWrapper}>
						<RadioGroupPrimitive.Indicator className={styles.radioIndicator} />
					</div>
				</RadioGroupPrimitive.Item>
				<label className={styles.radioLabel} htmlFor={option.value}>
					{option.label}
					{option.labelInfo && <div className={styles.labelInfo}>{option.labelInfo}</div>}
				</label>
			</div>
		))}
	</RadioGroupPrimitive.Root>
);

/**
 * Design system RadioGroup component
 *
 * @example
 * <DsRadioGroup.Root value={value} onValueChange={setValue}>
 *   <DsRadioGroup.Item value="option1" label="Option 1" />
 *   <DsRadioGroup.Item value="option2" label="Option 2" />
 * </DsRadioGroup.Root>
 */
export const DsRadioGroup = {
	Root,
	Item,
};

export default DsRadioGroup;
