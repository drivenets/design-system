import { ReactNode } from 'react';
import DsStatusBadge from '../../../ds-status-badge/ds-status-badge';
import { DsStatus } from '../../../ds-status-badge/ds-status-badge.types';
import { IconType } from '../../../ds-icon/ds-icon.types';
import {
	createCheckboxFilterAdapter,
	createCustomFilterAdapter,
	createDualRangeFilterAdapter,
	FilterAdapter,
	CheckboxFilterItem,
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
 * Get icon for status
 */
export const getStatusIcon = (status: DsStatus): IconType => {
	switch (status) {
		case 'active':
			return 'check_circle';
		case 'running':
			return 'change_circle';
		case 'pending':
			return 'pause_circle';
		case 'draft':
			return 'stylus_note';
		case 'inactive':
			return 'stop_circle';
		case 'warning':
			return 'warning';
		case 'failed':
			return 'cancel';
		default:
			return 'check_circle';
	}
};

/**
 * Render status badge
 */
export const renderStatusBadge = (status: DsStatus): ReactNode => {
	const icon = getStatusIcon(status);
	return <DsStatusBadge icon={icon} status={status} size="small" />;
};

/**
 * Status filter adapter
 */
export const statusFilterAdapter = createCheckboxFilterAdapter<Workflow, DsStatus>({
	id: 'status',
	label: 'Status',
	items: statusItems,
	renderer: (item) => renderStatusBadge(item.value),
	chipLabelTemplate: (item) => `Status: ${item.label}`,
	cellRenderer: (value) => renderStatusBadge(value as DsStatus),
});

/**
 * Running/Completed filter adapter
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
 */
const parseTimestamp = (timestamp: string): Date => {
	// Format: "23-05-2024 04:47 PM"
	const [datePart, timePart, period] = timestamp.split(' ');
	const [day, month, year] = datePart.split('-');
	const [hours, minutes] = timePart.split(':');

	let hour = parseInt(hours, 10);
	if (period === 'PM' && hour !== 12) {
		hour += 12;
	} else if (period === 'AM' && hour === 12) {
		hour = 0;
	}

	return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), hour, parseInt(minutes));
};

/**
 * Last Edited filter adapter
 */
export const lastEditedFilterAdapter = createCustomFilterAdapter<Workflow, LastEditedFilterValue>({
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
	getActiveCount: (value) => {
		let count = 0;
		if (value.editors.length > 0) count += value.editors.length;
		if (value.timeRange) count += 1;
		return count;
	},
	hasActiveFilters: (value) => {
		return value.editors.length > 0 || value.timeRange !== null;
	},
	renderFilter: (value, onChange) => (
		<LastEditedFilter value={value} onChange={onChange} availableEditors={availableEditors} />
	),
	cellRenderer: (value: Workflow['lastEdited']) => (
		<LastEditedCell editor={value.editor} timestamp={value.timestamp} colorIndex={value.colorIndex} />
	),
});

/**
 * All workflow filters
 */
export const workflowFilters: FilterAdapter<Workflow>[] = [
	statusFilterAdapter,
	runningCompletedFilterAdapter,
	lastEditedFilterAdapter,
];
