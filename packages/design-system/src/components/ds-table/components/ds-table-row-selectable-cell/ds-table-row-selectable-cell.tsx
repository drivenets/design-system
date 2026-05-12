import type React from 'react';
import { DsCheckbox } from '../../../ds-checkbox';
import stylesShared from '../../styles/shared/ds-table-shared.module.scss';
import type { DsTableRowSelectableCellProps } from './ds-table-row-selectable-cell.types';

export const DsTableRowSelectableCell = <TData,>({ row }: DsTableRowSelectableCellProps<TData>) => {
	return (
		<DsCheckbox
			className={stylesShared.checkboxContainer}
			checked={row.getIsSelected()}
			disabled={!row.getCanSelect()}
			onCheckedChange={(checked) => row.toggleSelected(!!checked)}
			onClick={(e) => e.stopPropagation()}
			onDoubleClick={(e: React.MouseEvent) => e.stopPropagation()}
		/>
	);
};
