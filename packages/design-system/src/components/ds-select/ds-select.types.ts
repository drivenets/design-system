import type React from 'react';
import type { ReactNode } from 'react';
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
	/**
	 * Custom render function for dropdown options.
	 * When provided, replaces the default label text inside each dropdown item.
	 * The string `label` is still used for search, trigger text, chips, and accessibility.
	 */
	renderOption?: (option: DsSelectOption) => ReactNode;
} & (
	| {
			/**
			 * When `false` or omitted, the select cannot be cleared. `onClear` is not
			 * accepted in this branch.
			 * @default false
			 */
			clearable?: undefined | false;
			onClear?: never;
	  }
	| {
			/**
			 * When `true`, renders a clear affordance on the trigger. Pair with `onClear`.
			 */
			clearable: true;
			/**
			 * Called when the user clicks the clear affordance.
			 */
			onClear?: () => void;
	  }
) &
	(
		| {
				/**
				 * Single-selection mode. When `false` or omitted, `value` is a single string.
				 * @default false
				 */
				multiple?: undefined | false;
				/**
				 * Currently selected option value (controlled).
				 */
				value: SelectOptionValue;
				/**
				 * Called when the selection changes. Receives the newly selected option value.
				 */
				onValueChange?: (value: SelectOptionValue) => void;
				/**
				 * Custom render function for the selected value in the trigger.
				 * When provided, replaces the default label text inside the trigger button.
				 * Only called when there is a selection; otherwise the placeholder is shown.
				 */
				renderValue?: (selectedOption: DsSelectOption) => ReactNode;
		  }
		| {
				/**
				 * Multi-selection mode. When `true`, `value` is an array of selected option
				 * values and `onValueChange` receives the full updated array.
				 */
				multiple: true;
				/**
				 * Currently selected option values (controlled).
				 */
				value: SelectOptionValue[];
				/**
				 * Called when the selection changes. Receives the full updated array of
				 * selected values.
				 */
				onValueChange?: (value: SelectOptionValue[]) => void;
				/**
				 * Custom render function for the selected value in the trigger.
				 * When provided, replaces the default label text inside the trigger button.
				 * Only called when there is a selection; otherwise the placeholder is shown.
				 */
				renderValue?: (selectedOptions: DsSelectOption[]) => ReactNode;
		  }
	);
