import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import DsTimePicker from './ds-time-picker';
import type { DsTimePickerProps } from './ds-time-picker.types';
import styles from './ds-time-picker.stories.module.scss';

const meta: Meta<typeof DsTimePicker> = {
	title: 'Design System/TimePicker',
	component: DsTimePicker,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		className: { table: { disable: true } },
		ref: { table: { disable: true } },
		slotProps: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<DsTimePickerProps>;

export const Default: Story = {
	args: {
		onChange: fn(),
		onOpenChange: fn(),
	},
	render: function Render(args) {
		const [value, setValue] = useState<Date | null>();

		return (
			<DsTimePicker
				{...args}
				className={styles.container}
				value={value}
				onChange={(v) => {
					setValue(v);
					args.onChange?.(v);
				}}
			/>
		);
	},
};

export const WithDefaultValue: Story = {
	args: {
		className: styles.container,
		defaultValue: (() => {
			const date = new Date();
			date.setHours(14, 30, 0, 0);
			return date;
		})(),
		onChange: fn(),
	},
};

export const Controlled: Story = {
	args: {
		onChange: fn(),
	},
	render: function Render(args) {
		const defaultDate = new Date();
		defaultDate.setHours(9, 45, 0, 0);

		const [value, setValue] = useState<Date | null>(defaultDate);

		return (
			<div>
				<DsTimePicker
					{...args}
					className={styles.container}
					value={value}
					onChange={(v) => {
						setValue(v);
						args.onChange?.(v);
					}}
				/>
				<p className={styles.infoContainer}>
					Value:{' '}
					{value
						? `${String(value.getHours()).padStart(2, '0')}:${String(value.getMinutes()).padStart(2, '0')}`
						: 'undefined'}
				</p>
			</div>
		);
	},
};

export const Disabled: Story = {
	args: {
		className: styles.container,
		value: (() => {
			const date = new Date();
			date.setHours(14, 30, 0, 0);
			return date;
		})(),
		disabled: true,
	},
};

export const ReadOnly: Story = {
	args: {
		className: styles.container,
		value: (() => {
			const date = new Date();
			date.setHours(14, 30, 0, 0);
			return date;
		})(),
		readOnly: true,
	},
};

const createTime = (hours: number, minutes: number) => {
	const date = new Date();
	date.setHours(hours, minutes, 0, 0);
	return date;
};

export const WithMinMax: Story = {
	args: {
		onChange: fn(),
		onOpenChange: fn(),
		min: createTime(9, 30),
		max: createTime(17, 40),
	},
	render: function Render(args) {
		const [value, setValue] = useState<Date | null>(createTime(13, 50));

		return (
			<div>
				<DsTimePicker
					{...args}
					className={styles.container}
					value={value}
					onChange={(v) => {
						setValue(v);
						args.onChange?.(v);
					}}
				/>
				<p className={styles.infoContainer}>
					Value:{' '}
					{value
						? `${String(value.getHours()).padStart(2, '0')}:${String(value.getMinutes()).padStart(2, '0')}`
						: 'none'}
				</p>
				<p className={styles.infoContainer}>
					Range: {args.min?.toLocaleTimeString()} – {args.max?.toLocaleTimeString()}
				</p>
			</div>
		);
	},
};
