import type { ReactElement, RefObject } from 'react';
import styles from '../ds-bulk-actions.module.scss';
import type {
	BulkActionsMenuPlacement,
	DsBulkActionsItemProps,
	DsBulkActionsMenuEntry,
} from '../ds-bulk-actions.types';
import { resolveItemWidth } from '../ds-bulk-actions.utils';
import { ActionButton } from './action-button';
import { MenuEntries, TooltipMenuTrigger } from './menu-entries';
import { DsDropdownMenu } from '../../ds-dropdown-menu';
import { DsTypography } from '../../ds-typography';

export const OverflowMore = ({
	label,
	menuPlacement,
	entries,
}: {
	label: string;
	menuPlacement: BulkActionsMenuPlacement;
	entries: DsBulkActionsMenuEntry[];
}) => (
	<div className={styles.actionItem}>
		<DsDropdownMenu.Root positioning={{ placement: menuPlacement }}>
			<TooltipMenuTrigger icon="more_horiz" label={label} itemWidth="fixed" />
			<DsDropdownMenu.Content>
				<MenuEntries entries={entries} />
			</DsDropdownMenu.Content>
		</DsDropdownMenu.Root>
	</div>
);

export const OverflowMeasure = ({
	items,
	moreActionsLabel,
	itemsSelectedLabel,
	measureRef,
}: {
	items: ReactElement<DsBulkActionsItemProps>[];
	moreActionsLabel: string;
	itemsSelectedLabel: string;
	measureRef: RefObject<HTMLDivElement | null>;
}) => (
	<div ref={measureRef} className={styles.measurementContainer} aria-hidden="true">
		{items.map((item, index) => {
			const { mode, buttonStyle } = resolveItemWidth(item.props.width);

			return (
				<div
					key={item.key ?? `measure-${String(index)}`}
					data-overflow-measure="item"
					data-item-width={mode}
					className={styles.actionItem}
					style={item.props.style}
				>
					<ActionButton
						icon={item.props.icon}
						label={item.props.label}
						tabIndex={-1}
						itemWidth={mode}
						style={buttonStyle}
					/>
				</div>
			);
		})}
		<div data-overflow-measure="more" className={styles.actionItem}>
			<ActionButton icon="more_horiz" label={moreActionsLabel} tabIndex={-1} />
		</div>
		<div data-overflow-measure="label">
			<DsTypography variant="body-md-semi-bold" className={styles.bulkActionsInfo}>
				{itemsSelectedLabel}
			</DsTypography>
		</div>
	</div>
);
