import { JSXAttribute, JSXElement } from './selectors';
import { createPlugin } from './create-plugin';

const eslintPlugin = createPlugin(
	'@drivenets/design-system',
	{
		name: 'no-deprecated-ds-button-legacy-design',
		selector: [
			JSXElement('DsButton', { design: 'legacy' }),
			`${JSXElement('DsButton')}:not(:has( > ${JSXAttribute('design')} ))`,
		],
		message: `Using the 'legacy' design for DsButton is deprecated. Use 'v1.2' instead.`,
	},

	{
		name: 'no-deprecated-ds-dialog',
		selector: JSXElement('DsDialog'),
		message: `DsDialog is deprecated. Use DsModal or DsConfirmation instead.`,
	},

	{
		name: 'no-deprecated-ds-system-status',
		selector: JSXElement('DsSystemStatus'),
		message: `DsSystemStatus is deprecated. Use DsStatusBadge instead.`,
	},

	{
		name: 'no-deprecated-ds-dropdown-menu-legacy',
		selector: JSXElement('DsDropdownMenuLegacy'),
		message: `DsDropdownMenuLegacy is deprecated. Use DsDropdownMenu instead.`,
	},

	{
		name: 'no-deprecated-ds-radio-group-legacy',
		selector: JSXElement('DsRadioGroupLegacy'),
		message: `DsRadioGroupLegacy is deprecated. Use DsRadioGroup instead.`,
	},

	{
		name: 'no-deprecated-ds-chip',
		selector: JSXElement('DsChip'),
		message: `DsChip is deprecated. Use DsTag instead.`,
	},

	{
		name: 'no-deprecated-ds-chip-group',
		selector: JSXElement('DsChipGroup'),
		message: `DsChipGroup is deprecated. Use DsTagFilter instead.`,
	},

	{
		name: 'no-native-button',
		selector: [
			JSXElement('button'),
			JSXElement('input', { type: 'button' }),
			JSXElement('input', { type: 'submit' }),
		],
		message: `Using a native button is not allowed. Use DsButton instead.`,
	},

	{
		name: 'no-native-select',
		selector: JSXElement('select'),
		message: `Using a native select is not allowed. Use DsSelect or DsFormControl.Select instead.`,
	},

	{
		name: 'no-native-checkbox',
		selector: JSXElement('input', { type: 'checkbox' }),
		message: `Using a native checkbox is not allowed. Use DsCheckbox instead.`,
	},

	{
		name: 'no-native-radio',
		selector: JSXElement('input', { type: 'radio' }),
		message: `Using a native radio input is not allowed. Use DsRadioGroup instead.`,
	},

	{
		name: 'no-native-number-input',
		selector: JSXElement('input', { type: 'number' }),
		message: `Using a native number input is not allowed. Use DsNumberInput or DsFormControl.NumberInput instead.`,
	},

	{
		name: 'no-native-text-input',
		selector: [
			JSXElement('input', { type: 'text' }),
			`${JSXElement('input')}:not(:has( > ${JSXAttribute('type')} ))`,
		],
		message: `Using a native text input is not allowed. Use DsTextInput or DsFormControl.TextInput instead.`,
	},

	{
		name: 'no-native-password-input',
		selector: JSXElement('input', { type: 'password' }),
		message: `Using a native password input is not allowed. Use DsPasswordInput or DsFormControl.PasswordInput instead.`,
	},

	{
		name: 'no-native-file-input',
		selector: JSXElement('input', { type: 'file' }),
		message: `Using a native file input is not allowed. Use DsFileUpload instead.`,
	},

	{
		name: 'no-native-textarea',
		selector: JSXElement('textarea'),
		message: `Using a native textarea is not allowed. Use DsTextarea or DsFormControl.Textarea instead.`,
	},

	{
		name: 'no-native-table',
		selector: JSXElement('table'),
		message: `Using a native table is not allowed. Use DsTable instead.`,
	},

	{
		name: 'no-mui',
		selector: 'ImportDeclaration[source.value=/^@mui\\u002F/]',
		message: 'Using MUI components is not allowed. Use DriveNets Design System components instead.',
	},
);

export default eslintPlugin;
