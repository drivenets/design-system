import React, { CSSProperties, ReactNode } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

/**
 * Props for the DsRadioGroup Root component
 */
export interface DsRadioGroupRootProps
	extends Omit<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>, 'children'> {
	/**
	 * The selected value
	 */
	value?: string;
	/**
	 * The default selected value
	 */
	defaultValue?: string;
	/**
	 * Event handler called when the selected value changes
	 */
	onValueChange?: (value: string) => void;
	/**
	 * The children to render (Radio items)
	 */
	children: ReactNode;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: CSSProperties;
}

/**
 * Props for the DsRadioGroup Item component
 */
export interface DsRadioGroupItemProps
	extends Omit<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, 'children'> {
	/**
	 * The value of this radio item
	 */
	value: string;
	/**
	 * Whether this radio item is disabled
	 */
	disabled?: boolean;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: CSSProperties;
	/**
	 * Optional ID for the radio item (for label association)
	 */
	id?: string;
}

/**
 * DEPRECATED: Legacy radio option configuration
 * Use compound component pattern instead: <DsRadioGroup.Root><DsRadioGroup.Item /></DsRadioGroup.Root>
 * @deprecated
 */
export interface DsRadioOption<ValueType = string> {
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
 * DEPRECATED: Legacy props for DsRadioGroup component
 * Use compound component pattern instead
 * @deprecated
 */
export interface DsRadioGroupProps<TOption extends DsRadioOption = DsRadioOption>
	extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
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
