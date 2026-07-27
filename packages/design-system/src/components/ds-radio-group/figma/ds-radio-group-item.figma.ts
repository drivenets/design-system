// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=32934-446
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-radio-group
// component=DsRadioGroup.Item
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('state', {
	default: 'default',
	hover: 'hover',
	focus: 'focus',
	disabled: 'disabled',
});

const attrs = ['value="option"', 'label="Option"', state === 'disabled' ? 'disabled' : '']
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsRadioGroup.Item ${attrs} />`,
	imports: ["import { DsRadioGroup } from '@drivenets/design-system'"],
	id: 'ds-radio-group-item',
	metadata: { nestable: true },
};
