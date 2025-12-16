import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import storybook from 'eslint-plugin-storybook';

export default defineConfig(
	eslint.configs.recommended,
	tseslint.configs.strict,

	storybook.configs['flat/recommended'],

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

	globalIgnores(['storybook-static', '!.storybook']),
);
