import type React from 'react';

export const codeInputSizes = ['small', 'default', 'large'] as const;
export type CodeInputSize = (typeof codeInputSizes)[number];

export interface DsCodeInputProps {
	/**
	 * Associates the editor with a `<label htmlFor>`. When set, the expanded
	 * textarea keeps that name instead of `locale.codeLabel`.
	 */
	id?: string;
	/**
	 * The ref to the editor textarea
	 */
	ref?: React.Ref<HTMLTextAreaElement>;
	/**
	 * The name of the input
	 */
	name?: string;
	/**
	 * @default default
	 */
	size?: CodeInputSize;
	/**
	 * The current value. Shared by the collapsed viewport and the overlay.
	 */
	value?: string;
	/**
	 * The initial value when rendered.
	 * Use when you don't need to control the value of the input.
	 */
	defaultValue?: string;
	/**
	 * The placeholder text
	 */
	placeholder?: string;
	/**
	 * Whether the input is disabled. The overlay still opens so long values stay searchable.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Whether the value is read only. The overlay still opens so long values stay searchable.
	 * @default false
	 */
	readOnly?: boolean;
	/**
	 * Whether the overlay is open. Pair with `onExpandChange`.
	 */
	expanded?: boolean;
	/**
	 * Initial overlay state when uncontrolled.
	 * @default false
	 */
	defaultExpanded?: boolean;
	/**
	 * Fires when the overlay opens or closes
	 */
	onExpandChange?: (expanded: boolean) => void;
	/**
	 * Callback when the value changes
	 */
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	/**
	 * Value change event handler (provides just the value)
	 */
	onValueChange?: (value: string) => void;
	/**
	 * Event handler called when the editor receives focus
	 */
	onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
	/**
	 * Event handler called when the editor loses focus
	 */
	onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
	/**
	 * The maximum number of characters
	 */
	maxLength?: number;
	/**
	 * User-facing strings
	 */
	locale?: DsCodeInputLocale;
	/**
	 * Optional render slots for customizing parts of the collapsed field.
	 */
	slots?: {
		/**
		 * Adornment to display after the expand button
		 */
		endAdornment?: React.ReactNode;
	};
	className?: string;
	style?: React.CSSProperties;
}

export interface DsCodeInputLocale {
	/**
	 * Accessible name of the button that opens the overlay
	 * @default 'Expand code editor'
	 */
	expand?: string;
	/**
	 * Accessible name of the button that closes the overlay
	 * @default 'Collapse code editor'
	 */
	collapse?: string;
	/**
	 * @default 'Search in code'
	 */
	searchPlaceholder?: string;
	/**
	 * Accessible name of the overlay when the compact field is inert
	 * @default 'Code'
	 */
	codeLabel?: string;
	/**
	 * Visual label for hidden logical lines. Receives the additional-line count.
	 * @default (count) => `↵ +${count}`
	 */
	additionalLines?: (count: number) => string;
	/**
	 * Accessible name for hidden logical lines. Receives the additional-line count.
	 * @default (count) => `${count} additional code lines`
	 */
	additionalLinesLabel?: (count: number) => string;
	/**
	 * Visual focused line indicator. Receives the visible line and the total.
	 * @default (current, total) => `Ln ${current}/${total}`
	 */
	linePosition?: (current: number, total: number) => string;
	/**
	 * Accessible description while collapsed and multiline.
	 * @default (total) => `Multiline code, ${total} lines. Only one line is visible. Expand to view the complete code.`
	 */
	multilineDescription?: (total: number) => string;
	/**
	 * Accessible description while focused on a hidden line.
	 * @default (current, total) => `Line ${current} of ${total}; other code lines are hidden.`
	 */
	linePositionDescription?: (current: number, total: number) => string;
	/**
	 * Visual status when a selection spans hidden lines.
	 * @default (selected, total) => `${selected} lines selected · ${total} total`
	 */
	selectionStatus?: (selected: number, total: number) => string;
	/**
	 * Announced once when the overlay opens. Receives the logical line count.
	 * @default (total) => `Code editor expanded, ${total} lines.`
	 */
	expandedAnnouncement?: (total: number) => string;
	/**
	 * Announced once when the overlay closes
	 * @default 'Code editor collapsed'
	 */
	collapsedAnnouncement?: string;
}
