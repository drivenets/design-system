import type { StorybookConfig } from '@storybook/react-vite';
import { withoutVitePlugins } from '@storybook/builder-vite';
import { vitePluginDesignSystem } from '@drivenets/vite-plugin-design-system';

const config: StorybookConfig = {
	stories: ['../src/**/!(*.docs).mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: ['@storybook/addon-vitest', '@storybook/addon-a11y', '@storybook/addon-docs'],
	framework: '@storybook/react-vite',
	viteFinal: async (viteConfig) => {
		if (!Array.isArray(viteConfig.plugins)) {
			viteConfig.plugins = [];
		}

		viteConfig.plugins.push(vitePluginDesignSystem() as never);

		// Storybook build doesn't need to generate d.ts files.
		viteConfig.plugins = await withoutVitePlugins(viteConfig.plugins, ['vite:dts']);

		return viteConfig;
	},
};

export default config;
