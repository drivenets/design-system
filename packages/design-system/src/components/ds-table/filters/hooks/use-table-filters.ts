import { type ReactNode, useEffect, useRef, useState } from 'react';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import type { ChipItem } from '../../../ds-chip-group';
import type {
	AnyAdapter,
	ColumnFilterState,
	FilterAdapter,
	FilterNavItem,
	FilterState,
} from '../types/filter-adapter.types';

/**
 * Options for server-side filtering mode.
 * When provided, the hook derives chips from external applied filters
 * and calls onFiltersChange instead of managing internal state.
 *
 * IMPORTANT: `appliedFilters` must be in "modal format" - keys must match adapter IDs
 * and values must match the adapter's expected value type. The hook uses adapters
 * to generate chips and handle chip deletion, so the format must be compatible.
 */
export interface ServerSideFilterOptions<TValue> {
	/**
	 * External applied filters (source of truth for server-side filtering).
	 * Must be in "modal format" with keys matching adapter IDs.
	 * Chips are derived from this using the adapters' toChips method.
	 */
	appliedFilters: FilterState<TValue>;

	/**
	 * Callback when filters change (triggers server refetch).
	 * Called by applyFilters(), deleteChip(), clearAll().
	 * Receives filters in the same "modal format" as appliedFilters.
	 */
	onFiltersChange: (filters: FilterState<TValue>) => void;

	/**
	 * Whether the filter UI (modal, drawer, panel) is currently open.
	 * When this transitions from false → true, the hook automatically syncs
	 * the internal filter state from appliedFilters so the UI shows current selections.
	 */
	isOpen?: boolean;
}

export interface UseTableFiltersResult<TData, TValue> {
	/**
	 * Current filter state
	 */
	filterState: FilterState<TValue>;

	/**
	 * Column filters for TanStack Table
	 */
	columnFilters: ColumnFilterState<TValue>[];

	/**
	 * Filter chips for display
	 */
	filterChips: ChipItem[];

	/**
	 * Filter navigation items with counts
	 */
	filterNavItems: FilterNavItem[];

	/**
	 * Enhanced column definitions with filter functions
	 */
	enhancedColumns: ColumnDef<TData>[];

	/**
	 * Handlers
	 */
	handlers: {
		/**
		 * Update a specific filter's value
		 */
		updateFilter: (filterId: string, value: TValue) => void;

		/**
		 * Apply all filters (converts to TanStack format)
		 */
		applyFilters: () => void;

		/**
		 * Clear all filters
		 */
		clearAll: () => void;

		/**
		 * Delete a specific chip
		 */
		deleteChip: (chip: ChipItem) => void;
	};

	/**
	 * Render function for filter modal content
	 */
	renderFilterContent: (selectedFilter: FilterNavItem) => ReactNode;
}

/**
 * Hook to orchestrate table filtering with adapters
 * Manages filter state, generates chips, handles column definitions
 *
 * Supports two modes:
 * 1. **Client-side mode** (default): Filters are applied locally via TanStack Table
 * 2. **Server-side mode**: Filters are sent to a backend API via onFiltersChange callback
 *
 * @param filterAdapters Array of filter adapters
 * @param baseColumns Base column definitions (optional)
 * @param serverSideOptions Options for server-side filtering mode (optional)
 * @returns Complete filter management system
 *
 * @example
 * // Client-side mode (default)
 * const { filterChips, handlers } = useTableFilters(adapters, columns);
 *
 * @example
 * // Server-side mode
 * // Note: appliedFilters must be in "modal format" (keys match adapter IDs)
 * const modalFilters = convertBackendToModalFormat(backendFilters);
 * const { filterChips, handlers } = useTableFilters(adapters, columns, {
 *   appliedFilters: modalFilters,
 *   onFiltersChange: (filters) => {
 *     const backendFilters = convertModalToBackendFormat(filters);
 *     refetch(backendFilters);
 *   },
 *   isOpen: isFilterModalOpen,
 * });
 */
export function useTableFilters<TData, TValue, TCellValue>(
	filterAdapters: FilterAdapter<TData, TValue, TCellValue>[] | AnyAdapter[],
	baseColumns?: ColumnDef<TData>[],
	serverSideOptions?: ServerSideFilterOptions<TValue>,
): UseTableFiltersResult<TData, TValue> {
	// Internal variable just to avoid assignment issues of `any`.
	const _filterAdapters = filterAdapters as FilterAdapter<TData, TValue, TCellValue>[];

	// Determine if we're in server-side mode
	const isServerSideMode = !!serverSideOptions;
	const { appliedFilters, onFiltersChange, isOpen } = serverSideOptions ?? {};

	// Initialize filter state from adapters
	const initialState = _filterAdapters.reduce<FilterState<TValue>>(
		(state, adapter) => ({ ...state, [adapter.id]: adapter.initialValue }),
		{},
	);

	const [filterState, setFilterState] = useState<FilterState<TValue>>(initialState);
	const [columnFilters, setColumnFilters] = useState<ColumnFilterState<TValue>[]>([]);
	const [internalFilterChips, setInternalFilterChips] = useState<ChipItem[]>([]);

	const getValueByAdapterId = (adapterId: string) => {
		// Should be safe to cast because it's being filled in the initialState
		return filterState[adapterId] as TValue;
	};

	// Derive chips based on mode:
	// - Server-side: from appliedFilters using adapters' toChips
	// - Client-side: from internal state
	const filterChips = (() => {
		if (isServerSideMode && appliedFilters) {
			const chips: ChipItem[] = [];
			_filterAdapters.forEach((adapter) => {
				const value = appliedFilters[adapter.id];
				if (value !== undefined) {
					chips.push(...adapter.toChips(value));
				}
			});
			return chips;
		}
		return internalFilterChips;
	})();

	// Generate filter nav items with counts (updates as user changes filters in modal)
	const filterNavItems: FilterNavItem[] = _filterAdapters.map((adapter) => ({
		id: adapter.id,
		label: adapter.label,
		count: adapter.getActiveFiltersCount(getValueByAdapterId(adapter.id)),
	}));

	// Enhance column definitions with filter functions and renderers
	const enhancedColumns: ColumnDef<TData>[] = !baseColumns
		? []
		: baseColumns.map((col) => {
				const adapter = _filterAdapters.find((a) => a.id === col.id);

				if (adapter) {
					const cellRenderer = adapter.cellRenderer;
					return {
						...col,
						filterFn: adapter.columnFilterFn,
						...(cellRenderer && {
							cell: (info: CellContext<TData, TCellValue>) => cellRenderer(info.getValue()),
						}),
					};
				}

				return col;
			});

	// Track previous isOpen value to detect open transition
	const prevIsOpenRef = useRef(isOpen);

	// Auto-sync internal filter state from appliedFilters when filter UI opens (server-side mode only)
	useEffect(() => {
		if (!isServerSideMode || !appliedFilters) {
			return;
		}

		// Detect transition from closed → open
		const justOpened = isOpen && !prevIsOpenRef.current;
		prevIsOpenRef.current = isOpen;

		if (justOpened) {
			// Sync internal filter state from external applied filters
			const newState: FilterState<TValue> = { ...initialState };
			_filterAdapters.forEach((adapter) => {
				const appliedValue = appliedFilters[adapter.id];
				if (appliedValue !== undefined) {
					newState[adapter.id] = appliedValue;
				}
			});
			setFilterState(newState);
		}
	}, [isOpen, isServerSideMode, appliedFilters, _filterAdapters, initialState]);

	// Handlers
	const updateFilter = (filterId: string, value: TValue) => {
		setFilterState((prev) => ({
			...prev,
			[filterId]: value,
		}));
	};

	const applyFilters = () => {
		const filters: ColumnFilterState<TValue>[] = [];
		const chips: ChipItem[] = [];

		_filterAdapters.forEach((adapter) => {
			const value = getValueByAdapterId(adapter.id);

			if (adapter.getActiveFiltersCount(value) > 0) {
				filters.push({
					id: adapter.id,
					value,
				});
			}

			// Generate chips from current filter value
			const adapterChips = adapter.toChips(value);
			chips.push(...adapterChips);
		});

		setColumnFilters(filters);

		if (isServerSideMode && onFiltersChange) {
			// Convert column filters to FilterState format and call external handler
			const filtersRecord: FilterState<TValue> = {};
			filters.forEach((f) => {
				filtersRecord[f.id] = f.value;
			});
			onFiltersChange(filtersRecord);
		} else {
			setInternalFilterChips(chips);
		}
	};

	const clearAll = () => {
		const resetState: FilterState<TValue> = {};
		_filterAdapters.forEach((adapter) => {
			resetState[adapter.id] = adapter.reset();
		});
		setFilterState(resetState);
		setColumnFilters([]);

		if (isServerSideMode && onFiltersChange) {
			onFiltersChange({});
		} else {
			setInternalFilterChips([]);
		}
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

		// Get current value from appropriate source based on mode
		const currentValue =
			isServerSideMode && appliedFilters ? appliedFilters[filterKey] : getValueByAdapterId(filterKey);

		if (currentValue === undefined) {
			return;
		}

		const newValue = adapter.fromChip(chip, currentValue);

		if (isServerSideMode && onFiltersChange && appliedFilters) {
			// Server-side mode: build new filters excluding removed key or with updated value
			const otherFilters = Object.fromEntries(
				Object.entries(appliedFilters).filter(([key]) => key !== filterKey),
			);
			const newFilters =
				adapter.getActiveFiltersCount(newValue) === 0
					? otherFilters
					: { ...otherFilters, [filterKey]: newValue };

			onFiltersChange(newFilters);
			return;
		}

		// Client-side mode: update internal state
		// Regenerate chips to check if this was the last one
		const chips: ChipItem[] = [];
		_filterAdapters.forEach((adapter) => {
			const value = adapter.id === filterKey ? newValue : getValueByAdapterId(adapter.id);
			const adapterChips = adapter.toChips(value);
			chips.push(...adapterChips);
		});

		// If no chips left, clear all filters
		if (chips.length === 0) {
			clearAll();
			return;
		}

		// Otherwise, update state and filters
		setFilterState((prev) => ({
			...prev,
			[filterKey]: newValue,
		}));

		// Update column filters
		if (adapter.getActiveFiltersCount(newValue) === 0) {
			setColumnFilters((prev) => prev.filter((cf) => cf.id !== filterKey));
		} else {
			setColumnFilters((prev) =>
				prev.map((cf) => (cf.id === filterKey ? { id: filterKey, value: newValue } : cf)),
			);
		}

		setInternalFilterChips(chips);
	};

	const renderFilterContent = (selectedFilter: FilterNavItem) => {
		const adapter = _filterAdapters.find((a) => a.id === selectedFilter.id);
		if (!adapter) {
			return null;
		}

		const value = getValueByAdapterId(adapter.id);
		const onChange = (newValue: TValue) => updateFilter(adapter.id, newValue);

		return adapter.renderFilter(value, onChange);
	};

	return {
		filterState,
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
