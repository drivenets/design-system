import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsPasswordInput from './ds-password-input';
import { DsButtonV3 } from '../ds-button-v3';
import { DsStack } from '../ds-stack';

const meta: Meta<typeof DsPasswordInput> = {
	title: 'Components/PasswordInput',
	component: DsPasswordInput,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A password field that masks input and provides a built-in button to toggle visibility between hidden and plain text.',
			},
		},
	},
	decorators: [
		(Story) => (
			<DsStack width="16rem">
				<Story />
			</DsStack>
		),
	],
	argTypes: {
		size: {
			control: 'select',
			options: ['default', 'small'],
			description: 'The size of the input field',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text for the input',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the input is disabled',
		},
		onChange: { table: { disable: true } },
		onValueChange: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsPasswordInput>;

/**
 * The default password field. Input is masked and the trailing eye button
 * toggles visibility so users can verify what they typed.
 */
export const Default: Story = {
	args: {
		placeholder: 'Enter password',
	},
};

/**
 * Controlled password field where the parent owns the value via `value` and
 * `onValueChange`. Use for sign-up and settings forms that validate the value.
 */
export const Controlled: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [value, setValue] = useState('initial-password');

		return (
			<DsStack direction="column" gap="var(--sm)" alignItems="center">
				<DsPasswordInput placeholder="Enter password" value={value} onValueChange={setValue} />
				<DsStack gap="var(--2xs)">
					<DsButtonV3 variant="secondary" size="small" onClick={() => setValue('new-password')}>
						Set new password
					</DsButtonV3>
					<DsButtonV3 variant="secondary" size="small" onClick={() => setValue('')}>
						Clear password
					</DsButtonV3>
				</DsStack>
			</DsStack>
		);
	},
};

/**
 * Disabled password field that cannot be focused, edited, or toggled.
 */
export const Disabled: Story = {
	args: {
		placeholder: 'Enter password',
		value: 'secret-password',
		disabled: true,
	},
};
