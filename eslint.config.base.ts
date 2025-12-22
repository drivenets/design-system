import eslint from '@eslint/js';
import { type Plugin } from '@eslint/core';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import importX, { createNodeResolver } from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
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

			parserOptions: {
				// Use the tsconfig relative to each package root.
				tsconfigRootDir: process.cwd(),
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

	globalIgnores(['**/dist', '**/.turbo']),
);
