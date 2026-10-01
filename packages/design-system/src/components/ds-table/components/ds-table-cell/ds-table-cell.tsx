import { type Cell, flexRender } from '@tanstack/react-table';
import { useDsTableContext } from '../../context/ds-table-context';
import { ROW_ACTIONS_COLUMN_ID } from '../../utils/constants';
import { DsTableRowActionsCell } from '../ds-table-row-actions-cell';
import { DsTableEditableCell } from '../edit/ds-table-editable-cell';
import { DsTableEditingCell } from '../edit/ds-table-editing-cell';
import styles from './ds-table-cell.module.scss';
import type { DsTableCellProps } from './ds-table-cell.types';

export const DsTableCell = <TData, TValue>({ row, cell }: DsTableCellProps<TData, TValue>) => {
	const { editing, loading } = useDsTableContext<TData, TValue>();
	const isCellBeingEdited =
		editing !== null && editing.cell.row.id === row.id && editing.cell.column.id === cell.column.id;

	// Skeleton rows keep the skeleton cell: action callbacks must never run against placeholder rows.
	if (cell.column.id === ROW_ACTIONS_COLUMN_ID && !loading) {
		return <DsTableRowActionsCell row={row} />;
	}

	return <CellContent cell={cell} isCellBeingEdited={isCellBeingEdited} />;
};

interface CellContentProps<TData, TValue> {
	cell: Cell<TData, TValue>;
	isCellBeingEdited: boolean;
}

const CellContent = <TData, TValue>({ cell, isCellBeingEdited }: CellContentProps<TData, TValue>) => {
	const columnDef = cell.column.columnDef;
	const isEditable = typeof columnDef.editCell === 'function';

	if (isCellBeingEdited) {
		return <DsTableEditingCell cell={cell} />;
	}

	if (isEditable) {
		return (
			<DsTableEditableCell cell={cell}>
				<div className={styles.tableCellEllipsis}>
					{flexRender(cell.column.columnDef.cell, cell.getContext())}
				</div>
			</DsTableEditableCell>
		);
	}

	return (
		<div className={styles.tableCellEllipsis}>
			{flexRender(cell.column.columnDef.cell, cell.getContext())}
		</div>
	);
};
