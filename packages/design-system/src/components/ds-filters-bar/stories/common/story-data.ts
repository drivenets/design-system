import type { ColumnDef } from '@tanstack/react-table';
import type { DsFilterCondition, DsFilterField, DsFilterOption } from '../../ds-filters-bar.types';

/**
 * The day the date presets count back from, fixed so the rows each preset matches never change.
 */
export const STORY_TODAY = '2026-05-20';

const MS_PER_DAY = 86_400_000;
const ISO_DAY_LENGTH = 10;

/**
 * The ISO 8601 day `days` before `from`
 */
export const daysBefore = (from: string, days: number): string =>
	new Date(Date.parse(`${from}T00:00:00Z`) - days * MS_PER_DAY).toISOString().slice(0, ISO_DAY_LENGTH);

export type DeviceStatus = 'active' | 'pending' | 'inactive' | 'deprecated';
export type DeviceRole = 'core' | 'edge' | 'access' | 'aggregation';
export type DeviceVendor = 'atlas' | 'orion' | 'vertex';

/**
 * A row keyed by the `deviceFields` ids, so the example matcher reads `row[field]` (and
 * `row[field][subfield]` for the compound `hardware` field).
 */
export interface DeviceRow {
	id: string;
	name: string;
	status: DeviceStatus;
	role: DeviceRole;
	hardware: {
		vendor: DeviceVendor;
		model: string;
	};
	ports: number;
	/**
	 * ISO 8601 day
	 */
	lastSeen: string;
}

const statusOptions: ReadonlyArray<DsFilterOption> = [
	{ value: 'active', label: 'Active' },
	{ value: 'pending', label: 'Pending' },
	{ value: 'inactive', label: 'Inactive' },
	{ value: 'deprecated', label: 'Deprecated' },
];

const roleOptions: ReadonlyArray<DsFilterOption> = [
	{ value: 'core', label: 'Core' },
	{ value: 'edge', label: 'Edge' },
	{ value: 'access', label: 'Access' },
	{ value: 'aggregation', label: 'Aggregation' },
];

const vendorOptions: ReadonlyArray<DsFilterOption> = [
	{ value: 'atlas', label: 'Atlas' },
	{ value: 'orion', label: 'Orion' },
	{ value: 'vertex', label: 'Vertex' },
];

/**
 * **Field schema** for `devices`: one field of every type, including a compound one.
 */
export const deviceFields: ReadonlyArray<DsFilterField> = [
	{
		type: 'text',
		id: 'name',
		label: 'Name',
		operators: [
			{ value: '~', label: 'contains' },
			{ value: '!~', label: 'does not contain', symbol: '≁' },
			{ value: '=', label: 'equals' },
			{ value: '!=', label: 'not equals', symbol: '≠' },
		],
	},
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [
			{ value: '=', label: 'equals' },
			{ value: '!=', label: 'not equals', symbol: '≠' },
		],
		options: statusOptions,
	},
	{
		type: 'enum',
		id: 'role',
		label: 'Role',
		operators: [
			{ value: 'IN', label: 'is any of', symbol: '∈' },
			{ value: 'NOT IN', label: 'is none of', symbol: '∉' },
		],
		options: roleOptions,
	},
	{
		type: 'compound',
		id: 'hardware',
		label: 'Hardware',
		subfields: [
			{
				type: 'enum',
				id: 'vendor',
				label: 'Vendor',
				operators: [
					{ value: '=', label: 'equals' },
					{ value: '!=', label: 'not equals', symbol: '≠' },
				],
				options: vendorOptions,
			},
			{
				type: 'text',
				id: 'model',
				label: 'Model',
				operators: [
					{ value: '~', label: 'contains' },
					{ value: '=', label: 'equals' },
				],
			},
		],
	},
	{
		type: 'number',
		id: 'ports',
		label: 'Ports',
		operators: [
			{ value: '=', label: 'equals' },
			{ value: '!=', label: 'not equals', symbol: '≠' },
			{ value: '>', label: 'greater than' },
			{ value: '<', label: 'less than' },
		],
	},
	{
		type: 'date',
		id: 'lastSeen',
		label: 'Last seen',
		operators: [
			{ value: '=', label: 'is' },
			{ value: '>', label: 'after' },
			{ value: '<', label: 'before' },
		],
		presets: [
			{ value: 'today', label: 'Today' },
			{ value: 'last7Days', label: 'Last 7 days' },
			{ value: 'last30Days', label: 'Last 30 days' },
		],
	},
];

type DeviceTuple = [
	name: string,
	status: DeviceStatus,
	role: DeviceRole,
	vendor: DeviceVendor,
	model: string,
	ports: number,
	daysAgo: number,
];

const deviceTuples: ReadonlyArray<DeviceTuple> = [
	['core-router-01', 'active', 'core', 'atlas', 'AT-9000', 64, 0],
	['core-router-02', 'active', 'core', 'atlas', 'AT-9000', 64, 1],
	['core-router-03', 'pending', 'core', 'orion', 'OR-7400', 48, 3],
	['core-router-04', 'deprecated', 'core', 'vertex', 'VX-500', 32, 45],
	['edge-router-01', 'active', 'edge', 'orion', 'OR-2200', 24, 0],
	['edge-router-02', 'active', 'edge', 'orion', 'OR-2200', 24, 2],
	['edge-router-03', 'inactive', 'edge', 'vertex', 'VX-320', 16, 12],
	['edge-router-04', 'active', 'edge', 'atlas', 'AT-4100', 32, 5],
	['edge-router-05', 'pending', 'edge', 'atlas', 'AT-4100', 32, 0],
	['edge-router-06', 'deprecated', 'edge', 'vertex', 'VX-320', 16, 90],
	['access-switch-01', 'active', 'access', 'vertex', 'VX-120', 48, 0],
	['access-switch-02', 'active', 'access', 'vertex', 'VX-120', 48, 1],
	['access-switch-03', 'active', 'access', 'orion', 'OR-1000', 24, 6],
	['access-switch-04', 'inactive', 'access', 'orion', 'OR-1000', 24, 20],
	['access-switch-05', 'pending', 'access', 'atlas', 'AT-1200', 12, 4],
	['access-switch-06', 'active', 'access', 'atlas', 'AT-1200', 12, 0],
	['access-switch-07', 'deprecated', 'access', 'vertex', 'VX-100', 8, 120],
	['access-switch-08', 'active', 'access', 'orion', 'OR-1000', 24, 9],
	['agg-switch-01', 'active', 'aggregation', 'atlas', 'AT-6000', 96, 0],
	['agg-switch-02', 'active', 'aggregation', 'atlas', 'AT-6000', 96, 2],
	['agg-switch-03', 'pending', 'aggregation', 'orion', 'OR-5200', 72, 7],
	['agg-switch-04', 'inactive', 'aggregation', 'vertex', 'VX-700', 48, 33],
	['agg-switch-05', 'active', 'aggregation', 'orion', 'OR-5200', 72, 1],
	['lab-router-01', 'inactive', 'edge', 'atlas', 'AT-4100', 32, 60],
	['lab-router-02', 'pending', 'core', 'vertex', 'VX-500', 32, 14],
	['lab-switch-01', 'active', 'access', 'vertex', 'VX-120', 48, 3],
	['lab-switch-02', 'deprecated', 'aggregation', 'orion', 'OR-5200', 72, 200],
	['dc-gateway-01', 'active', 'edge', 'orion', 'OR-7400', 48, 0],
	['dc-gateway-02', 'active', 'edge', 'orion', 'OR-7400', 48, 1],
	['dc-gateway-03', 'pending', 'edge', 'atlas', 'AT-9000', 64, 25],
];

/**
 * 30 network devices for filtering examples. Deterministic: `lastSeen` counts back from
 * `STORY_TODAY`.
 */
export const devices: ReadonlyArray<DeviceRow> = deviceTuples.map(
	([name, status, role, vendor, model, ports, daysAgo], index) => ({
		id: `device-${String(index + 1).padStart(2, '0')}`,
		name,
		status,
		role,
		hardware: { vendor, model },
		ports,
		lastSeen: daysBefore(STORY_TODAY, daysAgo),
	}),
);

const labelOf = (options: ReadonlyArray<DsFilterOption>, value: string) =>
	options.find((option) => option.value === value)?.label ?? value;

export const deviceColumns: Array<ColumnDef<DeviceRow>> = [
	{ accessorKey: 'name', header: 'Name' },
	{
		accessorKey: 'status',
		header: 'Status',
		cell: (info) => labelOf(statusOptions, info.row.original.status),
	},
	{
		accessorKey: 'role',
		header: 'Role',
		cell: (info) => labelOf(roleOptions, info.row.original.role),
	},
	{
		id: 'vendor',
		accessorFn: (row) => row.hardware.vendor,
		header: 'Vendor',
		cell: (info) => labelOf(vendorOptions, info.row.original.hardware.vendor),
	},
	{ id: 'model', accessorFn: (row) => row.hardware.model, header: 'Model' },
	{ accessorKey: 'ports', header: 'Ports' },
	{ accessorKey: 'lastSeen', header: 'Last seen' },
];

/**
 * A **Saved filter** as the consumer stores it: the picker item plus the **Filter document**
 * snapshot it loads.
 */
export interface DeviceSavedFilter {
	id: string;
	name: string;
	conditions: ReadonlyArray<DsFilterCondition>;
	query: string | null;
}

export const deviceSavedFilters: ReadonlyArray<DeviceSavedFilter> = [
	{
		id: 'saved-core',
		name: 'Active core',
		conditions: [
			{ kind: 'field', id: 'saved-core-1', field: 'status', operator: '=', value: ['active'] },
			{ kind: 'field', id: 'saved-core-2', field: 'role', operator: 'IN', value: ['core'] },
		],
		query: null,
	},
	{
		id: 'saved-recent-edge',
		name: 'Edge seen this week',
		conditions: [
			{ kind: 'field', id: 'saved-edge-1', field: 'role', operator: 'IN', value: ['edge'] },
			{ kind: 'field', id: 'saved-edge-2', field: 'lastSeen', operator: '=', value: 'last7Days' },
		],
		query: null,
	},
	{
		id: 'saved-attention',
		name: 'Needs attention',
		conditions: [],
		query: 'status = "inactive" OR (status = "pending" AND ports > 40)',
	},
];
