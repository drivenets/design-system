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
