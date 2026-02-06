import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import DsTable from '../ds-table';
import { columns, defaultData, type Person } from './common/story-data';
import { defaultEmptyState, fullHeightDecorator } from './common/story-decorators';
import { getDataRows } from './common/story-test-helpers';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Design System/Table/Row Actions',
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
		emptyState: defaultEmptyState,
		onRowClick: (row) => console.log('Row clicked:', row),
	},
	decorators: [fullHeightDecorator],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

export const Reorderable: Story = {
	args: {
		data: defaultData.slice(0, 5),
		reorderable: true,
		onOrderChange: (rows) => console.log('Reordered row:', rows),
	},
	play: async ({ canvas }) => {
		await expect(getDataRows(canvas)).toHaveLength(5);
		await expect(canvas.getByRole('columnheader', { name: /order/i })).toBeInTheDocument();
	},
};

const editClickHandler = fn();
const openInNewWindowClickHandler = fn();

export const WithRowActions: Story = {
	args: {
		onRowClick: fn(),
		primaryRowActions: [
			{
				icon: 'edit',
				label: 'Edit',
				onClick: editClickHandler,
			},
			{
				icon: 'open_in_new',
				label: 'Open in New Window',
				disabled: (data) => data.firstName === 'Tanner',
				onClick: openInNewWindowClickHandler,
			},
		],
		secondaryRowActions: [
			{
				icon: 'delete_outline',
				label: 'Delete',
				tooltip: 'Delete this row',
				disabled: (data) => data.status === 'single',
				onClick: fn(),
			},
			{
				icon: 'info',
				label: 'Details',
				tooltip: 'Show details',
				onClick: fn(),
			},
			{
				icon: 'call',
				label: (row) => `Call ${row.firstName}`,
				onClick: fn(),
			},
		],
	},
	play: async ({ canvas }) => {
		const dataRows = getDataRows(canvas);
		await userEvent.hover(dataRows[1] as HTMLElement);

		const row1 = within(dataRows[1] as HTMLElement);
		const editButton = row1.getByRole('button', { name: /^edit$/i });
		await expect(editButton).toBeInTheDocument();

		await userEvent.click(editButton);
		await expect(editClickHandler).toHaveBeenCalled();

		await userEvent.hover(dataRows[0] as HTMLElement);

		const row0 = within(dataRows[0] as HTMLElement);
		const openButton = row0.getByRole('button', { name: /open in new window/i });
		await expect(openButton).toHaveAttribute('aria-disabled', 'true');
	},
};

const notifyClickHandler = fn();

export const WithBulkActions: Story = {
	args: {
		selectable: true,
		actions: [
			{
				icon: 'alarm',
				label: 'Notify',
				onClick: notifyClickHandler,
			},
			{
				icon: 'folder_open',
				label: 'Folder',
				onClick: fn(),
			},
			{
				icon: 'delete_outline',
				label: 'Delete',
				onClick: fn(),
			},
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const checkboxes = canvas.getAllByRole('checkbox');
		await userEvent.click(checkboxes[1] as HTMLElement);
		await userEvent.click(checkboxes[2] as HTMLElement);

		await expect(canvas.getByText(/items selected/i)).toBeInTheDocument();
		await expect(canvas.getByText('2')).toBeInTheDocument();

		await userEvent.click(canvas.getByText(/notify/i));
		await expect(notifyClickHandler).toHaveBeenCalled();
	},
};
