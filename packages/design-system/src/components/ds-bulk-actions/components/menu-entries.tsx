import type { CSSProperties } from 'react';
import styles from '../ds-bulk-actions.module.scss';
import type { DsBulkActionsMenuEntry } from '../ds-bulk-actions.types';
import { isSubmenuEntry, type ItemWidthLayout } from '../ds-bulk-actions.utils';
import { ActionButton } from './action-button';
import { DsDropdownMenu } from '../../ds-dropdown-menu';
import { DsIcon, type IconType } from '../../ds-icon';
import { DsTooltip } from '../../ds-tooltip';

const SUBMENU_PLACEMENT = 'right-start' as const;

const MenuEntryLabel = ({ icon, label }: { icon?: IconType; label: string }) => (
	<>
		{icon ? <DsIcon icon={icon} /> : null}
		<span>{label}</span>
	</>
);

export const MenuEntries = ({ entries }: { entries: DsBulkActionsMenuEntry[] }) => (
	<>
		{entries.map((entry) => {
			if (isSubmenuEntry(entry) && entry.menu.length > 0 && !entry.disabled) {
				return (
					<DsDropdownMenu.Root key={entry.value} positioning={{ placement: SUBMENU_PLACEMENT }}>
						<DsDropdownMenu.TriggerItem>
							<MenuEntryLabel icon={entry.icon} label={entry.label} />
						</DsDropdownMenu.TriggerItem>
						<DsDropdownMenu.Content>
							<MenuEntries entries={entry.menu} />
						</DsDropdownMenu.Content>
					</DsDropdownMenu.Root>
				);
			}

			return (
				<DsDropdownMenu.Item
					key={entry.value}
					value={entry.value}
					disabled={entry.disabled}
					variant={entry.variant}
					onSelect={'onSelect' in entry ? entry.onSelect : undefined}
				>
					<MenuEntryLabel icon={entry.icon} label={entry.label} />
				</DsDropdownMenu.Item>
			);
		})}
	</>
);

export const TooltipMenuTrigger = ({
	icon,
	label,
	disabled,
	itemWidth,
	buttonStyle,
}: {
	icon: IconType;
	label: string;
	disabled?: boolean;
	itemWidth: ItemWidthLayout['mode'];
	buttonStyle?: CSSProperties;
}) => (
	<DsTooltip content={label}>
		<span className={styles.menuTriggerAnchor}>
			<DsDropdownMenu.Trigger asChild>
				<ActionButton
					icon={icon}
					label={label}
					disabled={disabled}
					itemWidth={itemWidth}
					style={buttonStyle}
				/>
			</DsDropdownMenu.Trigger>
		</span>
	</DsTooltip>
);
