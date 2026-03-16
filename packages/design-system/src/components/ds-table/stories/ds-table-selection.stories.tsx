import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent } from 'storybook/test';
import { useRef, useState } from 'react';
import DsTable from '../ds-table';
import type { DsTableApi } from '../ds-table.types';
import styles from './ds-table.stories.module.scss';
import { columns, defaultData, type Person } from './common/story-data';
import { fullHeightDecorator } from './common/story-decorators';
import { TableEmptyState } from './components';

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
		emptyState: <TableEmptyState />,
		onRowClick: (row) => console.log('Row clicked:', row),
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
	play: async ({ args, canvas }) => {
		const checkboxes = canvas.getAllByRole('checkbox');

		const selectAllCheckbox = checkboxes[0] as HTMLElement;
		await expect(selectAllCheckbox).not.toBeChecked();

		const firstRowCheckbox = checkboxes[1] as HTMLElement;
		await userEvent.click(firstRowCheckbox);
		await expect(firstRowCheckbox).toBeChecked();
		await expect(args.onSelectionChange).toHaveBeenCalled();

		await userEvent.click(selectAllCheckbox);
		const allRowCheckboxes = canvas.getAllByRole('checkbox').slice(1);
		for (const cb of allRowCheckboxes) {
			await expect(cb).toBeChecked();
		}

		await userEvent.click(selectAllCheckbox);
		const allRowCheckboxesAfter = canvas.getAllByRole('checkbox').slice(1);
		for (const cb of allRowCheckboxesAfter) {
			await expect(cb).not.toBeChecked();
		}
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
	play: async ({ canvas }) => {
		await expect(canvas.getByText(/selected rows: none/i)).toBeInTheDocument();

		await userEvent.click(canvas.getByRole('button', { name: /select row 1/i }));
		await expect(
			canvas.getByText((content, element) => {
				return element?.textContent === 'Selected rows: 1';
			}),
		).toBeInTheDocument();

		await userEvent.click(canvas.getByRole('button', { name: /^select all$/i }));
		const allCheckboxes = canvas.getAllByRole('checkbox');
		for (const cb of allCheckboxes) {
			await expect(cb).toBeChecked();
		}

		await userEvent.click(canvas.getByRole('button', { name: /deselect all/i }));
		await expect(canvas.getByText(/selected rows: none/i)).toBeInTheDocument();

		await userEvent.click(canvas.getByRole('button', { name: /select first 3 rows/i }));
		const checkboxesAfter = canvas.getAllByRole('checkbox');
		const checkedCount = checkboxesAfter.filter(
			(cb) => (cb as HTMLInputElement).checked || cb.getAttribute('data-state') === 'checked',
		).length;
		await expect(checkedCount).toBe(3);
	},
};

export const MaxSelectionLimit: Story = {
	name: 'Max N Selections',
	args: {
		showSelectAllCheckbox: false,
		onSelectionChange: fn(),
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
	play: async ({ canvas }) => {
		await expect(canvas.getByText(/selected: 0 \/ 2/i)).toBeInTheDocument();

		const checkboxes = canvas.getAllByRole('checkbox');
		const firstCheckbox = checkboxes[0] as HTMLElement;
		const secondCheckbox = checkboxes[1] as HTMLElement;
		const thirdCheckbox = checkboxes[2] as HTMLElement;

		await userEvent.click(firstCheckbox);
		await expect(canvas.getByText(/selected: 1 \/ 2/i)).toBeInTheDocument();

		await userEvent.click(secondCheckbox);
		await expect(canvas.getByText(/selected: 2 \/ 2/i)).toBeInTheDocument();

		await expect(thirdCheckbox).toBeDisabled();

		await userEvent.click(firstCheckbox);
		await expect(canvas.getByText(/selected: 1 \/ 2/i)).toBeInTheDocument();

		const thirdCheckboxAfter = canvas.getAllByRole('checkbox')[2] as HTMLElement;
		await expect(thirdCheckboxAfter).not.toBeDisabled();
	},
};
