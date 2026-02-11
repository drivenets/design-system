import type { MouseEvent, PropsWithChildren, ReactNode } from 'react';
import { useStepper } from '../hooks/use-stepper';
import classnames from 'classnames';
import styles from '../ds-stepper.module.scss';
import DsIcon from '../../ds-icon/ds-icon';
import { DsStepSeparator } from './ds-step-separator';

export type DsStepProps = PropsWithChildren<{
	index: number;
	className?: string;
	disabled?: boolean;
	/**
	 * Represents the variant type that determines the state or style of a component.
	 * @default 'default'
	 */
	variant?: 'error' | 'default';
	slots?: {
		indicator?: ReactNode;
	};
	slotProps?: {
		indicator?: {
			className?: string;
			onClick?: (event: MouseEvent<HTMLElement>) => void;
		};
	};
}>;

export function DsStep({
	index,
	children,
	className,
	disabled,
	variant = 'default',
	slots,
	slotProps,
}: DsStepProps) {
	const context = useStepper();

	const { completed, current, last } = context.stepsApi.getItemState({ index });

	const isSingleVariant = context.variant === 'single';
	const isHorizontal = context.orientation === 'horizontal';
	const isLast = last && context.stepsApi.value === index + 1;

	const shouldHide = isSingleVariant && !current && !isLast;

	if (shouldHide) {
		return null;
	}

	const isClickable = completed && !isSingleVariant && !disabled;

	const Wrapper = isClickable ? 'button' : 'div';

	const props = isClickable
		? {
				onClick: () => {
					context.stepsApi.setStep(index);
				},
			}
		: {};

	const indicatorClassName = classnames(styles.indicator, slotProps?.indicator?.className);

	const renderIndicator = () => {
		if (slots?.indicator) {
			return (
				<span {...slotProps?.indicator} className={indicatorClassName}>
					{slots.indicator}
				</span>
			);
		}

		if (variant === 'error') {
			return (
				<span {...slotProps?.indicator} className={slotProps?.indicator?.className}>
					<DsIcon icon="close" className={indicatorClassName} />
				</span>
			);
		}

		if (completed) {
			return (
				<span {...slotProps?.indicator} className={slotProps?.indicator?.className}>
					<DsIcon icon="check" className={indicatorClassName} />
				</span>
			);
		}

		return (
			<span {...slotProps?.indicator} className={indicatorClassName}>
				{index + 1}
			</span>
		);
	};

	return (
		<Wrapper
			{...context.stepsApi.getItemProps({ index })}
			data-current={current ? '' : undefined}
			data-complete={completed ? '' : undefined}
			data-disabled={disabled ? '' : undefined}
			data-error={variant === 'error' ? '' : undefined}
			className={classnames(styles.step, className)}
			{...props}
		>
			{context.floating && <DsIcon icon="drag_indicator" className={styles.dragHandle} data-drag-handle="" />}

			<div {...context.stepsApi.getIndicatorProps({ index })} className={styles.indicatorContainer}>
				{renderIndicator()}

				{!isHorizontal && <DsStepSeparator index={index} />}
			</div>

			{children}
		</Wrapper>
	);
}
