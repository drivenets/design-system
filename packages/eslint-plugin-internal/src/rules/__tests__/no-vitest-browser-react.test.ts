import { RuleTester } from '@typescript-eslint/rule-tester';
import { noVitestBrowserReact } from '../no-vitest-browser-react';

const ruleTester = new RuleTester();

ruleTester.run('no-vitest-browser-react', noVitestBrowserReact, {
	valid: [
		"import { page } from 'vitest/browser';",
		"import { expect } from 'vitest';",
		"import { useState } from 'react';",
		"import { render } from '@testing-library/react';",
		"import { renderHook } from 'vitest-browser-react';",
		"import { renderHook, cleanup } from 'vitest-browser-react';",
	],

	invalid: [
		{
			code: "import { render } from 'vitest-browser-react';",
			errors: [
				{
					messageId: 'noRenderImport',
					line: 1,
					endLine: 1,
					column: 10,
					endColumn: 16,
				},
			],
		},
		{
			code: "import { render, cleanup } from 'vitest-browser-react';",
			errors: [
				{
					messageId: 'noRenderImport',
					line: 1,
					endLine: 1,
					column: 10,
					endColumn: 16,
				},
			],
		},
		{
			code: "import { render, renderHook } from 'vitest-browser-react';",
			errors: [
				{
					messageId: 'noRenderImport',
					line: 1,
					endLine: 1,
					column: 10,
					endColumn: 16,
				},
			],
		},
		{
			code: "import * as VBR from 'vitest-browser-react';",
			errors: [
				{
					messageId: 'noNamespaceImport',
					line: 1,
					endLine: 1,
					column: 8,
					endColumn: 16,
				},
			],
		},
	],
});
