// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=15978-26200
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-panel
// component=DsPanel
import figma from 'figma';

const instance = figma.selectedInstance;

const open = instance.getEnum('type', { expanded: true, collapsed: false });
const openAttr = open ? 'open' : 'open={false}';

export default {
	example: figma.code`<DsPanel ${openAttr}>{/* panel content */}</DsPanel>`,
	imports: ["import { DsPanel } from '@drivenets/design-system'"],
	id: 'ds-panel',
	metadata: { nestable: false },
};
