import type { ReactNode } from 'react';
import { DsCheckbox } from '../../../../ds-checkbox';

export interface CheckboxFilterItem<TValue = string> {
	value: TValue;
	label: string;
	metadata?: Record<string, unknown>;
}

export interface CheckboxFilterProps<TValue> {
	items: CheckboxFilterItem<TValue>[];
	renderer?: (item: CheckboxFilterItem<TValue>) => ReactNode;
	selectedItems: CheckboxFilterItem<TValue>[];
	onSelectionChange: (selectedItems: CheckboxFilterItem<TValue>[]) => void;
}

export const CheckboxFilter = <TValue,>({
	items,
	renderer,
	selectedItems,
	onSelectionChange,
}: CheckboxFilterProps<TValue>) => {
	const handleCheckedChange = (selected: CheckboxFilterItem<TValue>, checked: boolean) => {
		if (checked) {
			onSelectionChange([...selectedItems, selected]);
		} else {
			onSelectionChange(selectedItems.filter((item) => item.value !== selected.value));
		}
	};

	return items.map((item) => {
		const label = renderer ? renderer(item) : item.label;
		const checked = selectedItems.findIndex((selectedItem) => selectedItem.value === item.value) > -1;
		return (
			<DsCheckbox
				key={JSON.stringify(item.value)}
				label={label}
				checked={checked}
				onCheckedChange={(newState) => handleCheckedChange(item, newState === true)}
			/>
		);
	});
};
