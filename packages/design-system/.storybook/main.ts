import type { StorybookConfig } from '@storybook/react-vite';
import { vitePluginDesignSystem } from '@drivenets/vite-plugin-design-system';
import remarkGfm from 'remark-gfm';

// @ts-expect-error - See https://storybook.js.org/docs/faq#extensionless-imports-in-storybook-main-config
import { reactCompilerRolldownPlugin } from '../rolldown/react-compiler-rolldown-plugin.ts';

// @ts-expect-error - See https://storybook.js.org/docs/faq#extensionless-imports-in-storybook-main-config
import { createFontLinksHtml } from './create-font-links-html.ts';

const config: StorybookConfig = {
	stories: ['../src/**/!(*.docs).mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-vitest',
		'@storybook/addon-a11y',
		{
			name: '@storybook/addon-docs',
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [remarkGfm],
					},
				},
			},
		},
		'@storybook/addon-mcp',
		'@github-ui/storybook-addon-performance-panel',
	],
	framework: '@storybook/react-vite',
	managerHead: (head = '') => `${head}\n${createFontLinksHtml()}`,
	viteFinal: (viteConfig, { configType }) => {
		if (!Array.isArray(viteConfig.plugins)) {
			viteConfig.plugins = [];
		}

		viteConfig.plugins.push(vitePluginDesignSystem());
		viteConfig.plugins.unshift(reactCompilerRolldownPlugin()); // Must be first.

		// https://github.github.com/storybook-addon-performance-panel/docs/setup#react-profiling-in-production
		if (configType === 'PRODUCTION') {
			viteConfig.resolve ??= {};
			viteConfig.resolve.alias ??= {};
			(viteConfig.resolve.alias as Record<string, string>)['react-dom/client'] = 'react-dom/profiling';
		}

		return viteConfig;
	},
};

export default config;
