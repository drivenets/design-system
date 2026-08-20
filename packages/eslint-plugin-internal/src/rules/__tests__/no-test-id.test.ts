import { RuleTester } from '@typescript-eslint/rule-tester';
import { noTestId } from '../no-test-id';

const ruleTester = new RuleTester();

ruleTester.run('no-test-id', noTestId, {
	valid: [
		{
			name: 'accessible attributes',
			code: '<button aria-label="Close" id="close" />;',
			filename: 'component.tsx',
		},

		{
			name: 'similarly named attributes',
			code: '<div data-test-id="content" dataTestId="content" />;',
			filename: 'component.tsx',
		},

		{
			name: 'unrelated object properties',
			code: "const props = { 'data-test': 'foo', 'aria-label': 'bar' };",
			filename: 'component.tsx',
		},

		{
			name: 'unrelated property signatures',
			code: "type Props = { dataTestId: string; 'data-test': string };",
			filename: 'component.tsx',
		},

		{
			name: 'unrelated dataset access',
			code: `
				el.dataset.testIdentifier = 'content';
				el.testid = 'content';
			`,
			filename: 'component.tsx',
		},
	],

	invalid: [
		{
			name: 'jsx attribute',
			code: '<div data-testid="content" />;',
			filename: 'component.tsx',
			errors: [
				{
					messageId: 'noTestIdAttribute',
					line: 1,
					endLine: 1,
					column: 6,
					endColumn: 17,
				},
			],
		},

		{
			name: 'jsx attribute on a compound component',
			code: '<DsWorkspaceLayout.Content data-testid="content">content</DsWorkspaceLayout.Content>;',
			filename: 'component.tsx',
			errors: [
				{
					messageId: 'noTestIdAttribute',
					line: 1,
					endLine: 1,
					column: 28,
					endColumn: 39,
				},
			],
		},

		{
			name: 'jsx attribute with an expression value',
			code: '<div data-testid={TEST_ID} />;',
			filename: 'component.tsx',
			errors: [
				{
					messageId: 'noTestIdAttribute',
					line: 1,
					endLine: 1,
					column: 6,
					endColumn: 17,
				},
			],
		},

		{
			name: 'object property',
			code: "const props = { 'data-testid': 'content' };",
			filename: 'component.tsx',
			errors: [
				{
					messageId: 'noTestIdAttribute',
					line: 1,
					endLine: 1,
					column: 17,
					endColumn: 30,
				},
			],
		},

		{
			name: 'computed object property',
			code: "const props = { ['data-testid']: 'content' };",
			filename: 'component.tsx',
			errors: [
				{
					messageId: 'noTestIdAttribute',
					line: 1,
					endLine: 1,
					column: 18,
					endColumn: 31,
				},
			],
		},

		{
			name: 'template literal key',
			code: "const props = { [`data-testid`]: 'content' };",
			filename: 'component.tsx',
			errors: [
				{
					messageId: 'noTestIdAttribute',
					line: 1,
					endLine: 1,
					column: 18,
					endColumn: 31,
				},
			],
		},

		{
			name: 'type alias property signature',
			code: "type Props = { 'data-testid': string };",
			filename: 'component.tsx',
			errors: [
				{
					messageId: 'noTestIdAttribute',
					line: 1,
					endLine: 1,
					column: 16,
					endColumn: 29,
				},
			],
		},

		{
			name: 'optional property signature',
			code: "type Props = { 'data-testid'?: string };",
			filename: 'component.tsx',
			errors: [
				{
					messageId: 'noTestIdAttribute',
					line: 1,
					endLine: 1,
					column: 16,
					endColumn: 29,
				},
			],
		},

		{
			name: 'interface property signature',
			code: `
				interface Props {
					'data-testid': string;
				}
			`,
			filename: 'component.tsx',
			errors: [
				{
					messageId: 'noTestIdAttribute',
					line: 3,
					endLine: 3,
					column: 6,
					endColumn: 19,
				},
			],
		},

		{
			name: 'string literal type',
			code: "type Props = Omit<DivProps, 'data-testid'>;",
			filename: 'component.tsx',
			errors: [
				{
					messageId: 'noTestIdAttribute',
					line: 1,
					endLine: 1,
					column: 29,
					endColumn: 42,
				},
			],
		},

		{
			name: 'string variable',
			code: "const key = 'data-testid';",
			filename: 'component.tsx',
			errors: [
				{
					messageId: 'noTestIdAttribute',
					line: 1,
					endLine: 1,
					column: 13,
					endColumn: 26,
				},
			],
		},

		{
			name: 'setAttribute argument',
			code: "el.setAttribute('data-testid', 'content');",
			filename: 'component.tsx',
			errors: [
				{
					messageId: 'noTestIdAttribute',
					line: 1,
					endLine: 1,
					column: 17,
					endColumn: 30,
				},
			],
		},

		{
			name: 'css selector',
			code: 'el.querySelector(\'[data-testid="content"]\');',
			filename: 'component.tsx',
			errors: [
				{
					messageId: 'noTestIdAttribute',
					line: 1,
					endLine: 1,
					column: 18,
					endColumn: 43,
				},
			],
		},

		{
			name: 'dataset access',
			code: "el.dataset.testid = 'content';",
			filename: 'component.tsx',
			errors: [
				{
					messageId: 'noTestIdAttribute',
					line: 1,
					endLine: 1,
					column: 12,
					endColumn: 18,
				},
			],
		},

		{
			name: 'destructured dataset access',
			code: `
				const { dataset } = el;
				dataset.testid = 'content';
			`,
			filename: 'component.tsx',
			errors: [
				{
					messageId: 'noTestIdAttribute',
					line: 3,
					endLine: 3,
					column: 13,
					endColumn: 19,
				},
			],
		},

		{
			name: 'multiple attributes in the same file',
			code: `
				<div data-testid="parent">
					<span data-testid="child" />
				</div>;
			`,
			filename: 'component.tsx',
			errors: [
				{
					messageId: 'noTestIdAttribute',
					line: 2,
					endLine: 2,
					column: 10,
					endColumn: 21,
				},
				{
					messageId: 'noTestIdAttribute',
					line: 3,
					endLine: 3,
					column: 12,
					endColumn: 23,
				},
			],
		},
	],
});
