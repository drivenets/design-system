import type { RowData } from '@tanstack/react-table';
import type { ReactNode } from 'react';
import { DsFormControl } from '../../../../ds-form-control';
import styles from './cell-editors.module.scss';
import type { DsCellContext } from '../../../ds-table-features';

export interface TableEditFormControlProps<TData extends RowData> {
	cellContext: DsCellContext<TData>;
	error: string | null;
	children: ReactNode;
}

export const TableEditFormControl = <TData extends RowData>({
	cellContext,
	error,
	children,
}: TableEditFormControlProps<TData>) => {
	const label = String(cellContext.column.columnDef.header ?? cellContext.column.id);

	return (
		<DsFormControl
			hideLabel
			label={label}
			className={styles.fullWidth}
			status={error ? 'error' : undefined}
			message={error ?? undefined}
			messageIcon="cancel"
		>
			{children}
		</DsFormControl>
	);
};
