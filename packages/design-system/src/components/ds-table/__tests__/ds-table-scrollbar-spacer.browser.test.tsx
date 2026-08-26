import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import DsTable from '../ds-table';
import { DsTableEditCellText } from '../components/edit/cell-editors';
import { columns, type Person } from '../stories/common/story-data';
import { SCROLLBAR_SPACER_WIDTH } from '../utils/constants';

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

const getSpacers = (): HTMLElement[] =>
	[...document.querySelectorAll('thead th[aria-hidden="true"]')].filter(
		(node): node is HTMLElement => node instanceof HTMLElement,
	);

const getSpacer = (index = 0): HTMLElement => {
	const spacer = getSpacers()[index];
	if (!spacer) {
		throw new Error(`Expected scrollbar spacer at index ${String(index)}`);
	}
	return spacer;
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

const contentBoxRight = (element: HTMLElement): number =>
	element.getBoundingClientRect().left + element.clientWidth;

const expectAligned = (columnId: string): void => {
	const header = getHeaderCell(columnId).getBoundingClientRect();
	const body = getBodyCell(columnId).getBoundingClientRect();

	expect(Math.abs(header.left - body.left)).toBeLessThan(1);
	expect(Math.abs(header.width - body.width)).toBeLessThan(1);
};

describe('DsTable scrollbar spacer', () => {
	it('aligns Fill columns after a virtualized body overflows vertically', async () => {
		await page.render(
			<div style={{ width: 900, height: 400 }}>
				<DsTable columns={columns} data={generatePeople(40)} virtualized />
			</div>,
		);

		await expect.poll(() => getSpacer().getBoundingClientRect().width).toBe(SCROLLBAR_SPACER_WIDTH);

		for (const id of fillLeafIds) {
			expectAligned(id);
		}

		const lastLeaf = getHeaderCell('progress').getBoundingClientRect();
		const spacer = getSpacer().getBoundingClientRect();
		const table = getTable().getBoundingClientRect();

		expect(Math.abs(lastLeaf.right - spacer.left)).toBeLessThan(1);
		expect(Math.abs(spacer.right - table.right)).toBeLessThan(2);
	});

	it('aligns Fill columns after a non-virtual body overflows vertically', async () => {
		await page.render(
			<div style={{ width: 900, height: 400 }}>
				<DsTable columns={columns} data={generatePeople(40)} />
			</div>,
		);

		await expect.poll(() => getSpacer().getBoundingClientRect().width).toBe(SCROLLBAR_SPACER_WIDTH);

		for (const id of fillLeafIds) {
			expectAligned(id);
		}
	});

	it('paints group and leaf header-row borders through the spacer to the table edge', async () => {
		await page.render(
			<div style={{ width: 800, height: 240 }}>
				<DsTable columns={groupedColumns} data={generateRows(30)} />
			</div>,
		);

		await expect.poll(() => getSpacers().length).toBe(2);
		await expect.poll(() => getSpacer().getBoundingClientRect().width).toBe(SCROLLBAR_SPACER_WIDTH);

		const tableRight = getTable().getBoundingClientRect().right;

		for (const spacer of getSpacers()) {
			expect(getComputedStyle(spacer).borderBottomWidth).not.toBe('0px');
			expect(Math.abs(spacer.getBoundingClientRect().right - tableRight)).toBeLessThan(2);
		}
	});

	it('keeps spacer width when bordered is false but does not paint a bottom border', async () => {
		await page.render(
			<div style={{ width: 900, height: 400 }}>
				<DsTable columns={columns} data={generatePeople(40)} bordered={false} />
			</div>,
		);

		await expect.poll(() => getSpacer().getBoundingClientRect().width).toBe(SCROLLBAR_SPACER_WIDTH);
		expect(getComputedStyle(getSpacer()).borderBottomWidth).toBe('0px');
	});

	it('collapses the spacer when the body does not overflow', async () => {
		await page.render(
			<div style={{ width: 900, height: 400 }}>
				<DsTable columns={columns} data={generatePeople(2)} />
			</div>,
		);

		await expect.poll(() => getSpacer().getBoundingClientRect().width).toBe(0);

		const lastLeaf = getHeaderCell('progress').getBoundingClientRect();
		const table = getTable().getBoundingClientRect();
		expect(Math.abs(lastLeaf.right - table.right)).toBeLessThan(2);
	});

	it('does not persist when a resizable table gains a vertical scrollbar after seed', async () => {
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

		await expect.poll(() => {
			const table = document.querySelector('table');
			return table instanceof HTMLElement ? table.style.width : '';
		}).not.toBe('');

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

		await expect.poll(() => getSpacer().getBoundingClientRect().width).toBe(SCROLLBAR_SPACER_WIDTH);
		expect(onColumnSizingChange).not.toHaveBeenCalled();
		expect(getScrollContainer().scrollWidth).toBe(getScrollContainer().clientWidth);
	});

	it('keeps the last resize handle on the last leaf, not the spacer', async () => {
		await page.render(
			<div style={{ width: 800, height: 400 }}>
				<DsTable
					columns={[
						{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue(), size: 200 },
						{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue(), size: 200 },
					]}
					data={generateRows(40)}
					resizableColumns
				/>
			</div>,
		);

		await expect.poll(() => getSpacer().getBoundingClientRect().width).toBe(SCROLLBAR_SPACER_WIDTH);

		const lastHandle = getHeaderCell('lastName').querySelector('[aria-label="Resize column"]');
		expect(lastHandle).not.toBeNull();
		expect(getSpacer().querySelector('[aria-label="Resize column"]')).toBeNull();
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

		await expect.poll(() => getSpacer().getBoundingClientRect().width).toBe(SCROLLBAR_SPACER_WIDTH);

		await page.getByRole('button', { name: 'chevron_right' }).nth(0).click();
		const details = page.getByText('Details for First1');
		await expect.element(details).toBeVisible();

		const expandedCell = details.element().closest('td');
		if (!(expandedCell instanceof HTMLElement)) {
			throw new Error('Expected expanded row cell');
		}

		expect(expandedCell.getBoundingClientRect().right).toBeLessThanOrEqual(contentBoxRight(getBody()) + 1);
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

		await expect.poll(() => getSpacer().getBoundingClientRect().width).toBe(SCROLLBAR_SPACER_WIDTH);

		const lastCell = getBodyCell('lastName');
		expect(lastCell.getBoundingClientRect().right).toBeLessThanOrEqual(contentBoxRight(getBody()) + 1);
	});
});
