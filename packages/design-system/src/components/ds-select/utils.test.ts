import { describe, expect, it } from 'vitest';
import type { DsSelectOption } from './ds-select.types';
import { SELECT_ALL_VALUE, getUserSelectedItems } from './utils';

describe('getUserSelectedItems', () => {
	it('should return all items when none is the internal select-all', () => {
		const items: DsSelectOption[] = [
			{ value: 'a', label: 'A' },
			{ value: 'b', label: 'B' },
		];

		expect(getUserSelectedItems(items)).toEqual(items);
	});

	it('should filter out the internal select-all item', () => {
		const items: DsSelectOption[] = [
			{ value: SELECT_ALL_VALUE, label: 'All' },
			{ value: 'a', label: 'A' },
			{ value: 'b', label: 'B' },
		];

		expect(getUserSelectedItems(items)).toEqual([
			{ value: 'a', label: 'A' },
			{ value: 'b', label: 'B' },
		]);
	});

	it('should return an empty array when only the select-all item is present', () => {
		const items: DsSelectOption[] = [{ value: SELECT_ALL_VALUE, label: 'All' }];

		expect(getUserSelectedItems(items)).toEqual([]);
	});

	it('should return an empty array for empty input', () => {
		expect(getUserSelectedItems([])).toEqual([]);
	});
});
