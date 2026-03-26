import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import DsDateRangePicker from './ds-date-range-picker';
import { DsDatePicker } from '../ds-date-picker';
import { DsSegmentGroup } from '../ds-segment-group';
import {
	dateRangePickerOrientations,
	type DateRangeValue,
	type DsDateRangePickerProps,
} from './ds-date-range-picker.types';
import styles from './ds-date-range-picker.stories.module.scss';

const meta: Meta<typeof DsDateRangePicker> = {
	title: 'Design System/DateRangePicker',
	component: DsDateRangePicker,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		orientation: { control: 'select', options: dateRangePickerOrientations },
		className: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<DsDateRangePickerProps>;

export const Default: Story = {
	render: function Render(args) {
		const [value, setValue] = useState<DateRangeValue>([null, null]);

		return <DsDateRangePicker {...args} className={styles.container} value={value} onChange={setValue} />;
	},
};

export const WithTime: Story = {
	args: {
		withTime: true,
	},
	render: function Render(args) {
		const [value, setValue] = useState<DateRangeValue>([null, null]);

		return <DsDateRangePicker {...args} className={styles.container} value={value} onChange={setValue} />;
	},
};

export const Vertical: Story = {
	args: {
		orientation: 'vertical',
	},
	render: function Render(args) {
		const [value, setValue] = useState<DateRangeValue>([null, null]);

		return (
			<DsDateRangePicker {...args} className={styles.verticalContainer} value={value} onChange={setValue} />
		);
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
		const [value, setValue] = useState<DateRangeValue>([null, null]);

		return (
			<div>
				<DsDateRangePicker {...args} className={styles.container} value={value} onChange={setValue} />
				<p className={styles.helperText}>
					Allowed: {args.min?.toLocaleString()} - {args.max?.toLocaleString()}
				</p>
			</div>
		);
	},
};

export const Disabled: Story = {
	args: {
		className: styles.container,
		value: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')],
		disabled: true,
	},
};

export const HiddenClearAll: Story = {
	args: {
		hideClearAll: true,
	},
	render: function Render(args) {
		const [value, setValue] = useState<DateRangeValue>([
			new Date('2026-01-10T00:00:00'),
			new Date('2026-01-20T00:00:00'),
		]);

		return <DsDateRangePicker {...args} className={styles.container} value={value} onChange={setValue} />;
	},
};

export const DateOrRange: Story = {
	render: function Render(args) {
		const [mode, setMode] = useState<string>('date');
		const [dateValue, setDateValue] = useState<Date | null>(null);
		const [rangeValue, setRangeValue] = useState<DateRangeValue>([null, null]);

		return (
			<div className={styles.dateOrRangeContainer}>
				<DsSegmentGroup.Root value={mode} onValueChange={(v) => setMode(v ?? 'date')} size="default">
					<DsSegmentGroup.Item value="date" label="Date" />
					<DsSegmentGroup.Item value="range" label="Range" />
				</DsSegmentGroup.Root>

				{mode === 'date' ? (
					<DsDatePicker
						value={dateValue}
						onChange={(v) => {
							setDateValue(v);
							args.onChange?.([v, null]);
						}}
						min={args.min}
						max={args.max}
						withTime={args.withTime}
						disabled={args.disabled}
						readOnly={args.readOnly}
					/>
				) : (
					<DsDateRangePicker
						{...args}
						value={rangeValue}
						onChange={(v) => {
							setRangeValue(v);
							args.onChange?.(v);
						}}
					/>
				)}
			</div>
		);
	},
};
