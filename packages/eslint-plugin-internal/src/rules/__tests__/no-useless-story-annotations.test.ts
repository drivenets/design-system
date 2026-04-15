import { RuleTester } from '@typescript-eslint/rule-tester';
import { noUselessStoryAnnotations } from '../no-useless-story-annotations';

const ruleTester = new RuleTester();

ruleTester.run('no-useless-story-annotations', noUselessStoryAnnotations, {
	valid: [
		// --- args ---
		{
			name: 'non-empty args on story',
			code: `export const Primary = { args: { label: 'Hello' } };`,
		},
		{
			name: 'non-empty args on meta',
			code: `
				const meta = { args: { label: 'Hello' } };
				export default meta;
			`,
		},
		{
			name: 'args referencing a variable (not followed)',
			code: `export const Primary = { args: someArgs };`,
		},

		// --- parameters ---
		{
			name: 'non-empty parameters',
			code: `export const Primary = { parameters: { layout: 'centered' } };`,
		},

		// --- argTypes ---
		{
			name: 'non-empty argTypes',
			code: `export const Primary = { argTypes: { label: { control: 'text' } } };`,
		},

		// --- tags ---
		{
			name: 'non-empty tags',
			code: `export const Primary = { tags: ['deprecated'] };`,
		},

		// --- decorators ---
		{
			name: 'non-empty decorators',
			code: `export const Primary = { decorators: [withTheme] };`,
		},

		// --- play ---
		{
			name: 'non-empty play arrow function',
			code: `export const Primary = { play: async () => { await click(); } };`,
		},
		{
			name: 'non-empty play function expression',
			code: `export const Primary = { play: async function() { await click(); } };`,
		},
		{
			name: 'play with expression body',
			code: `export const Primary = { play: () => doSomething() };`,
		},

		// --- name ---
		{
			name: 'name different from export name',
			code: `export const Default = { name: 'Custom Name' };`,
		},
		{
			name: 'name different from auto-generated display name',
			code: `export const FiltersPanel = { name: 'With Filters Panel' };`,
		},
		{
			name: 'name is computed',
			code: `export const Default = { name: 'Default' + ' Story' };`,
		},
		{
			name: 'name is template literal',
			code: `
				const suffix = 'Story';
				export const Default = { name: \`Default \${suffix}\` };
			`,
		},

		// --- storyName ---
		{
			name: 'storyName different from export name',
			code: `export const Default = { storyName: 'Custom Name' };`,
		},

		// --- satisfies / as on property values ---
		{
			name: 'non-empty args with satisfies on value',
			code: `export const Primary = { args: { label: 'Hello' } satisfies Args };`,
		},
		{
			name: 'non-empty args with as assertion on value',
			code: `export const Primary = { args: { label: 'Hello' } as Args };`,
		},
		{
			name: 'non-empty tags with as assertion on value',
			code: `export const Primary = { tags: ['deprecated'] as string[] };`,
		},
		{
			name: 'non-empty parameters with satisfies on value',
			code: `export const Primary = { parameters: { layout: 'centered' } satisfies Params };`,
		},
		{
			name: 'non-empty play with satisfies on value',
			code: `export const Primary = { play: (async () => { await click(); }) satisfies PlayFn };`,
		},

		// --- misc ---
		{
			name: 'story with no annotations',
			code: `export const Primary = { render: () => {} };`,
		},
		{
			name: 'non-object named export',
			code: `export const name = 'Button';`,
		},
		{
			name: 'default export without meta object',
			code: `export default 'not-an-object';`,
		},
	],

	invalid: [
		// --- empty args ---
		{
			name: 'empty args on story',
			code: `export const Primary = { args: {}, render: () => {} };`,
			output: `export const Primary = {  render: () => {} };`,
			errors: [
				{
					messageId: 'emptyArgs',
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 30,
				},
			],
		},
		{
			name: 'empty args on meta (referenced variable)',
			code: `
				const meta = { args: {} };
				export default meta;
			`,
			output: `
				const meta = {  };
				export default meta;
			`,
			errors: [
				{
					messageId: 'emptyArgs',
					line: 2,
					endLine: 2,
					column: 20,
					endColumn: 24,
				},
			],
		},
		{
			name: 'empty args on meta (inline)',
			code: `
				export default { args: {} };
			`,
			output: `
				export default {  };
			`,
			errors: [
				{
					messageId: 'emptyArgs',
					line: 2,
					endLine: 2,
					column: 22,
					endColumn: 26,
				},
			],
		},

		// --- empty parameters ---
		{
			name: 'empty parameters on story',
			code: `export const Primary = { parameters: {}, render: () => {} };`,
			output: `export const Primary = {  render: () => {} };`,
			errors: [
				{
					messageId: 'emptyParameters',
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 36,
				},
			],
		},
		{
			name: 'empty parameters on meta',
			code: `
				const meta = { parameters: {} };
				export default meta;
			`,
			output: `
				const meta = {  };
				export default meta;
			`,
			errors: [
				{
					messageId: 'emptyParameters',
					line: 2,
					endLine: 2,
					column: 20,
					endColumn: 30,
				},
			],
		},

		// --- empty argTypes ---
		{
			name: 'empty argTypes on story',
			code: `export const Primary = { argTypes: {} };`,
			output: `export const Primary = {  };`,
			errors: [
				{
					messageId: 'emptyArgTypes',
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 34,
				},
			],
		},
		{
			name: 'empty argTypes on meta',
			code: `
				const meta = { argTypes: {} };
				export default meta;
			`,
			output: `
				const meta = {  };
				export default meta;
			`,
			errors: [
				{
					messageId: 'emptyArgTypes',
					line: 2,
					endLine: 2,
					column: 20,
					endColumn: 28,
				},
			],
		},

		// --- empty tags ---
		{
			name: 'empty tags on story',
			code: `export const Primary = { tags: [] };`,
			output: `export const Primary = {  };`,
			errors: [
				{
					messageId: 'emptyTags',
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 30,
				},
			],
		},
		{
			name: 'empty tags on meta',
			code: `
				const meta = { tags: [] };
				export default meta;
			`,
			output: `
				const meta = {  };
				export default meta;
			`,
			errors: [
				{
					messageId: 'emptyTags',
					line: 2,
					endLine: 2,
					column: 20,
					endColumn: 24,
				},
			],
		},

		// --- empty decorators ---
		{
			name: 'empty decorators on story',
			code: `export const Primary = { decorators: [] };`,
			output: `export const Primary = {  };`,
			errors: [
				{
					messageId: 'emptyDecorators',
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 36,
				},
			],
		},
		{
			name: 'empty decorators on meta',
			code: `
				const meta = { decorators: [] };
				export default meta;
			`,
			output: `
				const meta = {  };
				export default meta;
			`,
			errors: [
				{
					messageId: 'emptyDecorators',
					line: 2,
					endLine: 2,
					column: 20,
					endColumn: 30,
				},
			],
		},

		// --- empty play ---
		{
			name: 'empty play arrow function',
			code: `export const Primary = { play: async () => {} };`,
			output: `export const Primary = {  };`,
			errors: [
				{
					messageId: 'emptyPlay',
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 30,
				},
			],
		},
		{
			name: 'empty play function expression',
			code: `export const Primary = { play: function() {} };`,
			output: `export const Primary = {  };`,
			errors: [
				{
					messageId: 'emptyPlay',
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 30,
				},
			],
		},
		{
			name: 'empty play with comments',
			code: `export const Primary = { play: function() { /* empty */ } };`,
			output: `export const Primary = {  };`,
			errors: [
				{
					messageId: 'emptyPlay',
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 30,
				},
			],
		},
		{
			name: 'empty play with other properties',
			code: `export const Primary = { args: { a: 1 }, play: async () => {} };`,
			output: `export const Primary = { args: { a: 1 },  };`,
			errors: [
				{
					messageId: 'emptyPlay',
					line: 1,
					endLine: 1,
					column: 42,
					endColumn: 46,
				},
			],
		},

		// --- redundant name ---
		{
			name: 'name matches export name',
			code: `export const Default = { name: 'Default' };`,
			output: `export const Default = {  };`,
			errors: [
				{
					messageId: 'redundantName',
					data: { name: 'Default' },
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 30,
				},
			],
		},
		{
			name: 'storyName matches export name',
			code: `export const Default = { storyName: 'Default' };`,
			output: `export const Default = {  };`,
			errors: [
				{
					messageId: 'redundantName',
					data: { name: 'Default' },
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 35,
				},
			],
		},
		{
			name: 'name is computed',
			code: `export const Default = { name: 'De' + 'fault' };`,
			output: `export const Default = {  };`,
			errors: [
				{
					messageId: 'redundantName',
					data: { name: 'Default' },
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 30,
				},
			],
		},
		{
			name: 'name is template literal',
			code: `
				const suffix = 'Story';
				
				export const DefaultStory = { name: \`Default \${suffix}\` };
			`,
			output: `
				const suffix = 'Story';
				
				export const DefaultStory = {  };
			`,
			errors: [
				{
					messageId: 'redundantName',
					data: { name: 'Default Story' },
					line: 4,
					endLine: 4,
					column: 35,
					endColumn: 39,
				},
			],
		},
		{
			name: 'name matches PascalCase export',
			code: `export const WithFiltersPanel = { name: 'With Filters Panel' };`,
			output: `export const WithFiltersPanel = {  };`,
			errors: [
				{
					messageId: 'redundantName',
					data: { name: 'With Filters Panel' },
					line: 1,
					endLine: 1,
					column: 35,
					endColumn: 39,
				},
			],
		},
		{
			name: 'name matches camelCase export',
			code: `export const filtersPanel = { name: 'Filters Panel' };`,
			output: `export const filtersPanel = {  };`,
			errors: [
				{
					messageId: 'redundantName',
					data: { name: 'Filters Panel' },
					line: 1,
					endLine: 1,
					column: 31,
					endColumn: 35,
				},
			],
		},
		{
			name: 'name matches snake_case export',
			code: `export const my_story = { name: 'My Story' };`,
			output: `export const my_story = {  };`,
			errors: [
				{
					messageId: 'redundantName',
					data: { name: 'My Story' },
					line: 1,
					endLine: 1,
					column: 27,
					endColumn: 31,
				},
			],
		},
		{
			name: 'name matches consecutive-capitals export',
			code: `export const HTMLParser = { name: 'HTML Parser' };`,
			output: `export const HTMLParser = {  };`,
			errors: [
				{
					messageId: 'redundantName',
					data: { name: 'HTML Parser' },
					line: 1,
					endLine: 1,
					column: 29,
					endColumn: 33,
				},
			],
		},

		// --- satisfies / as on story ---
		{
			name: 'empty args with satisfies expression',
			code: `export const Primary = { args: {} } satisfies Story;`,
			output: `export const Primary = {  } satisfies Story;`,
			errors: [
				{
					messageId: 'emptyArgs',
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 30,
				},
			],
		},
		{
			name: 'empty args with as assertion',
			code: `export const Primary = { args: {} } as Story;`,
			output: `export const Primary = {  } as Story;`,
			errors: [
				{
					messageId: 'emptyArgs',
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 30,
				},
			],
		},
		{
			name: 'empty args with type annotation',
			code: `export const Primary: Story = { args: {} };`,
			output: `export const Primary: Story = {  };`,
			errors: [
				{
					messageId: 'emptyArgs',
					line: 1,
					endLine: 1,
					column: 33,
					endColumn: 37,
				},
			],
		},

		// --- satisfies / as on property values ---
		{
			name: 'empty args value with satisfies',
			code: `export const Primary = { args: {} satisfies Args, render: () => {} };`,
			output: `export const Primary = {  render: () => {} };`,
			errors: [
				{
					messageId: 'emptyArgs',
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 30,
				},
			],
		},
		{
			name: 'empty tags value with as assertion',
			code: `export const Primary = { tags: [] as string[] };`,
			output: `export const Primary = {  };`,
			errors: [
				{
					messageId: 'emptyTags',
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 30,
				},
			],
		},
		{
			name: 'empty play value with satisfies',
			code: `export const Primary = { play: (async () => {}) satisfies PlayFn };`,
			output: `export const Primary = {  };`,
			errors: [
				{
					messageId: 'emptyPlay',
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 30,
				},
			],
		},

		// --- multiple violations ---
		{
			name: 'multiple useless annotations on one story',
			code: `export const Default = { args: {}, tags: [], name: 'Default' };`,
			output: `export const Default = {    };`,
			errors: [
				{
					messageId: 'emptyArgs',
					line: 1,
					endLine: 1,
					column: 26,
					endColumn: 30,
				},
				{
					messageId: 'emptyTags',
					line: 1,
					endLine: 1,
					column: 36,
					endColumn: 40,
				},
				{
					messageId: 'redundantName',
					data: { name: 'Default' },
					line: 1,
					endLine: 1,
					column: 46,
					endColumn: 50,
				},
			],
		},
	],
});
