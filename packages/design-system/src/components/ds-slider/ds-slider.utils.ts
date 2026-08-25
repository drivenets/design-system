import type { DsSliderValue } from './ds-slider.types';

/**
 * Normalizes the public value (a number or a `[min, max]` tuple) into the
 * `number[]` shape Ark's slider works with. Returns `undefined` when no value
 * is provided so controlled/uncontrolled detection stays intact.
 */
export const toArray = (value: DsSliderValue | undefined): number[] | undefined => {
	if (value === undefined) {
		return undefined;
	}

	return Array.isArray(value) ? value : [value];
};
