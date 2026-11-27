import { describe, expect, it } from 'vitest';
import { serializeFilterQuery } from './serialize-query';

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

	it('keeps an empty list and a fully open range in the text', () => {
		const text = serializeFilterQuery([
			{ kind: 'field', id: '1', field: 'status', operator: '=', value: [] },
			{ kind: 'field', id: '2', field: 'status', operator: '!=', value: [] },
			{ kind: 'field', id: '3', field: 'latency', operator: '=', value: { from: null, to: null } },
			{ kind: 'field', id: '4', field: 'status', operator: '=', value: ['active'] },
		]);

		expect(text).toBe('status IN () AND status NOT IN () AND latency = () AND status = "active"');
	});
});
