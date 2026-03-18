import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
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

const createTime = (hours: number, minutes: number) => {
	const date = new Date();
	date.setHours(hours, minutes, 0, 0);
	return date;
};

export const Default: Story = {
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
		defaultValue: createTime(14, 30),
	},
};

export const Controlled: Story = {
	render: function Render(args) {
		const defaultDate = createTime(9, 45);

		const [value, setValue] = useState<Date | null>(defaultDate);

		useEffect(() => {
			const interval = setInterval(() => {
				const date = createTime(Math.floor(Math.random() * 24), Math.floor(Math.random() * 60));
				setValue(date);
			}, 5000);

			return () => clearInterval(interval);
		}, []);

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
				<p className={styles.infoContainer}>In this example:</p>
				<p className={styles.infoContainer}>
					Value is randomly changing every 5 seconds. As user is typing the input do not show the new value
					until input loses focus.
				</p>
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
		value: createTime(14, 30),
		disabled: true,
	},
};

export const ReadOnly: Story = {
	args: {
		className: styles.container,
		value: createTime(14, 30),
		readOnly: true,
	},
};

export const WithMinMax: Story = {
	args: {
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
