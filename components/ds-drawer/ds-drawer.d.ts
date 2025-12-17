import { CSSProperties, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import { DsDrawerProps } from './ds-drawer.types';
/**
 * Composable drawer component.
 * Supports grid-based sizing, flexible positioning, and compound components.
 * Use columns prop to control drawer width (1-12 grid columns).
 */
declare const DsDrawer: {
    ({ open, onOpenChange, columns, position, backdrop, closeOnEscape, closeOnInteractOutside, portal, style, className, children, }: DsDrawerProps): import("react/jsx-runtime").JSX.Element;
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
    Toolbar: ({ style, className, children, }: {
        style?: CSSProperties;
        className?: string;
        children: ReactNode;
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
export default DsDrawer;
//# sourceMappingURL=ds-drawer.d.ts.map