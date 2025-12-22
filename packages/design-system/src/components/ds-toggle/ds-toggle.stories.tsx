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
		// Explicitly hide checked
		checked: {
			table: { disable: true },
			control: false,
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
			control: 'text',
			description: 'Additional CSS class names',
		},
		style: {
			control: 'object',
			description: 'Inline styles to apply to the component',
		},
		onChange: {
			action: 'clicked',
			description: 'Function called when component is clicked',
		},
		onValueChange: {
			action: 'changed',
			description: 'Function called when toggle value changes',
		},
	},
};

export default meta;

type Story = StoryObj<typeof DsToggle>;

const label = 'Text for label';
const labelInfo = 'Text for info';

// Helper – get the Switch root (Ark's <Switch.Root>)
const getToggleRoot = (canvasElement: HTMLElement) =>
	canvasElement.querySelector('[data-scope="switch"][data-part="root"]') as HTMLElement;

// Helper – get the Switch control (Ark's <Switch.Control>)
const getToggleControl = (canvasElement: HTMLElement) =>
	canvasElement.querySelector('[data-scope="switch"][data-part="control"]') as HTMLElement;

export const Default: Story = {
	args: {
		label,
		labelInfo,
		className: 'custom-toggle',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const toggleRoot = getToggleRoot(canvasElement);
		const toggleControl = getToggleControl(canvasElement);

		// Sanity check
		await expect(toggleRoot).toBeInTheDocument();
		await expect(toggleControl).toBeInTheDocument();

		// Ark UI Switch: data-state = "checked" | "unchecked"
		await expect(toggleRoot).toHaveAttribute('data-state', 'unchecked');

		// Label info should be rendered
		await expect(canvas.getByText(labelInfo)).toBeInTheDocument();

		// Click the control to turn it on
		await userEvent.click(toggleControl);

		await waitFor(() => {
			expect(toggleRoot).toHaveAttribute('data-state', 'checked');
		});
	},
};

export const Controlled: Story = {
	render: function Render() {
		const [checked, setChecked] = useState<boolean>(true);

		return <DsToggle label={label} labelInfo={labelInfo} checked={checked} onValueChange={setChecked} />;
	},
	play: async ({ canvasElement }) => {
		const toggleRoot = getToggleRoot(canvasElement);
		const toggleControl = getToggleControl(canvasElement);

		await expect(toggleRoot).toBeInTheDocument();
		await expect(toggleControl).toBeInTheDocument();

		// Starts checked (controlled via props)
		await expect(toggleRoot).toHaveAttribute('data-state', 'checked');

		// Toggle off
		await userEvent.click(toggleControl);
		await expect(toggleRoot).toHaveAttribute('data-state', 'unchecked');
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

		const toggleRoot = getToggleRoot(canvasElement);
		const toggleControl = getToggleControl(canvasElement);

		await expect(toggleRoot).toBeInTheDocument();
		await expect(toggleControl).toBeInTheDocument();

		// Ark UI: data-disabled is present when disabled
		await expect(toggleRoot).toHaveAttribute('data-disabled');

		// Label info should be rendered
		await expect(canvas.getByText(labelInfo)).toBeInTheDocument();

		// Capture initial state (usually "unchecked")
		const initialState = toggleRoot.getAttribute('data-state');

		// Try to click the disabled toggle
		await userEvent.click(toggleControl, { pointerEventsCheck: 0 });

		// State should remain unchanged
		await expect(toggleRoot).toHaveAttribute('data-state', initialState ?? 'unchecked');
	},
};
