import { describe, expect, it } from 'vitest';
import type { DsFilterCondition, DsFilterField } from '../ds-filters-bar.types';
import { parseFilterQuery, serializeFilterQuery, type DsFilterQueryErrorCode } from './index';

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [
			{ value: '=', label: 'equals' },
			{ value: '!=', label: 'not equals' },
			{ value: 'IN', label: 'in' },
			{ value: 'NOT IN', label: 'not in' },
		],
		options: [
			{ value: 'active', label: 'Active' },
			{ value: 'pending', label: 'Pending review' },
		],
	},
	{
		type: 'number',
		id: 'latency',
		label: 'Latency',
		operators: [
			{ value: '=', label: 'equals' },
			{ value: '>=', label: 'at least' },
			{ value: '<=', label: 'at most' },
		],
	},
	{
		type: 'date',
		id: 'created',
		label: 'Created',
		operators: [
			{ value: '=', label: 'is' },
			{ value: '>', label: 'after' },
			{ value: '>=', label: 'on or after' },
			{ value: '<=', label: 'on or before' },
		],
		presets: [{ value: 'today', label: 'Today' }],
	},
	{
		type: 'compound',
		id: 'input',
		label: 'Input',
		subfields: [
			{
				type: 'text',
				id: 'vendor',
				label: 'Vendor',
				operators: [
					{ value: '=', label: 'equals' },
					{ value: '!=', label: 'not equals' },
					{ value: '~', label: 'contains' },
					{ value: '!~', label: 'does not contain' },
				],
			},
		],
	},
];

const conditionsOf = (query: string, previous: ReadonlyArray<DsFilterCondition> | null = []) => {
	const result = parseFilterQuery(query, FIELDS, previous ?? []);

	if (!result.ok) {
		throw new Error(`Expected a valid query, got ${result.error.code}`);
	}

	return result.conditions;
};

const errorOf = (query: string) => {
	const result = parseFilterQuery(query, FIELDS);

	if (result.ok) {
		throw new Error('Expected an invalid query');
	}

	return result.error;
};

const withoutIds = (conditions: ReadonlyArray<DsFilterCondition> | null) =>
	conditions?.map((condition) => ({ ...condition, id: undefined })) ?? null;

describe('parseFilterQuery', () => {
	it('turns a clause into a field condition', () => {
		expect(withoutIds(conditionsOf('status = active'))).toEqual([
			{ kind: 'field', field: 'status', operator: '=', value: ['active'] },
		]);
	});

	it('matches keywords, field ids and option labels case-insensitively', () => {
		expect(withoutIds(conditionsOf('STATUS in ("pending REVIEW", Active) and Latency >= 10'))).toEqual([
			{ kind: 'field', field: 'status', operator: 'IN', value: ['pending', 'active'] },
			{ kind: 'field', field: 'latency', operator: '>=', value: 10 },
		]);
	});

	it('names a compound subfield with a dot', () => {
		expect(withoutIds(conditionsOf('input.vendor !~ "cisco systems"'))).toEqual([
			{ kind: 'field', field: 'input', subfield: 'vendor', operator: '!~', value: 'cisco systems' },
		]);
	});

	it('reads NOT IN as one operator', () => {
		expect(withoutIds(conditionsOf('status not   in (active)'))).toEqual([
			{ kind: 'field', field: 'status', operator: 'NOT IN', value: ['active'] },
		]);
	});

	it('accepts a date preset or an ISO date', () => {
		expect(withoutIds(conditionsOf('created = TODAY AND created > "2026-09-01T10:00Z"'))).toEqual([
			{ kind: 'field', field: 'created', operator: '=', value: 'today' },
			{ kind: 'field', field: 'created', operator: '>', value: '2026-09-01T10:00Z' },
		]);
	});

	it('keeps a declared comparison on a date preset', () => {
		expect(withoutIds(conditionsOf('created >= today'))).toEqual([
			{ kind: 'field', field: 'created', operator: '>=', value: 'today' },
		]);
	});

	it('turns a lone quoted string into a search condition, keeping escaped quotes', () => {
		expect(withoutIds(conditionsOf('"say \\"hi\\"" AND status = active'))).toEqual([
			{ kind: 'search', text: 'say "hi"' },
			{ kind: 'field', field: 'status', operator: '=', value: ['active'] },
		]);
	});

	it('reads blank text as no conditions', () => {
		expect(conditionsOf('   ')).toEqual([]);
	});

	it.each([
		['status = active OR latency >= 10'],
		['status = active OR status = pending'],
		['(status = active)'],
		['latency >= 10 AND (status = active OR "x")'],
	])('keeps %s valid but out of reach of conditions', (query) => {
		const result = parseFilterQuery(query, FIELDS);

		expect(result.ok && result.conditions).toBeNull();
	});

	it('lets AND bind tighter than OR', () => {
		const result = parseFilterQuery('status = active OR latency >= 1 AND latency <= 5', FIELDS);

		expect(result.ok && result.node).toMatchObject({
			kind: 'or',
			children: [{ kind: 'clause' }, { kind: 'and', children: [{ kind: 'clause' }, { kind: 'clause' }] }],
		});
	});

	it('keeps the ids of unchanged conditions', () => {
		const previous = conditionsOf('status = active AND latency >= 10');
		const next = conditionsOf('status = active AND latency >= 20', previous);

		expect(next?.[0]?.id).toBe(previous?.[0]?.id);
		expect(next?.[1]?.id).not.toBe(previous?.[1]?.id);
	});

	it('keeps ids for previous conditions written with their keys in another order', () => {
		const previous: ReadonlyArray<DsFilterCondition> = [
			{ value: ['active'], operator: '=', field: 'status', id: 'saved', kind: 'field' },
		];

		expect(conditionsOf('status = active', previous)?.[0]?.id).toBe('saved');
	});

	it.each<[string, DsFilterQueryErrorCode, string]>([
		['status active', 'unexpectedToken', 'active'],
		['status = active latency', 'unexpectedToken', 'latency'],
		['NOT status = active', 'unexpectedToken', 'NOT'],
		['status = active AND', 'unexpectedEnd', ''],
		['status = "active', 'unterminatedString', '"active'],
		['owner = me', 'unknownField', 'owner'],
		['input.model = x', 'unknownSubfield', 'model'],
		['latency.max = 1', 'unknownSubfield', 'max'],
		['input = x', 'subfieldRequired', 'input'],
		['latency > 10', 'operatorNotAllowed', '>'],
		['status ~ act', 'operatorNotAllowed', '~'],
		['status IN (active, gone)', 'unknownOption', 'gone'],
		['latency = fast', 'notANumber', 'fast'],
		['latency = 1e309', 'notANumber', '1e309'],
		['created = yesterday', 'invalidDate', 'yesterday'],
		['created = "2026-13-45"', 'invalidDate', '2026-13-45'],
		['created = "2026-02-30"', 'invalidDate', '2026-02-30'],
		['status IN active', 'listExpected', 'active'],
		['status IN ()', 'emptyList', '()'],
	])('rejects %s with %s at %j', (query, code, text) => {
		expect(errorOf(query)).toMatchObject({ code, text });
	});
});

describe('serializeFilterQuery', () => {
	it('writes canonical text', () => {
		expect(
			serializeFilterQuery([
				{ kind: 'search', id: '1', text: 'say "hi"' },
				{ kind: 'field', id: '2', field: 'status', operator: '=', value: ['active'] },
				{ kind: 'field', id: '3', field: 'input', subfield: 'vendor', operator: '~', value: 'cisco' },
				{ kind: 'field', id: '4', field: 'latency', operator: '>=', value: 10 },
			]),
		).toBe('"say \\"hi\\"" AND status = "active" AND input.vendor ~ "cisco" AND latency >= 10');
	});

	it('writes several enum values as a list', () => {
		expect(
			serializeFilterQuery([
				{ kind: 'field', id: '1', field: 'status', operator: '=', value: ['active', 'pending'] },
				{ kind: 'field', id: '2', field: 'status', operator: '!=', value: ['active', 'pending'] },
			]),
		).toBe('status IN ("active", "pending") AND status NOT IN ("active", "pending")');
	});

	it('writes a range as two clauses and drops an open end', () => {
		expect(
			serializeFilterQuery([
				{ kind: 'field', id: '1', field: 'latency', operator: '=', value: { from: 1, to: 5 } },
				{ kind: 'field', id: '2', field: 'created', operator: '=', value: { from: '2026-01-01', to: null } },
			]),
		).toBe('latency >= 1 AND latency <= 5 AND created >= "2026-01-01"');
	});

	it('writes nothing for no conditions', () => {
		expect(serializeFilterQuery([])).toBe('');
	});

	it.each(['0.0000001', '-0.0000001', '1000000000000000000000'])(
		'parses the canonical form of the accepted number %s',
		(value) => {
			const conditions = conditionsOf(`latency = ${value}`);

			expect(conditionsOf(serializeFilterQuery(conditions ?? []), conditions)).toEqual(conditions);
		},
	);

	it('keeps an empty list and a fully open range in the text', () => {
		const text = serializeFilterQuery([
			{ kind: 'field', id: '1', field: 'status', operator: '=', value: [] },
			{ kind: 'field', id: '2', field: 'status', operator: '!=', value: [] },
			{ kind: 'field', id: '3', field: 'latency', operator: '=', value: { from: null, to: null } },
			{ kind: 'field', id: '4', field: 'status', operator: '=', value: ['active'] },
		]);

		expect(text).toBe('status IN () AND status NOT IN () AND latency = () AND status = "active"');
		expect(parseFilterQuery(text, FIELDS).ok).toBe(false);
	});

	it('parses back to the same conditions', () => {
		const conditions: ReadonlyArray<DsFilterCondition> = [
			{ kind: 'search', id: '1', text: 'a\\b "c"' },
			{ kind: 'field', id: '2', field: 'status', operator: 'NOT IN', value: ['active', 'pending'] },
			{ kind: 'field', id: '3', field: 'input', subfield: 'vendor', operator: '!=', value: 'x' },
			{ kind: 'field', id: '4', field: 'created', operator: '=', value: 'today' },
		];

		expect(conditionsOf(serializeFilterQuery(conditions), conditions)).toEqual(conditions);
	});
});

describe('a schema that declares only the plain operators', () => {
	const MINIMAL: ReadonlyArray<DsFilterField> = [
		{ type: 'number', id: 'score', label: 'Score', operators: [{ value: '=', label: 'equals' }] },
		{
			type: 'enum',
			id: 'tag',
			label: 'Tag',
			operators: [
				{ value: '=', label: 'is' },
				{ value: '!=', label: 'is not' },
			],
			options: [
				{ value: 'a', label: 'A' },
				{ value: 'b', label: 'B' },
			],
		},
	];

	const parseMinimal = (query: string) => {
		const result = parseFilterQuery(query, MINIMAL);

		return result.ok ? withoutIds(result.conditions) : result.error.code;
	};

	it('parses the canonical text of ranges and enum lists back', () => {
		const text = serializeFilterQuery([
			{ kind: 'field', id: '1', field: 'score', operator: '=', value: { from: 1, to: 5 } },
			{ kind: 'field', id: '2', field: 'tag', operator: '=', value: ['a', 'b'] },
			{ kind: 'field', id: '3', field: 'tag', operator: '!=', value: ['a', 'b'] },
		]);

		expect(parseMinimal(text)).toEqual([
			{ kind: 'field', field: 'score', operator: '=', value: { from: 1, to: null } },
			{ kind: 'field', field: 'score', operator: '=', value: { from: null, to: 5 } },
			{ kind: 'field', field: 'tag', operator: '=', value: ['a', 'b'] },
			{ kind: 'field', field: 'tag', operator: '!=', value: ['a', 'b'] },
		]);
	});

	it('still rejects operators that no declared operator implies', () => {
		expect(parseMinimal('score > 1')).toBe('operatorNotAllowed');
	});
});

describe('a date field that declares only equals', () => {
	const DATE_EQUALS: ReadonlyArray<DsFilterField> = [
		{
			type: 'date',
			id: 'created',
			label: 'Created',
			operators: [{ value: '=', label: 'is' }],
			presets: [{ value: 'today', label: 'Today' }],
		},
	];

	const parseDate = (query: string) => {
		const result = parseFilterQuery(query, DATE_EQUALS);

		return result.ok ? withoutIds(result.conditions) : result.error.code;
	};

	it('rejects a preset used as an implied range end', () => {
		expect(parseDate('created >= today')).toBe('operatorNotAllowed');
	});

	it('reads an ISO date as the open end of a range', () => {
		expect(parseDate('created >= "2026-01-01" AND created <= "2026-02-01"')).toEqual([
			{ kind: 'field', field: 'created', operator: '=', value: { from: '2026-01-01', to: null } },
			{ kind: 'field', field: 'created', operator: '=', value: { from: null, to: '2026-02-01' } },
		]);
	});
});
