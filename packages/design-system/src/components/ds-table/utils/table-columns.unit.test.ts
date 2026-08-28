import { describe, expect, it } from 'vitest';
import type { ColumnDef } from '@tanstack/react-table';
import { createSkeletonRows, getAugmentedColumns, toSkeletonColumns } from './table-columns';
import {
	EXPANDER_COLUMN_ID,
	EXPANDER_COLUMN_WIDTH,
	REORDER_COLUMN_ID,
	REORDER_COLUMN_WIDTH,
	SELECT_COLUMN_ID,
	SELECT_COLUMN_WIDTH,
	SKELETON_ROW_COUNT,
} from './constants';

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

	it('pins builtin column min/max to their fixed width so the resize minimum cannot stretch them', () => {
		const columns = getAugmentedColumns([nameColumn], {
			...noFeatures,
			selectable: true,
			expandable: true,
			reorderable: true,
		});

		const boundsById = new Map(columns.map((column) => [column.id, column]));

		for (const [id, width] of [
			[SELECT_COLUMN_ID, SELECT_COLUMN_WIDTH],
			[EXPANDER_COLUMN_ID, EXPANDER_COLUMN_WIDTH],
			[REORDER_COLUMN_ID, REORDER_COLUMN_WIDTH],
		] as const) {
			const column = boundsById.get(id);
			expect(column?.size).toBe(width);
			expect(column?.minSize).toBe(width);
			expect(column?.maxSize).toBe(width);
		}
	});

	it('pins custom utility column widths and ignores them when the feature is off', () => {
		const columns = getAugmentedColumns([nameColumn], {
			...noFeatures,
			selectable: true,
			expandable: true,
			reorderable: true,
			selectableColumnWidth: 48,
			expandableColumnWidth: 40,
			reorderableColumnWidth: 80,
		});
		const boundsById = new Map(columns.map((column) => [column.id, column]));

		expect(boundsById.get(SELECT_COLUMN_ID)?.size).toBe(48);
		expect(boundsById.get(SELECT_COLUMN_ID)?.minSize).toBe(48);
		expect(boundsById.get(SELECT_COLUMN_ID)?.maxSize).toBe(48);
		expect(boundsById.get(EXPANDER_COLUMN_ID)?.size).toBe(40);
		expect(boundsById.get(EXPANDER_COLUMN_ID)?.minSize).toBe(40);
		expect(boundsById.get(EXPANDER_COLUMN_ID)?.maxSize).toBe(40);
		expect(boundsById.get(REORDER_COLUMN_ID)?.size).toBe(80);
		expect(boundsById.get(REORDER_COLUMN_ID)?.minSize).toBe(80);
		expect(boundsById.get(REORDER_COLUMN_ID)?.maxSize).toBe(80);

		expect(
			columnIds(getAugmentedColumns([nameColumn], { ...noFeatures, selectableColumnWidth: 48 })),
		).toEqual(['name']);
	});

	it('falls back to the default width when the custom width is invalid', () => {
		const columns = getAugmentedColumns([nameColumn], {
			...noFeatures,
			selectable: true,
			expandable: true,
			reorderable: true,
			selectableColumnWidth: 0,
			expandableColumnWidth: Number.NaN,
			reorderableColumnWidth: -10,
		});
		const boundsById = new Map(columns.map((column) => [column.id, column]));

		expect(boundsById.get(SELECT_COLUMN_ID)?.size).toBe(SELECT_COLUMN_WIDTH);
		expect(boundsById.get(EXPANDER_COLUMN_ID)?.size).toBe(EXPANDER_COLUMN_WIDTH);
		expect(boundsById.get(REORDER_COLUMN_ID)?.size).toBe(REORDER_COLUMN_WIDTH);
	});

	it('stamps hasExplicitSize on authored leaves and builtins, not on unsized leaves', () => {
		const columns = getAugmentedColumns(
			[
				{ id: 'name', accessorKey: 'name', size: 150 },
				{ id: 'age', accessorKey: 'age' },
			],
			{
				...noFeatures,
				selectable: true,
				expandable: true,
				reorderable: true,
			},
		);
		const byId = new Map(columns.map((column) => [column.id, column]));

		expect(byId.get('name')?.meta?.hasExplicitSize).toBe(true);
		expect(byId.get('age')?.meta?.hasExplicitSize).toBeUndefined();
		expect(byId.get(SELECT_COLUMN_ID)?.meta?.hasExplicitSize).toBe(true);
		expect(byId.get(EXPANDER_COLUMN_ID)?.meta?.hasExplicitSize).toBe(true);
		expect(byId.get(REORDER_COLUMN_ID)?.meta?.hasExplicitSize).toBe(true);
	});

	it('stamps hasExplicitSize on nested authored leaves and preserves group meta', () => {
		const columns = getAugmentedColumns(
			[
				{
					id: 'identity',
					header: 'Identity',
					meta: { group: { collapsible: true } },
					columns: [{ id: 'firstName', size: 150 }, { id: 'lastName' }],
				},
			],
			noFeatures,
		);
		const group = columns[0];
		const nested = group && 'columns' in group ? group.columns : undefined;

		expect(group?.meta?.group).toEqual({ collapsible: true });
		expect(nested?.[0]?.meta?.hasExplicitSize).toBe(true);
		expect(nested?.[1]?.meta?.hasExplicitSize).toBeUndefined();
	});

	it('does not mutate the caller’s column defs', () => {
		const leaf: ColumnDef<Row> = { id: 'name', accessorKey: 'name', size: 150 };

		getAugmentedColumns([leaf], noFeatures);

		expect(leaf.meta).toBeUndefined();
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
