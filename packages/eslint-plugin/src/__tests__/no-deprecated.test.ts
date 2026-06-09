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
				code: '<DsButton design="legacy">Click me</DsButton>',
				errors: [
					{
						message: `Using the 'legacy' design for DsButton is deprecated. Use 'v1.2' instead.`,
						line: 1,
						endLine: 1,
						column: 11,
						endColumn: 26,
					},
				],
			},
		],
	},
);

ruleTester.run('no-deprecated-ds-button-empty-design', plugin.rules['no-deprecated-ds-button-empty-design'], {
	valid: ['<DsButton design="v1.2">Click me</DsButton>'],

	invalid: [
		{
			code: '<DsButton>Click me</DsButton>',
			errors: [
				{
					message: `Omitting the design attribute for DsButton is not allowed. Pass 'design="v1.2"' so the new design is used.`,
					line: 1,
					endLine: 1,
					column: 2,
					endColumn: 10,
				},
			],
		},
	],
});

ruleTester.run('no-deprecated-ds-dialog', plugin.rules['no-deprecated-ds-dialog'], {
	valid: ['<Dialog />', '<DsModal />', '<DsConfirmation />'],

	invalid: [
		{
			code: '<DsDialog>Click me</DsDialog>',
			errors: [
				{
					message: `DsDialog is deprecated. Use DsModal or DsConfirmation instead.`,
					line: 1,
					endLine: 1,
					column: 2,
					endColumn: 10,
				},
			],
		},
	],
});

ruleTester.run('no-deprecated-ds-confirmation', plugin.rules['no-deprecated-ds-confirmation'], {
	valid: ['<DsModal variant="info" />'],

	invalid: [
		{
			code: '<DsConfirmation />',
			errors: [
				{
					message: `DsConfirmation is deprecated. Use DsModal instead.`,
					line: 1,
					endLine: 1,
					column: 2,
					endColumn: 16,
				},
			],
		},
	],
});

ruleTester.run('no-deprecated-ds-status-badge', plugin.rules['no-deprecated-ds-status-badge'], {
	valid: ['<DsStatusBadgeV2 />'],

	invalid: [
		{
			code: '<DsStatusBadge />',
			errors: [
				{
					message: `DsStatusBadge is deprecated. Use DsStatusBadgeV2 instead.`,
					line: 1,
					endLine: 1,
					column: 2,
					endColumn: 15,
				},
			],
		},
	],
});

ruleTester.run('no-deprecated-ds-system-status', plugin.rules['no-deprecated-ds-system-status'], {
	valid: ['<DsStatusBadgeV2 />'],

	invalid: [
		{
			code: '<DsSystemStatus />',
			errors: [
				{
					message: `DsSystemStatus is deprecated. Use DsStatusBadgeV2 instead.`,
					line: 1,
					endLine: 1,
					column: 2,
					endColumn: 16,
				},
			],
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
				errors: [
					{
						message: `DsDropdownMenuLegacy is deprecated. Use DsDropdownMenu instead.`,
						line: 1,
						endLine: 1,
						column: 2,
						endColumn: 22,
					},
				],
			},
		],
	},
);

ruleTester.run('no-deprecated-ds-radio-group-legacy', plugin.rules['no-deprecated-ds-radio-group-legacy'], {
	valid: ['<DsRadioGroup />'],

	invalid: [
		{
			code: '<DsRadioGroupLegacy />',
			errors: [
				{
					message: `DsRadioGroupLegacy is deprecated. Use DsRadioGroup instead.`,
					line: 1,
					endLine: 1,
					column: 2,
					endColumn: 20,
				},
			],
		},
	],
});

ruleTester.run('no-deprecated-ds-chip', plugin.rules['no-deprecated-ds-chip'], {
	valid: ['<DsTag />', '<DsTagFilter />'],

	invalid: [
		{
			code: '<DsChip />',
			errors: [
				{
					message: `DsChip is deprecated. Use DsTag instead.`,
					line: 1,
					endLine: 1,
					column: 2,
					endColumn: 8,
				},
			],
		},
	],
});

ruleTester.run('no-deprecated-ds-chip-group', plugin.rules['no-deprecated-ds-chip-group'], {
	valid: ['<DsTag />', '<DsTagFilter />'],

	invalid: [
		{
			code: '<DsChipGroup />',
			errors: [
				{
					message: `DsChipGroup is deprecated. Use DsTagFilter instead.`,
					line: 1,
					endLine: 1,
					column: 2,
					endColumn: 13,
				},
			],
		},
	],
});

ruleTester.run('no-deprecated-ds-date-input', plugin.rules['no-deprecated-ds-date-input'], {
	valid: ['<DsDatePicker />', '<DsDateRangePicker />'],

	invalid: [
		{
			code: '<DsDateInput />',
			errors: [
				{
					message: `DsDateInput is deprecated. Use DsDatePicker or DsDateRangePicker instead.`,
					line: 1,
					endLine: 1,
					column: 2,
					endColumn: 13,
				},
			],
		},
	],
});
