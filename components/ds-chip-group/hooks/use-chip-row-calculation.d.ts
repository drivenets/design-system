import { RefObject } from '../../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
interface UseChipRowCalculationProps {
    chipsWrapperRef: RefObject<HTMLDivElement | null>;
    totalFilters: number;
}
/**
 * Custom hook to calculate how many chips can fit in 2 rows
 * Uses a simple approach: render all, measure positions, hide overflow
 */
export declare const useChipRowCalculation: ({ chipsWrapperRef, totalFilters }: UseChipRowCalculationProps) => number;
export {};
//# sourceMappingURL=use-chip-row-calculation.d.ts.map