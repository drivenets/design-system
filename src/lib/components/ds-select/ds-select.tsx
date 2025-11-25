import { useState } from 'react';
import { Select, createListCollection, useSelect, UseSelectReturn } from '@ark-ui/react/select';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import styles from './ds-select.module.scss';
import { DsSelectOption, DsSelectProps } from './ds-select.types';
import { DsIcon } from '../ds-icon';
import { DsCheckbox, DsCheckboxProps } from '../ds-checkbox';
import { SelectItemsChips } from './select-items-chips';

export type InternalOption = Omit<DsSelectOption, 'value'> & {
	value: string | typeof SELECT_ALL_SYMBOL;
};

const SEARCH_THRESHOLD = 13;
const SELECT_ALL_SYMBOL = Symbol('select-all');

const SELECT_ALL: InternalOption = {
	label: 'All',
	value: SELECT_ALL_SYMBOL,
};

const DsSelect = ({
	id,
	options: userOptions,
	value,
	style,
	size,
	clearable,
	onClear,
	className,
	onValueChange,
	placeholder = 'Click to select a value',
	disabled,
	multiple = false,
}: DsSelectProps) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [showAllItems, setShowAllItems] = useState(false);

	const internalOptions = multiple ? [SELECT_ALL, ...userOptions] : userOptions;

	const collection = createListCollection({
		items: internalOptions,
		itemToValue: (item) => item.value.toString(),
	});

	const filteredOptions = internalOptions.filter((option) =>
		option.label.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const normalizedValue = Array.isArray(value) ? value : [value].filter((value) => !!value);

	const select = useSelect({
		collection,
		disabled,
		multiple,
		value: normalizedValue,

		// Override Ark's auto-generated trigger id if an id provided by the user.
		// See: https://github.com/chakra-ui/zag/blob/f6e079095/packages/machines/select/src/select.dom.ts#L5
		ids: { trigger: id },

		onOpenChange: () => {
			setSearchTerm('');
			setShowAllItems(false);
		},

		onValueChange: (details) => {
			// Single select mode.
			if (!multiple) {
				onValueChange?.(details.value[0] as never);
				return;
			}

			// "Select All" clicked in multi select mode.
			const isSelectAllClicked = details.value.includes(SELECT_ALL_SYMBOL.toString());

			if (isSelectAllClicked) {
				const areAllOptionsSelected = select.selectedItems.length === userOptions.length;

				const newValues = areAllOptionsSelected ? [] : userOptions.map((opt) => opt.value);

				onValueChange?.(newValues as never);

				return;
			}

			// "Regular" multi select mode.
			const newValueWithoutSelectAll = details.value.filter((val) => val !== SELECT_ALL_SYMBOL.toString());

			onValueChange?.(newValueWithoutSelectAll as never);
		},
	});

	return (
		<Select.RootProvider value={select}>
			<Select.Control
				className={classNames(styles.control, size === 'small' && styles.small, className)}
				style={style}
				onKeyDown={(e) => {
					if (!clearable) {
						return;
					}

					if (select.open) {
						return;
					}

					if (e.key === 'Backspace' || e.key === 'Delete') {
						const newValue = multiple ? [] : '';

						onValueChange?.(newValue as never);
						onClear?.();
					}
				}}
			>
				<Select.Trigger
					id={id}
					className={styles.trigger}
					// Ark expects a `Select.Label` component to exist and automatically label the trigger
					// with it. We're using the `DsFormControl` label handling instead, so we disable the
					// automatic labelling here.
					aria-labelledby={null as never}
				>
					<Select.ValueText className={styles.valueText} placeholder={placeholder} />

					<Select.Indicator className={styles.triggerIcon}>
						<DsIcon icon="keyboard_arrow_down" size={size === 'small' ? 'small' : 'medium'} />
					</Select.Indicator>
				</Select.Trigger>

				{clearable && (
					<Select.ClearTrigger className={styles.clearIcon} onClick={onClear}>
						<DsIcon icon="close" size={size === 'small' ? 'small' : 'medium'} />
					</Select.ClearTrigger>
				)}
			</Select.Control>
			<Portal>
				<Select.Positioner className={styles.viewport}>
					<Select.Content className={styles.content}>
						{userOptions.length > SEARCH_THRESHOLD && (
							<div className={styles.searchInput}>
								<DsIcon className={styles.searchIcon} icon="search" size="tiny" />
								<input
									type="text"
									className={styles.searchInputField}
									placeholder="Search"
									value={searchTerm}
									tabIndex={-1}
									onKeyDown={(e) => e.stopPropagation()}
									onChange={(e) => setSearchTerm(e.target.value)}
								/>
							</div>
						)}

						{multiple && (
							<SelectItemsChips
								onValueChange={onValueChange as never}
								showAll={showAllItems}
								onShowAll={() => setShowAllItems(true)}
								// TODO: Find a way to calculate this based on the size of the select.
								count={6}
							/>
						)}

						{filteredOptions.map((item) => {
							const checked = getItemCheckedState({ item, select, options: internalOptions });

							return (
								<Select.Item key={collection.getItemValue(item)} item={item} className={styles.item}>
									{multiple && <DsCheckbox checked={checked} />}
									{item.icon && <DsIcon className={styles.itemIcon} icon={item.icon} aria-hidden="true" />}
									<Select.ItemText>{item.label}</Select.ItemText>
								</Select.Item>
							);
						})}
					</Select.Content>
				</Select.Positioner>
			</Portal>

			{/*
				This element isn't properly hidden by Zag, so we hide it manually.
			 	For more information, see: https://github.com/chakra-ui/zag/issues/2865
			*/}
			<Select.HiddenSelect style={{ display: 'none' }} />
		</Select.RootProvider>
	);
};

function getItemCheckedState({
	item,
	select,
	options,
}: {
	item: InternalOption;
	select: UseSelectReturn<InternalOption>;
	options: InternalOption[];
}): DsCheckboxProps['checked'] {
	const isRegularItem = item.value !== SELECT_ALL_SYMBOL;

	if (isRegularItem) {
		return select.getItemState({ item }).selected;
	}

	const allSelected = select.selectedItems.length === options.length - 1;

	if (allSelected) {
		return true;
	}

	const someSelected = select.hasSelectedItems;

	return someSelected ? 'indeterminate' : false;
}

export default DsSelect;
