import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DsDatePicker } from '../ds-date-picker';
import { DsSegmentGroup } from '../ds-segment-group';
import { DsDateRangePicker } from './index';
import {
	dateRangePickerOrientations,
	type DateRangeValue,
	type DsDateRangePickerProps,
} from './ds-date-range-picker.types';
import { DsStack } from '../ds-stack';

const meta: Meta<typeof DsDateRangePicker> = {
	title: 'Components/DateRangePicker',
	component: DsDateRangePicker,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<div style={{ width: '500px' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		orientation: { control: 'select', options: dateRangePickerOrientations },
		className: { table: { disable: true } },
		slotProps: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<DsDateRangePickerProps>;

/**
 * The default range picker is uncontrolled with empty start and end dates. Value shape is
 * `[startDate, endDate]` where each element is a `Date` or `null`.
 */
// eslint-disable-next-line @drivenets/ds-internal/no-empty-story
export const Default: Story = {};

/**
 * Enable `withTime` to show a nested time picker inside each date field's calendar popover.
 */
export const WithTime: Story = {
	args: {
		withTime: true,
	},
};

/**
 * Pass `defaultValue` as a `[start, end]` tuple to pre-fill the range in uncontrolled mode.
 * The user can still change or clear either date.
 */
export const WithDefaultValue: Story = {
	args: {
		withTime: true,
		defaultValue: [new Date('2024-12-25T14:30:00'), new Date('2024-12-31T18:00:00')],
	},
};

/** Stacks start and end pickers vertically instead of side by side. */
export const Vertical: Story = {
	decorators: [
		(Story) => (
			<div style={{ width: '320px' }}>
				<Story />
			</div>
		),
	],
	args: {
		orientation: 'vertical',
	},
};

/**
 * Set `min` and `max` to constrain the selectable date range for both pickers. Dates outside
 * the range cannot be picked from the calendar.
 */
export const WithMinMax: Story = {
	args: {
		withTime: true,
		min: new Date('2024-12-01T00:30:00'),
		max: new Date('2025-01-31T23:20:00'),
	},
};

/**
 * The disabled state blocks all interaction on both pickers. Use `value` to show a fixed range.
 */
export const Disabled: Story = {
	args: {
		value: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')],
		disabled: true,
	},
};

/**
 * Read-only keeps the range visible but prevents editing. Inputs remain focusable for
 * copy/accessibility but values cannot be changed.
 */
export const ReadOnly: Story = {
	args: {
		value: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')],
		readOnly: true,
	},
};

/** Hides the "Clear all" action even when dates are selected. */
export const HiddenClearAll: Story = {
	args: {
		defaultValue: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')],
		hideClearAll: true,
	},
};

/**
 * Override the default "Start date" / "End date" labels via `slotProps` on the wrapping
 * form controls.
 */
export const CustomLabels: Story = {
	args: {
		slotProps: {
			startDateFormControl: { label: 'From' },
			endDateFormControl: { label: 'To' },
		},
	},
};

/**
 * In controlled mode the parent owns `value` and receives updates via `onChange`. Use this
 * when the selected range drives other UI or must be validated externally.
 */
export const Controlled: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [value, setValue] = useState<DateRangeValue>([null, null]);

		return <DsDateRangePicker value={value} onChange={setValue} />;
	},
};

/** Custom clear-all button label via the `locale` prop. */
export const Localized: Story = {
	args: {
		locale: { clearAllLabel: 'Effacer tout' },
		defaultValue: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')],
	},
};

/**
 * Composition pattern: toggle between a single date picker and a range picker with a segment
 * group. Not a built-in component feature — implement with local state in the parent.
 */
export const DateOrRange: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	decorators: [
		(Story) => (
			<DsStack direction="row" gap="xs" alignItems="flex-end">
				<Story />
			</DsStack>
		),
	],
	render: function Render() {
		const [mode, setMode] = useState('date');
		const [dateValue, setDateValue] = useState<Date | null>(null);
		const [rangeValue, setRangeValue] = useState<DateRangeValue>([null, null]);

		return (
			<>
				<DsSegmentGroup.Root value={mode} onValueChange={(v) => setMode(v ?? 'date')} size="default">
					<DsSegmentGroup.Item value="date" label="Date" />
					<DsSegmentGroup.Item value="range" label="Range" />
				</DsSegmentGroup.Root>

				{mode === 'date' ? (
					<DsDatePicker value={dateValue} onChange={setDateValue} />
				) : (
					<DsDateRangePicker value={rangeValue} onChange={setRangeValue} />
				)}
			</>
		);
	},
};
