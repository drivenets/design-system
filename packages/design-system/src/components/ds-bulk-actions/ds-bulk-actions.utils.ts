import type { CSSProperties } from 'react';
import type {
	BulkActionsItemWidthMode,
	DsBulkActionsItemProps,
	DsBulkActionsItemWidth,
	DsBulkActionsMenuEntry,
} from './ds-bulk-actions.types';

const ITEM_WIDTH_CUSTOM_VAR = '--ds-bulk-actions-item-width';

export interface ItemWidthLayout {
	mode: BulkActionsItemWidthMode | 'custom';
	buttonStyle?: CSSProperties;
}

export const resolveItemWidth = (width?: DsBulkActionsItemWidth): ItemWidthLayout => {
	if (width === undefined || width === 'fixed') {
		return { mode: 'fixed' };
	}

	if (width === 'fit-content') {
		return { mode: 'fit-content' };
	}

	return {
		mode: 'custom',
		buttonStyle: { [ITEM_WIDTH_CUSTOM_VAR]: `${String(width)}px` } as CSSProperties,
	};
};

export const isMenuItemProps = (
	props: DsBulkActionsItemProps,
): props is Extract<DsBulkActionsItemProps, { menu: DsBulkActionsMenuEntry[] }> =>
	'menu' in props && props.menu !== undefined;

export const isSubmenuEntry = (
	entry: DsBulkActionsMenuEntry,
): entry is Extract<DsBulkActionsMenuEntry, { menu: DsBulkActionsMenuEntry[] }> =>
	'menu' in entry && entry.menu !== undefined;

export const itemToOverflowEntry = (item: DsBulkActionsItemProps, index: number): DsBulkActionsMenuEntry => {
	const { icon, label, disabled } = item;

	if (isMenuItemProps(item)) {
		return {
			value: `overflow-${String(index)}`,
			label,
			icon,
			disabled,
			menu: item.menu,
		};
	}

	return {
		value: `overflow-${String(index)}`,
		label,
		icon,
		disabled,
		onSelect: item.onClick,
	};
};
