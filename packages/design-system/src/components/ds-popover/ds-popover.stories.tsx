import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent, within } from 'storybook/test';
import { DsButton } from '../ds-button';
import { DsIcon } from '../ds-icon';
import { Close as PopoverClose } from '@radix-ui/react-popover';
import DsPopover from './ds-popover';
import './ds-popover.stories.scss';

const meta: Meta<typeof DsPopover> = {
	title: 'Design System/Popover',
	component: DsPopover,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		trigger: {
			control: 'object',
			description: 'Element that triggers the popover',
		},
		children: {
			control: 'object',
			description: 'Content displayed within the popover',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes for the popover content',
		},
		align: {
			control: {
				type: 'select',
				options: ['start', 'center', 'end'],
			},
			description: 'Alignment of the popover relative to the trigger',
			table: {
				defaultValue: {
					summary: 'center',
				},
			},
		},
		side: {
			control: {
				type: 'select',
				options: ['top', 'right', 'bottom', 'left'],
			},
			description: 'Preferred side of the popover relative to the trigger',
			table: {
				defaultValue: {
					summary: 'top',
				},
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsPopover>;

export const Default: Story = {
	args: {
		trigger: (
			<DsButton>
				<DsIcon icon="info" /> Open Popover
			</DsButton>
		),
		children: (
			<div>
				<strong>ID:</strong> NSVLOKBWOEW, Dallas, USA
				<p>Facility Types: Tier 1, Tier 2</p>
				<p>Devices: 11, 2898</p>
				<div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
					<PopoverClose asChild>
						<DsIcon className="action-icon" icon="fullscreen" />
					</PopoverClose>
					<PopoverClose asChild>
						<DsIcon className="action-icon" icon="view_list" />
					</PopoverClose>
					<PopoverClose asChild>
						<DsIcon className="action-icon" icon="star" />
					</PopoverClose>
				</div>
			</div>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Click the trigger button to open the popover
		const triggerButton = await canvas.findByText(/open popover/i);
		await userEvent.click(triggerButton);

		// Verify that the popover content is visible
		await expect(await screen.findByText(/ID:/i)).toBeVisible();

		// Click outside the popover to close it
		await userEvent.click(document.body);
		await expect(screen.queryByText(/ID:/i)).not.toBeInTheDocument();

		// Reopen the popover
		await userEvent.click(triggerButton);
		await expect(await screen.findByText(/ID:/i)).toBeVisible();

		// Click on the 'Fullscreen' action icon to close the popover
		const fullscreenButton = await screen.findByText(/fullscreen/i);
		await userEvent.click(fullscreenButton);
		await expect(screen.queryByText(/ID:/i)).not.toBeInTheDocument();
	},
};
