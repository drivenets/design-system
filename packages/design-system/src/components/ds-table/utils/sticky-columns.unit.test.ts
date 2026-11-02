import { describe, expect, it } from 'vitest';
import {
	createTable,
	getCoreRowModel,
	type ColumnDef,
	type ColumnPinningState,
	type ColumnSizingState,
	type VisibilityState,
} from '@tanstack/react-table';
import { getStickyCellProps, resolveColumnPinning, toStickyColumns } from './sticky-columns';
import {
	COLUMN_DISPLAY_COLUMN_ID,
	EXPANDER_COLUMN_ID,
	REORDER_COLUMN_ID,
	ROW_ACTIONS_COLUMN_ID,
	SELECT_COLUMN_ID,
} from './constants';

type Row = { id: string; firstName: string; lastName: string; age: number; status: string };

const flatColumns: ColumnDef<Row>[] = [
	{ accessorKey: 'firstName', size: 160 },
	{ accessorKey: 'lastName', size: 140 },
	{ accessorKey: 'age', size: 100 },
	{ accessorKey: 'status', size: 120 },
];

const groupedColumns: ColumnDef<Row>[] = [
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

const createTestTable = (
	columns: ColumnDef<Row>[],
	columnPinning: ColumnPinningState,
	columnVisibility: VisibilityState = {},
	columnSizing: ColumnSizingState = {},
) =>
	createTable<Row>({
		data: [],
		columns,
		getCoreRowModel: getCoreRowModel(),
		state: {
			columnPinning,
			columnVisibility,
			columnSizing,
			columnOrder: [],
			columnSizingInfo: {
				startOffset: null,
				startSize: null,
				deltaOffset: null,
				deltaPercentage: null,
				isResizingColumn: false,
				columnSizingStart: [],
			},
		},
		onStateChange: () => undefined,
		renderFallbackValue: null,
	});

describe('resolveColumnPinning', () => {
	it('pins the utility columns even without consumer sticky columns', () => {
		expect(resolveColumnPinning(undefined, flatColumns)).toEqual({
			left: LEFT_UTILITIES,
			right: RIGHT_UTILITIES,
		});
	});

	it('places consumer columns after the left utilities and before row actions, in array order', () => {
		expect(
			resolveColumnPinning({ left: ['lastName', 'firstName'], right: ['status', 'age'] }, flatColumns),
		).toEqual({
			left: [...LEFT_UTILITIES, 'lastName', 'firstName'],
			right: ['status', 'age', ...RIGHT_UTILITIES],
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
			left: [...LEFT_UTILITIES, 'firstName'],
			right: ['status', ...RIGHT_UTILITIES],
		});
	});

	it('pins every leaf of a top-level group when the group id is listed', () => {
		expect(resolveColumnPinning({ left: ['identity'] }, groupedColumns).left).toEqual([
			...LEFT_UTILITIES,
			'firstName',
			'lastName',
		]);
	});

	it('pins every leaf of a top-level group when one of its leaves is listed', () => {
		expect(resolveColumnPinning({ right: ['lastName'] }, groupedColumns).right).toEqual([
			'firstName',
			'lastName',
			...RIGHT_UTILITIES,
		]);
	});

	it('orders sticky columns by the column order when one is given', () => {
		expect(
			resolveColumnPinning({ left: ['firstName', 'identity'], right: ['age', 'status'] }, groupedColumns, [
				'status',
				'lastName',
				'firstName',
				'age',
			]),
		).toEqual({
			left: [...LEFT_UTILITIES, 'lastName', 'firstName'],
			right: ['status', 'age', ...RIGHT_UTILITIES],
		});
	});

	it('keeps a column on the left when it is listed on both sides', () => {
		expect(resolveColumnPinning({ left: ['age'], right: ['age', 'status'] }, flatColumns)).toEqual({
			left: [...LEFT_UTILITIES, 'age'],
			right: ['status', ...RIGHT_UTILITIES],
		});
	});

	it('matches group leaves by the id TanStack derives from a dotted accessor key', () => {
		const columns: ColumnDef<{ id: string; address: { city: string; zip: string } }>[] = [
			{
				id: 'address',
				columns: [{ accessorKey: 'address.city' }, { accessorKey: 'address.zip' }],
			},
		];

		expect(resolveColumnPinning({ left: ['address_city'] }, columns).left).toEqual([
			...LEFT_UTILITIES,
			'address_city',
			'address_zip',
		]);
	});

	it('keeps ids that match no column so a later column can pick them up', () => {
		expect(resolveColumnPinning({ left: ['unknown'] }, flatColumns).left).toEqual([
			...LEFT_UTILITIES,
			'unknown',
		]);
	});
});

describe('toStickyColumns', () => {
	it('drops utility ids so consumers only see their own columns', () => {
		expect(
			toStickyColumns(
				{ left: [...LEFT_UTILITIES, 'firstName'], right: ['status', ...RIGHT_UTILITIES] },
				{},
				flatColumns,
			),
		).toEqual({ left: ['firstName'], right: ['status'] });
	});

	it('returns empty sides for an empty pinning state', () => {
		expect(toStickyColumns({}, {}, flatColumns)).toEqual({ left: [], right: [] });
	});

	it('keeps a listed group id while all of its leaves stay pinned and appends newly pinned columns', () => {
		const previous = { left: ['identity'] };
		const next = {
			left: [...LEFT_UTILITIES, 'firstName', 'lastName', 'age'],
			right: RIGHT_UTILITIES,
		};

		expect(toStickyColumns(next, previous, groupedColumns)).toEqual({ left: ['identity', 'age'], right: [] });
	});

	it('drops a listed group id once one of its leaves is unpinned', () => {
		const previous = { left: ['identity', 'age'] };
		const next = { left: [...LEFT_UTILITIES, 'age'] };

		expect(toStickyColumns(next, previous, groupedColumns)).toEqual({ left: ['age'], right: [] });
	});

	it('keeps listed ids of hidden or unknown columns', () => {
		const previous = { left: ['unknown', 'firstName'] };
		const next = { left: [...LEFT_UTILITIES, 'unknown', 'firstName', 'status'] };

		expect(toStickyColumns(next, previous, flatColumns)).toEqual({
			left: ['unknown', 'firstName', 'status'],
			right: [],
		});
	});

	it('moves a column between sides', () => {
		const previous = { left: ['firstName'], right: ['status'] };
		const next = { left: [...LEFT_UTILITIES], right: ['status', 'firstName', ...RIGHT_UTILITIES] };

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
		const table = createTestTable(flatColumns, { left: ['firstName'], right: ['status'] });

		expect(getStickyCellProps(table, ['age'], false)).toEqual({});
	});

	it('offsets left columns by the summed width of the left columns before them', () => {
		const table = createTestTable(flatColumns, { left: ['firstName', 'lastName'] });

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
		const table = createTestTable(flatColumns, { right: ['age', 'status'] });

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
		const table = createTestTable(flatColumns, { left: ['firstName', 'lastName', 'age'] });

		expect(getStickyCellProps(table, ['age'], true).style).toEqual({
			'--ds-table-sticky-offset': 'calc((var(--col-firstName-size) + var(--col-lastName-size)) * 1px)',
		});
	});

	it('skips hidden sticky columns when computing offsets and edges', () => {
		const table = createTestTable(
			flatColumns,
			{ left: ['firstName', 'lastName', 'age'] },
			{ lastName: false },
		);

		expect(getStickyCellProps(table, ['age'], false)).toEqual({
			'data-sticky': 'left',
			'data-sticky-edge': 'left',
			style: { '--ds-table-sticky-offset': '160px' },
		});
	});

	it('marks a group header sticky with the offset of its first leaf and the edge of its last leaf', () => {
		const table = createTestTable(groupedColumns, { left: ['age', 'firstName', 'lastName'] });

		expect(getStickyCellProps(table, ['firstName', 'lastName'], false)).toEqual({
			'data-sticky': 'left',
			'data-sticky-edge': 'left',
			style: { '--ds-table-sticky-offset': '150px' },
		});
	});

	it('returns no sticky props for an empty leaf list', () => {
		const table = createTestTable(flatColumns, { left: ['firstName'] });

		expect(getStickyCellProps(table, [], false)).toEqual({});
	});
});
