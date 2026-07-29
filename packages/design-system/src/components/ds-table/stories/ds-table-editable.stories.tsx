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
				onCellEdit={(row, columnId, value) => {
					setData((rows) =>
						rows.map((person) => (person.id === row.id ? { ...person, [columnId]: value } : person)),
					);
				}}
			/>
		);
	},
};

/**
 * `onCellValidate` runs synchronously on every keystroke. It shows an inline error
 * and disables the Confirm button until the value is valid.
 *
 * Try clearing the first name to see the error appear as you type.
 */
export const LiveValidation: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [data, setData] = useState(defaultData);

		const personSchema = z.object({
			firstName: z.string().trim().min(1, 'First name is required').max(50, 'Max 50 characters'),
			lastName: z.string().trim().min(1, 'Last name is required').max(50, 'Max 50 characters'),
		});

		const validateField = (columnId: string, value: unknown): string | null => {
			const shape: Record<string, z.ZodTypeAny | undefined> = personSchema.shape;
			const fieldSchema = shape[columnId];
			if (!fieldSchema) {
				return null;
			}
			const result = fieldSchema.safeParse(value);
			return result.success ? null : (result.error.issues[0]?.message ?? null);
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
		];

		return (
			<DsTable
				{...args}
				data={data}
				columns={columns}
				onCellValidate={(_row, columnId, value) => validateField(columnId, value)}
				onCellEdit={(row, columnId, value) => {
					setData((rows) =>
						rows.map((person) => (person.id === row.id ? { ...person, [columnId]: value } : person)),
					);
				}}
			/>
		);
	},
};

/**
 * `onCellEdit` may be async: save inside it, resolve to an error `string` to keep
 * the cell open or `void`/`null` to commit. The editor locks while saving, and
 * `signal` aborts if you Cancel/Escape. Try `taken` to see a server-side rejection.
 */
export const ValidateOnAsyncSave: Story = {
	name: 'Validate on Async Save',
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [data, setData] = useState(defaultData);

		const saveFirstName = (value: string, signal: AbortSignal): Promise<string | null> =>
			new Promise((resolve, reject) => {
				const timeout = setTimeout(() => {
					const trimmed = value.trim();
					if (trimmed.length === 0) {
						resolve('First name is required');
						return;
					}
					if (trimmed.toLowerCase() === 'taken') {
						resolve('This name is already taken');
						return;
					}
					resolve(null);
				}, 900);

				signal.addEventListener('abort', () => {
					clearTimeout(timeout);
					reject(new DOMException('Aborted', 'AbortError'));
				});
			});

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
			},
		];

		return (
			<DsTable
				{...args}
				data={data}
				columns={columns}
				onCellEdit={async (row, columnId, value, signal) => {
					const error = await saveFirstName(value as string, signal);
					if (error !== null) {
						return error;
					}
					setData((rows) =>
						rows.map((person) => (person.id === row.id ? { ...person, [columnId]: value } : person)),
					);
				}}
			/>
		);
	},
};
