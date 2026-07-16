// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=37891-11066
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-popover
// component=DsPopover.Header
import figma from 'figma';

const instance = figma.selectedInstance;

const titleNode = instance.findText('Title', { traverseInstances: true });
const title = titleNode.type === 'TEXT' ? titleNode.textContent : 'Popover title';

export default {
	example: figma.code`<DsPopover.Header>${title}</DsPopover.Header>`,
	imports: ["import { DsPopover } from '@drivenets/design-system'"],
	id: 'ds-popover-header',
	metadata: { nestable: true },
};
