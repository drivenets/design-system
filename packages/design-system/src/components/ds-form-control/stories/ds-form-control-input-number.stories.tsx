import type { Meta, StoryObj } from '@storybook/react-vite';
import { controlStatuses } from '../ds-form-control.types';
import { DsButtonV3 } from '../../ds-button-v3';
import { DsStack } from '../../ds-stack';
import DsFormControl from '../ds-form-control';

const meta: Meta<typeof DsFormControl> = {
	title: 'Components/FormControl/Number',
	component: DsFormControl,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'Form control wrapper that adds a label, description, validation status, and message around a number input.',
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

/** Baseline number field with min/max bounds, stepper, and a helper message. */
export const Default: Story = {
	args: {
		label: 'Input label',
		required: true,
		message: 'This is a message',
		children: (
			<DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
		),
	},
};

/** Adds a description above the input to explain the field before the user types. */
export const WithDescription: Story = {
	args: {
		label: 'Input label',
		required: true,
		children: (
			<>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
				</DsFormControl.Description>
				<DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
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
			endAdornment: <DsButtonV3 variant="tertiary" size="small" icon="info" aria-label="Help" />,
		},
		children: (
			<>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
				</DsFormControl.Description>
				<DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
			</>
		),
	},
};

/** Success status confirms the entered value passed validation. */
export const Success: Story = {
	args: {
		status: 'success',
		label: 'Input label',
		message: 'This is a success caption under a number input.',
		messageIcon: 'check_circle',
		children: (
			<>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
				</DsFormControl.Description>
				<DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
			</>
		),
	},
};

/** Error status flags an invalid value and pairs the message with an error icon. */
export const Error: Story = {
	args: {
		status: 'error',
		label: 'Input label',
		message: 'This is an error caption under a number input.',
		messageIcon: 'error',
		children: (
			<>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
				</DsFormControl.Description>
				<DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
			</>
		),
	},
};

/** Warning status highlights a value that needs attention without blocking submission. */
export const Warning: Story = {
	args: {
		status: 'warning',
		label: 'Input label',
		message: 'This is a warning caption under a number input.',
		messageIcon: 'info',
		children: (
			<>
				<DsFormControl.Description>
					Optional helper text that describes the field in up to two lines.
				</DsFormControl.Description>
				<DsFormControl.NumberInput placeholder="Enter number" min={1} max={100} step={1} defaultValue={10} />
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
				<DsFormControl.NumberInput
					placeholder="Disabled Input"
					disabled
					min={1}
					max={100}
					step={1}
					defaultValue={10}
				/>
			</>
		),
	},
};
