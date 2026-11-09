import { useRef, useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import DsTable from '../ds-table';
import type { DsTableApi } from '../ds-table.types';
import { columns, defaultData, type Person } from '../stories/common/story-data';

const EXPAND_BUTTON = { name: 'chevron_right' } as const;

const createRef = () => {
	const tableRef: { current: DsTableApi<Person> | null } = { current: null };

	const tableApi = () => {
		if (!tableRef.current) {
			throw new Error('DsTable did not set its ref');
		}

		return tableRef.current;
	};

	return { tableRef, tableApi };
};

const renderDetails = (row: Person) => <div>Details for {row.firstName}</div>;

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

	it('should return expanded row ids that restore the state after a remount', async () => {
		const tableRef: { current: DsTableApi<Person> | null } = { current: null };

		const tableApi = () => {
			if (!tableRef.current) {
				throw new Error('DsTable did not set its ref');
			}

			return tableRef.current;
		};
		const data = defaultData.slice(0, 5);

		const renderTable = () =>
			page.render(
				<DsTable
					ref={tableRef}
					columns={columns}
					data={data}
					expandable={(row) => row.firstName !== 'Tanner'}
					renderExpandedRow={(row) => <div>Expanded details for {row.firstName}</div>}
				/>,
			);

		const screen = await renderTable();

		expect(tableApi().getExpandedRowIds()).toEqual([]);

		await page.getByRole('button', { name: 'chevron_right' }).nth(0).click();
		await page.getByRole('button', { name: 'chevron_right' }).nth(1).click();
		await expect.element(page.getByText('Expanded details for John')).toBeVisible();

		const savedRowIds = tableApi().getExpandedRowIds();

		expect(savedRowIds).toEqual(['2', '3']);

		await screen.unmount();
		await renderTable();
		await expect.element(page.getByText('Expanded details for Kevin')).not.toBeInTheDocument();

		tableApi().expandRows(savedRowIds);
		await expect.element(page.getByText('Expanded details for Kevin')).toBeVisible();
		await expect.element(page.getByText('Expanded details for John')).toBeVisible();

		tableApi().expandAllRows();
		await expect.poll(() => tableApi().getExpandedRowIds()).toEqual(['2', '3', '4', '5']);
	});

	it('should give every row an expander when expandable is true', async () => {
		await page.render(
			<DsTable
				columns={columns}
				data={defaultData.slice(0, 5)}
				expandable
				renderExpandedRow={renderDetails}
			/>,
		);

		expect(page.getByRole('button', EXPAND_BUTTON).all()).toHaveLength(5);

		await page.getByRole('button', EXPAND_BUTTON).nth(0).click();
		await expect.element(page.getByText('Details for Tanner')).toBeVisible();

		await page.getByRole('button', EXPAND_BUTTON).nth(4).click();
		await expect.element(page.getByText('Details for Peter')).toBeVisible();
		await expect.element(page.getByText('Details for Tanner')).toBeVisible();

		await page.getByRole('button', EXPAND_BUTTON).nth(0).click();
		await expect.element(page.getByText('Details for Tanner')).not.toBeInTheDocument();
		await expect.element(page.getByText('Details for Peter')).toBeVisible();
	});

	it('should render no expander column when expandable is false', async () => {
		await page.render(
			<DsTable
				columns={columns}
				data={defaultData.slice(0, 5)}
				expandable={false}
				renderExpandedRow={renderDetails}
			/>,
		);

		await expect.element(page.getByText('Tanner')).toBeVisible();
		expect(page.getByRole('button', EXPAND_BUTTON).all()).toHaveLength(0);
	});

	it('should render the expanded content right below its row', async () => {
		await page.render(
			<DsTable
				columns={columns}
				data={defaultData.slice(0, 5)}
				expandable
				renderExpandedRow={renderDetails}
			/>,
		);

		await page.getByRole('button', EXPAND_BUTTON).nth(1).click();

		await expect.element(page.getByRole('row').nth(2)).toMatchTextContent('Kevin');
		await expect.element(page.getByRole('row').nth(3)).toHaveTextContent('Details for Kevin');
		await expect.element(page.getByRole('row').nth(4)).toMatchTextContent('John');
	});

	it('should not call onRowClick when toggling the expander', async () => {
		const clicked: string[] = [];

		await page.render(
			<DsTable
				columns={columns}
				data={defaultData.slice(0, 5)}
				expandable
				renderExpandedRow={renderDetails}
				onRowClick={(row) => clicked.push(row.id)}
			/>,
		);

		await page.getByRole('button', EXPAND_BUTTON).nth(0).click();
		await expect.element(page.getByText('Details for Tanner')).toBeVisible();

		expect(clicked).toEqual([]);
	});

	it('should collapse a single row with collapseRow and leave the others expanded', async () => {
		const { tableRef, tableApi } = createRef();

		await page.render(
			<DsTable
				ref={tableRef}
				columns={columns}
				data={defaultData.slice(0, 5)}
				expandable
				renderExpandedRow={renderDetails}
			/>,
		);

		tableApi().expandRows(['1', '2']);
		await expect.element(page.getByText('Details for Tanner')).toBeVisible();
		await expect.element(page.getByText('Details for Kevin')).toBeVisible();

		tableApi().collapseRow('1');
		await expect.element(page.getByText('Details for Tanner')).not.toBeInTheDocument();
		await expect.element(page.getByText('Details for Kevin')).toBeVisible();
		expect(tableApi().getExpandedRowIds()).toEqual(['2']);
	});

	it('should replace the expanded rows with expandRows', async () => {
		const { tableRef, tableApi } = createRef();

		await page.render(
			<DsTable
				ref={tableRef}
				columns={columns}
				data={defaultData.slice(0, 5)}
				expandable
				renderExpandedRow={renderDetails}
			/>,
		);

		tableApi().expandRow('1');
		await expect.element(page.getByText('Details for Tanner')).toBeVisible();

		tableApi().expandRows(['3', '4']);
		await expect.element(page.getByText('Details for John')).toBeVisible();
		await expect.element(page.getByText('Details for Jane')).toBeVisible();
		await expect.element(page.getByText('Details for Tanner')).not.toBeInTheDocument();
		expect(tableApi().getExpandedRowIds()).toEqual(['3', '4']);
	});

	it('should keep UI and API expansion in sync', async () => {
		const { tableRef, tableApi } = createRef();

		await page.render(
			<DsTable
				ref={tableRef}
				columns={columns}
				data={defaultData.slice(0, 5)}
				expandable
				renderExpandedRow={renderDetails}
			/>,
		);

		await page.getByRole('button', EXPAND_BUTTON).nth(2).click();
		await expect.element(page.getByText('Details for John')).toBeVisible();
		expect(tableApi().getExpandedRowIds()).toEqual(['3']);

		tableApi().expandRow('5');
		await expect.element(page.getByText('Details for Peter')).toBeVisible();

		await page.getByRole('button', EXPAND_BUTTON).nth(4).click();
		await expect.element(page.getByText('Details for Peter')).not.toBeInTheDocument();
		expect(tableApi().getExpandedRowIds()).toEqual(['3']);

		tableApi().collapseAllRows();
		await expect.element(page.getByText('Details for John')).not.toBeInTheDocument();
		expect(tableApi().getExpandedRowIds()).toEqual([]);
	});

	it('should expand only the expandable rows with expandAllRows', async () => {
		const { tableRef, tableApi } = createRef();

		await page.render(
			<DsTable
				ref={tableRef}
				columns={columns}
				data={defaultData.slice(0, 5)}
				expandable={(row) => row.firstName !== 'Tanner'}
				renderExpandedRow={renderDetails}
			/>,
		);

		tableApi().expandAllRows();

		await expect.element(page.getByText('Details for Peter')).toBeVisible();
		await expect.element(page.getByText('Details for Tanner')).not.toBeInTheDocument();
		expect(tableApi().getExpandedRowIds()).toEqual(['2', '3', '4', '5']);
	});

	it('should keep rows expanded when the parent re-renders with new data of the same rows', async () => {
		function Wrapper() {
			const [data, setData] = useState(() => defaultData.slice(0, 5));

			return (
				<>
					<button type="button" onClick={() => setData((prev) => prev.map((row) => ({ ...row })))}>
						Refresh data
					</button>
					<DsTable columns={columns} data={data} expandable renderExpandedRow={renderDetails} />
				</>
			);
		}

		await page.render(<Wrapper />);

		await page.getByRole('button', EXPAND_BUTTON).nth(1).click();
		await expect.element(page.getByText('Details for Kevin')).toBeVisible();

		await page.getByRole('button', { name: 'Refresh data' }).click();

		await expect.element(page.getByText('Details for Kevin')).toBeVisible();
	});

	it('should keep a row expanded when its expandable callback changes identity', async () => {
		const { rerender } = await page.render(
			<DsTable
				columns={columns}
				data={defaultData.slice(0, 5)}
				expandable={(row) => row.id !== '1'}
				renderExpandedRow={renderDetails}
			/>,
		);

		await page.getByRole('button', EXPAND_BUTTON).nth(0).click();
		await expect.element(page.getByText('Details for Kevin')).toBeVisible();

		await rerender(
			<DsTable
				columns={columns}
				data={defaultData.slice(0, 5)}
				expandable={(row) => row.id !== '1'}
				renderExpandedRow={renderDetails}
			/>,
		);

		await expect.element(page.getByText('Details for Kevin')).toBeVisible();
	});

	it('should keep an expanded row expanded after sorting', async () => {
		await page.render(
			<DsTable
				columns={columns}
				data={defaultData.slice(0, 5)}
				expandable
				renderExpandedRow={renderDetails}
			/>,
		);

		await page.getByRole('button', EXPAND_BUTTON).nth(0).click();
		await expect.element(page.getByText('Details for Tanner')).toBeVisible();

		await page.getByText('First Name').click();
		await page.getByText('First Name').click();

		await expect.element(page.getByRole('row').nth(1)).toMatchTextContent('Tanner');
		await expect.element(page.getByRole('row').nth(2)).toHaveTextContent('Details for Tanner');
	});

	it('should pick up a new renderExpandedRow between renders', async () => {
		const { rerender } = await page.render(
			<DsTable
				columns={columns}
				data={defaultData.slice(0, 5)}
				expandable
				renderExpandedRow={renderDetails}
			/>,
		);

		await page.getByRole('button', EXPAND_BUTTON).nth(0).click();
		await expect.element(page.getByText('Details for Tanner')).toBeVisible();

		await rerender(
			<DsTable
				columns={columns}
				data={defaultData.slice(0, 5)}
				expandable
				renderExpandedRow={(row) => <div>Updated details for {row.firstName}</div>}
			/>,
		);

		await expect.element(page.getByText('Updated details for Tanner')).toBeVisible();
	});
});
