import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DsButtonV3 } from '../ds-button-v3';
import { DsBulkActions } from './index';
import { bulkActionsPlacements } from './ds-bulk-actions.types';
import styles from './ds-bulk-actions.stories.module.scss';

const meta: Meta<typeof DsBulkActions> = {
	title: 'Components/BulkActions',
	component: DsBulkActions,
	parameters: {
		layout: 'padded',
	},
	args: {
		selectedCount: 3,
		onClearSelection: fn(),
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
	argTypes: {
		placement: { control: 'select', options: bulkActionsPlacements },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsBulkActions>;

/**
 * Static toolbar in normal document flow. The consumer owns placement via layout,
 * `className`, or `style`.
 */
export const Default: Story = {
	render: (args) => <DsBulkActions {...args} />,
};

/**
 * Floating bar anchored to the bottom center of a positioned ancestor — the
 * default integration for tables and trees.
 */
export const Floating: Story = {
	args: {
		placement: 'floating',
	},
	decorators: [
		(Story) => (
			<div className={styles.floatingHost}>
				<Story />
			</div>
		),
	],
};

/**
 * Long action labels truncate with ellipsis; the full label is available in a tooltip on hover.
 */
export const LongActionLabels: Story = {
	args: {
		selectedCount: 2,
		actions: [
			{
				icon: 'alarm',
				label: 'Notify all stakeholders',
				onClick: fn(),
			},
			{
				icon: 'delete_outline',
				label: 'Delete permanently',
				onClick: fn(),
			},
		],
	},
};

/**
 * Individual actions can be disabled while keeping the bar visible.
 */
export const DisabledAction: Story = {
	args: {
		selectedCount: 1,
		actions: [
			{
				icon: 'alarm',
				label: 'Notify',
				onClick: fn(),
			},
			{
				icon: 'delete_outline',
				label: 'Delete',
				disabled: true,
				onClick: fn(),
			},
		],
	},
};

/**
 * Custom action slots accept any React node via the `render` branch of `DsBulkAction`.
 */
export const CustomAction: Story = {
	args: {
		selectedCount: 2,
		actions: [
			{
				icon: 'alarm',
				label: 'Notify',
				onClick: fn(),
			},
			{
				key: 'assign',
				render: () => (
					<DsButtonV3 variant="tertiary" size="small" icon="person_add">
						Assign
					</DsButtonV3>
				),
			},
		],
	},
};

/**
 * Override user-facing strings via `locale` for i18n.
 */
export const Localized: Story = {
	args: {
		selectedCount: 5,
		locale: {
			itemsSelectedLabel: 'Rows picked',
			clearSelectionLabel: 'Dismiss selection',
		},
		actions: [
			{
				icon: 'alarm',
				label: 'Notify',
				onClick: fn(),
			},
		],
	},
};
