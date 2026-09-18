import {
	DOCS_RENDERED,
	SET_CURRENT_STORY,
	STORY_MISSING,
	STORY_RENDERED,
} from 'storybook/internal/core-events';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
	isStaleStoryChunkError,
	RELOAD_COOLDOWN_MS,
	RELOAD_NOTICE_MS,
	registerStoryChunkReload,
	rememberChunkReload,
	shouldReloadNow,
} from './chunk-reload';

const DOCS_RENDERER_STALE_MESSAGE =
	"Cannot destructure property 'DocsRenderer' of '(intermediate value)' as it is undefined.";
const SYNTAX_HIGHLIGHTER_STALE_MESSAGE = "Cannot read properties of undefined (reading 'SyntaxHighlighter')";
const CHROME_DYNAMIC_IMPORT_MESSAGE =
	'Failed to fetch dynamically imported module: ./ds-form-control.stories-old.js';
const FIREFOX_DYNAMIC_IMPORT_MESSAGE = 'error loading dynamically imported module: ./chunk.js';
const SAFARI_DYNAMIC_IMPORT_MESSAGE = 'Importing a module script failed.';

function createMemoryStorage(initial: Record<string, string> = {}): Pick<Storage, 'getItem' | 'setItem'> {
	const values = new Map(Object.entries(initial));

	return {
		getItem: (key) => values.get(key) ?? null,
		setItem: (key, value) => {
			values.set(key, value);
		},
	};
}

function createMemoryChannel() {
	const handlers = new Map<string, Array<() => void>>();

	return {
		on(event: string, handler: () => void) {
			const list = handlers.get(event) ?? [];
			list.push(handler);
			handlers.set(event, list);
		},
		emit(event: string) {
			for (const handler of handlers.get(event) ?? []) {
				handler();
			}
		},
	};
}

function createReloadHarness() {
	const storage = createMemoryStorage();
	const reload = vi.fn();
	const showNotice = vi.fn();
	const target = new EventTarget();
	const channel = createMemoryChannel();

	registerStoryChunkReload({ storage, reload, showNotice, target, channel });

	return { storage, reload, showNotice, target, channel };
}

function dispatchUnhandledRejection(target: EventTarget, reason: unknown): Event {
	const event = Object.assign(new Event('unhandledrejection', { cancelable: true }), { reason });
	target.dispatchEvent(event);
	return event;
}

describe('isStaleStoryChunkError', () => {
	it('should detect the Chrome dynamic-import TypeError', () => {
		const error = new TypeError(
			'Failed to fetch dynamically imported module: http://localhost:6006/assets/ds-form-control.stories-C6YMiVHs.js',
		);

		expect(isStaleStoryChunkError(error)).toBe(true);
	});

	it('should detect the same message as a string reason', () => {
		expect(isStaleStoryChunkError('Failed to fetch dynamically imported module: ./chunk.js')).toBe(true);
	});

	it('should detect the Firefox dynamic-import message', () => {
		expect(isStaleStoryChunkError(new TypeError(FIREFOX_DYNAMIC_IMPORT_MESSAGE))).toBe(true);
		expect(isStaleStoryChunkError(FIREFOX_DYNAMIC_IMPORT_MESSAGE)).toBe(true);
	});

	it('should detect the Safari dynamic-import message', () => {
		expect(isStaleStoryChunkError(new TypeError(SAFARI_DYNAMIC_IMPORT_MESSAGE))).toBe(true);
		expect(isStaleStoryChunkError(SAFARI_DYNAMIC_IMPORT_MESSAGE)).toBe(true);
	});

	it('should detect the production DocsRenderer TypeError', () => {
		expect(isStaleStoryChunkError(new TypeError(DOCS_RENDERER_STALE_MESSAGE))).toBe(true);
		expect(isStaleStoryChunkError(DOCS_RENDERER_STALE_MESSAGE)).toBe(true);
	});

	it('should detect the production SyntaxHighlighter TypeError', () => {
		expect(isStaleStoryChunkError(new TypeError(SYNTAX_HIGHLIGHTER_STALE_MESSAGE))).toBe(true);
		expect(isStaleStoryChunkError(SYNTAX_HIGHLIGHTER_STALE_MESSAGE)).toBe(true);
	});

	it('should ignore component render exceptions', () => {
		expect(isStaleStoryChunkError(new TypeError("Cannot read properties of undefined (reading 'map')"))).toBe(
			false,
		);
	});

	it('should ignore a Docs-adjacent destructure of an unknown export', () => {
		expect(
			isStaleStoryChunkError(
				new TypeError("Cannot destructure property 'foo' of '(intermediate value)' as it is undefined."),
			),
		).toBe(false);
	});

	it('should ignore empty values', () => {
		expect(isStaleStoryChunkError(undefined)).toBe(false);
		expect(isStaleStoryChunkError(null)).toBe(false);
	});
});

describe('shouldReloadNow', () => {
	it('should allow a reload when nothing has been recorded', () => {
		expect(shouldReloadNow(1_000, createMemoryStorage())).toBe(true);
	});

	it('should block a reload inside the cooldown', () => {
		const storage = createMemoryStorage();
		const firstReloadAt = 5_000;

		rememberChunkReload(firstReloadAt, storage);

		expect(shouldReloadNow(firstReloadAt + RELOAD_COOLDOWN_MS - 1, storage)).toBe(false);
	});

	it('should allow a reload after the cooldown', () => {
		const storage = createMemoryStorage();
		const firstReloadAt = 5_000;

		rememberChunkReload(firstReloadAt, storage);

		expect(shouldReloadNow(firstReloadAt + RELOAD_COOLDOWN_MS, storage)).toBe(true);
	});
});

describe('registerStoryChunkReload', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('should mark vite:preloadError as stale without recovering', () => {
		const { reload, showNotice, target } = createReloadHarness();

		const event = new Event('vite:preloadError', { cancelable: true });
		target.dispatchEvent(event);
		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(event.defaultPrevented).toBe(true);
		expect(showNotice).not.toHaveBeenCalled();
		expect(reload).not.toHaveBeenCalled();
	});

	it.each([
		['Chrome', new TypeError(CHROME_DYNAMIC_IMPORT_MESSAGE)],
		['Firefox', new TypeError(FIREFOX_DYNAMIC_IMPORT_MESSAGE)],
		['Safari', new TypeError(SAFARI_DYNAMIC_IMPORT_MESSAGE)],
	])('should mark a %s failed dynamic import as stale without recovering', (_browser, reason) => {
		const { reload, showNotice, target } = createReloadHarness();

		const event = dispatchUnhandledRejection(target, reason);
		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(event.defaultPrevented).toBe(true);
		expect(showNotice).not.toHaveBeenCalled();
		expect(reload).not.toHaveBeenCalled();
	});

	it.each([
		['Error', new TypeError(DOCS_RENDERER_STALE_MESSAGE)],
		['string', DOCS_RENDERER_STALE_MESSAGE],
	])(
		'should recover immediately on a DocsRenderer TypeError as %s without STORY_MISSING or SET_CURRENT_STORY',
		(_kind, reason) => {
			const { reload, showNotice, target } = createReloadHarness();

			const event = dispatchUnhandledRejection(target, reason);

			expect(event.defaultPrevented).toBe(true);
			expect(showNotice).toHaveBeenCalledOnce();
			expect(reload).not.toHaveBeenCalled();

			vi.advanceTimersByTime(RELOAD_NOTICE_MS);

			expect(reload).toHaveBeenCalledOnce();
		},
	);

	it.each([
		['Error', new TypeError(SYNTAX_HIGHLIGHTER_STALE_MESSAGE)],
		['string', SYNTAX_HIGHLIGHTER_STALE_MESSAGE],
	])(
		'should recover immediately on a SyntaxHighlighter TypeError as %s without STORY_MISSING or SET_CURRENT_STORY',
		(_kind, reason) => {
			const { reload, showNotice, target } = createReloadHarness();

			const event = dispatchUnhandledRejection(target, reason);

			expect(event.defaultPrevented).toBe(true);
			expect(showNotice).toHaveBeenCalledOnce();
			expect(reload).not.toHaveBeenCalled();

			vi.advanceTimersByTime(RELOAD_NOTICE_MS);

			expect(reload).toHaveBeenCalledOnce();
		},
	);

	it.each([
		[
			'vite:preloadError',
			(target: EventTarget) => {
				target.dispatchEvent(new Event('vite:preloadError', { cancelable: true }));
			},
		],
		[
			'Chrome failed import',
			(target: EventTarget) => {
				dispatchUnhandledRejection(target, new TypeError(CHROME_DYNAMIC_IMPORT_MESSAGE));
			},
		],
	])('should recover on SET_CURRENT_STORY after %s', (_name, markStale) => {
		const { reload, showNotice, target, channel } = createReloadHarness();

		markStale(target);

		expect(showNotice).not.toHaveBeenCalled();

		channel.emit(SET_CURRENT_STORY);

		expect(showNotice).toHaveBeenCalledOnce();
		expect(reload).not.toHaveBeenCalled();

		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(reload).toHaveBeenCalledOnce();
	});

	it('should still recover when a stale preload is followed by STORY_MISSING', () => {
		const { reload, showNotice, target, channel } = createReloadHarness();

		target.dispatchEvent(new Event('vite:preloadError', { cancelable: true }));
		channel.emit(STORY_MISSING);

		expect(showNotice).toHaveBeenCalledOnce();
		expect(reload).not.toHaveBeenCalled();

		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(reload).toHaveBeenCalledOnce();
	});

	it('should not reload on SET_CURRENT_STORY without a prior stale signal', () => {
		const { reload, showNotice, channel } = createReloadHarness();

		channel.emit(SET_CURRENT_STORY);
		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(showNotice).not.toHaveBeenCalled();
		expect(reload).not.toHaveBeenCalled();
	});

	it('should not reload on STORY_MISSING without a prior stale signal', () => {
		const { reload, showNotice, channel } = createReloadHarness();

		channel.emit(STORY_MISSING);
		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(showNotice).not.toHaveBeenCalled();
		expect(reload).not.toHaveBeenCalled();
	});

	it('should forget a stale preload after a successful story render', () => {
		const { reload, showNotice, target, channel } = createReloadHarness();

		target.dispatchEvent(new Event('vite:preloadError', { cancelable: true }));
		channel.emit(STORY_RENDERED);
		channel.emit(STORY_MISSING);
		channel.emit(SET_CURRENT_STORY);
		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(showNotice).not.toHaveBeenCalled();
		expect(reload).not.toHaveBeenCalled();
	});

	it('should forget a stale preload after a successful docs render', () => {
		const { reload, showNotice, target, channel } = createReloadHarness();

		target.dispatchEvent(new Event('vite:preloadError', { cancelable: true }));
		channel.emit(DOCS_RENDERED);
		channel.emit(STORY_MISSING);
		channel.emit(SET_CURRENT_STORY);
		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(showNotice).not.toHaveBeenCalled();
		expect(reload).not.toHaveBeenCalled();
	});

	it('should not reload on an unhandled component exception', () => {
		const { reload, showNotice, target, channel } = createReloadHarness();

		const event = dispatchUnhandledRejection(target, new Error('Boom'));
		channel.emit(STORY_MISSING);
		channel.emit(SET_CURRENT_STORY);
		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(showNotice).not.toHaveBeenCalled();
		expect(reload).not.toHaveBeenCalled();
		expect(event.defaultPrevented).toBe(false);
	});

	it('should not reload on a Docs-adjacent TypeError that is not an allowlisted export', () => {
		const { reload, showNotice, target } = createReloadHarness();

		dispatchUnhandledRejection(
			target,
			new TypeError("Cannot destructure property 'foo' of '(intermediate value)' as it is undefined."),
		);
		dispatchUnhandledRejection(target, new TypeError("Cannot read properties of undefined (reading 'map')"));
		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(showNotice).not.toHaveBeenCalled();
		expect(reload).not.toHaveBeenCalled();
	});

	it('should not reload again within the cooldown', () => {
		const { reload, showNotice, target } = createReloadHarness();

		dispatchUnhandledRejection(target, new TypeError(DOCS_RENDERER_STALE_MESSAGE));
		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(showNotice).toHaveBeenCalledOnce();
		expect(reload).toHaveBeenCalledOnce();

		dispatchUnhandledRejection(target, new TypeError(SYNTAX_HIGHLIGHTER_STALE_MESSAGE));
		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(showNotice).toHaveBeenCalledOnce();
		expect(reload).toHaveBeenCalledOnce();
	});
});
