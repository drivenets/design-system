import type { CellContext, RowData } from '@tanstack/react-table';
import { DsFormControl } from '../../../../ds-form-control';
import { type DsSelectOption } from '../../../../ds-select';
import { useCellEditor } from '../../../hooks/use-cell-editor';
import styles from './cell-editors.module.scss';
import { TableEditFormControl } from './table-edit-form-control';

export interface DsTableEditCellSelectProps<TData extends RowData> {
	/** TanStack Table cell context from `ColumnDef.editCell`. */
	cellContext: CellContext<TData, string>;
	options: DsSelectOption[];
	placeholder?: string;
}

/** Select editor for table cells. Render via `ColumnDef.editCell`. */
export const DsTableEditCellSelect = <TData extends RowData>({
	cellContext,
	options,
	placeholder,
}: DsTableEditCellSelectProps<TData>) => {
	const { value, setValue, error } = useCellEditor<TData, string>({
		cellContext,
	});

	return (
		<TableEditFormControl cellContext={cellContext} error={error}>
			<DsFormControl.Select
				className={styles.fullWidth}
				value={value}
				options={options}
				placeholder={placeholder}
				onValueChange={setValue}
			/>
		</TableEditFormControl>
	);
};
