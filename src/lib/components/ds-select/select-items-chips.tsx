import { useSelectContext, type UseSelectContext } from '@ark-ui/react/select';
import styles from './ds-select.module.scss';
import DsButton from '../ds-button/ds-button';
import DsChip from '../ds-chip/ds-chip';
import type { DsSelectOption, SelectOptionValue } from './ds-select.types';

type SelectItemsChipsProps = {
	showAll: boolean;
	onValueChange?: (value: SelectOptionValue[]) => void;
	onShowAll: () => void;
	count: number;
};

export function SelectItemsChips({ showAll, onShowAll, onValueChange, count }: SelectItemsChipsProps) {
	const { collection, value: selectedItems }: UseSelectContext<DsSelectOption> = useSelectContext();

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

				return <DsChip key={itemValue} label={item.label} onDelete={onDelete} />;
			})}

			{!showAll && selectedItems.length > count && (
				<DsChip label={`+${selectedItems.length - count}`} onClick={onShowAll} size="small" />
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
