import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsIcon } from '../../ds-icon';
import { DsStack } from '../../ds-stack';
import { controlStatuses } from '../ds-form-control.types';
import DsFormControl from '../ds-form-control';
import styles from './ds-form-control.stories.module.scss';

const meta: Meta<typeof DsFormControl> = {
	title: 'Components/FormControl/Textarea',
	component: DsFormControl,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'Form control wrapper that adds a label, description, validation status, and message around a textarea.',
			},
		},
	},
	decorators: [
		(Story) => (
			<DsStack width="19rem">
				<Story />
			</DsStack>
		),
	],
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
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsFormControl>;

/** Baseline multi-line field with a label, required marker, and a helper message. */
export const Default: Story = {
	args: {
		label: 'Input label',
		required: true,
		message: 'This is a message',
		children: <DsFormControl.Textarea placeholder="Input" />,
	},
};

/** Adds a description above the textarea to explain the field before the user types. */
export const WithDescription: Story = {
	args: {
		label: 'Input label',
		required: true,
		children: (
			<>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
				</DsFormControl.Description>
				<DsFormControl.Textarea placeholder="Search" />
			</>
		),
	},
};

/** Surfaces contextual help through an end-adornment button beside the field. */
export const WithHelpIcon: Story = {
	args: {
		label: 'Input label',
		required: true,
		slots: {
			endAdornment: (
				<button type="button" className={styles.helpIcon} aria-label="Help">
					<DsIcon icon="info" size="small" />
				</button>
			),
		},
		children: (
			<>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
				</DsFormControl.Description>
				<DsFormControl.Textarea placeholder="Search" />
			</>
		),
	},
};

/** Success status confirms the entered value passed validation. */
export const Success: Story = {
	args: {
		status: 'success',
		label: 'Input label',
		message: 'This is a success caption under a text input.',
		messageIcon: 'check_circle',
		children: (
			<>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
				</DsFormControl.Description>
				<DsFormControl.Textarea />
			</>
		),
	},
};

/** Error status flags an invalid value and pairs the message with an error icon. */
export const Error: Story = {
	args: {
		status: 'error',
		label: 'Input label',
		message: 'This is an error caption under a text input.',
		messageIcon: 'error',
		children: (
			<>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
				</DsFormControl.Description>
				<DsFormControl.Textarea />
			</>
		),
	},
};

/** Warning status highlights a value that needs attention without blocking submission. */
export const Warning: Story = {
	args: {
		status: 'warning',
		label: 'Input label',
		message: 'This is a warning caption under a text input.',
		messageIcon: 'info',
		children: (
			<>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
				</DsFormControl.Description>
				<DsFormControl.Textarea />
			</>
		),
	},
};

/** Disabled state prevents interaction while keeping the field visible. */
export const Disabled: Story = {
	args: {
		label: 'Input label',
		children: (
			<>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
				</DsFormControl.Description>
				<DsFormControl.Textarea placeholder="Disabled Input" disabled />
			</>
		),
	},
};
