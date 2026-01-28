import type React from 'react';
import type { IconName } from '../ds-icon';

export interface DsAutocompleteOption {
	/**
	 * Label to display in the autocomplete dropdown
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

export interface DsAutocompleteProps {
	/**
	 * Unique identifier for the autocomplete component
	 */
	id?: string;
	/**
	 * Options to display in the dropdown
	 */
	options: DsAutocompleteOption[];
	/**
	 * The current value of the input
	 */
	value?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: React.CSSProperties;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Placeholder text to display when input is empty
	 */
	placeholder?: string;
	/**
	 * Whether the autocomplete is disabled
	 */
	disabled?: boolean;
	/**
	 * Whether the autocomplete is in an invalid state
	 */
	invalid?: boolean;
	/**
	 * Event handler called when the value changes (when an option is selected or custom value is entered)
	 */
	onValueChange?: (value: string) => void;
	/**
	 * Event handler called when an option is selected from the dropdown
	 */
	onOptionSelect?: (option: DsAutocompleteOption) => void;
	/**
	 * Event handler called when the input value changes (on every keystroke)
	 */
	onInputValueChange?: (value: string) => void;
	/**
	 * Event handler called when the open state of the combobox changes
	 */
	onOpenChange?: (open: boolean) => void;
	/**
	 * Message to display when no options match the input
	 * @default 'No matches found'
	 */
	noMatchesMessage?: string;
	/**
	 * Whether to highlight the matching text in the dropdown options
	 * @default true
	 */
	highlightMatch?: boolean;
	/**
	 * Whether to show the dropdown trigger (arrow) button.
	 * If false, the dropdown will only open on typing.
	 * @default true
	 */
	showTrigger?: boolean;
	/**
	 * Content to display at the start of the input (e.g., a search icon).
	 */
	startAdornment?: React.ReactNode;
}
