import type { MouseEvent } from 'react';
import { DsDropdownMenu } from '../../../../ds-dropdown-menu';
import { DsIcon } from '../../../../ds-icon';
import { DsTooltip } from '../../../../ds-tooltip';
import styles from '../ds-table-row-actions-cell.module.scss';
import type { SecondaryRowAction } from '../ds-table-row-actions-cell.types';
import { isBranchAction, resolveLabel, resolveTooltip } from '../ds-table-row-actions-cell.utils';

const SUBMENU_PLACEMENT = 'right-start' as const;

// The menu is portalled, but React still bubbles its clicks up to the row's `onRowClick`.
const stopPropagation = (e: MouseEvent) => e.stopPropagation();

interface SecondaryRowActionItemsProps<TData> {
	actions: SecondaryRowAction<TData>[];
	row: TData;
}

export const SecondaryRowActionItems = <TData,>({ actions, row }: SecondaryRowActionItemsProps<TData>) => (
	<>
		{actions.map((action, i) => {
			const label = resolveLabel(action, row);
			const value = `${String(i)}-${label}`;
			const isDisabled = action.disabled?.(row);
			const content = <ActionContent action={action} label={label} row={row} />;

			if (isBranchAction(action)) {
				if (isDisabled) {
					return (
						<DsDropdownMenu.Item
							key={value}
							value={value}
							disabled
							className={action.className}
							onClick={stopPropagation}
						>
							{content}
							<DsIcon className={styles.submenuIndicator} icon="keyboard_arrow_right" />
						</DsDropdownMenu.Item>
					);
				}

				return (
					<DsDropdownMenu.Root key={value} positioning={{ placement: SUBMENU_PLACEMENT }}>
						<DsDropdownMenu.TriggerItem className={action.className} onClick={stopPropagation}>
							{content}
						</DsDropdownMenu.TriggerItem>
						<DsDropdownMenu.Content>
							<SecondaryRowActionItems actions={action.children} row={row} />
						</DsDropdownMenu.Content>
					</DsDropdownMenu.Root>
				);
			}

			return (
				<DsDropdownMenu.Item
					key={value}
					value={value}
					disabled={isDisabled}
					className={action.className}
					onClick={stopPropagation}
					onSelect={() => action.onClick(row)}
				>
					{content}
				</DsDropdownMenu.Item>
			);
		})}
	</>
);

interface ActionContentProps<TData> {
	action: SecondaryRowAction<TData>;
	label: string;
	row: TData;
}

// Wrap the content, not the item: tooltip trigger props would override the menu item's
// `id` and data attributes. Disabled items still receive hover, so the tooltip shows there too.
const ActionContent = <TData,>({ action, label, row }: ActionContentProps<TData>) => (
	<DsTooltip
		content={resolveTooltip(action, row)}
		slotProps={{ content: { className: styles.secondaryActionTooltip } }}
	>
		<span className={styles.secondaryActionContent}>
			{action.icon && <DsIcon icon={action.icon} />}
			<span>{label}</span>
		</span>
	</DsTooltip>
);
