import { DOCS_RENDERED, STORY_MISSING, STORY_RENDERED } from 'storybook/internal/core-events';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
	isStaleStoryChunkError,
	RELOAD_COOLDOWN_MS,
	RELOAD_NOTICE_MS,
	registerStoryChunkReload,
	rememberChunkReload,
	shouldReloadNow,
} from './chunk-reload';

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

	it('should ignore component render exceptions', () => {
		expect(isStaleStoryChunkError(new TypeError("Cannot read properties of undefined (reading 'map')"))).toBe(
			false,
		);
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

	it('should not reload on vite:preloadError alone', () => {
		const storage = createMemoryStorage();
		const reload = vi.fn();
		const showNotice = vi.fn();
		const target = new EventTarget();
		const channel = createMemoryChannel();

		registerStoryChunkReload({ storage, reload, showNotice, target, channel });

		const event = new Event('vite:preloadError', { cancelable: true });
		target.dispatchEvent(event);

		expect(showNotice).not.toHaveBeenCalled();
		expect(reload).not.toHaveBeenCalled();
		expect(event.defaultPrevented).toBe(true);
	});

	it('should not reload on a stale unhandledrejection alone', () => {
		const storage = createMemoryStorage();
		const reload = vi.fn();
		const showNotice = vi.fn();
		const target = new EventTarget();
		const channel = createMemoryChannel();

		registerStoryChunkReload({ storage, reload, showNotice, target, channel });

		const event = Object.assign(new Event('unhandledrejection', { cancelable: true }), {
			reason: new TypeError('Failed to fetch dynamically imported module: ./ds-form-control.stories-old.js'),
		});
		target.dispatchEvent(event);

		expect(showNotice).not.toHaveBeenCalled();
		expect(reload).not.toHaveBeenCalled();
		expect(event.defaultPrevented).toBe(true);
	});

	it('should show a notice then reload when a stale preload is followed by STORY_MISSING', () => {
		const storage = createMemoryStorage();
		const reload = vi.fn();
		const showNotice = vi.fn();
		const target = new EventTarget();
		const channel = createMemoryChannel();

		registerStoryChunkReload({ storage, reload, showNotice, target, channel });

		target.dispatchEvent(new Event('vite:preloadError', { cancelable: true }));
		channel.emit(STORY_MISSING);

		expect(showNotice).toHaveBeenCalledOnce();
		expect(reload).not.toHaveBeenCalled();

		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(reload).toHaveBeenCalledOnce();
	});

	it('should not reload on STORY_MISSING without a prior stale signal', () => {
		const storage = createMemoryStorage();
		const reload = vi.fn();
		const showNotice = vi.fn();
		const target = new EventTarget();
		const channel = createMemoryChannel();

		registerStoryChunkReload({ storage, reload, showNotice, target, channel });

		channel.emit(STORY_MISSING);
		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(showNotice).not.toHaveBeenCalled();
		expect(reload).not.toHaveBeenCalled();
	});

	it('should not reload on an unhandled component exception', () => {
		const storage = createMemoryStorage();
		const reload = vi.fn();
		const showNotice = vi.fn();
		const target = new EventTarget();
		const channel = createMemoryChannel();

		registerStoryChunkReload({ storage, reload, showNotice, target, channel });

		const event = Object.assign(new Event('unhandledrejection', { cancelable: true }), {
			reason: new Error('Boom'),
		});
		target.dispatchEvent(event);
		channel.emit(STORY_MISSING);
		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(showNotice).not.toHaveBeenCalled();
		expect(reload).not.toHaveBeenCalled();
		expect(event.defaultPrevented).toBe(false);
	});

	it('should not reload again within the cooldown', () => {
		const storage = createMemoryStorage();
		const reload = vi.fn();
		const showNotice = vi.fn();
		const target = new EventTarget();
		const channel = createMemoryChannel();

		registerStoryChunkReload({ storage, reload, showNotice, target, channel });

		target.dispatchEvent(new Event('vite:preloadError', { cancelable: true }));
		channel.emit(STORY_MISSING);
		channel.emit(STORY_MISSING);

		expect(showNotice).toHaveBeenCalledOnce();
		expect(reload).not.toHaveBeenCalled();

		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(reload).toHaveBeenCalledOnce();
	});

	it('should forget a stale preload after a successful story render', () => {
		const storage = createMemoryStorage();
		const reload = vi.fn();
		const showNotice = vi.fn();
		const target = new EventTarget();
		const channel = createMemoryChannel();

		registerStoryChunkReload({ storage, reload, showNotice, target, channel });

		target.dispatchEvent(new Event('vite:preloadError', { cancelable: true }));
		channel.emit(STORY_RENDERED);
		channel.emit(STORY_MISSING);
		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(showNotice).not.toHaveBeenCalled();
		expect(reload).not.toHaveBeenCalled();
	});

	it('should forget a stale preload after a successful docs render', () => {
		const storage = createMemoryStorage();
		const reload = vi.fn();
		const showNotice = vi.fn();
		const target = new EventTarget();
		const channel = createMemoryChannel();

		registerStoryChunkReload({ storage, reload, showNotice, target, channel });

		target.dispatchEvent(new Event('vite:preloadError', { cancelable: true }));
		channel.emit(DOCS_RENDERED);
		channel.emit(STORY_MISSING);
		vi.advanceTimersByTime(RELOAD_NOTICE_MS);

		expect(showNotice).not.toHaveBeenCalled();
		expect(reload).not.toHaveBeenCalled();
	});
});
