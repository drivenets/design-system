import { CSSProperties, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import { DsAlertBannerProps } from './ds-alert-banner.types';
/**
 * Design system AlertBanner component
 * Controlled component that displays alert messages with different variants
 */
declare const DsAlertBanner: {
    ({ open, onOpenChange, inline, variant, icon, closable, className, style, children, }: DsAlertBannerProps): import("react/jsx-runtime").JSX.Element | null;
    Title: ({ style, className, children, }: {
        style?: CSSProperties;
        className?: string;
        children: ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Body: ({ style, className, children, }: {
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
export default DsAlertBanner;
//# sourceMappingURL=ds-alert-banner.d.ts.map