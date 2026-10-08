import type { DsFilterOperatorValue } from '../../ds-filters-bar.types';
import type { DsFilterQueryErrorCode } from '../../query-language/query-language.types';

export interface DsFiltersBarQueryLocale {
	/**
	 * Accessible name of the query field
	 */
	label?: string;
	placeholder?: string;
	/**
	 * Placeholder of the search box in the expanded editor
	 */
	searchPlaceholder?: string;
	/**
	 * Message shown under the field for an invalid query. Receives the query text at fault, which
	 * is empty at the end of the query.
	 */
	errors?: Partial<Record<DsFilterQueryErrorCode, (text: string) => string>>;
	/**
	 * Accessible name of the syntax help button and title of the syntax reference
	 */
	help?: string;
	helpOperators?: string;
	/**
	 * How clauses combine, and that `OR` and parentheses lock the other views
	 */
	helpCombine?: string;
	/**
	 * How free text search is written
	 */
	helpSearch?: string;
	helpExample?: string;
	/**
	 * Words for each operator in the syntax reference
	 */
	operators?: Partial<Record<DsFilterOperatorValue, string>>;
}

export const defaultDsFiltersBarQueryLocale = Object.freeze({
	label: 'Advanced query',
	placeholder: 'status = "Active" AND trigger = "Scheduled"',
	searchPlaceholder: 'Search in query',
	errors: Object.freeze({
		unexpectedToken: (text: string) => `Unexpected “${text}”`,
		unexpectedEnd: () => 'The query is incomplete',
		unterminatedString: () => 'Close the quoted value with "',
		unknownField: (text: string) => `Unknown field “${text}”`,
		unknownSubfield: (text: string) => `Unknown subfield “${text}”`,
		subfieldRequired: (text: string) => `Name a subfield of “${text}” after a dot`,
		operatorNotAllowed: (text: string) => `“${text}” can’t be used with this field`,
		unknownOption: (text: string) => `“${text}” is not a value of this field`,
		notANumber: (text: string) => `“${text}” is not a number`,
		invalidDate: (text: string) => `“${text}” is not a date or a date preset`,
		listExpected: () => 'Put the values in parentheses, as in IN ("a", "b")',
		emptyList: () => 'Add at least one value to the list',
	}),
	help: 'Query syntax',
	helpOperators: 'Operators',
	helpCombine:
		'Join clauses with AND or OR, and group them with parentheses. OR and parentheses lock the filters and builder views.',
	helpSearch: 'A quoted value on its own searches all text, as in "timeout".',
	helpExample: 'Example',
	operators: Object.freeze({
		'=': 'equals',
		'!=': 'not equals',
		'>': 'greater than',
		'>=': 'greater than or equals',
		'<': 'less than',
		'<=': 'less than or equals',
		IN: 'is one of',
		'NOT IN': 'is none of',
		'~': 'contains',
		'!~': 'does not contain',
	}),
}) satisfies Required<DsFiltersBarQueryLocale>;
