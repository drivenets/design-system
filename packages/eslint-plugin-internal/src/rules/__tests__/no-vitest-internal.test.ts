import { RuleTester } from '@typescript-eslint/rule-tester';
import { noVitestInternal } from '../no-vitest-internal';

const ruleTester = new RuleTester();

ruleTester.run('no-vitest-internal', noVitestInternal, {
	valid: [
		"import { expect } from 'vitest';",
		"import { page } from 'vitest/browser';",
		"import { render } from 'vitest-browser-react';",
		"import { useState } from 'react';",
		"import { something } from 'other-internal-lib';",
	],

	invalid: [
		{
			code: "import { runner } from 'vitest/internal/runner';",
			errors: [
				{
					messageId: 'noVitestInternal',
					line: 1,
					endLine: 1,
					column: 24,
					endColumn: 48,
				},
			],
		},
		{
			code: "import { types } from 'vitest/internal/types';",
			errors: [
				{
					messageId: 'noVitestInternal',
					line: 1,
					endLine: 1,
					column: 23,
					endColumn: 46,
				},
			],
		},
		{
			code: "import { config } from 'vitest/internal';",
			errors: [
				{
					messageId: 'noVitestInternal',
					line: 1,
					endLine: 1,
					column: 24,
					endColumn: 41,
				},
			],
		},
		{
			code: "import * as internal from 'vitest/internal/utils';",
			errors: [
				{
					messageId: 'noVitestInternal',
					line: 1,
					endLine: 1,
					column: 27,
					endColumn: 50,
				},
			],
		},
	],
});
