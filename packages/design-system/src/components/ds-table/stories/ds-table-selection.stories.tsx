import type { Meta, StoryObj } from '@storybook/react-vite';
import { useRef, useState } from 'react';
import DsTable from '../ds-table';
import type { DsTableApi } from '../ds-table.types';
import styles from '../ds-table.stories.module.scss';
import { columns, defaultData, type Person } from './common/story-data';
import { defaultEmptyState, fullHeightDecorator } from './common/story-decorators';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Design System/Table/Selection',
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
		emptyState: defaultEmptyState,
		onRowClick: (row) => console.log('Row clicked:', row),
	},
	decorators: [fullHeightDecorator],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

export const Selectable: Story = {
	args: {
		selectable: true,
		onSelectionChange: (selectedRows) => console.log('Selected rows:', selectedRows),
	},
};

export const ProgrammaticRowSelection: Story = {
	args: {
		selectable: true,
		showSelectAllCheckbox: false,
		stickyHeader: true,
		onSelectionChange: (selectedRows) => console.log('Selected rows:', selectedRows),
	},
	render: function Render(args) {
		const tableRef = useRef<DsTableApi<Person>>(null);
		const [selectedRows, setSelectedRows] = useState<string[]>([]);

		const selectRow = (rowId: string) => {
			tableRef.current?.selectRow(rowId);
		};

		const selectAllRows = () => {
			tableRef.current?.selectAllRows();
		};

		const deselectAllRows = () => {
			tableRef.current?.deselectAllRows();
		};

		const selectSpecificRows = () => {
			tableRef.current?.selectRows(['1', '2', '3']);
		};

		const handleSelectionChange = (selection: Record<string, boolean>) => {
			const selectedIds = Object.keys(selection);
			setSelectedRows(selectedIds);
		};

		return (
			<div>
				<div className={styles.programmaticSelectionDemo}>
					<h4 className={styles.programmaticSelectionDemo__title}>Programmatic Row Selection Demo</h4>
					<p className={styles.programmaticSelectionDemo__description}>
						Use the buttons below to programmatically control row selection using TanStack Table v8 APIs.
					</p>
					<p className={styles.programmaticSelectionDemo__selectedRows}>
						Selected rows: {selectedRows.length > 0 ? selectedRows.join(', ') : 'None'}
					</p>
				</div>

				<div className={styles.programmaticSelectionControls}>
					<button onClick={() => selectRow('1')} className={styles.programmaticSelectionButton}>
						Select Row 1
					</button>
					<button onClick={() => selectRow('2')} className={styles.programmaticSelectionButton}>
						Select Row 2
					</button>
					<button onClick={() => selectRow('3')} className={styles.programmaticSelectionButton}>
						Select Row 3
					</button>
					<button onClick={selectAllRows} className={styles.programmaticSelectionButton}>
						Select All
					</button>
					<button onClick={deselectAllRows} className={styles.programmaticSelectionButton}>
						Deselect All
					</button>
					<button onClick={selectSpecificRows} className={styles.programmaticSelectionButton}>
						Select First 3 Rows
					</button>
				</div>

				<DsTable {...args} ref={tableRef} onSelectionChange={handleSelectionChange} />
			</div>
		);
	},
};

export const MaxSelectionLimit: Story = {
	name: 'Max N Selections',
	args: {
		showSelectAllCheckbox: false,
		onSelectionChange: (selectedRows) => console.log('Selected rows:', selectedRows),
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
			<div>
				<div className={styles.programmaticSelectionDemo}>
					<h4 className={styles.programmaticSelectionDemo__title}>Max Selection Limit Demo</h4>
					<p className={styles.programmaticSelectionDemo__description}>
						You can select at most {maxSelections} rows. Once the limit is reached, checkboxes for other rows
						are disabled.
					</p>
					<p className={styles.programmaticSelectionDemo__selectedRows}>
						Selected: {selectedCount} / {maxSelections}
					</p>
				</div>

				<DsTable
					{...args}
					onSelectionChange={handleSelectionChange}
					selectable={(rowData) => {
						return rowSelection[rowData.id] || selectedCount < maxSelections;
					}}
				/>
			</div>
		);
	},
};
