import { describe, expect, it } from 'vitest';
import type { DsFilterCondition, DsFilterField } from './ds-filters-bar.types';
import {
	appendCondition,
	createConditionId,
	createSearchCondition,
	describeCondition,
	isFiltersBarView,
	lockedViewsFor,
	normalizeQuery,
	removeConditionById,
	replaceCondition,
} from './ds-filters-bar.utils';

const EQUALS = { value: '=', label: 'equals', symbol: '=' };
const NOT_EQUALS = { value: '!=', label: 'not equals', symbol: '≠' };

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
			operator: '>',
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
