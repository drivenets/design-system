import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsTextInput from './ds-text-input';
import { textInputSizes } from './ds-text-input.types';
import { DsButtonV3 } from '../ds-button-v3';
import { DsIcon } from '../ds-icon';
import { DsStack } from '../ds-stack';

const meta: Meta<typeof DsTextInput> = {
	title: 'Components/TextInput',
	component: DsTextInput,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A flexible single-line text input that supports sizes, disabled/read-only states, and start/end adornments via the `slots` prop.',
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
		onChange: { table: { disable: true } },
		onValueChange: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsTextInput>;

/**
 * The default single-line text input. Use it for free-form short text such as
 * names, titles, or search terms.
 */
export const Default: Story = {
	args: {
		placeholder: 'Enter text...',
	},
};

/**
 * Compact input for dense forms and toolbars where vertical space is limited.
 */
export const Small: Story = {
	args: {
		size: 'small',
		placeholder: 'Small input...',
	},
};

/**
 * Larger input for prominent, standalone fields such as a primary search box.
 */
export const Large: Story = {
	args: {
		size: 'large',
		placeholder: 'Large input...',
	},
};

/**
 * Pre-filled input rendered with an initial `value`. Use `defaultValue` for
 * uncontrolled fields, or `value` when the parent owns the state.
 */
export const WithValue: Story = {
	args: {
		value: 'Hello World',
		placeholder: 'Enter text...',
	},
};

/**
 * Disabled input that cannot be focused or edited. Use for fields that are
 * temporarily unavailable.
 */
export const Disabled: Story = {
	args: {
		placeholder: 'Disabled input',
		disabled: true,
	},
};

/**
 * Controlled input where the parent owns the value via `value` and
 * `onValueChange`. Use this pattern when other UI needs to react to the value.
 */
export const Controlled: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [value, setValue] = useState('initial value');

		return (
			<DsStack direction="column" gap="var(--sm)" alignItems="center">
				<DsTextInput placeholder="Controlled input" value={value} onValueChange={setValue} />
				<DsStack gap="var(--2xs)">
					<DsButtonV3 variant="secondary" size="small" onClick={() => setValue('updated value')}>
						Update value
					</DsButtonV3>
					<DsButtonV3 variant="secondary" size="small" onClick={() => setValue('')}>
						Clear value
					</DsButtonV3>
				</DsStack>
			</DsStack>
		);
	},
};

/**
 * Prefix the field with an icon using `slots.startAdornment`, for example a
 * search glyph on a search input.
 */
export const WithStartAdornment: Story = {
	args: {
		placeholder: 'Search...',
		slots: {
			startAdornment: <DsIcon icon="search" size="tiny" />,
		},
	},
};

/**
 * Append an interactive control with `slots.endAdornment`, such as a clear
 * button that resets the controlled value.
 */
export const WithClearButton: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [value, setValue] = useState('');

		return (
			<DsTextInput
				placeholder="Enter text..."
				value={value}
				onValueChange={setValue}
				slots={{
					endAdornment: (
						<DsButtonV3
							variant="tertiary"
							size="small"
							icon="close"
							aria-label="Clear"
							onClick={() => setValue('')}
						/>
					),
				}}
			/>
		);
	},
};

/**
 * Combine start and end adornments — here a search icon and a clear button — to
 * build a compact search field.
 */
export const WithSearchAndClear: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
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
						<DsButtonV3
							variant="tertiary"
							size="small"
							icon="close"
							aria-label="Clear"
							onClick={() => setValue('')}
						/>
					),
				}}
			/>
		);
	},
};

/**
 * Set `type="email"` for email entry and pair it with a send adornment. The
 * `type` prop flows through to the native input for validation and keyboards.
 */
export const Email: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [value, setValue] = useState('');

		return (
			<DsTextInput
				type="email"
				placeholder="Enter email address..."
				value={value}
				onValueChange={setValue}
				slots={{
					endAdornment: <DsButtonV3 variant="tertiary" size="small" icon="send" aria-label="Send" />,
				}}
			/>
		);
	},
};

/**
 * Adornments inherit the disabled state of the input, so icon buttons render
 * muted and non-interactive when the field is disabled.
 */
export const DisabledAdornments: Story = {
	args: {
		value: 'Disabled value',
		disabled: true,
		slots: {
			startAdornment: <DsButtonV3 variant="tertiary" size="small" icon="lock" aria-label="Locked" disabled />,
			endAdornment: (
				<DsButtonV3
					variant="tertiary"
					size="small"
					icon="visibility"
					aria-label="Toggle visibility"
					disabled
				/>
			),
		},
	},
};
