import { default as React } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
export declare const spinnerSizes: readonly ["small", "medium", "large"];
export type SpinnerSize = (typeof spinnerSizes)[number];
export interface DsSpinnerProps {
    /**
     * The size of the spinner
     * @default 'medium'
     */
    size?: SpinnerSize;
    /**
     * Additional CSS class names
     */
    className?: string;
    /**
     * Additional styles to apply to the component
     */
    style?: React.CSSProperties;
}
//# sourceMappingURL=ds-spinner.types.d.ts.map