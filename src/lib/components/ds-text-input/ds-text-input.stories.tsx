import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import { useState } from 'react';
import DsTextInput from './ds-text-input';
import { DsIcon } from '../ds-icon';
import { textInputSizes } from './ds-text-input.types';

const meta: Meta<typeof DsTextInput> = {
	title: 'Design System/TextInput',
	component: DsTextInput,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A flexible text input component that supports start and end adornments via props for easy customization.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: textInputSizes,
			description: 'The size of the input field',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the input is disabled',
		},
		placeholder: {
			control: 'text',
			description: 'The placeholder text',
		},
		value: {
			control: 'text',
			description: 'The current value',
		},
		onChange: { action: 'changed' },
		onValueChange: { action: 'value changed' },
	},
};

export default meta;
type Story = StoryObj<typeof DsTextInput>;

export const Default: Story = {
	args: {
		placeholder: 'Enter text...',
		size: 'default',
		style: { width: '200px' },
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Enter text...');

		// Test basic input functionality
		await userEvent.type(input, 'Hello World');
		await expect(input).toHaveValue('Hello World');

		// Reset
		await userEvent.clear(input);
	},
};

export const Small: Story = {
	args: {
		size: 'small',
		placeholder: 'Small input...',
		style: { width: '150px' },
	},
};

export const WithValue: Story = {
	args: {
		value: 'Hello World',
		placeholder: 'Enter text...',
	},
};

export const Disabled: Story = {
	args: {
		placeholder: 'Disabled input',
		disabled: true,
		style: { width: '200px' },
	},
};

export const Controlled: Story = {
	render: function Render(args) {
		const [value, setValue] = useState('initial value');

		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
				<DsTextInput {...args} value={value} onValueChange={(newValue) => setValue(newValue)} />
				<div>Current value: {value}</div>
				<button onClick={() => setValue('updated value')}>Update value</button>
				<button onClick={() => setValue('')}>Clear value</button>
			</div>
		);
	},
	args: {
		type: 'text',
		placeholder: 'Controlled input',
		style: { width: '200px' },
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Controlled input');
		const updateButton = canvas.getByText('Update value');
		const clearButton = canvas.getByText('Clear value');
		const valueDisplay = canvas.getByText('Current value: initial value');

		// Test initial value
		await expect(input).toHaveValue('initial value');
		await expect(valueDisplay).toHaveTextContent('Current value: initial value');

		// Test external control
		await userEvent.click(updateButton);
		await waitFor(async () => {
			await expect(input).toHaveValue('updated value');
			await expect(valueDisplay).toHaveTextContent('Current value: updated value');
		});

		// Test user input
		await userEvent.clear(input);
		await userEvent.type(input, 'user input');
		await waitFor(async () => {
			await expect(valueDisplay).toHaveTextContent('Current value: user input');
		});

		// Test clear
		await userEvent.click(clearButton);
		await waitFor(async () => {
			await expect(input).toHaveValue('');
			await expect(valueDisplay).toHaveTextContent('Current value:');
		});
	},
};

export const WithStartAdornment: Story = {
	args: {
		placeholder: 'Enter amount...',
		slots: {
			startAdornment: (
				<span
					style={{
						color: 'var(--color-font-secondary)',
						fontSize: '12px',
						fontWeight: 'bold',
					}}
				>
					$
				</span>
			),
		},
		style: { width: '200px' },
	},
};

export const WithEndAdornment: Story = {
	render: function Render() {
		const [value, setValue] = useState('');

		return (
			<DsTextInput
				placeholder="Enter text..."
				value={value}
				onValueChange={setValue}
				slots={{
					endAdornment: (
						<button type="button" onClick={() => setValue('')}>
							<DsIcon icon="close" size="tiny" />
						</button>
					),
				}}
				style={{ width: '200px' }}
			/>
		);
	},
};

export const WithBothAdornments: Story = {
	render: function Render() {
		const [value, setValue] = useState('');

		return (
			<DsTextInput
				placeholder="Search..."
				value={value}
				onValueChange={setValue}
				slots={{
					startAdornment: <DsIcon icon="search" size="tiny" />,
					endAdornment: (
						<button type="button" onClick={() => setValue('')}>
							<DsIcon icon="close" size="tiny" />
						</button>
					),
				}}
				style={{ width: '200px' }}
			/>
		);
	},
};

export const CustomEmailAdornments: Story = {
	name: 'Custom Adornments (Email)',
	render: function Render() {
		const [value, setValue] = useState('');

		return (
			<DsTextInput
				size="small"
				type="email"
				placeholder="Enter email address..."
				value={value}
				onValueChange={setValue}
				slots={{
					startAdornment: (
						<span
							style={{
								backgroundColor: 'var(--color-background-action-weak)',
								borderRadius: '4px',
								padding: '2px 6px',
								fontSize: '12px',
								color: 'var(--color-font-secondary)',
								fontWeight: 'bold',
							}}
						>
							@
						</span>
					),
					endAdornment: (
						<button type="button" onClick={() => console.log('Send clicked')}>
							<DsIcon icon="send" size="tiny" filled={!!value} />
						</button>
					),
				}}
				style={{ width: '250px' }}
			/>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Enter email address...');

		// Test email input
		await userEvent.type(input, 'test@example.com');
		await expect(input).toHaveValue('test@example.com');
		await expect(input).toHaveAttribute('type', 'email');

		// Reset
		await userEvent.clear(input);
	},
};

export const DisabledAdornments: Story = {
	args: {
		value: 'Disabled value',
		disabled: true,
		slots: {
			startAdornment: (
				<button type="button" disabled={true}>
					<DsIcon icon="lock" size="tiny" />
				</button>
			),
			endAdornment: (
				<button type="button" disabled={true}>
					<DsIcon icon="visibility" size="tiny" />
				</button>
			),
		},
		style: { width: '200px' },
	},
};

export const Interactive: Story = {
	render: function Render() {
		const [value, setValue] = useState('');
		const showClear = !!value;

		const handleValueChange = (newValue: string) => {
			setValue(newValue);
		};

		const handleClear = () => {
			setValue('');
		};

		return (
			<>
				<DsTextInput
					placeholder="Type something..."
					value={value}
					onValueChange={handleValueChange}
					slots={{
						startAdornment: <DsIcon icon="search" size="tiny" />,
						endAdornment: showClear && (
							<button type="button" onClick={handleClear}>
								<DsIcon icon="close" size="tiny" />
							</button>
						),
					}}
					style={{ width: '200px' }}
				/>
				<div style={{ marginTop: '8px', fontSize: '12px', color: 'var(--color-font-secondary)' }}>
					Character count: {value.length}
				</div>
			</>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Type something...');
		const characterCount = canvas.getByText('Character count: 0');

		// Test initial state
		await expect(input).toHaveValue('');
		await expect(characterCount).toHaveTextContent('Character count: 0');

		// Test typing
		await userEvent.type(input, 'Hello World');
		await expect(input).toHaveValue('Hello World');
		await expect(characterCount).toHaveTextContent('Character count: 11');

		// Test clearing
		await userEvent.clear(input);
		await expect(input).toHaveValue('');
		await expect(characterCount).toHaveTextContent('Character count: 0');
	},
};
