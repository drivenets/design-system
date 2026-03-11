import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { Root } from '@radix-ui/react-checkbox';

export const checkboxVariants = ['default', 'warning'] as const;
export type CheckboxVariant = (typeof checkboxVariants)[number];

export interface DsCheckboxProps extends ComponentPropsWithoutRef<typeof Root> {
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
	 * The controlled checked state of the checkbox
	 */
	checked?: boolean | 'indeterminate';
	/**
	 * The default checked state of the checkbox
	 */
	defaultChecked?: boolean | 'indeterminate';
	/**
	 * Event handler called when the checked state of the checkbox changes.
	 *
	 * @param checked
	 */
	onCheckedChange?: (checked: boolean | 'indeterminate') => void;
}
