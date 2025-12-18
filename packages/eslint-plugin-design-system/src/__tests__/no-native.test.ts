import { RuleTester } from 'eslint';
import plugin from '../index';

const ruleTester = new RuleTester({
	languageOptions: {
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
});

ruleTester.run('no-native-button', plugin.rules['no-native-button'], {
	valid: ['<DsButton />', '<DsButton type="submit" />', '<DsButton type="button" />'],

	invalid: [
		{
			code: '<button>Click me</button>',
			errors: [{ message: `Using a native button is not allowed. Use DsButton instead.` }],
		},
		{
			code: '<input type="button" />',
			errors: [{ message: `Using a native button is not allowed. Use DsButton instead.` }],
		},
		{
			code: '<input type="submit" />',
			errors: [{ message: `Using a native button is not allowed. Use DsButton instead.` }],
		},
	],
});

ruleTester.run('no-native-select', plugin.rules['no-native-select'], {
	valid: ['<DsSelect />', '<DsFormControl.Select />'],

	invalid: [
		{
			code: '<select></select>',
			errors: [
				{ message: `Using a native select is not allowed. Use DsSelect or DsFormControl.Select instead.` },
			],
		},
	],
});

ruleTester.run('no-native-checkbox', plugin.rules['no-native-checkbox'], {
	valid: ['<DsCheckbox />'],

	invalid: [
		{
			code: '<input type="checkbox" />',
			errors: [{ message: `Using a native checkbox is not allowed. Use DsCheckbox instead.` }],
		},
	],
});

ruleTester.run('no-native-radio', plugin.rules['no-native-radio'], {
	valid: ['<DsRadioGroup />'],

	invalid: [
		{
			code: '<input type="radio" />',
			errors: [{ message: `Using a native radio input is not allowed. Use DsRadioGroup instead.` }],
		},
	],
});

ruleTester.run('no-native-number-input', plugin.rules['no-native-number-input'], {
	valid: ['<DsNumberInput />', '<DsFormControl.NumberInput />'],

	invalid: [
		{
			code: '<input type="number" />',
			errors: [
				{
					message: `Using a native number input is not allowed. Use DsNumberInput or DsFormControl.NumberInput instead.`,
				},
			],
		},
	],
});

ruleTester.run('no-native-text-input', plugin.rules['no-native-text-input'], {
	valid: ['<DsTextInput />', '<DsFormControl.TextInput />'],

	invalid: [
		{
			code: '<input type="text" />',
			errors: [
				{
					message: `Using a native text input is not allowed. Use DsTextInput or DsFormControl.TextInput instead.`,
				},
			],
		},
		{
			code: '<input />',
			errors: [
				{
					message: `Using a native text input is not allowed. Use DsTextInput or DsFormControl.TextInput instead.`,
				},
			],
		},
	],
});

ruleTester.run('no-native-password-input', plugin.rules['no-native-password-input'], {
	valid: ['<DsPasswordInput />', '<DsFormControl.PasswordInput />'],

	invalid: [
		{
			code: '<input type="password" />',
			errors: [
				{
					message: `Using a native password input is not allowed. Use DsPasswordInput or DsFormControl.PasswordInput instead.`,
				},
			],
		},
	],
});

ruleTester.run('no-native-file-input', plugin.rules['no-native-file-input'], {
	valid: ['<DsFileUpload />'],

	invalid: [
		{
			code: '<input type="file" />',
			errors: [{ message: `Using a native file input is not allowed. Use DsFileUpload instead.` }],
		},
	],
});

ruleTester.run('no-native-textarea', plugin.rules['no-native-textarea'], {
	valid: ['<DsTextarea />', '<DsFormControl.Textarea />'],

	invalid: [
		{
			code: '<textarea></textarea>',
			errors: [
				{
					message: `Using a native textarea is not allowed. Use DsTextarea or DsFormControl.Textarea instead.`,
				},
			],
		},
	],
});

ruleTester.run('no-native-table', plugin.rules['no-native-table'], {
	valid: ['<DsTable />'],

	invalid: [
		{
			code: '<table></table>',
			errors: [{ message: `Using a native table is not allowed. Use DsTable instead.` }],
		},
	],
});
