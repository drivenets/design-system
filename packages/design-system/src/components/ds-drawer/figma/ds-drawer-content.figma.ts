// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=31470-130498
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-drawer
// component=DsDrawer.Body
import figma from 'figma';

const instance = figma.selectedInstance;

const content = instance.getSlot('Drawer content slot');

export default {
	example: figma.code`<DsDrawer.Body>${content}</DsDrawer.Body>`,
	imports: ["import { DsDrawer } from '@drivenets/design-system'"],
	id: 'ds-drawer-content',
	metadata: { nestable: true },
};
