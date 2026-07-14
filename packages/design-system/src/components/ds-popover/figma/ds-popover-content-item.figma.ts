// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=37891-84870
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-popover
// component=DsPopover.ContentItem
import figma from 'figma';

const instance = figma.selectedInstance;

const headlineNode = instance.findText('Content-item-headline', { traverseInstances: true });
const headlineAttr = headlineNode.type === 'TEXT' ? ` headline="${headlineNode.textContent}"` : '';

const body = instance.getSlot('Slot');

export default {
	example: figma.code`<DsPopover.ContentItem${headlineAttr}>${body}</DsPopover.ContentItem>`,
	imports: ["import { DsPopover } from '@drivenets/design-system'"],
	id: 'ds-popover-content-item',
	metadata: { nestable: true },
};
