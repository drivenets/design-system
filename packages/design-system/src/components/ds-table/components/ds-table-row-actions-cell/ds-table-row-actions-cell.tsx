import classnames from 'classnames';
import { DsIcon } from '../../../ds-icon';
import { DsDropdownMenu } from '../../../ds-dropdown-menu';
import { useDsTableContext } from '../../context/ds-table-context';
import { defaultDsTableLocale } from '../../ds-table.types';
import { SecondaryRowActionItems } from './components/secondary-row-action-items';
import styles from './ds-table-row-actions-cell.module.scss';
import type { DsTableRowActionsCellProps } from './ds-table-row-actions-cell.types';
import { filterVisibleActions, resolveLabel, resolveTooltip } from './ds-table-row-actions-cell.utils';

export const DsTableRowActionsCell = <TData,>({ row }: DsTableRowActionsCellProps<TData>) => {
	const { primaryRowActions = [], secondaryRowActions = [], locale } = useDsTableContext<TData, unknown>();
	const { moreRowActions } = { ...defaultDsTableLocale, ...locale };

	const visiblePrimary = primaryRowActions.filter((action) => !action.hidden?.(row.original));
	const visibleSecondary = filterVisibleActions(secondaryRowActions, row.original);

	const hasSecondaryRowActions = visibleSecondary.length > 0;

	return (
		<div className={styles.rowActions}>
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
						aria-label={moreRowActions}
						asChild
					>
						<button
							type="button"
							title={moreRowActions}
							aria-label={moreRowActions}
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
	);
};

export const DsTableRowActionsHeader = () => {
	const { locale } = useDsTableContext();

	return <span className={styles.visuallyHidden}>{{ ...defaultDsTableLocale, ...locale }.rowActions}</span>;
};
