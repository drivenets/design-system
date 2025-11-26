import { ReactNode } from 'react';
import { Row } from '@tanstack/react-table';
import { FilterAdapter } from '../types/filter-adapter.types';
import { CheckboxFilter, CheckboxFilterItem } from '../components/checkbox-filter';
import { createFilterAdapter } from './create-filter-adapter';

export interface CheckboxFilterAdapterConfig<TData, TValue> {
	/**
	 * Unique identifier (should match column accessorKey)
	 */
	id: string;

	/**
	 * Display label for filter navigation
	 */
	label: string;

	/**
	 * Available items to select from
	 */
	items: CheckboxFilterItem<TValue>[];

	/**
	 * Optional custom renderer for each item
	 */
	renderer?: (item: CheckboxFilterItem<TValue>) => ReactNode;

	/**
	 * Optional custom chip label generator
	 * @default (item) => `${label}: ${item.label}`
	 */
	chipLabelTemplate?: (item: CheckboxFilterItem<TValue>) => string;

	/**
	 * Optional custom cell renderer for table column
	 */
	cellRenderer?: (value: TValue) => ReactNode;

	/**
	 * How to extract the value from a row for comparison
	 * @default (row) => row.getValue(id)
	 */
	getRowValue?: (row: Row<TData>) => TValue;
}

/**
 * Factory function to create a checkbox filter adapter
 *
 * Handles multi-select checkbox filtering with inclusion model:
 * - Empty selection = show all data (no filter active)
 * - Selected items = show only those items
 */
export function createCheckboxFilterAdapter<TData, TValue = string>(
	config: CheckboxFilterAdapterConfig<TData, TValue>,
): FilterAdapter<TData, CheckboxFilterItem<TValue>[], TValue> {
	const {
		id,
		label,
		items,
		renderer,
		chipLabelTemplate = (item) => `${label}: ${item.label}`,
		cellRenderer,
		getRowValue = (row) => row.getValue(id),
	} = config;

	return createFilterAdapter<TData, CheckboxFilterItem<TValue>[], TValue>({
		id,
		label,
		initialValue: [], // Start with nothing selected (show all)

		filterFn: (row, columnId, filterValue) => {
			// Empty selection = no filter = show all
			if (filterValue.length === 0) {
				return true;
			}

			// Otherwise, show only selected items
			const rowValue = getRowValue(row);
			return filterValue.some((item) => item.value === rowValue);
		},

		cellRenderer,

		toChips: (selectedItems) => {
			// Generate chips for all selected items
			return selectedItems.map((item) => ({
				id: `${id}_${item.value}`,
				label: chipLabelTemplate(item),
				metadata: {
					key: id,
					value: item.value,
				},
			}));
		},

		fromChip: (chip, currentValue) => {
			return currentValue.filter((item) => item.value !== chip.metadata?.value);
		},

		getActiveFiltersCount: (selectedItems) => {
			// Count = number of selected items (0 means none selected)
			return selectedItems.length;
		},

		renderFilter: (value, onChange) => {
			return (
				<CheckboxFilter
					items={items}
					renderer={renderer}
					selectedItems={value}
					onSelectionChange={onChange}
				/>
			);
		},
	});
}
