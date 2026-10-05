import { useControlled } from '../../utils/use-controlled';

/**
 * `useControlled` that also reports changes while uncontrolled, so `defaultX` pairs with `onXChange`
 */
export const useReportedState = <T>(
	value: T | undefined,
	onChange: ((value: T) => void) | undefined,
	defaultValue: T,
) => {
	const [current, setCurrent] = useControlled(value, onChange, defaultValue);

	const set = (next: T) => {
		setCurrent(next);

		// While controlled, `setCurrent` already is `onChange`.
		if (value === undefined) {
			onChange?.(next);
		}
	};

	return [current, set] as const;
};
