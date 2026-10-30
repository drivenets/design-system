import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { useState } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import DsTable from '../ds-table';

type Row = {
	id: string;
	firstName: string;
	lastName: string;
	age: number;
};

const rows: Row[] = [
	{ id: '1', firstName: 'Tanner', lastName: 'Linsley', age: 33 },
	{ id: '2', firstName: 'Kevin', lastName: 'Fine', age: 28 },
];

const buildColumns = (defaultCollapsed = false): ColumnDef<Row>[] => [
	{
		id: 'identity',
		header: 'Identity',
		meta: { group: { collapsible: true, defaultCollapsed } },
		columns: [
			{
				accessorKey: 'firstName',
				header: 'First Name',
				cell: (info) => info.getValue<string>(),
				meta: { keepVisibleWhenCollapsed: true },
			},
			{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue<string>() },
			{ accessorKey: 'age', header: 'Age', cell: (info) => info.getValue<number>() },
		],
	},
];

const columns = buildColumns();

type NestedRow = Row & { visits: number; status: string };

const nestedRows: NestedRow[] = rows.map((row, index) => ({ ...row, visits: index * 10, status: 'single' }));

const nestedGroups: ColumnDef<NestedRow>[] = [
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
			{ id: 'engagement', header: 'Engagement', columns: [{ accessorKey: 'visits', header: 'Visits' }] },
			{ accessorKey: 'status', header: 'Status' },
		],
	},
	{ accessorKey: 'age', header: 'Age' },
];

/** Edges of upper header cells that don't sit on a leaf column edge, as `row:x`. */
const misalignedHeaderEdges = () => {
	const headerRows = Array.from(document.querySelectorAll('thead tr'));
	const edgesOf = (row: Element) =>
		Array.from(row.querySelectorAll('th')).flatMap((cell) => {
			const { left, right } = cell.getBoundingClientRect();
			return [left, right];
		});
	const leafEdges = edgesOf(headerRows.at(-1) as Element);

	return headerRows.slice(0, -1).flatMap((row, index) =>
		edgesOf(row)
			.filter((x) => !leafEdges.some((leafX) => Math.abs(leafX - x) < 1))
			.map((x) => `${String(index)}:${String(Math.round(x))}`),
	);
};

const hasGroupDivider = (cell: Element) => getComputedStyle(cell).borderLeftWidth === '2px';

describe('DsTable - column groups', () => {
	it.each([
		{ layout: 'groups first', columns: nestedGroups, stickyColumns: {} },
		{ layout: 'a leaf column first', columns: [...nestedGroups].reverse(), stickyColumns: {} },
		{
			layout: 'a sticky leaf column first',
			columns: [...nestedGroups].reverse(),
			stickyColumns: { left: ['age'] },
		},
	])(
		'lines group and placeholder headers up with the leaf columns, with $layout',
		async ({ columns, stickyColumns }) => {
			await page.render(
				<div style={{ width: 1200 }}>
					<DsTable
						columns={columns}
						data={nestedRows}
						stickyColumns={stickyColumns}
						columnDisplay
						fullWidth
					/>
				</div>,
			);
			await expect.element(page.getByText('Engagement')).toBeVisible();

			expect(misalignedHeaderEdges()).toEqual([]);
		},
	);

	it('draws a divider wherever the column nesting changes, in the header and the body', async () => {
		await page.render(<DsTable columns={nestedGroups} data={nestedRows} />);
		await expect.element(page.getByText('Engagement')).toBeVisible();

		const leafHeaders = Array.from(document.querySelectorAll('thead tr:last-child th'));
		const bodyCells = Array.from(document.querySelectorAll('tbody tr:first-child td'));
		const dividedColumns = leafHeaders
			.filter(
				(cell, index) => hasGroupDivider(cell) && !!bodyCells[index] && hasGroupDivider(bodyCells[index]),
			)
			.map((cell) => cell.textContent);

		expect(dividedColumns).toEqual(['Visits', 'Status', 'Age']);
	});

	it('merges the empty header cells above a column into its header', async () => {
		await page.render(<DsTable columns={nestedGroups} data={nestedRows} />);
		await expect.element(page.getByText('Engagement')).toBeVisible();

		const headerRows = Array.from(document.querySelectorAll('thead tr'));
		const ageHeader = document.querySelector('th[data-column-id="age"]');
		const ageLeft = ageHeader?.getBoundingClientRect().left;
		const cellsAboveAge = headerRows
			.slice(0, -1)
			.map((row) =>
				Array.from(row.querySelectorAll('th')).find((cell) => cell.getBoundingClientRect().left === ageLeft),
			);

		expect(cellsAboveAge.map((cell) => cell && hasGroupDivider(cell))).toEqual([true, true]);
		expect(cellsAboveAge.map((cell) => cell && getComputedStyle(cell).borderBottomColor)).toEqual([
			'rgba(0, 0, 0, 0)',
			'rgba(0, 0, 0, 0)',
		]);
	});

	it('renders a group header above its leaf columns', async () => {
		await page.render(<DsTable columns={columns} data={rows} />);

		await expect.element(page.getByText('Identity')).toBeVisible();
		await expect.element(page.getByText('First Name')).toBeVisible();
		await expect.element(page.getByText('Last Name')).toBeVisible();
		await expect.element(page.getByText('Age')).toBeVisible();
	});

	it('collapses the group, hiding non-necessary columns while keeping flagged ones', async () => {
		await page.render(<DsTable columns={columns} data={rows} />);

		await page.getByRole('button', { name: 'Collapse column group' }).click();

		await expect.element(page.getByText('First Name')).toBeVisible();
		await expect.element(page.getByText('Last Name')).not.toBeInTheDocument();
		await expect.element(page.getByText('Age')).not.toBeInTheDocument();
	});

	it('expands a collapsed group, restoring hidden columns', async () => {
		await page.render(<DsTable columns={columns} data={rows} />);

		await page.getByRole('button', { name: 'Collapse column group' }).click();
		await expect.element(page.getByText('Last Name')).not.toBeInTheDocument();

		await page.getByRole('button', { name: 'Expand column group' }).click();
		await expect.element(page.getByText('Last Name')).toBeVisible();
		await expect.element(page.getByText('Age')).toBeVisible();
	});

	it('starts collapsed when meta.group.defaultCollapsed is set', async () => {
		await page.render(<DsTable columns={buildColumns(true)} data={rows} />);

		await expect.element(page.getByText('First Name')).toBeVisible();
		await expect.element(page.getByText('Last Name')).not.toBeInTheDocument();
	});

	it('overrides the toggle accessible labels via the locale prop', async () => {
		await page.render(
			<DsTable
				columns={columns}
				data={rows}
				locale={{ collapseColumnGroup: 'Hide group', expandColumnGroup: 'Show group' }}
			/>,
		);

		await page.getByRole('button', { name: 'Hide group' }).click();

		await expect.element(page.getByText('Last Name')).not.toBeInTheDocument();
		await expect.element(page.getByRole('button', { name: 'Show group' })).toBeVisible();
	});

	it('supports controlled collapse state via callback', async () => {
		const onChange = vi.fn();

		function ControlledTable() {
			const [collapsed, setCollapsed] = useState<string[]>([]);
			return (
				<DsTable
					columns={columns}
					data={rows}
					collapsedColumnGroups={collapsed}
					onCollapsedColumnGroupsChange={(next) => {
						onChange(next);
						setCollapsed(next);
					}}
				/>
			);
		}

		await page.render(<ControlledTable />);

		await page.getByRole('button', { name: 'Collapse column group' }).click();

		expect(onChange).toHaveBeenCalledWith(['identity']);
		await expect.element(page.getByText('Last Name')).not.toBeInTheDocument();
	});
});
