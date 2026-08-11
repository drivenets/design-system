import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsSlider } from './index';
import { sliderSizes, sliderTypes, type DsSliderValue } from './ds-slider.types';

const meta: Meta<typeof DsSlider> = {
	title: 'Components/Slider',
	component: DsSlider,
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		type: {
			control: 'inline-radio',
			options: sliderTypes,
			description: 'Single value or a [min, max] interval',
		},
		size: {
			control: 'inline-radio',
			options: sliderSizes,
			description: 'Drives thumb and track sizing together',
		},
		label: { control: 'text' },
		min: { control: 'number' },
		max: { control: 'number' },
		step: { control: 'number' },
		disabled: { control: 'boolean' },
		className: { table: { disable: true }, control: false },
		style: { table: { disable: true }, control: false },
		ref: { table: { disable: true }, control: false },
		onValueChange: { table: { disable: true }, control: false },
		onValueChangeEnd: { table: { disable: true }, control: false },
	},
};

export default meta;

type Story = StoryObj<typeof DsSlider>;

/**
 * A single-thumb slider selects one number from a bounded range. The output above the
 * track reflects the current value live while dragging.
 */
export const Default: Story = {
	args: {
		label: 'Input label',
		type: 'value',
		defaultValue: 36,
		min: 0,
		max: 100,
	},
};

/**
 * A range slider uses two thumbs to select a `[min, max]` interval; the thumbs cannot
 * cross. Provide `thumbLabels` so each thumb has its own accessible name.
 */
export const Range: Story = {
	args: {
		label: 'Input label',
		type: 'range',
		defaultValue: [36, 60],
		min: 0,
		max: 100,
		thumbLabels: ['Minimum', 'Maximum'],
	},
};

/**
 * Size drives thumb and track thickness together — use `small` in dense layouts.
 */
export const Small: Story = {
	args: {
		label: 'Input label',
		size: 'small',
		defaultValue: 36,
	},
};

/**
 * The `large` size gives a bigger hit target and a thicker track for prominent controls.
 */
export const Large: Story = {
	args: {
		label: 'Input label',
		size: 'large',
		defaultValue: 36,
	},
};

/**
 * Disabled applies to the whole control, including the label row and numeric output.
 */
export const Disabled: Story = {
	args: {
		label: 'Input label',
		defaultValue: 36,
		disabled: true,
	},
};

/**
 * Drive the value from external state via `value` + `onValueChange`. The output can be
 * formatted with `formatValue` (here as a percentage).
 */
export const Controlled: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [value, setValue] = useState<DsSliderValue>(40);

		return (
			<DsSlider
				label="Volume"
				value={value}
				onValueChange={setValue}
				formatValue={(current) => `${String(current)}%`}
			/>
		);
	},
};
