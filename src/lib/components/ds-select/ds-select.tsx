import { useState } from 'react';
import { Select, createListCollection, useSelect, UseSelectReturn } from '@ark-ui/react/select';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import styles from './ds-select.module.scss';
import { DsSelectOption, DsSelectProps } from './ds-select.types';
import { DsIcon } from '../ds-icon';
import { DsCheckbox, DsCheckboxProps } from '../ds-checkbox';
import { SelectItemsChips } from './select-items-chips';
import { DsTypography } from '../ds-typography';
import { DsTextInput } from '../ds-text-input';

const SEARCH_THRESHOLD = 13;
const SELECT_ALL_VALUE = '__INTERNAL_SELECT_ALL_VALUE__';

const SELECT_ALL: DsSelectOption = {
	label: 'All',
	value: SELECT_ALL_VALUE,
};

const DsSelect = ({
	id,
	options: userOptions,
	value,
	style,
	size,
	clearable,
	onClear,
	onBlur,
	className,
	placeholder = 'Click to select a value',
	disabled,
	...multiselectProps
}: DsSelectProps) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [showAllItems, setShowAllItems] = useState(false);

	const internalOptions = multiselectProps.multiple ? [SELECT_ALL, ...userOptions] : userOptions;

	const collection = createListCollection({
		items: internalOptions,
		itemToValue: (item) => item.value,
	});

	const filteredOptions = internalOptions.filter((option) =>
		option.label.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const normalizedValue = Array.isArray(value) ? value : [value].filter((value) => !!value);

	const select = useSelect({
		collection,
		disabled,
		multiple: multiselectProps.multiple,
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
			if (!multiselectProps.multiple) {
				multiselectProps.onValueChange?.(details.value[0]);
				return;
			}

			// "Select All" clicked in multi select mode.
			const isSelectAllClicked = details.value.includes(SELECT_ALL_VALUE);

			if (isSelectAllClicked) {
				const areAllOptionsSelected = select.selectedItems.length === userOptions.length;

				const newValues = areAllOptionsSelected ? [] : userOptions.map((opt) => opt.value);

				multiselectProps.onValueChange?.(newValues);

				return;
			}

			// "Regular" multi select mode.
			const newValueWithoutSelectAll = details.value.filter((val) => val !== SELECT_ALL_VALUE);

			multiselectProps.onValueChange?.(newValueWithoutSelectAll);
		},
	});

	return (
		<Select.RootProvider
			value={select}
			// When rendering the Select inside a Modal, it has an `aria-hidden="true"` attribute
			// which causes screen readers to ignore it.
			//
			// See: https://github.com/chakra-ui/ark/issues/3728
			lazyMount
		>
			<Select.Control
				className={classNames(styles.control, size === 'small' && styles.small, className)}
				style={style}
				onBlur={onBlur}
				onKeyDown={(e) => {
					if (!clearable) {
						return;
					}

					if (select.open) {
						return;
					}

					if (e.key === 'Backspace' || e.key === 'Delete') {
						if (multiselectProps.multiple) {
							multiselectProps.onValueChange?.([]);
						} else {
							multiselectProps.onValueChange?.('');
						}

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
					<DsTypography className={styles.valueText} variant="body-sm-reg" asChild>
						<Select.ValueText placeholder={placeholder} />
					</DsTypography>

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
								<DsTextInput
									placeholder="Search"
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									onKeyDown={(e) => {
										// Prevent the select from opening/closing when pressing space in the search input.
										if (e.key === ' ') {
											e.stopPropagation();
										}
									}}
									slots={{
										startAdornment: <DsIcon icon="search" size="tiny" />,
									}}
								/>
							</div>
						)}

						{multiselectProps.multiple && (
							<SelectItemsChips
								onValueChange={multiselectProps.onValueChange}
								showAll={showAllItems}
								onShowAll={() => setShowAllItems(true)}
								// TODO: Find a way to calculate this based on the size of the select.
								count={6}
							/>
						)}

						{filteredOptions.map((item) => {
							const checked = getItemCheckedState({ item, select, options: internalOptions });

							return (
								<DsTypography
									variant="body-sm-reg"
									asChild
									key={collection.getItemValue(item)}
									className={styles.item}
								>
									<Select.Item item={item}>
										{multiselectProps.multiple && <DsCheckbox checked={checked} />}
										{item.icon && <DsIcon className={styles.itemIcon} icon={item.icon} aria-hidden="true" />}
										<Select.ItemText>{item.label}</Select.ItemText>
									</Select.Item>
								</DsTypography>
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
	item: DsSelectOption;
	select: UseSelectReturn<DsSelectOption>;
	options: DsSelectOption[];
}): DsCheckboxProps['checked'] {
	const isRegularItem = item.value !== SELECT_ALL_VALUE;

	if (isRegularItem) {
		return select.getItemState({ item }).selected;
	}

	// Doing -1 since it contains the "Select All" option itself.
	const allSelected = select.selectedItems.length === options.length - 1;

	if (allSelected) {
		return true;
	}

	const someSelected = select.hasSelectedItems;

	return someSelected ? 'indeterminate' : false;
}

export default DsSelect;
