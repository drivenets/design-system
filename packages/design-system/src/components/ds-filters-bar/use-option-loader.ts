import { useEffect, useRef, useState } from 'react';
import type { DsFilterDocument } from './ds-filters-bar.types';

const OPTION_SEARCH_DELAY_MS = 300;

export type OptionLoaderStatus = 'loading' | 'ready' | 'error';

export type OptionLoaderFn<TItem> = (
	search: string,
	draft: DsFilterDocument,
	signal: AbortSignal,
) => Promise<ReadonlyArray<TItem>>;

interface UseOptionLoaderParams<TItem> {
	/**
	 * Nothing loads without it, and the status stays `ready`; pass none while the list is closed. A
	 * new function alone does not reload, so it may be written inline.
	 */
	load: OptionLoaderFn<TItem> | undefined;
	search: string;
	/**
	 * Read when a request starts; a change alone does not reload
	 */
	draft: DsFilterDocument;
	/**
	 * Names what is being loaded, such as a field path. A new scope loads at once and drops the
	 * items of the previous one.
	 */
	scope: string;
}

export interface OptionLoader<TItem> {
	status: OptionLoaderStatus;
	/**
	 * The latest result for this scope, kept while a newer one loads. Empty after an error.
	 */
	items: ReadonlyArray<TItem>;
	retry: () => void;
}

interface Latest<TItem> {
	scope: string;
	items: ReadonlyArray<TItem>;
}

interface Settled {
	key: string;
	failed: boolean;
}

const NO_ITEMS: ReadonlyArray<never> = Object.freeze([]);

/**
 * Loads items for a search: at once for a new scope or a retry, after a pause while the search
 * changes. Each request aborts the one before, and a response to an older request is dropped.
 */
export const useOptionLoader = <TItem>({
	load,
	search,
	draft,
	scope,
}: UseOptionLoaderParams<TItem>): OptionLoader<TItem> => {
	const query = search.trim();
	const enabled = load !== undefined;
	const [attempt, setAttempt] = useState(0);
	const [latest, setLatest] = useState<Latest<TItem> | null>(null);
	const [settled, setSettled] = useState<Settled | null>(null);
	const [wasEnabled, setWasEnabled] = useState(enabled);
	const inputsRef = useRef({ load, draft });
	const startedRef = useRef<{ scope: string; query: string } | null>(null);
	const key = JSON.stringify([scope, query, attempt]);

	// A list opened again must not show the last session's result as ready.
	if (enabled !== wasEnabled) {
		setWasEnabled(enabled);

		if (!enabled) {
			setLatest(null);
			setSettled(null);
		}
	}

	useEffect(() => {
		inputsRef.current = { load, draft };
	});

	useEffect(() => {
		if (!enabled) {
			startedRef.current = null;

			return;
		}

		const previous = startedRef.current;
		const isNewSearch = previous?.scope === scope && previous.query !== query;
		const controller = new AbortController();

		startedRef.current = { scope, query };

		const run = () => {
			const { load: current, draft: currentDraft } = inputsRef.current;

			if (!current) {
				return;
			}

			// A loader that throws before returning its Promise fails like one that rejects.
			Promise.resolve()
				.then(() => current(query, currentDraft, controller.signal))
				.then(
					(items) => {
						if (!controller.signal.aborted) {
							setLatest({ scope, items });
							setSettled({ key, failed: false });
						}
					},
					() => {
						if (!controller.signal.aborted) {
							setSettled({ key, failed: true });
						}
					},
				);
		};

		const timer = setTimeout(run, isNewSearch ? OPTION_SEARCH_DELAY_MS : 0);

		return () => {
			clearTimeout(timer);
			controller.abort();
		};
	}, [enabled, scope, query, key]);

	const retry = () => setAttempt((count) => count + 1);

	if (!enabled) {
		return { status: 'ready', items: NO_ITEMS, retry };
	}

	const items = latest?.scope === scope ? latest.items : NO_ITEMS;

	if (settled?.key !== key) {
		return { status: 'loading', items, retry };
	}

	return settled.failed ? { status: 'error', items: NO_ITEMS, retry } : { status: 'ready', items, retry };
};
