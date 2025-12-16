import type React from 'react';
import type * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { type RadioGroupItemProps, type RadioGroupRootProps } from '@ark-ui/react/radio-group';

/**
 * Props for the DsRadioGroup Root component
 */
export interface DsRadioGroupRootProps extends Pick<
	RadioGroupRootProps,
	'value' | 'defaultValue' | 'disabled' | 'name' | 'className' | 'style' | 'orientation' | 'children'
> {
	/**
	 * Event handler called when the selected value changes
	 */
	onValueChange?: (value: string | null) => void;
}

/**
 * Props for the DsRadioGroup Item component
 */
export interface DsRadioGroupItemProps extends Pick<
	RadioGroupItemProps,
	'value' | 'disabled' | 'className' | 'style' | 'children'
> {
	/**
	 * Optional label text for the radio item
	 */
	label?: string;
	/**
	 * Optional additional info text displayed below the label
	 */
	labelInfo?: string;
}

/**
 * DEPRECATED: Legacy radio option configuration
 * Use compound component pattern instead: <DsRadioGroup.Root><DsRadioGroup.Item /></DsRadioGroup.Root>
 * @deprecated
 */
export interface DsRadioOptionLegacy<ValueType = string> {
	/**
	 * Display label for the radio option
	 */
	label: string;
	/**
	 * Value associated with this radio option
	 */
	value: ValueType;
	/**
	 * Additional label info for the radio option
	 */
	labelInfo?: string;
	/**
	 * Whether this radio option is disabled
	 */
	disabled?: boolean;
}

/**
 * DEPRECATED: Legacy props for DsRadioGroupLegacy component
 * Use compound component pattern instead
 * @deprecated
 */
export interface DsRadioGroupLegacyProps<
	TOption extends DsRadioOptionLegacy = DsRadioOptionLegacy,
> extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
	/**
	 * The radio group options
	 */
	options: TOption[];
	/**
	 * The selected value
	 */
	value?: TOption['value'];
	/**
	 * The default selected value
	 */
	defaultValue?: TOption['value'];
	/**
	 * Event handler called when the selected value changes
	 *
	 * @param value
	 */
	onValueChange?: (value: TOption['value']) => void;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: React.CSSProperties;
}
