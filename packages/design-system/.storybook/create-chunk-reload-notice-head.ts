import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// @ts-expect-error - See https://storybook.js.org/docs/faq#extensionless-imports-in-storybook-main-config
import { RELOAD_NOTICE_TEMPLATE_ID } from './chunk-reload-notice-ids.ts';

const noticeHtmlUrl = new URL('./chunk-reload-notice.html', import.meta.url);
const noticeCssUrl = new URL('./chunk-reload-notice.css', import.meta.url);

export function createChunkReloadNoticeHead(): string {
	const html = readFileSync(fileURLToPath(noticeHtmlUrl), 'utf8');
	const css = readFileSync(fileURLToPath(noticeCssUrl), 'utf8');

	return `<style>${css}</style>\n<template id="${RELOAD_NOTICE_TEMPLATE_ID}">${html}</template>`;
}
