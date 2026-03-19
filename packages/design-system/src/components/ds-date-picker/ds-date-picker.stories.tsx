import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import MockDate from 'mockdate';
import DsDatePicker from './ds-date-picker';
import type { DsDatePickerProps } from './ds-date-picker.types';
import styles from './ds-date-picker.stories.module.scss';

// Mock system time to January 15, 2026 for consistent test dates
const MOCK_DATE = new Date('2026-01-15T12:00:00');

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
	// We use mockdate here and not vi.useFakeTimers() because the latter is not compatible with Storybook.
	// See https://github.com/storybookjs/storybook/issues/31400#issuecomment-2943382690 for more details.
	beforeEach: () => {
		MockDate.set(MOCK_DATE);

		return () => {
			MockDate.reset();
		};
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
				<p className={styles.infoContainer}>Value: {value?.toISOString() ?? 'undefined'}</p>
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
		min: new Date('2026-01-01T00:30:00'),
		max: new Date('2026-03-31T23:20:00'),
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
