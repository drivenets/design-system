import { RuleTester } from '@typescript-eslint/rule-tester';
import { noVitestBrowserReact } from '../no-vitest-browser-react';

const ruleTester = new RuleTester();

ruleTester.run('no-vitest-browser-react', noVitestBrowserReact, {
	valid: [
		"import { page } from 'vitest/browser';",
		"import { expect } from 'vitest';",
		"import { useState } from 'react';",
		"import { render } from '@testing-library/react';",
	],

	invalid: [
		{
			code: "import { render } from 'vitest-browser-react';",
			errors: [
				{
					messageId: 'noVitestBrowserReact',
					line: 1,
					endLine: 1,
					column: 24,
					endColumn: 46,
				},
			],
		},
		{
			code: "import { render, cleanup } from 'vitest-browser-react';",
			errors: [
				{
					messageId: 'noVitestBrowserReact',
					line: 1,
					endLine: 1,
					column: 33,
					endColumn: 55,
				},
			],
		},
	],
});
