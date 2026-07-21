// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=15179-12155
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-progress-linear
// component=DsProgressLinear
import figma from 'figma';

const instance = figma.selectedInstance;

const size = instance.getEnum('Size', {
	Small: 'small',
	Medium: 'medium',
	Large: 'large',
});
const variant = instance.getEnum('Type', {
	initial: 'initial',
	progress: 'progress',
	interrupted: 'interrupted',
	success: 'success',
	error: 'error',
});

export default {
	example: figma.code`<DsProgressLinear variant="${variant}" size="${size}" value={0} />`,
	imports: ["import { DsProgressLinear } from '@drivenets/design-system'"],
	id: 'ds-progress-linear',
	metadata: { nestable: false },
};
