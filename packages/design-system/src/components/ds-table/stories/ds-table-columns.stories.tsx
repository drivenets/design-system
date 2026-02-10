import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { useState } from 'react';
import type { ColumnDef, VisibilityState } from '@tanstack/react-table';
import classnames from 'classnames';
import { DsCheckbox } from '../../ds-checkbox';
import DsTable from '../ds-table';
import styles from './ds-table.stories.module.scss';
import { columns, defaultData, type Person, type Status } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { getDataRows } from './common/story-test-helpers';
import { TableEmptyState, ProgressInfographic } from './components';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Design System/Table/Columns',
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
		onRowClick: (row) => console.log('Row clicked:', row),
	},
	decorators: [fullHeightDecorator],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

export const WithProgressInfographic: Story = {
	name: 'Progress as Infographic',
	args: {
		columns: columns.map((col) => {
			if ('accessorKey' in col && col.accessorKey === 'progress') {
				return {
					...col,
					header: 'Profile Progress',
					cell: (info) => <ProgressInfographic value={info.getValue() as number} />,
				} as ColumnDef<Person>;
			} else if ('accessorKey' in col && col.accessorKey === 'status') {
				return {
					...col,
					header: 'Status',
					cell: (info) => (
						<span
							className={classnames(styles.statusCell, styles[`statusCell--${info.getValue() as Status}`])}
						>
							{info.getValue() as string}
						</span>
					),
				} as ColumnDef<Person>;
			}
			return col;
		}),
		data: defaultData,
	},
	play: async ({ canvas }) => {
		await expect(getDataRows(canvas)).toHaveLength(15);
		await expect(canvas.getByText('75%')).toBeInTheDocument();
		await expect(canvas.getAllByText('single').length).toBeGreaterThan(0);
	},
};

export const ColumnHiding: Story = {
	render: function Render(args) {
		const columnsToToggle = [
			{ id: 'age', label: 'Age' },
			{ id: 'visits', label: 'Visits' },
			{ id: 'status', label: 'Status' },
			{ id: 'progress', label: 'Profile Progress' },
		];
		const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
			age: true,
			visits: true,
			status: true,
			progress: true,
		});

		const toggleColumn = (columnId: string) => {
			setColumnVisibility((prev) => ({
				...prev,
				[columnId]: !prev[columnId],
			}));
		};

		return (
			<div>
				<div className={styles.programmaticSelectionDemo}>
					<h4 className={styles.programmaticSelectionDemo__title}>Column Hiding Demo</h4>
					<p className={styles.programmaticSelectionDemo__description}>
						Use the checkboxes below to show or hide specific columns dynamically. This is useful for
						customizable table views or responsive layouts.
					</p>
				</div>

				<div className={styles.programmaticSelectionControls}>
					{columnsToToggle.map((column) => (
						<DsCheckbox
							key={column.id}
							label={column.label}
							checked={columnVisibility[column.id]}
							onCheckedChange={() => toggleColumn(column.id)}
						/>
					))}
				</div>

				<DsTable
					{...args}
					columnVisibility={columnVisibility}
					onColumnVisibilityChange={setColumnVisibility}
				/>
			</div>
		);
	},
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('columnheader', { name: /^age$/i })).toBeInTheDocument();
		await expect(canvas.getByRole('columnheader', { name: /visits/i })).toBeInTheDocument();

		const ageCheckbox = canvas.getByRole('checkbox', { name: /^age$/i });
		await userEvent.click(ageCheckbox);

		await expect(canvas.queryByRole('columnheader', { name: /^age$/i })).not.toBeInTheDocument();

		await expect(canvas.getByRole('columnheader', { name: /first name/i })).toBeInTheDocument();
		await expect(canvas.getByRole('columnheader', { name: /visits/i })).toBeInTheDocument();

		await userEvent.click(ageCheckbox);
		await expect(canvas.getByRole('columnheader', { name: /^age$/i })).toBeInTheDocument();
	},
};
