import type { StorybookConfig } from '@storybook/react-vite';
import { vitePluginDesignSystem } from '@drivenets/vite-plugin-design-system';

const config: StorybookConfig = {
	stories: ['../src/**/!(*.docs).mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@chromatic-com/storybook',
		'@storybook/addon-vitest',
		'@storybook/addon-a11y',
		'@storybook/addon-docs',
		'@storybook/addon-onboarding',
	],
	framework: '@storybook/react-vite',
	viteFinal: async (viteConfig) => {
		if (!Array.isArray(viteConfig.plugins)) {
			viteConfig.plugins = [];
		}

		viteConfig.plugins.push(vitePluginDesignSystem() as never);

		return viteConfig;
	},
};

export default config;
