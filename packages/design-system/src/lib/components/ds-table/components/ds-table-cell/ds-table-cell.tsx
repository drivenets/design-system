import type { Cell } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import classnames from 'classnames';
import { DsIcon } from '../../../ds-icon';
import { DsDropdownMenu } from '../../../ds-dropdown-menu';
import styles from './ds-table-cell.module.scss';
import type { DsTableCellProps } from './ds-table-cell.types';

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
}: DsTableCellProps<TData, TValue>) => {
	if (primaryRowActions.length || secondaryRowActions.length) {
		const hasSecondaryRowActions = secondaryRowActions.some((action) => !action.disabled?.(row.original));
		return (
			<div className={styles.lastCell}>
				<DsDefaultTableCell cell={cell} />
				<div className={styles.cellActions}>
					{primaryRowActions.map((action, i) => {
						const isDisabled = action.disabled?.(row.original);
						const label = typeof action.label === 'function' ? action.label(row.original) : action.label;
						return (
							<button
								key={i}
								className={classnames(styles.rowActionIcon, { [styles.disabled]: isDisabled })}
								title={action.tooltip || label}
								onClick={(e) => {
									e.stopPropagation();

									if (isDisabled) {
										return;
									}
									action.onClick(row.original);
								}}
								tabIndex={isDisabled ? -1 : 0}
								aria-label={label}
								aria-disabled={isDisabled}
							>
								<DsIcon icon={action.icon} size="tiny" />
							</button>
						);
					})}
					{hasSecondaryRowActions && (
						<DsDropdownMenu.Root>
							<DsDropdownMenu.Trigger
								className={classnames(styles.rowActionIcon, styles.secondaryActionsTrigger)}
								aria-label="More actions"
								asChild
							>
								<button
									type="button"
									title="More actions"
									aria-label="More actions"
									onClick={(e) => e.stopPropagation()}
								>
									<DsIcon icon="more_vert" size="tiny" />
								</button>
							</DsDropdownMenu.Trigger>
							<DsDropdownMenu.Content>
								{secondaryRowActions.map((action, i) => {
									const label =
										typeof action.label === 'function' ? action.label(row.original) : action.label;
									const isDisabled = action.disabled?.(row.original);
									return (
										<DsDropdownMenu.Item
											key={i}
											value={label}
											disabled={isDisabled}
											onClick={(e) => e.stopPropagation()}
											onSelect={() => action.onClick(row.original)}
										>
											{action.icon && <DsIcon icon={action.icon} />}
											<span>{label}</span>
										</DsDropdownMenu.Item>
									);
								})}
							</DsDropdownMenu.Content>
						</DsDropdownMenu.Root>
					)}
				</div>
			</div>
		);
	}
	return <DsDefaultTableCell cell={cell} />;
};
