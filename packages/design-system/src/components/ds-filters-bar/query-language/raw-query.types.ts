import type { DsFilterOperatorValue } from '../ds-filters-bar.types';
import type { DsFilterQuerySearch } from './query-language.types';

export interface RawQueryText {
	text: string;
	from: number;
	to: number;
}

/**
 * A clause as written, before its field, operator and value are checked against the schema
 */
export interface RawQueryClause {
	kind: 'clause';
	field: RawQueryText;
	operator: RawQueryText & { text: DsFilterOperatorValue };
	values: readonly [RawQueryText, ...RawQueryText[]];
	/**
	 * Whether the values were written as a parenthesized list
	 */
	list: boolean;
	from: number;
	to: number;
}

export type RawQueryNode =
	| RawQueryClause
	| DsFilterQuerySearch
	| { kind: 'and' | 'or'; children: ReadonlyArray<RawQueryNode> }
	| { kind: 'group'; child: RawQueryNode };
