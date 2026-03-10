import { RuleTester } from '@typescript-eslint/rule-tester';
import { noUselessTsxExtension } from '../no-useless-tsx-extension';

const ruleTester = new RuleTester();

ruleTester.run('no-useless-tsx-extension', noUselessTsxExtension, {
	valid: [
		{
			code: 'const x = <div>hello</div>;',
			filename: 'component.tsx',
		},
		{
			code: 'const x = <><span /><span /></>;',
			filename: 'component.tsx',
		},
		{
			code: 'export const a = 1;',
			filename: 'utils.ts',
		},
		{
			code: 'export type Foo = { bar: string };',
			filename: 'types.ts',
		},
		{
			code: 'const el = <MyComponent foo="bar" />;',
			filename: 'story.tsx',
		},
	],

	invalid: [
		{
			code: 'export const a = 1;',
			filename: 'utils.tsx',
			errors: [{ messageId: 'noUselessTsxExtension' }],
		},
		{
			code: 'export type Foo = { bar: string };',
			filename: 'types.tsx',
			errors: [{ messageId: 'noUselessTsxExtension' }],
		},
		{
			code: `
				import { useReducer } from 'react';

				export function useToggle(initial: boolean) {
					const [, toggle] = useReducer(initial => !initial, initial);

					return toggle;
				}
			`,
			filename: 'use-toggle.tsx',
			errors: [{ messageId: 'noUselessTsxExtension' }],
		},
	],
});
