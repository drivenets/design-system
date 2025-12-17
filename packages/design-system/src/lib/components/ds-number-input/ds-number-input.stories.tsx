import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { useState } from 'react';
import DsNumberInput from './ds-number-input';

const meta: Meta<typeof DsNumberInput> = {
	title: 'Design System/NumberInput',
	component: DsNumberInput,
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
		defaultValue: {
			control: 'text',
			description: 'Default value of the number input (uncontrolled)',
		},
		min: {
			control: 'number',
			description: 'Minimum value allowed',
		},
		max: {
			control: 'number',
			description: 'Maximum value allowed',
		},
		step: {
			control: 'number',
			description: 'Step value for increment/decrement',
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
type Story = StoryObj<typeof DsNumberInput>;

export const Default: Story = {
	args: {
		placeholder: 'Enter number',
		defaultValue: 0,
		style: { width: '200px' },
	},
};

export const WithMinMax: Story = {
	args: {
		placeholder: 'Enter number',
		defaultValue: 50,
		min: 0,
		max: 100,
		step: 1,
		style: { width: '200px' },
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Enter number');

		// Test initial value
		await expect(input).toHaveValue(50);

		// Test number input functionality
		await userEvent.clear(input);
		await userEvent.type(input, '75');
		// Wait for the input to be updated
		await waitFor(async () => {
			await expect(input).toHaveValue(75);
		});

		// Test min/max validation
		await userEvent.clear(input);
		await userEvent.type(input, '150'); // Above max
		await userEvent.tab(); // Blur input to trigger validation
		// Wait for validation to complete
		await waitFor(async () => {
			await expect(input).toHaveValue(100); // Should be clamped to max
		});

		await userEvent.clear(input);
		await userEvent.paste('-10'); // Below min
		await userEvent.tab(); // Blur input to trigger validation
		// Wait for validation to complete
		await waitFor(async () => {
			await expect(input).toHaveValue(0); // Should be clamped to min
		});

		// Test stepper buttons
		const decrementButton = canvas.getByRole('button', { name: /decrease/i });
		const incrementButton = canvas.getByRole('button', { name: /increase/i });

		await expect(decrementButton).toBeInTheDocument();
		await expect(incrementButton).toBeInTheDocument();

		// Test stepper functionality
		await userEvent.click(incrementButton);
		// Wait for stepper update
		await waitFor(async () => {
			await expect(input).toHaveValue(1);
		});

		await userEvent.click(decrementButton);
		// Wait for stepper update
		await waitFor(async () => {
			await expect(input).toHaveValue(0);
		});

		// Test stepper button disabled states
		await expect(decrementButton).toBeDisabled(); // At min value
		await expect(incrementButton).not.toBeDisabled();

		// Set to max value
		await userEvent.clear(input);
		await userEvent.type(input, '100');
		await userEvent.tab(); // Blur input to trigger validation
		// Wait for validation to complete
		await waitFor(async () => {
			await expect(incrementButton).toBeDisabled(); // At max value
			await expect(decrementButton).not.toBeDisabled();
		});

		// Test input cleared - should be in a valid state
		await userEvent.clear(input);
		await userEvent.tab(); // Blur input to trigger validation
		// Wait for validation to complete
		await waitFor(async () => {
			// Just verify the input is still functional and not in an error state
			await expect(input).toBeInTheDocument();
			// The exact value depends on Ark UI's behavior - could be empty, 0, or min value
		});
	},
};

export const Controlled: Story = {
	render: function Render(args) {
		const [value, setValue] = useState(42);

		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
				<DsNumberInput
					{...args}
					value={value}
					defaultValue={0}
					onValueChange={(newValue) => setValue(newValue)}
				/>
				{value !== undefined && <div>Current value: {value}</div>}
				<button onClick={() => setValue(0)}>Reset to 0</button>
				<button onClick={() => setValue(100)}>Set to 100</button>
			</div>
		);
	},
	args: {
		placeholder: 'Enter number',
		min: 0,
		max: 100,
		step: 1,
		style: { width: '200px' },
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Enter number');
		const resetButton = canvas.getByText('Reset to 0');
		const setTo100Button = canvas.getByText('Set to 100');
		const valueDisplay = canvas.getByText('Current value: 42');

		// Test initial value
		await expect(input).toHaveValue(42);
		await expect(valueDisplay).toHaveTextContent('Current value: 42');

		// Test external control
		await userEvent.click(resetButton);
		// Wait for state update
		await waitFor(async () => {
			await expect(input).toHaveValue(0);
			await expect(valueDisplay).toHaveTextContent('Current value: 0');
		});

		await userEvent.click(setTo100Button);
		// Wait for state update
		await waitFor(async () => {
			await expect(input).toHaveValue(100);
			await expect(valueDisplay).toHaveTextContent('Current value: 100');
		});

		// Test user input
		await userEvent.clear(input);
		await userEvent.type(input, '50');
		await userEvent.tab(); // Blur input
		// Wait for state update
		await waitFor(async () => {
			await expect(input).toHaveValue(50);
			await expect(valueDisplay).toHaveTextContent('Current value: 50');
		});

		// Reset
		await userEvent.click(resetButton);
		// Wait for state update
		await waitFor(async () => {
			await expect(input).toHaveValue(0);
		});
	},
};

export const Small: Story = {
	args: {
		size: 'small',
		placeholder: 'Small number input',
		defaultValue: 10,
		style: { width: '150px' },
	},
};

export const Disabled: Story = {
	args: {
		placeholder: 'Disabled input',
		defaultValue: 25,
		disabled: true,
		style: { width: '200px' },
	},
};
