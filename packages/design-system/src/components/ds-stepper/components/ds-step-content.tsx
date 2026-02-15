import type { ReactNode } from 'react';
import { useStepper } from '../hooks/use-stepper';
import { DsStepLabel } from './ds-step-label';
import { DsStepDescription } from './ds-step-description';
import { DsStepSeparator } from './ds-step-separator';
import classnames from 'classnames';
import styles from '../ds-stepper.module.scss';

export type DsStepContentProps = {
	index: number;
	label: ReactNode;
	description?: ReactNode;
	actions?: ReactNode;
};

export function DsStepContent({ index, label, description, actions }: DsStepContentProps) {
	const { variant, orientation, stepsApi } = useStepper();
	const { current } = stepsApi.getItemState({ index });

	const isHorizontal = orientation === 'horizontal';
	const showDescription = variant !== 'single' && description;

	return (
		<div
			className={classnames(styles.stepContent, {
				[styles.stepContentSingle]: variant === 'single',
			})}
		>
			{isHorizontal ? (
				<>
					<div className={styles.stepLabelRow}>
						<DsStepLabel>{label}</DsStepLabel>

						<DsStepSeparator index={index} />
					</div>

					{showDescription && <DsStepDescription>{description}</DsStepDescription>}
				</>
			) : (
				<>
					<DsStepLabel>{label}</DsStepLabel>

					{showDescription && <DsStepDescription>{description}</DsStepDescription>}

					{actions && current && <div className={styles.stepActions}>{actions}</div>}
				</>
			)}
		</div>
	);
}
