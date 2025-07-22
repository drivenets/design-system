import * as React from 'react';
import { Cell, flexRender } from '@tanstack/react-table';
import classnames from 'classnames';
import { DsDropdownMenu, DsIcon } from '@design-system/ui';
import styles from './ds-table-cell.module.scss';
import { TableCellProps } from './ds-table-cell.types';

export const DsDefaultTableCell = <TData, TValue>({ cell }: { cell: Cell<TData, TValue> }) => {
	return (
		<div className={styles.tableCellEllipsis}>
			{flexRender(cell.column.columnDef.cell, cell.getContext())}
		</div>
	);
};

export const DsTableCell = <TData, TValue>({
	row,
	cell,
	primaryRowActions = [],
	secondaryRowActions = [],
}: TableCellProps<TData, TValue>) => {
	if (primaryRowActions.length || secondaryRowActions?.length) {
		return (
			<div className={styles.lastCell}>
				<DsDefaultTableCell cell={cell} />
				<div className={styles.cellActions}>
					{primaryRowActions.map((action, i) => {
						const isDisabled = action.disabled?.(row.original);
						return (
							<span
								key={action.label || i}
								className={classnames(styles.rowActionIcon, { [styles.disabled]: isDisabled })}
								title={action.tooltip || action.label}
								onClick={(e) => {
									if (isDisabled) {
										return;
									}
									e.stopPropagation();
									action.onClick(row.original);
								}}
								tabIndex={isDisabled ? -1 : 0}
								role="button"
								aria-label={action.label}
								aria-disabled={isDisabled}
							>
								<DsIcon icon={action.icon} />
							</span>
						);
					})}
					{secondaryRowActions?.length > 0 && (
						<DsDropdownMenu
							options={secondaryRowActions.map((action, i) => ({
								label: action.label,
								icon: action.icon,
								disabled: action.disabled?.(row.original),
								onClick: () => action.onClick(row.original),
							}))}
							contentGap={4}
							align="end"
							side="bottom"
						>
							<span
								className={styles.rowActionIcon}
								title="More actions"
								tabIndex={0}
								role="button"
								aria-label="More actions"
							>
								<DsIcon icon="more_vert" />
							</span>
						</DsDropdownMenu>
					)}
				</div>
			</div>
		);
	}
	return <DsDefaultTableCell cell={cell} />;
};
