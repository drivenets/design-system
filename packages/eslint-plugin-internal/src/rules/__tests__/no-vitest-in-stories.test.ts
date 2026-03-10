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
			errors: [{ messageId: 'noVitestInStories' }],
		},
		{
			code: "import { expect } from 'vitest';",
			errors: [{ messageId: 'noVitestInStories' }],
		},
		{
			code: "import { vi } from 'vitest/utils';",
			errors: [{ messageId: 'noVitestInStories' }],
		},
		{
			code: "import { Mock } from '@vitest/spy';",
			errors: [{ messageId: 'noVitestInStories' }],
		},
		{
			code: "import { page } from 'vitest/browser';",
			errors: [{ messageId: 'noVitestInStories' }],
		},
	],
});
