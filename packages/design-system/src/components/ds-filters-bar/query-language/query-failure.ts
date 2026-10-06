import type { DsFilterQueryError, DsFilterQueryErrorCode } from './query-language.types';

/**
 * Thrown inside the parser and validator to unwind to `parseFilterQuery`, which returns it as a
 * result. Never escapes the module.
 */
export class QueryFailure extends Error {
	readonly error: DsFilterQueryError;

	/**
	 * `text` defaults to the query text between `from` and `to`
	 */
	constructor(query: string, code: DsFilterQueryErrorCode, from: number, to: number, text?: string) {
		super(code);
		this.error = { code, from, to, text: text ?? query.slice(from, to) };
	}
}
