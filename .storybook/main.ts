import type { StorybookConfig } from '@storybook/react-vite';
import { vitePluginDsMaterialIconsFont } from '../src/plugins/vite-plugin-ds-material-icons-font.ts';

export default {
	stories: ['../src/**/!(*.docs).mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@chromatic-com/storybook',
		'@storybook/addon-vitest',
		'@storybook/addon-a11y',
		'@storybook/addon-docs',
		'@storybook/addon-onboarding',
	],
	framework: '@storybook/react-vite',
	viteFinal: async (config) => {
		if (!Array.isArray(config.plugins)) {
			config.plugins = [];
		}

		config.plugins.push(vitePluginDsMaterialIconsFont());

		return config;
	},
} satisfies StorybookConfig;
