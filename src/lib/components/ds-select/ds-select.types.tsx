import React from 'react';
import { IconName } from '../ds-icon';

export type SelectSize = 'default' | 'small';

export interface DsSelectOption {
	/**
	 * Label to display in the select
	 */
	label: string;
	/**
	 * Value to return when the option is selected
	 */
	value: string;
	/**
	 * Optional icon to display next to the label
	 */
	icon?: IconName;
}

export interface DsSelectProps {
	/**
	 * Unique identifier for the select component
	 */
	id?: string;
	/**
	 * Options to display in the select dropdown
	 */
	options: DsSelectOption[];
	/**
	 * Additional styles to apply to the icon
	 */
	style?: React.CSSProperties;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Value of the selected option (controlled mode)
	 */
	value?: string;
	/**
	 * Value change event handler
	 *
	 * @param value
	 */
	onValueChange?: (value: string) => void;
	/**
	 * Clear selection event handler
	 */
	onClear?: () => void;
	/**
	 * Event handler called when the select loses focus
	 *
	 * @param event
	 */
	onBlur?: (event: React.FocusEvent<any>) => void;
	/**
	 * Placeholder text to display when no option is selected
	 */
	placeholder?: string;
	/**
	 * Whether the select is disabled
	 */
	disabled?: boolean;
	/**
	 * The size of the select component
	 * @default 'default'
	 */
	size?: SelectSize;
}
