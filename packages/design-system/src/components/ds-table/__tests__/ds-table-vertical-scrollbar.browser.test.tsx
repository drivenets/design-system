import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import DsTable from '../ds-table';
import { DsTableEditCellText } from '../components/edit/cell-editors';
import { columns, type Person } from '../stories/common/story-data';
import { getColumnTrackWidth } from '../hooks/use-scrollbar-gutter';
import { SCROLLBAR_GUTTER_WIDTH } from '../utils/constants';

type Row = {
	id: string;
	firstName: string;
	lastName: string;
	age: number;
};

const statuses: Person['status'][] = ['single', 'relationship', 'complicated'];

const generatePeople = (count: number): Person[] =>
	Array.from({ length: count }, (_, i) => ({
		id: String(i + 1),
		firstName: `First${String(i + 1)}`,
		lastName: `Last${String(i + 1)}`,
		age: 20 + (i % 50),
		visits: i * 10,
		status: statuses[i % statuses.length] ?? 'single',
		progress: i % 100,
	}));

const generateRows = (count: number): Row[] =>
	Array.from({ length: count }, (_, i) => ({
		id: String(i + 1),
		firstName: `First${String(i + 1)}`,
		lastName: `Last${String(i + 1)}`,
		age: 20 + (i % 50),
	}));

const groupedColumns: ColumnDef<Row>[] = [
	{
		id: 'identity',
		header: 'Identity',
		columns: [
			{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue<string>() },
			{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue<string>() },
			{ accessorKey: 'age', header: 'Age', cell: (info) => info.getValue<number>() },
		],
	},
];

const wideColumns: ColumnDef<Row>[] = [
	{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue(), size: 500 },
	{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue(), size: 500 },
	{ accessorKey: 'age', header: 'Age', cell: (info) => info.getValue(), size: 500 },
];

const fillLeafIds = ['firstName', 'lastName', 'age', 'visits', 'status', 'progress'] as const;

const getHeaderCell = (columnId: string): HTMLElement => {
	const cell = document.querySelector(`thead th[data-column-id="${columnId}"]`);
	if (!(cell instanceof HTMLElement)) {
		throw new Error(`Expected header cell for column "${columnId}"`);
	}
	return cell;
};

const getBodyCell = (columnId: string): HTMLElement => {
	const header = getHeaderCell(columnId);
	const index = [...(header.parentElement?.children ?? [])].indexOf(header);
	const cell = document.querySelector(`tbody tr td:nth-child(${String(index + 1)})`);
	if (!(cell instanceof HTMLElement)) {
		throw new Error(`Expected body cell for column "${columnId}"`);
	}
	return cell;
};

const getTable = (): HTMLElement => {
	const table = document.querySelector('table');
	if (!(table instanceof HTMLElement)) {
		throw new Error('Expected table');
	}
	return table;
};

const getBody = (): HTMLElement => {
	const body = document.querySelector('tbody');
	if (!(body instanceof HTMLElement)) {
		throw new Error('Expected tbody');
	}
	return body;
};

const getScrollContainer = (): HTMLElement => {
	const container = getTable().parentElement;
	if (!(container instanceof HTMLElement)) {
		throw new Error('Expected the table scroll container');
	}
	return container;
};

const overflowsVertically = (element: HTMLElement): boolean => element.scrollHeight > element.clientHeight;

const contentBoxRight = (element: HTMLElement): number =>
	element.getBoundingClientRect().left + element.clientWidth;

const expectAligned = (columnId: string): void => {
	const header = getHeaderCell(columnId).getBoundingClientRect();
	const body = getBodyCell(columnId).getBoundingClientRect();

	expect(Math.abs(header.left - body.left)).toBeLessThan(1);
	expect(Math.abs(header.width - body.width)).toBeLessThan(1);
};

describe('DsTable vertical scrollbar', () => {
	it.each([
		{ name: 'virtualized', virtualized: true },
		{ name: 'non-virtualized', virtualized: false },
	])('scrolls the $name body on the table container, not the tbody', async ({ virtualized }) => {
		await page.render(
			<div style={{ width: 900, height: 400 }}>
				<DsTable columns={columns} data={generatePeople(40)} virtualized={virtualized} />
			</div>,
		);

		await expect.poll(() => overflowsVertically(getScrollContainer())).toBe(true);

		expect(overflowsVertically(getBody())).toBe(false);

		for (const id of fillLeafIds) {
			expectAligned(id);
		}
	});

	it('keeps the vertical scrollbar at the visible right edge when the table overflows horizontally', async () => {
		await page.render(
			<div style={{ width: 600, height: 300 }}>
				<DsTable columns={wideColumns} data={generateRows(40)} />
			</div>,
		);

		const container = getScrollContainer();
		await expect.poll(() => overflowsVertically(container)).toBe(true);

		expect(container.scrollWidth).toBeGreaterThan(container.clientWidth);
		expect(overflowsVertically(getBody())).toBe(false);

		// The vertical scrollbar belongs to the container, whose right edge is the visible table edge.
		const root = container.parentElement;
		if (!(root instanceof HTMLElement)) {
			throw new Error('Expected the table root');
		}

		const rootInnerRight =
			root.getBoundingClientRect().right - Number.parseFloat(getComputedStyle(root).borderRightWidth);
		expect(Math.abs(container.getBoundingClientRect().right - rootInnerRight)).toBeLessThan(1);
	});

	it('keeps the header at the top while the body scrolls vertically', async () => {
		await page.render(
			<div style={{ width: 900, height: 300 }}>
				<DsTable columns={columns} data={generatePeople(40)} />
			</div>,
		);

		const container = getScrollContainer();
		const headerTop = getHeaderCell('firstName').getBoundingClientRect().top;

		container.scrollTop = 400;
		await expect.poll(() => container.scrollTop).toBe(400);

		expect(getHeaderCell('firstName').getBoundingClientRect().top).toBeCloseTo(headerTop, 0);
	});

	it('paints group and leaf header-row borders to the table edge', async () => {
		await page.render(
			<div style={{ width: 800, height: 240 }}>
				<DsTable columns={groupedColumns} data={generateRows(30)} />
			</div>,
		);

		const container = getScrollContainer();
		await expect.poll(() => overflowsVertically(container)).toBe(true);

		const tableRight = getTable().getBoundingClientRect().right;
		// Non-zero when the scrollbar takes no layout space (overlay or hidden).
		const gutterPadding = container.clientWidth - getColumnTrackWidth(container);
		const rows = document.querySelectorAll('thead tr');

		expect(rows).toHaveLength(2);

		for (const row of rows) {
			const lastCell = row.lastElementChild;
			if (!(lastCell instanceof HTMLElement)) {
				throw new Error('Expected a header cell');
			}

			expect(getComputedStyle(lastCell).borderBottomWidth).not.toBe('0px');
			// Cells stop at the gutter padding; the row's inset shadow carries the
			// border through it to the table edge.
			expect(Math.abs(lastCell.getBoundingClientRect().right + gutterPadding - tableRight)).toBeLessThan(1);
			expect(getComputedStyle(row).boxShadow).toContain('inset');
		}
	});

	it.each([
		{ name: 'virtualized', virtualized: true },
		{ name: 'non-virtualized', virtualized: false },
	])(
		'reserves the scrollbar gutter in a $name table when the scrollbar takes no layout space',
		async ({ virtualized }) => {
			await page.render(
				<>
					<style>{'div:has(> table) { scrollbar-width: none !important; }'}</style>
					<div style={{ width: 900, height: 400 }}>
						<DsTable columns={columns} data={generatePeople(40)} virtualized={virtualized} />
					</div>
				</>,
			);

			const container = getScrollContainer();
			await expect.poll(() => overflowsVertically(container)).toBe(true);
			expect(container.offsetWidth - container.clientWidth).toBe(0);

			await expect
				.poll(() => contentBoxRight(container) - getHeaderCell('progress').getBoundingClientRect().right)
				.toBeCloseTo(SCROLLBAR_GUTTER_WIDTH, 0);
			expect(container.scrollWidth).toBe(container.clientWidth);

			for (const id of fillLeafIds) {
				expectAligned(id);
			}
		},
	);

	it('fills the visible width with the last leaf when the body does not overflow', async () => {
		await page.render(
			<div style={{ width: 900, height: 400 }}>
				<DsTable columns={columns} data={generatePeople(2)} />
			</div>,
		);

		const container = getScrollContainer();
		expect(overflowsVertically(container)).toBe(false);

		const lastLeaf = getHeaderCell('progress').getBoundingClientRect();
		expect(Math.abs(lastLeaf.right - contentBoxRight(container))).toBeLessThan(1);
	});

	it('does not persist or overflow when a resizable table gains a vertical scrollbar after seed', async () => {
		const onColumnSizingChange = vi.fn();
		const fillColumns: ColumnDef<Row>[] = [
			{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue() },
			{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue() },
		];

		const { rerender } = await page.render(
			<div style={{ width: 800, height: 400 }}>
				<DsTable
					columns={fillColumns}
					data={generateRows(2)}
					resizableColumns
					onColumnSizingChange={onColumnSizingChange}
				/>
			</div>,
		);

		await expect.poll(() => getTable().style.width).not.toBe('');
		expect(onColumnSizingChange).not.toHaveBeenCalled();

		await rerender(
			<div style={{ width: 800, height: 400 }}>
				<DsTable
					columns={fillColumns}
					data={generateRows(40)}
					resizableColumns
					onColumnSizingChange={onColumnSizingChange}
				/>
			</div>,
		);

		const container = getScrollContainer();
		await expect.poll(() => overflowsVertically(container)).toBe(true);
		await expect.poll(() => container.scrollWidth).toBe(container.clientWidth);
		expect(onColumnSizingChange).not.toHaveBeenCalled();
	});

	it('keeps expanded-row chrome off the vertical scrollbar', async () => {
		await page.render(
			<div style={{ width: 900, height: 400 }}>
				<DsTable
					columns={columns}
					data={generatePeople(40)}
					expandable
					renderExpandedRow={(row) => <div>Details for {row.firstName}</div>}
				/>
			</div>,
		);

		await expect.poll(() => overflowsVertically(getScrollContainer())).toBe(true);

		await page.getByRole('button', { name: 'chevron_right' }).nth(0).click();
		const details = page.getByText('Details for First1');
		await expect.element(details).toBeVisible();

		const expandedCell = details.element().closest('td');
		if (!(expandedCell instanceof HTMLElement)) {
			throw new Error('Expected expanded row cell');
		}

		expect(expandedCell.getBoundingClientRect().right).toBeLessThanOrEqual(
			contentBoxRight(getScrollContainer()) + 1,
		);
	});

	it('keeps an editable last-cell focus ring off the vertical scrollbar', async () => {
		const editColumns: ColumnDef<Row>[] = [
			{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue() },
			{
				accessorKey: 'lastName',
				header: 'Last Name',
				cell: (info) => info.getValue(),
				editCell: (info: CellContext<Row, string>) => <DsTableEditCellText cellContext={info} />,
			},
		];

		await page.render(
			<div style={{ width: 800, height: 400 }}>
				<DsTable columns={editColumns} data={generateRows(40)} onCellEdit={() => undefined} />
			</div>,
		);

		await expect.poll(() => overflowsVertically(getScrollContainer())).toBe(true);

		const lastCell = getBodyCell('lastName');
		expect(lastCell.getBoundingClientRect().right).toBeLessThanOrEqual(
			contentBoxRight(getScrollContainer()) + 1,
		);
	});

	it('spans the resize overlay over the visible rows after scrolling down', async () => {
		await page.render(
			<div style={{ width: 800, height: 300 }}>
				<DsTable columns={wideColumns} data={generateRows(40)} resizableColumns />
			</div>,
		);

		const container = getScrollContainer();
		await expect.poll(() => overflowsVertically(container)).toBe(true);
		container.scrollTop = 600;
		await expect.poll(() => container.scrollTop).toBe(600);

		const handle = getHeaderCell('firstName').querySelector('[aria-label="Resize column"]');
		if (!(handle instanceof HTMLElement)) {
			throw new Error('Expected a resize handle');
		}

		handle.dispatchEvent(
			new PointerEvent('pointerover', {
				bubbles: true,
				cancelable: true,
				pointerId: 1,
				pointerType: 'mouse',
			}),
		);
		handle.dispatchEvent(
			new PointerEvent('pointerenter', {
				bubbles: true,
				cancelable: true,
				pointerId: 1,
				pointerType: 'mouse',
			}),
		);

		await expect.poll(() => document.querySelector('[data-resize-overlay]')).not.toBeNull();
		const overlay = document.querySelector('[data-resize-overlay]')?.getBoundingClientRect();
		const visible = container.getBoundingClientRect();

		expect(overlay?.top).toBeCloseTo(visible.top, 0);
		expect(overlay?.height).toBeCloseTo(container.clientHeight, 0);
	});
});
