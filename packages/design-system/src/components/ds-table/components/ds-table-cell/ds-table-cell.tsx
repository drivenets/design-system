import { type Cell, flexRender } from '@tanstack/react-table';
import classnames from 'classnames';
import { DsIcon } from '../../../ds-icon';
import { DsDropdownMenu } from '../../../ds-dropdown-menu';
import { useDsTableContext } from '../../context/ds-table-context';
import { DsTableEditableCell } from '../edit/ds-table-editable-cell';
import { DsTableEditingCell } from '../edit/ds-table-editing-cell';
import { SecondaryRowActionItems } from './components/secondary-row-action-items';
import styles from './ds-table-cell.module.scss';
import type { DsTableCellProps } from './ds-table-cell.types';
import { filterVisibleActions, resolveLabel, resolveTooltip } from './ds-table-cell.utils';

export const DsTableCell = <TData, TValue>({
	row,
	cell,
	primaryRowActions = [],
	secondaryRowActions = [],
}: DsTableCellProps<TData, TValue>) => {
	const { editing } = useDsTableContext<TData, TValue>();
	const isCellBeingEdited =
		editing !== null && editing.cell.row.id === row.id && editing.cell.column.id === cell.column.id;

	const visiblePrimary = primaryRowActions.filter((action) => !action.hidden?.(row.original));
	const visibleSecondary = filterVisibleActions(secondaryRowActions, row.original);

	if (!isCellBeingEdited && (visiblePrimary.length || visibleSecondary.length)) {
		const hasSecondaryRowActions = visibleSecondary.length > 0;

		return (
			<div className={styles.lastCell}>
				<CellContent cell={cell} isCellBeingEdited={isCellBeingEdited} />
				<div className={styles.cellActions}>
					{visiblePrimary.map((action, i) => {
						const isDisabled = action.disabled?.(row.original);
						const label = resolveLabel(action, row.original);
						return (
							<button
								key={i}
								type="button"
								className={classnames(styles.rowActionIcon, { [styles.disabled]: isDisabled })}
								title={resolveTooltip(action, row.original) || label}
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
								<SecondaryRowActionItems actions={visibleSecondary} row={row.original} />
							</DsDropdownMenu.Content>
						</DsDropdownMenu.Root>
					)}
				</div>
			</div>
		);
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
