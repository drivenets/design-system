import { RuleTester } from '@typescript-eslint/rule-tester';

import { noEmptyStory } from '../no-empty-story';

const ruleTester = new RuleTester();

ruleTester.run('no-empty-story', noEmptyStory, {
	valid: [
		{
			name: 'non-empty args',
			code: `export const Primary = { args: { label: 'Hello' } };`,
		},

		{
			name: 'has render function',
			code: `export const Primary = { render: () => {} };`,
		},

		{
			name: 'has render and empty args',
			code: `export const Primary = { args: {}, render: () => {} };`,
		},

		{
			name: 'has play function',
			code: `export const Primary = { play: () => {} };`,
		},

		{
			name: 'has play and empty args',
			code: `export const Primary = { args: {}, play: () => {} };`,
		},

		{
			name: 'args referencing a variable',
			code: `
				const someArgs = { label: 'Hello' };
				export const Primary = { args: someArgs };
			`,
		},

		{
			name: 'default export with empty object',
			code: `export default {};`,
		},

		{
			name: 'named export of a non-object value',
			code: `export const name = 'Button';`,
		},
	],

	invalid: [
		{
			name: 'empty object',
			code: `export const Primary = {};`,
			errors: [
				{
					messageId: 'noEmptyStory',
					line: 1,
					endLine: 1,
					column: 24,
					endColumn: 26,
				},
			],
		},

		{
			name: 'empty object with type annotation',
			code: `export const Primary: Story = {};`,
			errors: [
				{
					messageId: 'noEmptyStory',
					line: 1,
					endLine: 1,
					column: 31,
					endColumn: 33,
				},
			],
		},

		{
			name: 'empty object with satisfies',
			code: `export const Primary = {} satisfies Story;`,
			errors: [
				{
					messageId: 'noEmptyStory',
					line: 1,
					endLine: 1,
					column: 24,
					endColumn: 26,
				},
			],
		},

		{
			name: 'empty object with as assertion',
			code: `export const Primary = {} as Story;`,
			errors: [
				{
					messageId: 'noEmptyStory',
					line: 1,
					endLine: 1,
					column: 24,
					endColumn: 26,
				},
			],
		},

		{
			name: 'empty args',
			code: `export const Primary = { args: {} };`,
			errors: [
				{
					messageId: 'noEmptyStory',
					line: 1,
					endLine: 1,
					column: 24,
					endColumn: 36,
				},
			],
		},

		{
			name: 'variable reference to empty object',
			code: `
				const empty = {};
				export const Primary = empty;
			`,
			errors: [
				{
					messageId: 'noEmptyStory',
					line: 2,
					endLine: 2,
					column: 19,
					endColumn: 21,
				},
			],
		},

		{
			name: 'variable reference chain',
			code: `
				const a = {};
				const b = a;
				export const Primary = b;
			`,
			errors: [
				{
					messageId: 'noEmptyStory',
					line: 2,
					endLine: 2,
					column: 15,
					endColumn: 17,
				},
			],
		},

		{
			name: 'multiple empty exports',
			code: `
				export const Primary = {};
				export const Secondary = {};
			`,
			errors: [
				{
					messageId: 'noEmptyStory',
					line: 2,
					endLine: 2,
					column: 28,
					endColumn: 30,
				},
				{
					messageId: 'noEmptyStory',
					line: 3,
					endLine: 3,
					column: 30,
					endColumn: 32,
				},
			],
		},

		{
			name: 'shared empty variable',
			code: `
				const empty = {};
				export const A = empty;
				export const B = empty;
			`,
			errors: [
				{
					messageId: 'noEmptyStory',
					line: 2,
					endLine: 2,
					column: 19,
					endColumn: 21,
				},
			],
		},
	],
});
