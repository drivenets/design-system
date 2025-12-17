import type { PropsWithChildren } from 'react';
import styles from '../ds-stepper.module.scss';

export function DsStepLabel({ children }: PropsWithChildren) {
	return <span className={styles.stepLabel}>{children}</span>;
}
