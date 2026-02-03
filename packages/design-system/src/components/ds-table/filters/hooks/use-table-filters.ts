import { type ReactNode, useState } from 'react';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import type { ChipItem } from '../../../ds-chip-group';
import type {
	AnyAdapter,
	ColumnFilterState,
	FilterAdapter,
	FilterNavItem,
	FilterState,
} from '../types/filter-adapter.types';

export interface UseTableFiltersOptions<TData, TValue, TCellValue> {
	/**
	 * Array of filter adapters that define filter behavior
	 */
	filterAdapters: FilterAdapter<TData, TValue, TCellValue>[] | AnyAdapter[];

	/**
	 * Base column definitions
	 */
	baseColumns?: ColumnDef<TData>[];

	/**
	 * Controlled mode: External applied filters (source of truth).
	 * When provided with onFiltersChange, the hook operates in controlled mode.
	 * Keys must match adapter IDs.
	 */
	appliedFilters?: FilterState<TValue>;

	/**
	 * Controlled mode: Callback when filters change.
	 * Called by applyFilters(), deleteChip(), clearAll().
	 */
	onFiltersChange?: (filters: FilterState<TValue>) => void;
}

export interface UseTableFiltersResult<TData, TValue> {
	/**
	 * Current draft filter state (uncommitted user selections)
	 */
	filterState: FilterState<TValue>;

	/**
	 * Column filters (derived from applied state)
	 */
	columnFilters: ColumnFilterState<TValue>[];

	/**
	 * Filter chips for display (derived from applied state)
	 */
	filterChips: ChipItem[];

	/**
	 * Filter navigation items with active counts
	 */
	filterNavItems: FilterNavItem[];

	/**
	 * Enhanced column definitions with filter functions
	 */
	enhancedColumns: ColumnDef<TData>[];

	/**
	 * Handlers for filter operations
	 */
	handlers: {
		/** Update a specific filter's draft value */
		updateFilter: (filterId: string, value: TValue) => void;
		/** Commit draft state to applied state */
		applyFilters: () => void;
		/** Clear all filters */
		clearAll: () => void;
		/** Delete a specific filter chip */
		deleteChip: (chip: ChipItem) => void;
	};

	/**
	 * Render function for filter content
	 */
	renderFilterContent: (selectedFilter: FilterNavItem) => ReactNode;
}

/**
 * Hook to orchestrate table filtering with adapters.
 * Manages filter state, generates chips, and handles column definitions.
 *
 * **Uncontrolled mode** (default): Filters are managed internally.
 * **Controlled mode**: Filters are managed externally via appliedFilters/onFiltersChange.
 *
 * @example
 * // Uncontrolled mode
 * const { filterChips, handlers } = useTableFilters({
 *   filterAdapters: adapters,
 *   baseColumns: columns,
 * });
 *
 * @example
 * // Controlled mode (e.g., URL-driven filtering)
 * const { filterChips, handlers } = useTableFilters({
 *   filterAdapters: adapters,
 *   baseColumns: columns,
 *   appliedFilters: filtersFromUrl,
 *   onFiltersChange: (filters) => updateUrlAndRefetch(filters),
 * });
 */
export function useTableFilters<TData, TValue, TCellValue>({
	filterAdapters,
	baseColumns,
	appliedFilters: externalAppliedFilters,
	onFiltersChange: setExternalAppliedFilters,
}: UseTableFiltersOptions<TData, TValue, TCellValue>): UseTableFiltersResult<TData, TValue> {
	// Internal variable just to avoid assignment issues of `any`.
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
				const adapter = _filterAdapters.find((a) => a.id === col.id);
				if (!adapter) {
					return col;
				}

				const cellRenderer = adapter.cellRenderer;
				return {
					...col,
					filterFn: adapter.columnFilterFn,
					...(cellRenderer && {
						cell: (info: CellContext<TData, TCellValue>) => cellRenderer(info.getValue()),
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

	const deleteChip = (chip: ChipItem) => {
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

	const renderFilterContent = (selectedFilter: FilterNavItem) => {
		const adapter = _filterAdapters.find((a) => a.id === selectedFilter.id);
		if (!adapter) {
			return null;
		}

		const value = draftFilters[adapter.id] as TValue;
		const onChange = (newValue: TValue) => updateFilter(adapter.id, newValue);

		return adapter.renderFilter(value, onChange);
	};

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
		},
		renderFilterContent,
	};
}
