import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { useRef, useState } from 'react';
import DsTable from '../ds-table';
import type { DsTableApi } from '../ds-table.types';
import { DsStack } from '../../ds-stack';
import { DsButtonV3 } from '../../ds-button-v3';
import { DsTypography } from '../../ds-typography';
import { columns, defaultData, type Person } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { TableEmptyState } from './components';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Components/Table/Expansion',
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
			<DsStack direction="column" gap={8}>
				<DsStack direction="column" gap={4}>
					<DsTypography variant="heading4">Expanded Details for {row.firstName}</DsTypography>
					<DsTypography variant="body-sm-reg">ID: {row.id}</DsTypography>
					<DsTypography variant="body-sm-reg">
						Full Name: {row.firstName} {row.lastName}
					</DsTypography>
					<DsTypography variant="body-sm-reg">Status: {row.status}</DsTypography>
				</DsStack>

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
			</DsStack>
		),
	},
};

/**
 * The expander utility column is 36px by default. Pass a pixel width when the
 * chevron column needs more (or less) room. It is not user-resizable.
 */
export const CustomExpanderColumnWidth: Story = {
	args: {
		data: defaultData.slice(0, 5),
		expandable: true,
		expandableColumnWidth: 48,
		renderExpandedRow: (row) => (
			<DsStack direction="column" gap={4}>
				<DsTypography variant="body-sm-reg">Details for {row.firstName}</DsTypography>
			</DsStack>
		),
	},
};

/**
 * Drive expansion imperatively through the table ref. `expandRow`, `expandRows`,
 * `expandAllRows`, and `collapseAllRows` on `DsTableApi` let a parent expand or
 * collapse rows from outside the table.
 */
export const ProgrammaticExpansion: Story = {
	args: {
		data: defaultData.slice(0, 5),
		expandable: (row) => row.firstName !== 'Tanner',
		renderExpandedRow: (row) => (
			<DsStack direction="column" gap={4}>
				<DsTypography variant="heading4">Expanded Details for {row.firstName}</DsTypography>
				<DsTypography variant="body-sm-reg">ID: {row.id}</DsTypography>
				<DsTypography variant="body-sm-reg">
					Full Name: {row.firstName} {row.lastName}
				</DsTypography>
				<DsTypography variant="body-sm-reg">Status: {row.status}</DsTypography>
			</DsStack>
		),
	},
	parameters: {
		docs: { source: { type: 'code' } },
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
			<DsStack direction="column" gap={16}>
				<DsTypography variant="body-sm-reg" color="secondary">
					Expanded rows: {expandedRows.length > 0 ? expandedRows.join(', ') : 'None'}
				</DsTypography>

				<DsStack direction="row" gap={8} flexWrap="wrap">
					<DsButtonV3 variant="secondary" size="small" onClick={() => expandRow('2')}>
						Expand Kevin
					</DsButtonV3>
					<DsButtonV3 variant="secondary" size="small" onClick={() => expandRow('3')}>
						Expand John
					</DsButtonV3>
					<DsButtonV3 variant="secondary" size="small" onClick={() => expandRow('4')}>
						Expand Jane
					</DsButtonV3>
					<DsButtonV3 variant="secondary" size="small" onClick={expandAllRows}>
						Expand All
					</DsButtonV3>
					<DsButtonV3 variant="secondary" size="small" onClick={collapseAllRows}>
						Collapse All
					</DsButtonV3>
					<DsButtonV3 variant="secondary" size="small" onClick={expandFirstThreeRows}>
						Expand First 3 Expandable
					</DsButtonV3>
				</DsStack>

				<DsTable {...args} ref={tableRef} />
			</DsStack>
		);
	},
};
