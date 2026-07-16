// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=35298-162404
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-dropdown-menu
// component=DsDropdownMenu.Item
import figma from 'figma';

const instance = figma.selectedInstance;

const type = instance.getEnum('type', {
	default: 'default',
	checkbox: 'checkbox',
	radio: 'radio',
	error: 'error',
});

const selected = instance.getEnum('selected', { true: true, false: false });

const labelNode = instance.findText('Menu text', { traverseInstances: true });
const label = labelNode.type === 'TEXT' ? labelNode.textContent : 'Menu item';

const variantAttr = type === 'error' ? ' variant="error"' : '';
const selectedAttr = selected ? ' selected' : '';
const indicator = type === 'checkbox' || type === 'radio' ? '<DsDropdownMenu.ItemIndicator />' : '';

export default {
	example: figma.code`<DsDropdownMenu.Item value="item"${variantAttr}${selectedAttr}>${label}${indicator}</DsDropdownMenu.Item>`,
	imports: ["import { DsDropdownMenu } from '@drivenets/design-system'"],
	id: 'ds-dropdown-menu-item',
	metadata: { nestable: true },
};
