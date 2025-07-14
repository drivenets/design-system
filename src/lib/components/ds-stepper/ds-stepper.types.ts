import { PropsWithChildren } from 'react';
import * as steps from '@zag-js/steps';

export type DsStepperVariant = 'single';

export type DsStepperProps = PropsWithChildren<
	{
		variant?: DsStepperVariant;
		onComplete?: steps.Props['onStepComplete'];
		activeStep?: steps.Props['step'];
	} & Pick<steps.Props, 'onStepChange' | 'count'>
>;
