import type { DsSelectOption } from './ds-select.types';

export const SELECT_ALL_VALUE = '__INTERNAL_SELECT_ALL_VALUE__';

export function getUserSelectedItems(selectedItems: DsSelectOption[]): DsSelectOption[] {
	return selectedItems.filter((item) => item.value !== SELECT_ALL_VALUE);
}
