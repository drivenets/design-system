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

describe('DsTable - column groups', () => {
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

	it('supports controlled collapse state via callback', async () => {
		const onChange = vi.fn();

		function ControlledTable() {
			const [collapsed, setCollapsed] = useState<string[]>([]);
			return (
				<DsTable
					columns={columns}
					data={rows}
					collapsedColumnGroups={collapsed}
					onColumnGroupsCollapsedChange={(next) => {
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
