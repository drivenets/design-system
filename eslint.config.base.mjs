import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default defineConfig(
	// Base rules.
	eslint.configs.recommended,
	tseslint.configs.strict,

	// Overrides.
	{
		linterOptions: {
			reportUnusedDisableDirectives: 'error',
			reportUnusedInlineConfigs: 'error',
		},
		languageOptions: {
			globals: globals.builtin,
		},
		plugins: { unicorn },
		rules: {
			'@typescript-eslint/consistent-type-imports': 'error',

			'unicorn/filename-case': [
				'error',
				{
					case: 'kebabCase',
				},
			],
		},
	},

	globalIgnores(['**/dist', '**/.turbo']),
);
