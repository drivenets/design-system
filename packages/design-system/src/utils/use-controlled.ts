import { useState } from 'react';

/**
 * A hook that manages a controlled or uncontrolled value.
 * It is considered controlled if both value and setValue are provided.
 */
export const useControlled = <T>(
	value: T | undefined,
	setValue: ((value: T) => void) | undefined,
	defaultValue: T,
) => {
	const isControlled = value !== undefined && setValue !== undefined;
	const [internalValue, setInternalValue] = useState<T>(value ?? defaultValue);
	const resolvedValue = isControlled ? value : internalValue;
	const resolvedSetValue = isControlled ? setValue : setInternalValue;

	return [resolvedValue, resolvedSetValue] as const;
};
