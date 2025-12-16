import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsPanel } from './ds-panel';
import { DsButton } from '../ds-button/';
import { useState } from 'react';
import { expect, userEvent } from 'storybook/test';
import type { DsPanelVariant } from './ds-panel.types';

export default {
	title: 'Design System/Panel',
	component: DsPanel,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DsPanel>;

type Story = StoryObj<typeof DsPanel>;

export const Default: Story = {
	render: function Render({ variant }) {
		const [open, setOpen] = useState(true);

		return (
			<>
				{!open && <DsButton onClick={() => setOpen(true)}>Open Panel</DsButton>}

				<DsPanel open={open} onOpenChange={setOpen} variant={variant}>
					<p>
						This is a panel. It can contain any content you like, such as text, images, or other components.
					</p>

					<p>It is collapsible. Hover it to see the trigger button.</p>

					<DsButton size="small">Primary Action</DsButton>
				</DsPanel>
			</>
		);
	},

	play: async ({ canvas, step, args, initialArgs }) => {
		const panelTrigger = canvas.getByLabelText('Toggle panel');

		const testVariant = async (variant: DsPanelVariant) => {
			args.variant = variant;

			await step(`Close Panel - ${variant}`, async () => {
				await userEvent.click(panelTrigger);

				await expect(canvas.queryByText(/This is a panel/)).not.toBeVisible();
			});

			await step(`Open Panel - ${variant}`, async () => {
				await userEvent.click(canvas.getByText('Open Panel'));

				await expect(canvas.getByText(/This is a panel/)).toBeVisible();
			});

			// Reset state.
			args.variant = initialArgs.variant;
		};

		await testVariant('docked');
		await testVariant('floating');
	},
};
