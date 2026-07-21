// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=31945-54500
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-drawer
// component=DsDrawer
import figma from 'figma';

const instance = figma.selectedInstance;

const header = instance.findInstance('DAP_drawer-in-header_v02', { traverseInstances: true });
let headerCode: figma.ResultSection[] | undefined;
if (header.type === 'INSTANCE') {
	headerCode = header.executeTemplate().example;
}

const content = instance.findInstance('DAP_drawer-content_v02', { traverseInstances: true });
let contentCode: figma.ResultSection[] | undefined;
if (content.type === 'INSTANCE') {
	contentCode = content.executeTemplate().example;
}

// The footer instance is named `sheet-footer` inside the assembled drawer but the
// standalone part is `DAP_drawer-in-footer_v02`; try both so the footer resolves.
let footer = instance.findInstance('DAP_drawer-in-footer_v02', { traverseInstances: true });
if (footer.type !== 'INSTANCE') {
	footer = instance.findInstance('sheet-footer', { traverseInstances: true });
}
let footerCode: figma.ResultSection[] | undefined;
if (footer.type === 'INSTANCE') {
	footerCode = footer.executeTemplate().example;
}

export default {
	example: figma.code`<DsDrawer open columns={4} onOpenChange={() => {}}>${headerCode}${contentCode}${footerCode}</DsDrawer>`,
	imports: ["import { DsDrawer } from '@drivenets/design-system'"],
	id: 'ds-drawer',
	metadata: { nestable: false },
};
