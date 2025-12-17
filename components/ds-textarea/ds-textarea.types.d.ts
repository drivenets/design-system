import { default as React } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
export interface DsTextareaProps {
    /**
     * Unique identifier for the textarea element
     */
    id?: string;
    /**
     * The ref to the textarea element
     */
    ref?: React.Ref<HTMLTextAreaElement>;
    /**
     * The name of the textarea
     */
    name?: string;
    /**
     * Event handler called when the textarea loses focus
     *
     * @param event
     */
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
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
     * The initial value of the input when rendered.
     * Use when you don't need to control the value of the input.
     */
    defaultValue?: string;
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
//# sourceMappingURL=ds-textarea.types.d.ts.map