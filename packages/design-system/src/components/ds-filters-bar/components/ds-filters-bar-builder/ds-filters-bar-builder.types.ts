/**
 * Strings of the query builder dialog that the builder view opens. The add button and the chips
 * take theirs from the shared chip strings.
 */
export interface DsFiltersBarBuilderLocale {
	/**
	 * Query builder dialog title
	 */
	title?: string;
	/**
	 * Accessible name of the close button
	 */
	close?: string;
	/**
	 * Accessible name of the control that clears the selection in progress
	 */
	clear?: string;
	searchField?: string;
	selectField?: string;
	searchSubfield?: string;
	selectSubfield?: string;
	searchOperator?: string;
	selectOperator?: string;
	/**
	 * Placeholder while searching the options of an enum field
	 */
	searchValue?: string;
	/**
	 * Caption above value options: enum options, or date presets
	 */
	selectValue?: string;
	valuePlaceholder?: string;
	save?: string;
}

export const defaultDsFiltersBarBuilderLocale: Required<DsFiltersBarBuilderLocale> = Object.freeze({
	title: 'Query builder',
	close: 'Close',
	clear: 'Clear selection',
	searchField: 'Search field',
	selectField: 'Select a field',
	searchSubfield: 'Search subfield',
	selectSubfield: 'Select a subfield',
	searchOperator: 'Search operator',
	selectOperator: 'Select an operator',
	searchValue: 'Search value',
	selectValue: 'Select a value',
	valuePlaceholder: 'Value',
	save: 'Save query',
});
