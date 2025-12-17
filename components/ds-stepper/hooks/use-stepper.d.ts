import { DsStepperVariant } from '../ds-stepper.types';
import { useSteps } from './use-steps';
type StepsContext = {
    stepsApi: ReturnType<typeof useSteps>;
    variant: DsStepperVariant | undefined;
};
export declare const StepperContext: import('../../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react').Context<StepsContext | null>;
export declare function useStepper(): StepsContext;
export {};
//# sourceMappingURL=use-stepper.d.ts.map