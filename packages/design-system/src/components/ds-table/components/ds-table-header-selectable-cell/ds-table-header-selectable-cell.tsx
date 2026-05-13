import type React from 'react';
import { DsCheckbox } from '../../../ds-checkbox';
import stylesShared from '../../styles/shared/ds-table-shared.module.scss';
import type { DsTableHeaderSelectableCellProps } from './ds-table-header-selectable-cell.types';

export const DsTableHeaderSelectableCell = <TData,>({ table }: DsTableHeaderSelectableCellProps<TData>) => {
	const checked = table.getIsAllRowsSelected()
		? true
		: table.getIsSomeRowsSelected()
			? 'indeterminate'
			: false;

	return (
		<DsCheckbox
			className={stylesShared.checkboxContainer}
			checked={checked}
			onCheckedChange={(nextChecked) => table.toggleAllRowsSelected(!!nextChecked)}
			onClick={(e) => e.stopPropagation()}
			onDoubleClick={(e: React.MouseEvent) => e.stopPropagation()}
		/>
	);
};
