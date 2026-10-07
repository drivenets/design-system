import type { CSSProperties } from 'react';
import {
	defaultDsFiltersBarConditionChipsLocale,
	type DsFiltersBarConditionChipsLocale,
} from '../ds-filters-bar-condition-chips';

/**
 * `addFilter` and the chip strings are shared with the filters view's locale; the rest words the
 * query builder dialog.
 */
export interface DsFiltersBarBuilderLocale extends DsFiltersBarConditionChipsLocale {
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
	...defaultDsFiltersBarConditionChipsLocale,
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
 * Builder view: the add button and the same condition chips as the filters view. The add button
 * opens the query builder dialog empty to add a condition; a field chip opens it filled from that
 * condition, and Save replaces it. The dialog builds one condition step by step — the field's type
 * decides the steps: compound: subfield, then operator and value; text, number and date: operator,
 * then value; enum: value. Date presets and enum options are offered on the value step. A condition
 * the dialog cannot hold, such as several enum values or a range, opens at its value step with the
 * value empty. Save and close keep the builder view. Renders nothing while an Advanced query is the
 * source.
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
