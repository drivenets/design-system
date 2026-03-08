import type { TSESLint } from '@typescript-eslint/utils';
import type { Linter } from '@typescript-eslint/utils/ts-eslint';

import { consistentDeprecatedStories } from './rules/consistent-deprecated-stories';
import { noCrossComponentInternalImport } from './rules/no-cross-component-internal-import';

const plugin = {
	meta: {
		name: '@drivenets/eslint-plugin-internal',
		version: '0.0.0',
	},

	rules: {
		'no-cross-component-internal-import': noCrossComponentInternalImport,
		'consistent-deprecated-stories': consistentDeprecatedStories,
	},

	configs: {
		recommended: [] as never,
	},
} satisfies Linter.Plugin;

// https://eslint.org/docs/latest/extend/plugins#configs-in-plugins
Object.assign(plugin.configs, {
	recommended: [
		{
			name: 'ds-internal:recommended:all',
			plugins: {
				'@drivenets/ds-internal': plugin,
			},
			rules: {
				'@drivenets/ds-internal/no-cross-component-internal-import': 'error',
			},
		},

		{
			name: 'ds-internal:recommended:stories',
			files: ['**/*.stories.ts?(x)'],
			plugins: {
				'@drivenets/ds-internal': plugin,
			},
			rules: {
				'@drivenets/ds-internal/consistent-deprecated-stories': 'error',
			},
		},
	] satisfies TSESLint.FlatConfig.ConfigArray,
});

export default plugin;
