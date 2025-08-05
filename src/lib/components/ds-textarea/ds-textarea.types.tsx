import React from 'react';

export interface DsTextareaProps {
	/**
	 * Callback when the value changes
	 */
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	/**
	 * Value change event handler (provides just the value)
	 */
	onValueChange?: (value: string) => void;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: React.CSSProperties;
	/**
	 * The placeholder text
	 */
	placeholder?: string;
	/**
	 * The current value
	 */
	value?: string;
	/**
	 * Whether the textarea is disabled
	 */
	disabled?: boolean;
	/**
	 * The number of visible text lines
	 */
	rows?: number;
	/**
	 * The minimum number of characters
	 */
	minLength?: number;
	/**
	 * The maximum number of characters
	 */
	maxLength?: number;
}
