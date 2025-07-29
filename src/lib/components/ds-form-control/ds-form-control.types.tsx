import React from 'react';
import { DsSelectOption } from '../ds-select';
import { IconType } from '../ds-icon';

export const controlTypes = ['input', 'textarea', 'select'] as const;
export type ControlType = (typeof controlTypes)[number];

export const controlSchemas = ['info', 'success', 'error', 'warning'] as const;
export type ControlSchema = (typeof controlSchemas)[number];

export interface DsFormControlProps
	extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
	/**
	 * Visual schema
	 * @default 'info'
	 */
	schema?: ControlSchema;
	/**
	 * Label text
	 */
	label: string;
	/**
	 * Marks the field as required
	 */
	required?: boolean;
	/**
	 * Disables the control
	 */
	disabled?: boolean;
	/**
	 * Icon to display on the left side of the text field
	 */
	icon?: IconType;
	/**
	 * Message under the control
	 */
	message?: string;
	/**
	 * Icon shown next to message
	 */
	messageIcon?: string;
	/**
	 * Options for select control
	 */
	options?: DsSelectOption[];
	/**
	 * Value change event handler
	 * @param value
	 */
	onValueChange?: (value: string) => void;
	/**
	 * Event handler called when the select loses focus
	 *
	 * @param event
	 */
	onBlur?: (event: React.FocusEvent<any>) => void;
	/**
	 * Element type to render: 'input' or 'textarea'
	 * @default 'input'
	 */
	as?: ControlType;
}
