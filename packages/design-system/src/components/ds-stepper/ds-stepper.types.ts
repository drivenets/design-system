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
		 * Represents optional ReactNode elements that are displayed as a set of horizontal actions (only horizontal orientation).
		 */
		horizontalActions?: ReactNode;
	} & Pick<steps.Props, 'onStepChange' | 'count'>
>;
