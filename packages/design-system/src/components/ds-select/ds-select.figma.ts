// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=13773-1189
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-select
// component=DsSelect
import figma from 'figma';

const instance = figma.selectedInstance;

const size = instance.getEnum('Size', {
	Default: 'default',
	Small: 'small',
});

const state = instance.getEnum('State', {
	Default: 'default',
	Hover: 'hover',
	Focus: 'focus',
	Active: 'active',
	Disable: 'disable',
	Error: 'error',
	'Error - Focus': 'errorFocus',
});

const disabled = state === 'disable';

const sizeAttr = size === 'small' ? 'size="small"' : '';

// Multi-select is driven by the nested dropdown menu's `Type` (Checkbox = multi). The menu
// lives inside the select tree even when collapsed, so the designer's intent is read in any
// state; an absent menu (ErrorHandle) safely defaults to single-select.
const menu = instance.findInstance('DAP_dropdown menu_v01', { traverseInstances: true });
const multiple =
	menu.type === 'INSTANCE' && menu.getEnum('Type', { default: false, Checkbox: true, Radio: false }) === true;

// `value` and `options` are required by `DsSelectProps` but are data, not derivable from
// Figma, so emit placeholders for the developer to fill in (the discriminated union needs
// an array `value` when `multiple`). The same string is surfaced as `fcProps` so a parent
// `DsFormControl` template can emit `<DsFormControl.Select ${fcProps} />` uniformly.
const attrs = [
	sizeAttr,
	disabled ? 'disabled' : '',
	multiple ? 'multiple' : '',
	'options={[]}',
	multiple ? 'value={[]}' : 'value=""',
]
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsSelect ${attrs} />`,
	imports: ["import { DsSelect } from '@drivenets/design-system';"],
	id: 'ds-select',
	metadata: { nestable: true, props: { fcMember: 'Select', fcProps: attrs } },
} satisfies figma.Template;
