import { describe, expect, it } from 'vitest';
import { emptyFilterDocument, type DsFilterDocument } from './ds-filters-bar.types';
import { toFilterDocument } from './filter-document';

describe('toFilterDocument', () => {
	it('returns a full document as it is', () => {
		const document: DsFilterDocument = {
			conditions: [{ kind: 'search', id: 'a', text: 'router' }],
			query: null,
		};

		expect(toFilterDocument(document)).toBe(document);
		expect(toFilterDocument(emptyFilterDocument)).toBe(emptyFilterDocument);
	});

	it('fills in missing conditions and query', () => {
		expect(toFilterDocument({})).toEqual({ conditions: [], query: null });
		expect(toFilterDocument({ query: 'a = 1 OR b = 2' })).toEqual({
			conditions: [],
			query: 'a = 1 OR b = 2',
		});
	});

	it('gives a condition without an id one from its position', () => {
		expect(
			toFilterDocument({
				conditions: [
					{ kind: 'search', text: 'router' },
					{ kind: 'field', id: 'status', field: 'status', operator: '=', value: ['active'] },
					{ kind: 'field', field: 'ports', operator: '>', value: 10 },
				],
			}),
		).toEqual({
			conditions: [
				{ kind: 'search', id: 'filter-condition-0', text: 'router' },
				{ kind: 'field', id: 'status', field: 'status', operator: '=', value: ['active'] },
				{ kind: 'field', id: 'filter-condition-2', field: 'ports', operator: '>', value: 10 },
			],
			query: null,
		});
	});

	it('gives the same input the same ids every time', () => {
		const input = {
			conditions: [{ kind: 'search', text: 'a' } as const, { kind: 'search', text: 'b' } as const],
		};

		expect(toFilterDocument(input)).toEqual(toFilterDocument(input));
	});

	it('never reuses an id another condition of the document has', () => {
		const { conditions } = toFilterDocument({
			conditions: [
				{ kind: 'search', text: 'a' },
				{ kind: 'search', id: 'filter-condition-0', text: 'b' },
				{ kind: 'search', id: 'filter-condition-0-1', text: 'c' },
			],
		});

		expect(conditions.map((condition) => condition.id)).toEqual([
			'filter-condition-0-2',
			'filter-condition-0',
			'filter-condition-0-1',
		]);
	});
});
