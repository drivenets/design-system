import { DOCS_RENDERED, STORY_MISSING, STORY_RENDERED } from 'storybook/internal/core-events';

const STALE_CHUNK_MESSAGE = 'Failed to fetch dynamically imported module';

export const RELOAD_COOLDOWN_MS = 10_000;
const RELOAD_STORAGE_KEY = 'ds-storybook-chunk-reload-at';

type ReloadStorage = Pick<Storage, 'getItem' | 'setItem'>;

export type StorybookChannel = {
	on: (event: string, handler: () => void) => void;
};

export type RegisterStoryChunkReloadOptions = {
	storage?: ReloadStorage;
	reload?: () => void;
	target?: EventTarget;
	channel?: StorybookChannel;
};

export function isStaleStoryChunkError(error: unknown): boolean {
	if (error instanceof Error) {
		return error.message.includes(STALE_CHUNK_MESSAGE);
	}

	if (typeof error === 'string') {
		return error.includes(STALE_CHUNK_MESSAGE);
	}

	return false;
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

export function registerStoryChunkReload({
	storage = sessionStorage,
	reload = reloadTopWindow,
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
		reload();
	};

	target.addEventListener('vite:preloadError', markStale);

	target.addEventListener('unhandledrejection', (event) => {
		const reason = 'reason' in event ? event.reason : undefined;

		if (!isStaleStoryChunkError(reason)) {
			return;
		}

		markStale(event);
	});

	channel?.on(STORY_MISSING, recoverIfStale);

	channel?.on(STORY_RENDERED, () => {
		staleChunkSeen = false;
	});

	channel?.on(DOCS_RENDERED, () => {
		staleChunkSeen = false;
	});
}
