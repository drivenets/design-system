// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=15094-6249
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-segment-group
// component=DsSegmentGroup.Item
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
	Default: 'default',
	Hover: 'hover',
	Pressed: 'pressed',
	Focus: 'focus',
	Disabled: 'disabled',
});

const attrs = ['value="option"', 'label="Option"', state === 'disabled' ? 'disabled' : '']
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsSegmentGroup.Item ${attrs} />`,
	imports: ["import { DsSegmentGroup } from '@drivenets/design-system'"],
	id: 'ds-segment-group-item',
	metadata: { nestable: true },
};
