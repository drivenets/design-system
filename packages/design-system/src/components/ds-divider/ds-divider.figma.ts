// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=32735-122261
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-divider
// component=DsDivider
import figma from 'figma';

const instance = figma.selectedInstance;

const orientation =
	instance.getEnum('direction', {
		Horizontal: 'horizontal',
		Vertical: 'vertical',
	}) ?? 'horizontal';

export default {
	example: figma.code`<DsDivider orientation="${orientation}" />`,
	imports: ["import { DsDivider } from '@drivenets/design-system'"],
	id: 'ds-divider',
	metadata: { nestable: true },
};
