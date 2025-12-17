import { CSSProperties, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import { DsConfirmationProps } from './ds-confirmation.types';
/**
 * Composable confirmation modal dialog.
 */
export declare const DsConfirmation: {
    ({ open, onOpenChange, style, className, children }: DsConfirmationProps): import("react/jsx-runtime").JSX.Element;
    Header: ({ style, className, children, }: {
        style?: CSSProperties;
        className?: string;
        children: ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Title: ({ style, className, children, }: {
        style?: CSSProperties;
        className?: string;
        children: ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    CloseTrigger: ({ style, className }: {
        style?: CSSProperties;
        className?: string;
    }) => import("react/jsx-runtime").JSX.Element;
    Body: ({ style, className, children, }: {
        style?: CSSProperties;
        className?: string;
        children: ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ style, className, children, }: {
        style?: CSSProperties;
        className?: string;
        children: ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Actions: ({ style, className, children, }: {
        style?: CSSProperties;
        className?: string;
        children: ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=ds-confirmation.d.ts.map