import type { DsFilterQueryToken } from './query-language.types';

const QUOTE = '"';
const ESCAPE = '\\';
const WHITESPACE = /\s/;
const WORD_BREAK = /[\s()",=!<>~]/;

const PUNCTUATION: Readonly<Record<string, DsFilterQueryToken['kind']>> = Object.freeze({
	'(': 'openParen',
	')': 'closeParen',
	',': 'comma',
});

// Longest first, so `>=` wins over `>`
const SYMBOL_OPERATORS = Object.freeze(['!=', '!~', '>=', '<=', '=', '>', '<', '~']);

const readString = (query: string, from: number): DsFilterQueryToken => {
	let value = '';
	let index = from + 1;

	while (index < query.length) {
		const char = query.charAt(index);

		if (char === ESCAPE && index + 1 < query.length) {
			value += query.charAt(index + 1);
			index += 2;
			continue;
		}

		if (char === QUOTE) {
			return { kind: 'string', value, from, to: index + 1 };
		}

		value += char;
		index += 1;
	}

	return { kind: 'unterminated', value, from, to: query.length };
};

const readWord = (query: string, from: number): DsFilterQueryToken => {
	let to = from;

	while (to < query.length && !WORD_BREAK.test(query.charAt(to))) {
		to += 1;
	}

	return { kind: 'word', value: query.slice(from, to), from, to };
};

const skipWhitespace = (query: string, from: number) => {
	let index = from;

	while (index < query.length && WHITESPACE.test(query.charAt(index))) {
		index += 1;
	}

	return index;
};

/**
 * Keywords are case-insensitive. `NOT` only means something as part of `NOT IN`.
 */
const classifyWord = (query: string, word: DsFilterQueryToken): DsFilterQueryToken => {
	const keyword = word.value.toUpperCase();

	if (keyword === 'AND' || keyword === 'OR') {
		return { ...word, kind: keyword === 'AND' ? 'and' : 'or', value: keyword };
	}

	if (keyword === 'IN') {
		return { ...word, kind: 'operator', value: 'IN' };
	}

	if (keyword !== 'NOT') {
		return word;
	}

	const next = readWord(query, skipWhitespace(query, word.to));

	if (next.value.toUpperCase() === 'IN') {
		return { kind: 'operator', value: 'NOT IN', from: word.from, to: next.to };
	}

	return { ...word, kind: 'not', value: keyword };
};

/**
 * Never throws: text the query language does not know becomes an `unknown` or `unterminated`
 * token, so the tokens also describe a query that is still being typed.
 */
export const tokenize = (query: string): ReadonlyArray<DsFilterQueryToken> => {
	const tokens: DsFilterQueryToken[] = [];
	let index = skipWhitespace(query, 0);

	while (index < query.length) {
		const char = query.charAt(index);
		const punctuation = PUNCTUATION[char];
		const operator = SYMBOL_OPERATORS.find((symbol) => query.startsWith(symbol, index));

		let token: DsFilterQueryToken;

		if (punctuation) {
			token = { kind: punctuation, value: char, from: index, to: index + 1 };
		} else if (char === QUOTE) {
			token = readString(query, index);
		} else if (operator) {
			token = { kind: 'operator', value: operator, from: index, to: index + operator.length };
		} else if (WORD_BREAK.test(char)) {
			token = { kind: 'unknown', value: char, from: index, to: index + 1 };
		} else {
			token = classifyWord(query, readWord(query, index));
		}

		tokens.push(token);
		index = skipWhitespace(query, token.to);
	}

	return tokens;
};
