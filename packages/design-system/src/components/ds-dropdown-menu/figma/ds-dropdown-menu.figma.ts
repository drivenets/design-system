// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=35301-70996
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-dropdown-menu
// component=DsDropdownMenu
import figma from 'figma';

const instance = figma.selectedInstance;

const items = instance.getSlot('.partsDropdownList');

const footer = instance.findInstance('DAP_dropdown-footer_v01', { traverseInstances: true });
let footerCode: figma.ResultSection[] | undefined;
if (footer.type === 'INSTANCE') {
	footerCode = footer.executeTemplate().example;
}

export default {
	example: figma.code`<DsDropdownMenu.Root>
	<DsDropdownMenu.Trigger>{/* trigger element */}</DsDropdownMenu.Trigger>
	<DsDropdownMenu.Content>${items}${footerCode}</DsDropdownMenu.Content>
</DsDropdownMenu.Root>`,
	imports: ["import { DsDropdownMenu } from '@drivenets/design-system'"],
	id: 'ds-dropdown-menu',
	metadata: { nestable: false },
};
