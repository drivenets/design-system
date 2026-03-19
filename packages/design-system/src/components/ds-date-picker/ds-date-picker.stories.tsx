import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsDatePicker from './ds-date-picker';
import type { DsDatePickerProps } from './ds-date-picker.types';
import styles from './ds-date-picker.stories.module.scss';

const meta: Meta<typeof DsDatePicker> = {
	title: 'Design System/DatePicker',
	component: DsDatePicker,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		className: { table: { disable: true } },
		slotProps: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<DsDatePickerProps>;

export const Default: Story = {
	render: function Render(args) {
		const [value, setValue] = useState<Date | null>(null);

		return <DsDatePicker {...args} className={styles.container} value={value} onChange={setValue} />;
	},
};

export const WithTime: Story = {
	render: function Render(args) {
		const [value, setValue] = useState<Date | null>(null);

		return <DsDatePicker {...args} withTime className={styles.container} value={value} onChange={setValue} />;
	},
};

export const WithDefaultValue: Story = {
	args: {
		className: styles.container,
		withTime: true,
		defaultValue: new Date('2024-12-25T14:30:00'),
	},
};

export const Controlled: Story = {
	args: {
		withTime: true,
	},
	render: function Render(args) {
		const [value, setValue] = useState<Date | null>(new Date('2026-01-15T09:45:00'));

		return (
			<div className={styles.container}>
				<DsDatePicker {...args} value={value} onChange={setValue} />
				<p className={styles.infoContainer}>Value: {value?.toLocaleString() ?? 'undefined'}</p>
			</div>
		);
	},
};

export const Disabled: Story = {
	args: {
		className: styles.container,
		value: new Date('2024-12-25T14:30:00'),
		disabled: true,
	},
};

export const ReadOnly: Story = {
	args: {
		className: styles.container,
		value: new Date('2024-12-25T14:30:00'),
		readOnly: true,
	},
};

export const WithMinMax: Story = {
	args: {
		withTime: true,
		min: (() => {
			const date = new Date();
			return new Date(date.getFullYear(), date.getMonth(), 1, 0, 30);
		})(),
		max: (() => {
			const date = new Date();
			return new Date(date.getFullYear(), date.getMonth() + 2, 0, 23, 20); // last day of next month
		})(),
	},
	render: function Render(args) {
		const [value, setValue] = useState<Date | null>(null);

		return (
			<div className={styles.container}>
				<DsDatePicker {...args} value={value} onChange={setValue} />
				<p className={styles.helperText}>
					Allowed: {args.min?.toLocaleString()} - {args.max?.toLocaleString()}
				</p>
			</div>
		);
	},
};
