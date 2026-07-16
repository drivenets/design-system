// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=37891-84883
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-popover
// component=DsPopover.Content
import figma from 'figma';

const instance = figma.selectedInstance;

const items = instance.getSlot('Slot');

export default {
	example: figma.code`<DsPopover.Content>${items}</DsPopover.Content>`,
	imports: ["import { DsPopover } from '@drivenets/design-system'"],
	id: 'ds-popover-content',
	metadata: { nestable: true },
};
