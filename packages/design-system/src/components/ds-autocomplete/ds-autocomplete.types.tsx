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

export interface DsAutocompleteLoadDetails {
	filterText: string;
	signal: AbortSignal | undefined;
}

export interface DsAutocompleteLoadResult {
	items: DsAutocompleteOption[];
}

export interface DsAutocompleteProps {
	/**
	 * Unique identifier for the autocomplete component
	 */
	id?: string;
	/**
	 * Static options to display in the dropdown.
	 * The component handles client-side filtering automatically.
	 * For async/server-driven search, use the `load` prop instead.
	 * @default []
	 */
	options?: DsAutocompleteOption[];
	/**
	 * Async load function called when the user types.
	 * Receives the current filter text and an abort signal.
	 * When provided, the component manages a loading/error state via `useAsyncList`.
	 */
	onLoadOptions?: (details: DsAutocompleteLoadDetails) => Promise<DsAutocompleteLoadResult>;
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
	 * Event handler called when the input value changes (on every keystroke)
	 */
	onInputValueChange?: (value: string) => void;
	/**
	 * Message to display when no options match the input
	 * @default 'No matches found'
	 */
	noMatchesMessage?: string;
	/**
	 * Message to display while results are loading (async mode only)
	 * @default 'Loading...'
	 */
	loadingMessage?: string;
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
