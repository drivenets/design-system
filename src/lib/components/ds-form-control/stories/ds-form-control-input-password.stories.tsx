import type { Meta, StoryObj } from '@storybook/react';
import { controlStatuses, DsIcon } from '@design-system/ui';
import DsFormControl from '../ds-form-control';
import { checkDisabled, DefaultDescription, sanityCheck } from './ds-form-control-stories-shared';
import styles from './ds-form-control.stories.module.scss';

const meta: Meta<typeof DsFormControl> = {
	title: 'Design System/FormControl/Password',
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
		children: <DsFormControl.PasswordInput placeholder="Enter password" />,
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
		children: <DsFormControl.PasswordInput placeholder="Enter password" />,
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
		children: <DsFormControl.PasswordInput placeholder="Password input with custom styling" />,
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
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.PasswordInput placeholder="Enter password" />
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
					className={styles.helpIcon}
					onClick={() => alert('Help clicked!')}
					aria-label="Help"
				>
					<DsIcon icon="info" size="small" />
				</button>
			),
		},
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.PasswordInput placeholder="Search" />
			</>
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
		message: 'This is a success caption under a password input.',
		messageIcon: 'check_circle',
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.PasswordInput />
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
		message: 'This is an error caption under a password input.',
		messageIcon: 'error',
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.PasswordInput />
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
		message: 'This is a warning caption under a password input.',
		messageIcon: 'info',
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.PasswordInput />
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
		children: (
			<>
				<DsFormControl.Description>
					<DefaultDescription />
				</DsFormControl.Description>
				<DsFormControl.PasswordInput placeholder="Disabled Input" disabled />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		await checkDisabled(canvasElement);
	},
};
