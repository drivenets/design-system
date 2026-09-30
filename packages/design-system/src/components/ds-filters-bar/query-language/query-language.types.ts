import type { DsFilterCondition, DsFilterOperatorValue, DsFilterValue } from '../ds-filters-bar.types';

export type DsFilterQueryTokenKind =
	| 'word'
	| 'string'
	/**
	 * A string with no closing quote
	 */
	| 'unterminated'
	| 'operator'
	| 'and'
	| 'or'
	/**
	 * `NOT` outside `NOT IN`
	 */
	| 'not'
	| 'openParen'
	| 'closeParen'
	| 'comma'
	| 'unknown';

export interface DsFilterQueryToken {
	kind: DsFilterQueryTokenKind;
	/**
	 * Unescaped text for strings, upper case for keywords and operators, the source text otherwise
	 */
	value: string;
	/**
	 * Offset of the first character in the query
	 */
	from: number;
	/**
	 * Offset after the last character
	 */
	to: number;
}

/**
 * A clause on a **Field schema** field, with ids resolved and the value in the shape a
 * **Filter condition** holds
 */
export interface DsFilterQueryClause {
	kind: 'clause';
	field: string;
	subfield?: string;
	operator: DsFilterOperatorValue;
	value: DsFilterValue;
	from: number;
	to: number;
}

/**
 * A lone quoted string: free text search
 */
export interface DsFilterQuerySearch {
	kind: 'search';
	text: string;
	from: number;
	to: number;
}

export interface DsFilterQueryAnd {
	kind: 'and';
	/**
	 * Empty for a blank query
	 */
	children: ReadonlyArray<DsFilterQueryNode>;
}

export interface DsFilterQueryOr {
	kind: 'or';
	children: ReadonlyArray<DsFilterQueryNode>;
}

export interface DsFilterQueryGroup {
	kind: 'group';
	child: DsFilterQueryNode;
}

export type DsFilterQueryNode =
	| DsFilterQueryClause
	| DsFilterQuerySearch
	| DsFilterQueryAnd
	| DsFilterQueryOr
	| DsFilterQueryGroup;

export const filterQueryErrorCodes = [
	'unexpectedToken',
	'unexpectedEnd',
	'unterminatedString',
	'unknownField',
	'unknownSubfield',
	'subfieldRequired',
	'operatorNotAllowed',
	'unknownOption',
	'notANumber',
	'invalidDate',
	'listExpected',
	'emptyList',
] as const;
export type DsFilterQueryErrorCode = (typeof filterQueryErrorCodes)[number];

export interface DsFilterQueryError {
	code: DsFilterQueryErrorCode;
	/**
	 * Offset of the first character at fault
	 */
	from: number;
	/**
	 * Offset after the last character at fault
	 */
	to: number;
	/**
	 * The query text at fault, without quotes around a value. Empty at the end of the query.
	 */
	text: string;
}

export type DsFilterQueryResult =
	| {
			ok: true;
			node: DsFilterQueryNode;
			/**
			 * The query as **Filter conditions**, or `null` when it uses `OR` or parentheses, which
			 * conditions cannot hold
			 */
			conditions: ReadonlyArray<DsFilterCondition> | null;
	  }
	| { ok: false; error: DsFilterQueryError };
