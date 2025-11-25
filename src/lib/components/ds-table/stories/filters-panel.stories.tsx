import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import DsIcon from '../../ds-icon/ds-icon';
import DsTable from '../ds-table';
import DsButton from '../../ds-button/ds-button';
import { FilterModal } from '../filters/components/filter-modal';
import { DsChipGroup } from '../../ds-chip-group';
import { useTableFilters } from '../filters/hooks/use-table-filters';
import { Workflow, workflowFilters } from './filters-panel/workflow-filters.config';
import styles from '../ds-table.stories.module.scss';

export enum WorkflowCategory {
	NetworkBuilt = 'Network Built',
	OpticalOptimization = 'Optical Optimization',
	ServiceProvisioning = 'Service Provisioning',
}

const sampleUsers = [
	{ name: 'Maren Levin', colorIndex: 0 },
	{ name: 'Emery Franci', colorIndex: 1 },
	{ name: 'Ryan Francy', colorIndex: 2 },
	{ name: 'Roger Dias', colorIndex: 0 },
	{ name: 'Lindsey Westervelt', colorIndex: 1 },
	{ name: 'Neil Sims', colorIndex: 2 },
];

const columns: ColumnDef<Workflow>[] = [
	{
		id: 'status',
		accessorKey: 'status',
		header: 'Status',
		cell: (info) => info.getValue(),
	},
	{
		id: 'name',
		accessorKey: 'name',
		header: 'Name',
		cell: (info) => info.getValue(),
	},
	{
		id: 'runningCompleted',
		accessorKey: 'runningCompleted',
		header: 'Running/completed',
		cell: (info) => {
			const value = info.getValue() as { running: number; completed: number };
			return `${value.running}/${value.completed}`;
		},
	},
	{
		id: 'category',
		accessorKey: 'category',
		header: 'Category',
		cell: (info) => info.getValue(),
	},
	{
		id: 'version',
		accessorKey: 'version',
		header: 'Version',
		cell: (info) => info.getValue(),
	},
	{
		id: 'lastEdited',
		accessorKey: 'lastEdited',
		header: 'Last edited',
	},
];

const defaultData: Workflow[] = [
	{
		id: '1',
		name: 'Scheduled Config Backup',
		status: 'active',
		runningCompleted: { running: 3, completed: 41 },
		category: WorkflowCategory.NetworkBuilt,
		version: '000.0003',
		lastEdited: {
			editor: sampleUsers[0].name,
			timestamp: '23-05-2024 04:47 PM',
			colorIndex: sampleUsers[0].colorIndex,
		},
	},
	{
		id: '2',
		name: 'Network Provisioning',
		status: 'running',
		runningCompleted: { running: 8, completed: 14 },
		category: WorkflowCategory.NetworkBuilt,
		version: '000.0002',
		lastEdited: {
			editor: sampleUsers[1].name,
			timestamp: '23-05-2024 03:32 PM',
			colorIndex: sampleUsers[1].colorIndex,
		},
	},
	{
		id: '3',
		name: 'Service Provisioning',
		status: 'inactive',
		runningCompleted: { running: 0, completed: 243 },
		category: WorkflowCategory.NetworkBuilt,
		version: '000.0033',
		lastEdited: {
			editor: sampleUsers[2].name,
			timestamp: '22-05-2024 11:15 AM',
			colorIndex: sampleUsers[2].colorIndex,
		},
	},
	{
		id: '4',
		name: 'Assign IPv4 Address',
		status: 'active',
		runningCompleted: { running: 14, completed: 123 },
		category: WorkflowCategory.NetworkBuilt,
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[3].name,
			timestamp: '23-05-2024 02:20 PM',
			colorIndex: sampleUsers[3].colorIndex,
		},
	},
	{
		id: '5',
		name: 'Shutdown Decommissioned Device',
		status: 'active',
		runningCompleted: { running: 45, completed: 45 },
		category: WorkflowCategory.OpticalOptimization,
		version: '000.0022',
		lastEdited: {
			editor: sampleUsers[4].name,
			timestamp: '23-05-2024 01:05 PM',
			colorIndex: sampleUsers[4].colorIndex,
		},
	},
	{
		id: '6',
		name: 'Optical Power Level Calibration',
		status: 'draft',
		runningCompleted: { running: 99, completed: 23 },
		category: WorkflowCategory.OpticalOptimization,
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[5].name,
			timestamp: '21-05-2024 09:30 AM',
			colorIndex: sampleUsers[5].colorIndex,
		},
	},
	{
		id: '7',
		name: 'Deploy Layer 2 EVPN Instance',
		status: 'pending',
		runningCompleted: { running: 49, completed: 100 },
		category: WorkflowCategory.OpticalOptimization,
		version: '000.0012',
		lastEdited: {
			editor: sampleUsers[0].name,
			timestamp: '23-05-2024 12:45 PM',
			colorIndex: sampleUsers[0].colorIndex,
		},
	},
	{
		id: '8',
		name: 'Initiate Scheduled Firmware Upgrade',
		status: 'active',
		runningCompleted: { running: 25, completed: 75 },
		category: WorkflowCategory.ServiceProvisioning,
		version: '000.0010',
		lastEdited: {
			editor: sampleUsers[1].name,
			timestamp: '22-05-2024 05:10 PM',
			colorIndex: sampleUsers[1].colorIndex,
		},
	},
	{
		id: '9',
		name: 'Enable High Availability Mode',
		status: 'running',
		runningCompleted: { running: 77, completed: 88 },
		category: WorkflowCategory.ServiceProvisioning,
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[2].name,
			timestamp: '23-05-2024 10:22 AM',
			colorIndex: sampleUsers[2].colorIndex,
		},
	},
	{
		id: '10',
		name: 'Audit Access Control Policies',
		status: 'active',
		runningCompleted: { running: 65, completed: 200 },
		category: WorkflowCategory.ServiceProvisioning,
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[3].name,
			timestamp: '20-05-2024 03:15 PM',
			colorIndex: sampleUsers[3].colorIndex,
		},
	},
	{
		id: '11',
		name: 'Synchronize NTP Across Network Nodes',
		status: 'warning',
		runningCompleted: { running: 49, completed: 142 },
		category: WorkflowCategory.ServiceProvisioning,
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[4].name,
			timestamp: '19-05-2024 08:40 AM',
			colorIndex: sampleUsers[4].colorIndex,
		},
	},
	{
		id: '12',
		name: 'Validate Optical Link Integrity',
		status: 'failed',
		runningCompleted: { running: 90, completed: 300 },
		category: WorkflowCategory.NetworkBuilt,
		version: '000.0001',
		lastEdited: {
			editor: sampleUsers[5].name,
			timestamp: '03-05-2024 04:47 PM',
			colorIndex: sampleUsers[5].colorIndex,
		},
	},
];

const meta: Meta<typeof DsTable<Workflow, unknown>> = {
	title: 'Design System/Table/Filters',
	component: DsTable,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Table Filters System

A plug-and-play filter system using the **Filter Adapter Pattern** that eliminates boilerplate and centralizes filter logic.

## Features

- ✅ **Plug-and-play**: Add filters by adding to config array
- ✅ **Type-safe**: Full TypeScript support
- ✅ **Automatic**: Chip generation, nav items, column enhancement
- ✅ **Reusable**: Generic adapters work across tables
- ✅ **Extensible**: Custom adapters for complex scenarios

## Quick Start

### 1. Define Filters (config file)

\`\`\`typescript
// my-filters.config.tsx
import { createCheckboxFilterAdapter, createDualRangeFilterAdapter } from '../filters';

export const statusFilter = createCheckboxFilterAdapter({
  id: 'status',
  label: 'Status',
  items: [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ],
});

export const rangeFilter = createDualRangeFilterAdapter({
  id: 'count',
  label: 'Count',
  fields: { count: 'Count' },
});

export const myFilters = [statusFilter, rangeFilter];
\`\`\`

### 2. Use in Component

\`\`\`typescript
import { useTableFilters } from '../filters/hooks/use-table-filters';
import { myFilters } from './my-filters.config';

function MyTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    columnFilters,       // For TanStack Table
    filterChips,         // For DsChipGroup
    filterNavItems,      // For FilterModal nav
    enhancedColumns,     // Columns with filters
    handlers,            // { applyFilters, clearAll, deleteChip }
    renderFilterContent, // Render function
  } = useTableFilters(myFilters, baseColumns);

  return (
    <>
      <DsButton onClick={() => setIsModalOpen(true)}>
        <DsIcon icon="filter_list" />
      </DsButton>

      {filterChips.length > 0 && (
        <DsChipGroup
          items={filterChips}
          onClearAll={handlers.clearAll}
          onItemDelete={handlers.deleteChip}
        />
      )}

      <DsTable
        columns={enhancedColumns}
        columnFilters={columnFilters}
        data={myData}
      />

      <FilterModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        filterNavItems={filterNavItems}
        onApply={handlers.applyFilters}
        onClearAll={handlers.clearAll}
      >
        {(selectedFilter) => renderFilterContent(selectedFilter)}
      </FilterModal>
    </>
  );
}
\`\`\`

## Available Filter Types

### Checkbox Filter (Multi-select)
\`\`\`typescript
createCheckboxFilterAdapter({
  id: 'columnName',
  label: 'Display Label',
  items: [{ value: 'val1', label: 'Label 1' }],
  renderer?: (item) => <CustomComponent />,      // Optional
  chipLabelTemplate?: (item) => \`Custom: \${item.label}\`, // Optional
  cellRenderer?: (value) => <CustomCell />,      // Optional
});
\`\`\`

### Dual-Range Filter (Numeric ranges)
\`\`\`typescript
createDualRangeFilterAdapter({
  id: 'columnName',
  label: 'Display Label',
  fields: {
    field1: 'Field 1 Label',
    field2: 'Field 2 Label',
  },
  formatNumber?: (num) => num.toFixed(2),        // Optional
});
\`\`\`

### Custom Filter (Full control)
\`\`\`typescript
createCustomFilterAdapter({
  id: 'columnName',
  label: 'Display Label',
  initialValue: { /* your state */ },
  filterFn: (row, columnId, filterValue) => boolean,
  toChips: (value) => FilterChipItem[],
  fromChip: (chip, currentValue) => newValue,
  getActiveCount: (value) => number,
  hasActiveFilters: (value) => boolean,
  renderFilter: (value, onChange) => ReactNode,
  cellRenderer?: (value) => ReactNode,           // Optional
});
\`\`\`

## What You Get Automatically

- ✅ Chip generation from filter state
- ✅ Filter nav items with active counts
- ✅ Column enhancement with filter functions
- ✅ State management across all filters
- ✅ Type-safe filtering
`,
			},
		},
	},
	tags: ['autodocs'],
	args: {
		columns: columns,
		data: defaultData,
		stickyHeader: true,
		bordered: true,
		fullWidth: true,
		highlightOnHover: true,
		expandable: false,
		emptyState: <div>No data available</div>,
		onRowClick: (row) => console.log('Row clicked:', row),
	},
	decorators: [
		(Story) => (
			<div className={styles.storyPadding}>
				<style>
					{`
            #storybook-root, html, body { height: 100%; }
          `}
				</style>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof DsTable<Workflow, unknown>>;

export const FiltersPanel: Story = {
	name: 'With Filters Panel',
	parameters: {
		docs: {
			description: {
				story: `
### Interactive Filter Example

This story demonstrates the complete filter system with:

- **Status Filter**: Checkbox multi-select with custom rendering (status badges)
- **Running/Completed Filter**: Dual-range numeric filter
- **Category Filter**: Simple checkbox multi-select
- **Version Filter**: Checkbox with custom chip labels

#### Key Implementation Details:

1. **Filter Configuration** (see \`workflow-filters.config.tsx\`):
   - Centralized filter definitions
   - Custom renderers for status badges
   - Format functions for numbers

2. **Hook Usage**:
   \`\`\`typescript
   const {
     columnFilters,       // Pass to DsTable
     filterChips,         // Pass to DsChipGroup
     filterNavItems,      // Pass to FilterModal
     enhancedColumns,     // Pass to DsTable (includes filter functions)
     handlers,            // { applyFilters, clearAll, deleteChip }
     renderFilterContent, // Pass to FilterModal children
   } = useTableFilters(workflowFilters, columns);
   \`\`\`

3. **What's Handled Automatically**:
   - ✅ Filter state management
   - ✅ Chip generation and deletion
   - ✅ Nav item counts (updates in real-time)
   - ✅ Column enhancement with filter functions
   - ✅ Type-safe filter values

#### Try It:
1. Click the filter icon to open the modal
2. Select filters in different categories
3. Notice the nav item counts update as you make changes
4. Click "Apply" to see filtered data and chips
5. Delete individual chips or clear all filters

#### Adding More Filters:
To add a new filter, just add one adapter to \`workflowFilters\` array. No other changes needed!
`,
			},
		},
	},
	render: function Render(args) {
		const [isOpen, setIsOpen] = useState(false);

		// useTableFilters hook orchestrates all filter logic
		const { columnFilters, filterChips, filterNavItems, enhancedColumns, handlers, renderFilterContent } =
			useTableFilters(workflowFilters, args.columns);

		const handleApply = () => {
			handlers.applyFilters();
			setIsOpen(false);
		};

		const handleClearAll = () => {
			handlers.clearAll();
			setIsOpen(false);
		};

		return (
			<div className={styles.tableFilterContainer}>
				{/* Toolbar with filter button */}
				<div className={styles.toolbar}>
					<DsButton design="v1.2" buttonType="secondary" onClick={() => setIsOpen(true)}>
						<DsIcon size="tiny" icon="filter_list" />
					</DsButton>
				</div>

				{/* Filter chips (automatically generated from filter state) */}
				{filterChips.length > 0 && (
					<DsChipGroup items={filterChips} onClearAll={handleClearAll} onItemDelete={handlers.deleteChip} />
				)}

				{/* Table with enhanced columns (includes filter functions) */}
				<DsTable {...args} columns={enhancedColumns} columnFilters={columnFilters} />

				{/* Filter modal (renders filter UI for selected category) */}
				<FilterModal
					style={{ height: '600px' }}
					open={isOpen}
					onOpenChange={setIsOpen}
					columns={8}
					filterNavItems={filterNavItems}
					onApply={handleApply}
					onClearAll={handleClearAll}
				>
					{(selectedFilter) => renderFilterContent(selectedFilter)}
				</FilterModal>
			</div>
		);
	},
	args: {},
};
