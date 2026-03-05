import type { TSESLint } from '@typescript-eslint/utils';
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
		recommended: [],
	},
};

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
