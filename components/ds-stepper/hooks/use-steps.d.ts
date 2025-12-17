import { DsStepperProps } from '../ds-stepper.types';
import * as steps from '@zag-js/steps';
type UseSteps = Pick<DsStepperProps, 'activeStep' | 'onStepChange' | 'count' | 'onComplete'>;
export declare function useSteps({ count, activeStep, onStepChange, onComplete }: UseSteps): steps.Api<import('@zag-js/react').PropTypes>;
export {};
//# sourceMappingURL=use-steps.d.ts.map