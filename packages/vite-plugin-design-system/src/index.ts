import type { Plugin } from 'vite';

export function vitePluginDesignSystem(): Plugin {
	return {
		name: 'vite-plugin-design-system',
		transformIndexHtml(html) {
			const stylesheets = [
				'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
				'https://fonts.googleapis.com/css2?family=Fira+Mono:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap',
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
