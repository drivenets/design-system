import { fontPreconnectUrls, fontStylesheetUrls } from '@drivenets/vite-plugin-design-system';

export function createFontLinksHtml() {
	const preconnect = fontPreconnectUrls.map((href) => `<link rel="preconnect" href="${href}" crossorigin />`);

	const stylesheets = fontStylesheetUrls.flatMap((href) => [
		`<link rel="preload" as="style" href="${href}" />`,
		`<link rel="stylesheet" href="${href}" />`,
	]);

	return [...preconnect, ...stylesheets].join('\n');
}
