import { RuleTester } from 'eslint';
import { expect, it } from 'vitest';

const ruleTester = new RuleTester({
	languageOptions: {
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
});

it('placeholder: RuleTester instantiates', () => {
	expect(ruleTester).toBeInstanceOf(RuleTester);
});

// Example test for the future reference

// ruleTester.run('no-deprecated-ds-date-input', plugin.rules['no-deprecated-ds-date-input'], {
// 	valid: ['<DsDatePicker />', '<DsDateRangePicker />'],

// 	invalid: [
// 		{
// 			code: '<DsDateInput />',
// 			errors: [
// 				{
// 					message: `DsDateInput is deprecated. Use DsDatePicker or DsDateRangePicker instead.`,
// 					line: 1,
// 					endLine: 1,
// 					column: 2,
// 					endColumn: 13,
// 				},
// 			],
// 		},
// 	],
// });
