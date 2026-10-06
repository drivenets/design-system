import type { CSSProperties } from 'react';

export interface DsFiltersBarBuilderLocale {
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

/**
 * Query builder view: builds one condition step by step. The field's type decides the steps —
 * compound: subfield, then operator and value; text, number and date: operator, then value;
 * enum: value. Date presets and enum options are offered on the value step.
 */
export interface DsFiltersBarBuilderProps {
	/**
	 * Field ids offered first, in this order — chosen by product or suggested by AI. Every field in
	 * the bar stays searchable.
	 * @default all fields, in `fields` order
	 */
	suggestedFields?: ReadonlyArray<string>;
	locale?: DsFiltersBarBuilderLocale;
	className?: string;
	style?: CSSProperties;
}
