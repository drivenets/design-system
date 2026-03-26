import { useRef, useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import DsTable from '../ds-table';
import type { DsTableApi } from '../ds-table.types';
import { columns, defaultData, type Person } from '../stories/common/story-data';

describe('DsTable Expansion', () => {
	it('should expand and collapse rows', async () => {
		const data = defaultData.slice(0, 5);

		await page.render(
			<DsTable
				columns={columns}
				data={data}
				expandable={(row) => row.firstName !== 'Tanner'}
				renderExpandedRow={(row) => (
					<div>
						<h4>Expanded details for {row.firstName}</h4>
					</div>
				)}
			/>,
		);

		const expandButtons = page.getByRole('button', { name: 'chevron_right' }).all();

		expect(expandButtons).toHaveLength(4);

		await page.getByRole('button', { name: 'chevron_right' }).nth(0).click();
		await expect.element(page.getByText('Expanded details for Kevin')).toBeVisible();

		await page.getByRole('button', { name: 'chevron_right' }).nth(0).click();
		await expect.element(page.getByText('Expanded details for Kevin')).not.toBeInTheDocument();
	});

	it('should support programmatic expansion via ref API', async () => {
		function ProgrammaticExpansionWrapper() {
			const tableRef = useRef<DsTableApi<Person>>(null);
			const [expandedRows, setExpandedRows] = useState<string[]>([]);
			const data = defaultData.slice(0, 5);

			const expandRow = (rowId: string) => {
				tableRef.current?.expandRow(rowId);
				setExpandedRows((prev) => (prev.includes(rowId) ? prev : [...prev, rowId]));
			};

			const expandAllRows = () => {
				tableRef.current?.expandAllRows();
				const expandableRowIds = data.filter((row) => row.firstName !== 'Tanner').map((row) => row.id);
				setExpandedRows(expandableRowIds);
			};

			const collapseAllRows = () => {
				tableRef.current?.collapseAllRows();
				setExpandedRows([]);
			};

			const expandFirstThreeRows = () => {
				const firstThreeIds = ['2', '3', '4'];
				tableRef.current?.expandRows(firstThreeIds);
				setExpandedRows(firstThreeIds);
			};

			return (
				<div>
					<p>Expanded rows: {expandedRows.length > 0 ? expandedRows.join(', ') : 'None'}</p>
					<button type="button" onClick={() => expandRow('2')}>
						Expand Kevin
					</button>
					<button type="button" onClick={expandAllRows}>
						Expand All
					</button>
					<button type="button" onClick={collapseAllRows}>
						Collapse All
					</button>
					<button type="button" onClick={expandFirstThreeRows}>
						Expand First 3 Expandable
					</button>
					<DsTable
						columns={columns}
						data={data}
						expandable={(row) => row.firstName !== 'Tanner'}
						renderExpandedRow={(row) => (
							<div>
								<h4>Expanded Details for {row.firstName}</h4>
								<p>ID: {row.id}</p>
							</div>
						)}
						ref={tableRef}
					/>
				</div>
			);
		}

		await page.render(<ProgrammaticExpansionWrapper />);

		await expect.element(page.getByText('Expanded rows: None')).toBeVisible();

		await page.getByRole('button', { name: /expand kevin/i }).click();
		await expect.element(page.getByText('Expanded rows: 2')).toBeVisible();
		await expect.element(page.getByText('Expanded Details for Kevin')).toBeVisible();

		await page.getByRole('button', { name: /^expand all$/i }).click();

		const expandButtons = page.getByRole('button', { name: 'chevron_right' }).all();

		expect(expandButtons).toHaveLength(4);

		await page.getByRole('button', { name: /collapse all/i }).click();
		await expect.element(page.getByText('Expanded rows: None')).toBeVisible();
		await expect.element(page.getByText('Expanded Details for Kevin')).not.toBeInTheDocument();

		await page.getByRole('button', { name: /expand first 3 expandable/i }).click();
		await expect.element(page.getByText('Expanded rows: 2, 3, 4')).toBeVisible();

		await page.getByRole('button', { name: /collapse all/i }).click();
		await expect.element(page.getByText('Expanded rows: None')).toBeVisible();
	});
});
