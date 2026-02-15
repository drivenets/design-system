import type { PropsWithChildren, ReactNode } from 'react';
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
		/**
		 * Optional actions rendered at the end of the stepper.
		 * Horizontal: displayed after the steps. Vertical: displayed at the bottom.
		 */
		actions?: ReactNode;
	} & Pick<steps.Props, 'onStepChange' | 'count'>
>;
