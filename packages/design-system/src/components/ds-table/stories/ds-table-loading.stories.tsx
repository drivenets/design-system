import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ColumnDef } from '@tanstack/react-table';
import DsTable from '../ds-table';
import { DsSkeleton } from '../../ds-skeleton';
import { columns, defaultData, type Person } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { TableEmptyState } from './components';

const loadingColumns: ColumnDef<Person>[] = columns.map((column, index) =>
	index === 0 ? Object.assign({}, column, { loadingCell: () => <DsSkeleton.Circle size="sm" /> }) : column,
);

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Components/Table/Loading',
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
		emptyState: <TableEmptyState />,
	},
	decorators: [fullHeightDecorator],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

/**
 * Set `loading` to render skeleton rows. Each cell falls back to a default
 * skeleton bar sized to its column.
 */
export const Loading: Story = {
	args: {
		loading: true,
	},
};

/**
 * Provide a per-column `loadingCell` to control the skeleton shown while
 * `loading` is true — here the first column renders a circular skeleton instead
 * of the default bar.
 */
export const CustomLoadingCell: Story = {
	args: {
		loading: true,
		columns: loadingColumns,
	},
};
