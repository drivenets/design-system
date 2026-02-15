import { useId } from 'react';
import * as steps from '@zag-js/steps';
import { normalizeProps, useMachine } from '@zag-js/react';
import type { DsStepperProps } from '../ds-stepper.types';

type UseSteps = Pick<DsStepperProps, 'activeStep' | 'onStepChange' | 'count' | 'onComplete' | 'orientation'>;

export function useSteps({ count, activeStep, onStepChange, onComplete, orientation }: UseSteps) {
	const service = useMachine(steps.machine, {
		id: useId(),
		count,
		step: activeStep,
		onStepChange,
		onStepComplete: onComplete,
		orientation,
	});

	return steps.connect(service, normalizeProps);
}
