import classnames from 'classnames';
import styles from './ds-stepper.module.scss';
import { useSteps } from './hooks/use-steps';
import { StepperContext } from './hooks/use-stepper';
import type { DsStepperProps } from './ds-stepper.types';

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
	horizontalActions,
}: DsStepperProps) {
	const stepsApi = useSteps({ count, activeStep, onStepChange, onComplete, orientation });

	const isHorizontal = orientation === 'horizontal';

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
					},
					className,
				)}
			>
				{isHorizontal ? (
					<>
						<div className={styles.stepsContainer}>{children}</div>

						{horizontalActions && <div className={styles.navActions}>{horizontalActions}</div>}
					</>
				) : (
					children
				)}
			</div>
		</StepperContext.Provider>
	);
}
