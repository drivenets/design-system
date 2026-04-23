import type { PropsWithChildren, ReactNode } from 'react';
import type * as steps from '@zag-js/steps';

export type DsStepperVariant = 'single';

export type DsStepperOrientation = 'horizontal' | 'vertical';

export type DsStepperProps = PropsWithChildren<
	{
		/**
		 * Visual variant of the stepper. Currently only `single` is supported.
		 * @default single
		 */
		variant?: DsStepperVariant;
		/**
		 * Layout orientation of the stepper.
		 * @default horizontal
		 */
		orientation?: DsStepperOrientation;
		/**
		 * When `true`, renders the stepper as a floating overlay (typically pinned
		 * to the bottom of the viewport) instead of inline in the layout.
		 * @default false
		 */
		floating?: boolean;
		/**
		 * Called when the final step completes (i.e., the user finishes the last step).
		 */
		onComplete?: steps.Props['onStepComplete'];
		/**
		 * Zero-based index of the currently active step (controlled). Pair with
		 * `onStepChange`.
		 */
		activeStep?: steps.Props['step'];
		/**
		 * Additional CSS class name applied to the stepper root.
		 */
		className?: string;
		/**
		 * Optional actions rendered at the end of the stepper.
		 * Horizontal: displayed after the steps. Vertical: displayed at the bottom.
		 */
		actions?: ReactNode;
	} & Pick<steps.Props, 'onStepChange' | 'count'> & {
			/**
			 * Called when the active step changes. Receives the zag-js step-change
			 * details including the new index.
			 */
			onStepChange?: steps.Props['onStepChange'];
			/**
			 * Total number of steps in the stepper.
			 */
			count?: steps.Props['count'];
		}
>;
