import { useStepper } from '../hooks/use-stepper';
import { DsButton, type DsButtonProps } from '../../ds-button';

export type DsNextStepButtonProps = Pick<
	DsButtonProps,
	'variant' | 'size' | 'className' | 'style' | 'children'
>;

export function DsNextStepButton({ children, size = 'small', ...rest }: DsNextStepButtonProps) {
	const context = useStepper();
	// strip color — ark returns `string` which conflicts with DsButton union
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { color, ...triggerProps } = context.stepsApi.getNextTriggerProps();

	return (
		<DsButton {...triggerProps} size={size} {...rest}>
			{children}
		</DsButton>
	);
}
