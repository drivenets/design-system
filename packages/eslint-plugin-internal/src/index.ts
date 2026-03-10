import type { TSESLint } from '@typescript-eslint/utils';
import type { Linter } from '@typescript-eslint/utils/ts-eslint';

import { noCrossComponentInternalImport } from './rules/no-cross-component-internal-import';
import { noUselessTsxExtension } from './rules/no-useless-tsx-extension';
import { noVitestInStories } from './rules/no-vitest-in-stories';

const plugin = {
	meta: {
		name: '@drivenets/eslint-plugin-internal',
		version: '0.0.0',
	},

	rules: {
		'no-cross-component-internal-import': noCrossComponentInternalImport,
		'no-useless-tsx-extension': noUselessTsxExtension,
		'no-vitest-in-stories': noVitestInStories,
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
				'@drivenets/ds-internal/no-useless-tsx-extension': 'error',
			},
		},

		{
			name: 'ds-internal:recommended:stories',
			plugins: {
				'@drivenets/ds-internal': plugin,
			},
			files: ['**/*.stories.ts?(x)'],
			rules: {
				'@drivenets/ds-internal/no-vitest-in-stories': 'error',
			},
		},
	] satisfies TSESLint.FlatConfig.ConfigArray,
});

export default plugin;
