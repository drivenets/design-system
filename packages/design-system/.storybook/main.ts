import type { StorybookConfig } from '@storybook/react-vite';
import { vitePluginDesignSystem } from '@drivenets/vite-plugin-design-system';
import { reactCompilerRolldownPlugin } from '../rolldown/react-compiler-rolldown-plugin.ts';

const config: StorybookConfig = {
	stories: ['../src/**/!(*.docs).mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: ['@storybook/addon-vitest', '@storybook/addon-a11y', '@storybook/addon-docs'],
	framework: '@storybook/react-vite',
	viteFinal: (viteConfig) => {
		if (!Array.isArray(viteConfig.plugins)) {
			viteConfig.plugins = [];
		}

		viteConfig.plugins.push(vitePluginDesignSystem());
		viteConfig.plugins.unshift(reactCompilerRolldownPlugin()); // Must be first.

		return viteConfig;
	},
};

export default config;
