import { FC, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import { DsToastProps } from './ds-toast.types';
export interface DsToastProviderProps {
    /**
     * The maximum number of toasts to display (recommended 3 - 5)
     * @default 3
     */
    max?: number;
    /**
     * The children of the toast provider
     */
    children: ReactNode;
}
export type DsToastContextType = {
    /**
     * Create a new toast
     */
    createToast: (toast: DsToastProps) => string;
    /**
     * Dismiss a toast by id
     */
    dismissToast: (id: string) => void;
    /**
     * Dismiss all toasts
     */
    dismissAllToasts: () => void;
    /**
     * Get all visible toasts
     */
    getToasts: () => DsToastProps[];
    /**
     * Get the total number of toasts
     */
    getToastsCount: () => number;
};
export declare const DsToastProvider: FC<DsToastProviderProps>;
export declare const useToaster: () => DsToastContextType;
//# sourceMappingURL=ds-toast-context.d.ts.map