import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsDatePicker } from './index';
import type { DsDatePickerProps } from './ds-date-picker.types';

const meta: Meta<typeof DsDatePicker> = {
	title: 'Components/DatePicker',
	component: DsDatePicker,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<div style={{ width: '320px' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		withTime: { control: 'boolean' },
		closeOnSelect: { control: 'boolean' },
		disablePortal: { control: 'boolean' },
		hideClearButton: { control: 'boolean' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		placeholder: { control: 'text' },
		locale: { control: 'object' },
		className: { table: { disable: true } },
		slotProps: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<DsDatePickerProps>;

/**
 * The default date picker is uncontrolled — the user picks a date from the calendar or
 * types directly into the input. Reach for this when the parent does not need to own
 * the selected value.
 */
export const Default: Story = {
	args: {
		name: 'eventDate',
	},
};

/**
 * Enable `withTime` to show a nested time picker inside the calendar popover. Use it when
 * the user must select both a date and a time in a single control.
 */
export const WithTime: Story = {
	args: {
		withTime: true,
	},
};

/**
 * Pass `defaultValue` to pre-fill the input in uncontrolled mode. The value can still
 * be changed or cleared by the user.
 */
export const WithDefaultValue: Story = {
	args: {
		withTime: true,
		defaultValue: new Date('2024-12-25T14:30:00Z'),
	},
};

/**
 * The disabled state blocks all interaction and dims the control. Uses a fixed `value`
 * for display — no `onChange` is needed when the field is not editable. Use it when the
 * field depends on another selection that has not been made yet.
 */
export const Disabled: Story = {
	args: {
		value: new Date('2024-12-25T14:30:00Z'),
		disabled: true,
	},
};

/**
 * Read-only keeps the value visible but prevents editing. Uses a fixed `value` for
 * display — no `onChange` is needed when the field is not editable.
 */
export const ReadOnly: Story = {
	args: {
		value: new Date('2024-12-25T14:30:00Z'),
		readOnly: true,
	},
};

/**
 * Set `min` and `max` to constrain the selectable date range. Dates outside the range
 * are rejected on blur and cannot be picked from the calendar.
 */
export const WithMinMax: Story = {
	args: {
		withTime: true,
		min: new Date('2024-12-01T00:30:00Z'),
		max: new Date('2025-01-31T23:20:00Z'),
	},
};

/**
 * Hides the clear button even when a value is selected. By default the clear button
 * is shown whenever the picker has a value.
 */
export const HiddenClearButton: Story = {
	args: {
		value: new Date('2024-12-25T14:30:00Z'),
		hideClearButton: true,
	},
};

/**
 * In controlled mode the parent owns `value` and receives updates via `onChange`. Use
 * this pattern when the selected date drives other UI or must be validated externally.
 */
export const Controlled: Story = {
	args: {
		withTime: true,
	},
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render(args) {
		const [value, setValue] = useState<Date | null>(new Date('2026-01-15T09:45:00Z'));

		return <DsDatePicker {...args} value={value} onChange={setValue} />;
	},
};

/**
 * The `locale` prop overrides aria-labels for the calendar trigger, clear button, and
 * time trigger so the component can be translated. Only the strings passed are
 * overridden; omitted keys keep their defaults.
 */
export const Localized: Story = {
	args: {
		value: new Date('2024-12-25T14:30:00Z'),
		withTime: true,
		locale: {
			openCalendarLabel: 'Open calendar',
			clearLabel: 'Clear date',
			timeTriggerLabel: 'Choose time',
		},
	},
};
