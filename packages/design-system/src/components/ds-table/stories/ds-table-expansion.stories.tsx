import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent } from 'storybook/test';
import { useRef, useState } from 'react';
import DsTable from '../ds-table';
import type { DsTableApi } from '../ds-table.types';
import styles from './ds-table.stories.module.scss';
import { columns, defaultData, type Person } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { getDataRows } from './common/story-test-helpers';
import { TableEmptyState } from './components';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Design System/Table/Expansion',
	component: DsTable,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		columns,
		data: defaultData,
		stickyHeader: true,
		bordered: true,
		fullWidth: true,
		expandable: false,
		emptyState: <TableEmptyState />,
		onRowClick: fn(),
	},
	decorators: [fullHeightDecorator],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

export const Expandable: Story = {
	args: {
		data: defaultData.slice(0, 5),
		expandable: (row) => row.firstName !== 'Tanner',
		renderExpandedRow: (row) => (
			<>
				<div className={styles.expandedRowDetails}>
					<h4>Expanded Details for {row.firstName}</h4>
					<p>ID: {row.id}</p>
					<p>
						Full Name: {row.firstName} {row.lastName}
					</p>
					<p>Status: {row.status}</p>
				</div>

				<DsTable
					columns={[
						{
							accessorKey: 'id',
							header: 'ID',
						},
						{
							accessorKey: 'firstName',
							header: 'First Name',
						},
						{
							accessorKey: 'lastName',
							header: 'Last Name',
						},
					]}
					data={defaultData.slice(0, 3)}
				/>
			</>
		),
	},
	play: async ({ canvas }) => {
		await expect(getDataRows(canvas)).toHaveLength(5);

		const expandButtons = canvas.getAllByRole('button', { name: /chevron_right/i });
		await expect(expandButtons).toHaveLength(4);

		await userEvent.click(expandButtons[0] as HTMLElement);
		await expect(canvas.getByText(/expanded details for kevin/i)).toBeInTheDocument();

		await userEvent.click(expandButtons[0] as HTMLElement);
		await expect(canvas.queryByText(/expanded details for kevin/i)).not.toBeInTheDocument();
	},
};

export const ProgrammaticExpansion: Story = {
	args: {
		data: defaultData.slice(0, 5),
		expandable: (row) => row.firstName !== 'Tanner',
		renderExpandedRow: (row) => (
			<div className={styles.expandedRowDetails}>
				<h4>Expanded Details for {row.firstName}</h4>
				<p>ID: {row.id}</p>
				<p>
					Full Name: {row.firstName} {row.lastName}
				</p>
				<p>Status: {row.status}</p>
			</div>
		),
	},
	render: function Render(args) {
		const tableRef = useRef<DsTableApi<Person>>(null);
		const [expandedRows, setExpandedRows] = useState<string[]>([]);

		const expandRow = (rowId: string) => {
			tableRef.current?.expandRow(rowId);
			setExpandedRows((prev) => (prev.includes(rowId) ? prev : [...prev, rowId]));
		};

		const expandAllRows = () => {
			tableRef.current?.expandAllRows();
			const expandableRowIds = defaultData
				.slice(0, 5)
				.filter((row) => row.firstName !== 'Tanner')
				.map((row) => row.id);
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
				<div className={styles.programmaticSelectionDemo}>
					<h4 className={styles.programmaticSelectionDemo__title}>Programmatic Row Expansion Demo</h4>
					<p className={styles.programmaticSelectionDemo__description}>
						Use the buttons below to programmatically control row expansion using TanStack Table v8 APIs.
					</p>
					<p className={styles.programmaticSelectionDemo__selectedRows}>
						Expanded rows: {expandedRows.length > 0 ? expandedRows.join(', ') : 'None'}
					</p>
				</div>

				<div className={styles.programmaticSelectionControls}>
					<button onClick={() => expandRow('2')} className={styles.programmaticSelectionButton}>
						Expand Kevin
					</button>
					<button onClick={() => expandRow('3')} className={styles.programmaticSelectionButton}>
						Expand John
					</button>
					<button onClick={() => expandRow('4')} className={styles.programmaticSelectionButton}>
						Expand Jane
					</button>
					<button onClick={expandAllRows} className={styles.programmaticSelectionButton}>
						Expand All
					</button>
					<button onClick={collapseAllRows} className={styles.programmaticSelectionButton}>
						Collapse All
					</button>
					<button onClick={expandFirstThreeRows} className={styles.programmaticSelectionButton}>
						Expand First 3 Expandable
					</button>
				</div>

				<DsTable {...args} ref={tableRef} />
			</div>
		);
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByText(/expanded rows: none/i)).toBeInTheDocument();

		await userEvent.click(canvas.getByRole('button', { name: /expand kevin/i }));
		await expect(
			canvas.getByText((_content, element) => {
				return element?.textContent === 'Expanded rows: 2';
			}),
		).toBeInTheDocument();
		await expect(canvas.getByText(/expanded details for kevin/i)).toBeInTheDocument();

		await userEvent.click(canvas.getByRole('button', { name: /^expand all$/i }));
		const expandButtons = canvas.getAllByRole('button', { name: /chevron_right/i });
		await expect(expandButtons).toHaveLength(4);

		await userEvent.click(canvas.getByRole('button', { name: /collapse all/i }));
		await expect(canvas.getByText(/expanded rows: none/i)).toBeInTheDocument();
		await expect(canvas.queryByText(/expanded details for kevin/i)).not.toBeInTheDocument();

		await userEvent.click(canvas.getByRole('button', { name: /expand first 3 expandable/i }));
		await expect(
			canvas.getByText((_content, element) => {
				return element?.textContent === 'Expanded rows: 2, 3, 4';
			}),
		).toBeInTheDocument();

		await userEvent.click(canvas.getByRole('button', { name: /collapse all/i }));
		await expect(canvas.getByText(/expanded rows: none/i)).toBeInTheDocument();
	},
};
