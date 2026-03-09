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

		// Suppress "use client" directive warnings from Ark UI / other RSC-aware libs.
		if (!viteConfig.build) {
			viteConfig.build = {};
		}

		if (!viteConfig.build.rollupOptions) {
			viteConfig.build.rollupOptions = {};
		}

		viteConfig.build.rollupOptions.onwarn = (warning, defaultHandler) => {
			if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('"use client"')) {
				return;
			}

			defaultHandler(warning);
		};

		return viteConfig;
	},
};

export default config;
