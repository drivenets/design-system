import type { CellContext, RowData } from '@tanstack/react-table';
import { DsCheckbox } from '../../../../ds-checkbox';
import { useCellEditor } from '../../../hooks/use-cell-editor';

export interface DsTableEditCellCheckboxProps<TData extends RowData> {
	/** TanStack Table cell context from `ColumnDef.editCell`. */
	cellContext: CellContext<TData, boolean>;
	disabled?: boolean;
}

/** Checkbox editor for table cells. Render via `ColumnDef.editCell`. */
export const DsTableEditCellCheckbox = <TData extends RowData>({
	cellContext,
	disabled,
}: DsTableEditCellCheckboxProps<TData>) => {
	const { value, setValue } = useCellEditor<TData, boolean>({
		cellContext,
	});

	return (
		<DsCheckbox
			checked={value}
			disabled={disabled}
			onCheckedChange={(checked) => setValue(checked === true)}
		/>
	);
};
