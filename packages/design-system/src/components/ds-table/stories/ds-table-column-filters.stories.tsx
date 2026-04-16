import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import DsTable from '../ds-table';
import { DsTagFilter } from '../../ds-tag-filter';
import {
	type CheckboxFilterItem,
	createCheckboxFilterAdapter,
	type FilterState,
	useTableFilters,
} from '../filters';
import { fullHeightDecorator } from './common/story-decorators';
import styles from './ds-table.stories.module.scss';

type DeviceRow = {
	id: string;
	name: string;
	type: 'PP-LGX' | 'ME10' | 'OLT' | 'Role-4' | 'Role-5' | 'Role-6';
	site: string;
	vendor: 'Cisco' | 'Juniper' | 'Nokia' | 'Arista';
	status: 'active' | 'warning' | 'failed';
};

const rows: DeviceRow[] = [
	{ id: '1', name: 'edge-01', type: 'ME10', site: 'NYC-DC1', vendor: 'Cisco', status: 'active' },
	{ id: '2', name: 'edge-02', type: 'OLT', site: 'NYC-DC1', vendor: 'Cisco', status: 'warning' },
	{ id: '3', name: 'core-01', type: 'PP-LGX', site: 'LON-DC2', vendor: 'Juniper', status: 'active' },
	{ id: '4', name: 'agg-01', type: 'Role-4', site: 'LON-DC2', vendor: 'Nokia', status: 'failed' },
	{ id: '5', name: 'agg-02', type: 'Role-5', site: 'SFO-DC3', vendor: 'Arista', status: 'active' },
	{ id: '6', name: 'agg-03', type: 'Role-6', site: 'SFO-DC3', vendor: 'Arista', status: 'active' },
	{ id: '7', name: 'edge-03', type: 'ME10', site: 'NYC-DC1', vendor: 'Cisco', status: 'active' },
	{ id: '8', name: 'edge-04', type: 'ME10', site: 'LON-DC2', vendor: 'Juniper', status: 'warning' },
	{ id: '9', name: 'core-02', type: 'PP-LGX', site: 'SFO-DC3', vendor: 'Juniper', status: 'active' },
	{ id: '10', name: 'core-03', type: 'PP-LGX', site: 'NYC-DC1', vendor: 'Cisco', status: 'failed' },
];

const typeOptions = [
	{ value: 'PP-LGX' as const, label: 'PP-LGX' },
	{ value: 'ME10' as const, label: 'ME10' },
	{ value: 'OLT' as const, label: 'OLT' },
	{ value: 'Role-4' as const, label: 'Role-4' },
	{ value: 'Role-5' as const, label: 'Role-5' },
	{ value: 'Role-6' as const, label: 'Role-6' },
];

const siteOptions = [
	{ value: 'NYC-DC1', label: 'NYC-DC1' },
	{ value: 'LON-DC2', label: 'LON-DC2' },
	{ value: 'SFO-DC3', label: 'SFO-DC3' },
];

const vendorOptions = [
	{ value: 'Cisco' as const, label: 'Cisco' },
	{ value: 'Juniper' as const, label: 'Juniper' },
	{ value: 'Nokia' as const, label: 'Nokia' },
	{ value: 'Arista' as const, label: 'Arista' },
];

const typeFilter = createCheckboxFilterAdapter<DeviceRow, DeviceRow['type']>({
	id: 'type',
	label: 'Type',
	items: typeOptions,
	searchable: true,
	selectAll: true,
	locale: { searchPlaceholder: 'Search role' },
});

const siteFilter = createCheckboxFilterAdapter<DeviceRow>({
	id: 'site',
	label: 'Site',
	items: siteOptions,
	searchable: true,
	selectAll: true,
	locale: { searchPlaceholder: 'Search site' },
});

const vendorFilter = createCheckboxFilterAdapter<DeviceRow, DeviceRow['vendor']>({
	id: 'vendor',
	label: 'Vendor',
	items: vendorOptions,
	selectAll: true,
});

const adapters = [typeFilter, siteFilter, vendorFilter];

const baseColumns: ColumnDef<DeviceRow>[] = [
	{
		id: 'name',
		accessorKey: 'name',
		header: 'Name',
		cell: (info) => info.getValue(),
	},
	{
		id: 'type',
		accessorKey: 'type',
		header: 'Type',
		meta: { filter: { adapterId: 'type' } },
		cell: (info) => info.getValue(),
	},
	{
		id: 'site',
		accessorKey: 'site',
		header: 'Site',
		meta: { filter: { adapterId: 'site' } },
		cell: (info) => info.getValue(),
	},
	{
		id: 'vendor',
		accessorKey: 'vendor',
		header: 'Vendor',
		meta: { filter: { adapterId: 'vendor' } },
		cell: (info) => info.getValue(),
	},
	{
		id: 'status',
		accessorKey: 'status',
		header: 'Status',
		cell: (info) => info.getValue(),
	},
];

const uncontrolledSource = `import type { ColumnDef } from '@tanstack/react-table';
import {
	DsTable,
	DsTagFilter,
	createCheckboxFilterAdapter,
	useTableFilters,
} from '@drivenets/design-system';

type DeviceRow = {
	id: string;
	name: string;
	type: 'PP-LGX' | 'ME10' | 'OLT';
	site: string;
	status: 'active' | 'warning' | 'failed';
};

const typeOptions = [
	{ value: 'PP-LGX' as const, label: 'PP-LGX' },
	{ value: 'ME10' as const, label: 'ME10' },
	{ value: 'OLT' as const, label: 'OLT' },
];

const siteOptions = [
	{ value: 'NYC-DC1', label: 'NYC-DC1' },
	{ value: 'LON-DC2', label: 'LON-DC2' },
	{ value: 'SFO-DC3', label: 'SFO-DC3' },
];

const typeFilter = createCheckboxFilterAdapter<DeviceRow, DeviceRow['type']>({
	id: 'type',
	label: 'Type',
	items: typeOptions,
	searchable: true,
	selectAll: true,
});

const siteFilter = createCheckboxFilterAdapter<DeviceRow>({
	id: 'site',
	label: 'Site',
	items: siteOptions,
	searchable: true,
	selectAll: true,
});

const columns: ColumnDef<DeviceRow>[] = [
	{ id: 'name', accessorKey: 'name', header: 'Name' },
	{ id: 'type', accessorKey: 'type', header: 'Type', meta: { filter: { adapterId: 'type' } } },
	{ id: 'site', accessorKey: 'site', header: 'Site', meta: { filter: { adapterId: 'site' } } },
	{ id: 'status', accessorKey: 'status', header: 'Status' },
];

function DevicesTable({ rows }: { rows: DeviceRow[] }) {
	const { columnFilters, filterTags, enhancedColumns, handlers } = useTableFilters({
		filterAdapters: [typeFilter, siteFilter],
		baseColumns: columns,
	});

	return (
		<>
			{filterTags.length > 0 && (
				<DsTagFilter
					items={filterTags}
					onClearAll={handlers.clearAll}
					onItemDelete={handlers.deleteTag}
				/>
			)}
			<DsTable
				columns={enhancedColumns}
				columnFilters={columnFilters}
				data={rows}
				stickyHeader
				bordered
				fullWidth
			/>
		</>
	);
}`;

const controlledSource = `import { useState } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import {
	DsTable,
	DsTagFilter,
	type CheckboxFilterItem,
	type FilterState,
	createCheckboxFilterAdapter,
	useTableFilters,
} from '@drivenets/design-system';

type DeviceRow = {
	id: string;
	name: string;
	type: 'PP-LGX' | 'ME10' | 'OLT';
	site: string;
};

const typeFilter = createCheckboxFilterAdapter<DeviceRow, DeviceRow['type']>({
	id: 'type',
	label: 'Type',
	items: [
		{ value: 'PP-LGX', label: 'PP-LGX' },
		{ value: 'ME10', label: 'ME10' },
		{ value: 'OLT', label: 'OLT' },
	],
	searchable: true,
	selectAll: true,
});

const columns: ColumnDef<DeviceRow>[] = [
	{ id: 'name', accessorKey: 'name', header: 'Name' },
	{ id: 'type', accessorKey: 'type', header: 'Type', meta: { filter: { adapterId: 'type' } } },
	{ id: 'site', accessorKey: 'site', header: 'Site' },
];

function ControlledDevicesTable({ rows }: { rows: DeviceRow[] }) {
	// Source of truth lives outside the hook (URL, server, parent store, etc.).
	const [appliedFilters, setAppliedFilters] = useState<FilterState<CheckboxFilterItem[]>>({
		type: [{ value: 'PP-LGX', label: 'PP-LGX' }],
	});

	const { columnFilters, filterTags, enhancedColumns, handlers } = useTableFilters({
		filterAdapters: [typeFilter],
		baseColumns: columns,
		appliedFilters,
		onFiltersChange: setAppliedFilters,
	});

	return (
		<>
			{filterTags.length > 0 && (
				<DsTagFilter
					items={filterTags}
					onClearAll={handlers.clearAll}
					onItemDelete={handlers.deleteTag}
				/>
			)}
			<DsTable
				columns={enhancedColumns}
				columnFilters={columnFilters}
				data={rows}
				stickyHeader
				bordered
				fullWidth
			/>
		</>
	);
}`;

const meta: Meta<typeof DsTable<DeviceRow, unknown>> = {
	title: 'Components/Table/Filters',
	component: DsTable,
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [fullHeightDecorator],
};

export default meta;

type Story = StoryObj<typeof DsTable<DeviceRow, unknown>>;

export const ColumnFilters: Story = {
	name: 'Per-Column — Popover',
	parameters: {
		docs: {
			description: {
				story: `
Per-column filter popover anchored to a header cell. Opt a column in by
setting \`meta.filter\` on its \`ColumnDef\`, register the matching adapter
with \`useTableFilters\`, and feed the hook's \`enhancedColumns\` +
\`columnFilters\` back into \`DsTable\`.

The header renders a ghost filter button that appears on hover; clicking
opens a popover with the adapter's UI (search + "All" + checkbox list when
\`searchable\` / \`selectAll\` are enabled on \`createCheckboxFilterAdapter\`)
and a \`Clear\` / \`Save\` footer. Clicking outside the popover discards the
draft and closes it (same as pressing Escape).
				`,
			},
			source: { code: uncontrolledSource },
		},
	},
	render: function Render() {
		const { columnFilters, filterTags, enhancedColumns, handlers } = useTableFilters({
			filterAdapters: adapters,
			baseColumns,
		});

		return (
			<div className={styles.tableFilterContainer}>
				{filterTags.length > 0 && (
					<DsTagFilter
						items={filterTags}
						onClearAll={handlers.clearAll}
						onItemDelete={handlers.deleteTag}
					/>
				)}

				<DsTable
					columns={enhancedColumns}
					columnFilters={columnFilters}
					data={rows}
					stickyHeader
					bordered
					fullWidth
				/>
			</div>
		);
	},
};

export const ControlledColumnFilters: Story = {
	name: 'Per-Column — Controlled',
	parameters: {
		docs: {
			description: {
				story: `
Pass \`appliedFilters\` + \`onFiltersChange\` to drive filters from URL or
server state. Per-column Save commits only that column's draft into the
external state, leaving other filters untouched.
				`,
			},
			source: { code: controlledSource },
		},
	},
	render: function Render() {
		const [appliedFilters, setAppliedFilters] = useState<FilterState<CheckboxFilterItem[]>>({
			type: [{ value: 'PP-LGX', label: 'PP-LGX' }],
		});

		const { columnFilters, filterTags, enhancedColumns, handlers } = useTableFilters({
			filterAdapters: adapters,
			baseColumns,
			appliedFilters,
			onFiltersChange: setAppliedFilters,
		});

		return (
			<div className={styles.tableFilterContainer}>
				{filterTags.length > 0 && (
					<DsTagFilter
						items={filterTags}
						onClearAll={handlers.clearAll}
						onItemDelete={handlers.deleteTag}
					/>
				)}

				<DsTable
					columns={enhancedColumns}
					columnFilters={columnFilters}
					data={rows}
					stickyHeader
					bordered
					fullWidth
				/>
			</div>
		);
	},
};
