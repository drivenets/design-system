import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi, type Mock } from 'vitest';

import { createManifestProvider, STALE_RETRY_MS } from '../manifest-provider.js';

type Provider = ReturnType<typeof createManifestProvider>;

const REQUEST = undefined as Parameters<Provider>[0];

const okResponse = (body: string): Response => new Response(body, { status: 200, statusText: 'OK' });

const errorResponse = (status = 500, statusText = 'Internal Server Error'): Response =>
	new Response('', { status, statusText });

/**
 * Flushes the microtask queue so background refreshes triggered by the previous
 * provider call have a chance to complete (fetch resolves → handlers run → entry updated).
 */
const flushBackground = () => new Promise<void>((res) => setImmediate(res));

describe('createManifestProvider', () => {
	let fetchMock: Mock;
	let now: number;

	beforeEach(() => {
		fetchMock = vi.fn();
		vi.stubGlobal('fetch', fetchMock);

		now = 0;
		vi.spyOn(Date, 'now').mockImplementation(() => now);
	});

	afterEach(() => {
		vi.unstubAllGlobals();
		vi.restoreAllMocks();
	});

	describe('remote fetching', () => {
		it('fetches from the default URL when no manifestsUrl is provided', async () => {
			// Arrange.
			fetchMock.mockResolvedValueOnce(okResponse('contents'));
			const provider = createManifestProvider();

			// Act.
			const result = await provider(REQUEST, 'whatever/components.json');

			// Assert.
			expect(result).toBe('contents');
			expect(fetchMock).toHaveBeenCalledWith(
				'https://drivenets.github.io/design-system/manifests/components.json',
			);
		});

		it('uses opts.manifestsUrl when provided and strips trailing slash', async () => {
			// Arrange.
			fetchMock.mockResolvedValueOnce(okResponse('contents'));
			const provider = createManifestProvider({ manifestsUrl: 'https://example.com/' });

			// Act.
			await provider(REQUEST, 'components.json');

			// Assert.
			expect(fetchMock).toHaveBeenCalledWith('https://example.com/manifests/components.json');
		});

		it('rejects with the HTTP status when the first-load response is not ok', async () => {
			// Arrange.
			fetchMock.mockResolvedValueOnce(errorResponse(503, 'Service Unavailable'));
			const provider = createManifestProvider();

			// Act & Assert.
			await expect(provider(REQUEST, 'components.json')).rejects.toThrow(/503 Service Unavailable/);
		});

		it('rejects when fetch itself throws on the first load', async () => {
			// Arrange.
			fetchMock.mockRejectedValueOnce(new Error('network down'));
			const provider = createManifestProvider();

			// Act & Assert.
			await expect(provider(REQUEST, 'components.json')).rejects.toThrow('network down');
		});
	});

	describe('manifestsDir mode', () => {
		let dir: string;

		beforeEach(() => {
			dir = mkdtempSync(join(tmpdir(), 'mcp-test-'));
		});

		afterEach(() => {
			rmSync(dir, { recursive: true, force: true });
		});

		it('reads from the local directory and never touches the network', async () => {
			// Arrange.
			writeFileSync(join(dir, 'components.json'), 'local contents');
			const provider = createManifestProvider({ manifestsDir: dir });

			// Act.
			const result = await provider(REQUEST, 'nested/path/components.json');

			// Assert.
			expect(result).toBe('local contents');
			expect(fetchMock).not.toHaveBeenCalled();
		});

		it('rejects when the local file is missing on first load', async () => {
			// Arrange.
			const provider = createManifestProvider({ manifestsDir: dir });

			// Act & Assert.
			await expect(provider(REQUEST, 'missing.json')).rejects.toThrow();
		});
	});

	describe('caching within TTL', () => {
		it('returns the cached value within TTL without refetching', async () => {
			// Arrange.
			fetchMock.mockResolvedValueOnce(okResponse('v1'));
			const provider = createManifestProvider({ ttlMs: 60_000 });

			// Act.
			const first = await provider(REQUEST, 'components.json');
			const second = await provider(REQUEST, 'components.json');

			// Assert.
			expect(first).toBe('v1');
			expect(second).toBe('v1');
			expect(fetchMock).toHaveBeenCalledTimes(1);
		});

		it('uses the default TTL when ttlMs is not provided', async () => {
			// Arrange.
			fetchMock.mockResolvedValue(okResponse('v1'));
			const provider = createManifestProvider();

			// Act.
			await provider(REQUEST, 'components.json');
			now = 9 * 60 * 1000;
			await provider(REQUEST, 'components.json');

			// Assert.
			expect(fetchMock).toHaveBeenCalledTimes(1);
		});
	});

	describe('first-load deduplication', () => {
		it('shares a single in-flight fetch across concurrent first-load callers', async () => {
			// Arrange.
			let resolveFetch!: (r: Response) => void;
			fetchMock.mockReturnValueOnce(
				new Promise<Response>((res) => {
					resolveFetch = res;
				}),
			);
			const provider = createManifestProvider();

			// Act.
			const a = provider(REQUEST, 'components.json');
			const b = provider(REQUEST, 'components.json');
			const c = provider(REQUEST, 'components.json');
			resolveFetch(okResponse('v1'));

			// Assert.
			await expect(Promise.all([a, b, c])).resolves.toEqual(['v1', 'v1', 'v1']);
			expect(fetchMock).toHaveBeenCalledTimes(1);
		});

		it('propagates the rejection to all concurrent first-load callers', async () => {
			// Arrange.
			let rejectFetch!: (err: Error) => void;
			fetchMock.mockReturnValueOnce(
				new Promise<Response>((_res, rej) => {
					rejectFetch = rej;
				}),
			);
			const provider = createManifestProvider();

			// Act.
			const a = provider(REQUEST, 'components.json');
			const b = provider(REQUEST, 'components.json');
			rejectFetch(new Error('boom'));

			// Assert.
			await expect(a).rejects.toThrow('boom');
			await expect(b).rejects.toThrow('boom');
			expect(fetchMock).toHaveBeenCalledTimes(1);
		});

		it('allows a retry after a failed first load', async () => {
			// Arrange.
			fetchMock.mockRejectedValueOnce(new Error('boom')).mockResolvedValueOnce(okResponse('recovered'));
			const provider = createManifestProvider();

			// Act & Assert.
			await expect(provider(REQUEST, 'components.json')).rejects.toThrow('boom');
			await expect(provider(REQUEST, 'components.json')).resolves.toBe('recovered');
			expect(fetchMock).toHaveBeenCalledTimes(2);
		});
	});

	describe('stale-while-revalidate', () => {
		it('returns the stale value instantly when expired, without waiting for the refresh', async () => {
			// Arrange: refresh hangs forever — caller must not block on it.
			fetchMock.mockResolvedValueOnce(okResponse('v1')).mockReturnValueOnce(new Promise<Response>(() => {}));
			const provider = createManifestProvider({ ttlMs: 60_000 });

			// Act.
			await provider(REQUEST, 'components.json');
			now = 60_001;
			const stale = await provider(REQUEST, 'components.json');

			// Assert.
			expect(stale).toBe('v1');
			expect(fetchMock).toHaveBeenCalledTimes(2);
		});

		it('updates the cached value once the background refresh completes', async () => {
			// Arrange.
			fetchMock.mockResolvedValueOnce(okResponse('v1')).mockResolvedValueOnce(okResponse('v2'));
			const provider = createManifestProvider({ ttlMs: 60_000 });

			// Act.
			await provider(REQUEST, 'components.json');
			now = 60_001;
			const stale = await provider(REQUEST, 'components.json');
			await flushBackground();
			const fresh = await provider(REQUEST, 'components.json');

			// Assert.
			expect(stale).toBe('v1');
			expect(fresh).toBe('v2');
			expect(fetchMock).toHaveBeenCalledTimes(2);
		});

		it('deduplicates background refreshes across concurrent expired calls', async () => {
			// Arrange.
			fetchMock.mockResolvedValueOnce(okResponse('v1')).mockReturnValueOnce(new Promise<Response>(() => {}));
			const provider = createManifestProvider({ ttlMs: 60_000 });

			// Act.
			await provider(REQUEST, 'components.json');
			now = 60_001;
			const a = await provider(REQUEST, 'components.json');
			const b = await provider(REQUEST, 'components.json');
			const c = await provider(REQUEST, 'components.json');

			// Assert.
			expect([a, b, c]).toEqual(['v1', 'v1', 'v1']);
			expect(fetchMock).toHaveBeenCalledTimes(2);
		});

		it('backs off for STALE_RETRY_MS after a failed refresh', async () => {
			// Arrange.
			fetchMock.mockResolvedValueOnce(okResponse('v1')).mockResolvedValueOnce(errorResponse(500));
			const provider = createManifestProvider({ ttlMs: 60_000 });

			// Act: first-load + expire + trigger failing background refresh.
			await provider(REQUEST, 'components.json');
			now = 60_001;
			await provider(REQUEST, 'components.json');
			await flushBackground();

			// Within the backoff window, no new refresh should fire.
			now = 60_001 + STALE_RETRY_MS - 1;
			const withinWindow = await provider(REQUEST, 'components.json');

			// Assert.
			expect(withinWindow).toBe('v1');
			expect(fetchMock).toHaveBeenCalledTimes(2);
		});

		it('attempts a new refresh after the STALE_RETRY_MS window elapses', async () => {
			// Arrange.
			fetchMock
				.mockResolvedValueOnce(okResponse('v1'))
				.mockResolvedValueOnce(errorResponse(500))
				.mockResolvedValueOnce(okResponse('v2'));
			const provider = createManifestProvider({ ttlMs: 60_000 });

			// Act.
			await provider(REQUEST, 'components.json');
			now = 60_001;
			await provider(REQUEST, 'components.json');
			await flushBackground();

			now = 60_001 + STALE_RETRY_MS + 1;
			const stillStale = await provider(REQUEST, 'components.json');
			await flushBackground();
			const recovered = await provider(REQUEST, 'components.json');

			// Assert.
			expect(stillStale).toBe('v1');
			expect(recovered).toBe('v2');
			expect(fetchMock).toHaveBeenCalledTimes(3);
		});

		it('keeps serving stale when the upstream stays broken across multiple windows', async () => {
			// Arrange.
			fetchMock.mockResolvedValueOnce(okResponse('v1')).mockResolvedValue(errorResponse(500));
			const provider = createManifestProvider({ ttlMs: 60_000 });

			// Act.
			await provider(REQUEST, 'components.json');
			now = 60_001;
			const firstStale = await provider(REQUEST, 'components.json');
			await flushBackground();

			now = 60_001 + STALE_RETRY_MS + 1;
			const secondStale = await provider(REQUEST, 'components.json');
			await flushBackground();

			now = 60_001 + 2 * STALE_RETRY_MS + 2;
			const thirdStale = await provider(REQUEST, 'components.json');
			await flushBackground();

			// Assert.
			expect(firstStale).toBe('v1');
			expect(secondStale).toBe('v1');
			expect(thirdStale).toBe('v1');
			expect(fetchMock).toHaveBeenCalledTimes(4);
		});

		it('refreshes cleanly across multiple TTL cycles when the upstream is healthy', async () => {
			// Arrange.
			fetchMock
				.mockResolvedValueOnce(okResponse('v1'))
				.mockResolvedValueOnce(okResponse('v2'))
				.mockResolvedValueOnce(okResponse('v3'));
			const provider = createManifestProvider({ ttlMs: 60_000 });

			// Act.
			await provider(REQUEST, 'components.json');

			now = 60_001;
			await provider(REQUEST, 'components.json');
			await flushBackground();
			const afterFirstRefresh = await provider(REQUEST, 'components.json');

			now = 200_000;
			await provider(REQUEST, 'components.json');
			await flushBackground();
			const afterSecondRefresh = await provider(REQUEST, 'components.json');

			// Assert.
			expect(afterFirstRefresh).toBe('v2');
			expect(afterSecondRefresh).toBe('v3');
			expect(fetchMock).toHaveBeenCalledTimes(3);
		});

		it('serves a stale local file when a manifestsDir read fails', async () => {
			// Arrange.
			const dir = mkdtempSync(join(tmpdir(), 'mcp-test-'));
			const file = join(dir, 'components.json');
			writeFileSync(file, 'local v1');
			const provider = createManifestProvider({ manifestsDir: dir, ttlMs: 60_000 });

			try {
				// Act.
				const fresh = await provider(REQUEST, 'components.json');
				rmSync(file);
				now = 60_001;
				const stale = await provider(REQUEST, 'components.json');
				await flushBackground();
				const stillStale = await provider(REQUEST, 'components.json');

				// Assert.
				expect(fresh).toBe('local v1');
				expect(stale).toBe('local v1');
				expect(stillStale).toBe('local v1');
			} finally {
				rmSync(dir, { recursive: true, force: true });
			}
		});
	});
});
