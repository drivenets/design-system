import { basename, resolve } from 'node:path';
import { readFile } from 'node:fs/promises';
import { cachified, type CacheEntry } from '@epic-web/cachified';
import type { StorybookContext } from '@storybook/mcp';

const DEFAULT_MANIFESTS_URL = 'https://drivenets.github.io/design-system';
const DEFAULT_TTL_MS = 10 * 60 * 1000;

export interface ManifestProviderOptions {
	/**
	 * Base URL to fetch manifests from. Manifests are loaded from `${manifestsUrl}/manifests/<file>`.
	 * Defaults to the published DS Storybook on GitHub Pages.
	 */
	manifestsUrl?: string | undefined;
	/**
	 * When set, manifests are loaded exclusively from this local directory and the network
	 * is never touched. Useful for offline development and tests.
	 */
	manifestsDir?: string | undefined;
	/**
	 * How long (ms) a cached manifest stays fresh. Once expired, the next call returns the
	 * cached value immediately and triggers a background refresh.
	 */
	ttlMs?: number | undefined;
}

/**
 * Creates a stale-while-revalidate `manifestProvider` for `@storybook/mcp` via `@epic-web/cachified`:
 *  - First load blocks; concurrent first loads share a single in-flight fetch.
 *  - Subsequent calls return the cached value instantly, even if stale.
 *  - When stale, a refresh fires in the background and updates the cache for future callers.
 *  - A failed background refresh keeps serving the last known value.
 *  - When `manifestsDir` is set, manifests are read from disk and the network is never touched.
 */
export function createManifestProvider(
	opts: ManifestProviderOptions = {},
): NonNullable<StorybookContext['manifestProvider']> {
	const baseUrl = opts.manifestsUrl ?? DEFAULT_MANIFESTS_URL;
	const ttlMs = opts.ttlMs ?? DEFAULT_TTL_MS;

	const cache = new Map<string, CacheEntry<string>>();

	const load = async (path: string): Promise<string> => {
		const fileName = basename(path);

		if (opts.manifestsDir) {
			return readFile(resolve(opts.manifestsDir, fileName), 'utf-8');
		}

		const url = `${baseUrl.replace(/\/$/, '')}/manifests/${fileName}`;

		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Manifest fetch failed: ${String(res.status)} ${res.statusText} from ${url}`);
		}
		return res.text();
	};

	return async (_request, path) =>
		cachified({
			key: path,
			cache,
			ttl: ttlMs,
			staleWhileRevalidate: Infinity,
			fallbackToCache: true,
			getFreshValue: () => load(path),
		});
}
