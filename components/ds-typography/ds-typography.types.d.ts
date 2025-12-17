import { default as React } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import { semanticElementMap } from './ds-typography.config';
export type SemanticVariant = keyof typeof semanticElementMap;
export interface DsTypographyProps {
    /**
     * The semantic variant of the component
     */
    variant: SemanticVariant;
    /**
     * Additional CSS class names
     */
    className?: string;
    /**
     * Additional styles to apply to the typography component
     */
    style?: React.CSSProperties;
    /**
     * When true, renders as Slot component for composition without extra DOM nodes
     */
    asChild?: boolean;
    /**
     * The content of the component
     */
    children: React.ReactNode;
}
//# sourceMappingURL=ds-typography.types.d.ts.map