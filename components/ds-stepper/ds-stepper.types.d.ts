import { PropsWithChildren } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import type * as steps from '@zag-js/steps';
export type DsStepperVariant = 'single';
export type DsStepperProps = PropsWithChildren<{
    variant?: DsStepperVariant;
    onComplete?: steps.Props['onStepComplete'];
    activeStep?: steps.Props['step'];
} & Pick<steps.Props, 'onStepChange' | 'count'>>;
//# sourceMappingURL=ds-stepper.types.d.ts.map