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

ruleTester.run(
	'no-deprecated-ds-button-legacy-design',
	plugin.rules['no-deprecated-ds-button-legacy-design'],
	{
		valid: ['<DsButton design="v1.2">Click me</DsButton>'],

		invalid: [
			{
				code: '<DsButton>Click me</DsButton>',
				errors: [{ message: `Using the 'legacy' design for DsButton is deprecated. Use 'v1.2' instead.` }],
			},

			{
				code: '<DsButton design="legacy">Click me</DsButton>',
				errors: [{ message: `Using the 'legacy' design for DsButton is deprecated. Use 'v1.2' instead.` }],
			},
		],
	},
);

ruleTester.run('no-deprecated-ds-dialog', plugin.rules['no-deprecated-ds-dialog'], {
	valid: ['<Dialog />', '<DsModal />', '<DsConfirmation />'],

	invalid: [
		{
			code: '<DsDialog>Click me</DsDialog>',
			errors: [{ message: `DsDialog is deprecated. Use DsModal or DsConfirmation instead.` }],
		},
	],
});

ruleTester.run('no-deprecated-ds-system-status', plugin.rules['no-deprecated-ds-system-status'], {
	valid: ['<DsStatusBadge />'],

	invalid: [
		{
			code: '<DsSystemStatus />',
			errors: [{ message: `DsSystemStatus is deprecated. Use DsStatusBadge instead.` }],
		},
	],
});

ruleTester.run(
	'no-deprecated-ds-dropdown-menu-legacy',
	plugin.rules['no-deprecated-ds-dropdown-menu-legacy'],
	{
		valid: ['<DsDropdownMenu />'],

		invalid: [
			{
				code: '<DsDropdownMenuLegacy />',
				errors: [{ message: `DsDropdownMenuLegacy is deprecated. Use DsDropdownMenu instead.` }],
			},
		],
	},
);

ruleTester.run('no-deprecated-ds-radio-group-legacy', plugin.rules['no-deprecated-ds-radio-group-legacy'], {
	valid: ['<DsRadioGroup />'],

	invalid: [
		{
			code: '<DsRadioGroupLegacy />',
			errors: [{ message: `DsRadioGroupLegacy is deprecated. Use DsRadioGroup instead.` }],
		},
	],
});

ruleTester.run('no-deprecated-ds-chip', plugin.rules['no-deprecated-ds-chip'], {
	valid: ['<DsTag />', '<DsTagFilter />'],

	invalid: [
		{
			code: '<DsChip />',
			errors: [{ message: `DsChip is deprecated. Use DsTag instead.` }],
		},
	],
});

ruleTester.run('no-deprecated-ds-chip-group', plugin.rules['no-deprecated-ds-chip-group'], {
	valid: ['<DsTag />', '<DsTagFilter />'],

	invalid: [
		{
			code: '<DsChipGroup />',
			errors: [{ message: `DsChipGroup is deprecated. Use DsTagFilter instead.` }],
		},
	],
});
