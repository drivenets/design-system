import { RuleTester } from '@typescript-eslint/rule-tester';
import { noVitestInStories } from '../no-vitest-in-stories';

const ruleTester = new RuleTester();

ruleTester.run('no-vitest-in-stories', noVitestInStories, {
	valid: [
		"import { fn, expect, userEvent } from '@storybook/test';",
		"import { useState } from 'react';",
		"import { DsButton } from '@drivenets/design-system';",
		"import type { Meta } from '@storybook/react';",
	],

	invalid: [
		{
			code: "import { vi } from 'vitest';",
			errors: [{ messageId: 'noVitestInStories', line: 1, column: 20, endLine: 1, endColumn: 28 }],
		},
		{
			code: "import { expect } from 'vitest';",
			errors: [{ messageId: 'noVitestInStories', line: 1, column: 24, endLine: 1, endColumn: 32 }],
		},
		{
			code: "import { vi } from 'vitest/utils';",
			errors: [{ messageId: 'noVitestInStories', line: 1, column: 20, endLine: 1, endColumn: 34 }],
		},
		{
			code: "import { Mock } from '@vitest/spy';",
			errors: [{ messageId: 'noVitestInStories', line: 1, column: 22, endLine: 1, endColumn: 35 }],
		},
		{
			code: "import { page } from 'vitest/browser';",
			errors: [{ messageId: 'noVitestInStories', line: 1, column: 22, endLine: 1, endColumn: 38 }],
		},
	],
});
