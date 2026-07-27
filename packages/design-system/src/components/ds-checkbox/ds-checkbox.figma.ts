// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=33315-40861
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-checkbox
// component=DsCheckbox
import figma from 'figma';

const instance = figma.selectedInstance;

const color = instance.getEnum('color', {
	Default: 'default',
	warning: 'warning',
});

const checked = instance.getEnum('checked', {
	unchecked: 'unchecked',
	checked: 'checked',
	partial: 'partial',
});

const state = instance.getEnum('state', {
	default: 'default',
	hover: 'hover',
	focus: 'focus',
	disabled: 'disabled',
});

// `partial` is Ark's indeterminate state; both checked values seed the
// uncontrolled `defaultChecked` so the snippet renders without a handler.
const checkedAttr =
	checked === 'partial' ? 'defaultChecked="indeterminate"' : checked === 'checked' ? 'defaultChecked' : '';

const attrs = [
	'label="Label"',
	color === 'warning' ? 'variant="warning"' : '',
	checkedAttr,
	state === 'disabled' ? 'disabled' : '',
]
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsCheckbox ${attrs} />`,
	imports: ["import { DsCheckbox } from '@drivenets/design-system'"],
	id: 'ds-checkbox',
	metadata: { nestable: true },
};
