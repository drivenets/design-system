import React from 'react';
import classnames from 'classnames';
import styles from './ds-stepper.module.scss';
import { useSteps } from './hooks/use-steps';
import { StepperContext } from './hooks/use-stepper';
import type { DsStepperProps } from './ds-stepper.types';
import { DsStep } from './components/ds-step';

export function DsStepper({
	count,
	variant,
	orientation = 'vertical',
	floating = false,
	activeStep,
	onStepChange,
	onComplete,
	children,
	className,
}: DsStepperProps) {
	const stepsApi = useSteps({ count, activeStep, onStepChange, onComplete, orientation });

	const isHorizontal = orientation === 'horizontal';

	const childArray = React.Children.toArray(children);
	const steps = childArray.filter((child) => React.isValidElement(child) && child.type === DsStep);
	const actions = childArray.filter((child) => !(React.isValidElement(child) && child.type === DsStep));

	return (
		<StepperContext.Provider
			value={{
				stepsApi,
				variant,
				orientation,
				floating,
			}}
		>
			<div
				{...stepsApi.getRootProps()}
				className={classnames(
					styles.root,
					{
						[styles.variantSingle]: variant === 'single',
						[styles.horizontal]: isHorizontal,
					},
					className,
				)}
			>
				{isHorizontal ? (
					<>
						<div className={styles.stepsContainer}>{steps}</div>

						{actions.length > 0 && <div className={styles.navActions}>{actions}</div>}
					</>
				) : (
					children
				)}
			</div>
		</StepperContext.Provider>
	);
}
