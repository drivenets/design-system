import { RuleTester } from '@typescript-eslint/rule-tester';
import { noAutodocsTag } from '../no-autodocs-tag';

const ruleTester = new RuleTester();

ruleTester.run('no-autodocs-tag', noAutodocsTag, {
	valid: [
		{
			name: 'no tags property',
			code: `
				const meta = {
					title: 'Design System/Button',
				};

				export default meta;
			`,
		},

		{
			name: 'tags without autodocs',
			code: `
				const meta = {
					title: 'Design System/Button',
					tags: ['deprecated'],
				};

				export default meta;
			`,
		},

		{
			name: 'empty tags array',
			code: `
				const meta = {
					title: 'Design System/Button',
					tags: [],
				};

				export default meta;
			`,
		},

		{
			name: 'inline export without autodocs',
			code: `
				export default {
					title: 'Design System/Button',
					tags: ['deprecated'],
				};
			`,
		},
	],

	invalid: [
		{
			name: 'autodocs as the only tag - removes the tags property',
			code: `
				const meta = {
					title: 'Design System/Button',
					tags: ['autodocs'],
				};

				export default meta;
			`,
			output: `
				const meta = {
					title: 'Design System/Button',
					
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'noAutodocsTag',
					line: 4,
					endLine: 4,
					column: 13,
					endColumn: 23,
				},
			],
		},

		{
			name: 'autodocs as first tag - removes autodocs and keeps the rest',
			code: `
				const meta = {
					title: 'Design System/Button',
					tags: ['autodocs', 'deprecated'],
				};

				export default meta;
			`,
			output: `
				const meta = {
					title: 'Design System/Button',
					tags: [ 'deprecated'],
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'noAutodocsTag',
					line: 4,
					endLine: 4,
					column: 13,
					endColumn: 23,
				},
			],
		},

		{
			name: 'autodocs as last tag - removes autodocs and keeps the rest',
			code: `
				const meta = {
					title: 'Design System/Button',
					tags: ['deprecated', 'autodocs'],
				};

				export default meta;
			`,
			output: `
				const meta = {
					title: 'Design System/Button',
					tags: ['deprecated', ],
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'noAutodocsTag',
					line: 4,
					endLine: 4,
					column: 27,
					endColumn: 37,
				},
			],
		},

		{
			name: 'autodocs in the middle - removes autodocs and keeps the rest',
			code: `
				const meta = {
					title: 'Design System/Button',
					tags: ['!dev', 'autodocs', 'deprecated'],
				};

				export default meta;
			`,
			output: `
				const meta = {
					title: 'Design System/Button',
					tags: ['!dev',  'deprecated'],
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'noAutodocsTag',
					line: 4,
					endLine: 4,
					column: 21,
					endColumn: 31,
				},
			],
		},

		{
			name: 'inline export with autodocs',
			code: `
				export default {
					title: 'Design System/Button',
					tags: ['autodocs'],
				};
			`,
			output: `
				export default {
					title: 'Design System/Button',
					
				};
			`,
			errors: [
				{
					messageId: 'noAutodocsTag',
					line: 4,
					endLine: 4,
					column: 13,
					endColumn: 23,
				},
			],
		},
	],
});
