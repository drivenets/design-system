import type {
	DsFilterCondition,
	DsFilterDocument,
	DsFilterFieldCondition,
	DsFilterOperatorValue,
	DsFilterPin,
	DsFilterRange,
	DsFilterResolvedField,
	DsFilterResolvedScalarField,
	DsFilterValue,
} from '../ds-filters-bar.types';
import { toFilterDocument } from '../filter-document';
import { parseFilterQuery, type DsFilterQueryNode } from '../query-language';
import { resolveFields } from '../resolve-fields';
import { builtInPresetDays, type DayInterval as Interval } from './date-presets';
import type { DsFilterRowsOptions, DsFilterRowsResult } from './row-matcher.types';

type FieldClause = Pick<DsFilterFieldCondition, 'field' | 'subfield' | 'operator' | 'value'>;

interface MatchContext<TRow> {
	fields: ReadonlyArray<DsFilterResolvedField>;
	getValue: NonNullable<DsFilterRowsOptions<TRow>['getValue']>;
	resolveDatePreset: DsFilterRowsOptions<TRow>['resolveDatePreset'];
	now: Date;
}

/**
 * Length of `YYYY-MM-DD`, the day part of an ISO 8601 date
 */
const ISO_DAY_LENGTH = 10;

const DAY_MS = 86_400_000;

/**
 * A trailing `Z` or `±hh:mm` / `±hhmm` offset
 */
const UTC_OFFSET = /(?:Z|[+-]\d{2}:?\d{2})$/i;

/**
 * The UTC calendar day an ISO 8601 value falls on, as its midnight in ms. A date-only value is its
 * own day; a timestamp is read in full, with its offset, and floored to the UTC day. A timestamp
 * without an offset is read as UTC, so the result never depends on the local time zone.
 */
const dayOf = (isoDate: string) => {
	if (isoDate.length === ISO_DAY_LENGTH) {
		return Date.parse(`${isoDate}T00:00:00Z`);
	}

	const time = Date.parse(UTC_OFFSET.test(isoDate) ? isoDate : `${isoDate}Z`);

	return Math.floor(time / DAY_MS) * DAY_MS;
};

const readValue = (row: object, field: string, subfield?: string): unknown => {
	const value: unknown = (row as Record<string, unknown>)[field];

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
		return Object.values(value).flatMap(textsOf);
	}

	return [];
};

const matchesSearch = (row: object, text: string) => {
	const needle = text.toLowerCase();

	return textsOf(row).some((value) => value.toLowerCase().includes(needle));
};

const scalarOf = (
	fields: ReadonlyArray<DsFilterResolvedField>,
	field: string,
	subfield?: string,
): DsFilterResolvedScalarField | undefined => {
	const match = fields.find((item) => item.id === field);

	if (match?.type !== 'compound') {
		return match;
	}

	return match.subfields.find((item) => item.id === subfield);
};

const isList = (value: DsFilterValue): value is ReadonlyArray<string> => Array.isArray(value);

const isRange = (value: DsFilterValue): value is DsFilterRange<number> | DsFilterRange<string> =>
	typeof value === 'object' && 'from' in value;

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

/**
 * A row may hold one option or several; it is included when any of them is one of `expected`
 */
const matchesEnum = (actual: unknown, operator: DsFilterOperatorValue, expected: DsFilterValue) => {
	const values: unknown[] = Array.isArray(actual) ? actual : [actual];
	const included =
		isList(expected) && values.some((value) => typeof value === 'string' && expected.includes(value));

	return operator === '!=' || operator === 'NOT IN' ? !included : included;
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

/**
 * `null` for a value of the wrong shape, which matches nothing
 */
const numberInterval = (value: DsFilterValue): Interval | null => {
	if (isRange(value)) {
		return {
			from: typeof value.from === 'number' ? value.from : null,
			to: typeof value.to === 'number' ? value.to : null,
		};
	}

	return typeof value === 'number' ? { from: value, to: value } : null;
};

const dayInterval = ({ from, to }: DsFilterRange<unknown>): Interval => ({
	from: typeof from === 'string' ? dayOf(from) : null,
	to: typeof to === 'string' ? dayOf(to) : null,
});

/**
 * The days a date value covers: a preset of the field as `resolveDatePreset` resolves it, or else
 * as a built-in preset on the day of `now`; a single date its own day. `null` for a value of the
 * wrong shape or a preset that does not resolve.
 */
const dateInterval = <TRow>(
	value: DsFilterValue,
	field: Extract<DsFilterResolvedScalarField, { type: 'date' }>,
	{ resolveDatePreset, now }: MatchContext<TRow>,
): Interval | null => {
	if (isRange(value)) {
		return dayInterval(value);
	}

	if (typeof value !== 'string') {
		return null;
	}

	if (!field.presets.some((preset) => preset.value === value)) {
		return { from: dayOf(value), to: dayOf(value) };
	}

	const resolved = resolveDatePreset?.(value, field);

	return resolved ? dayInterval(resolved) : builtInPresetDays(value, now);
};

const matchesInterval = (actual: number, operator: DsFilterOperatorValue, interval: Interval | null) =>
	interval !== null && compareToInterval(actual, operator, interval);

/**
 * One clause, the same shape whether it came from a **Filter condition** or a query AST node
 */
const matchesClause = <TRow extends object>(row: TRow, clause: FieldClause, context: MatchContext<TRow>) => {
	const scalar = scalarOf(context.fields, clause.field, clause.subfield);

	if (!scalar) {
		return false;
	}

	const actual = context.getValue(row, clause.field, clause.subfield);

	switch (scalar.type) {
		case 'enum':
			return matchesEnum(actual, clause.operator, clause.value);
		case 'text':
			return (
				typeof actual === 'string' &&
				typeof clause.value === 'string' &&
				matchesText(actual, clause.operator, clause.value)
			);
		case 'number':
			return (
				typeof actual === 'number' && matchesInterval(actual, clause.operator, numberInterval(clause.value))
			);
		case 'date':
			return (
				typeof actual === 'string' &&
				matchesInterval(dayOf(actual), clause.operator, dateInterval(clause.value, scalar, context))
			);
		default:
			return false;
	}
};

const matchesCondition = <TRow extends object>(
	row: TRow,
	condition: DsFilterCondition,
	context: MatchContext<TRow>,
) =>
	condition.kind === 'search' ? matchesSearch(row, condition.text) : matchesClause(row, condition, context);

const matchesNode = <TRow extends object>(
	row: TRow,
	node: DsFilterQueryNode,
	context: MatchContext<TRow>,
): boolean => {
	switch (node.kind) {
		case 'clause':
			return matchesClause(row, node, context);
		case 'search':
			return matchesSearch(row, node.text);
		case 'and':
			return node.children.every((child) => matchesNode(row, child, context));
		case 'or':
			return node.children.some((child) => matchesNode(row, child, context));
		case 'group':
			return matchesNode(row, node.child, context);
		default:
			return false;
	}
};

/**
 * Whether a row matches the **Filter document**. An invalid query never reaches the document, so
 * one that fails to parse filters nothing.
 */
const documentMatcher = <TRow extends object>(
	{ conditions, query }: DsFilterDocument,
	context: MatchContext<TRow>,
): ((row: TRow) => boolean) => {
	if (query === null) {
		return (row) => conditions.every((condition) => matchesCondition(row, condition, context));
	}

	const parsed = parseFilterQuery(query, context.fields);

	if (!parsed.ok) {
		return () => true;
	}

	return (row) => matchesNode(row, parsed.node, context);
};

/**
 * A pin is a field option, so on an enum field it means `= option`, and on a date field `= preset`
 */
const matchesPin = <TRow extends object>(row: TRow, pin: DsFilterPin, context: MatchContext<TRow>) => {
	const scalar = scalarOf(context.fields, pin.field);
	const value = scalar?.type === 'enum' ? [pin.value] : pin.value;

	return matchesClause(row, { field: pin.field, operator: '=', value }, context);
};

const groupByField = (pins: ReadonlyArray<DsFilterPin>) => {
	const groups = new Map<string, DsFilterPin[]>();

	for (const pin of pins) {
		groups.set(pin.field, [...(groups.get(pin.field) ?? []), pin]);
	}

	return [...groups.values()];
};

/**
 * The **Row matcher** for client-side data: the rows the **Filter document** matches, narrowed by
 * the active toggles, and each **Pin**'s count for `DsFiltersBar`'s `getPinCount`. Dates compare as
 * UTC calendar days: a date-only string is its own day, and a timestamp is read with its offset (as
 * UTC when it has none) and floored to its UTC day.
 */
export const filterRows = <TRow extends object>(
	rows: ReadonlyArray<TRow>,
	{
		fields,
		value,
		activeToggles = [],
		getValue = readValue,
		resolveDatePreset,
		now = new Date(),
	}: DsFilterRowsOptions<TRow>,
): DsFilterRowsResult<TRow> => {
	const context: MatchContext<TRow> = { fields: resolveFields(fields), getValue, resolveDatePreset, now };
	const documentRows = rows.filter(documentMatcher(toFilterDocument(value), context));
	// The bar hides pins on fields missing from `fields`, so their toggles do not narrow either.
	const toggleGroups = groupByField(
		activeToggles.filter((pin) => context.fields.some((field) => field.id === pin.field)),
	);
	const pinCounts = new Map<string, number>();

	const getPinCount = (pin: DsFilterPin) => {
		const key = JSON.stringify([pin.field, pin.value]);
		const cached = pinCounts.get(key);

		if (cached !== undefined) {
			return cached;
		}

		const count = documentRows.filter((row) => matchesPin(row, pin, context)).length;

		pinCounts.set(key, count);

		return count;
	};

	return {
		rows: documentRows.filter((row) =>
			toggleGroups.every((group) => group.some((pin) => matchesPin(row, pin, context))),
		),
		getPinCount,
	};
};
