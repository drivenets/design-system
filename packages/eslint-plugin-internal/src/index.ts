import type { TSESLint } from '@typescript-eslint/utils';
import type { Linter } from '@typescript-eslint/utils/ts-eslint';
import { noCrossComponentInternalImport } from './rules/no-cross-component-internal-import';

const plugin = {
	meta: {
		name: '@drivenets/eslint-plugin-internal',
		version: '0.0.0',
	},

	rules: {
		'no-cross-component-internal-import': noCrossComponentInternalImport,
	},

	configs: {
		recommended: [] as never,
	},
} satisfies Linter.Plugin;

// https://eslint.org/docs/latest/extend/plugins#configs-in-plugins
Object.assign(plugin.configs, {
	recommended: [
		{
			plugins: {
				'@drivenets/ds-internal': plugin,
			},
			rules: {
				'@drivenets/ds-internal/no-cross-component-internal-import': 'error',
			},
		},
	] satisfies TSESLint.FlatConfig.ConfigArray,
});

export default plugin;
