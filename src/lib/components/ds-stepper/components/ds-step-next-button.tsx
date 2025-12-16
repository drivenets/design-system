import type { PropsWithChildren } from 'react';
import { useStepper } from '../hooks/use-stepper';
import DsButton from '../../ds-button/ds-button';

export function DsNextStepButton({ children }: PropsWithChildren) {
	const context = useStepper();

	return (
		<DsButton {...context.stepsApi.getNextTriggerProps()} size="small">
			{children}
		</DsButton>
	);
}
