// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=14824-7324
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-autocomplete
// component=DsAutocomplete
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
	Default: 'default',
	Hover: 'hover',
	Focus: 'focus',
	Disable: 'disable',
	Error: 'error',
	'read only': 'readOnly',
});

const comboBox = instance.getEnum('Combo box', {
	ON: 'on',
	OFF: 'off',
});

const attrs = [
	'options={[]}',
	comboBox === 'off' ? 'showTrigger={false}' : '',
	state === 'disable' ? 'disabled' : '',
	state === 'error' ? 'invalid' : '',
]
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsAutocomplete ${attrs} />`,
	imports: ["import { DsAutocomplete } from '@drivenets/design-system'"],
	id: 'ds-autocomplete',
	metadata: { nestable: true },
};
