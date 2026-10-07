import { describe, expect, it } from 'vitest';
import type {
	DsFilterCondition,
	DsFilterField,
	DsFilterFieldCondition,
	DsFilterPin,
} from './ds-filters-bar.types';
import {
	appendCondition,
	conditionDialogTab,
	conditionOperators,
	conditionText,
	createConditionId,
	createSearchCondition,
	describeCondition,
	emptyFiltersDialogEntry,
	filtersDialogTabs,
	isFiltersDialogEntrySet,
	fromFiltersDialogValue,
	isFiltersBarView,
	lockedViewsFor,
	normalizeQuery,
	removeConditionById,
	replaceCondition,
	toFiltersDialogValue,
	toSummaryItems,
} from './ds-filters-bar.utils';

const EQUALS = { value: '=', label: 'equals', symbol: '=' } as const;
const NOT_EQUALS = { value: '!=', label: 'not equals', symbol: '≠' } as const;

const FIELDS: DsFilterField[] = [
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [EQUALS, NOT_EQUALS],
		options: [
			{ value: 'active', label: 'Active' },
			{ value: 'deprecated', label: 'Deprecated' },
		],
	},
	{ type: 'number', id: 'parents', label: 'Parents', operators: [{ value: '>', label: 'greater than' }] },
	{
		type: 'date',
		id: 'lastRun',
		label: 'Last run',
		operators: [EQUALS],
		presets: [{ value: 'today', label: 'Today' }],
	},
	{
		type: 'compound',
		id: 'input',
		label: 'Input',
		subfields: [{ type: 'text', id: 'name', label: 'Name', operators: [{ value: '~', label: 'contains' }] }],
	},
];

describe('isFiltersBarView', () => {
	it.each(['filters', 'builder', 'advanced'])('accepts %s', (value) => {
		expect(isFiltersBarView(value)).toBe(true);
	});

	it.each(['code', '', null])('rejects %s', (value) => {
		expect(isFiltersBarView(value)).toBe(false);
	});
});

describe('normalizeQuery', () => {
	it('keeps edited text as is', () => {
		expect(normalizeQuery(' status = "Active" ')).toBe(' status = "Active" ');
	});

	it.each(['', '   ', null])('turns %j into null', (query) => {
		expect(normalizeQuery(query)).toBeNull();
	});
});

describe('lockedViewsFor', () => {
	it('locks nothing while the conditions are the source', () => {
		expect(lockedViewsFor(null)).toEqual([]);
	});

	it('locks the filters and builder views while an edited query is the source', () => {
		expect(lockedViewsFor('status = "Active"')).toEqual(['filters', 'builder']);
	});
});

describe('createConditionId', () => {
	it('returns a different id every call', () => {
		expect(createConditionId()).not.toBe(createConditionId());
	});
});

describe('createSearchCondition', () => {
	it('creates a search condition with trimmed text', () => {
		const condition = createSearchCondition('  AAA ');

		expect(condition).toMatchObject({ kind: 'search', text: 'AAA' });
		expect(condition?.id).toMatch(/^condition-/);
	});

	it('returns null for blank text', () => {
		expect(createSearchCondition('   ')).toBeNull();
	});
});

describe('condition list helpers', () => {
	const first: DsFilterCondition = { kind: 'search', id: 'a', text: 'AAA' };
	const second: DsFilterCondition = {
		kind: 'field',
		id: 'b',
		field: 'status',
		operator: '=',
		value: 'active',
	};

	it('appends a condition', () => {
		expect(appendCondition([first], second)).toEqual([first, second]);
	});

	it('replaces the condition with the same id', () => {
		const edited: DsFilterCondition = { ...second, operator: '!=' };

		expect(replaceCondition([first, second], edited)).toEqual([first, edited]);
	});

	it('removes a condition by id', () => {
		expect(removeConditionById([first, second], 'a')).toEqual([second]);
	});
});

describe('describeCondition', () => {
	it('describes a search condition by its text only', () => {
		expect(describeCondition({ kind: 'search', id: '1', text: 'WF456' }, FIELDS)).toEqual({
			fieldPath: [],
			value: 'WF456',
		});
	});

	it('uses option labels for enum values', () => {
		const condition: DsFilterCondition = {
			kind: 'field',
			id: '1',
			field: 'status',
			operator: '!=',
			value: ['active', 'deprecated'],
		};

		expect(describeCondition(condition, FIELDS)).toEqual({
			fieldPath: ['Status'],
			operator: 'not equals',
			operatorSymbol: '≠',
			value: 'Active, Deprecated',
		});
	});

	it('falls back to the operator token when there is no symbol', () => {
		const condition: DsFilterCondition = {
			kind: 'field',
			id: '1',
			field: 'parents',
			operator: '>',
			value: 2,
		};

		expect(describeCondition(condition, FIELDS)).toMatchObject({
			operatorSymbol: '>',
			value: '2',
		});
	});

	it('uses the preset label for a date preset', () => {
		const condition: DsFilterCondition = {
			kind: 'field',
			id: '1',
			field: 'lastRun',
			operator: '=',
			value: 'today',
		};

		expect(describeCondition(condition, FIELDS)).toMatchObject({ value: 'Today' });
	});

	it('joins both ends of a range', () => {
		const condition: DsFilterCondition = {
			kind: 'field',
			id: '1',
			field: 'parents',
			operator: '=',
			value: { from: 2, to: 5 },
		};

		expect(describeCondition(condition, FIELDS)).toMatchObject({ value: '2 – 5' });
	});

	it('includes the subfield of a compound field in the path', () => {
		const condition: DsFilterCondition = {
			kind: 'field',
			id: '1',
			field: 'input',
			subfield: 'name',
			operator: '~',
			value: 'WF456',
		};

		expect(describeCondition(condition, FIELDS)).toMatchObject({
			fieldPath: ['Input', 'Name'],
			operator: 'contains',
			value: 'WF456',
		});
	});

	it('falls back to raw ids for a field missing from the schema', () => {
		const condition: DsFilterCondition = {
			kind: 'field',
			id: '1',
			field: 'removed',
			operator: '=',
			value: 'x',
		};

		expect(describeCondition(condition, FIELDS)).toEqual({
			fieldPath: ['removed'],
			operator: '=',
			operatorSymbol: '=',
			value: 'x',
		});
	});
});

describe('toSummaryItems', () => {
	it('shows the empty view for an empty document', () => {
		expect(toSummaryItems({ conditions: [], query: null, fields: FIELDS })).toEqual([{ kind: 'empty' }]);
	});

	it('lists field conditions in order, leaving out the operator only for `=`', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'field', id: 'c1', field: 'status', operator: '=', value: ['active'] },
			{ kind: 'field', id: 'c2', field: 'status', operator: '!=', value: ['deprecated'] },
		];

		expect(toSummaryItems({ conditions, query: null, fields: FIELDS })).toEqual([
			{ kind: 'condition', id: 'c1', label: 'Status', value: 'Active' },
			{ kind: 'condition', id: 'c2', label: 'Status', operator: 'not equals', value: 'Deprecated' },
		]);
	});

	it('joins the field path of a compound field with ›', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'field', id: 'c1', field: 'input', subfield: 'name', operator: '~', value: 'WF456' },
		];

		expect(toSummaryItems({ conditions, query: null, fields: FIELDS })).toEqual([
			{ kind: 'condition', id: 'c1', label: 'Input › Name', operator: 'contains', value: 'WF456' },
		]);
	});

	it('lists a search condition by its text, in document order', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'field', id: 'c1', field: 'status', operator: '=', value: ['active'] },
			{ kind: 'search', id: 'c2', text: 'AAA' },
		];

		expect(toSummaryItems({ conditions, query: null, fields: FIELDS })).toEqual([
			{ kind: 'condition', id: 'c1', label: 'Status', value: 'Active' },
			{ kind: 'search', id: 'c2', value: 'AAA' },
		]);
	});

	it('shows no operator for a range, which always uses `=`', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'field', id: 'c1', field: 'parents', operator: '=', value: { from: 2, to: 5 } },
		];

		expect(toSummaryItems({ conditions, query: null, fields: FIELDS })).toEqual([
			{ kind: 'condition', id: 'c1', label: 'Parents', value: '2 – 5' },
		]);
	});

	it('falls back to raw ids for a field missing from the schema', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'field', id: 'c1', field: 'removed', subfield: 'gone', operator: '!=', value: 'x' },
		];

		expect(toSummaryItems({ conditions, query: null, fields: FIELDS })).toEqual([
			{ kind: 'condition', id: 'c1', label: 'removed › gone', operator: '!=', value: 'x' },
		]);
	});

	it('shows only the advanced query label, without its text or the conditions, while a query is the source', () => {
		const conditions: DsFilterCondition[] = [{ kind: 'search', id: 'c1', text: 'AAA' }];

		expect(toSummaryItems({ conditions, query: 'status = "active" OR parents > 2', fields: FIELDS })).toEqual(
			[{ kind: 'advancedQuery' }],
		);
	});

	describe('with an active saved filter', () => {
		it('shows only the name, without the empty view, when nothing follows', () => {
			expect(
				toSummaryItems({ conditions: [], query: null, fields: FIELDS, activeSavedFilterName: 'Ira123' }),
			).toEqual([{ kind: 'savedFilter', name: 'Ira123' }]);
		});

		it('puts the name before the conditions', () => {
			const conditions: DsFilterCondition[] = [
				{ kind: 'field', id: 'c1', field: 'status', operator: '=', value: ['active'] },
			];

			expect(
				toSummaryItems({ conditions, query: null, fields: FIELDS, activeSavedFilterName: 'Ira123' }),
			).toEqual([
				{ kind: 'savedFilter', name: 'Ira123' },
				{ kind: 'condition', id: 'c1', label: 'Status', value: 'Active' },
			]);
		});

		it('puts the name before the advanced query', () => {
			expect(
				toSummaryItems({
					conditions: [],
					query: 'status = "active" OR parents > 2',
					fields: FIELDS,
					activeSavedFilterName: 'Ira123',
				}),
			).toEqual([{ kind: 'savedFilter', name: 'Ira123' }, { kind: 'advancedQuery' }]);
		});
	});
});

const DIALOG_FIELDS: DsFilterField[] = [
	...FIELDS,
	{
		type: 'enum',
		id: 'owner',
		label: 'Owner',
		operators: [NOT_EQUALS, EQUALS],
		options: [
			{ value: 'alice', label: 'Alice' },
			{ value: 'bob', label: 'Bob' },
		],
	},
	{
		type: 'compound',
		id: 'output',
		label: 'Output',
		subfields: [
			{
				type: 'enum',
				id: 'vendor',
				label: 'Vendor',
				operators: [EQUALS],
				options: [{ value: 'acme', label: 'Acme' }],
			},
		],
	},
];

describe('conditionText', () => {
	it('joins the field path, the operator in words and the value', () => {
		expect(
			conditionText({
				fieldPath: ['Input', 'Name'],
				operator: 'contains',
				operatorSymbol: '~',
				value: 'WF456',
			}),
		).toBe('Input Name contains WF456');
	});

	it('is the text alone for a search', () => {
		expect(conditionText({ fieldPath: [], value: 'WF456' })).toBe('WF456');
	});
});

describe('conditionOperators', () => {
	const fieldCondition = (overrides: Partial<DsFilterFieldCondition>): DsFilterFieldCondition => ({
		kind: 'field',
		id: '1',
		field: 'status',
		operator: '=',
		value: ['active'],
		...overrides,
	});

	it("returns the field's operators when there are several", () => {
		expect(conditionOperators(fieldCondition({}), FIELDS)).toEqual([EQUALS, NOT_EQUALS]);
	});

	it("returns a compound subfield's operators", () => {
		const fields: DsFilterField[] = [
			{
				type: 'compound',
				id: 'input',
				label: 'Input',
				subfields: [{ type: 'text', id: 'vendor', label: 'Vendor', operators: [EQUALS, NOT_EQUALS] }],
			},
		];

		expect(
			conditionOperators(fieldCondition({ field: 'input', subfield: 'vendor', value: 'cisco' }), fields),
		).toEqual([EQUALS, NOT_EQUALS]);
	});

	it('returns null for a single operator', () => {
		expect(
			conditionOperators(fieldCondition({ field: 'parents', operator: '>', value: 3 }), FIELDS),
		).toBeNull();
	});

	it('returns null for a field or subfield missing from fields', () => {
		expect(conditionOperators(fieldCondition({ field: 'removed' }), FIELDS)).toBeNull();
		expect(
			conditionOperators(fieldCondition({ field: 'input', subfield: 'removed', value: 'x' }), FIELDS),
		).toBeNull();
	});

	it('returns null for a range, which only goes with =', () => {
		const fields: DsFilterField[] = [
			{ type: 'number', id: 'parents', label: 'Parents', operators: [EQUALS, NOT_EQUALS] },
		];

		expect(
			conditionOperators(fieldCondition({ field: 'parents', value: { from: 1, to: 5 } }), fields),
		).toBeNull();
	});
});

const AT_LEAST = { value: '>=', label: 'at least' } as const;
const AT_MOST = { value: '<=', label: 'at most' } as const;

// Fields that list every operator a range and its `>=` / `<=` pair need
const RANGE_FIELDS: DsFilterField[] = [
	{ type: 'number', id: 'parents', label: 'Parents', operators: [EQUALS, NOT_EQUALS, AT_LEAST, AT_MOST] },
	{ type: 'date', id: 'lastRun', label: 'Last run', operators: [EQUALS, AT_LEAST, AT_MOST] },
];

describe('conditionDialogTab', () => {
	it('returns the tab of a field condition the dialog can show', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'field', id: '1', field: 'status', operator: '!=', value: ['active'] },
			{ kind: 'field', id: '2', field: 'parents', operator: '>', value: 3 },
			{ kind: 'field', id: '4', field: 'lastRun', operator: '=', value: 'today' },
			{ kind: 'field', id: '5', field: 'input', subfield: 'name', operator: '~', value: 'WF' },
		];

		expect(conditions.map((condition) => conditionDialogTab(condition, FIELDS))).toEqual([
			'status',
			'parents',
			'lastRun',
			'input.name',
		]);
	});

	it('returns undefined for searches, unknown fields and values the tab cannot hold', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'search', id: '1', text: 'status' },
			{ kind: 'field', id: '2', field: 'removed', operator: '=', value: ['x'] },
			{ kind: 'field', id: '3', field: 'status', operator: '=', value: 'active' },
			{ kind: 'field', id: '4', field: 'input', subfield: 'removed', operator: '~', value: 'x' },
		];

		expect(conditions.map((condition) => conditionDialogTab(condition, FIELDS))).toEqual([
			undefined,
			undefined,
			undefined,
			undefined,
		]);
	});

	it('returns undefined for an operator the field does not list, a range included', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'field', id: '1', field: 'parents', operator: '<', value: 3 },
			{ kind: 'field', id: '2', field: 'parents', operator: '=', value: { from: 1, to: 5 } },
		];

		expect(conditions.map((condition) => conditionDialogTab(condition, FIELDS))).toEqual([
			undefined,
			undefined,
		]);
	});
});

describe('filtersDialogTabs', () => {
	it('has a tab per top-level scalar field and per compound subfield, in fields order', () => {
		expect(filtersDialogTabs(DIALOG_FIELDS).map(({ id, label }) => [id, label])).toEqual([
			['status', 'Status'],
			['parents', 'Parents'],
			['lastRun', 'Last run'],
			['input.name', 'Input › Name'],
			['owner', 'Owner'],
			['output.vendor', 'Output › Vendor'],
		]);
	});

	it('skips enum fields without options', () => {
		const fields: DsFilterField[] = [
			{ type: 'enum', id: 'empty', label: 'Empty', operators: [EQUALS], options: [] },
			{ type: 'text', id: 'name', label: 'Name', operators: [EQUALS] },
		];

		expect(filtersDialogTabs(fields).map((tab) => tab.id)).toEqual(['name']);
	});
});

describe('isFiltersDialogEntrySet', () => {
	const [statusTab, parentsTab, lastRunTab, nameTab] = filtersDialogTabs(FIELDS);

	it('is false for every empty entry', () => {
		expect(
			[statusTab, parentsTab, lastRunTab, nameTab].map(
				(tab) => tab && isFiltersDialogEntrySet(emptyFiltersDialogEntry(tab)),
			),
		).toEqual([false, false, false, false]);
	});

	it('ignores blank text and a range without ends', () => {
		expect(isFiltersDialogEntrySet({ type: 'text', field: 'name', operator: '~', text: '  ' })).toBe(false);
		expect(
			isFiltersDialogEntrySet({
				type: 'number',
				field: 'parents',
				operator: 'between',
				value: 3,
				range: { from: null, to: null },
			}),
		).toBe(false);
		expect(
			isFiltersDialogEntrySet({
				type: 'number',
				field: 'parents',
				operator: 'between',
				value: null,
				range: { from: 1, to: null },
			}),
		).toBe(true);
	});
});

describe('toFiltersDialogValue', () => {
	it('seeds an entry from the enum condition of a field', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'field', id: 'c1', field: 'status', operator: '!=', value: ['deprecated'] },
		];

		expect(toFiltersDialogValue(DIALOG_FIELDS, conditions, [])).toEqual([
			{ type: 'enum', field: 'status', operator: '!=', selected: ['deprecated'], pinned: [] },
		]);
	});

	it('seeds a pinned field without a condition with its first operator and nothing checked', () => {
		const pins: DsFilterPin[] = [
			{ field: 'owner', value: 'bob' },
			{ field: 'status', value: 'active' },
			{ field: 'owner', value: 'alice' },
		];

		expect(toFiltersDialogValue(DIALOG_FIELDS, [], pins)).toEqual([
			{ type: 'enum', field: 'status', operator: '=', selected: [], pinned: ['active'] },
			{ type: 'enum', field: 'owner', operator: '!=', selected: [], pinned: ['bob', 'alice'] },
		]);
	});

	it('seeds from the first condition a tab shows and ignores other shapes', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'search', id: 's1', text: 'status' },
			{ kind: 'field', id: 'c0', field: 'status', operator: '=', value: 'active' },
			{ kind: 'field', id: 'c2', field: 'status', operator: '!=', value: ['deprecated'] },
			{ kind: 'field', id: 'c3', field: 'status', operator: '=', value: ['active'] },
		];

		expect(toFiltersDialogValue(DIALOG_FIELDS, conditions, [])).toEqual([
			{ type: 'enum', field: 'status', operator: '!=', selected: ['deprecated'], pinned: [] },
		]);
	});

	it('seeds a compound subfield without pins', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'field', id: 'c1', field: 'output', subfield: 'vendor', operator: '=', value: ['acme'] },
		];

		expect(toFiltersDialogValue(DIALOG_FIELDS, conditions, [{ field: 'output', value: 'acme' }])).toEqual([
			{ type: 'enum', field: 'output', subfield: 'vendor', operator: '=', selected: ['acme'], pinned: [] },
		]);
	});

	it('seeds text, number and date entries', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'field', id: 'c1', field: 'parents', operator: '>', value: 2 },
			{ kind: 'field', id: 'c2', field: 'lastRun', operator: '=', value: 'today' },
			{ kind: 'field', id: 'c3', field: 'input', subfield: 'name', operator: '~', value: 'WF' },
		];

		expect(toFiltersDialogValue(FIELDS, conditions, [])).toEqual([
			{ type: 'number', field: 'parents', operator: '>', value: 2, range: { from: null, to: null } },
			{
				type: 'date',
				field: 'lastRun',
				operator: '=',
				preset: 'today',
				date: null,
				range: { from: null, to: null },
			},
			{ type: 'text', field: 'input', subfield: 'name', operator: '~', text: 'WF' },
		]);
	});

	it('seeds a date that is not a preset as a date', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'field', id: 'c1', field: 'lastRun', operator: '=', value: '2026-09-13' },
		];

		expect(toFiltersDialogValue(FIELDS, conditions, [])).toMatchObject([
			{ preset: null, date: '2026-09-13' },
		]);
	});

	it('seeds a range, or a >= and <= pair, as between', () => {
		const range: DsFilterCondition[] = [
			{ kind: 'field', id: 'c1', field: 'parents', operator: '=', value: { from: 1, to: null } },
		];
		const pair: DsFilterCondition[] = [
			{ kind: 'field', id: 'c1', field: 'lastRun', operator: '<=', value: '2026-09-30' },
			{ kind: 'field', id: 'c2', field: 'lastRun', operator: '>=', value: '2026-09-01' },
		];

		expect(toFiltersDialogValue(RANGE_FIELDS, range, [])).toMatchObject([
			{ operator: 'between', range: { from: 1, to: null } },
		]);
		expect(toFiltersDialogValue(RANGE_FIELDS, pair, [])).toMatchObject([
			{ operator: 'between', range: { from: '2026-09-01', to: '2026-09-30' } },
		]);
	});

	it('seeds a >= and <= pair as its first condition when the field has no =', () => {
		const fields: DsFilterField[] = [
			{ type: 'number', id: 'parents', label: 'Parents', operators: [AT_LEAST, AT_MOST] },
		];
		const pair: DsFilterCondition[] = [
			{ kind: 'field', id: 'c1', field: 'parents', operator: '>=', value: 1 },
			{ kind: 'field', id: 'c2', field: 'parents', operator: '<=', value: 5 },
		];

		expect(toFiltersDialogValue(fields, pair, [])).toMatchObject([{ operator: '>=', value: 1 }]);
	});

	it('falls back to equals for a field without operators', () => {
		const fields: DsFilterField[] = [
			{ type: 'enum', id: 'tag', label: 'Tag', operators: [], options: [{ value: 'x', label: 'X' }] },
		];

		expect(toFiltersDialogValue(fields, [], [{ field: 'tag', value: 'x' }])).toEqual([
			{ type: 'enum', field: 'tag', operator: '=', selected: [], pinned: ['x'] },
		]);
	});
});

describe('fromFiltersDialogValue', () => {
	const search: DsFilterCondition = { kind: 'search', id: 's1', text: 'WF456' };
	const unknown: DsFilterCondition = {
		kind: 'field',
		id: 'r1',
		field: 'removed',
		operator: '=',
		value: ['x'],
	};
	// A string on an enum field: no tab can show it.
	const mismatched: DsFilterCondition = {
		kind: 'field',
		id: 'm1',
		field: 'status',
		operator: '=',
		value: 'active',
	};
	const number: DsFilterCondition = { kind: 'field', id: 'n1', field: 'parents', operator: '>', value: 2 };
	const subfield: DsFilterCondition = {
		kind: 'field',
		id: 'o1',
		field: 'output',
		subfield: 'vendor',
		operator: '=',
		value: ['acme'],
	};
	const untouched = [search, unknown, mismatched];

	it('appends a new condition with a generated id and keeps the conditions no tab shows', () => {
		const { conditions } = fromFiltersDialogValue(
			DIALOG_FIELDS,
			untouched,
			[],
			[{ type: 'enum', field: 'owner', operator: '=', selected: ['alice'], pinned: [] }],
		);

		const added = conditions.at(-1);

		expect(conditions.slice(0, -1)).toEqual(untouched);
		expect(added).toMatchObject({ kind: 'field', field: 'owner', operator: '=', value: ['alice'] });
		expect(added?.id).toMatch(/^condition-/);
	});

	it('replaces all conditions of a tab with one condition at the first one’s id and position', () => {
		const conditions: DsFilterCondition[] = [
			search,
			{ kind: 'field', id: 'c1', field: 'status', operator: '=', value: ['active'] },
			unknown,
			{ kind: 'field', id: 'c2', field: 'status', operator: '!=', value: ['deprecated'] },
			mismatched,
		];

		const result = fromFiltersDialogValue(
			DIALOG_FIELDS,
			conditions,
			[],
			[{ type: 'enum', field: 'status', operator: '!=', selected: ['active', 'deprecated'], pinned: [] }],
		);

		expect(result.conditions).toEqual([
			search,
			{ kind: 'field', id: 'c1', field: 'status', operator: '!=', value: ['active', 'deprecated'] },
			unknown,
			mismatched,
		]);
	});

	it('removes the conditions of a tab left empty or missing from the value', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'field', id: 'c1', field: 'status', operator: '=', value: ['active'] },
			...untouched,
			number,
			subfield,
		];

		const result = fromFiltersDialogValue(
			DIALOG_FIELDS,
			conditions,
			[],
			[{ type: 'enum', field: 'status', operator: '=', selected: [], pinned: [] }],
		);

		expect(result.conditions).toEqual(untouched);
	});

	it('saves between as a range, merging a >= and <= pair into the first one', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'field', id: 'lo', field: 'parents', operator: '>=', value: 1 },
			search,
			{ kind: 'field', id: 'hi', field: 'parents', operator: '<=', value: 5 },
		];

		const value = toFiltersDialogValue(RANGE_FIELDS, conditions, []).map((entry) =>
			entry.type === 'number' ? { ...entry, range: { from: 1, to: 9 } } : entry,
		);

		expect(fromFiltersDialogValue(RANGE_FIELDS, conditions, [], value).conditions).toEqual([
			{ kind: 'field', id: 'lo', field: 'parents', operator: '=', value: { from: 1, to: 9 } },
			search,
		]);
	});

	it('keeps every condition of a tab left as it was seeded', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'field', id: 'n1', field: 'input', subfield: 'name', operator: '~', value: 'foo' },
			{ kind: 'field', id: 'n2', field: 'input', subfield: 'name', operator: '~', value: 'bar' },
			{ kind: 'field', id: 's1', field: 'status', operator: '=', value: ['active'] },
			{ kind: 'field', id: 's2', field: 'status', operator: '!=', value: ['deprecated'] },
		];

		const value = toFiltersDialogValue(DIALOG_FIELDS, conditions, []).map((entry) =>
			entry.type === 'enum' ? { ...entry, pinned: ['active'] } : entry,
		);

		expect(fromFiltersDialogValue(DIALOG_FIELDS, conditions, [], value).conditions).toEqual(conditions);
	});

	it('saves text trimmed, a subfield with its id, and a preset or a date', () => {
		const { conditions } = fromFiltersDialogValue(
			FIELDS,
			[],
			[],
			[
				{ type: 'text', field: 'input', subfield: 'name', operator: '~', text: ' WF ' },
				{
					type: 'date',
					field: 'lastRun',
					operator: '>',
					preset: null,
					date: '2026-09-13',
					range: { from: null, to: null },
				},
			],
		);

		expect(conditions).toMatchObject([
			{ field: 'lastRun', operator: '>', value: '2026-09-13' },
			{ field: 'input', subfield: 'name', operator: '~', value: 'WF' },
		]);
	});

	it('ignores entries for tabs the dialog does not have or of another type', () => {
		const result = fromFiltersDialogValue(
			DIALOG_FIELDS,
			untouched,
			[],
			[
				{ type: 'enum', field: 'parents', operator: '=', selected: ['3'], pinned: ['3'] },
				{ type: 'enum', field: 'unknown', operator: '=', selected: ['x'], pinned: ['x'] },
			],
		);

		expect(result).toEqual({ conditions: untouched, pins: [] });
	});

	it('keeps pins in place, drops unpinned dialog pins and appends new ones in fields order', () => {
		const pins: DsFilterPin[] = [
			{ field: 'status', value: 'deprecated' },
			{ field: 'lastRun', value: 'today' },
			{ field: 'owner', value: 'bob' },
			{ field: 'removed', value: 'x' },
		];

		const result = fromFiltersDialogValue(DIALOG_FIELDS, [], pins, [
			{ type: 'enum', field: 'owner', operator: '=', selected: [], pinned: ['alice'] },
			{ type: 'enum', field: 'status', operator: '=', selected: [], pinned: ['active', 'deprecated'] },
		]);

		expect(result.pins).toEqual([
			{ field: 'status', value: 'deprecated' },
			{ field: 'lastRun', value: 'today' },
			{ field: 'removed', value: 'x' },
			{ field: 'status', value: 'active' },
			{ field: 'owner', value: 'alice' },
		]);
	});

	it('keeps the order of a dialog pin placed before a non-dialog pin on a no-op save', () => {
		const pins: ReadonlyArray<DsFilterPin> = [
			{ field: 'owner', value: 'bob' },
			{ field: 'lastRun', value: 'today' },
		];

		const value = toFiltersDialogValue(DIALOG_FIELDS, [], pins);

		expect(fromFiltersDialogValue(DIALOG_FIELDS, [], pins, value).pins).toEqual(pins);
	});

	it('keeps the order of mixed pins from two dialog fields on a no-op save', () => {
		const pins: ReadonlyArray<DsFilterPin> = [
			{ field: 'owner', value: 'bob' },
			{ field: 'status', value: 'active' },
			{ field: 'owner', value: 'alice' },
			{ field: 'status', value: 'deprecated' },
		];

		const value = toFiltersDialogValue(DIALOG_FIELDS, [], pins);

		expect(fromFiltersDialogValue(DIALOG_FIELDS, [], pins, value).pins).toEqual(pins);
	});

	it('removes an unpinned value in place', () => {
		const pins: DsFilterPin[] = [
			{ field: 'status', value: 'active' },
			{ field: 'owner', value: 'bob' },
			{ field: 'lastRun', value: 'today' },
			{ field: 'owner', value: 'alice' },
		];

		const result = fromFiltersDialogValue(DIALOG_FIELDS, [], pins, [
			{ type: 'enum', field: 'status', operator: '=', selected: [], pinned: ['active'] },
			{ type: 'enum', field: 'owner', operator: '!=', selected: [], pinned: ['alice'] },
		]);

		expect(result.pins).toEqual([
			{ field: 'status', value: 'active' },
			{ field: 'lastRun', value: 'today' },
			{ field: 'owner', value: 'alice' },
		]);
	});

	it('appends a newly pinned value at the end', () => {
		const pins: DsFilterPin[] = [
			{ field: 'owner', value: 'bob' },
			{ field: 'lastRun', value: 'today' },
		];

		const result = fromFiltersDialogValue(DIALOG_FIELDS, [], pins, [
			{ type: 'enum', field: 'owner', operator: '!=', selected: [], pinned: ['alice', 'bob'] },
		]);

		expect(result.pins).toEqual([
			{ field: 'owner', value: 'bob' },
			{ field: 'lastRun', value: 'today' },
			{ field: 'owner', value: 'alice' },
		]);
	});

	it('drops the pins of a dialog field missing from the value', () => {
		const result = fromFiltersDialogValue(DIALOG_FIELDS, [], [{ field: 'owner', value: 'bob' }], []);

		expect(result.pins).toEqual([]);
	});

	it('leaves conditions and pins in canonical form unchanged after a round trip, without mutating them', () => {
		const conditions: ReadonlyArray<DsFilterCondition> = Object.freeze([
			search,
			{ kind: 'field', id: 'c1', field: 'status', operator: '!=', value: ['deprecated'] },
			number,
			subfield,
			unknown,
			{ kind: 'field', id: 'c2', field: 'owner', operator: '=', value: ['alice', 'bob'] },
			{ kind: 'field', id: 'c3', field: 'lastRun', operator: '=', value: { from: '2026-09-01', to: null } },
			{ kind: 'field', id: 'c4', field: 'input', subfield: 'name', operator: '~', value: 'WF' },
		]);
		const pins: ReadonlyArray<DsFilterPin> = Object.freeze([
			{ field: 'lastRun', value: 'today' },
			{ field: 'status', value: 'active' },
			{ field: 'owner', value: 'bob' },
		]);

		const value = toFiltersDialogValue(DIALOG_FIELDS, conditions, pins);

		expect(fromFiltersDialogValue(DIALOG_FIELDS, conditions, pins, value)).toEqual({ conditions, pins });
	});
});
