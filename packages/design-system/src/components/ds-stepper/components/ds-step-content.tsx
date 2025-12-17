import type { ReactNode } from 'react';
import { useStepper } from '../hooks/use-stepper';
import { DsStepLabel } from './ds-step-label';
import { DsStepDescription } from './ds-step-description';
import classnames from 'classnames';
import styles from '../ds-stepper.module.scss';

type DsStepContentProps = {
	index: number;
	label: string;
	description?: string;
	actions?: ReactNode;
};

export function DsStepContent({ index, label, description, actions }: DsStepContentProps) {
	const { variant, stepsApi } = useStepper();
	const { current } = stepsApi.getItemState({ index });

	return (
		<div
			className={classnames(styles.stepContent, {
				[styles.stepContentSingle]: variant === 'single',
			})}
		>
			<DsStepLabel>{label}</DsStepLabel>

			{variant !== 'single' && description && <DsStepDescription>{description}</DsStepDescription>}

			{actions && current && <div className={styles.stepActions}>{actions}</div>}
		</div>
	);
}
