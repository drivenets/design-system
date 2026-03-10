import type React from 'react';

export interface DsNumberInputProps {
	/**
	 * Unique identifier for the input field
	 */
	id?: string;
	/**
	 * The ref to the input field
	 */
	ref?: React.Ref<HTMLInputElement>;
	/**
	 * The name of the input field
	 */
	name?: string;
	/**
	 * The size of the input field
	 * @default default
	 */
	size?: 'small' | 'default';
	/**
	 * Event handler called when the input field loses focus
	 *
	 * @param event
	 */
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	/**
	 * Callback when the value changes (native input onChange event)
	 * This is provided for compatibility but onValueChange is preferred
	 */
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	/**
	 * Value change event handler (provides just the number value)
	 * This is the preferred way to handle value changes
	 */
	onValueChange?: (value: number) => void;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: React.CSSProperties;
	/**
	 * The placeholder text
	 */
	placeholder?: string;
	/**
	 * Whether the number input is disabled
	 */
	disabled?: boolean;
	/**
	 * The minimum value of the number input
	 */
	min?: number | undefined;
	/**
	 * The maximum value of the number input
	 * @default Number.MAX_SAFE_INTEGER
	 */
	max?: number | undefined;
	/**
	 * The amount to increment or decrement the value by
	 * @default 1
	 */
	step?: number | undefined;
	/**
	 * The controlled value of the input
	 */
	value?: number | undefined;
	/**
	 * The initial value of the input when rendered.
	 * Use when you don't need to control the value of the input.
	 */
	defaultValue?: number | undefined;
}
