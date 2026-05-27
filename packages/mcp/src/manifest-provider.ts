import { basename, resolve } from 'node:path';
import { readFile } from 'node:fs/promises';
import type { StorybookContext } from '@storybook/mcp';

const DEFAULT_MANIFESTS_URL = 'https://drivenets.github.io/design-system';
const DEFAULT_TTL_MS = 10 * 60 * 1000;
const STALE_RETRY_MS = 30 * 1000;

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

type CacheEntry = {
	value: string;
	expiresAt: number;
	/** Present only while a background refresh is in flight; used to dedupe concurrent refreshes. */
	refreshing?: Promise<void>;
};

/**
 * Creates a stale-while-revalidate `manifestProvider` for `@storybook/mcp`:
 *  - First load blocks; concurrent first loads share a single in-flight fetch.
 *  - Subsequent calls return the cached value instantly, even if stale.
 *  - When stale, a refresh fires in the background and updates the cache for future callers.
 *  - A failed refresh backs off for `STALE_RETRY_MS` to avoid hammering a broken upstream.
 *  - When `manifestsDir` is set, manifests are read from disk and the network is never touched.
 */
export function createManifestProvider(
	opts: ManifestProviderOptions = {},
): NonNullable<StorybookContext['manifestProvider']> {
	const baseUrl = opts.manifestsUrl ?? DEFAULT_MANIFESTS_URL;
	const ttlMs = opts.ttlMs ?? DEFAULT_TTL_MS;

	// Two separate maps because they answer different questions:
	//   `cache` — what's the last known value for this path?  (always has a value)
	//   `firstLoad` — is someone already blocking on the first fetch for this path?
	// Once an entry lands in `cache`, all future loads are background refreshes attached
	// to the entry itself; `firstLoad` is only ever populated before the first success.
	const cache = new Map<string, CacheEntry>();
	const firstLoad = new Map<string, Promise<string>>();

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

	// Fire-and-forget background refresh. The returned promise is intentionally not awaited
	// by any caller — readers got the cached value synchronously and move on. Errors are
	// swallowed (see catch) so this promise never rejects and can't produce unhandled rejections.
	const refresh = (entry: CacheEntry, path: string): void => {
		entry.refreshing = (async () => {
			try {
				const value = await load(path);
				entry.value = value;
				entry.expiresAt = Date.now() + ttlMs;
			} catch {
				// Upstream is broken — keep serving `entry.value` and back off refreshes for
				// STALE_RETRY_MS so we don't hammer it on every subsequent read.
				entry.expiresAt = Date.now() + STALE_RETRY_MS;
			} finally {
				delete entry.refreshing;
			}
		})();
	};

	return async (_request, path) => {
		const entry = cache.get(path);

		if (entry) {
			// Stale-while-revalidate: return the cached value immediately. If it's stale and
			// no refresh is already running, kick one off in the background for the *next* reader.
			if (Date.now() >= entry.expiresAt && !entry.refreshing) {
				refresh(entry, path);
			}
			return entry.value;
		}

		// First-ever load for this path — there's nothing to serve, so the caller has to block.
		// Concurrent first-load callers share the same in-flight promise via `firstLoad`.
		let pending = firstLoad.get(path);
		if (!pending) {
			pending = (async () => {
				try {
					const value = await load(path);
					cache.set(path, { value, expiresAt: Date.now() + ttlMs });
					return value;
				} finally {
					// Delete in finally so a failed first load doesn't cache the rejection
					// forever — the next call sees an empty `firstLoad` and starts a fresh attempt.
					firstLoad.delete(path);
				}
			})();
			firstLoad.set(path, pending);
		}
		return pending;
	};
}
