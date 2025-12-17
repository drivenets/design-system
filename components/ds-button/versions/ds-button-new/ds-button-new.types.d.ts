import { default as React } from '../../../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
export declare const buttonTypes: readonly ["primary", "secondary", "secondary-light", "tertiary"];
export type ButtonType = (typeof buttonTypes)[number];
export declare const buttonVariants: readonly ["filled", "ghost", "danger", "dark"];
export type ButtonVariant = (typeof buttonVariants)[number];
export declare const buttonSizes: readonly ["large", "medium", "small"];
export type ButtonSize = (typeof buttonSizes)[number];
export interface DsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Type of the button
     * @default 'primary'
     */
    buttonType?: ButtonType;
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
//# sourceMappingURL=ds-button-new.types.d.ts.map