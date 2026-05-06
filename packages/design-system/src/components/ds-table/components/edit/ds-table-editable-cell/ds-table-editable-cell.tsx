import type { MouseEvent } from 'react';
import { DsButton } from '../../../../ds-button';
import styles from './ds-table-editable-cell.module.scss';
import type { DsTableEditableCellProps } from './ds-table-editable-cell.types';
import { useDsTableContext } from '../../../context/ds-table-context';

export const DsTableEditableCell = <TData, TValue>({
	cell,
	children,
}: DsTableEditableCellProps<TData, TValue>) => {
	const { beginEdit, editing } = useDsTableContext<TData, TValue>();
	const isEditing =
		editing !== null && editing.cell.row.id === cell.row.id && editing.cell.column.id === cell.column.id;
	const handleEdit = (event: MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		beginEdit(cell);
	};

	return (
		<div
			className={styles.root}
			data-active={isEditing ? '' : undefined}
			onDoubleClick={handleEdit}
			tabIndex={0}
			role="button"
			aria-label="Double-click to edit"
		>
			{children}
			<DsButton
				className={styles.editButton}
				variant="tertiary"
				size="small"
				icon="edit"
				aria-label="Edit cell"
				onClick={handleEdit}
			/>
		</div>
	);
};
