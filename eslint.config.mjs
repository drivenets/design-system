// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
	eslint.configs.recommended,
	tseslint.configs.strict,

	{
		rules: {
			'@typescript-eslint/consistent-type-imports': 'error',
		},
	},

	{
		files: ['**/*.?(m)[tj]s?(x)'],
		ignores: ['**/*.stories.ts?(x)'],
		rules: {
			'no-console': 'error',
		},
	},
);
