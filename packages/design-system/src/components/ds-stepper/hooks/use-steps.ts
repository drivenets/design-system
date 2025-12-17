import { useId } from 'react';
import * as steps from '@zag-js/steps';
import { normalizeProps, useMachine } from '@zag-js/react';
import type { DsStepperProps } from '../ds-stepper.types';

type UseSteps = Pick<DsStepperProps, 'activeStep' | 'onStepChange' | 'count' | 'onComplete'>;

export function useSteps({ count, activeStep, onStepChange, onComplete }: UseSteps) {
	const service = useMachine(steps.machine, {
		id: useId(),
		count,
		step: activeStep,
		onStepChange,
		onStepComplete: onComplete,
	});

	return steps.connect(service, normalizeProps);
}
