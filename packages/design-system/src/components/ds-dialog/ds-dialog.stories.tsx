import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsButton } from '../ds-button';
import { DsDialog } from './index';

const meta: Meta<typeof DsDialog> = {
	title: 'Components/Dialog',
	component: DsDialog,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		open: {
			control: 'boolean',
		},
		title: {
			control: 'text',
		},
		description: {
			control: 'text',
		},
		hideTitle: {
			control: 'boolean',
		},
		hideDescription: {
			control: 'boolean',
		},
		modal: {
			control: 'boolean',
		},
		customPosition: {
			control: 'object',
		},
		className: { table: { disable: true } },
		anchorRef: { table: { disable: true } },
		onOpenChange: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsDialog>;

/**
 * Default modal dialog centered on the screen with an overlay backdrop. Use when
 * you need to focus attention on a short task or confirmation.
 */
export const Default: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	args: {
		title: 'Confirm action',
		description: 'Review the details before continuing.',
	},
	render: function Render(args) {
		const [open, setOpen] = useState(false);

		return (
			<>
				<DsButton onClick={() => setOpen(true)}>Open Dialog</DsButton>
				<DsDialog {...args} open={open} onOpenChange={setOpen}>
					<p>Dialog body content goes here.</p>
				</DsDialog>
			</>
		);
	},
};

/**
 * Dialog placed at fixed viewport coordinates instead of centered. Pass pixel
 * `top` and `left` values relative to the viewport — not relative to a trigger.
 */
export const CustomPosition: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	args: {
		title: 'Fixed position panel',
		description: 'This dialog is positioned at fixed viewport coordinates.',
		customPosition: { top: 60, left: 20 },
	},
	render: function Render(args) {
		const [open, setOpen] = useState(false);

		return (
			<>
				<DsButton onClick={() => setOpen(true)}>Open at fixed position</DsButton>
				<DsDialog {...args} open={open} onOpenChange={setOpen}>
					<p>Content appears at the configured top and left offsets.</p>
				</DsDialog>
			</>
		);
	},
};

/**
 * Positions the dialog below the trigger element using `anchorRef`. Prefer this
 * over `customPosition` when the panel should follow a specific button or control.
 */
export const AnchoredToTrigger: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	args: {
		title: 'Menu panel',
		description: 'Options related to the menu trigger.',
	},
	render: function Render(args) {
		const [open, setOpen] = useState(false);
		const anchorRef = useRef<HTMLButtonElement>(null);

		return (
			<>
				<button type="button" ref={anchorRef} onClick={() => setOpen(true)}>
					Open menu
				</button>
				<DsDialog {...args} anchorRef={anchorRef} open={open} onOpenChange={setOpen}>
					<p>Panel content anchored below the trigger.</p>
				</DsDialog>
			</>
		);
	},
};

/**
 * Non-modal dialog without an overlay backdrop. The page behind remains
 * interactive while the dialog is open.
 */
export const NonModal: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	args: {
		title: 'Non-modal panel',
		description: 'This dialog has no overlay backdrop.',
		modal: false,
	},
	render: function Render(args) {
		const [open, setOpen] = useState(false);

		return (
			<>
				<DsButton onClick={() => setOpen(true)}>Open Dialog</DsButton>
				<DsDialog {...args} open={open} onOpenChange={setOpen}>
					<p>The page behind stays interactive while this panel is open.</p>
				</DsDialog>
			</>
		);
	},
};

/**
 * Visually hides the title and description while keeping them available to screen
 * readers. Use when the dialog content already provides a visible heading.
 */
export const HiddenAccessibleLabels: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	args: {
		title: 'Settings',
		description: 'Adjust your preferences.',
		hideTitle: true,
		hideDescription: true,
	},
	render: function Render(args) {
		const [open, setOpen] = useState(false);

		return (
			<>
				<DsButton onClick={() => setOpen(true)}>Open settings</DsButton>
				<DsDialog {...args} open={open} onOpenChange={setOpen}>
					<h2>Settings</h2>
					<p>Title and description are hidden visually but announced to assistive tech.</p>
				</DsDialog>
			</>
		);
	},
};
