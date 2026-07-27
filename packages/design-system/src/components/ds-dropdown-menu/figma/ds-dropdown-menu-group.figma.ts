// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=13761-206276
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-dropdown-menu
// component=DsDropdownMenu.ItemGroup
import figma from 'figma';

const instance = figma.selectedInstance;

const collapsed = instance.getEnum('Type', { Expanded: false, Collapsed: true });

const labelNode = instance.findText('Menu text', { traverseInstances: true });
const label = labelNode.type === 'TEXT' ? labelNode.textContent : 'Group name';

const collapsedAttr = collapsed ? ' collapsed' : '';

export default {
	example: figma.code`<DsDropdownMenu.ItemGroup${collapsedAttr}>
	<DsDropdownMenu.ItemGroupLabel>${label}</DsDropdownMenu.ItemGroupLabel>
	<DsDropdownMenu.ItemGroupContent>{/* group items */}</DsDropdownMenu.ItemGroupContent>
</DsDropdownMenu.ItemGroup>`,
	imports: ["import { DsDropdownMenu } from '@drivenets/design-system'"],
	id: 'ds-dropdown-menu-group',
	metadata: { nestable: true },
};
