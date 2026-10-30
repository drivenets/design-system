import { describe, expect, it } from 'vitest';
import type { ColumnDef } from '@tanstack/react-table';
import {
	getColumnDefLeafIds,
	getPinnedColumnOrder,
	resolveColumnOrder,
	sortByColumnOrder,
	toTableColumnOrder,
} from './column-order';
import { COLUMN_DISPLAY_COLUMN_ID, EXPANDER_COLUMN_ID, SELECT_COLUMN_ID } from './constants';

type Row = { id: string; firstName: string; lastName: string; age: number; status: string };

describe('getColumnDefLeafIds', () => {
	it('lists leaf ids depth-first, deriving them like TanStack', () => {
		const columns: ColumnDef<Row>[] = [
			{ id: SELECT_COLUMN_ID },
			{
				id: 'identity',
				columns: [{ accessorKey: 'firstName' }, { id: 'nested', columns: [{ header: 'Last' }] }],
			},
			{ accessorKey: 'age' },
		];

		expect(getColumnDefLeafIds(columns)).toEqual([SELECT_COLUMN_ID, 'firstName', 'Last', 'age']);
	});
});

describe('sortByColumnOrder', () => {
	it('ranks each item by its first listed leaf and keeps unlisted items last, in their own order', () => {
		const groups = [
			{ id: 'a', leaves: ['a1', 'a2'] },
			{ id: 'b', leaves: ['b1'] },
			{ id: 'c', leaves: ['c1'] },
		];

		expect(sortByColumnOrder(groups, ['b1', 'a2'], (group) => group.leaves).map((group) => group.id)).toEqual(
			['b', 'a', 'c'],
		);
	});
});

describe('resolveColumnOrder', () => {
	const flat: ColumnDef<Row>[] = [
		{ accessorKey: 'firstName' },
		{ accessorKey: 'lastName' },
		{ accessorKey: 'age' },
		{ accessorKey: 'status' },
	];
	const grouped: ColumnDef<Row>[] = [
		{ id: 'identity', columns: [{ accessorKey: 'firstName' }, { accessorKey: 'lastName' }] },
		{ accessorKey: 'age' },
		{ accessorKey: 'status' },
	];

	it('keeps the definition order without a column order', () => {
		expect(resolveColumnOrder(undefined, flat)).toEqual(['firstName', 'lastName', 'age', 'status']);
	});

	it('puts listed columns first and the rest after them in definition order', () => {
		expect(resolveColumnOrder(['status', 'lastName'], flat)).toEqual([
			'status',
			'lastName',
			'firstName',
			'age',
		]);
	});

	it('ignores unknown and repeated ids', () => {
		expect(resolveColumnOrder(['age', 'missing', 'age', 'firstName'], flat)).toEqual([
			'age',
			'firstName',
			'lastName',
			'status',
		]);
	});

	it('keeps an unlisted leaf with its group, after its listed siblings', () => {
		expect(resolveColumnOrder(['age', 'lastName', 'status'], grouped)).toEqual([
			'age',
			'lastName',
			'firstName',
			'status',
		]);
	});

	it('keeps a group in one piece when the listed order splits it', () => {
		expect(resolveColumnOrder(['firstName', 'age', 'lastName', 'status'], grouped)).toEqual([
			'firstName',
			'lastName',
			'age',
			'status',
		]);
	});

	it('leaves utility columns out', () => {
		expect(resolveColumnOrder(undefined, [{ id: SELECT_COLUMN_ID }, ...flat])).toEqual([
			'firstName',
			'lastName',
			'age',
			'status',
		]);
	});
});

describe('toTableColumnOrder', () => {
	it('keeps utility columns in their slots and fills the rest in order', () => {
		const allLeafIds = [
			EXPANDER_COLUMN_ID,
			SELECT_COLUMN_ID,
			'firstName',
			'lastName',
			COLUMN_DISPLAY_COLUMN_ID,
		];

		expect(toTableColumnOrder(['lastName', 'firstName'], allLeafIds)).toEqual([
			EXPANDER_COLUMN_ID,
			SELECT_COLUMN_ID,
			'lastName',
			'firstName',
			COLUMN_DISPLAY_COLUMN_ID,
		]);
	});
});

describe('getPinnedColumnOrder', () => {
	const order = ['firstName', 'lastName', 'age', 'status'];

	it('moves a pinned column to the end of the sticky block', () => {
		expect(getPinnedColumnOrder(order, ['firstName'], ['firstName', 'status'])).toEqual([
			'firstName',
			'status',
			'lastName',
			'age',
		]);
	});

	it('moves an unpinned column to the start of the non-sticky block', () => {
		expect(getPinnedColumnOrder(order, ['firstName', 'lastName'], ['lastName'])).toEqual([
			'lastName',
			'firstName',
			'age',
			'status',
		]);
	});

	it('moves every leaf of a pinned group together, in order', () => {
		expect(getPinnedColumnOrder(order, [], ['age', 'lastName'])).toEqual([
			'lastName',
			'age',
			'firstName',
			'status',
		]);
	});

	it('returns the same order when sticky membership is unchanged', () => {
		expect(getPinnedColumnOrder(order, ['age'], ['age'])).toBe(order);
	});
});
