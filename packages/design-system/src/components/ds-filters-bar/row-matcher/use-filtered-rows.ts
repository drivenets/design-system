import { useMemo } from 'react';
import { filterRows } from './filter-rows';
import type { DsFilterRowsOptions, DsFilterRowsResult } from './row-matcher.types';

/**
 * `filterRows`, recomputed only when `rows` or an option changes by reference. Inline functions or
 * objects create a new reference on every render and defeat the memoization, so keep `fields`,
 * `getValue`, `resolveDatePreset` and `now` stable (module scope, state, or memoized). An inline
 * `now: new Date()` recomputes on every render; omit `now` to count presets from the time of each
 * recomputation instead.
 */
export const useFilteredRows = <TRow extends object>(
	rows: ReadonlyArray<TRow>,
	{ fields, value, activeToggles, getValue, resolveDatePreset, now }: DsFilterRowsOptions<TRow>,
): DsFilterRowsResult<TRow> =>
	useMemo(
		() => filterRows(rows, { fields, value, activeToggles, getValue, resolveDatePreset, now }),
		[rows, fields, value, activeToggles, getValue, resolveDatePreset, now],
	);
