import { default as React } from '../../../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
export declare const buttonSchemas: readonly ["primary", "secondary", "error"];
export type ButtonSchema = (typeof buttonSchemas)[number];
export declare const buttonVariants: readonly ["filled", "ghost", "borderless", "round", "dashed"];
export type ButtonVariant = (typeof buttonVariants)[number];
export declare const buttonSizes: readonly ["large", "medium", "small"];
export type ButtonSize = (typeof buttonSizes)[number];
export interface DsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Color schema of the button
     * @default 'primary'
     */
    schema?: ButtonSchema;
    /**
     * Visual variant of the button
     * @default 'filled'
     */
    variant?: ButtonVariant;
    /**
     * Size of the button
     * @default 'medium'
     */
    size?: ButtonSize;
    /**
     * Whether the button is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Class name for the button content
     */
    contentClassName?: string;
}
//# sourceMappingURL=ds-button-legacy.types.d.ts.map