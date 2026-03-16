import { RuleTester } from '@typescript-eslint/rule-tester';
import { requireStoryParams } from '../require-story-params';

const ruleTester = new RuleTester();

ruleTester.run('require-story-params', requireStoryParams, {
	valid: [
		{
			name: 'meta with all required properties',
			code: `
				const meta = {
					component: DsButton,
					title: 'Design System/Button',
				};

				export default meta;
			`,
		},

		{
			name: 'inline export with all required properties',
			code: `
				export default {
					component: DsButton,
					title: 'Design System/Button',
				};
			`,
		},

		{
			name: 'satisfies expression with all required properties',
			code: `
				export default {
					component: DsButton,
					title: 'Design System/Button',
				} satisfies Meta<typeof DsButton>;
			`,
		},

		{
			name: 'as expression with all required properties',
			code: `
				export default {
					component: DsButton,
					title: 'Design System/Button',
				} as Meta<typeof DsButton>;
			`,
		},

		{
			name: 'non-object default export is skipped',
			code: `
				const meta = 'not an object';

				export default meta;
			`,
		},
	],

	invalid: [
		{
			name: 'meta without component property',
			code: `
				const meta = {
					title: 'Design System/Button',
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'missing',
					data: { property: 'component' },
					line: 2,
					column: 18,
					endLine: 4,
					endColumn: 6,
				},
			],
		},

		{
			name: 'meta without title property',
			code: `
				const meta = {
					component: DsButton,
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'missing',
					data: { property: 'title' },
					line: 2,
					column: 18,
					endLine: 4,
					endColumn: 6,
				},
			],
		},

		{
			name: 'inline export without component property',
			code: `
				export default {
					title: 'Design System/Button',
				};
			`,
			errors: [
				{
					messageId: 'missing',
					data: { property: 'component' },
					line: 2,
					column: 20,
					endLine: 4,
					endColumn: 6,
				},
			],
		},

		{
			name: 'satisfies expression without title property',
			code: `
				const meta = {
					component: DsButton,
				} satisfies Meta<typeof DsButton>;

				export default meta;
			`,
			errors: [
				{
					messageId: 'missing',
					data: { property: 'title' },
					line: 2,
					column: 18,
					endLine: 4,
					endColumn: 6,
				},
			],
		},

		{
			name: 'as expression without title property',
			code: `
				const meta = {
					component: DsButton,
				} as Meta<typeof DsButton>;

				export default meta;
			`,
			errors: [
				{
					messageId: 'missing',
					data: { property: 'title' },
					line: 2,
					column: 18,
					endLine: 4,
					endColumn: 6,
				},
			],
		},

		{
			name: 'satisfies expression without title property in inline export',
			code: `
				export default {
					component: DsButton,
				} satisfies Meta<typeof DsButton>;
			`,
			errors: [
				{
					messageId: 'missing',
					data: { property: 'title' },
					line: 2,
					column: 20,
					endLine: 4,
					endColumn: 6,
				},
			],
		},

		{
			name: 'as expression without title property in inline export',
			code: `
				export default {
					component: DsButton,
				} as Meta<typeof DsButton>;
			`,
			errors: [
				{
					messageId: 'missing',
					data: { property: 'title' },
					line: 2,
					column: 20,
					endLine: 4,
					endColumn: 6,
				},
			],
		},

		{
			name: 'as/satisfies expressions without title property in variable declaration and in export',
			code: `
				const meta = {
					component: DsButton,
				} satisfies Meta<typeof DsButton>;

				export default meta as Meta<typeof DsButton>;
			`,
			errors: [
				{
					messageId: 'missing',
					data: { property: 'title' },
					line: 2,
					column: 18,
					endLine: 4,
					endColumn: 6,
				},
			],
		},

		{
			name: 'empty meta object',
			code: `
				const meta = {};
				export default meta;
			`,
			errors: [
				{
					messageId: 'missing',
					data: { property: 'title' },
					line: 2,
					column: 18,
					endLine: 2,
					endColumn: 20,
				},
				{
					messageId: 'missing',
					data: { property: 'component' },
					line: 2,
					column: 18,
					endLine: 2,
					endColumn: 20,
				},
			],
		},
	],
});
