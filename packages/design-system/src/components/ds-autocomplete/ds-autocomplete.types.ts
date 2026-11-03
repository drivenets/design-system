import type React from 'react';
import type { IconName } from '../ds-icon';

export const autocompleteSizes = ['small', 'default', 'large'] as const;
export type AutocompleteSize = (typeof autocompleteSizes)[number];

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

interface DsAutocompleteBaseProps {
	/**
	 * Unique identifier for the autocomplete component
	 */
	id?: string;
	/**
	 * Options to display in the dropdown.
	 * For async/server-driven search, update this prop with fetched results.
	 */
	options?: DsAutocompleteOption[];
	/**
	 * Whether the autocomplete is in a loading state.
	 * When true, a loading message is shown in the dropdown.
	 */
	loading?: boolean;
	/**
	 * The size of the autocomplete control
	 * @default 'default'
	 */
	size?: AutocompleteSize;

	/**
	 * Additional styles to apply to the component
	 */
	style?: React.CSSProperties;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Placeholder text to display when input is empty.
	 * In `multiple` mode it shows only while no tags are selected.
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
	 * Locale strings for the autocomplete component
	 */
	locale?: {
		/**
		 * Message to display while results are loading
		 * @default 'Loading...'
		 */
		loading?: string;
		/**
		 * Message to display when no options match the input
		 * @default 'No matches found', or 'No matching tags' in `multiple` mode
		 */
		noMatches?: string;
		/**
		 * Input placeholder in `multiple` mode once at least one tag is selected
		 * @default 'Add tag...'
		 */
		addTag?: string;
		/**
		 * Label of the row that creates a new tag from the typed text (`multiple` mode with `onCreate`)
		 * @default (inputValue) => `Create new tag '${inputValue}'`
		 */
		createTag?: (inputValue: string) => string;
		/**
		 * Accessible name of a tag's remove button in `multiple` mode
		 * @default (label) => `Remove ${label}`
		 */
		removeTag?: (label: string) => string;
	};
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

	/**
	 * Event handler called when the input value changes (on every keystroke)
	 */
	onInputValueChange?: (value: string) => void;
	/**
	 * Event handler called when the dropdown opens or closes
	 */
	onOpenChange?: (open: boolean) => void;
}

interface DsAutocompleteSingleProps {
	/**
	 * Single-value mode. The selected option is shown as the input text.
	 * @default false
	 */
	multiple?: false;
	value?: never;
	onCreate?: never;
	/**
	 * Event handler called when the value changes.
	 * Fires with the selected option's value, or an empty string when cleared.
	 */
	onValueChange?: (value: string) => void;
}

interface DsAutocompleteMultipleProps {
	/**
	 * Tags mode. Selected values render as removable tags inside the field, and picking an
	 * option toggles it while the list stays open. Typing a comma, pressing Enter, or pasting
	 * comma-separated text adds the matching option, or creates a new tag when `onCreate` is set.
	 */
	multiple: true;
	/**
	 * Selected option values, in display order (controlled).
	 */
	value: string[];
	/**
	 * Called with the full updated list of selected values.
	 */
	onValueChange?: (value: string[]) => void;
	/**
	 * Enables creating tags from typed text that matches no option (compared case-insensitively).
	 * Called with the trimmed name, which is also appended to `value` through `onValueChange`.
	 * Add the new name to `options` to keep it selectable after it is removed.
	 * Omit to only allow picking existing options.
	 */
	onCreate?: (name: string) => void;
}

export type DsAutocompleteProps = DsAutocompleteBaseProps &
	(DsAutocompleteSingleProps | DsAutocompleteMultipleProps);
