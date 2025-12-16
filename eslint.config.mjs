// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default defineConfig(
	// Base rules.
	eslint.configs.recommended,
	tseslint.configs.strict,

	// React rules.
	react.configs.flat.recommended,
	react.configs.flat['jsx-runtime'],

	reactHooks.configs.flat.recommended,

	jsxA11y.flatConfigs.recommended,

	{
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			'@typescript-eslint/consistent-type-imports': 'error',

			// We're using TypeScript instead.
			'react/prop-types': 'off',

			// The default is set to `warn`, but we're strict.
			'react-hooks/exhaustive-deps': 'error',

			// Temporarily turning off some React Compiler rules that are failing:
			'react-hooks/incompatible-library': 'off',
			'react-hooks/set-state-in-effect': 'off',
			'react-hooks/refs': 'off',
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
