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

ruleTester.run('no-deprecated-ds-popover-legacy', plugin.rules['no-deprecated-ds-popover-legacy'], {
	valid: ['<DsPopover.Root />', '<DsPopover.Trigger />', '<DsPopover.Panel />'],

	invalid: [
		{
			code: '<DsPopover trigger={<button />}>Content</DsPopover>',
			errors: [
				{
					message: `The DsPopover callable form (with a 'trigger' prop) is deprecated. Use the compound API: DsPopover.Root with DsPopover.Trigger and DsPopover.Panel.`,
					line: 1,
					endLine: 1,
					column: 2,
					endColumn: 11,
				},
			],
		},
	],
});
