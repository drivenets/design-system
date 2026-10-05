import type { CSSProperties } from 'react';
import type { DsFilterEnumField, DsFilterEnumOperator, DsFilterOperator } from '../../ds-filters-bar.types';

/**
 * Dialog state for one field. A missing entry means the field's first operator, nothing checked
 * and nothing pinned.
 */
export interface DsFiltersBarFiltersDialogEntry {
	/**
	 * `DsFilterField.id`
	 */
	field: string;
	/**
	 * `DsFilterOperator.value`
	 */
	operator: DsFilterEnumOperator;
	/**
	 * Checked option values
	 */
	selected: ReadonlyArray<string>;
	/**
	 * Pinned option values
	 */
	pinned: ReadonlyArray<string>;
}

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
	 * Operator option text, as in `Status = (equals)`. Receives the field label and the operator.
	 */
	operatorOption?: (fieldLabel: string, operator: DsFilterOperator) => string;
	/**
	 * Accessible name of the option search. Receives the field label.
	 */
	search?: (fieldLabel: string) => string;
	/**
	 * Option search placeholder. Receives the field label.
	 */
	searchPlaceholder?: (fieldLabel: string) => string;
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
		search: (fieldLabel: string) => `Search ${fieldLabel}`,
		searchPlaceholder: (fieldLabel: string) => `Search ${fieldLabel}`,
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
	 * One tab per field, in this order
	 */
	fields: ReadonlyArray<DsFilterEnumField>;
	/**
	 * May be sparse, in any order
	 */
	value: DsFiltersBarFiltersDialogValue;
	/**
	 * Field whose tab is selected each time the dialog opens. Falls back to the first field.
	 */
	initialField?: string;
	locale?: DsFiltersBarFiltersDialogLocale;
	className?: string;
	style?: CSSProperties;
	onOpenChange: (open: boolean) => void;
	/**
	 * Fires on every checkbox, operator and pin change
	 */
	onChange: (changed: DsFiltersBarFiltersDialogEntry, value: DsFiltersBarFiltersDialogValue) => void;
	onSave: (value: DsFiltersBarFiltersDialogValue) => void;
}
