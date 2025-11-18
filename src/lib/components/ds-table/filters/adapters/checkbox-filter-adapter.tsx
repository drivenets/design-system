import { ReactNode } from 'react';
import { Row } from '@tanstack/react-table';
import { FilterAdapter } from '../types/filter-adapter.types';
import { CheckboxFilter, CheckboxFilterItem } from '../../components/checkbox-filter';

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
	cellRenderer?: (value: any) => ReactNode;

	/**
	 * How to extract the value from a row for comparison
	 * @default (row) => row.getValue(id)
	 */
	getRowValue?: (row: Row<TData>) => TValue;
}

/**
 * Factory function to create a checkbox filter adapter
 * Handles multi-select checkbox filtering
 */
export function createCheckboxFilterAdapter<TData, TValue = string>(
	config: CheckboxFilterAdapterConfig<TData, TValue>,
): FilterAdapter<TData, CheckboxFilterItem<TValue>[]> {
	const {
		id,
		label,
		items,
		renderer,
		chipLabelTemplate = (item) => `${label}: ${item.label}`,
		cellRenderer,
		getRowValue = (row) => row.getValue(id) as TValue,
	} = config;

	return {
		id,
		label,
		initialValue: items,

		columnFilterFn: (row, columnId, filterValue) => {
			const rowValue = getRowValue(row);
			return filterValue.some((item) => item.value === rowValue);
		},

		cellRenderer,

		toChips: (selectedItems) => {
			// Only show chips if not all items are selected
			if (selectedItems.length === items.length) {
				return [];
			}

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

		getActiveCount: (selectedItems) => {
			return selectedItems.length < items.length ? selectedItems.length : 0;
		},

		hasActiveFilters: (selectedItems) => {
			return selectedItems.length < items.length;
		},

		reset: () => items,

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
	};
}
