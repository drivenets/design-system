import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsSelect from './ds-select';
import type { DsSelectOption, DsSelectProps } from './ds-select.types';
import { DsTag } from '../ds-tag';
import { DsIcon } from '../ds-icon';
import { type DsStatus, DsStatusBadge } from '../ds-status-badge';
import styles from './ds-select.stories.module.scss';

const meta: Meta<typeof DsSelect> = {
	title: 'Components/Select',
	component: DsSelect,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		options: {
			control: 'object',
			description: 'Options to display in the select dropdown',
		},
		value: {
			description: 'Controlled internally by each story wrapper',
			table: {
				disable: true,
			},
		},
		onValueChange: {
			action: 'value changed',
			description: 'Callback when the selected value changes',
			table: {
				disable: true,
			},
		},
		onClear: {
			action: 'clear',
			description: 'Callback when clear action is triggered',
			table: {
				disable: true,
			},
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text when no option is selected',
		},
		style: {
			control: 'object',
			description: 'Additional styles to apply to the select container',
		},
		multiple: {
			control: 'boolean',
			description: 'Whether multiple selections are allowed',
		},
		size: {
			control: 'select',
			options: ['default', 'small'],
			description: 'Select size variant',
		},
		clearable: {
			control: 'boolean',
			description: 'Whether the selection can be cleared',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the select is disabled',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsSelect>;

type SingleSelectStoryProps = Omit<
	Extract<DsSelectProps, { multiple?: undefined | false }>,
	'value' | 'onValueChange'
>;
type MultiSelectStoryProps = Omit<Extract<DsSelectProps, { multiple: true }>, 'value' | 'onValueChange'>;
type ControlledSelectWrapperProps = SingleSelectStoryProps | MultiSelectStoryProps;

const ControlledSingleSelectWrapper = (props: SingleSelectStoryProps) => {
	const { clearable, onClear, ...rest } = props;
	const [value, setValue] = useState('');

	if (clearable) {
		return <DsSelect {...rest} clearable onClear={onClear} value={value} onValueChange={setValue} />;
	}

	return <DsSelect {...rest} value={value} onValueChange={setValue} />;
};

const ControlledMultiSelectWrapper = (props: MultiSelectStoryProps) => {
	const { clearable, onClear, ...rest } = props;
	const [value, setValue] = useState<string[]>([]);

	if (clearable) {
		return <DsSelect {...rest} multiple clearable onClear={onClear} value={value} onValueChange={setValue} />;
	}

	return <DsSelect {...rest} multiple value={value} onValueChange={setValue} />;
};

const ControlledSelectWrapper = (props: ControlledSelectWrapperProps) => {
	if (props.multiple) {
		return <ControlledMultiSelectWrapper {...props} />;
	}

	return <ControlledSingleSelectWrapper {...props} />;
};

const mockOptions = [
	{ value: 'apple', label: 'Apple' },
	{ value: 'banana', label: 'Banana' },
	{ value: 'cherry', label: 'Cherry' },
	{ value: 'date', label: 'Date' },
	{ value: 'elderberry', label: 'Elderberry' },
	{ value: 'fig', label: 'Fig' },
	{ value: 'grape', label: 'Grape' },
	{ value: 'honeydew', label: 'Honeydew' },
	{ value: 'indian-fig', label: 'Indian fig' },
	{ value: 'jackfruit', label: 'Jackfruit' },
	{ value: 'kiwi', label: 'Kiwi' },
	{ value: 'lemon', label: 'Lemon' },
	{ value: 'melon', label: 'Melon' },
] satisfies DsSelectOption[];

export const Default: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: mockOptions,
		clearable: true,
		style: {
			width: '200px',
		},
	},
};

export const WithIcons: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: mockOptions.slice(0, 3).map((item) => ({
			...item,
			icon: 'nutrition',
		})),
		style: {
			width: '200px',
		},
		clearable: true,
	},
};

export const Sizes: Story = {
	render: (args) => (
		<div className={styles.sizesContainer}>
			<div className={styles.sizeItem}>
				<div className={styles.sizeLabel}>Default</div>
				<ControlledSelectWrapper {...args} size="default" />
			</div>
			<div className={styles.sizeItem}>
				<div className={styles.sizeLabel}>Small</div>
				<ControlledSelectWrapper {...args} size="small" />
			</div>
		</div>
	),
	args: {
		options: mockOptions.slice(0, 5),
		clearable: true,
		style: {
			width: '200px',
		},
	},
	argTypes: {
		size: {
			table: {
				disable: true,
			},
		},
	},
};

export const WithSearch: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: [
			...mockOptions,
			{
				value: 'nectarine',
				label: 'Nectarine',
			},
		],
		clearable: true,
		style: {
			width: '200px',
		},
	},
};

export const MultiSelect: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: mockOptions,
		style: {
			width: '250px',
		},
		multiple: true,
		clearable: true,
	},
};

export const MultiSelectWithSearch: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: [
			...mockOptions,
			{
				value: 'nectarine',
				label: 'Nectarine',
			},
		],
		style: {
			width: '250px',
		},
		multiple: true,
		clearable: true,
	},
};

const countryOptions: DsSelectOption[] = [
	{ value: 'us', label: 'United States' },
	{ value: 'gb', label: 'United Kingdom' },
	{ value: 'de', label: 'Germany' },
	{ value: 'jp', label: 'Japan' },
	{ value: 'fr', label: 'France' },
];

const renderCountryOption = (option: DsSelectOption) => (
	<span className={styles.customOption}>
		<DsTag label={option.value.toUpperCase()} size="small" />
		{option.label}
	</span>
);

const versionOptions: DsSelectOption[] = [
	{ value: 'v0.8', label: 'v0.8' },
	{ value: 'v1.0', label: 'v1.0' },
	{ value: 'v1.4', label: 'v1.4' },
	{ value: 'v2.3', label: 'v2.3' },
	{ value: 'v3.6', label: 'v3.6' },
	{ value: 'v4.1', label: 'v4.1' },
];

const versionStatusMap: Record<string, { status: DsStatus; label: string }> = {
	'v0.8': { status: 'active', label: 'Live' },
	'v1.0': { status: 'active', label: 'Live' },
	'v1.4': { status: 'running', label: 'Running' },
	'v2.3': { status: 'pending', label: 'Pending' },
	'v3.6': { status: 'draft', label: 'Draft' },
	'v4.1': { status: 'failed', label: 'Failed' },
};

export const CustomRenderOption: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: countryOptions,
		renderOption: renderCountryOption,
		clearable: true,
		style: {
			width: '250px',
		},
	},
};

export const CustomRenderOptionMultiSelect: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: countryOptions,
		renderOption: renderCountryOption,
		multiple: true,
		clearable: true,
		style: {
			width: '300px',
		},
	},
};

export const CustomRenderOptionWithSearch: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: [...mockOptions, ...countryOptions],
		renderOption: (option) => (
			<span className={styles.customOption}>
				<DsIcon icon="public" size="tiny" />
				{option.label}
			</span>
		),
		clearable: true,
		style: {
			width: '300px',
		},
	},
};

export const CustomRenderValue: Story = {
	render: () => {
		const [value, setValue] = useState('');

		const renderValue = (selected: DsSelectOption) => {
			const info = versionStatusMap[selected.value];

			return (
				<span className={styles.customOption}>
					{selected.label}
					{info && (
						<DsStatusBadge status={info.status} label={info.label} size="small" ghost icon="check_circle" />
					)}
				</span>
			);
		};

		return (
			<DsSelect
				options={versionOptions}
				value={value}
				onValueChange={setValue}
				renderValue={renderValue}
				clearable
				style={{ width: '250px' }}
			/>
		);
	},
};

export const CustomRenderValueMultiSelect: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>([]);

		const renderOption = (option: DsSelectOption) => (
			<span className={styles.customOption}>
				<DsTag label={option.value.toUpperCase()} size="small" />
				{option.label}
			</span>
		);

		const renderValue = (selected: DsSelectOption[]) => (
			<span className={styles.customOption}>
				{selected.map((opt) => (
					<DsTag key={opt.value} label={opt.value.toUpperCase()} size="small" />
				))}
			</span>
		);

		return (
			<DsSelect
				options={countryOptions}
				value={value}
				onValueChange={setValue}
				renderOption={renderOption}
				renderValue={renderValue}
				multiple
				clearable
				style={{ width: '300px' }}
			/>
		);
	},
};

export const CustomRenderValueAndOption: Story = {
	render: () => {
		const [value, setValue] = useState('');

		const renderOption = (option: DsSelectOption) => {
			const info = versionStatusMap[option.value];

			if (!info) {
				return option.label;
			}

			return (
				<span className={styles.customOption}>
					{option.label}
					<DsStatusBadge status={info.status} label={info.label} size="small" ghost icon="check_circle" />
				</span>
			);
		};

		const renderValue = (selected: DsSelectOption) => {
			const info = versionStatusMap[selected.value];

			return (
				<span className={styles.customOption}>
					{selected.label}
					{info && (
						<DsStatusBadge status={info.status} label={info.label} size="small" ghost icon="check_circle" />
					)}
				</span>
			);
		};

		return (
			<DsSelect
				options={versionOptions}
				value={value}
				onValueChange={setValue}
				renderOption={renderOption}
				renderValue={renderValue}
				clearable
				style={{ width: '250px' }}
			/>
		);
	},
};

export const CustomRenderValueAndOptionMultiSelect: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>([]);

		const renderOption = (option: DsSelectOption) => {
			const info = versionStatusMap[option.value];

			if (!info) {
				return option.label;
			}

			return (
				<span className={styles.customOption}>
					{option.label}
					<DsStatusBadge status={info.status} label={info.label} size="small" ghost icon="check_circle" />
				</span>
			);
		};

		const renderValue = (selected: DsSelectOption[]) => {
			const option = selected[0];
			const info = option ? versionStatusMap[option.value] : undefined;

			return (
				<span className={styles.customOption}>
					{option?.label}
					{info && (
						<DsStatusBadge status={info.status} label={info.label} size="small" ghost icon="check_circle" />
					)}
					{selected.length > 1 && ` +${String(selected.length - 1)}`}
				</span>
			);
		};

		return (
			<DsSelect
				options={versionOptions}
				value={value}
				onValueChange={setValue}
				renderOption={renderOption}
				renderValue={renderValue}
				multiple
				clearable
				style={{ width: '300px' }}
			/>
		);
	},
};

export const KeyboardInteractions: Story = {
	render: (args) => <ControlledSelectWrapper {...args} />,
	args: {
		options: [
			...mockOptions,
			{
				value: 'nectarine',
				label: 'Nectarine',
			},
		],
		clearable: true,
		style: {
			width: '250px',
		},
	},
};
