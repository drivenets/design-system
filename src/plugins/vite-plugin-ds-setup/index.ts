import { Plugin } from 'vite';
import path from 'path';

interface DsSetupPluginOptions {
	projectRoot?: string;
}

export function dsSetupPlugin({ projectRoot = process.cwd() }: DsSetupPluginOptions = {}): Plugin {
	return {
		name: 'vite-plugin-ds-setup',
		config() {
			return {
				resolve: {
					alias: {
						'@dap-workspace/dashboard-fe-navigation/assets': path.resolve(
							projectRoot,
							'libs/platform/dashboard-fe/dashboard-fe-navigation/src/lib/assets',
						),
						'@design-system/ui': path.resolve(projectRoot, 'libs/web/src'),
					},
				},
				css: {
					preprocessorOptions: {
						scss: {
							loadPaths: [path.resolve(projectRoot, 'libs/web/src/styles')],
							additionalData: '@use "@design-system/ui/styles/styles.scss" as *;',
						},
					},
				},
			};
		},
		transformIndexHtml(html) {
			return {
				html,
				tags: [
					{
						tag: 'link',
						attrs: {
							rel: 'preload',
							href: 'https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined',
							as: 'style',
							onload: "this.onload=null;this.rel='stylesheet'",
						},
						injectTo: 'head',
					},
					{
						tag: 'link',
						attrs: {
							rel: 'preload',
							href: 'https://fonts.googleapis.com/icon?family=Material+Symbols+Rounded',
							as: 'style',
							onload: "this.onload=null;this.rel='stylesheet'",
						},
						injectTo: 'head',
					},
					{
						tag: 'noscript',
						children: `
							<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" />
							<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Symbols+Rounded" />
						`.trim(),
						injectTo: 'head',
					},
				],
			};
		},
	};
}
