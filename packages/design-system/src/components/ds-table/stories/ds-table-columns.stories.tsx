import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import type { VisibilityState } from '@tanstack/react-table';
import classnames from 'classnames';
import { DsCheckbox } from '../../ds-checkbox';
import { DsStack } from '../../ds-stack';
import DsTable from '../ds-table';
import styles from './ds-table.stories.module.scss';
import { columns, defaultData, type Person, type Status } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { ProgressInfographic } from './components';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Components/Table/Columns',
	tags: ['visual'],
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
		onRowClick: fn(),
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
				};
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
				};
			}
			return col;
		}),
		data: defaultData,
	},
};

/**
 * Show or hide columns dynamically via the controlled `columnVisibility` /
 * `onColumnVisibilityChange` props — useful for customizable table views or
 * responsive layouts. Toggle a checkbox to add or remove the matching column.
 */
export const ColumnHiding: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
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
			<DsStack direction="column" gap={16}>
				<DsStack direction="row" gap={16} flexWrap="wrap">
					{columnsToToggle.map((column) => (
						<DsCheckbox
							key={column.id}
							label={column.label}
							checked={columnVisibility[column.id]}
							onCheckedChange={() => toggleColumn(column.id)}
						/>
					))}
				</DsStack>

				<DsTable
					{...args}
					columnVisibility={columnVisibility}
					onColumnVisibilityChange={setColumnVisibility}
				/>
			</DsStack>
		);
	},
};

/**
 * The header ends with a tertiary icon-only Columns button. Its popup lists
 * every column with a checkbox (checked columns stay visible), a search field
 * that filters the list, and an "All columns" checkbox that toggles every
 * column at once.
 */
export const ColumnDisplay: Story = {
	args: {
		columnDisplay: true,
	},
};

/**
 * With column groups, the Columns button sits at the end of the group headers
 * row. Each group gets a checkbox that toggles all of its columns and shows a
 * partial state when only some are visible. Columns with `enableHiding: false`
 * are listed as locked.
 */
export const ColumnDisplayWithGroups: Story = {
	args: {
		columnDisplay: true,
		selectable: true,
		columns: [
			{
				id: 'identity',
				header: 'Identity',
				columns: [
					{ accessorKey: 'firstName', header: 'First Name', enableHiding: false },
					{ accessorKey: 'lastName', header: 'Last Name' },
					{ accessorKey: 'age', header: 'Age' },
				],
			},
			{
				id: 'activity',
				header: 'Activity',
				columns: [
					{ accessorKey: 'visits', header: 'Visits' },
					{ accessorKey: 'status', header: 'Status' },
					{ accessorKey: 'progress', header: 'Profile Progress' },
				],
			},
		],
	},
};
