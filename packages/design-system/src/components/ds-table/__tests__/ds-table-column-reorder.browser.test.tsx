import { useState } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsTable from '../ds-table';
import type { DsDataTableProps, DsTableStickyColumns } from '../ds-table.types';
import { columns as flatColumns, defaultData, type Person } from '../stories/common/story-data';
import {
	BUILTIN_COLUMN_IDS,
	EXPANDER_COLUMN_ID,
	REORDER_COLUMN_ID,
	ROW_ACTIONS_COLUMN_ID,
	SELECT_COLUMN_ID,
} from '../utils/constants';

type TableProps = Partial<DsDataTableProps<Person, unknown>>;

// The Vitest UI's pane splitter overlaps the left edge of the test iframe.
const HARNESS_OFFSET_PX = 16;

const groupedColumns: ColumnDef<Person>[] = [
	{
		id: 'identity',
		header: 'Identity',
		columns: [
			{ accessorKey: 'firstName', header: 'First Name' },
			{ accessorKey: 'lastName', header: 'Last Name' },
		],
	},
	{
		id: 'activity',
		header: 'Activity',
		columns: [
			{
				id: 'engagement',
				header: 'Engagement',
				columns: [
					{ accessorKey: 'visits', header: 'Visits' },
					{ accessorKey: 'progress', header: 'Profile Progress' },
				],
			},
			{ accessorKey: 'status', header: 'Status' },
		],
	},
	{ accessorKey: 'age', header: 'Age' },
];

const GROUPED_ORDER = ['firstName', 'lastName', 'visits', 'progress', 'status', 'age'];
const GROUPED_HEADERS = [['identity:2', 'activity:3'], ['engagement:2']];
const FLAT_ORDER = ['firstName', 'lastName', 'age', 'visits', 'status', 'progress'];

const renderTable = (props: TableProps = {}) =>
	page.render(
		<div style={{ padding: HARNESS_OFFSET_PX }}>
			<DsTable columns={groupedColumns} data={defaultData} columnDisplay reorderableColumns {...props} />
		</div>,
	);

interface ControlledTableProps extends TableProps {
	initialColumnOrder?: string[];
	initialStickyColumns?: DsTableStickyColumns;
}

/** Controls both `columnOrder` and `stickyColumns`, reporting every change to the passed spies. */
const ControlledTable = ({
	initialColumnOrder = [],
	initialStickyColumns = {},
	onColumnOrderChange,
	onStickyColumnsChange,
	...props
}: ControlledTableProps) => {
	const [columnOrder, setColumnOrder] = useState(initialColumnOrder);
	const [stickyColumns, setStickyColumns] = useState(initialStickyColumns);

	return (
		<div style={{ padding: HARNESS_OFFSET_PX }}>
			<DsTable
				columns={groupedColumns}
				data={defaultData}
				columnDisplay
				reorderableColumns
				{...props}
				columnOrder={columnOrder}
				onColumnOrderChange={(order) => {
					onColumnOrderChange?.(order);
					setColumnOrder(order);
				}}
				stickyColumns={stickyColumns}
				onStickyColumnsChange={(sticky) => {
					onStickyColumnsChange?.(sticky);
					setStickyColumns(sticky);
				}}
			/>
		</div>
	);
};

const columnsDialog = () => page.getByRole('dialog', { name: 'Columns' });

const openColumnDisplay = async () => {
	await page.getByRole('button', { name: 'Columns' }).click();
	await expect.element(columnsDialog()).toBeVisible();
};

const rowCheckbox = (name: string) => columnsDialog().getByRole('checkbox', { name, exact: true });

const stickyToggle = (name: string) => page.getByRole('button', { name: `Sticky ${name}`, exact: true });

const TREE_ROW_SELECTOR = '[role="dialog"] :is([data-part="item"], [data-part="branch-control"])';

const treeRows = () => Array.from(document.querySelectorAll<HTMLElement>(TREE_ROW_SELECTOR));

const rowOf = (id: string) => {
	const row = treeRows().find((element) => element.dataset.value === id);

	if (!row) {
		throw new Error(`Expected a column display row "${id}"`);
	}

	return row;
};

// The handle is hidden from assistive tech while drag is pointer-only, so it has no role to query
const DRAG_HANDLE_SELECTOR = '[data-part="drag-handle"]';

// dnd-kit swallows clicks for 50ms after a drop, faster than a person can click or drag again
const CLICK_GUARD_MS = 60;

const nextFrame = () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

const waitOutClickGuard = () => new Promise((resolve) => setTimeout(resolve, CLICK_GUARD_MS));

// A real key press: dnd-kit and any surrounding dialog or popover both listen for it on the document
const pressEscape = async () => {
	await userEvent.keyboard('{Escape}');
	await nextFrame();
};

const pointer = { x: 0, y: 0 };

const firePointer = (type: string, target: EventTarget, clientX: number, clientY: number) => {
	pointer.x = clientX;
	pointer.y = clientY;
	target.dispatchEvent(
		new PointerEvent(type, { clientX, clientY, bubbles: true, isPrimary: true, button: 0, pointerId: 1 }),
	);
};

const handleOf = (value: string) =>
	rowOf(value).querySelector<HTMLButtonElement>(DRAG_HANDLE_SELECTOR) ?? null;

/** Presses `from` (the row's drag handle by default) and moves past the 4px activation distance. */
const startDrag = async (value: string, from: Element | null = handleOf(value)) => {
	if (!from) {
		throw new Error(`Expected an element to press on "${value}"`);
	}

	const rect = from.getBoundingClientRect();
	const x = rect.left + rect.width / 2;
	const y = rect.top + rect.height / 2;

	firePointer('pointerdown', from, x, y);
	firePointer('pointermove', document, x, y + 6);
	await nextFrame();
};

/** Moves the pointer to `ratio` of the target's height: 0 is its top edge, 1 its bottom edge. */
const moveOver = async (target: string | Element | null, ratio: number) => {
	const element = typeof target === 'string' ? rowOf(target) : target;

	if (!element) {
		throw new Error('Expected a drop target');
	}

	const rect = element.getBoundingClientRect();

	firePointer('pointermove', document, pointer.x, rect.top + rect.height * ratio);
	await nextFrame();
};

const release = async () => {
	firePointer('pointerup', document, pointer.x, pointer.y);
	await nextFrame();
	await waitOutClickGuard();
};

/** Drags `value` by its handle onto `ratio` of `target`, waits for `until` when given, and drops. */
const drag = async (value: string, target: string | Element, ratio: number, until?: () => boolean) => {
	await startDrag(value);
	await moveOver(target, ratio);

	if (until) {
		await expect.poll(until).toBe(true);
	}

	await release();
};

/** The topmost element under the pointer: the drag preview while a drag is on. */
const elementAtPointer = () => document.elementFromPoint(pointer.x, pointer.y);

/** The `<body>` child holding `element`: the layer it is painted in. */
const bodyLayerOf = (element: Element | null) =>
	Array.from(document.body.children).find((child) => child.contains(element)) ?? null;

const rootDropZone = () => document.querySelector<HTMLElement>('[role="dialog"] [data-drop-zone="root-end"]');

/** Column ids of the popover rows directly under `groupId`, or of the top-level rows. */
const popoverOrder = (groupId?: string) => {
	const parent = groupId
		? rowOf(groupId).closest('[data-part="branch"]')?.querySelector(':scope > [data-part="branch-content"]')
		: document.querySelector('[role="dialog"] [role="tree"]');

	return Array.from(parent?.children ?? [])
		.filter((element) => element.matches('[role="treeitem"]'))
		.map((element) => element.getAttribute('data-value'));
};

// Header cells resolve to the `cell` role in the locator engine, so they are read from the DOM.
const headerRows = () => Array.from(document.querySelectorAll('thead tr'));

const headerCells = (row: Element | undefined) =>
	Array.from(row?.querySelectorAll<HTMLTableCellElement>('th[data-column-id]') ?? []);

const consumerHeaderCells = (row: Element | undefined) =>
	headerCells(row).filter((cell) => !BUILTIN_COLUMN_IDS.has(cell.dataset.columnId ?? ''));

/** Consumer leaf column ids in the order the table renders them. */
const tableOrder = () => consumerHeaderCells(headerRows().at(-1)).map((cell) => cell.dataset.columnId);

/** Every leaf column id the table renders, utility columns included. */
const allTableColumnIds = () => headerCells(headerRows().at(-1)).map((cell) => cell.dataset.columnId);

/** Group header cells per header row, as `id:colSpan`, top row first. */
const groupHeaders = () =>
	headerRows()
		.slice(0, -1)
		.map((row) =>
			consumerHeaderCells(row).map((cell) => `${cell.dataset.columnId ?? ''}:${String(cell.colSpan)}`),
		);

const stickyLeftIds = () =>
	consumerHeaderCells(headerRows().at(-1))
		.filter((cell) => cell.dataset.sticky === 'left')
		.map((cell) => cell.dataset.columnId);

const columnHeader = (name: string) => page.getByRole('rowgroup').first().getByText(name, { exact: true });

// Synchronizes a release only: the popover shows no public state while the pointer moves over it
const slotShown = () => document.querySelector('[role="dialog"] [data-drop]') !== null;

type DropTarget = string | (() => HTMLElement | null);

const elementOf = (target: DropTarget) => (typeof target === 'string' ? rowOf(target) : target());

/** Drops `id` on each target, after first showing a slot over `allowed` so each release follows a resolved pointer. */
const dropOnRejected = async (id: string, allowed: [DropTarget, number], targets: [DropTarget, number][]) => {
	for (const [target, ratio] of targets) {
		await startDrag(id);
		await moveOver(elementOf(allowed[0]), allowed[1]);
		await expect.poll(slotShown).toBe(true);

		await moveOver(elementOf(target), ratio);
		await expect.poll(slotShown).toBe(false);
		await release();
	}
};

describe('DsTable - column reorder', () => {
	describe('enabling', () => {
		it('gives every popover row a drag handle with reorderableColumns', async () => {
			await renderTable();
			await openColumnDisplay();

			const rows = treeRows();
			expect(rows.map((row) => row.dataset.value)).toEqual([
				'identity',
				'firstName',
				'lastName',
				'activity',
				'engagement',
				'visits',
				'progress',
				'status',
				'age',
			]);
			expect(rows.filter((row) => row.querySelector(DRAG_HANDLE_SELECTOR))).toEqual(rows);
		});

		it('shows no handles and reorders nothing without reorderableColumns', async () => {
			const onColumnOrderChange = vi.fn();
			await renderTable({ reorderableColumns: false, onColumnOrderChange });
			await openColumnDisplay();

			expect(treeRows()).toHaveLength(9);
			expect(treeRows().filter((row) => row.querySelector(DRAG_HANDLE_SELECTOR))).toEqual([]);

			const label = rowOf('firstName').querySelector('[data-part="item-text"]');
			await startDrag('firstName', label);
			await moveOver('lastName', 0.8);

			expect(rowOf('lastName').contains(elementAtPointer())).toBe(true);

			await release();

			expect(onColumnOrderChange).not.toHaveBeenCalled();
			expect(popoverOrder('identity')).toEqual(['firstName', 'lastName']);
			expect(tableOrder()).toEqual(GROUPED_ORDER);
		});

		it('ignores reorderableColumns without columnDisplay', async () => {
			await page.render(
				<DsTable
					columns={flatColumns}
					data={defaultData}
					reorderableColumns
					columnOrder={FLAT_ORDER}
					stickyColumns={{ left: ['age', 'firstName'] }}
				/>,
			);

			await expect.element(page.getByRole('button', { name: 'Columns' })).not.toBeInTheDocument();
			expect(stickyLeftIds()).toEqual(['age', 'firstName']);
			expect(tableOrder()).toEqual(['age', 'firstName', 'lastName', 'visits', 'status', 'progress']);
		});
	});

	describe('dragging', () => {
		it('reorders a leaf within its group in the popover and the table', async () => {
			const onColumnOrderChange = vi.fn();
			await renderTable({ onColumnOrderChange });
			await openColumnDisplay();

			expect(tableOrder()).toEqual(GROUPED_ORDER);
			expect(groupHeaders()).toEqual(GROUPED_HEADERS);

			await drag('firstName', 'lastName', 0.8, slotShown);

			const nextOrder = ['lastName', 'firstName', 'visits', 'progress', 'status', 'age'];
			expect(onColumnOrderChange).toHaveBeenCalledExactlyOnceWith(nextOrder);
			await expect.poll(tableOrder).toEqual(nextOrder);
			expect(popoverOrder('identity')).toEqual(['lastName', 'firstName']);
			expect(groupHeaders()).toEqual(GROUPED_HEADERS);
		});

		it('reorders the cells of a virtualized table', async () => {
			const firstRowNames = () =>
				Array.from(document.querySelectorAll('tbody tr[data-index="0"] td'))
					.map((cell) => cell.textContent)
					.slice(0, 2);

			await page.render(
				<div style={{ height: 400, padding: HARNESS_OFFSET_PX }}>
					<DsTable columns={groupedColumns} data={defaultData} columnDisplay reorderableColumns virtualized />
				</div>,
			);
			await expect.poll(firstRowNames).toEqual(['Tanner', 'Linsley']);
			await openColumnDisplay();

			await drag('firstName', 'lastName', 0.8, slotShown);

			await expect.poll(tableOrder).toEqual(['lastName', 'firstName', 'visits', 'progress', 'status', 'age']);
			await expect.poll(firstRowNames).toEqual(['Linsley', 'Tanner']);
		});

		it('targets a sibling group as a whole block from any of its rows, upper half before and lower half after', async () => {
			const onColumnOrderChange = vi.fn();
			await renderTable({ onColumnOrderChange });
			await openColumnDisplay();

			const statusFirstOrder = ['firstName', 'lastName', 'status', 'visits', 'progress', 'age'];

			for (const [target, ratio] of [
				['engagement', 0.5],
				['visits', 0.2],
			] as const) {
				await drag('status', target, ratio, slotShown);

				expect(onColumnOrderChange).toHaveBeenLastCalledWith(statusFirstOrder);
				await expect.poll(tableOrder).toEqual(statusFirstOrder);
				expect(popoverOrder('activity')).toEqual(['status', 'engagement']);
				expect(groupHeaders()).toEqual(GROUPED_HEADERS);

				await drag('status', 'progress', 0.8, slotShown);

				expect(onColumnOrderChange).toHaveBeenLastCalledWith(GROUPED_ORDER);
				await expect.poll(tableOrder).toEqual(GROUPED_ORDER);
				expect(popoverOrder('activity')).toEqual(['engagement', 'status']);
			}

			expect(onColumnOrderChange).toHaveBeenCalledTimes(4);
		});

		it('shows a group moving up or down on its neighbor as soon as the pointer enters it', async () => {
			const onColumnOrderChange = vi.fn();
			await renderTable({ onColumnOrderChange });
			await openColumnDisplay();

			await drag('activity', 'lastName', 0.95, slotShown);

			const upOrder = ['visits', 'progress', 'status', 'firstName', 'lastName', 'age'];
			expect(onColumnOrderChange).toHaveBeenLastCalledWith(upOrder);
			await expect.poll(tableOrder).toEqual(upOrder);
			expect(groupHeaders()).toEqual([['activity:3', 'identity:2'], ['engagement:2']]);

			await drag('activity', 'identity', 0.1, slotShown);

			expect(onColumnOrderChange).toHaveBeenLastCalledWith(GROUPED_ORDER);
			await expect.poll(tableOrder).toEqual(GROUPED_ORDER);
		});

		it('keeps a pinned group closed to an unpinned one entering from either side', async () => {
			const onColumnOrderChange = vi.fn();
			await renderTable({ onColumnOrderChange, stickyColumns: { left: ['identity'] } });
			await openColumnDisplay();

			await dropOnRejected(
				'activity',
				['age', 0.8],
				[
					['lastName', 0.95],
					['identity', 0.1],
				],
			);

			expect(onColumnOrderChange).not.toHaveBeenCalled();
			expect(popoverOrder()).toEqual(['identity', 'activity', 'age']);
			expect(tableOrder()).toEqual(GROUPED_ORDER);
		});

		it('never drops a leaf into another group or out of its own', async () => {
			const onColumnOrderChange = vi.fn();
			await renderTable({ onColumnOrderChange });
			await openColumnDisplay();

			await dropOnRejected(
				'firstName',
				['lastName', 0.8],
				[
					['visits', 0.2],
					['status', 0.8],
					['activity', 0.5],
					['engagement', 0.5],
					['identity', 0.1],
					['age', 0.2],
					['age', 0.8],
					[rootDropZone, 0.5],
				],
			);

			expect(onColumnOrderChange).not.toHaveBeenCalled();
			expect(popoverOrder('identity')).toEqual(['firstName', 'lastName']);
			expect(tableOrder()).toEqual(GROUPED_ORDER);
		});

		it('drops a row inside its own group as its first child, but not inside another group', async () => {
			const onColumnOrderChange = vi.fn();
			await renderTable({ onColumnOrderChange });
			await openColumnDisplay();

			await dropOnRejected('status', ['engagement', 0.2], [['identity', 0.5]]);

			expect(onColumnOrderChange).not.toHaveBeenCalled();
			expect(tableOrder()).toEqual(GROUPED_ORDER);

			await drag('status', 'activity', 0.5, slotShown);

			const nextOrder = ['firstName', 'lastName', 'status', 'visits', 'progress', 'age'];
			expect(onColumnOrderChange).toHaveBeenCalledExactlyOnceWith(nextOrder);
			expect(popoverOrder('activity')).toEqual(['status', 'engagement']);
			await expect.poll(tableOrder).toEqual(nextOrder);
			expect(groupHeaders()).toEqual(GROUPED_HEADERS);
		});

		it('moves a nested group with its leaves within its parent group only', async () => {
			const onColumnOrderChange = vi.fn();
			await renderTable({ onColumnOrderChange });
			await openColumnDisplay();

			await dropOnRejected(
				'engagement',
				['status', 0.8],
				[
					['identity', 0.1],
					['identity', 0.5],
					['firstName', 0.8],
					['age', 0.8],
				],
			);

			expect(onColumnOrderChange).not.toHaveBeenCalled();

			await drag('engagement', 'status', 0.8, slotShown);

			const nextOrder = ['firstName', 'lastName', 'status', 'visits', 'progress', 'age'];
			expect(onColumnOrderChange).toHaveBeenCalledExactlyOnceWith(nextOrder);
			expect(popoverOrder('activity')).toEqual(['status', 'engagement']);
			expect(popoverOrder('engagement')).toEqual(['visits', 'progress']);
			await expect.poll(tableOrder).toEqual(nextOrder);
			expect(groupHeaders()).toEqual(GROUPED_HEADERS);
		});

		it('reorders top-level groups and columns, keeping each group header whole', async () => {
			const onColumnOrderChange = vi.fn();
			await renderTable({ onColumnOrderChange });
			await openColumnDisplay();

			await drag('age', 'identity', 0.1, slotShown);

			expect(popoverOrder()).toEqual(['age', 'identity', 'activity']);
			await expect.poll(tableOrder).toEqual(['age', 'firstName', 'lastName', 'visits', 'progress', 'status']);
			expect(groupHeaders()).toEqual(GROUPED_HEADERS);

			await drag('activity', 'identity', 0.1, slotShown);

			expect(popoverOrder()).toEqual(['age', 'activity', 'identity']);
			expect(popoverOrder('activity')).toEqual(['engagement', 'status']);
			await expect.poll(tableOrder).toEqual(['age', 'visits', 'progress', 'status', 'firstName', 'lastName']);
			expect(groupHeaders()).toEqual([['activity:3', 'identity:2'], ['engagement:2']]);

			expect(onColumnOrderChange).toHaveBeenCalledTimes(2);
			expect(onColumnOrderChange).toHaveBeenLastCalledWith([
				'age',
				'visits',
				'progress',
				'status',
				'firstName',
				'lastName',
			]);
		});

		it('cancels a drag on Escape and keeps the popover open, then closes it on the next Escape', async () => {
			const onColumnOrderChange = vi.fn();
			await renderTable({ onColumnOrderChange });
			await openColumnDisplay();

			await startDrag('firstName');
			await moveOver('lastName', 0.8);
			await expect.poll(slotShown).toBe(true);

			await pressEscape();

			await expect.poll(() => rowOf('lastName').contains(elementAtPointer())).toBe(true);
			await expect.element(columnsDialog()).toBeVisible();

			await release();

			expect(onColumnOrderChange).not.toHaveBeenCalled();
			expect(popoverOrder('identity')).toEqual(['firstName', 'lastName']);

			await pressEscape();

			await expect.element(columnsDialog()).not.toBeInTheDocument();
		});

		it('does not toggle a row from the click that ends a drag', async () => {
			await renderTable();
			await openColumnDisplay();

			// The browser fires a click right after the pointerup that ends the drag.
			const releaseWithClick = async (clicked: string) => {
				firePointer('pointerup', document, pointer.x, pointer.y);
				rowOf(clicked)
					.querySelector('[data-part="item-text"]')
					?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
				await nextFrame();
				await waitOutClickGuard();
			};

			await startDrag('firstName');
			await moveOver('lastName', 0.8);
			await expect.poll(slotShown).toBe(true);
			await releaseWithClick('lastName');

			await expect.poll(() => popoverOrder('identity')).toEqual(['lastName', 'firstName']);

			await startDrag('age');
			await moveOver('activity', 0.1);
			await expect.poll(slotShown).toBe(true);
			await moveOver('age', 0.5);
			await expect.poll(slotShown).toBe(false);
			await releaseWithClick('age');

			await expect.element(rowCheckbox('Last Name')).toBeChecked();
			await expect.element(rowCheckbox('Age')).toBeChecked();
			await expect.element(columnHeader('Last Name')).toBeVisible();
			await expect.element(columnHeader('Age')).toBeVisible();
		});

		it('shows the drag preview above the popover', async () => {
			await renderTable();
			await openColumnDisplay();

			await startDrag('lastName');
			await moveOver('firstName', 0.2);
			await expect.poll(slotShown).toBe(true);

			const previewLayer = bodyLayerOf(elementAtPointer());

			expect(previewLayer).not.toBeNull();
			expect(previewLayer?.contains(columnsDialog().element())).toBe(false);
			expect(previewLayer?.textContent).toContain('Last Name');

			await pressEscape();
			await release();
		});
	});

	describe('order state', () => {
		it('renders a controlled columnOrder and only reports drops', async () => {
			const onColumnOrderChange = vi.fn();
			const columnOrder = ['age', 'lastName', 'firstName', 'status', 'visits', 'progress'];
			const { rerender } = await renderTable({ columnOrder, onColumnOrderChange });

			expect(tableOrder()).toEqual(columnOrder);
			expect(groupHeaders()).toEqual([['identity:2', 'activity:3'], ['engagement:2']]);

			await openColumnDisplay();

			expect(popoverOrder()).toEqual(['age', 'identity', 'activity']);
			expect(popoverOrder('identity')).toEqual(['lastName', 'firstName']);
			expect(popoverOrder('activity')).toEqual(['status', 'engagement']);

			await drag('age', 'activity', 0.1, slotShown);

			const nextOrder = ['lastName', 'firstName', 'age', 'status', 'visits', 'progress'];
			expect(onColumnOrderChange).toHaveBeenCalledExactlyOnceWith(nextOrder);
			expect(tableOrder()).toEqual(columnOrder);
			expect(popoverOrder()).toEqual(['age', 'identity', 'activity']);

			await rerender(
				<div style={{ padding: HARNESS_OFFSET_PX }}>
					<DsTable
						columns={groupedColumns}
						data={defaultData}
						columnDisplay
						reorderableColumns
						columnOrder={nextOrder}
						onColumnOrderChange={onColumnOrderChange}
					/>
				</div>,
			);

			await expect.poll(tableOrder).toEqual(nextOrder);
			expect(popoverOrder()).toEqual(['identity', 'age', 'activity']);
		});

		it('tracks the order itself across drops when uncontrolled', async () => {
			const onColumnOrderChange = vi.fn();
			await renderTable({ onColumnOrderChange });
			await openColumnDisplay();

			await drag('lastName', 'firstName', 0.2, slotShown);
			await drag('age', 'activity', 0.1, slotShown);

			const nextOrder = ['lastName', 'firstName', 'age', 'visits', 'progress', 'status'];
			expect(onColumnOrderChange).toHaveBeenCalledTimes(2);
			expect(onColumnOrderChange).toHaveBeenLastCalledWith(nextOrder);
			await expect.poll(tableOrder).toEqual(nextOrder);
			expect(popoverOrder()).toEqual(['identity', 'age', 'activity']);
		});

		it('renders leaves missing from columnOrder after the listed ones, in definition order', async () => {
			await renderTable({ columns: flatColumns, columnOrder: ['progress', 'age'] });

			const resolvedOrder = ['progress', 'age', 'firstName', 'lastName', 'visits', 'status'];
			expect(tableOrder()).toEqual(resolvedOrder);

			await openColumnDisplay();

			expect(popoverOrder()).toEqual(resolvedOrder);
		});

		it('keeps a group leaf missing from columnOrder with its group, after its listed siblings', async () => {
			await renderTable({ columnOrder: ['lastName', 'age'] });

			expect(tableOrder()).toEqual(['lastName', 'firstName', 'age', 'visits', 'progress', 'status']);
			expect(groupHeaders()).toEqual(GROUPED_HEADERS);

			await openColumnDisplay();

			expect(popoverOrder()).toEqual(['identity', 'age', 'activity']);
			expect(popoverOrder('identity')).toEqual(['lastName', 'firstName']);
		});

		it('renders a column added to a group after the order was saved inside that group', async () => {
			const savedOrder = ['age', 'lastName', 'firstName', 'status', 'visits', 'progress'];
			const withMiddleName: ColumnDef<Person>[] = [
				{
					id: 'identity',
					header: 'Identity',
					columns: [
						{ accessorKey: 'firstName', header: 'First Name' },
						{ id: 'middleName', header: 'Middle Name' },
						{ accessorKey: 'lastName', header: 'Last Name' },
					],
				},
				...groupedColumns.slice(1),
			];

			await renderTable({ columns: withMiddleName, columnOrder: savedOrder });

			expect(tableOrder()).toEqual([
				'age',
				'lastName',
				'firstName',
				'middleName',
				'status',
				'visits',
				'progress',
			]);
			expect(groupHeaders()[0]).toEqual(['identity:3', 'activity:3']);

			await openColumnDisplay();

			expect(popoverOrder('identity')).toEqual(['lastName', 'firstName', 'middleName']);
		});

		it('keeps utility columns in place and out of columnOrder', async () => {
			const onColumnOrderChange = vi.fn();
			await renderTable({
				columns: flatColumns,
				selectable: true,
				expandable: true,
				renderExpandedRow: () => null,
				reorderable: true,
				primaryRowActions: [{ icon: 'edit', label: 'Edit', onClick: () => undefined }],
				columnOrder: [ROW_ACTIONS_COLUMN_ID, SELECT_COLUMN_ID, 'age', REORDER_COLUMN_ID, 'firstName'],
				onColumnOrderChange,
			});

			const utilityLeft = [REORDER_COLUMN_ID, EXPANDER_COLUMN_ID, SELECT_COLUMN_ID];
			expect(allTableColumnIds()).toEqual([
				...utilityLeft,
				'age',
				'firstName',
				'lastName',
				'visits',
				'status',
				'progress',
				ROW_ACTIONS_COLUMN_ID,
			]);

			await openColumnDisplay();

			expect(popoverOrder()).toEqual(['age', 'firstName', 'lastName', 'visits', 'status', 'progress']);

			await drag('age', 'lastName', 0.8, slotShown);

			expect(onColumnOrderChange).toHaveBeenCalledExactlyOnceWith([
				'firstName',
				'lastName',
				'age',
				'visits',
				'status',
				'progress',
			]);
		});
	});

	describe('sticky columns', () => {
		it('lists sticky rows first, as one block, in the order the table renders them', async () => {
			await page.render(
				<ControlledTable initialColumnOrder={['age']} initialStickyColumns={{ left: ['identity', 'age'] }} />,
			);

			expect(stickyLeftIds()).toEqual(['age', 'firstName', 'lastName']);
			expect(tableOrder()).toEqual(['age', 'firstName', 'lastName', 'visits', 'progress', 'status']);

			await openColumnDisplay();

			expect(popoverOrder()).toEqual(['age', 'identity', 'activity']);
		});

		it('never drags a row across the sticky boundary', async () => {
			const onColumnOrderChange = vi.fn();
			const onStickyColumnsChange = vi.fn();
			await page.render(
				<ControlledTable
					columns={flatColumns}
					initialStickyColumns={{ left: ['lastName', 'firstName'] }}
					onColumnOrderChange={onColumnOrderChange}
					onStickyColumnsChange={onStickyColumnsChange}
				/>,
			);
			await openColumnDisplay();

			expect(popoverOrder()).toEqual(FLAT_ORDER);

			await dropOnRejected(
				'visits',
				['age', 0.2],
				[
					['firstName', 0.2],
					['lastName', 0.2],
					['lastName', 0.8],
				],
			);
			await dropOnRejected(
				'firstName',
				['lastName', 0.8],
				[
					['age', 0.2],
					['status', 0.8],
					[rootDropZone, 0.5],
				],
			);

			expect(onColumnOrderChange).not.toHaveBeenCalled();
			expect(onStickyColumnsChange).not.toHaveBeenCalled();
			expect(popoverOrder()).toEqual(FLAT_ORDER);
			expect(tableOrder()).toEqual(FLAT_ORDER);
		});

		it('disables the handle of a row with no sibling on its side of the sticky boundary', async () => {
			const onColumnOrderChange = vi.fn();
			await page.render(
				<ControlledTable
					initialStickyColumns={{ left: ['identity'] }}
					onColumnOrderChange={onColumnOrderChange}
				/>,
			);
			await openColumnDisplay();

			expect(handleOf('identity')?.disabled).toBe(true);
			for (const id of ['firstName', 'activity', 'engagement', 'visits', 'age']) {
				expect(handleOf(id)?.disabled).toBe(false);
			}

			await startDrag('identity');
			await moveOver('activity', 0.2);
			expect(rowOf('activity').contains(elementAtPointer())).toBe(true);
			await release();

			expect(onColumnOrderChange).not.toHaveBeenCalled();
			expect(popoverOrder()).toEqual(['identity', 'activity', 'age']);

			await stickyToggle('Age').click();
			await expect.poll(() => popoverOrder()).toEqual(['identity', 'age', 'activity']);

			expect(handleOf('identity')?.disabled).toBe(false);
			expect(handleOf('age')?.disabled).toBe(false);
			expect(handleOf('activity')?.disabled).toBe(true);
		});

		it('reorders within the sticky block through columnOrder only', async () => {
			const onColumnOrderChange = vi.fn();
			const onStickyColumnsChange = vi.fn();
			await page.render(
				<ControlledTable
					initialStickyColumns={{ left: ['identity', 'age'] }}
					onColumnOrderChange={onColumnOrderChange}
					onStickyColumnsChange={onStickyColumnsChange}
				/>,
			);
			await openColumnDisplay();

			expect(stickyLeftIds()).toEqual(['firstName', 'lastName', 'age']);

			await drag('age', 'identity', 0.1, slotShown);

			expect(onColumnOrderChange).toHaveBeenCalledExactlyOnceWith([
				'age',
				'firstName',
				'lastName',
				'visits',
				'progress',
				'status',
			]);
			expect(onStickyColumnsChange).not.toHaveBeenCalled();
			await expect.poll(stickyLeftIds).toEqual(['age', 'firstName', 'lastName']);
			expect(popoverOrder()).toEqual(['age', 'identity', 'activity']);
		});

		it('keeps stickyColumns order over columnOrder without reorderableColumns', async () => {
			await renderTable({
				columns: flatColumns,
				reorderableColumns: false,
				columnOrder: FLAT_ORDER,
				stickyColumns: { left: ['age', 'firstName'] },
			});

			expect(stickyLeftIds()).toEqual(['age', 'firstName']);
			expect(tableOrder()).toEqual(['age', 'firstName', 'lastName', 'visits', 'status', 'progress']);
		});

		it('moves a pinned column to the end of the sticky block and an unpinned one to the start of the rest', async () => {
			const onColumnOrderChange = vi.fn();
			await page.render(
				<ControlledTable
					columns={flatColumns}
					initialStickyColumns={{ left: ['firstName'] }}
					onColumnOrderChange={onColumnOrderChange}
				/>,
			);
			await openColumnDisplay();

			await stickyToggle('Status').click();

			const pinnedOrder = ['firstName', 'status', 'lastName', 'age', 'visits', 'progress'];
			await expect.poll(tableOrder).toEqual(pinnedOrder);
			expect(onColumnOrderChange).toHaveBeenCalledExactlyOnceWith(pinnedOrder);
			expect(stickyLeftIds()).toEqual(['firstName', 'status']);
			expect(popoverOrder()).toEqual(pinnedOrder);

			await stickyToggle('First Name').click();

			const unpinnedOrder = ['status', 'firstName', 'lastName', 'age', 'visits', 'progress'];
			await expect.poll(tableOrder).toEqual(unpinnedOrder);
			expect(onColumnOrderChange).toHaveBeenLastCalledWith(unpinnedOrder);
			expect(stickyLeftIds()).toEqual(['status']);
			expect(popoverOrder()).toEqual(unpinnedOrder);
		});

		it('moves a pinned column to the end of the sticky block when the order and sticky columns are uncontrolled', async () => {
			const onColumnOrderChange = vi.fn();
			await renderTable({ columns: flatColumns, onColumnOrderChange });
			await openColumnDisplay();

			await stickyToggle('Status').click();

			const pinnedOrder = ['status', 'firstName', 'lastName', 'age', 'visits', 'progress'];
			await expect.poll(tableOrder).toEqual(pinnedOrder);
			expect(onColumnOrderChange).toHaveBeenCalledExactlyOnceWith(pinnedOrder);
			expect(stickyLeftIds()).toEqual(['status']);
		});

		it('moves a pinned column once the consumer applies stickyColumns later', async () => {
			const onColumnOrderChange = vi.fn();
			const LateStickyTable = () => {
				const [stickyColumns, setStickyColumns] = useState<DsTableStickyColumns>({ left: ['firstName'] });

				return (
					<div style={{ padding: HARNESS_OFFSET_PX }}>
						<DsTable
							columns={flatColumns}
							data={defaultData}
							columnDisplay
							reorderableColumns
							stickyColumns={stickyColumns}
							onStickyColumnsChange={(next) => setTimeout(() => setStickyColumns(next), 50)}
							onColumnOrderChange={onColumnOrderChange}
						/>
					</div>
				);
			};
			await page.render(<LateStickyTable />);
			await openColumnDisplay();

			await stickyToggle('Status').click();

			const pinnedOrder = ['firstName', 'status', 'lastName', 'age', 'visits', 'progress'];
			await expect.poll(stickyLeftIds).toEqual(['firstName', 'status']);
			await expect.poll(tableOrder).toEqual(pinnedOrder);
			expect(onColumnOrderChange).toHaveBeenCalledExactlyOnceWith(pinnedOrder);
		});

		it('reports no order change for a pin that keeps the order', async () => {
			const onColumnOrderChange = vi.fn();
			await page.render(<ControlledTable columns={flatColumns} onColumnOrderChange={onColumnOrderChange} />);
			await openColumnDisplay();

			await stickyToggle('First Name').click();

			await expect.poll(stickyLeftIds).toEqual(['firstName']);
			expect(onColumnOrderChange).not.toHaveBeenCalled();
			expect(tableOrder()).toEqual(FLAT_ORDER);
		});

		it('drops a rejected pin once the sticky columns change without it', async () => {
			const onColumnOrderChange = vi.fn();
			const table = (stickyColumns: DsTableStickyColumns) => (
				<div style={{ padding: HARNESS_OFFSET_PX }}>
					<DsTable
						columns={flatColumns}
						data={defaultData}
						columnDisplay
						reorderableColumns
						stickyColumns={stickyColumns}
						onColumnOrderChange={onColumnOrderChange}
					/>
				</div>
			);
			const { rerender } = await page.render(table({ left: ['firstName'] }));
			await openColumnDisplay();

			await stickyToggle('Status').click();
			await rerender(table({ left: ['firstName', 'age'] }));
			await rerender(table({ left: ['firstName', 'status'] }));

			await expect.poll(stickyLeftIds).toEqual(['firstName', 'status']);
			expect(onColumnOrderChange).not.toHaveBeenCalled();
		});

		it('keeps the order when the consumer rejects a pin', async () => {
			const onColumnOrderChange = vi.fn();
			const onStickyColumnsChange = vi.fn();
			await renderTable({
				columns: flatColumns,
				stickyColumns: { left: ['firstName'] },
				onStickyColumnsChange,
				onColumnOrderChange,
			});
			await openColumnDisplay();

			await stickyToggle('Status').click();
			await nextFrame();

			expect(onStickyColumnsChange).toHaveBeenCalledExactlyOnceWith(
				expect.objectContaining({ left: ['firstName', 'status'] }),
			);
			expect(onColumnOrderChange).not.toHaveBeenCalled();
			expect(tableOrder()).toEqual(FLAT_ORDER);
			expect(stickyLeftIds()).toEqual(['firstName']);
			expect(popoverOrder()).toEqual(FLAT_ORDER);
		});

		it.each([{ via: 'the popover toggle of the group' }, { via: 'the column API of one of its leaves' }])(
			'moves a whole group to the end of the sticky block when pinned through $via',
			async ({ via }) => {
				const onColumnOrderChange = vi.fn();
				const pinThroughLeaf = via.includes('API');
				const columnsWithLeafPin: ColumnDef<Person>[] = groupedColumns.map((column) =>
					column.id === 'activity' && 'columns' in column
						? {
								...column,
								columns: [
									...(column.columns ?? []).slice(0, -1),
									{
										accessorKey: 'status',
										header: ({ column: statusColumn }) => (
											<button
												type="button"
												onClick={(event) => {
													event.stopPropagation();
													statusColumn.pin('left');
												}}
											>
												Pin status
											</button>
										),
									},
								],
							}
						: column,
				);

				await page.render(
					<ControlledTable
						columns={columnsWithLeafPin}
						initialStickyColumns={{ left: ['age'] }}
						onColumnOrderChange={onColumnOrderChange}
					/>,
				);

				if (pinThroughLeaf) {
					await page.getByRole('button', { name: 'Pin status' }).click();
				} else {
					await openColumnDisplay();
					await stickyToggle('Activity').click();
				}

				const pinnedOrder = ['age', 'visits', 'progress', 'status', 'firstName', 'lastName'];
				await expect.poll(tableOrder).toEqual(pinnedOrder);
				expect(onColumnOrderChange).toHaveBeenCalledExactlyOnceWith(pinnedOrder);
				expect(stickyLeftIds()).toEqual(['age', 'visits', 'progress', 'status']);
				expect(groupHeaders()).toEqual([['activity:3', 'identity:2'], ['engagement:2']]);

				if (pinThroughLeaf) {
					await openColumnDisplay();
				}

				expect(popoverOrder()).toEqual(['age', 'activity', 'identity']);

				await stickyToggle('Age').click();

				const unpinnedOrder = ['visits', 'progress', 'status', 'age', 'firstName', 'lastName'];
				await expect.poll(tableOrder).toEqual(unpinnedOrder);
				expect(onColumnOrderChange).toHaveBeenLastCalledWith(unpinnedOrder);
				expect(popoverOrder()).toEqual(['activity', 'age', 'identity']);
				expect(groupHeaders()).toEqual([['activity:3', 'identity:2'], ['engagement:2']]);
			},
		);

		it('keeps right sticky columns at the right edge while the others reorder', async () => {
			const onColumnOrderChange = vi.fn();
			await page.render(
				<ControlledTable
					columns={flatColumns}
					initialStickyColumns={{ right: ['firstName'] }}
					onColumnOrderChange={onColumnOrderChange}
				/>,
			);

			expect(tableOrder()).toEqual(['lastName', 'age', 'visits', 'status', 'progress', 'firstName']);

			await openColumnDisplay();
			await drag('age', 'lastName', 0.2, slotShown);

			expect(onColumnOrderChange).toHaveBeenCalledExactlyOnceWith([
				'firstName',
				'age',
				'lastName',
				'visits',
				'status',
				'progress',
			]);
			await expect.poll(tableOrder).toEqual(['age', 'lastName', 'visits', 'status', 'progress', 'firstName']);
		});

		it('shows sticky toggles only on top-level rows', async () => {
			await renderTable();
			await openColumnDisplay();

			for (const name of ['Identity', 'Activity', 'Age']) {
				await expect.element(stickyToggle(name)).toBeInTheDocument();
			}

			for (const name of ['First Name', 'Engagement', 'Visits', 'Status']) {
				await expect.element(stickyToggle(name)).not.toBeInTheDocument();
			}
		});
	});

	describe('visibility', () => {
		const lockedColumns: ColumnDef<Person>[] = [
			{
				id: 'identity',
				header: 'Identity',
				columns: [
					{ accessorKey: 'firstName', header: 'First Name', enableHiding: false },
					{ accessorKey: 'lastName', header: 'Last Name' },
				],
			},
			{ accessorKey: 'age', header: 'Age' },
		];

		it('lines a locked row up with its sibling and announces it as checked', async () => {
			await renderTable({ columns: lockedColumns });
			await openColumnDisplay();

			const labelOf = (id: string) =>
				rowOf(id).querySelector('[data-part="item-text"]')?.getBoundingClientRect() as DOMRect;

			expect(rowOf('firstName').getBoundingClientRect().height).toBe(
				rowOf('lastName').getBoundingClientRect().height,
			);
			expect(labelOf('firstName').left).toBe(labelOf('lastName').left);
			await expect
				.element(columnsDialog().getByRole('treeitem', { name: /^First Name/, checked: true }))
				.toBeVisible();
		});

		it('toggles a column from its focused row with Space and Enter, once per press', async () => {
			await renderTable({ columns: lockedColumns });
			await openColumnDisplay();

			rowOf('age').focus();
			await userEvent.keyboard(' ');
			await expect.element(rowCheckbox('Age')).not.toBeChecked();
			await expect.element(columnHeader('Age')).not.toBeInTheDocument();

			await userEvent.keyboard('{Enter}');
			await expect.element(rowCheckbox('Age')).toBeChecked();
			await expect.element(columnHeader('Age')).toBeVisible();
		});

		it('ignores Space and Enter on a locked row', async () => {
			const onColumnVisibilityChange = vi.fn();
			await renderTable({ columns: lockedColumns, onColumnVisibilityChange });
			await openColumnDisplay();

			rowOf('firstName').focus();
			await userEvent.keyboard(' ');
			await userEvent.keyboard('{Enter}');

			expect(onColumnVisibilityChange).not.toHaveBeenCalled();
			await expect.element(columnHeader('First Name')).toBeVisible();
		});

		it('pins a column from its focused sticky toggle with Enter without changing its visibility', async () => {
			const onColumnVisibilityChange = vi.fn();
			await renderTable({ columns: lockedColumns, onColumnVisibilityChange });
			await openColumnDisplay();

			(stickyToggle('Age').element() as HTMLElement).focus();
			await userEvent.keyboard('{Enter}');

			await expect.poll(stickyLeftIds).toContain('age');
			expect(onColumnVisibilityChange).not.toHaveBeenCalled();
			await expect.element(rowCheckbox('Age')).toBeChecked();
		});

		it('hides a group from its row while its locked leaf is hidden by a controlled columnVisibility', async () => {
			const onColumnVisibilityChange = vi.fn();
			await renderTable({
				columns: lockedColumns,
				columnVisibility: { firstName: false },
				onColumnVisibilityChange,
			});
			await openColumnDisplay();

			await page.elementLocator(rowOf('identity')).getByText('Identity', { exact: true }).click();

			expect(onColumnVisibilityChange).toHaveBeenCalledExactlyOnceWith({ firstName: false, lastName: false });
		});

		it('shows a locked column with a lock, a checked disabled checkbox and a drag handle, and reorders it', async () => {
			const onColumnOrderChange = vi.fn();
			await renderTable({ columns: lockedColumns, onColumnOrderChange });
			await openColumnDisplay();

			const locked = page.elementLocator(rowOf('firstName')).getByRole('checkbox', { name: 'First Name' });
			await expect.element(locked).toBeChecked();
			await expect.element(locked).toBeDisabled();
			await expect
				.element(page.elementLocator(rowOf('firstName')).getByText('lock', { exact: true }))
				.toBeInTheDocument();
			expect(handleOf('firstName')).not.toBeNull();

			await locked.click({ force: true });

			await expect.element(locked).toBeChecked();
			await expect.element(columnHeader('First Name')).toBeVisible();

			await drag('firstName', 'lastName', 0.8, slotShown);

			expect(onColumnOrderChange).toHaveBeenCalledExactlyOnceWith(['lastName', 'firstName', 'age']);
			await expect.poll(tableOrder).toEqual(['lastName', 'firstName', 'age']);
		});

		it('shows a group as partly checked while only its locked columns are shown', async () => {
			await renderTable({ columns: lockedColumns });
			await openColumnDisplay();

			await rowCheckbox('Last Name').click();

			await expect.element(columnHeader('Last Name')).not.toBeInTheDocument();
			await expect.element(rowCheckbox('Identity')).toBePartiallyChecked();
		});

		it('never hides a locked leaf from its group checkbox or All columns', async () => {
			await renderTable({ columns: lockedColumns });
			await openColumnDisplay();

			await rowCheckbox('Identity').click();

			await expect.element(columnHeader('Last Name')).not.toBeInTheDocument();
			await expect.element(columnHeader('First Name')).toBeVisible();
			await expect.element(page.elementLocator(rowOf('firstName')).getByRole('checkbox')).toBeChecked();

			await rowCheckbox('Identity').click();

			await expect.element(columnHeader('Last Name')).toBeVisible();

			await page.getByRole('checkbox', { name: 'All columns', exact: true }).click();

			await expect.element(columnHeader('Last Name')).not.toBeInTheDocument();
			await expect.element(columnHeader('Age')).not.toBeInTheDocument();
			await expect.element(columnHeader('First Name')).toBeVisible();
		});

		it('keeps the row, group and All columns checkboxes working with reorderableColumns', async () => {
			await renderTable();
			await openColumnDisplay();

			const allColumns = page.getByRole('checkbox', { name: 'All columns', exact: true });

			await rowCheckbox('Visits').click();

			await expect.element(columnHeader('Visits')).not.toBeInTheDocument();
			await expect.element(rowCheckbox('Visits')).not.toBeChecked();
			await expect.element(rowCheckbox('Engagement')).toBePartiallyChecked();
			await expect.element(rowCheckbox('Activity')).toBePartiallyChecked();
			await expect.element(allColumns).toBePartiallyChecked();

			await rowCheckbox('Activity').click();

			await expect.element(columnHeader('Visits')).toBeVisible();
			await expect.element(rowCheckbox('Activity')).toBeChecked();

			await rowCheckbox('Activity').click();

			for (const name of ['Visits', 'Profile Progress', 'Status']) {
				await expect.element(columnHeader(name)).not.toBeInTheDocument();
			}
			await expect.element(columnHeader('Age')).toBeVisible();
			await expect.element(rowCheckbox('Activity')).not.toBeChecked();

			await allColumns.click();

			for (const name of ['First Name', 'Visits', 'Status', 'Age']) {
				await expect.element(columnHeader(name)).toBeVisible();
			}
			await expect.element(allColumns).toBeChecked();
		});
	});

	describe('popover layout', () => {
		it('keeps every group open without expand or collapse controls', async () => {
			await renderTable();
			await openColumnDisplay();

			const groups = columnsDialog().getByRole('treeitem', { expanded: true });
			expect(groups.elements().map((group) => group.getAttribute('data-value'))).toEqual([
				'identity',
				'activity',
				'engagement',
			]);
			expect(document.querySelector('[role="dialog"] [data-part="branch-indicator"]')).toBeNull();

			rowOf('activity').focus();
			await userEvent.keyboard('{ArrowLeft}');
			await columnsDialog().getByText('Engagement', { exact: true }).click();

			await expect.element(columnHeader('Visits')).not.toBeInTheDocument();
			await expect.element(rowCheckbox('Visits')).toBeVisible();
			expect(columnsDialog().getByRole('treeitem', { expanded: false }).elements()).toEqual([]);
		});

		it('lists every column of a collapsed table group', async () => {
			await renderTable({
				columns: [
					{
						id: 'identity',
						header: 'Identity',
						meta: { group: { collapsible: true } },
						columns: [
							{ accessorKey: 'firstName', header: 'First Name', meta: { keepVisibleWhenCollapsed: true } },
							{ accessorKey: 'lastName', header: 'Last Name' },
						],
					},
					{ accessorKey: 'age', header: 'Age' },
				],
				collapsedColumnGroups: ['identity'],
			});

			await expect.element(columnHeader('Last Name')).not.toBeInTheDocument();

			await openColumnDisplay();

			expect(popoverOrder('identity')).toEqual(['firstName', 'lastName']);
			await expect.element(rowCheckbox('Last Name')).toBeChecked();
			await expect
				.element(columnsDialog().getByRole('treeitem', { name: /^Identity/ }))
				.toHaveAttribute('aria-expanded', 'true');
		});

		it('keeps All columns below the reorderable list, without a drag handle', async () => {
			await renderTable();
			await openColumnDisplay();

			const tree = columnsDialog().getByRole('tree').element();
			const allColumns = page.getByRole('checkbox', { name: 'All columns', exact: true }).element();
			const allColumnsRow = allColumns.closest('label') ?? allColumns;

			expect(tree.contains(allColumns)).toBe(false);
			expect(allColumnsRow.querySelector(DRAG_HANDLE_SELECTOR)).toBeNull();
			expect(allColumnsRow.getBoundingClientRect().top).toBeGreaterThanOrEqual(
				tree.getBoundingClientRect().bottom,
			);
		});
	});
});
