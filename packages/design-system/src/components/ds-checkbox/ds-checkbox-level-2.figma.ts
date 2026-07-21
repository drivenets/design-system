// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=34856-101385
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-checkbox
// component=DsCheckbox
import figma from 'figma';

const instance = figma.selectedInstance;

const inner = instance.findInstance('DAP_checkbox_v03', { traverseInstances: true });

const color =
	inner.type === 'INSTANCE' ? inner.getEnum('color', { Default: 'default', warning: 'warning' }) : 'default';

const checked =
	inner.type === 'INSTANCE'
		? inner.getEnum('checked', { unchecked: 'unchecked', checked: 'checked', partial: 'partial' })
		: 'unchecked';

const state =
	inner.type === 'INSTANCE'
		? inner.getEnum('state', { default: 'default', hover: 'hover', focus: 'focus', disabled: 'disabled' })
		: 'default';

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
	id: 'ds-checkbox-level-2',
	metadata: { nestable: true },
};
