import { createContext, useContext } from 'react';
import type { DsStepperOrientation, DsStepperVariant } from '../ds-stepper.types';
import type { useSteps } from './use-steps';

type StepsContext = {
	stepsApi: ReturnType<typeof useSteps>;
	variant: DsStepperVariant | undefined;
	orientation: DsStepperOrientation;
	floating: boolean;
};

export const StepperContext = createContext<StepsContext | null>(null);

export function useStepper() {
	const context = useContext(StepperContext);

	if (!context) {
		throw new Error('useStepper must be used within a DsStepper');
	}

	return context;
}
