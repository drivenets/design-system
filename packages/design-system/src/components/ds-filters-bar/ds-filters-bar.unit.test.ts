import { describe, expect, it } from 'vitest';
import type { DsFilterCondition, DsFilterField, DsFilterPin } from './ds-filters-bar.types';
import {
	appendCondition,
	createConditionId,
	createSearchCondition,
	describeCondition,
	filtersDialogFields,
	fromFiltersDialogValue,
	isFiltersBarView,
	lockedViewsFor,
	normalizeQuery,
	removeConditionById,
	replaceCondition,
	toFiltersDialogValue,
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

	it('falls back to the operator label when there is no symbol', () => {
		const condition: DsFilterCondition = {
			kind: 'field',
			id: '1',
			field: 'parents',
			operator: '>',
			value: 2,
		};

		expect(describeCondition(condition, FIELDS)).toMatchObject({
			operatorSymbol: 'greater than',
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

describe('filtersDialogFields', () => {
	it('keeps top-level enum fields in order and skips compound subfields', () => {
		expect(filtersDialogFields(DIALOG_FIELDS).map((field) => field.id)).toEqual(['status', 'owner']);
	});

	it('skips enum fields without options', () => {
		const fields: DsFilterField[] = [
			...DIALOG_FIELDS,
			{ type: 'enum', id: 'empty', label: 'Empty', operators: [EQUALS], options: [] },
		];

		expect(filtersDialogFields(fields).map((field) => field.id)).toEqual(['status', 'owner']);
	});
});

describe('toFiltersDialogValue', () => {
	it('seeds an entry from the enum condition of a field', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'field', id: 'c1', field: 'status', operator: '!=', value: ['deprecated'] },
		];

		expect(toFiltersDialogValue(DIALOG_FIELDS, conditions, [])).toEqual([
			{ field: 'status', operator: '!=', selected: ['deprecated'], pinned: [] },
		]);
	});

	it('seeds a pinned field without a condition with its first operator and nothing checked', () => {
		const pins: DsFilterPin[] = [
			{ field: 'owner', value: 'bob' },
			{ field: 'status', value: 'active' },
			{ field: 'owner', value: 'alice' },
		];

		expect(toFiltersDialogValue(DIALOG_FIELDS, [], pins)).toEqual([
			{ field: 'status', operator: '=', selected: [], pinned: ['active'] },
			{ field: 'owner', operator: '!=', selected: [], pinned: ['bob', 'alice'] },
		]);
	});

	it('seeds from the first of several enum conditions and ignores other condition shapes', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'search', id: 's1', text: 'status' },
			{ kind: 'field', id: 'c0', field: 'status', operator: '=', value: 'active' },
			{ kind: 'field', id: 'c1', field: 'output', subfield: 'vendor', operator: '=', value: ['acme'] },
			{ kind: 'field', id: 'c2', field: 'status', operator: '!=', value: ['deprecated'] },
			{ kind: 'field', id: 'c3', field: 'status', operator: '=', value: ['active'] },
		];

		expect(toFiltersDialogValue(DIALOG_FIELDS, conditions, [])).toEqual([
			{ field: 'status', operator: '!=', selected: ['deprecated'], pinned: [] },
		]);
	});

	it('falls back to equals for a field without operators', () => {
		const fields: DsFilterField[] = [
			{ type: 'enum', id: 'tag', label: 'Tag', operators: [], options: [{ value: 'x', label: 'X' }] },
		];

		expect(toFiltersDialogValue(fields, [], [{ field: 'tag', value: 'x' }])).toEqual([
			{ field: 'tag', operator: '=', selected: [], pinned: ['x'] },
		]);
	});
});

describe('fromFiltersDialogValue', () => {
	const search: DsFilterCondition = { kind: 'search', id: 's1', text: 'WF456' };
	const number: DsFilterCondition = { kind: 'field', id: 'n1', field: 'parents', operator: '>', value: 2 };
	const subfield: DsFilterCondition = {
		kind: 'field',
		id: 'o1',
		field: 'output',
		subfield: 'vendor',
		operator: '=',
		value: ['acme'],
	};
	const unknown: DsFilterCondition = {
		kind: 'field',
		id: 'r1',
		field: 'removed',
		operator: '=',
		value: ['x'],
	};
	const untouched = [search, number, subfield, unknown];

	it('appends a new condition with a generated id and keeps the other conditions', () => {
		const { conditions } = fromFiltersDialogValue(
			DIALOG_FIELDS,
			untouched,
			[],
			[{ field: 'owner', operator: '=', selected: ['alice'], pinned: [] }],
		);

		const added = conditions.at(-1);

		expect(conditions.slice(0, -1)).toEqual(untouched);
		expect(added).toMatchObject({ kind: 'field', field: 'owner', operator: '=', value: ['alice'] });
		expect(added?.id).toMatch(/^condition-/);
	});

	it('replaces all enum conditions of a field with one condition at the first one’s id and position', () => {
		const conditions: DsFilterCondition[] = [
			search,
			{ kind: 'field', id: 'c1', field: 'status', operator: '=', value: ['active'] },
			number,
			{ kind: 'field', id: 'c2', field: 'status', operator: '!=', value: ['deprecated'] },
			subfield,
			unknown,
		];

		const result = fromFiltersDialogValue(
			DIALOG_FIELDS,
			conditions,
			[],
			[{ field: 'status', operator: '!=', selected: ['active', 'deprecated'], pinned: [] }],
		);

		expect(result.conditions).toEqual([
			search,
			{ kind: 'field', id: 'c1', field: 'status', operator: '!=', value: ['active', 'deprecated'] },
			number,
			subfield,
			unknown,
		]);
	});

	it('removes the enum conditions of a field left unchecked or missing from the value', () => {
		const conditions: DsFilterCondition[] = [
			{ kind: 'field', id: 'c1', field: 'status', operator: '=', value: ['active'] },
			...untouched,
			{ kind: 'field', id: 'c2', field: 'owner', operator: '=', value: ['bob'] },
		];

		const result = fromFiltersDialogValue(
			DIALOG_FIELDS,
			conditions,
			[],
			[{ field: 'status', operator: '=', selected: [], pinned: [] }],
		);

		expect(result.conditions).toEqual(untouched);
	});

	it('ignores entries for fields the dialog does not show', () => {
		const result = fromFiltersDialogValue(
			DIALOG_FIELDS,
			untouched,
			[],
			[
				{ field: 'parents', operator: '=', selected: ['3'], pinned: ['3'] },
				{ field: 'unknown', operator: '=', selected: ['x'], pinned: ['x'] },
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
			{ field: 'owner', operator: '=', selected: [], pinned: ['alice'] },
			{ field: 'status', operator: '=', selected: [], pinned: ['active', 'deprecated'] },
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
			{ field: 'status', operator: '=', selected: [], pinned: ['active'] },
			{ field: 'owner', operator: '!=', selected: [], pinned: ['alice'] },
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
			{ field: 'owner', operator: '!=', selected: [], pinned: ['alice', 'bob'] },
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
