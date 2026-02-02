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
	 * Must be in "modal format" - keys must match adapter IDs.
	 */
	appliedFilters?: FilterState<TValue>;

	/**
	 * Controlled mode: Callback when filters change.
	 * Called by applyFilters(), deleteChip(), clearAll().
	 * Receives filters in the same "modal format" as appliedFilters.
	 */
	onFiltersChange?: (filters: FilterState<TValue>) => void;
}

export interface UseTableFiltersResult<TData, TValue> {
	/**
	 * Current filter state (draft state in modal)
	 */
	filterState: FilterState<TValue>;

	/**
	 * Column filters (uncontrolled mode only)
	 */
	columnFilters: ColumnFilterState<TValue>[];

	/**
	 * Filter chips for display (derived from applied filters)
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
		 * Update a specific filter's value (draft state)
		 */
		updateFilter: (filterId: string, value: TValue) => void;

		/**
		 * Apply all filters
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
 * Hook to orchestrate table filtering with adapter
 * Manages filter state, generates chips, handles column definitions
 *
 * **Uncontrolled mode** (default): filters are managed internally
 * **Controlled mode**: filters are managed externally via appliedFilters/onFiltersChange props
 *
 * @param options Hook options including adapters and optional controlled mode props
 * @returns Complete filter management system
 *
 * @example
 * // Uncontrolled mode (default)
 * const { filterChips, handlers } = useTableFilters({
 *   filterAdapters: adapters,
 *   baseColumns: columns,
 * });
 *
 * @example
 * // Controlled mode (e.g., server-side filtering with URL params)
 * const modalFilters = convertBackendToModalFormat(backendFilters);
 * const { filterChips, handlers } = useTableFilters({
 *   filterAdapters: adapters,
 *   baseColumns: columns,
 *   appliedFilters: modalFilters,
 *   onFiltersChange: (filters) => {
 *     const backendFilters = convertModalToBackendFormat(filters);
 *     updateUrlAndRefetch(backendFilters);
 *   },
 * });
 */
export function useTableFilters<TData, TValue, TCellValue>({
	filterAdapters,
	baseColumns,
	appliedFilters,
	onFiltersChange,
}: UseTableFiltersOptions<TData, TValue, TCellValue>): UseTableFiltersResult<TData, TValue> {
	// Internal variable just to avoid assignment issues of `any`.
	const _filterAdapters = filterAdapters as FilterAdapter<TData, TValue, TCellValue>[];

	// Controlled vs uncontrolled mode
	const isControlled = appliedFilters !== undefined && onFiltersChange !== undefined;

	// Initialize filter state from adapters
	const initialState = _filterAdapters.reduce<FilterState<TValue>>(
		(state, adapter) => ({ ...state, [adapter.id]: adapter.initialValue }),
		{},
	);

	const [filterState, setFilterState] = useState<FilterState<TValue>>({});
	const [columnFilters, setColumnFilters] = useState<ColumnFilterState<TValue>[]>([]);
	const [pendingChanges, setPendingChanges] = useState<FilterState<TValue>>({});

	const appliedState = isControlled ? appliedFilters : filterState;

	const setAppliedState = isControlled
		? onFiltersChange
		: (filters: FilterState<TValue>) => {
				setFilterState(filters);
				const newColumnFilters = Object.entries(filters)
					.filter(([id]) => {
						const adapter = _filterAdapters.find((a) => a.id === id);
						return adapter ? adapter.getActiveFiltersCount(filters[id] as TValue) > 0 : false;
					})
					.map(([id, value]) => ({ id, value }));
				setColumnFilters(newColumnFilters);
			};

	// Draft state = applied + pending changes (what the modal shows)
	const draftState = { ...initialState, ...appliedState, ...pendingChanges };

	// Chips derived from applied state
	const filterChips = _filterAdapters.flatMap((adapter) => {
		const value = appliedState[adapter.id];
		return value !== undefined ? adapter.toChips(value) : [];
	});

	// Filter nav items with counts (based on draftState for live updates in modal)
	const filterNavItems: FilterNavItem[] = _filterAdapters.map((adapter) => ({
		id: adapter.id,
		label: adapter.label,
		count: adapter.getActiveFiltersCount(draftState[adapter.id] as TValue),
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

	const updateFilter = (filterId: string, value: TValue) => {
		setPendingChanges((prev) => ({
			...prev,
			[filterId]: value,
		}));
	};

	const applyFilters = () => {
		const filtersToApply = _filterAdapters.reduce<FilterState<TValue>>((acc, adapter) => {
			const value = draftState[adapter.id] as TValue;
			if (adapter.getActiveFiltersCount(value) > 0) {
				acc[adapter.id] = value;
			}
			return acc;
		}, {});

		setAppliedState(filtersToApply);
		setPendingChanges({});
	};

	const clearAll = () => {
		setPendingChanges({});
		setAppliedState({});
		if (!isControlled) {
			setColumnFilters([]);
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

		const currentValue = appliedState[filterKey];
		if (currentValue === undefined) {
			return;
		}

		const newValue = adapter.fromChip(chip, currentValue);

		// Build new applied filters (exclude the key if count is 0)
		const newFilters =
			adapter.getActiveFiltersCount(newValue) === 0
				? Object.fromEntries(Object.entries(appliedState).filter(([key]) => key !== filterKey))
				: { ...appliedState, [filterKey]: newValue };

		setAppliedState(newFilters as FilterState<TValue>);
	};

	const renderFilterContent = (selectedFilter: FilterNavItem) => {
		const adapter = _filterAdapters.find((a) => a.id === selectedFilter.id);
		if (!adapter) {
			return null;
		}

		const value = draftState[adapter.id] as TValue;
		const onChange = (newValue: TValue) => updateFilter(adapter.id, newValue);

		return adapter.renderFilter(value, onChange);
	};

	return {
		filterState: draftState,
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
