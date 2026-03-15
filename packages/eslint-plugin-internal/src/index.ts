import type { TSESLint } from '@typescript-eslint/utils';
import type { Linter } from '@typescript-eslint/utils/ts-eslint';

import { consistentDeprecatedStories } from './rules/consistent-deprecated-stories';
import { noAutodocsTag } from './rules/no-autodocs-tag';
import { noCrossComponentInternalImport } from './rules/no-cross-component-internal-import';
import { noUselessTsxExtension } from './rules/no-useless-tsx-extension';
import { noVitestBrowserReact } from './rules/no-vitest-browser-react';
import { noVitestInStories } from './rules/no-vitest-in-stories';
import { requireStoryParams } from './rules/require-story-params';

const plugin = {
	meta: {
		name: '@drivenets/eslint-plugin-internal',
		version: '0.0.0',
	},

	rules: {
		'consistent-deprecated-stories': consistentDeprecatedStories,
		'no-autodocs-tag': noAutodocsTag,
		'no-cross-component-internal-import': noCrossComponentInternalImport,
		'no-useless-tsx-extension': noUselessTsxExtension,
		'no-vitest-browser-react': noVitestBrowserReact,
		'no-vitest-in-stories': noVitestInStories,
		'require-story-params': requireStoryParams,
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
				'@drivenets/ds-internal/consistent-deprecated-stories': 'error',
				'@drivenets/ds-internal/no-autodocs-tag': 'error',
				'@drivenets/ds-internal/no-vitest-in-stories': 'error',
				'@drivenets/ds-internal/require-story-params': 'error',
			},
		},

		{
			name: 'ds-internal:recommended:tests:browser',
			plugins: {
				'@drivenets/ds-internal': plugin,
			},
			files: ['**/*.browser.test.ts?(x)'],
			rules: {
				'@drivenets/ds-internal/no-vitest-browser-react': 'error',
			},
		},
	] satisfies TSESLint.FlatConfig.ConfigArray,
});

export default plugin;
