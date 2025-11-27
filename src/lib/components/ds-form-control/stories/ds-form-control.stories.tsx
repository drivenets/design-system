import type { Meta, StoryObj } from '@storybook/react';
import { DsIcon } from '@design-system/ui';
import DsFormControl from '../ds-form-control';
import { controlStatuses } from '../ds-form-control.types';
import { checkDisabled, sanityCheck } from './ds-form-control-stories-shared';

const meta: Meta<typeof DsFormControl> = {
	title: 'Design System/FormControl/Text',
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
				<DsFormControl.TextInput
					placeholder="Search"
					slots={{ startAdornment: <DsIcon icon="search" size="tiny" /> }}
				/>
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
		slots: {
			endAdornment: (
				<button
					type="button"
					onClick={() => alert('Help clicked!')}
					aria-label="Help"
					style={{
						background: 'none',
						border: 'none',
						padding: '4px',
						cursor: 'pointer',
						color: 'var(--neutral-3)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '16px',
						height: '16px',
						borderRadius: '50%',
					}}
				>
					<DsIcon icon="info" size="small" />
				</button>
			),
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
				<DsFormControl.TextInput
					placeholder="Search"
					slots={{ startAdornment: <DsIcon icon="search" size="tiny" /> }}
				/>
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
			<DsFormControl.TextInput
				placeholder="Input"
				slots={{ startAdornment: <DsIcon icon="call" size="tiny" /> }}
			/>
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
				<DsFormControl.TextInput
					type="text"
					slots={{ endAdornment: <DsIcon icon="visibility" size="tiny" /> }}
				/>
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
					slots={{
						startAdornment: <DsIcon icon="search" size="tiny" />,
						endAdornment: <DsIcon icon="error" size="tiny" />,
					}}
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
