import type { Meta, StoryObj } from '@storybook/react';
import { controlStatuses, DsIcon } from '@design-system/ui';
import DsFormControl from './ds-form-control';
import { expect, userEvent, waitFor, within } from '@storybook/test';

const meta: Meta<typeof DsFormControl> = {
	title: 'Design System/FormControl',
	component: DsFormControl,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		status: {
			control: { type: 'select' },
			options: controlStatuses,
			description: 'Form control color status',
			table: {
				defaultValue: {
					summary: controlStatuses[0],
				},
			},
		},
		label: {
			control: 'text',
			description: 'Label for the form control',
		},
		required: {
			control: 'boolean',
			description: 'Indicates if the field is required',
		},
		showHelpIcon: {
			control: 'boolean',
			description: 'Show help icon next to the label',
		},
		message: {
			control: 'text',
			description: 'Message to display below the form control',
		},
		messageIcon: {
			control: 'text',
			description: 'Icon to display in the message',
		},
		className: {
			control: 'text',
			description: 'Additional CSS class names',
		},
		style: {
			control: 'object',
			description: 'Additional styles to apply to the component',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsFormControl>;

const message = 'Hello world Design System!';

const sanityCheck = async <T extends HTMLInputElement | HTMLTextAreaElement>(canvasElement: HTMLElement) => {
	const canvas = within(canvasElement);
	const input = canvas.getByLabelText(/Input label.*/i) as T;

	// Simulate typing into the input field
	await userEvent.type(input, message);

	// Assert that the input value has been updated
	await expect(input.value).toBe(message);

	// Clear the input field
	await userEvent.clear(input);

	// Assert that the input value has been cleared
	await expect(input.value).toBe('');
};

const checkDisabled = async <T extends HTMLInputElement | HTMLTextAreaElement>(
	canvasElement: HTMLElement,
) => {
	const canvas = within(canvasElement);
	const input = canvas.getByLabelText(/Input label.*/i) as T;

	// Assert that the input is disabled
	await expect(input).toBeDisabled();

	// Attempt to type into the disabled input
	await userEvent.type(input, 'Should not type');

	// Assert that the input value remains unchanged
	await expect(input.value).toBe('');
};

export const Default: Story = {
	args: {
		label: 'Input label',
		required: true,
		message: 'This is a message',
		children: <DsFormControl.TextInput placeholder="Input" />,
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithCustomWidth: Story = {
	args: {
		label: 'Input label',
		required: true,
		style: { width: '300px' },
		children: <DsFormControl.TextInput placeholder="Input with custom width" />,
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithCustomStyles: Story = {
	args: {
		label: 'Input label',
		required: true,
		style: {
			width: '400px',
			padding: '16px',
			border: '2px solid #e0e0e0',
			borderRadius: '8px',
			backgroundColor: '#f9f9f9',
		},
		children: <DsFormControl.TextInput placeholder="Input with custom styling" />,
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithDescription: Story = {
	args: {
		label: 'Input label',
		required: true,
		style: {
			width: '300px',
		},
		children: (
			<>
				<DsFormControl.Description>
					This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
					<button
						type="button"
						style={{
							background: 'none',
							border: 'none',
							padding: 0,
							margin: 0,
							cursor: 'pointer',
							color: 'var(--action-cta1)',
							textDecoration: 'underline',
							fontSize: 'inherit',
							fontFamily: 'inherit',
						}}
						onClick={() => alert('Learn more clicked!')}
					>
						Learn more
					</button>{' '}
					can be added.
				</DsFormControl.Description>
				<DsFormControl.TextInput placeholder="Search" startAdornment={<DsIcon icon="search" size="tiny" />} />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithHelpIcon: Story = {
	args: {
		label: 'Input label',
		required: true,
		showHelpIcon: true,
		onHelpClick: () => alert('Help clicked!'),
		children: (
			<>
				<DsFormControl.Description>
					This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
					<button
						type="button"
						style={{
							background: 'none',
							border: 'none',
							padding: 0,
							margin: 0,
							cursor: 'pointer',
							color: 'var(--action-cta1)',
							textDecoration: 'underline',
							fontSize: 'inherit',
							fontFamily: 'inherit',
						}}
						onClick={() => alert('Learn more clicked!')}
					>
						Learn more
					</button>{' '}
					can be added.
				</DsFormControl.Description>
				<DsFormControl.TextInput placeholder="Search" startAdornment={<DsIcon icon="search" size="tiny" />} />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const WithIcon: Story = {
	args: {
		label: 'Input label',
		required: true,
		message: 'This is a message',
		children: (
			<DsFormControl.TextInput placeholder="Input" startAdornment={<DsIcon icon="call" size="tiny" />} />
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const Success: Story = {
	args: {
		status: 'success',
		label: 'Input label',
		message: 'This is a success caption under a text input.',
		messageIcon: 'check_circle',
		children: (
			<>
				<DsFormControl.Description>
					This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
					<button
						type="button"
						style={{
							background: 'none',
							border: 'none',
							padding: 0,
							margin: 0,
							cursor: 'pointer',
							color: 'var(--action-cta1)',
							textDecoration: 'underline',
							fontSize: 'inherit',
							fontFamily: 'inherit',
						}}
						onClick={() => alert('Learn more clicked!')}
					>
						Learn more
					</button>{' '}
					can be added.
				</DsFormControl.Description>
				<DsFormControl.TextInput type="text" endAdornment={<DsIcon icon="visibility" size="tiny" />} />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const Error: Story = {
	args: {
		status: 'error',
		label: 'Input label',
		message: 'This is an error caption under a text input.',
		messageIcon: 'error',
		children: (
			<>
				<DsFormControl.Description>
					This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
					<button
						type="button"
						style={{
							background: 'none',
							border: 'none',
							padding: 0,
							margin: 0,
							cursor: 'pointer',
							color: 'var(--action-cta1)',
							textDecoration: 'underline',
							fontSize: 'inherit',
							fontFamily: 'inherit',
						}}
						onClick={() => alert('Learn more clicked!')}
					>
						Learn more
					</button>{' '}
					can be added.
				</DsFormControl.Description>
				<DsFormControl.TextInput
					startAdornment={<DsIcon icon="search" size="tiny" />}
					endAdornment={<DsIcon icon="error" size="tiny" />}
				/>
			</>
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const Warning: Story = {
	args: {
		status: 'warning',
		label: 'Input label',
		message: 'This is a warning caption under a text input.',
		messageIcon: 'info',
		children: (
			<>
				<DsFormControl.Description>
					This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
					<button
						type="button"
						style={{
							background: 'none',
							border: 'none',
							padding: 0,
							margin: 0,
							cursor: 'pointer',
							color: 'var(--action-cta1)',
							textDecoration: 'underline',
							fontSize: 'inherit',
							fontFamily: 'inherit',
						}}
						onClick={() => alert('Learn more clicked!')}
					>
						Learn more
					</button>{' '}
					can be added.
				</DsFormControl.Description>
				<DsFormControl.TextInput />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const Disabled: Story = {
	args: {
		label: 'Input label',
		required: true,
		children: <DsFormControl.TextInput placeholder="Disabled Input" disabled />,
	},
	play: async ({ canvasElement }) => {
		await checkDisabled(canvasElement);
	},
};

export const Textarea: Story = {
	args: {
		label: 'Input label',
		required: true,
		message: 'This is a message',
		children: <DsFormControl.Textarea placeholder="Input" />,
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const TextareaWithDescription: Story = {
	args: {
		label: 'Input label',
		required: true,
		message: 'This is a message',
		children: (
			<>
				<DsFormControl.Description>
					This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
					<button
						type="button"
						style={{
							background: 'none',
							border: 'none',
							padding: 0,
							margin: 0,
							cursor: 'pointer',
							color: 'var(--action-cta1)',
							textDecoration: 'underline',
							fontSize: 'inherit',
							fontFamily: 'inherit',
						}}
						onClick={() => alert('Learn more clicked!')}
					>
						Learn more
					</button>{' '}
					can be added.
				</DsFormControl.Description>
				<DsFormControl.Textarea placeholder="Input" />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const TextareaWarning: Story = {
	args: {
		status: 'warning',
		label: 'Input label',
		required: true,
		message: 'This is a message',
		children: <DsFormControl.Textarea placeholder="Input" />,
	},
	play: async ({ canvasElement }) => {
		await sanityCheck(canvasElement);
	},
};

export const TextareaDisabled: Story = {
	args: {
		label: 'Input label',
		required: true,
		children: <DsFormControl.Textarea placeholder="Disabled Input" disabled />,
	},
	play: async ({ canvasElement }) => {
		await checkDisabled(canvasElement);
	},
};

export const Select: Story = {
	args: {
		label: 'Select Option',
		required: true,
		style: {
			width: '200px',
		},
		children: (
			<DsFormControl.Select
				placeholder="Input"
				options={[
					{ label: 'Option 1', value: 'option1', icon: 'download' },
					{ label: 'Option 2', value: 'option2', icon: 'save' },
					{ label: 'Option 3', value: 'option3', icon: 'description' },
				]}
			/>
		),
	},
};

export const SelectWithDescription: Story = {
	args: {
		label: 'Select Option',
		required: true,
		style: {
			width: '325px',
		},
		children: (
			<>
				<DsFormControl.Description>
					This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
					<button
						type="button"
						style={{
							background: 'none',
							border: 'none',
							padding: 0,
							margin: 0,
							cursor: 'pointer',
							color: 'var(--action-cta1)',
							textDecoration: 'underline',
							fontSize: 'inherit',
							fontFamily: 'inherit',
						}}
						onClick={() => alert('Learn more clicked!')}
					>
						Learn more
					</button>{' '}
					can be added.
				</DsFormControl.Description>
				<DsFormControl.Select
					placeholder="Input"
					options={[
						{ label: 'Option 1', value: 'option1', icon: 'download' },
						{ label: 'Option 2', value: 'option2', icon: 'save' },
						{ label: 'Option 3', value: 'option3', icon: 'description' },
					]}
				/>
			</>
		),
	},
};

export const SelectDisabled: Story = {
	args: {
		label: 'Select Option',
		required: true,
		children: (
			<DsFormControl.Select
				placeholder="Input"
				disabled
				options={[
					{ label: 'Option 1', value: 'option1', icon: 'download' },
					{ label: 'Option 2', value: 'option2', icon: 'save' },
					{ label: 'Option 3', value: 'option3', icon: 'description' },
				]}
				style={{
					width: '200px',
				}}
			/>
		),
	},
};

export const NumberInput: Story = {
	args: {
		label: 'Quantity',
		required: true,
		message: 'Enter a number between 1 and 100',
		children: (
			<>
				<DsFormControl.Description>
					This is a number input with stepper buttons and validation.
				</DsFormControl.Description>
				<DsFormControl.NumberInput
					placeholder="Enter quantity"
					min={1}
					max={100}
					step={1}
					defaultValue={10}
				/>
			</>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Enter quantity');
		const incrementButton = canvas.getByRole('button', { name: /increase/i });
		const decrementButton = canvas.getByRole('button', { name: /decrease/i });

		// Test initial value
		await expect(input).toHaveValue(10);

		// Test increment
		await userEvent.click(incrementButton);
		await waitFor(async () => {
			await expect(input).toHaveValue(11);
		});

		// Test decrement
		await userEvent.click(decrementButton);
		await waitFor(async () => {
			await expect(input).toHaveValue(10);
		});

		// Test typing
		await userEvent.clear(input);
		await userEvent.type(input, '25');
		await expect(input).toHaveValue(25);
	},
};

export const PasswordInput: Story = {
	args: {
		label: 'Password',
		required: true,
		message: 'Password must be at least 8 characters long',
		children: (
			<>
				<DsFormControl.Description>
					This is a password input with visibility toggle.
				</DsFormControl.Description>
				<DsFormControl.PasswordInput placeholder="Enter your password" />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Enter your password');
		const visibilityButton = canvas.getByRole('button', { name: /toggle password visibility/i });

		// Test password input
		await userEvent.type(input, 'secretpassword');
		await expect(input).toHaveValue('secretpassword');
		await expect(input).toHaveAttribute('type', 'password');

		// Test visibility toggle
		await userEvent.click(visibilityButton);
		await waitFor(async () => {
			await expect(input).toHaveAttribute('type', 'text');
		});

		// Toggle back
		await userEvent.click(visibilityButton);
		await waitFor(async () => {
			await expect(input).toHaveAttribute('type', 'password');
		});
	},
};

export const SchemaStyling: Story = {
	args: {
		label: 'Form Controls with Schema Styling',
		children: (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				<DsFormControl status="error" label="Error State" message="This field has an error">
					<DsFormControl.TextInput placeholder="Error input" />
				</DsFormControl>

				<DsFormControl status="warning" label="Warning State" message="This field has a warning">
					<DsFormControl.NumberInput placeholder="Warning number" />
				</DsFormControl>

				<DsFormControl status="success" label="Success State" message="This field is valid">
					<DsFormControl.PasswordInput placeholder="Success password" />
				</DsFormControl>

				<DsFormControl label="Normal State" message="This field is normal">
					<DsFormControl.TextInput placeholder="Normal input" />
				</DsFormControl>
			</div>
		),
	},
};
