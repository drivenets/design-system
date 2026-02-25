import type React from 'react';
import classnames from 'classnames';
import { TableCell } from '../core-table';
import { DsButton } from '../../../ds-button';
import { DsIcon } from '../../../ds-icon';
import stylesShared from '../../styles/shared/ds-table-shared.module.scss';
import { useDsTableContext } from '../../context/ds-table-context';
import type { DsTableRowExpandableCellProps } from './ds-table-row-expandable-cell.types';
import styles from './ds-table-row-expandable-cell.module.scss';

export const DsTableRowExpandableCell = <TData,>({
	row,
	className,
	buttonClassName,
}: DsTableRowExpandableCellProps<TData>) => {
	const { expandable } = useDsTableContext<TData, unknown>();
	const isExpanded = row.getIsExpanded();
	const isExpandable = typeof expandable === 'function' ? expandable(row.original) : expandable;

	return (
		<TableCell className={classnames(styles.cell, className)}>
			{isExpandable && (
				<DsButton
					variant="borderless"
					size="small"
					className={buttonClassName}
					onClick={(e: React.MouseEvent) => {
						e.stopPropagation();
						row.toggleExpanded();
					}}
					onDoubleClick={(e: React.MouseEvent) => {
						e.stopPropagation();
					}}
				>
					<DsIcon
						icon="chevron_right"
						className={classnames(stylesShared.pageButtonIcon, isExpanded && 'rotate-90')}
					/>
				</DsButton>
			)}
		</TableCell>
	);
};
