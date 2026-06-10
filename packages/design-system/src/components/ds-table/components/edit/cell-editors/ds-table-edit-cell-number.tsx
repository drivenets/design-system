import { useEffect, useRef } from 'react';
import type { CellContext, RowData } from '@tanstack/react-table';
import { DsFormControl } from '../../../../ds-form-control';
import { useCellEditor } from '../../../hooks/use-cell-editor';
import styles from './cell-editors.module.scss';
import { TableEditFormControl } from './table-edit-form-control';

export interface DsTableEditCellNumberProps<TData extends RowData> {
	/** TanStack Table cell context from `ColumnDef.editCell`. */
	cellContext: CellContext<TData, number>;
	min?: number;
	max?: number;
	step?: number;
}

/** Number input editor for table cells. Render via `ColumnDef.editCell`. */
export const DsTableEditCellNumber = <TData extends RowData>({
	cellContext,
	min,
	max,
	step,
}: DsTableEditCellNumberProps<TData>) => {
	const { value, setValue, error } = useCellEditor<TData, number>({
		cellContext,
	});

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const input = inputRef.current;
		if (!input) {
			return;
		}
		input.focus();
		input.select();
	}, []);

	return (
		<TableEditFormControl cellContext={cellContext} error={error}>
			<DsFormControl.NumberInput
				ref={inputRef}
				className={styles.fullWidth}
				value={value}
				min={min}
				max={max}
				step={step}
				onValueChange={setValue}
			/>
		</TableEditFormControl>
	);
};
