import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import { useState } from 'react';
import DsCheckbox from './ds-checkbox';
import { checkboxVariants } from './ds-checkbox.types';

const meta: Meta<typeof DsCheckbox> = {
	title: 'Design System/Checkbox',
	component: DsCheckbox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			options: checkboxVariants,
			control: 'radio',
		},
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

		const checkbox = await canvas.findByRole('checkbox');

		await expect(checkbox).toBeDisabled();
		await expect(canvas.getByText(labelInfo)).toBeInTheDocument();

		await userEvent.click(checkbox, { pointerEventsCheck: 0 });
		await expect(checkbox).not.toBeChecked();
	},
};

export const Warning: Story = {
	args: {
		variant: 'warning',
		onCheckedChange: fn(),
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		const checkbox = await canvas.findByRole('checkbox');

		await expect(checkbox).not.toBeChecked();

		await userEvent.click(checkbox);
		await expect(checkbox).toBeChecked();
		await expect(args.onCheckedChange).toHaveBeenCalledWith(true);

		await userEvent.click(checkbox);
		await expect(checkbox).not.toBeChecked();
	},
};

export const WarningWithLabel: Story = {
	args: {
		variant: 'warning',
		label,
		labelInfo,
		onCheckedChange: fn(),
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		const checkbox = await canvas.findByRole('checkbox');

		await expect(checkbox).not.toBeChecked();
		await expect(canvas.getByText(label)).toBeInTheDocument();
		await expect(canvas.getByText(labelInfo)).toBeInTheDocument();

		await userEvent.click(checkbox);
		await expect(checkbox).toBeChecked();
		await expect(args.onCheckedChange).toHaveBeenCalledWith(true);
	},
};

export const WarningIndeterminate: Story = {
	render: function Render() {
		const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');

		return (
			<DsCheckbox
				variant="warning"
				label={label}
				labelInfo={labelInfo}
				checked={checked}
				onCheckedChange={(newState) => setChecked(newState)}
			/>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const checkbox = await canvas.findByRole('checkbox');

		await expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
		await expect(canvas.getByText(labelInfo)).toBeInTheDocument();
	},
};
