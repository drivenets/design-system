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
 * @param filterAdapters Array of filter adapters
 * @param baseColumns Base column definitions (optional)
 * @returns Complete filter management system
 */
export function useTableFilters<TData, TValue, TCellValue>(
	filterAdapters: FilterAdapter<TData, TValue, TCellValue>[] | AnyAdapter[],
	baseColumns?: ColumnDef<TData>[],
): UseTableFiltersResult<TData, TValue> {
	// Internal variable just to avoid assignment issues of `any`.
	const _filterAdapters = filterAdapters as FilterAdapter<TData, TValue, TCellValue>[];

	// Initialize filter state from adapters
	const initialState: FilterState<TValue> = {};
	_filterAdapters.forEach((adapter) => {
		initialState[adapter.id] = adapter.initialValue;
	});

	const [filterState, setFilterState] = useState<FilterState<TValue>>(initialState);
	const [columnFilters, setColumnFilters] = useState<ColumnFilterState<TValue>[]>([]);
	const [filterChips, setFilterChips] = useState<ChipItem[]>([]);

	const getValueByAdapterId = (adapterId: string) => {
		// Should be safe to cast because it's being filled in the initialState
		return filterState[adapterId] as TValue;
	};

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
		setFilterChips(chips);
	};

	const clearAll = () => {
		const resetState: FilterState<TValue> = {};
		_filterAdapters.forEach((adapter) => {
			resetState[adapter.id] = adapter.reset();
		});
		setFilterState(resetState);
		setColumnFilters([]);
		setFilterChips([]);
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

		const currentValue = getValueByAdapterId(filterKey);
		const newValue = adapter.fromChip(chip, currentValue);

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

		setFilterChips(chips);
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
