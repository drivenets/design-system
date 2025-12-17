import { default as React } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import { CreateToasterReturn } from '@ark-ui/react';
import { DsToastProps } from './ds-toast.types';
/**
 * Design system Toast component
 * This component is used within the Toaster render function
 */
declare const DsToast: ({ style, className, variant, title, description, onDismiss, actions, }: DsToastProps) => import("react/jsx-runtime").JSX.Element;
/**
 * Design system Toast Group component that wraps the Toaster
 */
declare const DsToastGroup: React.FC<{
    toaster: CreateToasterReturn;
}>;
export { DsToast, DsToastGroup };
//# sourceMappingURL=ds-toast.d.ts.map