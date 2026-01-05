import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import DsToggle from './ds-toggle';
import { toggleSizes } from './ds-toggle.types';

const meta: Meta<typeof DsToggle> = {
	title: 'Design System/Toggle',
	component: DsToggle,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		checked: {
			control: 'boolean',
			description: "Whether it's checked or not",
		},
		label: {
			control: 'text',
			description: 'The label text to display next to the toggle',
		},
		labelInfo: {
			control: 'text',
			description: 'The label info text to display below the label',
		},
		size: {
			control: 'select',
			options: toggleSizes,
			description: 'Size of the toggle',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the toggle is disabled',
		},
		className: {
			table: { disable: true },
			control: false,
		},
		style: {
			table: { disable: true },
			control: false,
		},
		onChange: {
			table: { disable: true },
			control: false,
		},
		onValueChange: {
			table: { disable: true },
			control: false,
		},
		ref: {
			table: { disable: true },
			control: false,
		},
	},
};

export default meta;

type Story = StoryObj<typeof DsToggle>;

const label = 'Text for label';
const labelInfo = 'Text for info';

export const Default: Story = {
	args: {
		label,
		labelInfo,
		className: 'custom-toggle',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const toggle = canvas.getByRole('checkbox', { name: /Text for label/ });

		await expect(toggle).toBeInTheDocument();

		await expect(toggle).not.toBeChecked();

		await expect(canvas.getByText(labelInfo)).toBeInTheDocument();

		await userEvent.click(toggle);

		await waitFor(async () => {
			await expect(toggle).toBeChecked();
		});
	},
};

export const Controlled: Story = {
	render: function Render() {
		const [checked, setChecked] = useState<boolean>(true);

		return <DsToggle label={label} labelInfo={labelInfo} checked={checked} onValueChange={setChecked} />;
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const toggle = canvas.getByRole('checkbox', { name: /Text for label/ });

		await expect(toggle).toBeInTheDocument();

		// Starts checked (controlled via props)
		await expect(toggle).toBeChecked();

		await userEvent.click(toggle);
		await expect(toggle).not.toBeChecked();
	},
};

export const Small: Story = {
	render: function Render() {
		return <DsToggle label={label} labelInfo={labelInfo} size="small" />;
	},
};

export const Disabled: Story = {
	args: {
		label,
		labelInfo,
		disabled: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const toggle = canvas.getByRole('checkbox', { name: /Text for label/ });

		await expect(toggle).toBeInTheDocument();

		// Disabled checkbox
		await expect(toggle).toBeDisabled();
		await expect(toggle).not.toBeChecked();

		await expect(canvas.getByText(labelInfo)).toBeInTheDocument();

		await userEvent.click(toggle, { pointerEventsCheck: 0 });

		// State should remain unchanged
		await expect(toggle).not.toBeChecked();
		await expect(toggle).toBeDisabled();
	},
};

export const ChildrenCustomLabels: Story = {
	render: function Render() {
		return (
			<DsToggle size="small">
				<span
					style={{
						color: 'red',
					}}
				>
					Custom label totally!
				</span>
			</DsToggle>
		);
	},
	args: {
		label,
		labelInfo,
		disabled: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const toggle = canvas.getByRole('checkbox', {
			name: 'Custom label totally!',
		});
		await expect(toggle).toBeInTheDocument();
		await expect(toggle).not.toBeChecked();

		await userEvent.click(toggle);

		await waitFor(async () => {
			await expect(toggle).toBeChecked();
		});
	},
};
