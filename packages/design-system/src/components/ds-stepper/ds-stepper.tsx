import classnames from 'classnames';
import styles from './ds-stepper.module.scss';
import { useSteps } from './hooks/use-steps';
import { StepperContext } from './hooks/use-stepper';
import type { DsStepperProps } from './ds-stepper.types';

export function DsStepper({
	count,
	variant,
	activeStep,
	onStepChange,
	onComplete,
	children,
}: DsStepperProps) {
	const stepsApi = useSteps({ count, activeStep, onStepChange, onComplete });

	return (
		<StepperContext.Provider
			value={{
				stepsApi,
				variant,
			}}
		>
			<div
				{...stepsApi.getRootProps()}
				className={classnames(styles.root, {
					[styles.variantSingle]: variant === 'single',
				})}
			>
				{children}
			</div>
		</StepperContext.Provider>
	);
}
