import type { CellContext, RowData } from '@tanstack/react-table';
import { DsFormControl } from '../../../../ds-form-control';
import { DsIcon } from '../../../../ds-icon';
import { useCellEditor } from '../../../hooks/use-cell-editor';
import styles from './cell-editors.module.scss';
import { TableEditFormControl } from './table-edit-form-control';

export type DsTableEditCellDateValue = Date | null;

export interface DsTableEditCellDateProps<TData extends RowData> {
	/** TanStack Table cell context from `ColumnDef.editCell`. */
	cellContext: CellContext<TData, DsTableEditCellDateValue>;
	min?: Date;
	max?: Date;
	placeholder?: string;
}

/** Date picker editor for table cells. Render via `ColumnDef.editCell`. */
export const DsTableEditCellDate = <TData extends RowData>({
	cellContext,
	min,
	max,
	placeholder,
}: DsTableEditCellDateProps<TData>) => {
	const { value, setValue, error } = useCellEditor<TData, DsTableEditCellDateValue>({
		cellContext,
	});

	return (
		<TableEditFormControl cellContext={cellContext} error={error}>
			<DsFormControl.DatePicker
				className={styles.fullWidth}
				value={value}
				min={min}
				max={max}
				placeholder={placeholder}
				onChange={setValue}
				slotProps={
					error
						? {
								input: {
									slots: { endAdornment: <DsIcon icon="error" size="tiny" /> },
								},
							}
						: undefined
				}
			/>
		</TableEditFormControl>
	);
};
