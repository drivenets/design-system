import { useStepper } from '../hooks/use-stepper';
import DsButton from '../../ds-button/ds-button';
import type { DsButtonProps } from '../../ds-button/versions/ds-button-legacy';

export type DsNextStepButtonProps = Pick<
	DsButtonProps,
	'variant' | 'size' | 'className' | 'style' | 'children'
>;

export function DsNextStepButton({ children, size = 'small', ...rest }: DsNextStepButtonProps) {
	const context = useStepper();

	return (
		<DsButton {...context.stepsApi.getNextTriggerProps()} size={size} {...rest}>
			{children}
		</DsButton>
	);
}
