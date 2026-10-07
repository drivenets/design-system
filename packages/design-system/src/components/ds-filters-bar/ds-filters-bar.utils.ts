import type {
	DsFiltersBarFiltersDialogEnumEntry,
	DsFiltersBarFiltersDialogEntry,
	DsFiltersBarFiltersDialogTab,
	DsFiltersBarFiltersDialogValue,
} from './components/ds-filters-bar-filters-dialog';
import {
	comparisonFilterOperators,
	enumFilterOperators,
	filtersBarViews,
	textFilterOperators,
	type DsFilterComparisonOperator,
	type DsFilterCondition,
	type DsFilterEnumOperator,
	type DsFilterField,
	type DsFilterFieldCondition,
	type DsFilterOperator,
	type DsFilterOption,
	type DsFilterPin,
	type DsFilterRange,
	type DsFilterScalarField,
	type DsFilterSearchCondition,
	type DsFilterTextOperator,
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

export const isRange = (value: DsFilterValue): value is DsFilterRange<number> | DsFilterRange<string> =>
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
		operatorSymbol: operator?.symbol ?? condition.operator,
		value: formatValue(condition.value, scalarField),
	};
};

/**
 * One part of the collapsed summary line. Each ends with `;`, except a saved filter that other
 * items follow.
 */
export type DsFiltersBarSummaryItem =
	| { kind: 'empty' }
	| { kind: 'advancedQuery' }
	| { kind: 'savedFilter'; name: string }
	| { kind: 'search'; id: string; value: string }
	| {
			kind: 'condition';
			id: string;
			label: string;
			/**
			 * Operator in words. Absent for `=`, which reads as `Field: value`.
			 */
			operator?: string;
			value: string;
	  };

export interface DsFiltersBarSummarySource {
	conditions: ReadonlyArray<DsFilterCondition>;
	query: string | null;
	fields: ReadonlyArray<DsFilterField>;
	activeSavedFilterName?: string;
}

const EQUALS_OPERATOR = '=';
const FIELD_PATH_SEPARATOR = ' › ';

const toSummaryCondition = (
	condition: DsFilterCondition,
	fields: ReadonlyArray<DsFilterField>,
): DsFiltersBarSummaryItem => {
	const { fieldPath, operator, value } = describeCondition(condition, fields);

	if (condition.kind === 'search') {
		return { kind: 'search', id: condition.id, value };
	}

	const shownOperator = condition.operator === EQUALS_OPERATOR ? undefined : operator;

	return {
		kind: 'condition',
		id: condition.id,
		label: fieldPath.join(FIELD_PATH_SEPARATOR),
		...(shownOperator && { operator: shownOperator }),
		value,
	};
};

/**
 * Orders the collapsed summary: the **Active saved filter** first, then the Advanced query label or
 * the conditions. `View: All` only shows when there is neither a saved filter nor anything to list.
 */
export const toSummaryItems = ({
	conditions,
	query,
	fields,
	activeSavedFilterName,
}: DsFiltersBarSummarySource): DsFiltersBarSummaryItem[] => {
	const items: DsFiltersBarSummaryItem[] =
		query === null
			? conditions.map((condition) => toSummaryCondition(condition, fields))
			: [{ kind: 'advancedQuery' }];

	if (activeSavedFilterName) {
		return [{ kind: 'savedFilter', name: activeSavedFilterName }, ...items];
	}

	return items.length ? items : [{ kind: 'empty' }];
};

/**
 * One line naming the whole condition, for example `Input Name contains WF456`, so two conditions on
 * the same field stay distinguishable to screen readers
 */
export const conditionText = ({ fieldPath, operator, value }: DsFilterConditionDescription): string =>
	[...fieldPath, operator, value].filter(Boolean).join(' ');

const MIN_EDITABLE_OPERATORS = 2;

/**
 * Operators the condition can switch between in place, or `null` when there is nothing to pick: a
 * field or subfield missing from `fields`, a single operator, or a range, which only goes with `=`.
 */
export const conditionOperators = (
	condition: DsFilterFieldCondition,
	fields: ReadonlyArray<DsFilterField>,
): ReadonlyArray<DsFilterOperator> | null => {
	if (isRange(condition.value)) {
		return null;
	}

	const field = fields.find((item) => item.id === condition.field);
	const scalarField =
		field?.type === 'compound' ? field.subfields.find((item) => item.id === condition.subfield) : field;

	if (!scalarField || scalarField.operators.length < MIN_EDITABLE_OPERATORS) {
		return null;
	}

	return scalarField.operators;
};

const PATH_SEPARATOR = '.';
const TAB_LABEL_SEPARATOR = ' › ';

const scalarTab = (
	schema: DsFilterScalarField,
	parent?: DsFilterField,
): DsFiltersBarFiltersDialogTab | null => {
	if (schema.type === 'enum' && !schema.options.length) {
		return null;
	}

	if (!parent) {
		return { id: schema.id, field: schema.id, label: schema.label, schema };
	}

	return {
		id: `${parent.id}${PATH_SEPARATOR}${schema.id}`,
		field: parent.id,
		subfield: schema.id,
		label: `${parent.label}${TAB_LABEL_SEPARATOR}${schema.label}`,
		schema,
	};
};

/**
 * One tab per top-level scalar field and per compound subfield, in `fields` order. Enum fields
 * without options are skipped.
 */
export const filtersDialogTabs = (
	fields: ReadonlyArray<DsFilterField>,
): ReadonlyArray<DsFiltersBarFiltersDialogTab> =>
	fields.flatMap((field) => {
		const tabs =
			field.type === 'compound' ? field.subfields.map((sub) => scalarTab(sub, field)) : [scalarTab(field)];

		return tabs.filter((tab): tab is DsFiltersBarFiltersDialogTab => tab !== null);
	});

/**
 * Top-level enum tabs: the only ones whose options can be pinned, since a pin names no subfield
 */
const canPinOptions = (tab: DsFiltersBarFiltersDialogTab) => tab.schema.type === 'enum' && !tab.subfield;

const isEntryOf = (entry: DsFiltersBarFiltersDialogEntry, tab: DsFiltersBarFiltersDialogTab) =>
	entry.field === tab.field && entry.subfield === tab.subfield && entry.type === tab.schema.type;

const includesOperator = (operators: ReadonlyArray<string>, operator: string) => operators.includes(operator);

const isScalarOrRange = (condition: DsFilterFieldCondition, scalar: 'number' | 'string') => {
	const { value, operator } = condition;

	if (isRange(value)) {
		return operator === '=' && [value.from, value.to].every((end) => end === null || typeof end === scalar);
	}

	return typeof value === scalar && includesOperator(comparisonFilterOperators, operator);
};

const fieldHasOperator = (tab: DsFiltersBarFiltersDialogTab, operator: string) =>
	tab.schema.operators.some((item) => item.value === operator);

/**
 * Whether the tab can show the condition: same field and subfield, an operator the field lists, and
 * a value of the tab's type
 */
const tabShows = (
	tab: DsFiltersBarFiltersDialogTab,
	condition: DsFilterCondition,
): condition is DsFilterFieldCondition => {
	if (condition.kind !== 'field' || condition.field !== tab.field || condition.subfield !== tab.subfield) {
		return false;
	}

	if (!fieldHasOperator(tab, condition.operator)) {
		return false;
	}

	switch (tab.schema.type) {
		case 'enum':
			return includesOperator(enumFilterOperators, condition.operator) && Array.isArray(condition.value);
		case 'text':
			return includesOperator(textFilterOperators, condition.operator) && typeof condition.value === 'string';
		case 'number':
			return isScalarOrRange(condition, 'number');
		case 'date':
			return isScalarOrRange(condition, 'string');
	}
};

/**
 * Id of the filters dialog tab that can edit the condition, or `undefined` when there is none
 */
export const conditionDialogTab = (
	condition: DsFilterCondition,
	fields: ReadonlyArray<DsFilterField>,
): string | undefined => filtersDialogTabs(fields).find((tab) => tabShows(tab, condition))?.id;

const BETWEEN = 'between';
const NO_VALUES: ReadonlyArray<string> = Object.freeze([]);
const OPEN_RANGE = Object.freeze({ from: null, to: null });

/**
 * A tab's entry before anything is set: its first operator, or `=` when it has none
 */
export const emptyFiltersDialogEntry = (
	tab: DsFiltersBarFiltersDialogTab,
): DsFiltersBarFiltersDialogEntry => {
	const key = tab.subfield ? { field: tab.field, subfield: tab.subfield } : { field: tab.field };

	switch (tab.schema.type) {
		case 'enum':
			return {
				...key,
				type: 'enum',
				operator: tab.schema.operators[0]?.value ?? '=',
				selected: NO_VALUES,
				pinned: NO_VALUES,
			};
		case 'text':
			return { ...key, type: 'text', operator: tab.schema.operators[0]?.value ?? '=', text: '' };
		case 'number':
			return {
				...key,
				type: 'number',
				operator: tab.schema.operators[0]?.value ?? '=',
				value: null,
				range: OPEN_RANGE,
			};
		case 'date':
			return {
				...key,
				type: 'date',
				operator: tab.schema.operators[0]?.value ?? '=',
				preset: null,
				date: null,
				range: OPEN_RANGE,
			};
	}
};

/**
 * The `>=` and `<=` pair a range comes back as from the query language, as one range
 */
const rangeFromPair = (
	conditions: ReadonlyArray<DsFilterFieldCondition>,
): DsFilterRange<number | string> | null => {
	const lower = conditions.find((item) => item.operator === '>=' && !isRange(item.value));
	const upper = conditions.find((item) => item.operator === '<=' && !isRange(item.value));

	if (!lower || !upper) {
		return null;
	}

	return { from: lower.value as number | string, to: upper.value as number | string };
};

const seedEntry = (
	tab: DsFiltersBarFiltersDialogTab,
	shown: ReadonlyArray<DsFilterFieldCondition>,
	pinned: ReadonlyArray<string>,
): DsFiltersBarFiltersDialogEntry => {
	const empty = emptyFiltersDialogEntry(tab);
	const [first] = shown;

	if (empty.type === 'enum') {
		return first
			? {
					...empty,
					operator: first.operator as DsFilterEnumOperator,
					selected: first.value as ReadonlyArray<string>,
					pinned,
				}
			: { ...empty, pinned };
	}

	if (!first) {
		return empty;
	}

	if (empty.type === 'text') {
		return { ...empty, operator: first.operator as DsFilterTextOperator, text: first.value as string };
	}

	// `between` saves as `=`, so only a field that lists `=` can show a range.
	const range = fieldHasOperator(tab, '=')
		? (rangeFromPair(shown) ?? (isRange(first.value) ? first.value : null))
		: null;

	if (empty.type === 'number') {
		return range
			? { ...empty, operator: BETWEEN, range: range as DsFilterRange<number> }
			: { ...empty, operator: first.operator as DsFilterComparisonOperator, value: first.value as number };
	}

	if (range) {
		return { ...empty, operator: BETWEEN, range: range as DsFilterRange<string> };
	}

	const value = first.value as string;
	const isPreset =
		tab.schema.type === 'date' && !!tab.schema.presets?.some((preset) => preset.value === value);

	return {
		...empty,
		operator: first.operator as DsFilterComparisonOperator,
		preset: isPreset ? value : null,
		date: isPreset ? null : value,
	};
};

/**
 * One entry per tab that has conditions or pins. A tab with several conditions shows the first,
 * except that a `>=` and `<=` pair on a number or date field shows as `between`.
 */
export const toFiltersDialogValue = (
	fields: ReadonlyArray<DsFilterField>,
	conditions: ReadonlyArray<DsFilterCondition>,
	pins: ReadonlyArray<DsFilterPin>,
): DsFiltersBarFiltersDialogValue =>
	filtersDialogTabs(fields).flatMap((tab): DsFiltersBarFiltersDialogEntry[] => {
		const shown = conditions.filter((condition) => tabShows(tab, condition));
		const pinned = canPinOptions(tab)
			? pins.filter((pin) => pin.field === tab.field).map((pin) => pin.value)
			: [];

		if (!shown.length && !pinned.length) {
			return [];
		}

		return [seedEntry(tab, shown, pinned)];
	});

const hasRangeEnd = (range: DsFilterRange<number | string>) => range.from !== null || range.to !== null;

/**
 * The condition value an entry saves, or `null` when nothing is set
 */
const entryCondition = (
	entry: DsFiltersBarFiltersDialogEntry,
): Pick<DsFilterFieldCondition, 'operator' | 'value'> | null => {
	switch (entry.type) {
		case 'enum':
			return entry.selected.length ? { operator: entry.operator, value: entry.selected } : null;
		case 'text':
			return entry.text.trim() ? { operator: entry.operator, value: entry.text.trim() } : null;
		case 'number':
			if (entry.operator === BETWEEN) {
				return hasRangeEnd(entry.range) ? { operator: '=', value: entry.range } : null;
			}

			return entry.value === null ? null : { operator: entry.operator, value: entry.value };
		case 'date': {
			if (entry.operator === BETWEEN) {
				return hasRangeEnd(entry.range) ? { operator: '=', value: entry.range } : null;
			}

			const value = entry.preset ?? entry.date;

			return value === null ? null : { operator: entry.operator, value };
		}
	}
};

/**
 * Whether Save turns the entry into a condition
 */
export const isFiltersDialogEntrySet = (entry: DsFiltersBarFiltersDialogEntry) =>
	entryCondition(entry) !== null;

type SavedCondition = Pick<DsFilterFieldCondition, 'operator' | 'value'>;

const isSameValue = (a: DsFilterValue, b: DsFilterValue): boolean => {
	if (Array.isArray(a) && Array.isArray(b)) {
		return a.length === b.length && a.every((item, index) => item === b[index]);
	}

	if (isRange(a) && isRange(b)) {
		return a.from === b.from && a.to === b.to;
	}

	return a === b;
};

const isSameSaved = (a: SavedCondition | null, b: SavedCondition | null) =>
	a === null || b === null ? a === b : a.operator === b.operator && isSameValue(a.value, b.value);

const toCondition = (
	entry: DsFiltersBarFiltersDialogEntry,
	saved: Pick<DsFilterFieldCondition, 'operator' | 'value'>,
	id: string,
): DsFilterFieldCondition => ({
	kind: 'field',
	id,
	field: entry.field,
	...(entry.subfield ? { subfield: entry.subfield } : {}),
	...saved,
});

/**
 * Save replaces every condition of a tab whose value changed: the new one keeps the id and position
 * of the first, the rest are dropped. Tabs left as they were seeded keep all their conditions, and
 * conditions no tab can show are kept as they are.
 * Pins keep their order: unpinned dialog pins are removed in place and new ones are appended.
 */
export const fromFiltersDialogValue = (
	fields: ReadonlyArray<DsFilterField>,
	conditions: ReadonlyArray<DsFilterCondition>,
	pins: ReadonlyArray<DsFilterPin>,
	value: DsFiltersBarFiltersDialogValue,
): { conditions: ReadonlyArray<DsFilterCondition>; pins: ReadonlyArray<DsFilterPin> } => {
	const tabs = filtersDialogTabs(fields);
	const entries = tabs.flatMap((tab) => value.find((entry) => isEntryOf(entry, tab)) ?? []);
	const seeded = toFiltersDialogValue(fields, conditions, pins);
	const savedOf = (from: DsFiltersBarFiltersDialogValue, tab: DsFiltersBarFiltersDialogTab) => {
		const entry = from.find((item) => isEntryOf(item, tab));

		return entry ? entryCondition(entry) : null;
	};
	const changedTabs = new Set(
		tabs.filter((tab) => !isSameSaved(savedOf(seeded, tab), savedOf(entries, tab))).map((tab) => tab.id),
	);
	const committed = new Map(
		tabs.flatMap((tab) => {
			const entry = entries.find((item) => isEntryOf(item, tab));
			const saved = entry && entryCondition(entry);

			return entry && saved ? [[tab.id, { entry, saved }] as const] : [];
		}),
	);
	const placed = new Set<string>();

	const kept = conditions.flatMap((condition): DsFilterCondition[] => {
		const tab = tabs.find((item) => tabShows(item, condition));

		if (!tab || !changedTabs.has(tab.id)) {
			return [condition];
		}

		const commit = committed.get(tab.id);

		if (!commit || placed.has(tab.id)) {
			return [];
		}

		placed.add(tab.id);

		return [toCondition(commit.entry, commit.saved, condition.id)];
	});

	const added = [...committed.entries()]
		.filter(([tabId]) => changedTabs.has(tabId) && !placed.has(tabId))
		.map(([, commit]) => toCondition(commit.entry, commit.saved, createConditionId()));

	const pinEntries = entries.filter(
		(entry): entry is DsFiltersBarFiltersDialogEnumEntry => entry.type === 'enum' && !entry.subfield,
	);
	const pinnedByField = new Map(pinEntries.map((entry) => [entry.field, entry.pinned] as const));
	const isDialogField = (fieldId: string) => tabs.some((tab) => canPinOptions(tab) && tab.field === fieldId);
	const isKept = (pin: DsFilterPin) =>
		!isDialogField(pin.field) || !!pinnedByField.get(pin.field)?.includes(pin.value);

	const keptPins = pins.filter(isKept);
	const addedPins = pinEntries.flatMap((entry) =>
		entry.pinned
			.filter((pinned) => !keptPins.some((pin) => pin.field === entry.field && pin.value === pinned))
			.map((pinned) => ({ field: entry.field, value: pinned })),
	);

	return { conditions: [...kept, ...added], pins: [...keptPins, ...addedPins] };
};
