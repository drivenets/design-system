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
	actions,
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
					'scrollbar-thin',
					{
						[styles.variantSingle]: variant === 'single',
						[styles.floating]: floating,
					},
					className,
				)}
			>
				{isHorizontal ? (
					<>
						<div className={classnames(styles.stepsContainer, 'scrollbar-thin')}>{children}</div>

						{actions && <div className={styles.horizontalActions}>{actions}</div>}
					</>
				) : (
					<>
						{children}

						{actions && <div className={styles.verticalActions}>{actions}</div>}
					</>
				)}
			</div>
		</StepperContext.Provider>
	);
}
