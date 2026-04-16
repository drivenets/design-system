import { useSelectContext, type UseSelectContext } from '@ark-ui/react/select';
import styles from './ds-select.module.scss';
import { DsButton } from '../ds-button';
import { DsTag } from '../ds-tag';
import type { DsSelectOption, SelectOptionValue } from './ds-select.types';

type SelectItemsTagsProps = {
	showAll: boolean;
	onValueChange?: (value: SelectOptionValue[]) => void;
	onShowAll: () => void;
	count: number;
};

export function SelectItemsTags({ showAll, onShowAll, onValueChange, count }: SelectItemsTagsProps) {
	const { collection, value: selectedItems } = useSelectContext() as UseSelectContext<DsSelectOption>;

	if (!selectedItems.length) {
		return null;
	}

	const itemsToShow = showAll ? selectedItems : selectedItems.slice(0, count);

	return (
		<div className={styles.multiSelectItemsContainer}>
			{itemsToShow.map((itemValue) => {
				const item = collection.find(itemValue);

				if (!item) {
					return null;
				}

				const onDelete = () => {
					const filteredValue = selectedItems.filter((v) => v !== item.value);

					onValueChange?.(filteredValue);
				};

				return <DsTag key={itemValue} label={item.label} onDelete={onDelete} />;
			})}

			{!showAll && selectedItems.length > count && (
				<DsTag label={`+${String(selectedItems.length - count)}`} onClick={onShowAll} size="small" />
			)}

			<DsButton
				design="v1.2"
				buttonType="tertiary"
				variant="ghost"
				size="small"
				onClick={() => onValueChange?.([])}
			>
				Clear All
			</DsButton>
		</div>
	);
}
