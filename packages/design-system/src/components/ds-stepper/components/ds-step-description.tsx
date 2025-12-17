import type { PropsWithChildren } from 'react';
import styles from '../ds-stepper.module.scss';

export function DsStepDescription({ children }: PropsWithChildren) {
	return <p className={styles.stepDescription}>{children}</p>;
}
