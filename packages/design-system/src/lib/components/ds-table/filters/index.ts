/**
 * Table Filters - Filter Adapter Pattern
 *
 * A plug-and-play filter system that eliminates boilerplate and centralizes filter logic.
 *
 * ## Quick Start:
 *
 * ```typescript
 * // 1. Create filter adapters in a config file
 * import { createCheckboxFilterAdapter, createDualRangeFilterAdapter } from '../filters';
 *
 * export const statusFilter = createCheckboxFilterAdapter({
 *   id: 'status',
 *   label: 'Status',
 *   items: [{ value: 'active', label: 'Active' }],
 * });
 *
 * export const myFilters = [statusFilter];
 *
 * // 2. Use in component with useTableFilters hook
 * import { useTableFilters } from '../filters';
 *
 * const { columnFilters, filterChips, enhancedColumns, handlers } =
 *   useTableFilters(myFilters, columns);
 * ```
 *
 * ## Available Exports:
 *
 * ### Factory Functions:
 * - `createCheckboxFilterAdapter` - Multi-select checkbox filters
 * - `createDualRangeFilterAdapter` - Numeric range filters (with multiple fields)
 * - `createFilterAdapter` - Base function for custom filters (full control)
 *
 * ### Hook:
 * - `useTableFilters` - Orchestrates multiple filters, manages state
 *
 * ### Types:
 * - `FilterAdapter` - Core adapter interface
 * - `CheckboxFilterItem` - Item type for checkbox filters
 * - `RangeFilterValue` - Value type for range filters
 *
 * ## Example:
 * See `stories/filters-panel.stories.tsx` and `stories/filters-panel/workflow-filters.config.tsx`
 */

export * from './adapters';
export * from './types/filter-adapter.types';
export * from './hooks';
export type { CheckboxFilterItem, CheckboxFilterProps } from './components/checkbox-filter';
export type { RangeFilterValue, RangeFilterProps } from './components/range-filter';
