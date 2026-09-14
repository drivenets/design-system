import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsModal from './ds-modal';
import { DsButtonV3 } from '../ds-button-v3';
import { DsTypography } from '../ds-typography';
import { DsStack } from '../ds-stack';
import { DsFormControl } from '../ds-form-control';
import { DsIcon } from '../ds-icon';

const meta: Meta<typeof DsModal> = {
	title: 'Components/Modal',
	component: DsModal,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		columns: {
			control: 'select',
			options: Array.from({ length: 12 }, (_, index) => index + 1),
			description: 'Number of grid columns for modal width',
		},
		dividers: {
			control: 'boolean',
			description: 'Show full-width dividers between header, body, and footer sections',
		},
		open: { table: { disable: true } },
		onOpenChange: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsModal>;

/**
 * The default modal has an inset header underline and no footer border. Compose
 * DsModal.Header, DsModal.Body, and DsModal.Footer to build a standard confirmation
 * dialog, and drive the open state from the component that renders it.
 */
export const Default: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	args: {
		columns: 4,
	},
	render: function Render(args) {
		const [open, setOpen] = useState(false);

		return (
			<>
				<DsButtonV3 onClick={() => setOpen(true)}>Open modal</DsButtonV3>
				<DsModal {...args} open={open} onOpenChange={setOpen}>
					<DsModal.Header>
						<DsModal.Title>Modal title</DsModal.Title>
						<DsModal.CloseTrigger />
					</DsModal.Header>
					<DsModal.Body>
						<DsTypography variant="body-md-reg">
							This is the default modal variant with simple content.
						</DsTypography>
					</DsModal.Body>
					<DsModal.Footer>
						<DsModal.Actions>
							<DsButtonV3 variant="secondary" onClick={() => setOpen(false)}>
								Cancel
							</DsButtonV3>
							<DsButtonV3 onClick={() => setOpen(false)}>Confirm</DsButtonV3>
						</DsModal.Actions>
					</DsModal.Footer>
				</DsModal>
			</>
		);
	},
};

/**
 * Set `dividers` to add full-width borders above the footer and below the header,
 * giving clearer visual separation when the body holds a form or scrollable content.
 * Compose DsFormControl fields inside DsModal.Body for standard form layouts.
 */
export const Divided: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	args: {
		columns: 6,
		dividers: true,
	},
	render: function Render(args) {
		const [open, setOpen] = useState(false);

		return (
			<>
				<DsButtonV3 onClick={() => setOpen(true)}>Open modal</DsButtonV3>
				<DsModal {...args} open={open} onOpenChange={setOpen}>
					<DsModal.Header>
						<DsModal.Title>User profile</DsModal.Title>
						<DsModal.CloseTrigger />
					</DsModal.Header>
					<DsModal.Body>
						<DsStack direction="column" gap="var(--sm)">
							<DsFormControl label="Full name" required>
								<DsFormControl.TextInput placeholder="Enter full name" />
							</DsFormControl>
							<DsFormControl label="Email address" required>
								<DsFormControl.TextInput type="email" placeholder="Enter email address" />
							</DsFormControl>
						</DsStack>
					</DsModal.Body>
					<DsModal.Footer>
						<DsModal.Actions>
							<DsButtonV3 variant="secondary" onClick={() => setOpen(false)}>
								Cancel
							</DsButtonV3>
							<DsButtonV3 onClick={() => setOpen(false)}>Save changes</DsButtonV3>
						</DsModal.Actions>
					</DsModal.Footer>
				</DsModal>
			</>
		);
	},
};

/**
 * Both DsModal.Header and DsModal.Footer accept arbitrary content, so you can build
 * a custom header (title plus supporting text) and a footer that mixes status text
 * with actions. Use DsModal.CloseTrigger for the close control and DsModal.Actions to
 * keep buttons right-aligned.
 */
export const Custom: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	args: {
		columns: 4,
		dividers: true,
	},
	render: function Render(args) {
		const [open, setOpen] = useState(false);

		return (
			<>
				<DsButtonV3 onClick={() => setOpen(true)}>Open modal</DsButtonV3>
				<DsModal {...args} open={open} onOpenChange={setOpen}>
					<DsModal.Header>
						<DsStack direction="column" gap="var(--3xs)" flex="1">
							<DsTypography variant="heading3">Project details</DsTypography>
							<DsTypography variant="body-sm-reg" color="secondary">
								Add the core information for your new project.
							</DsTypography>
						</DsStack>
						<DsModal.CloseTrigger />
					</DsModal.Header>
					<DsModal.Body>
						<DsStack direction="column" gap="var(--sm)">
							<DsFormControl label="Project name">
								<DsFormControl.TextInput placeholder="Enter project name" />
							</DsFormControl>
							<DsFormControl label="Category">
								<DsFormControl.TextInput placeholder="Select category" />
							</DsFormControl>
						</DsStack>
					</DsModal.Body>
					<DsModal.Footer>
						<DsStack direction="row" alignItems="center" gap="var(--sm)" flex="1">
							<DsTypography variant="body-sm-reg" color="success">
								All changes saved
							</DsTypography>
							<DsModal.Actions>
								<DsButtonV3 variant="secondary" onClick={() => setOpen(false)}>
									Discard
								</DsButtonV3>
								<DsButtonV3 onClick={() => setOpen(false)}>Save changes</DsButtonV3>
							</DsModal.Actions>
						</DsStack>
					</DsModal.Footer>
				</DsModal>
			</>
		);
	},
};

/**
 * Compose DsIcon before DsModal.Title inside the header to add a leading icon. Useful
 * for status or informational dialogs where the icon reinforces the message.
 */
export const WithIcon: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	args: {
		columns: 4,
	},
	render: function Render(args) {
		const [open, setOpen] = useState(false);

		return (
			<>
				<DsButtonV3 onClick={() => setOpen(true)}>Open modal</DsButtonV3>
				<DsModal {...args} open={open} onOpenChange={setOpen}>
					<DsModal.Header>
						<DsIcon icon="info" size="small" />
						<DsModal.Title>Session timeout</DsModal.Title>
						<DsModal.CloseTrigger />
					</DsModal.Header>
					<DsModal.Body>
						<DsTypography variant="body-md-reg">
							Your session will expire in 5 minutes due to inactivity.
						</DsTypography>
					</DsModal.Body>
				</DsModal>
			</>
		);
	},
};

/**
 * Omit DsModal.Header entirely for a cleaner surface without the header underline.
 * Use this pattern instead of a variant when the body content is self-explanatory.
 */
export const WithoutHeader: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	args: {
		columns: 4,
	},
	render: function Render(args) {
		const [open, setOpen] = useState(false);

		return (
			<>
				<DsButtonV3 onClick={() => setOpen(true)}>Open modal</DsButtonV3>
				<DsModal {...args} open={open} onOpenChange={setOpen}>
					<DsModal.Body>
						<DsTypography variant="body-md-reg">
							This modal has no header section. Use this pattern when you want a cleaner look without the
							header underline.
						</DsTypography>
					</DsModal.Body>
					<DsModal.Footer>
						<DsModal.Actions>
							<DsButtonV3 variant="secondary" onClick={() => setOpen(false)}>
								Close
							</DsButtonV3>
							<DsButtonV3 onClick={() => setOpen(false)}>Continue</DsButtonV3>
						</DsModal.Actions>
					</DsModal.Footer>
				</DsModal>
			</>
		);
	},
};
