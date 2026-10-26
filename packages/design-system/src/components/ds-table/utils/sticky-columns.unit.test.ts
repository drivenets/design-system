import { describe, expect, it } from 'vitest';
import {
	constructTable,
	type ColumnDef,
	type ColumnPinningState,
	type ColumnSizingState,
	type ColumnVisibilityState,
} from '@tanstack/react-table';
import { storeReactivityBindings } from '@tanstack/table-core/store-reactivity-bindings';
import { getStickyCellProps, resolveColumnPinning, toStickyColumns } from './sticky-columns';
import {
	COLUMN_DISPLAY_COLUMN_ID,
	EXPANDER_COLUMN_ID,
	REORDER_COLUMN_ID,
	ROW_ACTIONS_COLUMN_ID,
	SELECT_COLUMN_ID,
} from './constants';
import { dsTableFeatures } from '../ds-table-features';

type Row = { id: string; firstName: string; lastName: string; age: number; status: string };

const flatColumns: ColumnDef<typeof dsTableFeatures, Row>[] = [
	{ accessorKey: 'firstName', size: 160 },
	{ accessorKey: 'lastName', size: 140 },
	{ accessorKey: 'age', size: 100 },
	{ accessorKey: 'status', size: 120 },
];

const groupedColumns: ColumnDef<typeof dsTableFeatures, Row>[] = [
	{
		id: 'identity',
		header: 'Identity',
		columns: [{ accessorKey: 'firstName' }, { accessorKey: 'lastName' }],
	},
	{ accessorKey: 'age' },
	{ accessorKey: 'status' },
];

const LEFT_UTILITIES = [REORDER_COLUMN_ID, EXPANDER_COLUMN_ID, SELECT_COLUMN_ID];
const RIGHT_UTILITIES = [ROW_ACTIONS_COLUMN_ID, COLUMN_DISPLAY_COLUMN_ID];

const testFeatures = { ...dsTableFeatures, coreReactivityFeature: storeReactivityBindings() };

const createTestTable = (
	columns: ColumnDef<typeof dsTableFeatures, Row>[],
	columnPinning: Partial<ColumnPinningState>,
	columnVisibility: ColumnVisibilityState = {},
	columnSizing: ColumnSizingState = {},
) =>
	constructTable<typeof dsTableFeatures, Row>({
		features: testFeatures,
		data: [],
		columns,
		state: {
			columnPinning: { start: [], end: [], ...columnPinning },
			columnVisibility,
			columnSizing,
		},
	});

describe('resolveColumnPinning', () => {
	it('pins the utility columns even without consumer sticky columns', () => {
		expect(resolveColumnPinning(undefined, flatColumns)).toEqual({
			start: LEFT_UTILITIES,
			end: RIGHT_UTILITIES,
		});
	});

	it('places consumer columns after the left utilities and before row actions, in array order', () => {
		expect(
			resolveColumnPinning({ left: ['lastName', 'firstName'], right: ['status', 'age'] }, flatColumns),
		).toEqual({
			start: [...LEFT_UTILITIES, 'lastName', 'firstName'],
			end: ['status', 'age', ...RIGHT_UTILITIES],
		});
	});

	it('ignores utility ids listed by the consumer', () => {
		expect(
			resolveColumnPinning(
				{
					left: [SELECT_COLUMN_ID, 'firstName', ROW_ACTIONS_COLUMN_ID],
					right: [EXPANDER_COLUMN_ID, 'status'],
				},
				flatColumns,
			),
		).toEqual({
			start: [...LEFT_UTILITIES, 'firstName'],
			end: ['status', ...RIGHT_UTILITIES],
		});
	});

	it('pins every leaf of a top-level group when the group id is listed', () => {
		expect(resolveColumnPinning({ left: ['identity'] }, groupedColumns).start).toEqual([
			...LEFT_UTILITIES,
			'firstName',
			'lastName',
		]);
	});

	it('pins every leaf of a top-level group when one of its leaves is listed', () => {
		expect(resolveColumnPinning({ right: ['lastName'] }, groupedColumns).end).toEqual([
			'firstName',
			'lastName',
			...RIGHT_UTILITIES,
		]);
	});

	it('keeps a column on the left when it is listed on both sides', () => {
		expect(resolveColumnPinning({ left: ['age'], right: ['age', 'status'] }, flatColumns)).toEqual({
			start: [...LEFT_UTILITIES, 'age'],
			end: ['status', ...RIGHT_UTILITIES],
		});
	});

	it('matches group leaves by the id TanStack derives from a dotted accessor key', () => {
		const columns: ColumnDef<
			typeof dsTableFeatures,
			{ id: string; address: { city: string; zip: string } }
		>[] = [
			{
				id: 'address',
				columns: [{ accessorKey: 'address.city' }, { accessorKey: 'address.zip' }],
			},
		];

		expect(resolveColumnPinning({ left: ['address_city'] }, columns).start).toEqual([
			...LEFT_UTILITIES,
			'address_city',
			'address_zip',
		]);
	});

	it('keeps ids that match no column so a later column can pick them up', () => {
		expect(resolveColumnPinning({ left: ['unknown'] }, flatColumns).start).toEqual([
			...LEFT_UTILITIES,
			'unknown',
		]);
	});
});

describe('toStickyColumns', () => {
	it('drops utility ids so consumers only see their own columns', () => {
		expect(
			toStickyColumns(
				{ start: [...LEFT_UTILITIES, 'firstName'], end: ['status', ...RIGHT_UTILITIES] },
				{},
				flatColumns,
			),
		).toEqual({ left: ['firstName'], right: ['status'] });
	});

	it('returns empty sides for an empty pinning state', () => {
		expect(toStickyColumns({ start: [], end: [] }, {}, flatColumns)).toEqual({ left: [], right: [] });
	});

	it('keeps a listed group id while all of its leaves stay pinned and appends newly pinned columns', () => {
		const previous = { left: ['identity'] };
		const next = {
			start: [...LEFT_UTILITIES, 'firstName', 'lastName', 'age'],
			end: RIGHT_UTILITIES,
		};

		expect(toStickyColumns(next, previous, groupedColumns)).toEqual({ left: ['identity', 'age'], right: [] });
	});

	it('drops a listed group id once one of its leaves is unpinned', () => {
		const previous = { left: ['identity', 'age'] };
		const next = { start: [...LEFT_UTILITIES, 'age'], end: [] };

		expect(toStickyColumns(next, previous, groupedColumns)).toEqual({ left: ['age'], right: [] });
	});

	it('keeps listed ids of hidden or unknown columns', () => {
		const previous = { left: ['unknown', 'firstName'] };
		const next = { start: [...LEFT_UTILITIES, 'unknown', 'firstName', 'status'], end: [] };

		expect(toStickyColumns(next, previous, flatColumns)).toEqual({
			left: ['unknown', 'firstName', 'status'],
			right: [],
		});
	});

	it('moves a column between sides', () => {
		const previous = { left: ['firstName'], right: ['status'] };
		const next = { start: [...LEFT_UTILITIES], end: ['status', 'firstName', ...RIGHT_UTILITIES] };

		expect(toStickyColumns(next, previous, flatColumns)).toEqual({
			left: [],
			right: ['status', 'firstName'],
		});
	});

	it('round-trips through resolveColumnPinning unchanged', () => {
		const stickyColumns = { left: ['identity'], right: ['status'] };

		expect(
			toStickyColumns(resolveColumnPinning(stickyColumns, groupedColumns), stickyColumns, groupedColumns),
		).toEqual(stickyColumns);
	});
});

describe('getStickyCellProps', () => {
	it('returns no sticky props for a scrolling column', () => {
		const table = createTestTable(flatColumns, { start: ['firstName'], end: ['status'] });

		expect(getStickyCellProps(table, ['age'], false)).toEqual({});
	});

	it('offsets left columns by the summed width of the left columns before them', () => {
		const table = createTestTable(flatColumns, { start: ['firstName', 'lastName'] });

		expect(getStickyCellProps(table, ['firstName'], false)).toEqual({
			'data-sticky': 'left',
			'data-sticky-edge': undefined,
			style: { '--ds-table-sticky-offset': '0px' },
		});
		expect(getStickyCellProps(table, ['lastName'], false)).toEqual({
			'data-sticky': 'left',
			'data-sticky-edge': 'left',
			style: { '--ds-table-sticky-offset': '160px' },
		});
	});

	it('offsets right columns by the summed width of the right columns after them', () => {
		const table = createTestTable(flatColumns, { end: ['age', 'status'] });

		expect(getStickyCellProps(table, ['age'], false)).toEqual({
			'data-sticky': 'right',
			'data-sticky-edge': 'right',
			style: { '--ds-table-sticky-offset': '120px' },
		});
		expect(getStickyCellProps(table, ['status'], false)).toEqual({
			'data-sticky': 'right',
			'data-sticky-edge': undefined,
			style: { '--ds-table-sticky-offset': '0px' },
		});
	});

	it('uses the column size CSS vars once resize sizing is ready, so offsets follow a live drag', () => {
		const table = createTestTable(flatColumns, { start: ['firstName', 'lastName', 'age'] });

		expect(getStickyCellProps(table, ['age'], true).style).toEqual({
			'--ds-table-sticky-offset': 'calc((var(--col-firstName-size) + var(--col-lastName-size)) * 1px)',
		});
	});

	it('skips hidden sticky columns when computing offsets and edges', () => {
		const table = createTestTable(
			flatColumns,
			{ start: ['firstName', 'lastName', 'age'] },
			{ lastName: false },
		);

		expect(getStickyCellProps(table, ['age'], false)).toEqual({
			'data-sticky': 'left',
			'data-sticky-edge': 'left',
			style: { '--ds-table-sticky-offset': '160px' },
		});
	});

	it('marks a group header sticky with the offset of its first leaf and the edge of its last leaf', () => {
		const table = createTestTable(groupedColumns, { start: ['age', 'firstName', 'lastName'] });

		expect(getStickyCellProps(table, ['firstName', 'lastName'], false)).toEqual({
			'data-sticky': 'left',
			'data-sticky-edge': 'left',
			style: { '--ds-table-sticky-offset': '150px' },
		});
	});

	it('returns no sticky props for an empty leaf list', () => {
		const table = createTestTable(flatColumns, { start: ['firstName'] });

		expect(getStickyCellProps(table, [], false)).toEqual({});
	});
});
