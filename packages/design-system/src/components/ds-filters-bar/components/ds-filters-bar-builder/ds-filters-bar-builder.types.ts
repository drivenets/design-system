import type { CSSProperties } from 'react';

export interface DsFiltersBarBuilderLocale {
	title?: string;
	searchField?: string;
	selectField?: string;
	searchSubfield?: string;
	selectSubfield?: string;
	searchOperator?: string;
	selectOperator?: string;
	valuePlaceholder?: string;
	save?: string;
}

export const defaultDsFiltersBarBuilderLocale: Required<DsFiltersBarBuilderLocale> = Object.freeze({
	title: 'Query builder',
	searchField: 'Search field',
	selectField: 'Select a field',
	searchSubfield: 'Search subfield',
	selectSubfield: 'Select a subfield',
	searchOperator: 'Search operator',
	selectOperator: 'Select an operator',
	valuePlaceholder: 'Value',
	save: 'Save query',
});

/**
 * Query builder view: builds one condition step by step. The field's type decides the steps —
 * compound: subfield, operator, value; text and number: operator, value; enum: value.
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
