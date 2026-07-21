// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=15119-13518
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-spinner
// component=DsSpinner
import figma from 'figma';

const instance = figma.selectedInstance;

const size = instance.getEnum('Size', {
	SM: 'small',
	Default: 'medium',
	LG: 'large',
});

export default {
	example: figma.code`<DsSpinner size="${size}" />`,
	imports: ["import { DsSpinner } from '@drivenets/design-system'"],
	id: 'ds-spinner',
	metadata: { nestable: true },
};
