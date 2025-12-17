import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { useState } from 'react';
import DsPasswordInput from './ds-password-input';

const meta: Meta<typeof DsPasswordInput> = {
	title: 'Design System/PasswordInput',
	component: DsPasswordInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['small', 'default'],
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text for the input',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the input is disabled',
		},
		className: {
			control: 'text',
			description: 'Additional CSS class names',
		},
		style: {
			control: 'object',
			description: 'Inline styles to apply to the component',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsPasswordInput>;

export const Default: Story = {
	args: {
		placeholder: 'Enter password',
		style: { width: '200px' },
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Enter password');
		const visibilityButton = canvas.getByRole('button', { name: /toggle password visibility/i });

		// Test password visibility toggle
		await userEvent.type(input, 'secret-password');
		await expect(input).toHaveValue('secret-password');
		await expect(input).toHaveAttribute('type', 'password');

		// Click the eye icon to show password
		await userEvent.click(visibilityButton);
		await waitFor(async () => {
			await expect(input).toHaveAttribute('type', 'text');
		});

		// Click again to hide password
		await userEvent.click(visibilityButton);
		await waitFor(async () => {
			await expect(input).toHaveAttribute('type', 'password');
		});

		// Reset
		await userEvent.clear(input);
	},
};

export const Controlled: Story = {
	render: function Render(args) {
		const [value, setValue] = useState('initial-password');

		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
				<DsPasswordInput {...args} value={value} onValueChange={(newValue) => setValue(newValue)} />
				<div>Current value: {value}</div>
				<button onClick={() => setValue('new-password')}>Set new password</button>
				<button onClick={() => setValue('')}>Clear password</button>
			</div>
		);
	},
	args: {
		placeholder: 'Enter password',
		style: { width: '200px' },
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Enter password');
		const setNewButton = canvas.getByText('Set new password');
		const clearButton = canvas.getByText('Clear password');
		const valueDisplay = canvas.getByText('Current value: initial-password');

		// Test initial value
		await expect(input).toHaveValue('initial-password');
		await expect(valueDisplay).toHaveTextContent('Current value: initial-password');

		// Test external control
		await userEvent.click(setNewButton);
		await waitFor(async () => {
			await expect(input).toHaveValue('new-password');
			await expect(valueDisplay).toHaveTextContent('Current value: new-password');
		});

		// Test user input
		await userEvent.clear(input);
		await userEvent.type(input, 'user-input');
		await waitFor(async () => {
			await expect(valueDisplay).toHaveTextContent('Current value: user-input');
		});

		// Test clear
		await userEvent.click(clearButton);
		await waitFor(async () => {
			await expect(input).toHaveValue('');
			await expect(valueDisplay).toHaveTextContent('Current value:');
		});
	},
};
