import type { ReactNode } from 'react';
import type { Row } from '@tanstack/react-table';
import type { FilterAdapter } from '../types/filter-adapter.types';
import {
	type CheckboxFilterItem,
	type CheckboxFilterLocale,
	CheckboxFilter,
} from '../components/checkbox-filter';
import { createFilterAdapter } from './create-filter-adapter';

export interface CheckboxFilterAdapterConfig<TData, TValue> {
	/** Unique id, should match the column `accessorKey`. */
	id: string;
	label: string;
	/** Selectable items. */
	items: CheckboxFilterItem<TValue>[];
	/** Custom row renderer; defaults to `item.label`. */
	renderer?: (item: CheckboxFilterItem<TValue>) => ReactNode;
	/** @default (item) => `${label}: ${item.label}` */
	chipLabelTemplate?: (item: CheckboxFilterItem<TValue>) => string;
	cellRenderer?: (value: TValue) => ReactNode;
	/** @default (row) => row.getValue(id) */
	getRowValue?: (row: Row<TData>) => TValue;
	/** Show a search input above the list. @default false */
	searchable?: boolean;
	/** Show an "All" toggle that selects / clears every (visible) item. @default false */
	selectAll?: boolean;
	locale?: CheckboxFilterLocale;
}

/**
 * Multi-select inclusion filter: empty selection shows every row, selected
 * items show only those rows.
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
		searchable = false,
		selectAll = false,
		locale,
	} = config;

	return createFilterAdapter<TData, CheckboxFilterItem<TValue>[], TValue>({
		id,
		label,
		initialValue: [],

		filterFn: (row, columnId, filterValue) => {
			if (filterValue.length === 0) {
				return true;
			}

			const rowValue = getRowValue(row);
			return filterValue.some((item) => item.value === rowValue);
		},

		cellRenderer,

		toChips: (selectedItems) => {
			return selectedItems.map((item) => ({
				id: `${id}_${String(item.value)}`,
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
			return selectedItems.length;
		},

		renderFilter: (value, onChange) => {
			return (
				<CheckboxFilter
					items={items}
					renderer={renderer}
					selectedItems={value}
					onSelectionChange={onChange}
					searchable={searchable}
					selectAll={selectAll}
					locale={locale}
				/>
			);
		},
	});
}
