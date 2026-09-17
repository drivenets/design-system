import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsButtonV3 } from '../../ds-button-v3';
import { DsStack } from '../../ds-stack';
import { controlStatuses } from '../ds-form-control.types';
import DsFormControl from '../ds-form-control';

const meta: Meta<typeof DsFormControl> = {
	title: 'Components/FormControl/CodeInput',
	component: DsFormControl,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'Form control wrapper that adds a label, description, validation status, and message around a code field.',
			},
		},
	},
	decorators: [
		(Story) => (
			<DsStack width="24rem">
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
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		children: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsFormControl>;

/** Baseline code field with a label, required marker, and a helper message. */
export const Default: Story = {
	args: {
		label: 'Query',
		required: true,
		message: 'Expand the field to search within a long query.',
		children: <DsFormControl.CodeInput placeholder="Enter a query" />,
	},
};

/** Adds a description above the field to explain the expected syntax. */
export const WithDescription: Story = {
	args: {
		label: 'Query',
		required: true,
	},
	render: (args) => (
		<DsFormControl {...args}>
			<DsFormControl.Description>
				Combine attribute comparisons with AND, OR and parentheses.
			</DsFormControl.Description>
			<DsFormControl.CodeInput placeholder="Enter a query" />
		</DsFormControl>
	),
};

/**
 * Contextual help belongs on the label row. The field itself owns only the expand
 * toggle, so a help affordance goes here rather than inside the field.
 */
export const WithHelpIcon: Story = {
	args: {
		label: 'Query',
		required: true,
		slots: {
			endAdornment: <DsButtonV3 variant="tertiary" size="small" icon="help" aria-label="Query syntax" />,
		},
	},
	render: (args) => (
		<DsFormControl {...args}>
			<DsFormControl.CodeInput defaultValue="Status = Active AND trigger = Scheduled" />
		</DsFormControl>
	),
};

/** Error status flags an invalid expression and pairs the message with an error icon. */
export const Error: Story = {
	args: {
		status: 'error',
		label: 'Query',
		message: 'Unexpected token near "AND".',
		messageIcon: 'error',
	},
	render: (args) => (
		<DsFormControl {...args}>
			<DsFormControl.CodeInput defaultValue="Status = Active AND trigger = Scheduled" />
		</DsFormControl>
	),
};

/** Disabled keeps the field visible but blocks both editing and the panel. */
export const Disabled: Story = {
	args: {
		label: 'Query',
	},
	render: (args) => (
		<DsFormControl {...args}>
			<DsFormControl.CodeInput defaultValue="Status = Active AND trigger = Scheduled" disabled />
		</DsFormControl>
	),
};
