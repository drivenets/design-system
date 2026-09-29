import {
	filterOperatorValues,
	type DsFilterCondition,
	type DsFilterField,
	type DsFilterOperatorValue,
} from '../ds-filters-bar.types';
import { QueryFailure } from './query-failure';
import type { DsFilterQueryResult, DsFilterQueryToken } from './query-language.types';
import type { RawQueryClause, RawQueryNode, RawQueryText } from './raw-query.types';
import { toConditions } from './to-conditions';
import { tokenize } from './tokenize';
import { validate } from './validate';

type SyntaxErrorCode =
	| 'unexpectedToken'
	| 'unexpectedEnd'
	| 'unterminatedString'
	| 'listExpected'
	| 'emptyList';

const LIST_OPERATORS: ReadonlyArray<DsFilterOperatorValue> = Object.freeze(['IN', 'NOT IN']);

const isOperatorValue = (value: string): value is DsFilterOperatorValue =>
	filterOperatorValues.some((operator) => operator === value);

const textOf = (token: DsFilterQueryToken): RawQueryText => ({
	text: token.value,
	from: token.from,
	to: token.to,
});

/**
 * Precedence: `AND` binds tighter than `OR`; parentheses group. Throws `QueryFailure`.
 */
export const parse = (query: string, tokens: ReadonlyArray<DsFilterQueryToken>): RawQueryNode => {
	let index = 0;

	const fail = (code: SyntaxErrorCode, at: { from: number; to: number }): never => {
		throw new QueryFailure(query, code, at.from, at.to);
	};

	const peek = (): DsFilterQueryToken | undefined => tokens[index];

	const failOn = (token: DsFilterQueryToken): never =>
		fail(token.kind === 'unterminated' ? 'unterminatedString' : 'unexpectedToken', token);

	const expectToken = (): DsFilterQueryToken =>
		peek() ?? fail('unexpectedEnd', { from: query.length, to: query.length });

	const expectKind = (kind: DsFilterQueryToken['kind']): DsFilterQueryToken => {
		const token = expectToken();

		if (token.kind !== kind) {
			failOn(token);
		}

		index += 1;

		return token;
	};

	const parseValue = (): RawQueryText => {
		const token = expectToken();

		if (token.kind !== 'string' && token.kind !== 'word') {
			return failOn(token);
		}

		index += 1;

		return textOf(token);
	};

	const parseList = (): { values: RawQueryClause['values']; to: number } => {
		const open = expectToken();

		if (open.kind !== 'openParen') {
			fail('listExpected', open);
		}

		index += 1;

		const close = peek();

		if (close?.kind === 'closeParen') {
			fail('emptyList', { from: open.from, to: close.to });
		}

		const first = parseValue();
		const rest: RawQueryText[] = [];

		while (peek()?.kind === 'comma') {
			index += 1;
			rest.push(parseValue());
		}

		return { values: [first, ...rest], to: expectKind('closeParen').to };
	};

	const parseSingle = (): { values: RawQueryClause['values']; to: number } => {
		const value = parseValue();

		return { values: [value], to: value.to };
	};

	const parseClause = (): RawQueryClause => {
		const field = expectKind('word');
		const operatorToken = expectKind('operator');
		const operatorText = operatorToken.value;

		if (!isOperatorValue(operatorText)) {
			return failOn(operatorToken);
		}

		const list = LIST_OPERATORS.includes(operatorText);
		const { values, to } = list ? parseList() : parseSingle();

		return {
			kind: 'clause',
			field: textOf(field),
			operator: { ...textOf(operatorToken), text: operatorText },
			values,
			list,
			from: field.from,
			to,
		};
	};

	const parsePrimary = (): RawQueryNode => {
		const token = expectToken();

		if (token.kind === 'openParen') {
			index += 1;

			const child = parseOr();

			expectKind('closeParen');

			return { kind: 'group', child };
		}

		if (token.kind === 'string') {
			index += 1;

			return { kind: 'search', text: token.value, from: token.from, to: token.to };
		}

		return token.kind === 'word' ? parseClause() : failOn(token);
	};

	const parseJoined = (kind: 'and' | 'or', parseOperand: () => RawQueryNode): RawQueryNode => {
		const first = parseOperand();
		const rest: RawQueryNode[] = [];

		while (peek()?.kind === kind) {
			index += 1;
			rest.push(parseOperand());
		}

		return rest.length ? { kind, children: [first, ...rest] } : first;
	};

	const parseAnd = () => parseJoined('and', parsePrimary);

	// A declaration, so the recursion from `parsePrimary` into groups can reach it
	function parseOr(): RawQueryNode {
		return parseJoined('or', parseAnd);
	}

	if (!tokens.length) {
		return { kind: 'and', children: [] };
	}

	const node = parseOr();
	const rest = peek();

	if (rest) {
		failOn(rest);
	}

	return node;
};

/**
 * Parses query text and checks it against the **Field schema**. `previous` conditions lend their
 * ids to parsed conditions with the same content.
 */
export const parseFilterQuery = (
	query: string,
	fields: ReadonlyArray<DsFilterField>,
	previous: ReadonlyArray<DsFilterCondition> = [],
): DsFilterQueryResult => {
	try {
		const node = validate(query, parse(query, tokenize(query)), fields);

		return { ok: true, node, conditions: toConditions(node, previous) };
	} catch (failure) {
		if (failure instanceof QueryFailure) {
			return { ok: false, error: failure.error };
		}

		throw failure;
	}
};
