import { useSelectContext } from '@ark-ui/react/select';
import styles from './ds-select.module.scss';
import DsButton from '../ds-button/ds-button';
import DsChip from '../ds-chip/ds-chip';

type SelectItemsChipsProps = {
	showAll: boolean;
	onValueChange: (value: string[]) => void;
	onShowAll: () => void;
	count: number;
};

export function SelectItemsChips({ showAll, onShowAll, onValueChange, count }: SelectItemsChipsProps) {
	const { collection, value: selectedItems } = useSelectContext();

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
					const filteredValue = selectedItems.filter((v) => v !== item?.value);

					onValueChange(filteredValue);
				};

				return <DsChip key={itemValue} label={item.label} onDelete={onDelete} />;
			})}

			{!showAll && selectedItems.length > count && (
				<DsChip label={`+${selectedItems.length - count}`} onClick={onShowAll} />
			)}

			<DsButton
				design="v1.2"
				buttonType="tertiary"
				variant="ghost"
				size="small"
				onClick={() => onValueChange([])}
			>
				Clear All
			</DsButton>
		</div>
	);
}
