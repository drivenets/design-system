import { ReactNode, useState } from 'react';
import { CellContext, ColumnDef } from '@tanstack/react-table';
import { ColumnFilterState, FilterAdapter, FilterState } from '../types/filter-adapter.types';
import { FilterChipItem } from '../../../../../widgets';
import { FilterNavItem } from '../components/filter-modal';

export interface UseTableFiltersResult<TData, TValue> {
	/**
	 * Current filter state
	 */
	filterState: FilterState;

	/**
	 * Column filters for TanStack Table
	 */
	columnFilters: ColumnFilterState[];

	/**
	 * Filter chips for display
	 */
	filterChips: FilterChipItem[];

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
		deleteChip: (chip: FilterChipItem) => void;
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
export function useTableFilters<TData, TValue>(
	filterAdapters: FilterAdapter<TData>[],
	baseColumns?: ColumnDef<TData>[],
): UseTableFiltersResult<TData, TValue> {
	// Initialize filter state from adapters
	const initialState: FilterState = {};
	filterAdapters.forEach((adapter) => {
		initialState[adapter.id] = adapter.initialValue;
	});

	const [filterState, setFilterState] = useState<FilterState>(initialState);
	const [columnFilters, setColumnFilters] = useState<ColumnFilterState[]>([]);
	const [filterChips, setFilterChips] = useState<FilterChipItem[]>([]);

	// Generate filter nav items with counts (updates as user changes filters in modal)
	const filterNavItems: FilterNavItem[] = filterAdapters.map((adapter) => ({
		id: adapter.id,
		label: adapter.label,
		count: adapter.getActiveCount(filterState[adapter.id]),
	}));

	// Enhance column definitions with filter functions and renderers
	const enhancedColumns: ColumnDef<TData>[] = !baseColumns
		? []
		: baseColumns.map((col) => {
				const adapter = filterAdapters.find((a) => a.id === col.id);

				if (adapter) {
					const cellRenderer = adapter.cellRenderer;
					return {
						...col,
						filterFn: adapter.columnFilterFn,
						...(cellRenderer && {
							cell: (info: CellContext<TData, TValue>) => cellRenderer(info.getValue()),
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
		const filters: ColumnFilterState[] = [];
		const chips: FilterChipItem[] = [];

		filterAdapters.forEach((adapter) => {
			const value = filterState[adapter.id];

			if (adapter.hasActiveFilters(value)) {
				filters.push({
					id: adapter.id,
					value: value,
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
		const resetState: FilterState = {};
		filterAdapters.forEach((adapter) => {
			resetState[adapter.id] = adapter.reset();
		});
		setFilterState(resetState);
		setColumnFilters([]);
		setFilterChips([]);
	};

	const deleteChip = (chip: FilterChipItem) => {
		const filterKey = typeof chip.metadata?.key === 'string' ? chip.metadata.key : undefined;
		if (!filterKey) return;

		const adapter = filterAdapters.find((a) => a.id === filterKey);
		if (!adapter) return;

		const currentValue = filterState[filterKey];
		const newValue = adapter.fromChip(chip, currentValue);

		// Regenerate chips to check if this was the last one
		const chips: FilterChipItem[] = [];
		filterAdapters.forEach((adapter) => {
			const value = adapter.id === filterKey ? newValue : filterState[adapter.id];
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
		if (!adapter.hasActiveFilters(newValue)) {
			setColumnFilters((prev) => prev.filter((cf) => cf.id !== filterKey));
		} else {
			setColumnFilters((prev) =>
				prev.map((cf) => (cf.id === filterKey ? { id: filterKey, value: newValue } : cf)),
			);
		}

		setFilterChips(chips);
	};

	const renderFilterContent = (selectedFilter: FilterNavItem) => {
		const adapter = filterAdapters.find((a) => a.id === selectedFilter.id);
		if (!adapter) return null;

		const value = filterState[adapter.id];
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
