import { useState } from 'react';

/**
 * A hook that manages a controlled or uncontrolled value.
 * @param value - The controlled value.
 * @param setValue - The function to set the value.
 * @param defaultValue - The default value.
 * @returns A tuple of the resolved value and the resolved setValue.
 */
export const useControlled = <T>(value?: T, setValue?: (value: T) => void, defaultValue?: T) => {
	const isControlled = value !== undefined && setValue !== undefined;
	const [internalValue, setInternalValue] = useState<T>(value ?? (defaultValue as T));
	const resolvedValue = isControlled ? value : internalValue;
	const resolvedSetValue = isControlled ? setValue : setInternalValue;

	return [resolvedValue, resolvedSetValue] as const;
};
