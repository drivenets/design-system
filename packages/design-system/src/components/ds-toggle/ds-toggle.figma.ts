// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=15035-29699
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-toggle
// component=DsToggle
import figma from 'figma';

const instance = figma.selectedInstance;

const on = instance.getEnum('On', {
	Yes: 'yes',
	No: 'no',
});

const size = instance.getEnum('Size', {
	Default: 'default',
	Small: 'small',
});

const state = instance.getEnum('State', {
	Default: 'default',
	Hover: 'hover',
	Focus: 'focus',
	Disabled: 'disabled',
});

const attrs = [
	'label="Label"',
	size === 'small' ? 'size="small"' : '',
	on === 'yes' ? 'checked' : '',
	state === 'disabled' ? 'disabled' : '',
]
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsToggle ${attrs} />`,
	imports: ["import { DsToggle } from '@drivenets/design-system'"],
	id: 'ds-toggle',
	metadata: { nestable: true },
};
