import eslint from '@eslint/js';
import { type Plugin } from '@eslint/core';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import importX, { createNodeResolver } from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import vitest from '@vitest/eslint-plugin';
import globals from 'globals';

export default defineConfig(
	// Base rules.
	eslint.configs.recommended,
	tseslint.configs.strictTypeChecked,

	// Overrides.
	{
		linterOptions: {
			reportUnusedDisableDirectives: 'error',
			reportUnusedInlineConfigs: 'error',
		},

		languageOptions: {
			globals: globals.builtin,

			parserOptions: {
				// Use the tsconfig relative to each package root.
				tsconfigRootDir: process.cwd(),
				projectService: true,
			},
		},

		plugins: {
			unicorn,
			'import-x': importX as unknown as Plugin,
		},

		settings: {
			'import-x/resolver-next': [createTypeScriptImportResolver(), createNodeResolver()],
		},

		rules: {
			// Stricter ESLint core rules.
			eqeqeq: 'error',
			curly: ['error', 'all'],
			'no-eval': 'error',
			'no-implied-eval': 'error',
			'no-lone-blocks': 'error',
			'no-unassigned-vars': 'error',
			'no-unreachable-loop': 'error',
			'no-useless-assignment': 'error',
			'no-useless-call': 'error',
			'no-useless-computed-key': 'error',
			'no-useless-concat': 'error',
			'no-useless-rename': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'prefer-arrow-callback': 'error',
			'prefer-const': 'error',
			'prefer-rest-params': 'error',
			radix: 'error',

			// Slightly loosened TSESLint rules.
			'@typescript-eslint/no-misused-promises': [
				'error',
				{
					checksVoidReturn: false,
				},
			],

			'@typescript-eslint/no-confusing-void-expression': [
				'error',
				{
					ignoreArrowShorthand: true,
				},
			],

			// Stylistic rules.
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					fixStyle: 'inline-type-imports',
				},
			],

			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'typeLike',
					format: ['PascalCase'],
				},
			],

			'no-restricted-syntax': [
				'error',
				{
					selector: 'TSEnumDeclaration',
					message: 'Enums are not allowed. Use union types instead.',
				},
			],

			'unicorn/filename-case': [
				'error',
				{
					case: 'kebabCase',
				},
			],

			// Import rules.
			'import-x/no-cycle': 'error',
			'import-x/no-unresolved': 'error',
			'import-x/no-extraneous-dependencies': 'error',
			'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
		},
	},

	// Production files.
	{
		files: ['**/src/*.[tj]s?(x)'],
		rules: {
			// Disallow importing dev dependencies in production files.
			'import-x/no-extraneous-dependencies': [
				'error',
				{
					devDependencies: false,
					includeTypes: true,
				},
			],
		},
	},

	// Test rules.
	{
		files: ['**/*.@(test|spec).[tj]s?(x)'],
		...vitest.configs.recommended,
		rules: {
			...vitest.configs.recommended.rules,
			'vitest/prefer-vi-mocked': 'error',
			'vitest/prefer-hooks-on-top': 'error',
			'vitest/no-duplicate-hooks': 'error',
			'vitest/hoisted-apis-on-top': 'error',

			'vitest/consistent-each-for': [
				'error',
				{
					test: 'each',
					it: 'each',
					describe: 'each',
					suite: 'each',
				},
			],

			'vitest/consistent-test-filename': [
				'error',
				{
					pattern: '\\.test\\.[tj]sx?$',
				},
			],

			'vitest/consistent-test-it': [
				'error',
				{
					fn: 'it',
					withinDescribe: 'it',
				},
			],

			'vitest/prefer-hooks-in-order': 'error',
		},
	},

	globalIgnores(['**/dist', '**/.turbo', '**/coverage']),
);
