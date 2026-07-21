// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=31416-38215
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-drawer
// component=DsDrawer.Header
import figma from 'figma';

const instance = figma.selectedInstance;

const titleNode = instance.findText('left side', { traverseInstances: true });
const title = titleNode.type === 'TEXT' ? titleNode.textContent : 'Drawer title';

export default {
	example: figma.code`<DsDrawer.Header><DsDrawer.Title>${title}</DsDrawer.Title><DsDrawer.CloseTrigger /></DsDrawer.Header>`,
	imports: ["import { DsDrawer } from '@drivenets/design-system'"],
	id: 'ds-drawer-header',
	metadata: { nestable: true },
};
