// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=29164-187694
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-stepper
// component=DsStepper
//
// `direction` maps to `orientation`. Figma's `type` (detailed|compact) is not a code prop:
// detailed steps carry a `description` on each `DsStepContent`, compact steps omit it. The
// steps are composed in code (`DsStep` > `DsStepContent` > `DsNextStepButton`), not derivable
// from Figma's step atoms, and `count` is data — so a representative two-step composition is
// emitted for the developer to extend (one `DsStep` per step). The panel-docked wrappers
// (`DAP_stepper-panel-*_v01`) are a `DsPanel` composition and are intentionally not connected;
// the stepper still resolves when nested inside them.
import figma from 'figma';

const instance = figma.selectedInstance;

const orientation =
	instance.getEnum('direction', {
		vertical: 'vertical',
		horizontal: 'horizontal',
	}) ?? 'vertical';

const detailed = instance.getEnum('type', { detailed: true, compact: false }) ?? true;
const description = detailed ? ' description="Step description"' : '';

export default {
	example: figma.code`<DsStepper count={2} orientation="${orientation}">
	<DsStep index={0}>
		<DsStepContent index={0} label="Step title"${description} actions={<DsNextStepButton>Next</DsNextStepButton>} />
	</DsStep>
	<DsStep index={1}>
		<DsStepContent index={1} label="Step title"${description} actions={<DsNextStepButton>Finish</DsNextStepButton>} />
	</DsStep>
	{/* Add a <DsStep> per step */}
</DsStepper>`,
	imports: ["import { DsStepper, DsStep, DsStepContent, DsNextStepButton } from '@drivenets/design-system'"],
	id: 'ds-stepper',
	metadata: { nestable: true },
};
