import type { IconType } from '../ds-icon';
import type { StatusBadgeV2Phase } from './ds-status-badge-v2.types';

export const phaseIconMap: Record<StatusBadgeV2Phase, IconType> = Object.freeze({
	'not-started': 'lasso_select',
	temporary: 'hourglass_empty',
	'in-review': 'document_search',
	pending: 'timer_pause',
	active: 'power_settings_circle',
	execution: 'timelapse',
	'result-succeeded': 'verified',
	'result-warning': 'warning',
	'result-failed': 'cancel',
	deprecated: 'inventory_2',
});
