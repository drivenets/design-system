import baseConfig from '../../eslint.config.base';
import { defineConfig, globalIgnores, type Config } from 'eslint/config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import storybook from 'eslint-plugin-storybook';

export default defineConfig(
	...baseConfig,

	// React rules.
	react.configs.flat.recommended as Config,
	react.configs.flat['jsx-runtime'] as Config,

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

			'react/jsx-no-useless-fragment': 'error',

			'react/jsx-pascal-case': 'error',

			// The default is set to `warn`, but we're strict.
			'react-hooks/exhaustive-deps': 'error',

			// Temporarily turning off some React Compiler rules that are failing:
			'react-hooks/incompatible-library': 'off',
			'react-hooks/set-state-in-effect': 'off',
			'react-hooks/refs': 'off',

			// We have deprecated components in the codebase.
			'@typescript-eslint/no-deprecated': 'off',
		},
	},

	// Production code overrides.
	{
		files: ['**/*.?(m)[tj]s?(x)'],
		ignores: ['**/*.stories.ts?(x)'],
		rules: {
			'no-console': 'error',

			'react/button-has-type': 'error',
		},
	},

	globalIgnores(['storybook-static', '!.storybook', '.scss-dts']),
);
