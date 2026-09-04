import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsSelect from './ds-select';
import { type DsSelectOption, selectSizes } from './ds-select.types';
import { DsTag } from '../ds-tag';
import { type DsStatus, DsStatusBadge } from '../ds-status-badge';
import { DsStack } from '../ds-stack';

const meta: Meta<typeof DsSelect> = {
	title: 'Components/Select',
	component: DsSelect,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A dropdown for choosing one or many options from a list. Supports search, icons, custom option/value rendering, and single or multiple selection. Always controlled via `value` and `onValueChange`.',
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
			options: selectSizes,
			description: 'Select size variant',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text when no option is selected',
		},
		multiple: {
			control: 'boolean',
			description: 'Whether multiple selections are allowed',
		},
		clearable: {
			control: 'boolean',
			description: 'Whether the selection can be cleared',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the select is disabled',
		},
		options: { table: { disable: true } },
		value: { table: { disable: true } },
		onValueChange: { table: { disable: true } },
		onClear: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsSelect>;

/**
 * The default single-select with a clear affordance. The parent owns the
 * selected `value`; pass `clearable` with `onClear` to allow resetting it.
 */
export const Default: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [value, setValue] = useState('');

		return (
			<DsSelect
				options={[
					{ value: 'apple', label: 'Apple' },
					{ value: 'banana', label: 'Banana' },
					{ value: 'cherry', label: 'Cherry' },
					{ value: 'date', label: 'Date' },
					{ value: 'elderberry', label: 'Elderberry' },
				]}
				value={value}
				onValueChange={setValue}
				clearable
				onClear={() => setValue('')}
			/>
		);
	},
};

/**
 * Attach an `icon` to each option to reinforce its meaning in the dropdown.
 */
export const WithIcons: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [value, setValue] = useState('');

		return (
			<DsSelect
				options={[
					{ value: 'apple', label: 'Apple', icon: 'nutrition' },
					{ value: 'banana', label: 'Banana', icon: 'nutrition' },
					{ value: 'cherry', label: 'Cherry', icon: 'nutrition' },
				]}
				value={value}
				onValueChange={setValue}
			/>
		);
	},
};

/**
 * A searchable single-select. The filter input appears automatically once the
 * option list passes the search threshold (more than 13 options), so users can
 * narrow a long list by typing.
 */
export const WithSearch: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [value, setValue] = useState('');

		return (
			<DsSelect
				options={[
					{ value: 'apple', label: 'Apple' },
					{ value: 'banana', label: 'Banana' },
					{ value: 'cherry', label: 'Cherry' },
					{ value: 'date', label: 'Date' },
					{ value: 'elderberry', label: 'Elderberry' },
					{ value: 'fig', label: 'Fig' },
					{ value: 'grape', label: 'Grape' },
					{ value: 'honeydew', label: 'Honeydew' },
					{ value: 'kiwi', label: 'Kiwi' },
					{ value: 'lemon', label: 'Lemon' },
					{ value: 'mango', label: 'Mango' },
					{ value: 'nectarine', label: 'Nectarine' },
					{ value: 'orange', label: 'Orange' },
					{ value: 'papaya', label: 'Papaya' },
					{ value: 'quince', label: 'Quince' },
				]}
				value={value}
				onValueChange={setValue}
			/>
		);
	},
};

/**
 * Multi-select mode. Set `multiple` and hold the value as an array; selected
 * options render as chips inside the trigger.
 */
export const MultiSelect: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [value, setValue] = useState<string[]>([]);

		return (
			<DsSelect
				multiple
				options={[
					{ value: 'apple', label: 'Apple' },
					{ value: 'banana', label: 'Banana' },
					{ value: 'cherry', label: 'Cherry' },
					{ value: 'date', label: 'Date' },
					{ value: 'elderberry', label: 'Elderberry' },
				]}
				value={value}
				onValueChange={setValue}
				clearable
				onClear={() => setValue([])}
			/>
		);
	},
};

/**
 * Customize how each dropdown option renders with `renderOption`. The string
 * `label` is still used for search, chips, and accessibility.
 */
export const CustomRenderOption: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [value, setValue] = useState('');

		return (
			<DsSelect
				options={[
					{ value: 'us', label: 'United States' },
					{ value: 'gb', label: 'United Kingdom' },
					{ value: 'de', label: 'Germany' },
					{ value: 'jp', label: 'Japan' },
				]}
				value={value}
				onValueChange={setValue}
				renderOption={(option) => (
					<DsStack gap="var(--2xs)" alignItems="center">
						<DsTag label={option.value.toUpperCase()} size="small" />
						{option.label}
					</DsStack>
				)}
			/>
		);
	},
};

/**
 * Customize the selected value shown in the trigger with `renderValue` — here a
 * status badge next to the label communicates each version's state.
 */
export const CustomRenderValue: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const versionStatus: Record<string, { status: DsStatus; label: string }> = {
			'v1.0': { status: 'active', label: 'Live' },
			'v2.3': { status: 'pending', label: 'Pending' },
			'v3.6': { status: 'draft', label: 'Draft' },
		};
		const [value, setValue] = useState('');

		return (
			<DsSelect
				options={[
					{ value: 'v1.0', label: 'v1.0' },
					{ value: 'v2.3', label: 'v2.3' },
					{ value: 'v3.6', label: 'v3.6' },
				]}
				value={value}
				onValueChange={setValue}
				renderValue={(selected) => {
					const info = versionStatus[selected.value];

					return (
						<DsStack gap="var(--2xs)" alignItems="center">
							{selected.label}
							{info && <DsStatusBadge status={info.status} label={info.label} size="small" ghost />}
						</DsStack>
					);
				}}
			/>
		);
	},
};

/**
 * Size showcase. Not a usage example — see the individual stories for real code.
 */
export const Sizes: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: {
			canvas: { sourceState: 'none' },
		},
	},
	render: function Render() {
		const options: DsSelectOption[] = [
			{ value: 'apple', label: 'Apple' },
			{ value: 'banana', label: 'Banana' },
			{ value: 'cherry', label: 'Cherry' },
		];
		const [value, setValue] = useState('');

		return (
			<DsStack gap="var(--standard)" alignItems="center">
				{selectSizes.map((size) => (
					<DsSelect key={size} size={size} options={options} value={value} onValueChange={setValue} />
				))}
			</DsStack>
		);
	},
};
