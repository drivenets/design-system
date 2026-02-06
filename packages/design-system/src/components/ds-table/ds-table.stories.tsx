import type { Meta, StoryObj } from '@storybook/react-vite';
import DsTable from './ds-table';
import styles from './ds-table.stories.module.scss';
import { columns, defaultData, type Person } from './stories/common/story-data';
import { defaultEmptyState, fullHeightDecorator } from './stories/common/story-decorators';

// --- Storybook Meta ---
const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Design System/Table',
	component: DsTable,
	parameters: {
		layout: 'fullscreen', // Use fullscreen for tables usually
	},
	tags: ['autodocs'],
	argTypes: {
		// Define argTypes based on DsTable props if needed for controls
		// Example:
		// zebra: { control: 'boolean' },
		// bordered: { control: 'boolean' },
	},
	args: {
		// Default args for all stories
		columns,
		data: defaultData,
		stickyHeader: true,
		bordered: true,
		fullWidth: true,
		expandable: false,
		emptyState: defaultEmptyState,
		onRowClick: (row) => console.log('Row clicked:', row),
	},
	decorators: [fullHeightDecorator],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

// --- Stories ---

export const Default: Story = {
	args: {
		// Override default args here if needed
	},
};

export const Sortable: Story = {
	args: {
		// Sorting is enabled by default based on component code (getSortedRowModel)
		// No specific args needed unless you want to set initial sort state
	},
};

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
};

export const EmptyState: Story = {
	args: {
		data: [], // Provide empty data array
	},
};

export const EmptyStateVirtualized: Story = {
	args: {
		virtualized: true,
		data: [], // Provide empty data array
	},
};

export const NoBorder: Story = {
	args: {
		bordered: false,
	},
};
