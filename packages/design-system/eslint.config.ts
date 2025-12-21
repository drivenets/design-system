import baseConfig from '../../eslint.config.base';
import { defineConfig, globalIgnores, type Config } from 'eslint/config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import storybook from 'eslint-plugin-storybook';

export default defineConfig(
	...baseConfig,

	// React rules.
	react.configs.flat.recommended,
	react.configs.flat['jsx-runtime'],

	reactHooks.configs.flat.recommended,

	jsxA11y.flatConfigs.recommended as Config,

	// Storybook rules.
	storybook.configs['flat/recommended'] as Config,

	// Overrides.
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
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

	globalIgnores(['storybook-static', '!.storybook']),
);
