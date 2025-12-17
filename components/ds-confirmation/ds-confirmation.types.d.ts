import { CSSProperties, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
/**
 * Props for the DsConfirmation component
 */
export interface DsConfirmationProps {
    /**
     * Whether the modal is open
     */
    open: boolean;
    /**
     * Callback when modal open state changes
     * @param open - whether the modal is open
     */
    onOpenChange: (open: boolean) => void;
    /**
     * Additional CSS styles
     */
    style?: CSSProperties;
    /**
     * Additional CSS class name
     */
    className?: string;
    /**
     * Modal body content
     */
    children: ReactNode;
}
//# sourceMappingURL=ds-confirmation.types.d.ts.map