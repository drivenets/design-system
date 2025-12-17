import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { useState } from 'react';
import DsCheckbox from './ds-checkbox';

const meta: Meta<typeof DsCheckbox> = {
	title: 'Design System/Checkbox',
	component: DsCheckbox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description: 'Label for the checkbox',
		},
		labelInfo: {
			control: 'text',
			description: 'Additional label info for the checkbox',
		},
		className: {
			control: 'text',
			description: 'Additional CSS class names',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsCheckbox>;

const label = 'Text for label';
const labelInfo = 'Text for info';

export const Default: Story = {
	args: {
		label,
		labelInfo,
		className: 'custom-checkbox',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Locate the checkbox by its role
		const checkbox = await canvas.findByRole('checkbox');

		// Assert that the checkbox is initially unchecked
		await expect(checkbox).not.toBeChecked();

		// Assert that label info is displayed
		await expect(canvas.getByText(labelInfo)).toBeInTheDocument();

		// Click to check the checkbox
		await userEvent.click(checkbox);
		await expect(checkbox).toBeChecked();

		// Click again to uncheck the checkbox
		await userEvent.click(checkbox);
		await expect(checkbox).not.toBeChecked();
	},
};

export const Indeterminate: Story = {
	render: function Render() {
		const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');

		return (
			<DsCheckbox
				label={label}
				labelInfo={labelInfo}
				checked={checked}
				onCheckedChange={(newState) => setChecked(newState)}
			/>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Locate the checkbox by its role
		const checkbox = await canvas.findByRole('checkbox');

		// Assert that the checkbox is initially indeterminate
		await expect(checkbox).toHaveAttribute('data-state', 'indeterminate');

		// Assert that label info is displayed
		await expect(canvas.getByText(labelInfo)).toBeInTheDocument();
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

		// Locate the checkbox by its role
		const checkbox = await canvas.findByRole('checkbox');

		// Assert that the checkbox is disabled
		await expect(checkbox).toBeDisabled();

		// Assert that label info is displayed
		await expect(canvas.getByText(labelInfo)).toBeInTheDocument();

		// Attempt to click the disabled checkbox
		await userEvent.click(checkbox, { pointerEventsCheck: 0 });

		// Assert that the checkbox remains unchecked
		await expect(checkbox).not.toBeChecked();
	},
};
