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
			errors: [{ messageId: 'noVitestBrowserReact' }],
		},
		{
			code: "import { render, cleanup } from 'vitest-browser-react';",
			errors: [{ messageId: 'noVitestBrowserReact' }],
		},
	],
});
