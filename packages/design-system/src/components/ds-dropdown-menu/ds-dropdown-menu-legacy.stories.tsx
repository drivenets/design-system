import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DsDropdownMenuLegacy } from './ds-dropdown-menu';
import './ds-dropdown-menu.stories.scss';
import { DsIcon } from '../ds-icon';

const meta: Meta<typeof DsDropdownMenuLegacy> = {
	title: 'Components/DropdownMenuLegacy (Deprecated)',
	component: DsDropdownMenuLegacy,
	parameters: {
		layout: 'centered',
	},
	tags: ['deprecated'],
	argTypes: {
		children: {
			control: 'text',
			description: 'Content to display inside the component',
		},
		contentGap: {
			control: 'number',
			description: 'The gap between the trigger and dropdown content in pixels',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsDropdownMenuLegacy>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Dropdown menu with a custom trigger styled to match the design. The menu items can include icons and can be disabled.',
			},
		},
	},
	args: {
		options: [
			{ label: 'Edit', icon: 'edit', onClick: fn() },
			{ label: 'Delete', icon: 'delete', onClick: fn() },
			{ label: 'Share', icon: 'share', onClick: fn() },
			{
				label: 'Disabled Option',
				icon: 'block',
				disabled: true,
				onClick: fn(),
			},
		],
		contentGap: 4,
	},
	render: function Render(args) {
		return (
			<DsDropdownMenuLegacy {...args}>
				<div className="trigger" role="button">
					<span className="label">Actions</span>
					<DsIcon className="arrow" icon="more_vert" />
				</div>
			</DsDropdownMenuLegacy>
		);
	},
};

/**
 * `options` items work without icons — pass just `label` and `onClick` for a
 * compact, text-only action list. `contentGap` sets the space between the trigger
 * and the menu.
 */
export const WithoutIcons: Story = {
	args: {
		options: [
			{ label: 'Rename', onClick: fn() },
			{ label: 'Duplicate', onClick: fn() },
			{ label: 'Archive', onClick: fn() },
		],
		contentGap: 8,
	},
	render: function Render(args) {
		return (
			<DsDropdownMenuLegacy {...args}>
				<div className="trigger" role="button">
					<span className="label">Options</span>
					<DsIcon className="arrow" icon="expand_more" />
				</div>
			</DsDropdownMenuLegacy>
		);
	},
};
