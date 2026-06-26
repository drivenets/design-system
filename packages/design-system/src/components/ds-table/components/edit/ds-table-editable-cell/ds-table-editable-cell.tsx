import type { MouseEvent } from 'react';
import { DsButtonV3 } from '../../../../ds-button-v3';
import { DsIcon } from '../../../../ds-icon';
import { DsTooltip } from '../../../../ds-tooltip';
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

	const editDisabled = cell.column.columnDef.editDisabled?.(cell.getContext());
	const locked = editDisabled === true || typeof editDisabled === 'object';
	const reason = typeof editDisabled === 'object' ? editDisabled.reason : undefined;

	if (locked) {
		return (
			<div className={styles.root} data-locked="">
				{children}
				<DsTooltip content={reason}>
					<span className={styles.lockIcon} aria-label="Editing disabled" role="img">
						<DsIcon icon="lock" size="small" color="secondary" />
					</span>
				</DsTooltip>
			</div>
		);
	}

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
			<DsButtonV3
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
