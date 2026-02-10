import type { PropsWithChildren } from 'react';
import type * as steps from '@zag-js/steps';

export type DsStepperVariant = 'single';

export type DsStepperOrientation = 'horizontal' | 'vertical';

export type DsStepperProps = PropsWithChildren<
	{
		variant?: DsStepperVariant;
		orientation?: DsStepperOrientation;
		floating?: boolean;
		onComplete?: steps.Props['onStepComplete'];
		activeStep?: steps.Props['step'];
		className?: string;
	} & Pick<steps.Props, 'onStepChange' | 'count'>
>;
