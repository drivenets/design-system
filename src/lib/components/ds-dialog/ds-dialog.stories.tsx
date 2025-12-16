import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent, waitFor, within } from 'storybook/test';
import { DsIcon } from '../ds-icon';
import { DsButton } from '../ds-button';
import DsDialog from '../ds-dialog/ds-dialog';
import styles from './ds-dialog.stories.module.scss';

const meta: Meta<typeof DsDialog> = {
	title: 'Design System/Dialog',
	component: DsDialog,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		open: {
			control: 'boolean',
			description: 'Controls whether the dialog is open',
		},
		onOpenChange: {
			action: 'onOpenChange',
			description: 'Function called when dialog open state changes',
		},
		title: {
			control: 'text',
			description: 'Title of the dialog',
		},
		description: {
			control: 'text',
			description: 'Description text for the dialog',
		},
		hideTitle: {
			control: 'boolean',
			description: 'Whether to hide the title visually',
		},
		hideDescription: {
			control: 'boolean',
			description: 'Whether to hide the description visually',
		},
		modal: {
			control: 'boolean',
			description: 'Whether the dialog should be modal',
		},
		customPosition: {
			control: 'object',
			description:
				'Custom position for the dialog in pixels relative to the viewport. Expects {top: number, left: number}',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsDialog>;

export const Centered: Story = {
	render: function Render(args) {
		const [open, setOpen] = React.useState(false);
		return (
			<>
				<DsButton onClick={() => setOpen(true)}>Open Dialog</DsButton>
				<DsDialog
					{...args}
					open={open}
					onOpenChange={setOpen}
					title="Centered Dialog"
					description="This dialog appears in the center of the screen"
				>
					<div className={styles.dialogContent}>This is a centered dialog example</div>
				</DsDialog>
			</>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByText('Open Dialog');
		await userEvent.click(trigger);
		// Verify dialog is opened
		await waitFor(() => {
			expect(screen.getByText(/Centered Dialog/)).toBeTruthy();
		});
		// Close dialog with Escape key
		await userEvent.keyboard('{Escape}');
		// Verify dialog is closed
		await waitFor(() => {
			expect(screen.queryByText(/Centered Dialog/)).toBeNull();
		});
	},
};

export const CustomPosition: Story = {
	render: function Render(args) {
		const [open, setOpen] = React.useState(false);

		return (
			<>
				<DsIcon className={styles.menuIcon} icon="menu" size="large" onClick={() => setOpen(true)} />
				<DsDialog
					{...args}
					open={open}
					onOpenChange={setOpen}
					title="Custom Position Dialog"
					description="This dialog appears relative to the menu icon"
					customPosition={{ top: 60, left: 20 }}
				>
					<div className={styles.dialogContent}>This is a custom positioned dialog example</div>
				</DsDialog>
			</>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByText(/menu/i);
		await userEvent.click(trigger);
		// Verify dialog is opened
		await waitFor(() => {
			expect(screen.getByText(/Custom Position Dialog/)).toBeTruthy();
		});
		// Close dialog with Escape key
		await userEvent.keyboard('{Escape}');
		// Verify dialog is closed
		await waitFor(() => {
			expect(screen.queryByText(/Custom Position Dialog/)).toBeNull();
		});
	},
};
