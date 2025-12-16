import type { PropsWithChildren } from 'react';
import { useStepper } from '../hooks/use-stepper';
import classnames from 'classnames';
import styles from '../ds-stepper.module.scss';
import DsIcon from '../../ds-icon/ds-icon';

type DsStepProps = PropsWithChildren<{
	index: number;
	className?: string;
}>;

export function DsStep({ index, children, className }: DsStepProps) {
	const context = useStepper();

	const { completed, current, last } = context.stepsApi.getItemState({ index });

	const isSingleVariant = context.variant === 'single';
	const isLast = last && context.stepsApi.value === index + 1;

	const shouldHide = isSingleVariant && !current && !isLast;

	if (shouldHide) {
		return null;
	}

	const isClickable = completed && !isSingleVariant;

	const Wrapper = isClickable ? 'button' : 'div';

	const props = isClickable
		? {
				onClick: () => {
					context.stepsApi.setStep(index);
				},
			}
		: {};

	return (
		<Wrapper
			{...context.stepsApi.getItemProps({ index })}
			data-current={current ? '' : undefined}
			data-complete={completed ? '' : undefined}
			className={classnames(styles.step, className)}
			{...props}
		>
			<div {...context.stepsApi.getIndicatorProps({ index })} className={styles.indicatorContainer}>
				{completed ? (
					<DsIcon icon="check" className={styles.indicator} />
				) : (
					<span className={styles.indicator}>{index + 1}</span>
				)}

				<div {...context.stepsApi.getSeparatorProps({ index })} className={styles.separator} />
			</div>

			{children}
		</Wrapper>
	);
}
