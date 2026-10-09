import { describe, expect, it } from 'vitest';
import { dateFilterPresets, type DsFilterField } from './ds-filters-bar.types';
import { resolveLocale } from './ds-filters-bar.utils';
import { resolveFields } from './resolve-fields';

const operatorsOf = (fields: ReadonlyArray<DsFilterField>) =>
	resolveFields(fields).flatMap((field) => (field.type === 'compound' ? [] : [field.operators]));

describe('resolveFields', () => {
	it('gives a field without operators every operator of its type, with the default words', () => {
		expect(
			operatorsOf([
				{ type: 'text', id: 'name', label: 'Name' },
				{ type: 'enum', id: 'status', label: 'Status', options: [] },
				{ type: 'number', id: 'ports', label: 'Ports' },
				{ type: 'date', id: 'seen', label: 'Seen' },
			]),
		).toEqual([
			[
				{ value: '=', label: 'equals', symbol: '=' },
				{ value: '!=', label: 'not equals', symbol: '≠' },
				{ value: '~', label: 'contains', symbol: '~' },
				{ value: '!~', label: 'does not contain', symbol: '≁' },
			],
			[
				{ value: '=', label: 'is', symbol: '=' },
				{ value: '!=', label: 'is not', symbol: '≠' },
				{ value: 'IN', label: 'is any of', symbol: '∈' },
				{ value: 'NOT IN', label: 'is none of', symbol: '∉' },
			],
			[
				{ value: '=', label: 'equals', symbol: '=' },
				{ value: '!=', label: 'not equals', symbol: '≠' },
				{ value: '>', label: 'greater than', symbol: '>' },
				{ value: '>=', label: 'at least', symbol: '≥' },
				{ value: '<', label: 'less than', symbol: '<' },
				{ value: '<=', label: 'at most', symbol: '≤' },
			],
			[
				{ value: '=', label: 'is', symbol: '=' },
				{ value: '!=', label: 'is not', symbol: '≠' },
				{ value: '>', label: 'after', symbol: '>' },
				{ value: '>=', label: 'on or after', symbol: '≥' },
				{ value: '<', label: 'before', symbol: '<' },
				{ value: '<=', label: 'on or before', symbol: '≤' },
			],
		]);
	});

	it('keeps only the listed operators, in the listed order', () => {
		expect(operatorsOf([{ type: 'text', id: 'name', label: 'Name', operators: ['~', '='] }])).toEqual([
			[
				{ value: '~', label: 'contains', symbol: '~' },
				{ value: '=', label: 'equals', symbol: '=' },
			],
		]);
	});

	it('lets an operator object override the words for its field only', () => {
		const fields: ReadonlyArray<DsFilterField> = [
			{ type: 'number', id: 'ports', label: 'Ports', operators: [{ value: '>', label: 'more than' }, '<'] },
			{ type: 'number', id: 'speed', label: 'Speed', operators: ['>'] },
		];

		expect(operatorsOf(fields)).toEqual([
			[
				{ value: '>', label: 'more than', symbol: '>' },
				{ value: '<', label: 'less than', symbol: '<' },
			],
			[{ value: '>', label: 'greater than', symbol: '>' }],
		]);
	});

	it('takes words from locale.operators by field type, below the field’s own', () => {
		const locale = resolveLocale({
			operators: {
				number: { '>': { label: 'more than' } },
				date: { '>': { label: 'later than', symbol: '»' } },
			},
		});
		const fields: ReadonlyArray<DsFilterField> = [
			{ type: 'number', id: 'ports', label: 'Ports', operators: ['>', { value: '<', symbol: '‹' }] },
			{ type: 'date', id: 'seen', label: 'Seen', operators: ['>', { value: '<', label: 'vor' }] },
		];

		expect(
			resolveFields(fields, locale).flatMap((field) => ('operators' in field ? [field.operators] : [])),
		).toEqual([
			[
				{ value: '>', label: 'more than', symbol: '>' },
				{ value: '<', label: 'less than', symbol: '‹' },
			],
			[
				{ value: '>', label: 'later than', symbol: '»' },
				{ value: '<', label: 'vor', symbol: '<' },
			],
		]);
	});

	it('labels built-in date presets from locale.datePresets and keeps custom ones as they are', () => {
		const [field] = resolveFields(
			[
				{
					type: 'date',
					id: 'seen',
					label: 'Seen',
					presets: ['today', 'last7Days', { value: 'lastQuarter', label: 'Last quarter' }],
				},
			],
			resolveLocale({ datePresets: { today: 'Current day' } }),
		);

		expect(field?.type === 'date' && field.presets).toEqual([
			{ value: 'today', label: 'Current day' },
			{ value: 'last7Days', label: 'Last 7 days' },
			{ value: 'lastQuarter', label: 'Last quarter' },
		]);
	});

	it('defaults every built-in date preset label', () => {
		const [field] = resolveFields([{ type: 'date', id: 'seen', label: 'Seen', presets: dateFilterPresets }]);

		expect(field?.type === 'date' && field.presets.map((preset) => preset.label)).toEqual([
			'Today',
			'Yesterday',
			'Last 7 days',
			'Last 30 days',
			'Last 90 days',
			'This month',
			'Last month',
			'This year',
		]);
	});

	it('gives a date field without presets none', () => {
		const [field] = resolveFields([{ type: 'date', id: 'seen', label: 'Seen' }]);

		expect(field?.type === 'date' && field.presets).toEqual([]);
	});

	it('resolves compound subfields', () => {
		const [field] = resolveFields([
			{
				type: 'compound',
				id: 'hardware',
				label: 'Hardware',
				subfields: [{ type: 'text', id: 'model', label: 'Model', operators: ['~'] }],
			},
		]);

		expect(field?.type === 'compound' && field.subfields).toEqual([
			{
				type: 'text',
				id: 'model',
				label: 'Model',
				operators: [{ value: '~', label: 'contains', symbol: '~' }],
			},
		]);
	});

	it('is idempotent, so resolved fields keep their words whatever the locale', () => {
		const resolved = resolveFields(
			[{ type: 'enum', id: 'status', label: 'Status', options: [] }],
			resolveLocale({ operators: { enum: { '=': { label: 'ist' } } } }),
		);

		expect(resolveFields(resolved)).toEqual(resolved);
	});
});
