import type { Plugin } from 'vite';

export function vitePluginDsMaterialIconsFont(): Plugin {
	return {
		name: 'vite-plugin-ds-material-icons-font',
		transformIndexHtml(html) {
			const stylesheets = [
				'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0..1,0&display=block',
				'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,400,0..1,0&display=block',
			];

			const preconnect = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'];

			return {
				html,
				tags: [
					...preconnect.map((href) => ({
						tag: 'link',
						attrs: {
							rel: 'preconnect',
							href,
							crossorigin: '',
						},
						injectTo: 'head' as const,
					})),

					...stylesheets.flatMap((href) => [
						{
							tag: 'link',
							attrs: {
								rel: 'preload',
								as: 'style',
								href,
							},
							injectTo: 'head' as const,
						},
						{
							tag: 'link',
							attrs: {
								rel: 'stylesheet',
								href,
							},
							injectTo: 'head' as const,
						},
					]),
				],
			};
		},
	};
}
