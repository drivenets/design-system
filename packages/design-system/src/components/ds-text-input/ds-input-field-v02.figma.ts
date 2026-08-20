// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=39475-58722
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-text-input
// component=DsTextInput
import figma from 'figma';

interface FieldInfo {
	component: string;
	fcMember?: string;
	size?: boolean;
	large?: boolean;
	readOnly?: boolean;
	invalid?: boolean;
	data?: string;
}

const textInfo: FieldInfo = {
	component: 'DsTextInput',
	fcMember: 'TextInput',
	size: true,
	large: true,
	readOnly: true,
};

const registry: Record<string, FieldInfo> = {
	text: textInfo,
	textArea: { component: 'DsTextarea', fcMember: 'Textarea' },
	number: { component: 'DsNumberInput', fcMember: 'NumberInput', size: true, readOnly: true },
	password: { component: 'DsPasswordInput', fcMember: 'PasswordInput', size: true, readOnly: true },
	select: {
		component: 'DsSelect',
		fcMember: 'Select',
		size: true,
		large: true,
		invalid: true,
		data: 'options={[]} value=""',
	},
	date: { component: 'DsDateInput', fcMember: 'DateInput' },
	time: { component: 'DsTimePicker', fcMember: 'TimePicker' },
	autocompleteSearch: {
		component: 'DsAutocomplete',
		size: true,
		large: true,
		invalid: true,
		data: 'options={[]} showTrigger={false}',
	},
	autocompleteCombobox: {
		component: 'DsAutocomplete',
		size: true,
		large: true,
		invalid: true,
		data: 'options={[]}',
	},
};

const instance = figma.selectedInstance;

const size = instance.getEnum('size', {
	small: 'small',
	medium: 'medium',
	large: 'large',
});

const state = instance.getEnum('state', {
	default: 'default',
	hover: 'hover',
	focus: 'focus',
	disabled: 'disabled',
	'read-only': 'readOnly',
	error: 'error',
});

const part = instance.findInstance('DAP-part_InputType_v01', { traverseInstances: true });
const inputType =
	(part.type === 'INSTANCE'
		? part.getEnum('inputType', {
				text: 'text',
				'text-area': 'textArea',
				select: 'select',
				password: 'password',
				number: 'number',
				date: 'date',
				time: 'time',
				'autocomplete-search': 'autocompleteSearch',
				'autocomplete-combobox': 'autocompleteCombobox',
			})
		: 'text') ?? 'text';

const info = registry[inputType] ?? textInfo;

const disabled = state === 'disabled';
const readOnly = state === 'readOnly';
const error = state === 'error';

const sizeAttr =
	info.size && size === 'small' ? 'size="small"' : info.large && size === 'large' ? 'size="large"' : '';

const attrs = [
	sizeAttr,
	info.data ?? '',
	disabled ? 'disabled' : '',
	info.readOnly && readOnly ? 'readOnly' : '',
	info.invalid && error ? 'invalid' : '',
]
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<${info.component} ${attrs} />`,
	imports: [`import { ${info.component} } from '@drivenets/design-system';`],
	id: 'ds-input-field-v02',
	metadata: { nestable: true, props: { fcMember: info.fcMember, fcProps: attrs } },
} satisfies figma.Template;
