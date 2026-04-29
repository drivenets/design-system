import type React from 'react';
import { RadioGroup } from '@ark-ui/react/radio-group';
import classNames from 'classnames';
import { DsTypography } from '../ds-typography';
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
			{label ? <RadioGroup.ItemText className={styles.radioLabel}>{label}</RadioGroup.ItemText> : children}
			{!!labelInfo && (
				<DsTypography variant="body-xs-reg" className={styles.labelInfo}>
					{labelInfo}
				</DsTypography>
			)}
		</RadioGroup.Item>
	);
};

/**
 * DEPRECATED: Legacy DsRadioGroup component with options array
 * Use compound component pattern instead: DsRadioGroup.Root + DsRadioGroup.Item
 * @deprecated
 */
/* c8 ignore start */
export const DsRadioGroupLegacy: React.FC<DsRadioGroupLegacyProps> = ({
	options,
	value,
	defaultValue,
	onValueChange,
	disabled,
	className,
	style,
}) => (
	<RadioGroup.Root
		className={classNames(styles.radioGroupRoot, className)}
		style={style}
		value={value ?? undefined}
		defaultValue={defaultValue}
		disabled={disabled}
		onValueChange={(details) => {
			if (details.value !== null) {
				onValueChange?.(details.value);
			}
		}}
	>
		{options.map((option) => (
			<RadioGroup.Item
				key={option.value}
				value={option.value}
				disabled={option.disabled}
				className={styles.radioItemContainer}
			>
				<RadioGroup.ItemControl className={styles.radioItem}>
					<div className={styles.radioItemWrapper}>
						<div className={styles.radioIndicator} data-part="indicator" />
					</div>
				</RadioGroup.ItemControl>
				<RadioGroup.ItemHiddenInput />
				<RadioGroup.ItemText className={styles.radioLabel}>{option.label}</RadioGroup.ItemText>
				{!!option.labelInfo && (
					<DsTypography variant="body-xs-reg" className={styles.labelInfo}>
						{option.labelInfo}
					</DsTypography>
				)}
			</RadioGroup.Item>
		))}
	</RadioGroup.Root>
);
/* c8 ignore stop */

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
