import { ReactNode } from 'react';
import DsStatusBadge from '../../../ds-status-badge/ds-status-badge';
import { DsStatus } from '../../../ds-status-badge/ds-status-badge.types';
import { IconType } from '../../../ds-icon/ds-icon.types';
import { createCheckboxFilterAdapter, createDualRangeFilterAdapter, FilterAdapter } from '../../filters';
import { CheckboxFilterItem } from '../components/select-filter/select-filter';

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
	lastEdited: string;
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
 * All workflow filters
 */
export const workflowFilters: FilterAdapter<Workflow>[] = [
	statusFilterAdapter,
	runningCompletedFilterAdapter,
];
