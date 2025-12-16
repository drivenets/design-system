import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { DsDropdownMenuLegacy } from './ds-dropdown-menu';
import './ds-dropdown-menu.stories.scss';
import { DsIcon } from '../ds-icon';

const meta: Meta<typeof DsDropdownMenuLegacy> = {
	title: 'Design System/DropdownMenu (Legacy)',
	component: DsDropdownMenuLegacy,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
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
			{ label: 'Edit', icon: 'edit', onClick: () => console.log('Edit clicked') },
			{ label: 'Delete', icon: 'delete', onClick: () => console.log('Delete clicked') },
			{ label: 'Share', icon: 'share', onClick: () => console.log('Share clicked') },
			{
				label: 'Disabled Option',
				icon: 'block',
				disabled: true,
				onClick: () => console.log('Disabled clicked'),
			},
		],
		contentGap: 4,
	},
	render: function Render(args) {
		const [, setClicked] = useState<string>('');

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(args as any).__reset = async () => {
			setClicked('');
			await delay(100);
		};

		return (
			<DsDropdownMenuLegacy {...args}>
				<div className="trigger" role="button">
					<span className="label">Actions</span>
					<DsIcon className="arrow" icon="more_vert" />
				</div>
			</DsDropdownMenuLegacy>
		);
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const reset = (args as any).__reset;

		// Check initial state
		await expect(canvas.getByText('Actions')).toBeInTheDocument();

		// Open dropdown menu
		await userEvent.click(canvas.getByText('Actions'));

		// Check all menu items are present
		await expect(canvas.getByRole('menuitem', { name: /Edit/ })).toBeInTheDocument();
		await expect(canvas.getByRole('menuitem', { name: /Delete/ })).toBeInTheDocument();
		await expect(canvas.getByRole('menuitem', { name: /Share/ })).toBeInTheDocument();
		await expect(canvas.getByRole('menuitem', { name: /Disabled Option/ })).toBeInTheDocument();

		// Check disabled state
		const disabledOption = canvas.getByRole('menuitem', { name: /Disabled Option/ });
		await expect(disabledOption).toHaveAttribute('aria-disabled', 'true');

		// Click an option
		await userEvent.click(canvas.getByRole('menuitem', { name: /Edit/ }));

		// Close dropdown with Escape key
		await userEvent.keyboard('{Escape}');

		// Reset using the wrapper's reset method
		await reset();

		// Open dropdown again
		await userEvent.click(canvas.getByText('Actions'));

		// Check all options are shown again
		await expect(canvas.getByRole('menuitem', { name: /Edit/ })).toBeInTheDocument();
		await expect(canvas.getByRole('menuitem', { name: /Delete/ })).toBeInTheDocument();
		await expect(canvas.getByRole('menuitem', { name: /Share/ })).toBeInTheDocument();
		await expect(canvas.getByRole('menuitem', { name: /Disabled Option/ })).toBeInTheDocument();

		// Close dropdown with Escape key
		await userEvent.keyboard('{Escape}');
	},
};

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
