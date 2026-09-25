import {
	filtersBarViews,
	type DsFilterCondition,
	type DsFilterField,
	type DsFilterOption,
	type DsFilterRange,
	type DsFilterScalarField,
	type DsFilterSearchCondition,
	type DsFilterValue,
	type DsFiltersBarView,
} from './ds-filters-bar.types';

const ID_RANDOM_WORDS = 2;
const HEX_RADIX = 16;

const QUERY_LOCKED_VIEWS: ReadonlyArray<DsFiltersBarView> = Object.freeze(['filters', 'builder']);
const NO_LOCKED_VIEWS: ReadonlyArray<DsFiltersBarView> = Object.freeze([]);

export const isFiltersBarView = (value: string | null): value is DsFiltersBarView =>
	filtersBarViews.some((view) => view === value);

/**
 * Blank query text is not an edited query: it hands control back to the conditions.
 */
export const normalizeQuery = (query: string | null): string | null => (query?.trim() ? query : null);

export const lockedViewsFor = (query: string | null): ReadonlyArray<DsFiltersBarView> =>
	query === null ? NO_LOCKED_VIEWS : QUERY_LOCKED_VIEWS;

/**
 * Random, so ids stay unique across reloads and conditions restored from a **Saved filter**.
 * `crypto.randomUUID` is avoided because it needs a secure context.
 */
export const createConditionId = (): string => {
	const words = crypto.getRandomValues(new Uint32Array(ID_RANDOM_WORDS));

	return `condition-${Array.from(words, (word) => word.toString(HEX_RADIX)).join('')}`;
};

export const createSearchCondition = (text: string): DsFilterSearchCondition | null => {
	const trimmed = text.trim();

	if (!trimmed) {
		return null;
	}

	return { kind: 'search', id: createConditionId(), text: trimmed };
};

export const appendCondition = (
	conditions: ReadonlyArray<DsFilterCondition>,
	condition: DsFilterCondition,
): ReadonlyArray<DsFilterCondition> => [...conditions, condition];

export const replaceCondition = (
	conditions: ReadonlyArray<DsFilterCondition>,
	condition: DsFilterCondition,
): ReadonlyArray<DsFilterCondition> =>
	conditions.map((item) => (item.id === condition.id ? condition : item));

export const removeConditionById = (
	conditions: ReadonlyArray<DsFilterCondition>,
	id: string,
): ReadonlyArray<DsFilterCondition> => conditions.filter((item) => item.id !== id);

/**
 * Shared by the summary line and the chips, so every view words a condition the same way
 */
export interface DsFilterConditionDescription {
	/**
	 * Field then subfield labels, for example `['Input', 'Name']`. Empty for search conditions.
	 */
	fieldPath: ReadonlyArray<string>;
	/**
	 * Operator in words, for example `not equals`
	 */
	operator?: string;
	/**
	 * Operator in compact form for chips, for example `≠`
	 */
	operatorSymbol?: string;
	value: string;
}

const RANGE_SEPARATOR = ' – ';

const labelFor = (options: ReadonlyArray<DsFilterOption>, value: string) =>
	options.find((option) => option.value === value)?.label ?? value;

const isRange = (value: DsFilterValue): value is DsFilterRange<number> | DsFilterRange<string> =>
	typeof value === 'object' && 'from' in value;

const formatValue = (value: DsFilterValue, field: DsFilterScalarField | undefined): string => {
	if (isRange(value)) {
		return [value.from ?? '', value.to ?? ''].map(String).join(RANGE_SEPARATOR).trim();
	}

	if (typeof value === 'object') {
		const options = field?.type === 'enum' ? field.options : [];

		return value.map((item) => labelFor(options, item)).join(', ');
	}

	if (typeof value === 'string' && field?.type === 'date') {
		return labelFor(field.presets ?? [], value);
	}

	return String(value);
};

/**
 * Falls back to raw ids when a field, subfield, operator or option is missing from `fields`, so a
 * **Saved filter** that references a removed field still shows instead of breaking the bar.
 */
export const describeCondition = (
	condition: DsFilterCondition,
	fields: ReadonlyArray<DsFilterField>,
): DsFilterConditionDescription => {
	if (condition.kind === 'search') {
		return { fieldPath: [], value: condition.text };
	}

	const field = fields.find((item) => item.id === condition.field);
	const subfield =
		field?.type === 'compound' ? field.subfields.find((item) => item.id === condition.subfield) : undefined;
	const scalarField = field?.type === 'compound' ? subfield : field;
	const operator = scalarField?.operators.find((item) => item.value === condition.operator);

	const fieldPath = [field?.label ?? condition.field];

	if (condition.subfield) {
		fieldPath.push(subfield?.label ?? condition.subfield);
	}

	return {
		fieldPath,
		operator: operator?.label ?? condition.operator,
		operatorSymbol: operator?.symbol ?? operator?.label ?? condition.operator,
		value: formatValue(condition.value, scalarField),
	};
};
