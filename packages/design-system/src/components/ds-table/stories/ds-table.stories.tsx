import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent } from 'storybook/test';
import DsTable from '../ds-table';
import { columns, defaultData, type Person } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { getDataRows } from './common/story-test-helpers';
import { TableEmptyState } from './components';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Design System/Table',
	component: DsTable,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
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

export const Default: Story = {
	play: async ({ args, canvas }) => {
		await expect(getDataRows(canvas)).toHaveLength(15);

		await expect(canvas.getByRole('columnheader', { name: /first name/i })).toBeInTheDocument();
		await expect(canvas.getByRole('columnheader', { name: /last name/i })).toBeInTheDocument();
		await expect(canvas.getByRole('columnheader', { name: /^age$/i })).toBeInTheDocument();
		await expect(canvas.getByRole('columnheader', { name: /visits/i })).toBeInTheDocument();
		await expect(canvas.getByRole('columnheader', { name: /status/i })).toBeInTheDocument();
		await expect(canvas.getByRole('columnheader', { name: /profile progress/i })).toBeInTheDocument();

		const firstDataRow = getDataRows(canvas)[0] as HTMLElement;
		await userEvent.click(firstDataRow);
		await expect(args.onRowClick).toHaveBeenCalled();
	},
};

export const Sortable: Story = {
	play: async ({ canvas }) => {
		const firstNameHeader = canvas.getByRole('columnheader', { name: /first name/i });
		await userEvent.click(firstNameHeader);

		const rowsAfterAsc = getDataRows(canvas);
		await expect(rowsAfterAsc[0]).toHaveTextContent('Daniel');

		await userEvent.click(firstNameHeader);

		const rowsAfterDesc = getDataRows(canvas);
		await expect(rowsAfterDesc[0]).toHaveTextContent('Tanner');
	},
};

export const EmptyState: Story = {
	args: {
		data: [],
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByText(/no matching records found/i)).toBeInTheDocument();
	},
};

export const NoBorder: Story = {
	args: {
		bordered: false,
	},
};
