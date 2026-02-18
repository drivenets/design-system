import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';
import DsTable from '../ds-table';
import { columns, defaultData, type Person } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { getDataRows } from './common/story-test-helpers';
import { TableEmptyState } from './components';
import styles from './ds-table.stories.module.scss';
import type { Action } from '../ds-table.types';

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
		emptyState: <TableEmptyState />,
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
		onOrderChange: fn(),
	},
	play: async ({ canvas, args }) => {
		await expect(getDataRows(canvas)).toHaveLength(5);
		await expect(canvas.getByRole('columnheader', { name: /order/i })).toBeInTheDocument();

		const dataRows = getDataRows(canvas);

		const firstRowInitial = within(dataRows[0] as HTMLElement).getByText('Tanner');
		const secondRowInitial = within(dataRows[1] as HTMLElement).getByText('Kevin');
		await expect(firstRowInitial).toBeInTheDocument();
		await expect(secondRowInitial).toBeInTheDocument();

		// Find drag handles - they are icons in the order column
		const firstRowHandle = within(dataRows[0] as HTMLElement).getByText('arrow_downward');
		const secondRowHandle = within(dataRows[1] as HTMLElement).getByText('arrow_downward');

		const getHandleCoords = (handle: HTMLElement) => {
			const rect = handle.getBoundingClientRect();
			return {
				x: rect.left,
				y: rect.top,
			};
		};

		// Perform drag-and-drop to swap first and second row
		await userEvent.pointer([
			{ keys: '[MouseLeft>]', target: firstRowHandle, coords: getHandleCoords(firstRowHandle) },
			{ coords: getHandleCoords(secondRowHandle) },
			{ keys: '[/MouseLeft]' },
		]);

		await expect(args.onOrderChange).toHaveBeenCalled();

		const dataRowsAfter = getDataRows(canvas);

		// First row should now contain Kevin (originally second row)
		await expect(within(dataRowsAfter[0] as HTMLElement).getByText('Kevin')).toBeInTheDocument();

		// Second row should now contain Tanner (originally first row)
		await expect(within(dataRowsAfter[1] as HTMLElement).getByText('Tanner')).toBeInTheDocument();
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
				className: styles.destructiveAction,
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

export const WithBulkActions: Story = {
	args: {
		selectable: true,
		actions: [
			{
				icon: 'alarm',
				label: 'Notify',
				onClick: fn(),
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
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		const checkboxes = canvas.getAllByRole('checkbox');
		await userEvent.click(checkboxes[1] as HTMLElement);
		await userEvent.click(checkboxes[2] as HTMLElement);

		await expect(canvas.getByText(/items selected/i)).toBeInTheDocument();
		await expect(canvas.getByText('2')).toBeInTheDocument();

		const testActionClick = async (action: Action<Person>) => {
			await userEvent.click(canvas.getByText(action.label));
			await expect(action.onClick).toHaveBeenCalled();
		};

		for (const action of args.actions ?? []) {
			await testActionClick(action);
		}

		// Deselect all rows to verify panel disappears
		await userEvent.click(checkboxes[1] as HTMLElement);
		await userEvent.click(checkboxes[2] as HTMLElement);

		await waitFor(
			() => {
				return expect(canvas.queryByText(/items selected/i)).not.toBeInTheDocument();
			},
			{ timeout: 500 },
		);
	},
};
