import { JSXAttribute, JSXElement, JSXElementAttribute, JSXElementName } from './selectors';
import { createPlugin } from './create-plugin';

const eslintPlugin = createPlugin(
	'@drivenets/design-system',
	{
		name: 'no-deprecated-ds-button-legacy-design',
		selector: JSXElementAttribute('DsButton', 'design', 'legacy'),
		message: `Using the 'legacy' design for DsButton is deprecated. Use 'v1.2' instead.`,
	},

	{
		name: 'no-deprecated-ds-button-empty-design',
		selector: `${JSXElement('DsButton')}:not(:has( > ${JSXAttribute('design')} )) > .name`,
		message: `Omitting the design attribute for DsButton is not allowed. Pass 'design="v1.2"' so the new design is used.`,
	},

	{
		name: 'no-deprecated-ds-date-input',
		selector: JSXElementName('DsDateInput'),
		message: `DsDateInput is deprecated. Use DsDatePicker or DsDateRangePicker instead.`,
	},

	{
		name: 'no-native-button',
		selector: [
			JSXElementName('button'),
			JSXElementAttribute('input', 'type', 'button'),
			JSXElementAttribute('input', 'type', 'submit'),
		],
		message: `Using a native button is not allowed. Use DsButton instead.`,
	},

	{
		name: 'no-native-select',
		selector: JSXElementName('select'),
		message: `Using a native select is not allowed. Use DsSelect or DsFormControl.Select instead.`,
	},

	{
		name: 'no-native-checkbox',
		selector: JSXElementAttribute('input', 'type', 'checkbox'),
		message: `Using a native checkbox is not allowed. Use DsCheckbox instead.`,
	},

	{
		name: 'no-native-radio',
		selector: JSXElementAttribute('input', 'type', 'radio'),
		message: `Using a native radio input is not allowed. Use DsRadioGroup instead.`,
	},

	{
		name: 'no-native-number-input',
		selector: JSXElementAttribute('input', 'type', 'number'),
		message: `Using a native number input is not allowed. Use DsNumberInput or DsFormControl.NumberInput instead.`,
	},

	{
		name: 'no-native-text-input',
		selector: [
			JSXElementAttribute('input', 'type', 'text'),
			`${JSXElement('input')}:not(:has( > ${JSXAttribute('type')} )) > .name`,
		],
		message: `Using a native text input is not allowed. Use DsTextInput or DsFormControl.TextInput instead.`,
	},

	{
		name: 'no-native-password-input',
		selector: JSXElementAttribute('input', 'type', 'password'),
		message: `Using a native password input is not allowed. Use DsPasswordInput or DsFormControl.PasswordInput instead.`,
	},

	{
		name: 'no-native-file-input',
		selector: JSXElementAttribute('input', 'type', 'file'),
		message: `Using a native file input is not allowed. Use DsFileUpload instead.`,
	},

	{
		name: 'no-native-textarea',
		selector: JSXElementName('textarea'),
		message: `Using a native textarea is not allowed. Use DsTextarea or DsFormControl.Textarea instead.`,
	},

	{
		name: 'no-native-table',
		selector: JSXElementName('table'),
		message: `Using a native table is not allowed. Use DsTable instead.`,
	},

	{
		name: 'no-mui',
		selector: 'ImportDeclaration[source.value=/^@mui\\u002F/] > .source',
		message: 'Using MUI components is not allowed. Use DriveNets Design System components instead.',
	},
);

export default eslintPlugin;
