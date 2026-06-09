import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi, type Mock } from 'vitest';

import { createManifestProvider } from '../manifest-provider.js';

type Provider = ReturnType<typeof createManifestProvider>;

const REQUEST = undefined as Parameters<Provider>[0];

const okResponse = (body: string): Response => new Response(body, { status: 200, statusText: 'OK' });

const errorResponse = (status = 500, statusText = 'Internal Server Error'): Response =>
	new Response('', { status, statusText });

/**
 * Flushes the microtask and timer queues so background refreshes triggered by
 * cachified have a chance to start and complete (staleRefreshTimeout uses setTimeout).
 */
const flushBackground = async () => {
	await new Promise<void>((res) => setImmediate(res));
	await new Promise<void>((res) => setTimeout(res, 0));
	await new Promise<void>((res) => setImmediate(res));
};

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

		it('serves a stale local file when a background read fails', async () => {
			// Arrange.
			const file = join(dir, 'components.json');
			writeFileSync(file, 'local v1');
			const provider = createManifestProvider({ manifestsDir: dir, ttlMs: 60_000 });

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
		});
	});

	describe('caching', () => {
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

		it('returns stale immediately when expired, then fresh after background refresh', async () => {
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
	});
});
