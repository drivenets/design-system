import { CSSProperties, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import { DsModalProps } from './ds-modal.types';
/**
 * Composable modal dialog.
 * Supports custom header, footer, and body content with grid-based sizing.
 * Use columns prop to control modal width (1-12 grid columns).
 */
declare const DsModal: {
    ({ open, onOpenChange, columns, style, className, modal, closeOnEscape, closeOnInteractOutside, children, }: DsModalProps): import("react/jsx-runtime").JSX.Element;
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
export default DsModal;
//# sourceMappingURL=ds-modal.d.ts.map