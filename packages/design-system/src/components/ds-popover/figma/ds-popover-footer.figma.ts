// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=37891-84845
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-popover
// component=DsPopover.Footer
import figma from 'figma';

const instance = figma.selectedInstance;

const button = instance.findInstance('DAP_Button_v03', { traverseInstances: true });
let buttonCode: figma.ResultSection[] | undefined;
if (button.type === 'INSTANCE') {
	buttonCode = button.executeTemplate().example;
}

export default {
	example: figma.code`<DsPopover.Footer>${buttonCode}</DsPopover.Footer>`,
	imports: ["import { DsPopover } from '@drivenets/design-system'"],
	id: 'ds-popover-footer',
	metadata: { nestable: true },
};
