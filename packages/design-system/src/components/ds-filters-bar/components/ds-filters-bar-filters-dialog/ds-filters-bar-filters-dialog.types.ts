import type { CSSProperties } from 'react';
import type {
	DsFilterComparisonOperator,
	DsFilterEnumOperator,
	DsFilterOperator,
	DsFilterRange,
	DsFilterScalarField,
	DsFilterTextOperator,
} from '../../ds-filters-bar.types';

/**
 * One tab of the dialog: a top-level field, or one subfield of a compound field
 */
export interface DsFiltersBarFiltersDialogTab {
	/**
	 * `field`, or `field.subfield` for a compound field's subfield, as in the query language
	 */
	id: string;
	/**
	 * `DsFilterField.id`
	 */
	field: string;
	/**
	 * Subfield id, for a compound field's subfield only
	 */
	subfield?: string;
	/**
	 * Field label, or `Field › Subfield`
	 */
	label: string;
	schema: DsFilterScalarField;
}

/**
 * `between` is picked from the operator select of number and date tabs and never stored on a
 * condition: it saves as `=` with a range
 */
export type DsFiltersBarFiltersDialogComparison = DsFilterComparisonOperator | 'between';

interface DsFiltersBarFiltersDialogEntryBase {
	/**
	 * `DsFilterField.id`
	 */
	field: string;
	/**
	 * Subfield id, for a compound field's subfield only
	 */
	subfield?: string;
}

export interface DsFiltersBarFiltersDialogEnumEntry extends DsFiltersBarFiltersDialogEntryBase {
	type: 'enum';
	operator: DsFilterEnumOperator;
	/**
	 * Checked option values
	 */
	selected: ReadonlyArray<string>;
	/**
	 * Pinned option values. Always empty for a compound field's subfield, which cannot be pinned.
	 */
	pinned: ReadonlyArray<string>;
}

export interface DsFiltersBarFiltersDialogTextEntry extends DsFiltersBarFiltersDialogEntryBase {
	type: 'text';
	operator: DsFilterTextOperator;
	text: string;
}

export interface DsFiltersBarFiltersDialogNumberEntry extends DsFiltersBarFiltersDialogEntryBase {
	type: 'number';
	operator: DsFiltersBarFiltersDialogComparison;
	/**
	 * Used by every operator except `between`
	 */
	value: number | null;
	/**
	 * Used by `between`
	 */
	range: DsFilterRange<number>;
}

export interface DsFiltersBarFiltersDialogDateEntry extends DsFiltersBarFiltersDialogEntryBase {
	type: 'date';
	operator: DsFiltersBarFiltersDialogComparison;
	/**
	 * Chosen preset value. Choosing a date clears it, and choosing it clears the dates.
	 */
	preset: string | null;
	/**
	 * ISO 8601 date, used by every operator except `between`
	 */
	date: string | null;
	/**
	 * ISO 8601 dates, used by `between`
	 */
	range: DsFilterRange<string>;
}

/**
 * Dialog state for one tab. A missing entry means the tab's first operator and nothing set.
 */
export type DsFiltersBarFiltersDialogEntry =
	| DsFiltersBarFiltersDialogEnumEntry
	| DsFiltersBarFiltersDialogTextEntry
	| DsFiltersBarFiltersDialogNumberEntry
	| DsFiltersBarFiltersDialogDateEntry;

export type DsFiltersBarFiltersDialogValue = ReadonlyArray<DsFiltersBarFiltersDialogEntry>;

export interface DsFiltersBarFiltersDialogLocale {
	title?: string;
	save?: string;
	close?: string;
	/**
	 * Accessible name of the operator select
	 */
	operator?: string;
	/**
	 * Operator option text, as in `Status = (equals)`. Receives the tab label and the operator.
	 */
	operatorOption?: (fieldLabel: string, operator: DsFilterOperator) => string;
	/**
	 * Text of the `between` operator option on number and date tabs. Receives the tab label.
	 */
	betweenOption?: (fieldLabel: string) => string;
	/**
	 * Accessible name of the option search. Receives the tab label.
	 */
	search?: (fieldLabel: string) => string;
	/**
	 * Option search placeholder. Receives the tab label.
	 */
	searchPlaceholder?: (fieldLabel: string) => string;
	/**
	 * Accessible name of the value input on text, number and date tabs. Receives the tab label.
	 */
	value?: (fieldLabel: string) => string;
	/**
	 * Accessible names of the two `between` inputs. Receive the tab label.
	 */
	rangeFrom?: (fieldLabel: string) => string;
	rangeTo?: (fieldLabel: string) => string;
	/**
	 * Accessible name of a date tab's preset list. Receives the tab label.
	 */
	presets?: (fieldLabel: string) => string;
	/**
	 * Screen reader text for a tab's checked count, shown visually as `• N`
	 */
	selectedCount?: (count: number) => string;
	/**
	 * Accessible name of the pin icon on a tab that has pinned options
	 */
	pinned?: string;
}

export const defaultDsFiltersBarFiltersDialogLocale: Required<DsFiltersBarFiltersDialogLocale> =
	Object.freeze({
		title: 'Filters',
		save: 'Save filters',
		close: 'Close',
		operator: 'Operator',
		operatorOption: (fieldLabel: string, operator: DsFilterOperator) =>
			`${fieldLabel} ${operator.symbol ?? operator.value} (${operator.label})`,
		betweenOption: (fieldLabel: string) => `${fieldLabel} (between)`,
		search: (fieldLabel: string) => `Search ${fieldLabel}`,
		searchPlaceholder: (fieldLabel: string) => `Search ${fieldLabel}`,
		value: (fieldLabel: string) => `${fieldLabel} value`,
		rangeFrom: (fieldLabel: string) => `${fieldLabel} from`,
		rangeTo: (fieldLabel: string) => `${fieldLabel} to`,
		presets: (fieldLabel: string) => `${fieldLabel} presets`,
		selectedCount: (count: number) => `${String(count)} selected`,
		pinned: 'Pinned',
	});

/**
 * Pure and fully controlled: no bar context and no internal draft. Pass the current `value` back
 * on every `onChange`.
 */
export interface DsFiltersBarFiltersDialogProps {
	open: boolean;
	/**
	 * One tab each, in this order
	 */
	tabs: ReadonlyArray<DsFiltersBarFiltersDialogTab>;
	/**
	 * May be sparse, in any order
	 */
	value: DsFiltersBarFiltersDialogValue;
	/**
	 * `DsFiltersBarFiltersDialogTab.id` selected each time the dialog opens. Falls back to the first
	 * tab.
	 */
	initialTab?: string;
	locale?: DsFiltersBarFiltersDialogLocale;
	className?: string;
	style?: CSSProperties;
	onOpenChange: (open: boolean) => void;
	/**
	 * Fires on every change in a tab
	 */
	onChange: (changed: DsFiltersBarFiltersDialogEntry, value: DsFiltersBarFiltersDialogValue) => void;
	onSave: (value: DsFiltersBarFiltersDialogValue) => void;
}
