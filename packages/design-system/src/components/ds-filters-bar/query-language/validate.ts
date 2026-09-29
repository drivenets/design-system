import type {
	DsFilterField,
	DsFilterOperatorValue,
	DsFilterOption,
	DsFilterScalarField,
	DsFilterValue,
} from '../ds-filters-bar.types';
import type { RawQueryClause, RawQueryNode, RawQueryText } from './raw-query.types';
import { QueryFailure } from './query-failure';
import type { DsFilterQueryClause, DsFilterQueryErrorCode, DsFilterQueryNode } from './query-language.types';

type SchemaErrorCode = Extract<
	DsFilterQueryErrorCode,
	| 'unknownField'
	| 'unknownSubfield'
	| 'subfieldRequired'
	| 'operatorNotAllowed'
	| 'unknownOption'
	| 'notANumber'
	| 'invalidDate'
>;

interface ResolvedField {
	field: string;
	subfield?: string;
	scalar: DsFilterScalarField;
}

const SUBFIELD_SEPARATOR = '.';
const NUMBER = /^-?\d+(\.\d+)?([eE][+-]?\d+)?$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})?)?$/;

const sameId = (a: string, b: string) => a.toLowerCase() === b.toLowerCase();

const findOption = (options: ReadonlyArray<DsFilterOption>, text: string) =>
	options.find((option) => sameId(option.value, text)) ??
	options.find((option) => sameId(option.label, text));

const ISO_DAY_LENGTH = 10;

/**
 * `Date.parse` rolls impossible days over (`2026-02-30` becomes March 2), so the day must survive
 * the round trip too.
 */
const isIsoDate = (text: string) => {
	if (!ISO_DATE.test(text) || Number.isNaN(Date.parse(text))) {
		return false;
	}

	const day = text.slice(0, ISO_DAY_LENGTH);

	return new Date(`${day}T00:00:00Z`).toISOString().startsWith(day);
};

const IMPLIED_OPERATORS: Readonly<Partial<Record<DsFilterOperatorValue, DsFilterOperatorValue>>> =
	Object.freeze({
		IN: '=',
		'NOT IN': '!=',
		'>=': '=',
		'<=': '=',
	});

/**
 * The declared operator a clause falls back to when the field lacks the written one. The query
 * language writes an enum `=` with several values as `IN` and a range as `>=` and `<=`, so those
 * must parse back on a field that declares only `=` or `!=`.
 */
const impliedOperator = (scalar: DsFilterScalarField, written: DsFilterOperatorValue) => {
	const plain = IMPLIED_OPERATORS[written];
	const listOperator = written === 'IN' || written === 'NOT IN';
	const fits = listOperator ? scalar.type === 'enum' : scalar.type === 'number' || scalar.type === 'date';

	return plain && fits && scalar.operators.some((item) => item.value === plain) ? plain : null;
};

/**
 * `>=` and `<=` under an implied `=` are the open ends of a range
 */
const impliedValue = (written: DsFilterOperatorValue, value: DsFilterValue): DsFilterValue => {
	if (written !== '>=' && written !== '<=') {
		return value;
	}

	const side = written === '>=' ? 'from' : 'to';

	// One branch per end type, since a range holds numbers or dates, never both
	if (typeof value === 'number') {
		return side === 'from' ? { from: value, to: null } : { from: null, to: value };
	}

	if (typeof value === 'string') {
		return side === 'from' ? { from: value, to: null } : { from: null, to: value };
	}

	return value;
};

/**
 * Checks every clause against the **Field schema** and resolves ids and values to their canonical
 * form. Throws `QueryFailure`.
 */
export const validate = (
	query: string,
	root: RawQueryNode,
	fields: ReadonlyArray<DsFilterField>,
): DsFilterQueryNode => {
	const fail = (code: SchemaErrorCode, at: RawQueryText): never => {
		throw new QueryFailure(query, code, at.from, at.to, at.text);
	};

	/**
	 * An id matches case-insensitively. A dotted path names a compound field and its subfield.
	 */
	const resolveField = (path: RawQueryText): ResolvedField => {
		const exact = fields.find((item) => sameId(item.id, path.text));

		if (exact?.type === 'compound') {
			return fail('subfieldRequired', path);
		}

		if (exact) {
			return { field: exact.id, scalar: exact };
		}

		const separator = path.text.indexOf(SUBFIELD_SEPARATOR);
		const parent =
			separator === -1 ? undefined : fields.find((item) => sameId(item.id, path.text.slice(0, separator)));

		if (!parent) {
			return fail('unknownField', path);
		}

		const subfieldPath = {
			text: path.text.slice(separator + 1),
			from: path.from + separator + 1,
			to: path.to,
		};
		const subfield =
			parent.type === 'compound'
				? parent.subfields.find((item) => sameId(item.id, subfieldPath.text))
				: undefined;

		if (!subfield) {
			return fail('unknownSubfield', subfieldPath);
		}

		return { field: parent.id, subfield: subfield.id, scalar: subfield };
	};

	const resolveValue = (scalar: DsFilterScalarField, clause: RawQueryClause): DsFilterValue => {
		const [first] = clause.values;

		switch (scalar.type) {
			case 'enum':
				return clause.values.map(
					(value) => findOption(scalar.options, value.text)?.value ?? fail('unknownOption', value),
				);
			case 'number': {
				const value = Number(first.text);

				return NUMBER.test(first.text) && Number.isFinite(value) ? value : fail('notANumber', first);
			}
			case 'date': {
				const preset = findOption(scalar.presets ?? [], first.text);

				if (preset) {
					return preset.value;
				}

				return isIsoDate(first.text) ? first.text : fail('invalidDate', first);
			}
			default:
				return first.text;
		}
	};

	const validateClause = (clause: RawQueryClause): DsFilterQueryClause => {
		const { field, subfield, scalar } = resolveField(clause.field);
		const written = clause.operator.text;

		if (clause.list && scalar.type !== 'enum') {
			fail('operatorNotAllowed', clause.operator);
		}

		const declared = scalar.operators.some((item) => item.value === written);
		const operator = declared
			? written
			: (impliedOperator(scalar, written) ?? fail('operatorNotAllowed', clause.operator));
		const value = resolveValue(scalar, clause);
		const impliedRange = !declared && (written === '>=' || written === '<=');

		// A preset is not an ISO date, so it cannot be an open end of a range
		if (impliedRange && typeof value === 'string' && !isIsoDate(value)) {
			fail('operatorNotAllowed', clause.operator);
		}

		return {
			kind: 'clause',
			field,
			...(subfield && { subfield }),
			operator,
			value: declared ? value : impliedValue(written, value),
			from: clause.from,
			to: clause.to,
		};
	};

	const validateNode = (node: RawQueryNode): DsFilterQueryNode => {
		switch (node.kind) {
			case 'clause':
				return validateClause(node);
			case 'search':
				return node;
			case 'group':
				return { kind: 'group', child: validateNode(node.child) };
			default:
				return { kind: node.kind, children: node.children.map(validateNode) };
		}
	};

	return validateNode(root);
};
