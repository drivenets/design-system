import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import DsIcon from '../../ds-icon/ds-icon';
import DsTable from '../ds-table';
import DsButton from '../../ds-button/ds-button';
import { FilterModal } from '../components/filter-modal';
import { ChipFilterPanel } from '../../../../widgets';
import { useTableFilters } from '../filters/hooks/use-table-filters';
import { Workflow, workflowFilters } from './filters-panel/workflow-filters.config';
import styles from '../ds-table.stories.module.scss';

export enum WorkflowCategory {
	NetworkBuilt = 'Network Built',
	OpticalOptimization = 'Optical Optimization',
	ServiceProvisioning = 'Service Provisioning',
}

const sampleUsers = [
	{ name: 'Maren Levin', colorIndex: 0 },
	{ name: 'Emery Franci', colorIndex: 1 },
	{ name: 'Ryan Francy', colorIndex: 2 },
	{ name: 'Roger Dias', colorIndex: 0 },
	{ name: 'Lindsey Westervelt', colorIndex: 1 },
	{ name: 'Neil Sims', colorIndex: 2 },
];

const columns: ColumnDef<Workflow>[] = [
	{
		id: 'status',
		accessorKey: 'status',
		header: 'Status',
		cell: (info) => info.getValue(),
	},
	{
		id: 'name',
		accessorKey: 'name',
		header: 'Name',
		cell: (info) => info.getValue(),
	},
	{
		id: 'runningCompleted',
		accessorKey: 'runningCompleted',
		header: 'Running/completed',
		cell: (info) => {
			const value = info.getValue() as { running: number; completed: number };
			return `${value.running}/${value.completed}`;
		},
	},
	{
		id: 'category',
		accessorKey: 'category',
		header: 'Category',
		cell: (info) => info.getValue(),
	},
	{
		id: 'version',
		accessorKey: 'version',
		header: 'Version',
		cell: (info) => info.getValue(),
	},
	{
		id: 'lastEdited',
		accessorKey: 'lastEdited',
		header: 'Last edited',
	},
];

const defaultData: Workflow[] = [
	{
		id: '1',
		name: 'Scheduled Config Backup',
		status: 'active',
		runningCompleted: { running: 3, completed: 41 },
		category: WorkflowCategory.NetworkBuilt,
		version: '000.0003',
		lastEdited: {
			editor: sampleUsers[0].name,
			timestamp: '23-05-2024 04:47 PM',
			colorIndex: sampleUsers[0].colorIndex,
		},
	},
	{
		id: '2',
		name: 'Network Provisioning',
		status: 'running',
		runningCompleted: { running: 8, completed: 14 },
		category: WorkflowCategory.NetworkBuilt,
		version: '000.0002',
		lastEdited: {
			editor: sampleUsers[1].name,
			timestamp: '23-05-2024 03:32 PM',
			colorIndex: sampleUsers[1].colorIndex,
		},
	},
	{
		id: '3',
		name: 'Service Provisioning',
		status: 'inactive',
		runningCompleted: { running: 0, completed: 243 },
		category: WorkflowCategory.NetworkBuilt,
		version: '000.0033',
		lastEdited: {
			editor: sampleUsers[2].name,
			timestamp: '22-05-2024 11:15 AM',
			colorIndex: sampleUsers[2].colorIndex,
		},
	},
	{
		id: '4',
		name: 'Assign IPv4 Address',
		status: 'active',
		runningCompleted: { running: 14, completed: 123 },
		category: WorkflowCategory.NetworkBuilt,
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[3].name,
			timestamp: '23-05-2024 02:20 PM',
			colorIndex: sampleUsers[3].colorIndex,
		},
	},
	{
		id: '5',
		name: 'Shutdown Decommissioned Device',
		status: 'active',
		runningCompleted: { running: 45, completed: 45 },
		category: WorkflowCategory.OpticalOptimization,
		version: '000.0022',
		lastEdited: {
			editor: sampleUsers[4].name,
			timestamp: '23-05-2024 01:05 PM',
			colorIndex: sampleUsers[4].colorIndex,
		},
	},
	{
		id: '6',
		name: 'Optical Power Level Calibration',
		status: 'draft',
		runningCompleted: { running: 99, completed: 23 },
		category: WorkflowCategory.OpticalOptimization,
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[5].name,
			timestamp: '21-05-2024 09:30 AM',
			colorIndex: sampleUsers[5].colorIndex,
		},
	},
	{
		id: '7',
		name: 'Deploy Layer 2 EVPN Instance',
		status: 'pending',
		runningCompleted: { running: 49, completed: 100 },
		category: WorkflowCategory.OpticalOptimization,
		version: '000.0012',
		lastEdited: {
			editor: sampleUsers[0].name,
			timestamp: '23-05-2024 12:45 PM',
			colorIndex: sampleUsers[0].colorIndex,
		},
	},
	{
		id: '8',
		name: 'Initiate Scheduled Firmware Upgrade',
		status: 'active',
		runningCompleted: { running: 25, completed: 75 },
		category: WorkflowCategory.ServiceProvisioning,
		version: '000.0010',
		lastEdited: {
			editor: sampleUsers[1].name,
			timestamp: '22-05-2024 05:10 PM',
			colorIndex: sampleUsers[1].colorIndex,
		},
	},
	{
		id: '9',
		name: 'Enable High Availability Mode',
		status: 'running',
		runningCompleted: { running: 77, completed: 88 },
		category: WorkflowCategory.ServiceProvisioning,
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[2].name,
			timestamp: '23-05-2024 10:22 AM',
			colorIndex: sampleUsers[2].colorIndex,
		},
	},
	{
		id: '10',
		name: 'Audit Access Control Policies',
		status: 'active',
		runningCompleted: { running: 65, completed: 200 },
		category: WorkflowCategory.ServiceProvisioning,
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[3].name,
			timestamp: '20-05-2024 03:15 PM',
			colorIndex: sampleUsers[3].colorIndex,
		},
	},
	{
		id: '11',
		name: 'Synchronize NTP Across Network Nodes',
		status: 'warning',
		runningCompleted: { running: 49, completed: 142 },
		category: WorkflowCategory.ServiceProvisioning,
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[4].name,
			timestamp: '19-05-2024 08:40 AM',
			colorIndex: sampleUsers[4].colorIndex,
		},
	},
	{
		id: '12',
		name: 'Validate Optical Link Integrity',
		status: 'failed',
		runningCompleted: { running: 90, completed: 300 },
		category: WorkflowCategory.NetworkBuilt,
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[5].name,
			timestamp: '03-05-2024 04:47 PM',
			colorIndex: sampleUsers[5].colorIndex,
		},
	},
];

const meta: Meta<typeof DsTable<Workflow, unknown>> = {
	title: 'Design System/Table',
	component: DsTable,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	args: {
		columns: columns,
		data: defaultData,
		stickyHeader: true,
		bordered: true,
		fullWidth: true,
		highlightOnHover: true,
		expandable: false,
		emptyState: <div>No data available</div>,
		onRowClick: (row) => console.log('Row clicked:', row),
	},
	decorators: [
		(Story) => (
			<div className={styles.storyPadding}>
				<style>
					{`
            #storybook-root, html, body { height: 100%; }
          `}
				</style>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof DsTable<Workflow, unknown>>;

export const FiltersPanel: Story = {
	name: 'With Filters Panel',
	render: function Render(args) {
		const [isOpen, setIsOpen] = useState(false);

		const { columnFilters, filterChips, filterNavItems, enhancedColumns, handlers, renderFilterContent } =
			useTableFilters(workflowFilters, args.columns);

		const handleApply = () => {
			handlers.applyFilters();
			setIsOpen(false);
		};

		const handleClearAll = () => {
			handlers.clearAll();
			setIsOpen(false);
		};

		return (
			<div className={styles.tableFilterContainer}>
				<div className={styles.toolbar}>
					<DsButton design="v1.2" buttonType="secondary" onClick={() => setIsOpen(true)}>
						<DsIcon size="tiny" icon="filter_list" />
					</DsButton>
				</div>
				{filterChips.length > 0 && (
					<ChipFilterPanel
						filters={filterChips}
						onClearAll={handleClearAll}
						onFilterDelete={handlers.deleteChip}
					/>
				)}
				<DsTable {...args} columns={enhancedColumns} columnFilters={columnFilters} />
				<FilterModal
					open={isOpen}
					onOpenChange={setIsOpen}
					columns={8}
					filterNavItems={filterNavItems}
					onApply={handleApply}
					onClearAll={handleClearAll}
				>
					{(selectedFilter) => renderFilterContent(selectedFilter)}
				</FilterModal>
			</div>
		);
	},
	args: {},
};
