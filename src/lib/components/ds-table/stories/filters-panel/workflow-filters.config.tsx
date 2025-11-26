/**
 * Workflow Filters Configuration
 *
 * This file demonstrates the Filter Adapter Pattern for table filters.
 * It serves as a reference implementation showing:
 *
 * 1. **Checkbox Filter** (statusFilterAdapter):
 *    - Multi-select with custom rendering (status badges)
 *    - Custom chip labels
 *    - Custom cell renderer
 *
 * 2. **Dual-Range Filter** (runningCompletedFilterAdapter):
 *    - Multiple numeric range fields in one filter
 *    - Number formatting
 *    - Automatic chip generation
 *
 * 3. **Custom Filter** (lastEditedFilterAdapter):
 *    - Complex filter with editor selection + date range
 *    - Custom render component
 *    - Multiple chip types from one filter
 *    - Custom cell renderer
 *
 * ## Usage Pattern:
 *
 * ```typescript
 * // 1. Define filter adapters (this file)
 * export const myFilter = createCheckboxFilterAdapter({ ... });
 *
 * // 2. Export array of adapters
 * export const workflowFilters = [myFilter, ...];
 *
 * // 3. Use in component with useTableFilters hook
 * const { columnFilters, filterChips, enhancedColumns, handlers } =
 *   useTableFilters(workflowFilters, columns);
 * ```
 *
 * To add a new filter, simply add a new adapter to the workflowFilters array.
 * No changes needed in the component!
 */

import { ReactNode } from 'react';
import DsStatusBadge from '../../../ds-status-badge/ds-status-badge';
import { DsStatus } from '../../../ds-status-badge/ds-status-badge.types';
import { IconType } from '../../../ds-icon/ds-icon.types';
import {
	AnyAdapter,
	CheckboxFilterItem,
	createCheckboxFilterAdapter,
	createDualRangeFilterAdapter,
	createFilterAdapter,
} from '../../filters';
import { LastEditedFilter, LastEditedFilterValue } from './components/last-edited-filter/last-edited-filter';
import { LastEditedCell } from './components/last-edited-cell/last-edited-cell';

/**
 * Workflow data type
 */
export interface Workflow {
	id: string;
	name: string;
	status: DsStatus;
	runningCompleted: {
		running: number;
		completed: number;
	};
	category: string;
	version: string;
	lastEdited: {
		editor: string;
		timestamp: string;
		colorIndex: number;
	};
}

/**
 * Status filter items
 */
export const statusItems: CheckboxFilterItem<DsStatus>[] = [
	{ value: 'active', label: 'Active' },
	{ value: 'running', label: 'Running' },
	{ value: 'pending', label: 'Pending' },
	{ value: 'draft', label: 'Draft' },
	{ value: 'inactive', label: 'Inactive' },
	{ value: 'warning', label: 'Warning' },
	{ value: 'failed', label: 'Failed' },
];

/**
 * Status to icon mapping
 */
const statusIconMap: Record<DsStatus, IconType> = {
	active: 'check_circle',
	running: 'change_circle',
	pending: 'pause_circle',
	draft: 'stylus_note',
	inactive: 'stop_circle',
	warning: 'warning',
	failed: 'cancel',
};

/**
 * Get icon for status
 */
export const getStatusIcon = (status: DsStatus): IconType => {
	return statusIconMap[status] ?? 'check_circle';
};

/**
 * Render status badge
 */
export const renderStatusBadge = (status: DsStatus): ReactNode => {
	const icon = getStatusIcon(status);
	return <DsStatusBadge icon={icon} status={status} size="small" />;
};

/**
 * Status filter adapter - Checkbox multi-select filter
 *
 * Demonstrates:
 * - Custom item rendering with DsStatusBadge
 * - Custom chip label template
 * - Custom cell renderer for table column
 *
 * Features:
 * - Empty selection = show all (no filter applied)
 * - Selected items = show only those items
 * - Automatic chip generation for each selected status
 */
export const statusFilterAdapter = createCheckboxFilterAdapter<Workflow, DsStatus>({
	id: 'status',
	label: 'Status',
	items: statusItems,
	renderer: (item) => renderStatusBadge(item.value),
	chipLabelTemplate: (item) => `Status: ${item.label}`,
	cellRenderer: (value) => renderStatusBadge(value),
});

/**
 * Running/Completed filter adapter - Dual-range numeric filter
 *
 * Demonstrates:
 * - Multiple numeric ranges in one filter (running AND completed)
 * - Custom number formatting
 * - Custom row value extraction
 *
 * Features:
 * - Each field can have independent from/to ranges
 * - All ranges must match (AND logic)
 * - Automatic chip generation for each active range
 * - Formatted numbers in chips
 */
export const runningCompletedFilterAdapter = createDualRangeFilterAdapter<Workflow>({
	id: 'runningCompleted',
	label: 'Running/Completed',
	fields: {
		running: 'Running',
		completed: 'Completed',
	},
	formatNumber: (num) => num.toLocaleString('en-US'),
	getRowValue: (row) => row.getValue('runningCompleted') as { running: number; completed: number },
});

/**
 * Available editors for filtering
 */
export const availableEditors = [
	{ name: 'Maren Levin', colorIndex: 0 },
	{ name: 'Emery Franci', colorIndex: 1 },
	{ name: 'Ryan Francy', colorIndex: 2 },
	{ name: 'Roger Dias', colorIndex: 0 },
	{ name: 'Chance Botosh', colorIndex: 1 },
	{ name: 'Lindsey Westervelt', colorIndex: 2 },
	{ name: 'Ruben Stanton', colorIndex: 0 },
	{ name: 'Erin Vetrovs', colorIndex: 1 },
	{ name: 'Neil Sims', colorIndex: 2 },
];

/**
 * Helper: Calculate date range based on time range option
 */
const calculateDateRange = (
	timeRange: LastEditedFilterValue['timeRange'],
	customFrom?: string,
	customTo?: string,
): { from: Date | null; to: Date | null } => {
	const now = new Date();

	if (timeRange === 'custom') {
		return {
			from: customFrom ? new Date(customFrom) : null,
			to: customTo ? new Date(customTo) : null,
		};
	}

	if (!timeRange) {
		return { from: null, to: null };
	}

	const from = new Date();
	switch (timeRange) {
		case '24h':
			from.setHours(now.getHours() - 24);
			break;
		case 'week':
			from.setDate(now.getDate() - 7);
			break;
		case 'month':
			from.setMonth(now.getMonth() - 1);
			break;
		case '3months':
			from.setMonth(now.getMonth() - 3);
			break;
	}

	return { from, to: now };
};

/**
 * Helper: Parse timestamp string to Date
 * Supports ISO strings and standard JavaScript date formats
 */
const parseTimestamp = (timestamp: string): Date => {
	return new Date(timestamp);
};

/**
 * Last Edited filter adapter - Custom complex filter
 *
 * Demonstrates:
 * - Complex filter state (editor multi-select + time range)
 * - Custom filter function with multiple conditions
 * - Multiple chip types from one filter
 * - Custom filter UI component
 * - Custom cell renderer
 *
 * Features:
 * - Filter by multiple editors (multi-select)
 * - Filter by time range (preset options + custom date range)
 * - Separate chips for editors and time range
 * - Both conditions must match (AND logic)
 *
 * This is a reference implementation for building custom filters
 * that don't fit the checkbox or dual-range patterns.
 */
export const lastEditedFilterAdapter = createFilterAdapter<
	Workflow,
	LastEditedFilterValue,
	Workflow['lastEdited']
>({
	id: 'lastEdited',
	label: 'Last edited',
	initialValue: {
		editors: [],
		timeRange: null,
		customFrom: undefined,
		customTo: undefined,
	},
	filterFn: (row, columnId, filterValue) => {
		const value: Workflow['lastEdited'] = row.getValue(columnId);
		const { editors, timeRange, customFrom, customTo } = filterValue;

		// Check editor filter
		let editorMatch = true;
		if (editors.length > 0) {
			editorMatch = editors.includes(value.editor);
		}

		// Check time range filter
		let timeMatch = true;
		if (timeRange) {
			const { from, to } = calculateDateRange(timeRange, customFrom, customTo);
			if (from || to) {
				const timestamp = parseTimestamp(value.timestamp);
				timeMatch = (!from || timestamp >= from) && (!to || timestamp <= to);
			}
		}

		return editorMatch && timeMatch;
	},
	toChips: (value) => {
		const chips = [];

		// Editor chips
		value.editors.forEach((editor) => {
			chips.push({
				id: `editor-${editor}`,
				label: `Editor: ${editor}`,
				metadata: { key: 'lastEdited', type: 'editor', value: editor },
			});
		});

		// Time range chip
		if (value.timeRange) {
			let label = '';
			switch (value.timeRange) {
				case '24h':
					label = 'Last edited: Last 24 hours';
					break;
				case 'week':
					label = 'Last edited: Last week';
					break;
				case 'month':
					label = 'Last edited: Last month';
					break;
				case '3months':
					label = 'Last edited: Last 3 months';
					break;
				case 'custom': {
					const from = value.customFrom || '...';
					const to = value.customTo || '...';
					label = `Last edited: ${from} to ${to}`;
					break;
				}
			}
			chips.push({
				id: 'timeRange',
				label,
				metadata: { key: 'lastEdited', type: 'timeRange' },
			});
		}

		return chips;
	},
	fromChip: (chip, currentValue) => {
		const { type, value: chipValue } = chip.metadata || {};

		if (type === 'editor') {
			return {
				...currentValue,
				editors: currentValue.editors.filter((e) => e !== chipValue),
			};
		}

		if (type === 'timeRange') {
			return {
				...currentValue,
				timeRange: null,
				customFrom: undefined,
				customTo: undefined,
			};
		}

		return currentValue;
	},
	getActiveFiltersCount: (value) => {
		let count = value.editors.length;
		if (value.timeRange) count += 1;
		return count;
	},
	renderFilter: (value, onChange) => (
		<LastEditedFilter value={value} onChange={onChange} availableEditors={availableEditors} />
	),
	cellRenderer: (value) => (
		<LastEditedCell editor={value.editor} timestamp={value.timestamp} colorIndex={value.colorIndex} />
	),
});

/**
 * All workflow filters
 */
export const workflowFilters = [
	statusFilterAdapter,
	runningCompletedFilterAdapter,
	lastEditedFilterAdapter,
] satisfies AnyAdapter[];
