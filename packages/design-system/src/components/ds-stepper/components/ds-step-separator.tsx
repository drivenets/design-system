import { useStepper } from '../hooks/use-stepper';
import styles from '../ds-stepper.module.scss';

type DsStepSeparatorProps = {
	index: number;
};

export function DsStepSeparator({ index }: DsStepSeparatorProps) {
	const { stepsApi, orientation } = useStepper();
	const { last } = stepsApi.getItemState({ index });

	if (last) {
		return null;
	}

	return (
		<div
			{...stepsApi.getSeparatorProps({ index })}
			className={orientation === 'horizontal' ? styles.horizontalSeparator : styles.separator}
		/>
	);
}
