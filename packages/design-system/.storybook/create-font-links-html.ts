import { fontPreconnectURLs, fontStylesheetURLs } from '@drivenets/vite-plugin-design-system';

export function createFontLinksHtml() {
	const preconnect = fontPreconnectURLs.map((href) => `<link rel="preconnect" href="${href}" crossorigin />`);

	const stylesheets = fontStylesheetURLs.flatMap((href) => [
		`<link rel="preload" as="style" href="${href}" />`,
		`<link rel="stylesheet" href="${href}" />`,
	]);

	return [...preconnect, ...stylesheets].join('\n');
}
