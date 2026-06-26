import { useState } from 'react';
import { z } from 'zod';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import DsTable from '../ds-table';
import { DsFormControl } from '../../ds-form-control';
import { DsTag } from '../../ds-tag';
import { useCellEditor } from '../hooks/use-cell-editor';
import {
	DsTableEditCellNumber,
	DsTableEditCellSelect,
	DsTableEditCellText,
} from '../components/edit/cell-editors';
import { fullHeightDecorator } from './common/story-decorators';
import { defaultData, type Person, type Status } from './common/story-data';
import { TableEmptyState } from './components';
import editableStyles from './ds-table-editable.stories.module.scss';

const meta: Meta<typeof DsTable<Person, unknown>> = {
	title: 'Components/Table/Editable',
	component: DsTable,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component:
					'Inline editable cells. Define `ColumnDef.editCell` to make a column editable. Double-click the view cell to enter edit mode. Press Enter or the check button to commit, Escape or the close button to cancel. Only one cell can be in edit mode at a time. Use `ColumnDef.editDisabled` to lock individual cells: return `true` to show a lock icon, or `{ reason }` to add a tooltip explaining why editing is unavailable.',
			},
		},
	},
	args: {
		stickyHeader: true,
		bordered: true,
		fullWidth: true,
		emptyState: <TableEmptyState />,
	},
	decorators: [fullHeightDecorator],
};

export default meta;
type Story = StoryObj<typeof DsTable<Person, unknown>>;

export const Editable: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [data, setData] = useState(defaultData);

		const statusOptions = [
			{ label: 'Single', value: 'single' },
			{ label: 'Relationship', value: 'relationship' },
			{ label: 'Complicated', value: 'complicated' },
		];

		const statusLabels: Record<Status, string> = {
			single: 'Single',
			relationship: 'Relationship',
			complicated: 'Complicated',
		};

		const personSchema = z
			.object({
				firstName: z.string().trim().min(1, 'First name is required').max(50, 'Max 50 characters'),
				lastName: z.string().trim().min(1, 'Last name is required').max(50, 'Max 50 characters'),
				age: z.number().int('Whole number only').min(18, 'Must be ≥ 18').max(120, 'Must be ≤ 120'),
				visits: z.number().int('Whole number only').min(0, 'Must be ≥ 0').max(10_000, 'Must be ≤ 10000'),
				status: z.enum(['single', 'relationship', 'complicated']),
				progress: z.number().int('Whole number only').min(0, 'Must be ≥ 0').max(100, 'Must be ≤ 100'),
			})
			.refine((row) => !(row.status === 'complicated' && row.progress === 100), {
				path: ['progress'],
				message: 'A complicated profile can’t be 100% complete',
			});

		const validateField = (columnId: keyof Person, value: unknown, row: Person): string | null => {
			const result = personSchema.safeParse({ ...row, [columnId]: value });
			if (result.success) {
				return null;
			}
			return result.error.issues.find((issue) => issue.path[0] === columnId)?.message ?? null;
		};

		const progressPresets = [25, 50, 75, 100];

		const ProgressEditor = ({ cellContext }: { cellContext: CellContext<Person, number> }) => {
			const { value, setValue, error } = useCellEditor<Person, number>({ cellContext });

			return (
				<DsFormControl
					hideLabel
					label="Profile Progress"
					className={editableStyles.progressEditor}
					status={error ? 'error' : undefined}
					message={error ?? undefined}
					messageIcon="cancel"
				>
					<div className={editableStyles.presetList}>
						{progressPresets.map((preset) => (
							<DsTag
								key={preset}
								size="small"
								label={`${String(preset)}%`}
								onClick={() => setValue(preset)}
							/>
						))}
					</div>
					<DsFormControl.NumberInput value={value} min={0} max={100} onValueChange={setValue} />
				</DsFormControl>
			);
		};

		const columns: ColumnDef<Person>[] = [
			{
				accessorKey: 'id',
				header: 'ID',
				size: 60,
				cell: (info) => <span className={editableStyles.readOnlyCell}>{info.getValue() as string}</span>,
			},
			{
				accessorKey: 'firstName',
				header: 'First Name',
				cell: (info) => info.getValue(),
				editCell: (info: CellContext<Person, string>) => (
					<DsTableEditCellText cellContext={info} placeholder="Enter first name" />
				),
			},
			{
				accessorKey: 'lastName',
				header: 'Last Name',
				cell: (info) => info.getValue(),
				editCell: (info: CellContext<Person, string>) => (
					<DsTableEditCellText cellContext={info} placeholder="Enter last name" />
				),
			},
			{
				accessorKey: 'age',
				header: 'Age',
				size: 100,
				cell: (info) => info.getValue(),
				editCell: (info: CellContext<Person, number>) => (
					<DsTableEditCellNumber cellContext={info} min={0} max={120} />
				),
			},
			{
				accessorKey: 'visits',
				header: 'Visits',
				size: 100,
				cell: (info) => info.getValue(),
				editCell: (info: CellContext<Person, number>) => <DsTableEditCellNumber cellContext={info} min={0} />,
				editDisabled: (info: CellContext<Person, number>) => {
					if (info.row.original.status === 'complicated') {
						return { reason: 'Visits are locked while the status is “Complicated”.' };
					}
					if (info.row.original.age >= 40) {
						return true;
					}
					return false;
				},
			},
			{
				accessorKey: 'status',
				header: 'Status',
				size: 160,
				cell: (info) => statusLabels[info.getValue() as Status],
				editCell: (info: CellContext<Person, string>) => (
					<DsTableEditCellSelect cellContext={info} options={statusOptions} />
				),
			},
			{
				accessorKey: 'progress',
				header: 'Profile Progress',
				cell: (info) => <span className={editableStyles.tagDisplay}>{`${String(info.getValue())}%`}</span>,
				editCell: (info: CellContext<Person, number>) => <ProgressEditor cellContext={info} />,
			},
		];

		return (
			<DsTable
				{...args}
				data={data}
				columns={columns}
				selectable
				onRowClick={fn()}
				primaryRowActions={[{ icon: 'delete_outline', label: 'Delete', onClick: fn() }]}
				secondaryRowActions={[{ icon: 'info', label: 'Details', onClick: fn() }]}
				onCellValidate={(row, columnId, value) => validateField(columnId as keyof Person, value, row)}
				onCellEdit={(row, columnId, value) => {
					setData((rows) =>
						rows.map((person) => (person.id === row.id ? { ...person, [columnId]: value } : person)),
					);
				}}
			/>
		);
	},
};
