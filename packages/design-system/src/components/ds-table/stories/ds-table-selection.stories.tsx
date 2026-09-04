import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { useRef, useState } from 'react';
import DsTable from '../ds-table';
import type { DsTableApi } from '../ds-table.types';
import { DsStack } from '../../ds-stack';
import { DsButtonV3 } from '../../ds-button-v3';
import { DsTypography } from '../../ds-typography';
import { columns, defaultData, type Person } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { TableEmptyState } from './components';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Components/Table/Selection',
	component: DsTable,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		columns,
		data: defaultData,
		stickyHeader: true,
		bordered: true,
		fullWidth: true,
		expandable: false,
		emptyState: <TableEmptyState />,
		onRowClick: fn(),
	},
	decorators: [fullHeightDecorator],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

export const Selectable: Story = {
	args: {
		selectable: true,
		onSelectionChange: fn(),
	},
};

/**
 * The select utility column is 36px by default. Pass a pixel width when the
 * checkbox column needs more (or less) room. It is not user-resizable.
 */
export const CustomSelectColumnWidth: Story = {
	args: {
		selectable: true,
		selectableColumnWidth: 48,
		onSelectionChange: fn(),
	},
};

/**
 * Drive selection imperatively through the table ref. `selectRow`, `selectRows`,
 * `selectAllRows`, and `deselectAllRows` on `DsTableApi` let a parent control
 * selection from outside the table (toolbars, keyboard shortcuts, bulk flows).
 */
export const ProgrammaticRowSelection: Story = {
	args: {
		selectable: true,
		showSelectAllCheckbox: false,
		stickyHeader: true,
		onSelectionChange: fn(),
	},
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const tableRef = useRef<DsTableApi<Person>>(null);
		const [selectedRows, setSelectedRows] = useState<string[]>([]);

		const handleSelectionChange = (selection: Record<string, boolean>) => {
			setSelectedRows(Object.keys(selection));
		};

		return (
			<DsStack direction="column" gap={16}>
				<DsTypography variant="body-sm-reg" color="secondary">
					Selected rows: {selectedRows.length > 0 ? selectedRows.join(', ') : 'None'}
				</DsTypography>

				<DsStack direction="row" gap={8} flexWrap="wrap">
					<DsButtonV3 variant="secondary" size="small" onClick={() => tableRef.current?.selectRow('1')}>
						Select Row 1
					</DsButtonV3>
					<DsButtonV3 variant="secondary" size="small" onClick={() => tableRef.current?.selectRow('2')}>
						Select Row 2
					</DsButtonV3>
					<DsButtonV3 variant="secondary" size="small" onClick={() => tableRef.current?.selectRow('3')}>
						Select Row 3
					</DsButtonV3>
					<DsButtonV3 variant="secondary" size="small" onClick={() => tableRef.current?.selectAllRows()}>
						Select All
					</DsButtonV3>
					<DsButtonV3 variant="secondary" size="small" onClick={() => tableRef.current?.deselectAllRows()}>
						Deselect All
					</DsButtonV3>
					<DsButtonV3
						variant="secondary"
						size="small"
						onClick={() => tableRef.current?.selectRows(['1', '2', '3'])}
					>
						Select First 3 Rows
					</DsButtonV3>
				</DsStack>

				<DsTable {...args} ref={tableRef} onSelectionChange={handleSelectionChange} />
			</DsStack>
		);
	},
};

/**
 * Cap how many rows can be selected at once. Track selection in state and make
 * `selectable` a predicate: a row stays selectable only if it is already
 * selected or the count is under the limit, so the remaining checkboxes disable
 * once the cap is reached.
 */
export const MaxSelectionLimit: Story = {
	name: 'Max N Selections',
	args: {
		showSelectAllCheckbox: false,
		onSelectionChange: fn(),
	},
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
		const maxSelections = 2;

		const selectedCount = Object.keys(rowSelection).filter((id) => rowSelection[id]).length;

		const handleSelectionChange = (selection: Record<string, boolean>) => {
			setRowSelection(selection);
			args.onSelectionChange?.(selection);
		};

		return (
			<DsStack direction="column" gap={16}>
				<DsTypography variant="body-sm-reg" color="secondary">
					Selected: {selectedCount} / {maxSelections}
				</DsTypography>

				<DsTable
					{...args}
					onSelectionChange={handleSelectionChange}
					selectable={(rowData) => rowSelection[rowData.id] || selectedCount < maxSelections}
				/>
			</DsStack>
		);
	},
};
