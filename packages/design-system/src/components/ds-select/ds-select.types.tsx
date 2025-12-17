import type React from 'react';
import type { IconName } from '../ds-icon';

export type SelectSize = 'default' | 'small';

export interface DsSelectOption {
	/**
	 * Label to display in the select
	 */
	label: string;
	/**
	 * Value to return when the option is selected
	 */
	value: SelectOptionValue;
	/**
	 * Optional icon to display next to the label
	 */
	icon?: IconName;
}

export type SelectOptionValue = string;

export type DsSelectProps = {
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
	 * Event handler called when the select loses focus
	 *
	 * @param event
	 */
	onBlur?: (event: React.FocusEvent) => void;
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
} & (
	| {
			clearable?: undefined | false;
			onClear?: never;
	  }
	| {
			clearable: true;
			onClear?: () => void;
	  }
) &
	(
		| {
				multiple?: undefined | false;
				value: SelectOptionValue;
				onValueChange?: (value: SelectOptionValue) => void;
		  }
		| {
				multiple: true;
				value: SelectOptionValue[];
				onValueChange?: (value: SelectOptionValue[]) => void;
		  }
	);
