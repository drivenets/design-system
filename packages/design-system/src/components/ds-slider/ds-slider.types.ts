import type { CSSProperties, Ref } from 'react';

export const sliderTypes = ['value', 'range'] as const;
export type DsSliderType = (typeof sliderTypes)[number];

export const sliderSizes = ['small', 'medium', 'large'] as const;
export type DsSliderSize = (typeof sliderSizes)[number];

/**
 * Value for a `value` slider (single number) or a `range` slider ([min, max] tuple).
 */
export type DsSliderValue = number | [number, number];

/**
 * Props for the DsSlider component.
 */
export type DsSliderProps = {
	/**
	 * Forwarded ref for the slider root element.
	 */
	ref?: Ref<HTMLDivElement>;

	className?: string;

	style?: CSSProperties;

	/**
	 * Visible label rendered above the track. Becomes the accessible name of the control.
	 */
	label?: string;

	/**
	 * Selection mode: a single value or a `[min, max]` interval.
	 * @default 'value'
	 */
	type?: DsSliderType;

	/**
	 * Drives thumb and track sizing together (S/M/L → 16/20/24px thumb, 2/4/8px track).
	 * Accepts a responsive value (e.g. `{ md: 'small', lg: 'medium' }`).
	 * @default 'medium'
	 */
	size?: DsSliderSize;

	/**
	 * Lowest selectable value.
	 * @default 0
	 */
	min?: number;

	/**
	 * Highest selectable value.
	 * @default 100
	 */
	max?: number;

	/**
	 * Granularity that the value snaps to. Must be greater than 0.
	 * Accepts a responsive value (e.g. `{ md: 5, lg: 1 }`).
	 * @default 1
	 */
	step?: number;

	/**
	 * Controlled value. A number for `type="value"`, a `[min, max]` tuple for `type="range"`.
	 */
	value?: DsSliderValue;

	/**
	 * Uncontrolled initial value. Defaults to `min` for `value` and `[min, max]` for `range`.
	 */
	defaultValue?: DsSliderValue;

	/**
	 * Form field name applied to the hidden inputs.
	 */
	name?: string;

	disabled?: boolean;

	/**
	 * Accessible name per thumb. Required for `type="range"` (e.g. `['Minimum', 'Maximum']`).
	 * Accepts a responsive value (e.g. `{ md: ['Min', 'Max'], lg: ['Minimum', 'Maximum'] }`).
	 */
	thumbLabels?: string[];

	/**
	 * Formats each number shown in the output above the track. Range values are joined with `-`.
	 * @default String
	 */
	formatValue?: (value: number) => string;

	/**
	 * Called live while the value changes (drag or keyboard).
	 */
	onValueChange?: (value: DsSliderValue) => void;

	/**
	 * Called once an interaction settles (pointer released or key committed).
	 */
	onValueChangeEnd?: (value: DsSliderValue) => void;
};
