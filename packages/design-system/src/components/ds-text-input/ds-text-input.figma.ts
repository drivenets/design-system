// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=13346-18325
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-text-input
// component=DsTextInput
//
// The Figma component `DAP_input_v01` is a single multi-type input. Its `Type`
// variant selects which code component to render:
//   Number              -> DsNumberInput
//   Password            -> DsPasswordInput
//   Standard/Error/Read -> DsTextInput
import figma from 'figma';

const instance = figma.selectedInstance;

const type = instance.getEnum('Type', {
	Standard: 'standard',
	Error: 'error',
	'Read Only': 'readOnly',
	Number: 'number',
	Password: 'password',
});

const size = instance.getEnum('Size', {
	Small: 'small',
	Default: 'default',
	Large: 'default',
});

const state = instance.getEnum('State', {
	Default: 'default',
	Hover: 'hover',
	'Focus/ Typing': 'focus',
	Disabled: 'disabled',
	'Read only': 'readOnly',
});

const disabled = state === 'disabled';
const readOnly = type === 'readOnly' || state === 'readOnly';

const sizeAttr = size === 'small' ? 'size="small"' : '';

const componentName =
	type === 'number' ? 'DsNumberInput' : type === 'password' ? 'DsPasswordInput' : 'DsTextInput';

// `DsFormControl` member name and attribute string, surfaced so a parent `DsFormControl`
// template can emit `<DsFormControl.${fcMember} ${fcProps} />`.
const fcMember = type === 'number' ? 'NumberInput' : type === 'password' ? 'PasswordInput' : 'TextInput';

const fcProps = [sizeAttr, disabled ? 'disabled' : '', readOnly ? 'readOnly' : ''].filter(Boolean).join(' ');

export default {
	example:
		type === 'number'
			? figma.code`<DsNumberInput ${sizeAttr} ${disabled ? 'disabled' : ''} />`
			: type === 'password'
				? figma.code`<DsPasswordInput ${sizeAttr} ${disabled ? 'disabled' : ''} />`
				: figma.code`<DsTextInput ${sizeAttr} ${disabled ? 'disabled' : ''} ${readOnly ? 'readOnly' : ''} />`,
	imports: [`import { ${componentName} } from '@drivenets/design-system';`],
	id: 'ds-text-input',
	metadata: { nestable: true, props: { fcMember, fcProps } },
} satisfies figma.Template;
