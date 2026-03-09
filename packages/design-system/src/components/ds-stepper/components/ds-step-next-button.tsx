import { useStepper } from '../hooks/use-stepper';
import { DsButton, type DsButtonUnifiedProps } from '../../ds-button';

// TODO: Use the new button props once we deprecate the legacy button.
type DsLegacyButtonProps = Extract<DsButtonUnifiedProps, { design?: undefined | 'legacy' }> & {
	design?: undefined | 'legacy';
};

export type DsNextStepButtonProps = Pick<
	DsLegacyButtonProps,
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
