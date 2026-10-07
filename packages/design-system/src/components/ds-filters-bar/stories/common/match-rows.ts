import type {
	DsFilterCondition,
	DsFilterField,
	DsFilterFieldCondition,
	DsFilterOperatorValue,
	DsFilterPin,
	DsFilterRange,
	DsFilterScalarField,
	DsFilterValue,
} from '../../ds-filters-bar.types';
import { parseFilterQuery, type DsFilterQueryNode } from '../../query-language';
import { daysBefore, STORY_TODAY } from './story-data';

/**
 * Example only. Result counts and row evaluation stay in product code (ADR-0005); the design
 * system ships no evaluator. A real app usually sends the **Filter document** to its backend.
 */
export interface MatchRowsOptions {
	fields: ReadonlyArray<DsFilterField>;
	/**
	 * Ignored while `query` is set: an **Advanced query** is the only source of the document
	 */
	conditions?: ReadonlyArray<DsFilterCondition>;
	query?: string | null;
	/**
	 * Pins that are switched on. Toggles in one field OR together, fields AND together, and both
	 * narrow what the document matched.
	 */
	activeToggles?: ReadonlyArray<DsFilterPin>;
}

/**
 * Inclusive, `null` for an open side. Dates are compared as epoch milliseconds of their day.
 */
interface Interval {
	from: number | null;
	to: number | null;
}

/**
 * An empty interval, for a value of the wrong shape
 */
const NEVER: Interval = Object.freeze({ from: Number.POSITIVE_INFINITY, to: Number.NEGATIVE_INFINITY });

const DATE_PRESET_DAYS: Readonly<Record<string, number>> = Object.freeze({
	today: 0,
	last7Days: 6,
	last30Days: 29,
});

const ISO_DAY_LENGTH = 10;

const dayOf = (isoDate: string) => Date.parse(`${isoDate.slice(0, ISO_DAY_LENGTH)}T00:00:00Z`);

const readValue = (row: object, field: string, subfield?: string): unknown => {
	const value = (row as Record<string, unknown>)[field];

	if (subfield === undefined) {
		return value;
	}

	return typeof value === 'object' && value !== null
		? (value as Record<string, unknown>)[subfield]
		: undefined;
};

const textsOf = (value: unknown): string[] => {
	if (typeof value === 'string') {
		return [value];
	}

	if (typeof value === 'number') {
		return [String(value)];
	}

	if (typeof value === 'object' && value !== null) {
		return Object.values(value as Record<string, unknown>).flatMap(textsOf);
	}

	return [];
};

const matchesSearch = (row: object, text: string) => {
	const needle = text.toLowerCase();

	return textsOf(row).some((value) => value.toLowerCase().includes(needle));
};

const scalarOf = (
	fields: ReadonlyArray<DsFilterField>,
	field: string,
	subfield?: string,
): DsFilterScalarField | undefined => {
	const match = fields.find((item) => item.id === field);

	if (match?.type !== 'compound') {
		return match;
	}

	return match.subfields.find((item) => item.id === subfield);
};

const isList = (value: DsFilterValue): value is ReadonlyArray<string> => Array.isArray(value);

const isRange = (value: DsFilterValue): value is DsFilterRange<number> | DsFilterRange<string> =>
	typeof value === 'object' && 'from' in value;

/**
 * A date value as the days it covers: a preset counts back from `STORY_TODAY`, a single date
 * covers its own day.
 */
const dateInterval = (value: DsFilterValue): Interval => {
	if (isRange(value)) {
		return {
			from: typeof value.from === 'string' ? dayOf(value.from) : null,
			to: typeof value.to === 'string' ? dayOf(value.to) : null,
		};
	}

	if (typeof value !== 'string') {
		return NEVER;
	}

	const presetDays = DATE_PRESET_DAYS[value];

	if (presetDays !== undefined) {
		return { from: dayOf(daysBefore(STORY_TODAY, presetDays)), to: dayOf(STORY_TODAY) };
	}

	return { from: dayOf(value), to: dayOf(value) };
};

const numberInterval = (value: DsFilterValue): Interval => {
	if (isRange(value)) {
		return {
			from: typeof value.from === 'number' ? value.from : null,
			to: typeof value.to === 'number' ? value.to : null,
		};
	}

	return typeof value === 'number' ? { from: value, to: value } : NEVER;
};

const compareToInterval = (actual: number, operator: DsFilterOperatorValue, { from, to }: Interval) => {
	const atOrAfterFrom = from === null || actual >= from;
	const atOrBeforeTo = to === null || actual <= to;

	switch (operator) {
		case '=':
			return atOrAfterFrom && atOrBeforeTo;
		case '!=':
			return !(atOrAfterFrom && atOrBeforeTo);
		case '>':
			return to !== null && actual > to;
		case '>=':
			return atOrAfterFrom;
		case '<':
			return from !== null && actual < from;
		case '<=':
			return atOrBeforeTo;
		default:
			return false;
	}
};

const matchesText = (actual: string, operator: DsFilterOperatorValue, expected: string) => {
	const value = actual.toLowerCase();
	const wanted = expected.toLowerCase();

	switch (operator) {
		case '=':
			return value === wanted;
		case '!=':
			return value !== wanted;
		case '~':
			return value.includes(wanted);
		case '!~':
			return !value.includes(wanted);
		default:
			return false;
	}
};

type FieldClause = Pick<DsFilterFieldCondition, 'field' | 'subfield' | 'operator' | 'value'>;

/**
 * One clause, the same shape whether it came from a **Filter condition** or a query AST node
 */
const matchesClause = (row: object, clause: FieldClause, fields: ReadonlyArray<DsFilterField>) => {
	const scalar = scalarOf(fields, clause.field, clause.subfield);
	const actual = readValue(row, clause.field, clause.subfield);

	if (!scalar) {
		return false;
	}

	switch (scalar.type) {
		case 'enum': {
			const included = typeof actual === 'string' && isList(clause.value) && clause.value.includes(actual);

			return clause.operator === '!=' || clause.operator === 'NOT IN' ? !included : included;
		}
		case 'text':
			return (
				typeof actual === 'string' &&
				typeof clause.value === 'string' &&
				matchesText(actual, clause.operator, clause.value)
			);
		case 'number':
			return (
				typeof actual === 'number' && compareToInterval(actual, clause.operator, numberInterval(clause.value))
			);
		case 'date':
			return (
				typeof actual === 'string' &&
				compareToInterval(dayOf(actual), clause.operator, dateInterval(clause.value))
			);
		default:
			return false;
	}
};

const matchesCondition = (row: object, condition: DsFilterCondition, fields: ReadonlyArray<DsFilterField>) =>
	condition.kind === 'search' ? matchesSearch(row, condition.text) : matchesClause(row, condition, fields);

const matchesNode = (row: object, node: DsFilterQueryNode, fields: ReadonlyArray<DsFilterField>): boolean => {
	switch (node.kind) {
		case 'clause':
			return matchesClause(row, node, fields);
		case 'search':
			return matchesSearch(row, node.text);
		case 'and':
			return node.children.every((child) => matchesNode(row, child, fields));
		case 'or':
			return node.children.some((child) => matchesNode(row, child, fields));
		case 'group':
			return matchesNode(row, node.child, fields);
		default:
			return false;
	}
};

/**
 * A pin is a field option, so on an enum field it means `= option`, and on a date field `= preset`
 */
const matchesPin = (row: object, pin: DsFilterPin, fields: ReadonlyArray<DsFilterField>) => {
	const scalar = scalarOf(fields, pin.field);
	const value = scalar?.type === 'enum' ? [pin.value] : pin.value;

	return matchesClause(row, { field: pin.field, operator: '=', value }, fields);
};

const groupByField = (pins: ReadonlyArray<DsFilterPin>) => {
	const groups = new Map<string, DsFilterPin[]>();

	for (const pin of pins) {
		groups.set(pin.field, [...(groups.get(pin.field) ?? []), pin]);
	}

	return [...groups.values()];
};

/**
 * Example matcher for stories: the rows the **Filter document** (conditions, or the Advanced
 * query while one is set) matches, narrowed by the active pinned toggles. An invalid query never
 * reaches the document, so one that fails to parse filters nothing.
 */
export const matchRows = <TRow extends object>(
	rows: ReadonlyArray<TRow>,
	{ fields, conditions = [], query = null, activeToggles = [] }: MatchRowsOptions,
): TRow[] => {
	const parsed = query === null ? null : parseFilterQuery(query, fields);
	const toggleGroups = groupByField(activeToggles);

	const matchesDocument = (row: TRow) => {
		if (parsed) {
			return !parsed.ok || matchesNode(row, parsed.node, fields);
		}

		return conditions.every((condition) => matchesCondition(row, condition, fields));
	};

	const matchesToggles = (row: TRow) =>
		toggleGroups.every((group) => group.some((pin) => matchesPin(row, pin, fields)));

	return rows.filter((row) => matchesDocument(row) && matchesToggles(row));
};
