import { useEffect, useRef } from 'react';
import type { CellContext, RowData } from '@tanstack/react-table';
import { DsFormControl } from '../../../../ds-form-control';
import { DsIcon } from '../../../../ds-icon';
import { useCellEditor } from '../../../hooks/use-cell-editor';
import styles from './cell-editors.module.scss';
import { TableEditFormControl } from './table-edit-form-control';

export interface DsTableEditCellTextProps<TData extends RowData> {
	/** TanStack Table cell context from `ColumnDef.editCell`. */
	cellContext: CellContext<TData, string>;
	placeholder?: string;
	maxLength?: number;
}

/** Text input editor for table cells. Render via `ColumnDef.editCell`. */
export const DsTableEditCellText = <TData extends RowData>({
	cellContext,
	placeholder,
	maxLength,
}: DsTableEditCellTextProps<TData>) => {
	const { value, setValue, error } = useCellEditor<TData, string>({
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
			<DsFormControl.TextInput
				ref={inputRef}
				className={styles.fullWidth}
				value={value}
				placeholder={placeholder}
				maxLength={maxLength}
				onValueChange={setValue}
				slots={error ? { endAdornment: <DsIcon icon="error" size="tiny" /> } : undefined}
			/>
		</TableEditFormControl>
	);
};
