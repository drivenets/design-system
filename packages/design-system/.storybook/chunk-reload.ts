import { DOCS_RENDERED, STORY_MISSING, STORY_RENDERED } from 'storybook/internal/core-events';
import noticeHtml from './chunk-reload-notice.html?raw';
import './chunk-reload-notice.css';

const STALE_DYNAMIC_IMPORT_MESSAGES = [
	'Failed to fetch dynamically imported module',
	'error loading dynamically imported module',
	'Importing a module script failed',
] as const;

const STALE_LAZY_EXPORTS = ['DocsRenderer', 'SyntaxHighlighter'] as const;

export const RELOAD_COOLDOWN_MS = 10_000;
export const RELOAD_NOTICE_MS = 1_500;

const RELOAD_STORAGE_KEY = 'ds-storybook-chunk-reload-at';
const RELOAD_NOTICE_ID = 'ds-storybook-chunk-reload-notice';

type ReloadStorage = Pick<Storage, 'getItem' | 'setItem'>;

export type StorybookChannel = {
	on: (event: string, handler: () => void) => void;
};

export type RegisterStoryChunkReloadOptions = {
	storage?: ReloadStorage;
	reload?: () => void;
	showNotice?: () => void;
	target?: EventTarget;
	channel?: StorybookChannel;
};

function getErrorMessage(error: unknown): string | undefined {
	if (error instanceof Error) {
		return error.message;
	}

	if (typeof error === 'string') {
		return error;
	}

	return undefined;
}

function isUndefinedLazyExportError(message: string): boolean {
	if (!message.includes('undefined')) {
		return false;
	}

	return STALE_LAZY_EXPORTS.some((name) => message.includes(`'${name}'`) || message.includes(`"${name}"`));
}

export function isStaleStoryChunkError(error: unknown): boolean {
	const message = getErrorMessage(error);

	if (message === undefined) {
		return false;
	}

	if (STALE_DYNAMIC_IMPORT_MESSAGES.some((fragment) => message.includes(fragment))) {
		return true;
	}

	return isUndefinedLazyExportError(message);
}

export function shouldReloadNow(now = Date.now(), storage: ReloadStorage = sessionStorage): boolean {
	const raw = storage.getItem(RELOAD_STORAGE_KEY);

	if (raw === null) {
		return true;
	}

	const lastReloadAt = Number(raw);

	if (!Number.isFinite(lastReloadAt)) {
		return true;
	}

	return now - lastReloadAt >= RELOAD_COOLDOWN_MS;
}

export function rememberChunkReload(now = Date.now(), storage: ReloadStorage = sessionStorage): void {
	storage.setItem(RELOAD_STORAGE_KEY, String(now));
}

function reloadTopWindow(): void {
	const topWindow = window.top ?? window;

	topWindow.location.reload();
}

function showStaleDocsReloadNotice(doc: Document = document): void {
	if (doc.getElementById(RELOAD_NOTICE_ID)) {
		return;
	}

	doc.body.insertAdjacentHTML('beforeend', noticeHtml);
}

export function registerStoryChunkReload({
	storage = sessionStorage,
	reload = reloadTopWindow,
	showNotice = showStaleDocsReloadNotice,
	target = window,
	channel,
}: RegisterStoryChunkReloadOptions = {}): void {
	let staleChunkSeen = false;

	const markStale = (event: Event) => {
		staleChunkSeen = true;
		event.preventDefault();
	};

	const recoverIfStale = () => {
		if (!staleChunkSeen) {
			return;
		}

		if (!shouldReloadNow(Date.now(), storage)) {
			return;
		}

		rememberChunkReload(Date.now(), storage);
		showNotice();
		setTimeout(reload, RELOAD_NOTICE_MS);
	};

	const recoverFromStaleEvent = (event: Event) => {
		markStale(event);
		recoverIfStale();
	};

	target.addEventListener('vite:preloadError', recoverFromStaleEvent);

	target.addEventListener('unhandledrejection', (event) => {
		const reason = 'reason' in event ? event.reason : undefined;

		if (!isStaleStoryChunkError(reason)) {
			return;
		}

		recoverFromStaleEvent(event);
	});

	channel?.on(STORY_MISSING, recoverIfStale);

	channel?.on(STORY_RENDERED, () => {
		staleChunkSeen = false;
	});

	channel?.on(DOCS_RENDERED, () => {
		staleChunkSeen = false;
	});
}
