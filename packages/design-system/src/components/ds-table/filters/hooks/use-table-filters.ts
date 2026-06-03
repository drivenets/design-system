import { type ReactNode, useState } from 'react';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import type { TagFilterItem } from '../../../ds-tag-filter';
import type {
	AnyAdapter,
	ColumnFilterMeta,
	ColumnFilterState,
	FilterAdapter,
	FilterNavItem,
	FilterState,
	ResolvedColumnFilter,
} from '../types/filter-adapter.types';

const resolveColumnAdapterId = (
	meta: ColumnFilterMeta | ResolvedColumnFilter | undefined,
): string | undefined => {
	if (!meta) {
		return undefined;
	}
	if ('render' in meta) {
		return meta.filterId;
	}
	if (meta.adapter) {
		return meta.adapter.id;
	}
	return meta.adapterId;
};

export interface UseTableFiltersOptions<TData, TValue, TCellValue> {
	filterAdapters: FilterAdapter<TData, TValue, TCellValue>[] | AnyAdapter[];
	baseColumns?: ColumnDef<TData>[];
	/** Controlled applied filters, keyed by adapter id. Pair with `onFiltersChange`. */
	appliedFilters?: FilterState<TValue>;
	/** Fires from `applyFilters`, `deleteChip`, and `clearAll` in controlled mode. */
	onFiltersChange?: (filters: FilterState<TValue>) => void;
}

export interface UseTableFiltersResult<TData, TValue> {
	/** Draft filter state (uncommitted). */
	filterState: FilterState<TValue>;
	/** Applied filters mapped to TanStack's column-filters shape. */
	columnFilters: ColumnFilterState<TValue>[];
	/** Chips for `DsTagFilter`, derived from applied state. */
	filterChips: TagFilterItem[];
	/** Filter-nav items with active counts. */
	filterNavItems: FilterNavItem[];
	/** `baseColumns` with `filterFn`, cell renderer and per-column meta wired in. */
	enhancedColumns: ColumnDef<TData>[];
	handlers: {
		/** Update a filter's draft value. */
		updateFilter: (filterId: string, value: TValue) => void;
		/** Commit all drafts to applied state. */
		applyFilters: () => void;
		/** Clear all filters. */
		clearAll: () => void;
		/** Remove a chip's effect from applied state. */
		deleteChip: (chip: TagFilterItem) => void;
		/** Commit one column's draft (per-column popover Save). */
		applyColumnFilter: (filterId: string) => void;
		/** Discard one column's draft without committing. */
		cancelColumnFilter: (filterId: string) => void;
		/** Clear one applied filter (per-column popover Clear). */
		clearColumnFilter: (filterId: string) => void;
	};
	/** Renders the adapter UI for a column id, or `null` if no match. */
	renderColumnFilter: (filterId: string) => ReactNode;
	/** Renders the adapter UI for a `FilterNavItem`. */
	renderFilterContent: (selectedFilter: FilterNavItem) => ReactNode;
}

/**
 * Orchestrates table filtering: drafts → applied state, chips, nav counts, and
 * column wiring. Uncontrolled by default; pass `appliedFilters` +
 * `onFiltersChange` for URL-driven / external state.
 */
export function useTableFilters<TData, TValue, TCellValue>({
	filterAdapters,
	baseColumns,
	appliedFilters: externalAppliedFilters,
	onFiltersChange: setExternalAppliedFilters,
}: UseTableFiltersOptions<TData, TValue, TCellValue>): UseTableFiltersResult<TData, TValue> {
	const _filterAdapters = filterAdapters as FilterAdapter<TData, TValue, TCellValue>[];

	const isControlled = externalAppliedFilters !== undefined && setExternalAppliedFilters !== undefined;

	const initialFilters = _filterAdapters.reduce<FilterState<TValue>>(
		(state, adapter) => ({ ...state, [adapter.id]: adapter.initialValue }),
		{},
	);

	const [internalAppliedFilters, setInternalAppliedFilters] = useState<FilterState<TValue>>({});
	const [pendingFilters, setPendingFilters] = useState<FilterState<TValue>>({});

	const appliedFilters = isControlled ? externalAppliedFilters : internalAppliedFilters;
	const setAppliedFilters = isControlled ? setExternalAppliedFilters : setInternalAppliedFilters;

	const draftFilters = { ...initialFilters, ...appliedFilters, ...pendingFilters };

	const columnFilters: ColumnFilterState<TValue>[] = Object.entries(appliedFilters)
		.filter(([id]) => {
			const adapter = _filterAdapters.find((a) => a.id === id);
			return adapter ? adapter.getActiveFiltersCount(appliedFilters[id] as TValue) > 0 : false;
		})
		.map(([id, value]) => ({ id, value }));

	const filterChips = _filterAdapters.flatMap((adapter) => {
		const value = appliedFilters[adapter.id];
		return value !== undefined ? adapter.toChips(value) : [];
	});

	const filterNavItems: FilterNavItem[] = _filterAdapters.map((adapter) => ({
		id: adapter.id,
		label: adapter.label,
		count: adapter.getActiveFiltersCount(draftFilters[adapter.id] as TValue),
	}));

	const enhancedColumns: ColumnDef<TData>[] = !baseColumns
		? []
		: baseColumns.map((col) => {
				const metaFilter = col.meta?.filter as ColumnFilterMeta | undefined;
				const adapterIdFromMeta = resolveColumnAdapterId(metaFilter);
				const adapter =
					(adapterIdFromMeta && _filterAdapters.find((a) => a.id === adapterIdFromMeta)) ||
					_filterAdapters.find((a) => a.id === col.id);

				if (!adapter) {
					return col;
				}

				const cellRenderer = adapter.cellRenderer;
				const appliedValue = appliedFilters[adapter.id];
				const resolvedFilter: ResolvedColumnFilter | undefined = metaFilter
					? {
							filterId: adapter.id,
							hasActiveFilter: appliedValue !== undefined && adapter.getActiveFiltersCount(appliedValue) > 0,
							render: () => renderForId(adapter.id),
							onApply: () => applyColumnFilter(adapter.id),
							onClear: () => clearColumnFilter(adapter.id),
							onCancel: () => cancelColumnFilter(adapter.id),
						}
					: undefined;

				return {
					...col,
					filterFn: adapter.columnFilterFn,
					...(cellRenderer && {
						cell: (info: CellContext<TData, TCellValue>) => cellRenderer(info.getValue()),
					}),
					...(resolvedFilter && {
						meta: {
							...col.meta,
							filter: resolvedFilter,
						},
					}),
				};
			});

	const updateFilter = (filterId: string, value: TValue) => {
		setPendingFilters((prev) => ({ ...prev, [filterId]: value }));
	};

	const applyFilters = () => {
		const filtersToApply = _filterAdapters.reduce<FilterState<TValue>>((acc, adapter) => {
			const value = draftFilters[adapter.id] as TValue;
			if (adapter.getActiveFiltersCount(value) > 0) {
				acc[adapter.id] = value;
			}
			return acc;
		}, {});

		setAppliedFilters(filtersToApply);
		setPendingFilters({});
	};

	const clearAll = () => {
		setPendingFilters({});
		setAppliedFilters({});
	};

	const omitKey = (source: FilterState<TValue>, filterId: string): FilterState<TValue> =>
		Object.fromEntries(Object.entries(source).filter(([key]) => key !== filterId));

	const applyColumnFilter = (filterId: string) => {
		const adapter = _filterAdapters.find((a) => a.id === filterId);
		if (!adapter) {
			return;
		}

		const draftValue = draftFilters[filterId] as TValue;
		const hasActive = adapter.getActiveFiltersCount(draftValue) > 0;
		const next = hasActive
			? { ...appliedFilters, [filterId]: draftValue }
			: omitKey(appliedFilters, filterId);

		setAppliedFilters(next);
		setPendingFilters((prev) => omitKey(prev, filterId));
	};

	const cancelColumnFilter = (filterId: string) => {
		setPendingFilters((prev) => omitKey(prev, filterId));
	};

	const clearColumnFilter = (filterId: string) => {
		const adapter = _filterAdapters.find((a) => a.id === filterId);
		if (!adapter) {
			return;
		}

		setPendingFilters((prev) => ({ ...omitKey(prev, filterId), [filterId]: adapter.initialValue }));

		if (appliedFilters[filterId] !== undefined) {
			setAppliedFilters(omitKey(appliedFilters, filterId));
		}
	};

	const deleteChip = (chip: TagFilterItem) => {
		const filterKey = typeof chip.metadata?.key === 'string' ? chip.metadata.key : undefined;
		if (!filterKey) {
			return;
		}

		const adapter = _filterAdapters.find((a) => a.id === filterKey);
		if (!adapter) {
			return;
		}

		const currentValue = appliedFilters[filterKey];
		if (currentValue === undefined) {
			return;
		}

		const newValue = adapter.fromChip(chip, currentValue);

		const newFilters =
			adapter.getActiveFiltersCount(newValue) === 0
				? Object.fromEntries(Object.entries(appliedFilters).filter(([key]) => key !== filterKey))
				: { ...appliedFilters, [filterKey]: newValue };

		setAppliedFilters(newFilters);
	};

	const renderForId = (filterId: string): ReactNode => {
		const adapter = _filterAdapters.find((a) => a.id === filterId);
		if (!adapter) {
			return null;
		}

		const value = draftFilters[adapter.id] as TValue;
		const onChange = (newValue: TValue) => updateFilter(adapter.id, newValue);

		return adapter.renderFilter(value, onChange);
	};

	const renderFilterContent = (selectedFilter: FilterNavItem) => renderForId(selectedFilter.id);
	const renderColumnFilter = (filterId: string) => renderForId(filterId);

	return {
		filterState: draftFilters,
		columnFilters,
		filterChips,
		filterNavItems,
		enhancedColumns,
		handlers: {
			updateFilter,
			applyFilters,
			clearAll,
			deleteChip,
			applyColumnFilter,
			cancelColumnFilter,
			clearColumnFilter,
		},
		renderFilterContent,
		renderColumnFilter,
	};
}
