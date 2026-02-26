import type React from 'react';
import { TableCell } from '../core-table';
import { DsCheckbox } from '../../../ds-checkbox';
import stylesShared from '../../styles/shared/ds-table-shared.module.scss';
import type { DsTableRowSelectableCellProps } from './ds-table-row-selectable-cell.types';
import classnames from 'classnames';
import styles from './ds-table-row-selectable-cell.module.scss';

export const DsTableRowSelectableCell = <TData,>({
	row,
	className,
}: DsTableRowSelectableCellProps<TData>) => {
	return (
		<TableCell className={classnames(styles.cell, className)}>
			<DsCheckbox
				className={stylesShared.checkboxContainer}
				checked={row.getIsSelected()}
				disabled={!row.getCanSelect()}
				onClick={(e) => {
					e.stopPropagation();
					const toggleHandler = row.getToggleSelectedHandler();
					toggleHandler(e);
				}}
				onDoubleClick={(e: React.MouseEvent) => {
					e.stopPropagation();
				}}
			/>
		</TableCell>
	);
};
