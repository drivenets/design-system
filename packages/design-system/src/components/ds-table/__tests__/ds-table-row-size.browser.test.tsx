import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import type { ColumnDef } from '@tanstack/react-table';
import DsTable from '../ds-table';
import type { DsTableRowSize } from '../ds-table.types';

type Row = {
	id: string;
	description: string;
};

const LONG_TEXT =
	'Copies the running configuration of every core router to the backup server, verifies the checksum of each file, and alerts the on-call engineer when a router does not respond within five minutes';
const SHORT_TEXT = 'Firmware rollout';
const MULTI_LINE = ['First line', 'Second line', 'Third line', 'Fourth line'];

const columns: ColumnDef<Row>[] = [
	{ accessorKey: 'description', header: 'Description', cell: (info) => info.getValue(), size: 200 },
];

const multiLineColumns: ColumnDef<Row>[] = [
	{
		accessorKey: 'description',
		header: 'Description',
		cell: () => (
			<div>
				{MULTI_LINE.map((line) => (
					<div key={line}>{line}</div>
				))}
			</div>
		),
		size: 200,
	},
];

const data: Row[] = [
	{ id: '1', description: LONG_TEXT },
	{ id: '2', description: SHORT_TEXT },
];

const MEDIUM_ROW_HEIGHT = 48;

const renderTable = async ({
	virtualized,
	rowSize,
	tableColumns = columns,
}: {
	virtualized: boolean;
	rowSize: DsTableRowSize;
	tableColumns?: ColumnDef<Row>[];
}) => {
	await page.render(
		<div style={{ height: 400, width: 600 }}>
			<DsTable columns={tableColumns} data={data} rowSize={rowSize} virtualized={virtualized} />
		</div>,
	);
	await expect.element(page.getByRole('row').nth(1)).toBeVisible();
};

const getBodyRow = (index: number): HTMLElement => {
	const row = document.querySelectorAll('tbody tr')[index];
	if (!(row instanceof HTMLElement)) {
		throw new Error(`Expected body row ${String(index)}`);
	}
	return row;
};

const getCellContent = (row: HTMLElement): HTMLElement => {
	const content = row.querySelector('td')?.firstElementChild;
	if (!(content instanceof HTMLElement)) {
		throw new Error('Expected cell content');
	}
	return content;
};

const isClipped = (element: HTMLElement) => element.scrollHeight > element.clientHeight;

describe.each([
	{ body: 'default', virtualized: false },
	{ body: 'virtualized', virtualized: true },
])('DsTable row size ($body body)', ({ virtualized }) => {
	it.each([
		{ rowSize: 'small', height: 36 },
		{ rowSize: 'medium', height: 48 },
		{ rowSize: 'large', height: 64 },
	] as const)('renders $rowSize rows at $height px', async ({ rowSize, height }) => {
		await renderTable({ virtualized, rowSize });

		expect(getBodyRow(1).getBoundingClientRect().height).toBe(height);
	});

	it('grows an auto row to show all of its wrapped text', async () => {
		await renderTable({ virtualized, rowSize: 'auto' });

		const row = getBodyRow(0);

		await expect.poll(() => isClipped(getCellContent(row))).toBe(false);
		expect(row.getBoundingClientRect().height).toBeGreaterThan(MEDIUM_ROW_HEIGHT);
	});

	it('grows an auto row to fit multi-line cell content', async () => {
		await renderTable({ virtualized, rowSize: 'auto', tableColumns: multiLineColumns });

		const row = getBodyRow(0);
		const lastLine = page
			.getByText(MULTI_LINE[MULTI_LINE.length - 1] ?? '')
			.first()
			.element();

		await expect
			.poll(() => lastLine.getBoundingClientRect().bottom)
			.toBeLessThanOrEqual(row.getBoundingClientRect().bottom);
		expect(row.getBoundingClientRect().height).toBeGreaterThan(MEDIUM_ROW_HEIGHT);
	});

	it('keeps a short auto row at the medium height', async () => {
		await renderTable({ virtualized, rowSize: 'auto' });

		expect(getBodyRow(1).getBoundingClientRect().height).toBe(MEDIUM_ROW_HEIGHT);
	});

	it('places the next row below a tall auto row', async () => {
		await renderTable({ virtualized, rowSize: 'auto' });

		await expect
			.poll(() => getBodyRow(1).getBoundingClientRect().top)
			.toBeGreaterThanOrEqual(getBodyRow(0).getBoundingClientRect().bottom);
	});
});
