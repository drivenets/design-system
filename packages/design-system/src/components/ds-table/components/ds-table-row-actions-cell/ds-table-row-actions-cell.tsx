import classnames from 'classnames';
import { DsIcon } from '../../../ds-icon';
import { DsDropdownMenu } from '../../../ds-dropdown-menu';
import { useDsTableContext } from '../../context/ds-table-context';
import styles from './ds-table-row-actions-cell.module.scss';
import type { DsTableRowActionsCellProps } from './ds-table-row-actions-cell.types';

export const DsTableRowActionsCell = <TData,>({ row }: DsTableRowActionsCellProps<TData>) => {
	const { primaryRowActions = [], secondaryRowActions = [] } = useDsTableContext<TData, unknown>();

	const visiblePrimary = primaryRowActions.filter((action) => !action.hidden?.(row.original));
	const visibleSecondary = secondaryRowActions.filter((action) => !action.hidden?.(row.original));

	const hasSecondaryRowActions = visibleSecondary.length > 0;

	return (
		<div className={styles.rowActions}>
			{visiblePrimary.map((action, i) => {
				const isDisabled = action.disabled?.(row.original);
				const label = typeof action.label === 'function' ? action.label(row.original) : action.label;
				return (
					<button
						key={i}
						type="button"
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
						{visibleSecondary.map((action, i) => {
							const label = typeof action.label === 'function' ? action.label(row.original) : action.label;
							const isDisabled = action.disabled?.(row.original);
							return (
								<DsDropdownMenu.Item
									key={i}
									value={label}
									disabled={isDisabled}
									className={action.className}
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
	);
};
