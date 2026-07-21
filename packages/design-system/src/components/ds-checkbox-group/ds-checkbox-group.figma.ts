// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=34859-101457
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-checkbox-group
// component=DsCheckboxGroup
import figma from 'figma';

const instance = figma.selectedInstance;

const checkboxes = instance.getSlot('checkboxes slot');

export default {
	example: figma.code`<DsCheckboxGroup>${checkboxes}</DsCheckboxGroup>`,
	imports: ["import { DsCheckboxGroup, DsCheckbox } from '@drivenets/design-system'"],
	id: 'ds-checkbox-group',
	metadata: { nestable: false },
};
