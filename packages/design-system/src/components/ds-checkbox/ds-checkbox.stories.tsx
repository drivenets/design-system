import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsCheckbox from './ds-checkbox';
import { checkboxVariants } from './ds-checkbox.types';

const meta: Meta<typeof DsCheckbox> = {
	title: 'Design System/Checkbox',
	component: DsCheckbox,
	parameters: {
		layout: 'centered',
	},
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
};

export const Disabled: Story = {
	args: {
		label,
		labelInfo,
		disabled: true,
	},
};

export const Warning: Story = {
	args: {
		variant: 'warning',
	},
};

export const WarningWithLabel: Story = {
	args: {
		variant: 'warning',
		label,
		labelInfo,
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
};
