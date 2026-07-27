// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=14845-9203
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-tooltip
// component=DsTooltip
import figma from 'figma';

const instance = figma.selectedInstance;

const labelNode = instance.findText('Tooltip', { traverseInstances: true });
const content = labelNode.type === 'TEXT' ? labelNode.textContent : 'Tooltip text';

export default {
	example: figma.code`<DsTooltip content="${content}">{/* trigger element */}</DsTooltip>`,
	imports: ["import { DsTooltip } from '@drivenets/design-system'"],
	id: 'ds-tooltip',
	metadata: { nestable: false },
};
