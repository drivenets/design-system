import type { MouseEvent } from 'react';
import { DsButtonV3 } from '../../../ds-button-v3';
import { DsDropdownMenu } from '../../../ds-dropdown-menu';
import { DsIcon } from '../../../ds-icon';
import { DsTypography } from '../../../ds-typography';
import styles from './ds-saved-filters-row.module.scss';
import type { DsSavedFilterItem } from '../../ds-saved-filters.types';
import { PICKER_GUTTER_PX, type Locale, type NamedTarget } from '../../ds-saved-filters.utils';

export const SavedFilterRow = ({
	item,
	selected,
	blocked,
	locale,
	onApply,
	onRename,
	onDelete,
}: {
	item: DsSavedFilterItem;
	selected: boolean;
	blocked: boolean;
	locale: Locale;
	onApply: (id: string) => void;
	onRename: (target: NamedTarget) => void;
	onDelete: (target: NamedTarget) => void;
}) => (
	<div className={styles.row} data-selected={selected ? '' : undefined}>
		<button
			type="button"
			className={styles.rowMain}
			aria-pressed={selected}
			aria-disabled={blocked || undefined}
			onClick={() => {
				if (blocked) {
					return;
				}

				onApply(item.id);
			}}
		>
			<DsIcon icon="bookmark" size="small" filled={selected} />
			<DsTypography variant="body-sm-reg" className={styles.rowName}>
				{item.name}
			</DsTypography>
		</button>
		<div className={styles.rowMeta}>
			{item.count !== undefined && (
				<span className={styles.count}>
					<span className={styles.countDot} />
					<DsTypography variant="body-xs-semi-bold">{item.count}</DsTypography>
				</span>
			)}
			<DsDropdownMenu.Root positioning={{ placement: 'bottom-end', gutter: PICKER_GUTTER_PX }}>
				<DsDropdownMenu.Trigger asChild>
					<DsButtonV3
						variant="tertiary"
						size="tiny"
						icon="more_vert"
						aria-label={`${locale.rowActions}: ${item.name}`}
						disabled={blocked}
						onClick={(event: MouseEvent<HTMLButtonElement>) => event.stopPropagation()}
					/>
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content>
					<DsDropdownMenu.Item value="rename" onClick={() => onRename({ id: item.id, name: item.name })}>
						<DsIcon icon="edit" size="small" />
						{locale.renameFilter}
					</DsDropdownMenu.Item>
					<DsDropdownMenu.Item
						value="delete"
						variant="error"
						onClick={() => onDelete({ id: item.id, name: item.name })}
					>
						<DsIcon icon="delete" size="small" />
						{locale.deleteFilter}
					</DsDropdownMenu.Item>
				</DsDropdownMenu.Content>
			</DsDropdownMenu.Root>
		</div>
	</div>
);

SavedFilterRow.displayName = 'SavedFilterRow';
