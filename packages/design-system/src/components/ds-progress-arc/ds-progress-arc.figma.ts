// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=15179-8747
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-progress-arc
// component=DsProgressArc
import figma from 'figma';

const instance = figma.selectedInstance;

const size = instance.getEnum('Size', {
	small: 'small',
	medium: 'medium',
});
const variant = instance.getEnum('State', {
	fill: 'default',
	success: 'success',
	error: 'error',
});

export default {
	example: figma.code`<DsProgressArc variant="${variant}" size="${size}" value={0} />`,
	imports: ["import { DsProgressArc } from '@drivenets/design-system'"],
	id: 'ds-progress-arc',
	metadata: { nestable: false },
};
