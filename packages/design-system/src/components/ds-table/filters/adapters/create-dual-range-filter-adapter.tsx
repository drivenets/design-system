import type { Row } from '@tanstack/react-table';
import type { TagFilterItem } from '../../../ds-tag-filter';
import type { FilterAdapter } from '../types/filter-adapter.types';
import { RangeFilter } from '../components/range-filter';
import { createFilterAdapter } from './create-filter-adapter';

export interface RangeValue {
	from?: number;
	to?: number;
}

export interface DualRangeFilterValue {
	[fieldName: string]: RangeValue;
}

export interface DualRangeFilterAdapterConfig<TData> {
	/** Unique id, should match the column `accessorKey`. */
	id: string;
	label: string;
	/** Field key → display label, e.g. `{ running: 'Running' }`. */
	fields: Record<string, string>;
	/** @default (num) => num.toLocaleString('en-US') */
	formatNumber?: (num: number) => string;
	/** @default (row) => row.getValue(id) */
	getRowValue?: (row: Row<TData>) => Record<string, number>;
}

/** Filter over multiple numeric ranges within one column (AND across fields). */
export function createDualRangeFilterAdapter<TData>(
	config: DualRangeFilterAdapterConfig<TData>,
): FilterAdapter<TData, DualRangeFilterValue, Record<string, number>> {
	const {
		id,
		label,
		fields,
		formatNumber = (num) => num.toLocaleString('en-US'),
		getRowValue = (row) => row.getValue(id),
	} = config;

	const initialValue: DualRangeFilterValue = {};
	Object.keys(fields).forEach((key) => {
		initialValue[key] = {};
	});

	return createFilterAdapter<TData, DualRangeFilterValue, Record<string, number>>({
		id,
		label,
		initialValue,

		filterFn: (row, columnId, filterValue) => {
			const rowValue = getRowValue(row);

			for (const [fieldKey, range] of Object.entries(filterValue)) {
				const hasFilter = range.from !== undefined || range.to !== undefined;
				const fieldValue = rowValue[fieldKey];

				if (hasFilter && fieldValue !== undefined) {
					const matchesFrom = range.from === undefined || fieldValue >= range.from;
					const matchesTo = range.to === undefined || fieldValue <= range.to;

					// AND across fields: every range with a bound must match.
					if (!matchesFrom || !matchesTo) {
						return false;
					}
				}
			}

			return true;
		},

		cellRenderer: undefined,

		toChips: (value) => {
			const chips: TagFilterItem[] = [];

			Object.entries(value).forEach(([fieldKey, range]) => {
				const hasFilter = range.from !== undefined || range.to !== undefined;

				if (hasFilter) {
					const fieldLabel = fields[fieldKey] || fieldKey;
					const fromText = range.from !== undefined ? formatNumber(range.from) : '';
					const toText = range.to !== undefined ? formatNumber(range.to) : '';

					chips.push({
						id: `${id}_${fieldKey}`,
						label: `${fieldLabel}: From ${fromText} to ${toText}`,
						metadata: {
							key: id,
							field: fieldKey,
							from: range.from,
							to: range.to,
						},
					});
				}
			});

			return chips;
		},

		fromChip: (chip, currentValue) => {
			const fieldKey = chip.metadata?.field as string;
			if (!fieldKey) {
				return currentValue;
			}

			return {
				...currentValue,
				[fieldKey]: {},
			};
		},

		getActiveFiltersCount: (value) => {
			let count = 0;
			Object.values(value).forEach((range) => {
				if (range.from !== undefined || range.to !== undefined) {
					count++;
				}
			});
			return count;
		},

		renderFilter: (value, onChange) => {
			return (
				<div>
					{Object.entries(fields).map(([fieldKey, fieldLabel]) => (
						<RangeFilter
							key={fieldKey}
							label={fieldLabel}
							value={value[fieldKey] || {}}
							onChange={(rangeValue) =>
								onChange({
									...value,
									[fieldKey]: rangeValue,
								})
							}
							onClear={() =>
								onChange({
									...value,
									[fieldKey]: {},
								})
							}
						/>
					))}
				</div>
			);
		},
	});
}
