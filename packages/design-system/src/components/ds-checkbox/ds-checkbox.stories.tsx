import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsCheckbox from './ds-checkbox';
import { DsCheckboxGroup, useCheckboxSelectAll } from '../ds-checkbox-group';
import { checkboxVariants } from './ds-checkbox.types';
import styles from './ds-checkbox.stories.module.scss';

const meta: Meta<typeof DsCheckbox> = {
	title: 'Design System/Checkbox',
	component: DsCheckbox,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		variant: {
			options: checkboxVariants,
			control: 'radio',
		},
		checked: {
			control: 'radio',
			options: [true, false, 'indeterminate'],
			description: 'Controlled checked state. Accepts `true`, `false`, or `"indeterminate"`',
		},
		onCheckedChange: {
			description: 'Callback invoked when the checked state changes',
		},
		label: {
			control: 'text',
			description: 'Label for the checkbox',
		},
		labelInfo: {
			control: 'text',
			description: 'Additional label info for the checkbox',
		},
		disabled: {
			control: 'boolean',
			description: 'Disables the checkbox, preventing user interaction',
		},
		className: {
			control: 'text',
			description: 'Additional CSS class names',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsCheckbox>;

const label = 'Text for label';
const labelInfo = 'Text for info';
const frameworkItems = [
	{ label: 'React', value: 'react' },
	{ label: 'Solid', value: 'solid' },
	{ label: 'Vue', value: 'vue' },
];

const frameworkValues = frameworkItems.map((item) => item.value);

export const Default: Story = {
	args: {
		label,
		labelInfo,
		className: 'custom-checkbox',
	},
};

export const Indeterminate: Story = {
	render: function Render() {
		const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');

		return (
			<DsCheckbox
				label={label}
				labelInfo={labelInfo}
				checked={checked}
				onCheckedChange={(newState) => setChecked(newState)}
			/>
		);
	},
};

export const Disabled: Story = {
	render: () => (
		<div className={styles.stack}>
			<DsCheckbox label={label} labelInfo={labelInfo} disabled />
			<DsCheckbox label={label} labelInfo={labelInfo} disabled checked />
			<DsCheckbox label={label} labelInfo={labelInfo} disabled checked="indeterminate" />
		</div>
	),
};

export const ReadOnly: Story = {
	args: {
		label,
		labelInfo,
		readOnly: true,
		checked: true,
	},
};

export const Warning: Story = {
	args: {
		variant: 'warning',
	},
};

export const WarningWithLabel: Story = {
	args: {
		variant: 'warning',
		label,
		labelInfo,
	},
};

export const WarningIndeterminate: Story = {
	render: function Render() {
		const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');

		return (
			<DsCheckbox
				variant="warning"
				label={label}
				labelInfo={labelInfo}
				checked={checked}
				onCheckedChange={(newState) => setChecked(newState)}
			/>
		);
	},
};

export const Group: Story = {
	render: function Render() {
		const [value, setValue] = useState<string[]>(['react']);

		return (
			<div className={styles.stack}>
				<output className={styles.output}>Selected: {value.join(', ')}</output>
				<DsCheckboxGroup value={value} onValueChange={setValue} name="framework">
					{frameworkItems.map((item) => (
						<DsCheckbox key={item.value} label={item.label} value={item.value} />
					))}
				</DsCheckboxGroup>
			</div>
		);
	},
};

export const SelectAll: Story = {
	render: function Render() {
		const [value, setValue] = useState<string[]>([]);
		const { selectAllState, onSelectAllChange } = useCheckboxSelectAll({
			value,
			allValues: frameworkValues,
			onValueChange: setValue,
		});

		return (
			<div className={styles.stack}>
				<DsCheckbox label="Select all" checked={selectAllState} onCheckedChange={onSelectAllChange} />
				<DsCheckboxGroup
					className={styles.groupIndented}
					value={value}
					onValueChange={setValue}
					name="framework"
				>
					{frameworkItems.map((item) => (
						<DsCheckbox key={item.value} label={item.label} value={item.value} />
					))}
				</DsCheckboxGroup>
			</div>
		);
	},
};
