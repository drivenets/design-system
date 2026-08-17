import { describe, expect, it } from 'vitest';
import type { ColumnDef } from '@tanstack/react-table';
import { createSkeletonRows, getAugmentedColumns, toSkeletonColumns } from './table-columns';
import { EXPANDER_COLUMN_ID, REORDER_COLUMN_ID, SELECT_COLUMN_ID, SKELETON_ROW_COUNT } from './constants';

type Row = { id: string; name?: string };

const nameColumn: ColumnDef<Row> = { id: 'name', accessorKey: 'name' };

const noFeatures = {
	selectable: false,
	expandable: false,
	reorderable: false,
	virtualized: false,
	showSelectAllCheckbox: true,
} as const;

const columnIds = (columns: ColumnDef<Row>[]) => columns.map((column) => column.id);

describe('getAugmentedColumns', () => {
	it('returns consumer columns unchanged when no features are on', () => {
		expect(columnIds(getAugmentedColumns([nameColumn], noFeatures))).toEqual(['name']);
	});

	it('prepends builtins in visual order: reorder, expander, select, then consumer columns', () => {
		expect(
			columnIds(
				getAugmentedColumns([nameColumn], {
					...noFeatures,
					selectable: true,
					expandable: true,
					reorderable: true,
				}),
			),
		).toEqual([REORDER_COLUMN_ID, EXPANDER_COLUMN_ID, SELECT_COLUMN_ID, 'name']);
	});

	it('omits select and expander when those flags are falsy', () => {
		expect(columnIds(getAugmentedColumns([nameColumn], { ...noFeatures, reorderable: true }))).toEqual([
			REORDER_COLUMN_ID,
			'name',
		]);
	});

	it('omits reorder when the table is virtualized', () => {
		expect(
			columnIds(
				getAugmentedColumns([nameColumn], {
					...noFeatures,
					selectable: true,
					expandable: true,
					reorderable: true,
					virtualized: true,
				}),
			),
		).toEqual([EXPANDER_COLUMN_ID, SELECT_COLUMN_ID, 'name']);
	});

	it('disables sorting and resizing on builtin columns', () => {
		const columns = getAugmentedColumns([nameColumn], {
			...noFeatures,
			selectable: true,
			expandable: true,
			reorderable: true,
		});

		for (const column of columns.slice(0, 3)) {
			expect(column.enableSorting).toBe(false);
			expect(column.enableResizing).toBe(false);
		}
	});
});

describe('toSkeletonColumns', () => {
	it('replaces a leaf cell with loadingCell when provided', () => {
		const loadingCell = () => 'loading';
		const result = toSkeletonColumns<Row, unknown>([{ id: 'name', cell: () => 'name', loadingCell }])[0];

		expect(result?.cell).toBe(loadingCell);
	});

	it('replaces a leaf cell with a default skeleton when loadingCell is omitted', () => {
		const originalCell = () => 'name';
		const result = toSkeletonColumns<Row, unknown>([{ id: 'name', cell: originalCell }])[0];

		expect(result?.cell).not.toBe(originalCell);
		expect(result?.cell).toBeTypeOf('function');
	});

	it('recurses into group columns', () => {
		const loadingCell = () => 'loading';
		const leafCell = () => 'leaf';
		const group = toSkeletonColumns<Row, unknown>([
			{
				id: 'group',
				columns: [
					{ id: 'a', cell: leafCell },
					{ id: 'b', cell: leafCell, loadingCell },
				],
			},
		])[0];

		const nested = group && 'columns' in group ? group.columns : undefined;

		expect(nested?.[0]?.cell).not.toBe(leafCell);
		expect(nested?.[1]?.cell).toBe(loadingCell);
	});
});

describe('createSkeletonRows', () => {
	it('returns placeholder rows with stable skeleton ids', () => {
		const rows = createSkeletonRows<Row>();

		expect(rows).toHaveLength(SKELETON_ROW_COUNT);
		expect(rows.map((row) => row.id)).toEqual(
			Array.from({ length: SKELETON_ROW_COUNT }, (_, i) => `ds-table-skeleton-${String(i)}`),
		);
	});
});
