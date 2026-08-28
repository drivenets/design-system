import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import DsTimePicker from './ds-time-picker';
import type { DsTimePickerProps } from './ds-time-picker.types';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';

const meta: Meta<typeof DsTimePicker> = {
	title: 'Components/TimePicker',
	component: DsTimePicker,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A time input with a keyboard-friendly field and a dropdown scroller for hours and minutes. Supports min/max bounds, disabled and read-only states.',
			},
		},
	},
	decorators: [
		(Story) => (
			<DsStack width="17.5rem">
				<Story />
			</DsStack>
		),
	],
	argTypes: {
		disabled: { control: 'boolean', description: 'Whether the time picker is disabled' },
		readOnly: { control: 'boolean', description: 'Whether the time picker is read only' },
		className: { table: { disable: true } },
		ref: { table: { disable: true } },
		slotProps: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<DsTimePickerProps>;

const createTime = (hours: number, minutes: number) => {
	const date = new Date(2026, 0, 1);
	date.setHours(hours, minutes, 0, 0);
	return date;
};

const formatTimeLabel = (value: Date | null) =>
	value
		? `${String(value.getHours()).padStart(2, '0')}:${String(value.getMinutes()).padStart(2, '0')}`
		: 'none';

/**
 * The default, uncontrolled time picker. Users can type a time or pick one from
 * the dropdown scroller.
 */
export const Default: Story = {
	args: {
		placeholder: 'hh:mm AM/PM',
	},
};

/**
 * Seed an uncontrolled picker with `defaultValue` to show a pre-selected time.
 */
export const WithDefaultValue: Story = {
	args: {
		defaultValue: createTime(14, 30),
	},
};

/**
 * Disabled time picker that cannot be focused, typed into, or opened.
 */
export const Disabled: Story = {
	args: {
		value: createTime(14, 30),
		disabled: true,
	},
};

/**
 * Read-only time picker that displays a value but blocks edits and the dropdown.
 */
export const ReadOnly: Story = {
	args: {
		value: createTime(14, 30),
		readOnly: true,
	},
};

/**
 * Controlled time picker where the parent owns the value via `value`/`onChange`.
 * Here the value updates from outside every five seconds; while the user is
 * typing, the field waits until blur before showing the external value.
 */
export const Controlled: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [value, setValue] = useState<Date | null>(createTime(9, 45));

		useEffect(() => {
			const interval = setInterval(() => {
				setValue(createTime(Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)));
			}, 5000);

			return () => clearInterval(interval);
		}, []);

		return (
			<DsStack direction="column" gap="var(--sm)">
				<DsTimePicker value={value} onChange={setValue} />
				<DsTypography variant="body-sm-reg" color="secondary">
					Value: {formatTimeLabel(value)}
				</DsTypography>
			</DsStack>
		);
	},
};

/**
 * Constrain selectable times with `min` and `max`. Values outside the range are
 * clamped, and the scroller only offers times within bounds.
 */
export const WithMinMax: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const min = createTime(9, 30);
		const max = createTime(17, 40);
		const [value, setValue] = useState<Date | null>(createTime(13, 50));

		return (
			<DsStack direction="column" gap="var(--sm)">
				<DsTimePicker min={min} max={max} value={value} onChange={setValue} />
				<DsTypography variant="body-sm-reg" color="secondary">
					Value: {formatTimeLabel(value)}
				</DsTypography>
				<DsTypography variant="body-sm-reg" color="secondary">
					Range: {formatTimeLabel(min)} – {formatTimeLabel(max)}
				</DsTypography>
			</DsStack>
		);
	},
};
