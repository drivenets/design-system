// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=31416-38250
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-drawer
// component=DsDrawer.Footer
import figma from 'figma';

const instance = figma.selectedInstance;

const button = instance.findInstance('DAP_Button_v03', { traverseInstances: true });
let buttonCode: figma.ResultSection[] | undefined;
if (button.type === 'INSTANCE') {
	buttonCode = button.executeTemplate().example;
}

export default {
	example: figma.code`<DsDrawer.Footer><DsDrawer.Actions>${buttonCode}</DsDrawer.Actions></DsDrawer.Footer>`,
	imports: ["import { DsDrawer } from '@drivenets/design-system'"],
	id: 'ds-drawer-footer',
	metadata: { nestable: true },
};
