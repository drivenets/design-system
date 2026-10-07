import { describe, expect, it, vi } from 'vitest';
import {
	dateFilterPresets,
	emptyFilterDocument,
	type DsFilterCondition,
	type DsFilterField,
	type DsFilterOperatorValue,
	type DsFilterValue,
} from '../ds-filters-bar.types';
import { filterRows, type DsFilterRowsOptions } from './index';

interface Device {
	name: string;
	status: string;
	tags: string[];
	latency: number;
	created: string;
	input: { vendor: string; version: number };
}

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'text',
		id: 'name',
		label: 'Name',
		operators: [
			{ value: '=', label: 'equals' },
			{ value: '!=', label: 'not equals' },
			{ value: '~', label: 'contains' },
			{ value: '!~', label: 'does not contain' },
		],
	},
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
			{ value: 'pending', label: 'Pending' },
			{ value: 'offline', label: 'Offline' },
		],
	},
	{
		type: 'enum',
		id: 'tags',
		label: 'Tags',
		operators: [
			{ value: 'IN', label: 'in' },
			{ value: 'NOT IN', label: 'not in' },
		],
		options: [
			{ value: 'core', label: 'Core' },
			{ value: 'edge', label: 'Edge' },
			{ value: 'lab', label: 'Lab' },
		],
	},
	{
		type: 'number',
		id: 'latency',
		label: 'Latency',
		operators: [
			{ value: '=', label: 'equals' },
			{ value: '!=', label: 'not equals' },
			{ value: '>', label: 'more than' },
			{ value: '>=', label: 'at least' },
			{ value: '<', label: 'less than' },
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
			{ value: '<', label: 'before' },
		],
		presets: [
			{ value: 'today', label: 'Today' },
			{ value: 'thisWeek', label: 'This week' },
			{ value: 'lastQuarter', label: 'Last quarter' },
		],
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
				operators: [{ value: '=', label: 'equals' }],
			},
			{
				type: 'number',
				id: 'version',
				label: 'Version',
				operators: [{ value: '>=', label: 'at least' }],
			},
		],
	},
];

const ROWS: ReadonlyArray<Device> = [
	{
		name: 'Edge router',
		status: 'active',
		tags: ['core', 'lab'],
		latency: 10,
		created: '2026-10-01T08:30:00Z',
		input: { vendor: 'Cisco', version: 7 },
	},
	{
		name: 'Core switch',
		status: 'pending',
		tags: ['edge'],
		latency: 50,
		created: '2026-10-05',
		input: { vendor: 'Juniper', version: 12 },
	},
	{
		name: 'Lab firewall',
		status: 'offline',
		tags: [],
		latency: 120,
		created: '2026-10-07T23:59:59Z',
		input: { vendor: 'North Star', version: 3 },
	},
];

let nextId = 0;

const search = (text: string): DsFilterCondition => ({ kind: 'search', id: String(nextId++), text });

const clause = (
	field: string,
	operator: DsFilterOperatorValue,
	value: DsFilterValue,
	subfield?: string,
): DsFilterCondition => ({ kind: 'field', id: String(nextId++), field, subfield, operator, value });

type MatchOptions = Partial<Omit<DsFilterRowsOptions<Device>, 'value'>>;

const matchConditions = (conditions: ReadonlyArray<DsFilterCondition>, options: MatchOptions = {}) =>
	filterRows(ROWS, { fields: FIELDS, value: { conditions, query: null }, ...options });

const namesMatching = (conditions: ReadonlyArray<DsFilterCondition>, options?: MatchOptions) =>
	matchConditions(conditions, options).rows.map((row) => row.name);

describe('filterRows', () => {
	it('keeps every row for an empty document', () => {
		const { rows } = filterRows(ROWS, { fields: FIELDS, value: emptyFilterDocument });

		expect(rows).toEqual(ROWS);
	});

	describe('search text', () => {
		it('matches any string value, ignoring case', () => {
			expect(namesMatching([search('ROUTER')])).toEqual(['Edge router']);
		});

		it('looks into nested objects and arrays', () => {
			expect(namesMatching([search('juniper')])).toEqual(['Core switch']);
			expect(namesMatching([search('lab')])).toEqual(['Edge router', 'Lab firewall']);
		});

		it('matches number values', () => {
			expect(namesMatching([search('120')])).toEqual(['Lab firewall']);
		});

		it('reads the row itself, not through getValue', () => {
			expect(namesMatching([search('cisco')], { getValue: () => undefined })).toEqual(['Edge router']);
		});

		it('requires every condition to match', () => {
			expect(namesMatching([search('lab'), search('firewall')])).toEqual(['Lab firewall']);
		});
	});

	describe('text field', () => {
		it.each([
			['=', 'edge ROUTER', ['Edge router']],
			['!=', 'edge router', ['Core switch', 'Lab firewall']],
			['~', 'WI', ['Core switch']],
			['!~', 'O', ['Lab firewall']],
		] as const)('compares %s ignoring case', (operator, value, expected) => {
			expect(namesMatching([clause('name', operator, value)])).toEqual(expected);
		});

		it('matches nothing when the row value is not a string', () => {
			expect(namesMatching([clause('name', '!=', 'x')], { getValue: () => 42 })).toEqual([]);
		});
	});

	describe('enum field', () => {
		it.each([
			['=', ['active'], ['Edge router']],
			['IN', ['active', 'offline'], ['Edge router', 'Lab firewall']],
			['!=', ['active'], ['Core switch', 'Lab firewall']],
			['NOT IN', ['active', 'offline'], ['Core switch']],
		] as const)('compares %s against the options', (operator, value, expected) => {
			expect(namesMatching([clause('status', operator, value)])).toEqual(expected);
		});

		it('matches a row holding several values when any of them is an option', () => {
			expect(namesMatching([clause('tags', 'IN', ['lab', 'edge'])])).toEqual(['Edge router', 'Core switch']);
			expect(namesMatching([clause('tags', 'NOT IN', ['lab'])])).toEqual(['Core switch', 'Lab firewall']);
		});
	});

	describe('number field', () => {
		it.each([
			['=', ['Core switch']],
			['!=', ['Edge router', 'Lab firewall']],
			['>', ['Lab firewall']],
			['>=', ['Core switch', 'Lab firewall']],
			['<', ['Edge router']],
			['<=', ['Edge router', 'Core switch']],
		] as const)('compares %s against a single value', (operator, expected) => {
			expect(namesMatching([clause('latency', operator, 50)])).toEqual(expected);
		});

		it('includes both ends of a range', () => {
			expect(namesMatching([clause('latency', '=', { from: 10, to: 50 })])).toEqual([
				'Edge router',
				'Core switch',
			]);
			expect(namesMatching([clause('latency', '!=', { from: 10, to: 50 })])).toEqual(['Lab firewall']);
		});

		it('leaves a null end of a range open', () => {
			expect(namesMatching([clause('latency', '=', { from: 50, to: null })])).toEqual([
				'Core switch',
				'Lab firewall',
			]);
			expect(namesMatching([clause('latency', '=', { from: null, to: 50 })])).toEqual([
				'Edge router',
				'Core switch',
			]);
		});

		it('compares > and < against the far ends of a range', () => {
			expect(namesMatching([clause('latency', '>', { from: 10, to: 50 })])).toEqual(['Lab firewall']);
			expect(namesMatching([clause('latency', '<', { from: 50, to: 120 })])).toEqual(['Edge router']);
		});

		it('matches nothing when the row value is not a number', () => {
			expect(namesMatching([clause('latency', '!=', 50)], { getValue: () => '50' })).toEqual([]);
		});
	});

	describe('date field', () => {
		const resolveDatePreset = (preset: string) =>
			preset === 'thisWeek' ? { from: '2026-10-05', to: '2026-10-11' } : null;

		it('compares UTC calendar days, ignoring the time', () => {
			expect(namesMatching([clause('created', '=', '2026-10-07')])).toEqual(['Lab firewall']);
			expect(namesMatching([clause('created', '=', '2026-10-01T23:00:00Z')])).toEqual(['Edge router']);
			expect(namesMatching([clause('created', '>', '2026-10-01')])).toEqual(['Core switch', 'Lab firewall']);
		});

		it.each([
			{ offset: 'a negative offset', created: '2026-10-07T23:30:00-05:00', day: '2026-10-08' },
			{ offset: 'a positive offset', created: '2026-10-08T02:30:00+05:00', day: '2026-10-07' },
			{ offset: 'no offset, read as UTC', created: '2026-10-07T23:30:00', day: '2026-10-07' },
		])('floors a timestamp with $offset to its UTC day', ({ created, day }) => {
			const getValue = () => created;

			expect(namesMatching([clause('created', '=', day)], { getValue })).toEqual(ROWS.map((row) => row.name));
			expect(namesMatching([clause('created', '!=', day)], { getValue })).toEqual([]);
		});

		it('floors an offset timestamp in the condition to its UTC day', () => {
			expect(namesMatching([clause('created', '=', '2026-10-06T22:00:00-05:00')])).toEqual(['Lab firewall']);
		});

		it('includes both ends of a range and leaves a null end open', () => {
			expect(namesMatching([clause('created', '=', { from: '2026-10-01', to: '2026-10-05' })])).toEqual([
				'Edge router',
				'Core switch',
			]);
			expect(namesMatching([clause('created', '=', { from: '2026-10-05', to: null })])).toEqual([
				'Core switch',
				'Lab firewall',
			]);
		});

		it('resolves a preset of the field through resolveDatePreset', () => {
			const resolve = vi.fn(resolveDatePreset);

			expect(namesMatching([clause('created', '=', 'thisWeek')], { resolveDatePreset: resolve })).toEqual([
				'Core switch',
				'Lab firewall',
			]);
			expect(resolve).toHaveBeenCalledWith('thisWeek', expect.objectContaining({ id: 'created' }));
		});

		it('matches nothing for a preset that does not resolve, whatever the operator', () => {
			expect(namesMatching([clause('created', '=', 'lastQuarter')], { resolveDatePreset })).toEqual([]);
			expect(namesMatching([clause('created', '!=', 'lastQuarter')], { resolveDatePreset })).toEqual([]);
			expect(namesMatching([clause('created', '=', 'thisWeek')])).toEqual([]);
		});

		it('matches nothing when the row value is not a string', () => {
			expect(namesMatching([clause('created', '!=', '2026-10-07')], { getValue: () => 0 })).toEqual([]);
		});
	});

	describe('compound field', () => {
		it('reads row[field][subfield] and compares by the subfield type', () => {
			expect(namesMatching([clause('input', '=', 'JUNIPER', 'vendor')])).toEqual(['Core switch']);
			expect(namesMatching([clause('input', '>=', 7, 'version')])).toEqual(['Edge router', 'Core switch']);
		});

		it('matches nothing for an unknown subfield', () => {
			expect(namesMatching([clause('input', '=', 'Cisco', 'model')])).toEqual([]);
		});
	});

	describe('getValue', () => {
		it('reads field values the product way', () => {
			const rows = [
				{ id: 'a', 'input.vendor': 'Cisco' },
				{ id: 'b', 'input.vendor': 'Juniper' },
			];

			const { rows: matched } = filterRows(rows, {
				fields: FIELDS,
				value: { conditions: [clause('input', '=', 'cisco', 'vendor')], query: null },
				getValue: (row, field, subfield) => row[`${field}.${subfield ?? ''}` as keyof typeof row],
			});

			expect(matched.map((row) => row.id)).toEqual(['a']);
		});
	});

	it('matches nothing for a field missing from the schema', () => {
		expect(namesMatching([clause('owner', '!=', 'nobody')])).toEqual([]);
	});

	describe('advanced query', () => {
		const namesMatchingQuery = (query: string, conditions: ReadonlyArray<DsFilterCondition> = []) =>
			filterRows(ROWS, { fields: FIELDS, value: { conditions, query } }).rows.map((row) => row.name);

		it('evaluates OR', () => {
			expect(namesMatchingQuery('status = active OR latency > 100')).toEqual(['Edge router', 'Lab firewall']);
		});

		it('evaluates groups, AND and search text', () => {
			expect(namesMatchingQuery('(status = pending OR status = offline) AND "lab"')).toEqual([
				'Lab firewall',
			]);
		});

		it('ignores the conditions while a query is set', () => {
			expect(namesMatchingQuery('status = pending', [search('router')])).toEqual(['Core switch']);
		});

		it('keeps every row for a query that does not parse', () => {
			expect(namesMatchingQuery('status = = active')).toEqual(ROWS.map((row) => row.name));
		});
	});

	describe('active toggles', () => {
		const resolveDatePreset = (preset: string) =>
			preset === 'thisWeek' ? { from: '2026-10-05', to: '2026-10-11' } : null;

		it('narrow the rows the document matched', () => {
			const atLeast50 = [clause('latency', '>=', 50)];

			expect(namesMatching(atLeast50, { activeToggles: [{ field: 'status', value: 'pending' }] })).toEqual([
				'Core switch',
			]);
			expect(namesMatching(atLeast50, { activeToggles: [{ field: 'status', value: 'active' }] })).toEqual([]);
		});

		it('combine with OR on one field', () => {
			const activeToggles = [
				{ field: 'status', value: 'active' },
				{ field: 'status', value: 'offline' },
			];

			expect(namesMatching([], { activeToggles })).toEqual(['Edge router', 'Lab firewall']);
		});

		it('combine with AND across fields', () => {
			const activeToggles = [
				{ field: 'status', value: 'active' },
				{ field: 'status', value: 'offline' },
				{ field: 'created', value: 'thisWeek' },
			];

			expect(namesMatching([], { activeToggles, resolveDatePreset })).toEqual(['Lab firewall']);
		});

		it('ignore a toggle whose field is missing from the schema', () => {
			expect(namesMatching([], { activeToggles: [{ field: 'owner', value: 'nobody' }] })).toEqual(
				ROWS.map((row) => row.name),
			);
			expect(
				namesMatching([], {
					activeToggles: [
						{ field: 'owner', value: 'nobody' },
						{ field: 'status', value: 'pending' },
					],
				}),
			).toEqual(['Core switch']);
		});

		it('match a row holding several options when any of them is the pin', () => {
			expect(namesMatching([], { activeToggles: [{ field: 'tags', value: 'edge' }] })).toEqual([
				'Core switch',
			]);
		});
	});

	describe('getPinCount', () => {
		const resolveDatePreset = (preset: string) =>
			preset === 'thisWeek' ? { from: '2026-10-05', to: '2026-10-11' } : null;

		it("counts the document's rows the pin alone matches, ignoring the active toggles", () => {
			const { getPinCount } = matchConditions([clause('latency', '>=', 50)], {
				activeToggles: [{ field: 'status', value: 'pending' }],
				resolveDatePreset,
			});

			expect(getPinCount({ field: 'status', value: 'pending' })).toBe(1);
			expect(getPinCount({ field: 'status', value: 'offline' })).toBe(1);
			expect(getPinCount({ field: 'status', value: 'active' })).toBe(0);
			expect(getPinCount({ field: 'created', value: 'thisWeek' })).toBe(2);
		});

		it('counts each pin only once', () => {
			const getValue = vi.fn((row: Device, field: string) => row[field as keyof Device]);
			const { getPinCount } = matchConditions([], { getValue });

			expect(getValue).not.toHaveBeenCalled();

			getPinCount({ field: 'status', value: 'active' });
			getPinCount({ field: 'status', value: 'active' });

			expect(getValue).toHaveBeenCalledTimes(ROWS.length);
		});
	});

	describe('built-in date presets', () => {
		interface Event {
			name: string;
			at: string;
		}

		const PRESET_FIELDS: ReadonlyArray<DsFilterField> = [
			{ type: 'date', id: 'at', label: 'At', presets: dateFilterPresets },
		];

		const EVENTS: ReadonlyArray<Event> = [
			{ name: 'new year', at: '2026-01-01T00:00:00Z' },
			{ name: 'august', at: '2026-08-31T23:59:59Z' },
			{ name: 'september 1', at: '2026-09-01' },
			{ name: 'september 30', at: '2026-09-30T12:00:00Z' },
			{ name: 'october 1', at: '2026-10-01' },
			{ name: 'october 8', at: '2026-10-08T08:00:00Z' },
			{ name: 'october 14', at: '2026-10-14T23:59:59Z' },
			{ name: 'october 15', at: '2026-10-15T00:00:00Z' },
			{ name: 'december 31', at: '2026-12-31T23:00:00Z' },
		];

		// Late in the day in UTC, so a local time zone ahead of UTC would already be on the next day.
		const NOW = new Date('2026-10-15T23:30:00Z');

		const eventsMatching = (
			value: DsFilterValue,
			options: Partial<DsFilterRowsOptions<Event>> = {},
			operator: DsFilterOperatorValue = '=',
		) =>
			filterRows(EVENTS, {
				fields: PRESET_FIELDS,
				value: { conditions: [{ kind: 'field', field: 'at', operator, value }] },
				now: NOW,
				...options,
			}).rows.map((event) => event.name);

		it.each([
			['today', ['october 15']],
			['yesterday', ['october 14']],
			['last7Days', ['october 14', 'october 15']],
			['last30Days', ['september 30', 'october 1', 'october 8', 'october 14', 'october 15']],
			['thisMonth', ['october 1', 'october 8', 'october 14', 'october 15']],
			['lastMonth', ['september 1', 'september 30']],
			[
				'thisYear',
				[
					'new year',
					'august',
					'september 1',
					'september 30',
					'october 1',
					'october 8',
					'october 14',
					'october 15',
				],
			],
		] as const)('resolves %s in UTC calendar days counted from now', (preset, expected) => {
			expect(eventsMatching(preset)).toEqual(expected);
		});

		it('ends last90Days on today and includes the 89 days before it', () => {
			expect(eventsMatching('last90Days', { now: new Date('2026-11-29T10:00:00Z') })).toEqual([
				'september 1',
				'september 30',
				'october 1',
				'october 8',
				'october 14',
				'october 15',
			]);
		});

		it('counts lastMonth back across the turn of the year', () => {
			expect(eventsMatching('lastMonth', { now: new Date('2027-01-10T00:00:00Z') })).toEqual(['december 31']);
			expect(eventsMatching('thisYear', { now: new Date('2026-01-01T00:00:00Z') })).toEqual(['new year']);
		});

		it('compares the other operators against the days a preset covers', () => {
			expect(eventsMatching('thisMonth', {}, '<')).toEqual([
				'new year',
				'august',
				'september 1',
				'september 30',
			]);
			expect(eventsMatching('last7Days', {}, '!=')).toEqual([
				'new year',
				'august',
				'september 1',
				'september 30',
				'october 1',
				'october 8',
				'december 31',
			]);
		});

		it('counts from the time of the call by default', () => {
			vi.useFakeTimers();
			vi.setSystemTime(new Date('2026-10-08T12:00:00Z'));

			try {
				expect(eventsMatching('today', { now: undefined })).toEqual(['october 8']);
			} finally {
				vi.useRealTimers();
			}
		});

		it('asks resolveDatePreset first, so it can override a built-in preset', () => {
			const resolveDatePreset = vi.fn((preset: string) =>
				preset === 'today' ? { from: '2026-09-01', to: '2026-09-01' } : null,
			);

			expect(eventsMatching('today', { resolveDatePreset })).toEqual(['september 1']);
			expect(eventsMatching('yesterday', { resolveDatePreset })).toEqual(['october 14']);
			expect(resolveDatePreset).toHaveBeenCalledWith('yesterday', expect.objectContaining({ id: 'at' }));
		});

		it('treats a built-in value the field does not list as a date, which matches nothing', () => {
			const { rows } = filterRows(EVENTS, {
				fields: [{ type: 'date', id: 'at', label: 'At', presets: ['today'] }],
				value: { conditions: [{ kind: 'field', field: 'at', operator: '=', value: 'yesterday' }] },
				now: NOW,
			});

			expect(rows).toEqual([]);
		});

		it('resolves a built-in preset given as an object with its own label', () => {
			const { rows } = filterRows(EVENTS, {
				fields: [{ type: 'date', id: 'at', label: 'At', presets: [{ value: 'today', label: 'Now' }] }],
				value: { conditions: [{ kind: 'field', field: 'at', operator: '=', value: 'today' }] },
				now: NOW,
			});

			expect(rows.map((event) => event.name)).toEqual(['october 15']);
		});

		it('resolves a pinned preset and counts it', () => {
			const { rows, getPinCount } = filterRows(EVENTS, {
				fields: PRESET_FIELDS,
				value: {},
				activeToggles: [{ field: 'at', value: 'lastMonth' }],
				now: NOW,
			});

			expect(rows.map((event) => event.name)).toEqual(['september 1', 'september 30']);
			expect(getPinCount({ field: 'at', value: 'last7Days' })).toBe(2);
		});

		it('resolves a preset written in an advanced query', () => {
			const { rows } = filterRows(EVENTS, {
				fields: PRESET_FIELDS,
				value: { query: 'at = "Yesterday" OR at = today' },
				now: NOW,
			});

			expect(rows.map((event) => event.name)).toEqual(['october 14', 'october 15']);
		});
	});

	describe('shorthand fields and documents', () => {
		const SHORTHAND_FIELDS: ReadonlyArray<DsFilterField> = [
			{ type: 'text', id: 'name', label: 'Name' },
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				operators: ['IN'],
				options: [{ value: 'active', label: 'Active' }],
			},
			{ type: 'number', id: 'latency', label: 'Latency' },
		];

		it('matches a document whose conditions have no ids and that has no query', () => {
			const { rows } = filterRows(ROWS, {
				fields: SHORTHAND_FIELDS,
				value: { conditions: [{ kind: 'field', field: 'latency', operator: '>=', value: 50 }] },
			});

			expect(rows.map((row) => row.name)).toEqual(['Core switch', 'Lab firewall']);
		});

		it('keeps every row for an empty input document', () => {
			expect(filterRows(ROWS, { fields: SHORTHAND_FIELDS, value: {} }).rows).toEqual(ROWS);
		});

		it('parses a query against the built-in operators of a field that lists none', () => {
			const { rows } = filterRows(ROWS, {
				fields: SHORTHAND_FIELDS,
				value: { query: 'name ~ "router" OR latency > 100' },
			});

			expect(rows.map((row) => row.name)).toEqual(['Edge router', 'Lab firewall']);
		});

		it('rejects, and so ignores, a query operator the field narrowed away', () => {
			const { rows } = filterRows(ROWS, {
				fields: SHORTHAND_FIELDS,
				value: { query: 'status = active OR latency > 100' },
			});

			expect(rows).toEqual(ROWS);
		});
	});
});
