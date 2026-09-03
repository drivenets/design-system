import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import type { ColumnDef } from '@tanstack/react-table';
import DsTable from '../ds-table';

type Row = {
	id: string;
	firstName: string;
	lastName: string;
};

const LONG_LEAF_HEADER = 'Preferred given name used across all account records';
const LONG_GROUP_HEADER = 'Identity and registration details for this person';
const SHORT_LEAF_HEADER = 'Age';

const rows: Row[] = [
	{ id: '1', firstName: 'Tanner', lastName: 'Linsley' },
	{ id: '2', firstName: 'Kevin', lastName: 'Fine' },
];

const getHeaderCell = (columnId: string): HTMLElement => {
	const cell = document.querySelector(`thead th[data-column-id="${columnId}"]`);
	if (!(cell instanceof HTMLElement)) {
		throw new Error(`Expected header cell for column "${columnId}"`);
	}
	return cell;
};

const getHeaderLabel = (columnId: string): HTMLElement => {
	const label = [...getHeaderCell(columnId).querySelectorAll('span')].find((span) =>
		[...span.childNodes].some(
			(node) => node.nodeType === Node.TEXT_NODE && Boolean(node.textContent?.trim()),
		),
	);
	if (!(label instanceof HTMLElement)) {
		throw new Error(`Expected header label in column "${columnId}"`);
	}
	return label;
};

const expectEllipsis = (label: HTMLElement): void => {
	const computed = getComputedStyle(label);

	expect(computed.whiteSpace).toBe('nowrap');
	expect(computed.textOverflow).toBe('ellipsis');
	expect(computed.overflow).toBe('hidden');
	expect(label.scrollWidth).toBeGreaterThan(label.clientWidth);
};

describe('DsTable header label ellipsis', () => {
	it('ellipsizes a long Leaf column header and shows a tooltip while truncated', async () => {
		const columns: ColumnDef<Row>[] = [
			{
				accessorKey: 'firstName',
				header: LONG_LEAF_HEADER,
				cell: (info) => info.getValue(),
				size: 80,
				enableSorting: false,
			},
			{
				accessorKey: 'lastName',
				header: 'Last Name',
				cell: (info) => info.getValue(),
				size: 200,
				enableSorting: false,
			},
		];

		await page.render(<DsTable columns={columns} data={rows} />);

		const label = getHeaderLabel('firstName');

		expect(label.textContent).toBe(LONG_LEAF_HEADER);
		expectEllipsis(label);
		await page.getByText(LONG_LEAF_HEADER, { exact: true }).hover();
		await expect.element(page.getByRole('tooltip', { name: LONG_LEAF_HEADER })).toBeVisible();
		expect(getHeaderCell('firstName').getBoundingClientRect().height).toBe(45);
	});

	it('does not show a tooltip when a Leaf column header label fits', async () => {
		const columns: ColumnDef<Row>[] = [
			{
				accessorKey: 'firstName',
				header: SHORT_LEAF_HEADER,
				cell: (info) => info.getValue(),
				size: 400,
				enableSorting: false,
			},
		];

		await page.render(<DsTable columns={columns} data={rows} />);

		const label = getHeaderLabel('firstName');

		expect(label.textContent).toBe(SHORT_LEAF_HEADER);
		expect(label.scrollWidth).toBeLessThanOrEqual(label.clientWidth);
		await page.getByText(SHORT_LEAF_HEADER, { exact: true }).hover();
		await expect.element(page.getByRole('tooltip')).not.toBeInTheDocument();
	});

	it('ellipsizes a long Column group label and shows a tooltip while truncated', async () => {
		const columns: ColumnDef<Row>[] = [
			{
				id: 'identity',
				header: LONG_GROUP_HEADER,
				columns: [
					{
						accessorKey: 'firstName',
						header: 'First Name',
						cell: (info) => info.getValue<string>(),
						size: 60,
						enableSorting: false,
					},
					{
						accessorKey: 'lastName',
						header: 'Last Name',
						cell: (info) => info.getValue<string>(),
						size: 60,
						enableSorting: false,
					},
				],
			},
		];

		await page.render(<DsTable columns={columns} data={rows} />);

		const label = getHeaderLabel('identity');

		expect(label.textContent).toBe(LONG_GROUP_HEADER);
		expectEllipsis(label);
		await page.getByText(LONG_GROUP_HEADER, { exact: true }).hover();
		await expect.element(page.getByRole('tooltip', { name: LONG_GROUP_HEADER })).toBeVisible();
		expect(getHeaderCell('identity').getBoundingClientRect().height).toBe(45);
	});

	it('does not derive a tooltip from nested custom header content', async () => {
		const hiddenExtra = 'internal-column-id';
		const columns: ColumnDef<Row>[] = [
			{
				accessorKey: 'firstName',
				header: () => (
					<>
						{LONG_LEAF_HEADER}
						<span>{hiddenExtra}</span>
					</>
				),
				cell: (info) => info.getValue(),
				size: 80,
				enableSorting: false,
			},
			{
				accessorKey: 'lastName',
				header: 'Last Name',
				cell: (info) => info.getValue(),
				size: 200,
				enableSorting: false,
			},
		];

		await page.render(<DsTable columns={columns} data={rows} />);

		const label = getHeaderLabel('firstName');

		expect(label.textContent).toContain(LONG_LEAF_HEADER);
		expect(label.textContent).toContain(hiddenExtra);
		expectEllipsis(label);
		await page.getByText(LONG_LEAF_HEADER).hover();
		await expect.element(page.getByRole('tooltip')).not.toBeInTheDocument();
		await expect.element(page.getByRole('tooltip', { name: hiddenExtra })).not.toBeInTheDocument();
	});

	it('does not reserve sort-icon space until the column is sorted', async () => {
		const columns: ColumnDef<Row>[] = [
			{
				accessorKey: 'firstName',
				header: 'First Name',
				cell: (info) => info.getValue(),
				size: 160,
			},
			{
				accessorKey: 'lastName',
				header: 'Last Name',
				cell: (info) => info.getValue(),
				size: 160,
			},
		];

		await page.render(<DsTable columns={columns} data={rows} />);

		const label = getHeaderLabel('firstName');
		const unsortedLabelWidth = label.clientWidth;

		await expect.element(page.getByText('arrow_drop_up')).not.toBeInTheDocument();
		await expect.element(page.getByText('arrow_drop_down')).not.toBeInTheDocument();

		await page.getByText('First Name').click();

		await expect.element(page.getByText('arrow_drop_up')).toBeVisible();
		expect(label.clientWidth).toBeLessThan(unsortedLabelWidth);
	});

	it('keeps the Resize handle hit target past the cell edge when the header is truncated', async () => {
		const columns: ColumnDef<Row>[] = [
			{
				accessorKey: 'firstName',
				header: LONG_LEAF_HEADER,
				cell: (info) => info.getValue(),
				size: 80,
				enableSorting: false,
			},
			{
				accessorKey: 'lastName',
				header: 'Last Name',
				cell: (info) => info.getValue(),
				size: 200,
				enableSorting: false,
			},
		];

		await page.render(<DsTable columns={columns} data={rows} resizableColumns />);

		const cell = getHeaderCell('firstName');
		const handle = page.getByRole('separator', { name: 'Resize column' }).first();

		await expect.element(handle).toBeVisible();

		const cellRect = cell.getBoundingClientRect();
		const hit = document.elementFromPoint(cellRect.right + 2, cellRect.top + cellRect.height / 2);
		const handleEl = handle.element();

		expect(handleEl instanceof HTMLElement && (handleEl === hit || handleEl.contains(hit))).toBe(true);
	});
});
