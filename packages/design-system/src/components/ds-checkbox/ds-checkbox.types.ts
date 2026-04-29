import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { type Checkbox } from '@ark-ui/react/checkbox';

export const checkboxVariants = ['default', 'warning'] as const;
export type CheckboxVariant = (typeof checkboxVariants)[number];

export interface DsCheckboxProps extends Omit<
	ComponentPropsWithoutRef<typeof Checkbox.Root>,
	'onCheckedChange' | 'value'
> {
	/**
	 * Value when used in a group or for form submission. Coerced to string for the native control.
	 */
	value?: string | number;
	/**
	 * Visual variant of the checkbox
	 */
	variant?: CheckboxVariant;
	/**
	 * Label for the checkbox
	 */
	label?: ReactNode;
	/**
	 * Additional label info for the checkbox
	 */
	labelInfo?: ReactNode;
	/**
	 * Disables the checkbox, preventing user interaction
	 */
	disabled?: boolean;
	/**
	 * Callback invoked when the checked state changes
	 */
	onCheckedChange?: (checked: boolean | 'indeterminate') => void;
}
