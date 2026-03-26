import { useState } from 'react';
import { Combobox, createListCollection } from '@ark-ui/react/combobox';
import { useFilter } from '@ark-ui/react/locale';
import { Highlight } from '@ark-ui/react/highlight';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import styles from './ds-autocomplete.module.scss';
import type { DsAutocompleteOption, DsAutocompleteProps } from './ds-autocomplete.types';
import { DsIcon } from '../ds-icon';

export const DsAutocomplete = ({
	id,
	options = [],
	loading = false,
	style,
	className,
	placeholder = 'Start typing to search...',
	disabled = false,
	invalid = false,
	onValueChange,
	onInputValueChange,
	onOpenChange,
	locale: { loading: loadingMessage = 'Loading...', noMatches: noMatchesMessage = 'No matches found' } = {},
	highlightMatch = true,
	showTrigger = true,
	startAdornment,
}: DsAutocompleteProps) => {
	const [filterText, setFilterText] = useState('');
	const filterUtils = useFilter({ sensitivity: 'base' });

	const filteredOptions = filterText
		? options.filter((opt) => filterUtils.contains(opt.label, filterText))
		: options;

	const collection = createListCollection<DsAutocompleteOption>({
		items: filteredOptions,
		itemToString: (item) => item.label,
		itemToValue: (item) => item.value,
	});

	const handleInputValueChange = (details: Combobox.InputValueChangeDetails) => {
		setFilterText(details.inputValue);
		onInputValueChange?.(details.inputValue);
	};

	const handleValueChange = (details: Combobox.ValueChangeDetails<DsAutocompleteOption>) => {
		const selectedItem = details.items[0];
		onValueChange?.(selectedItem?.value ?? '');
	};

	const handleOpenChange = (details: Combobox.OpenChangeDetails) => {
		onOpenChange?.(details.open);
	};

	const rootClass = classNames(
		styles.root,
		{
			[styles.disabled]: disabled,
			[styles.invalid]: invalid,
		},
		className,
	);

	return (
		<Combobox.Root
			id={id}
			collection={collection}
			className={rootClass}
			style={style}
			disabled={disabled}
			invalid={invalid}
			onInputValueChange={handleInputValueChange}
			onValueChange={handleValueChange}
			onOpenChange={handleOpenChange}
			closeOnSelect
		>
			<Combobox.Control className={styles.control}>
				{startAdornment && <span className={styles.startAdornment}>{startAdornment}</span>}

				<Combobox.Input className={styles.input} placeholder={placeholder} />

				<Combobox.Context>
					{(combobox) => (
						<div className={styles.iconContainer}>
							{combobox.inputValue && !disabled && (
								<button
									type="button"
									className={styles.clearButton}
									aria-label="Clear"
									onClick={() => {
										combobox.setValue([]);
										combobox.setInputValue('');
									}}
								>
									<DsIcon icon="close" size="medium" />
								</button>
							)}

							{showTrigger && (
								<Combobox.Trigger className={styles.trigger} aria-label="Toggle dropdown">
									<DsIcon icon="keyboard_arrow_down" size="medium" />
								</Combobox.Trigger>
							)}
						</div>
					)}
				</Combobox.Context>
			</Combobox.Control>

			<Portal>
				<Combobox.Positioner className={styles.positioner}>
					<Combobox.Content className={styles.content}>
						{loading && <div className={styles.loading}>{loadingMessage}</div>}

						{!loading && collection.items.length === 0 && (
							<div className={styles.noMatches}>{noMatchesMessage}</div>
						)}

						{!loading && collection.items.length > 0 && (
							<Combobox.ItemGroup className={styles.itemGroup}>
								{collection.items.map((option) => (
									<Combobox.Item key={option.value} item={option} className={styles.item}>
										{option.icon && (
											<DsIcon className={styles.itemIcon} icon={option.icon} aria-hidden="true" />
										)}

										<Combobox.ItemText className={styles.itemText}>
											{highlightMatch ? (
												<Highlight query={filterText} text={option.label} ignoreCase />
											) : (
												option.label
											)}
										</Combobox.ItemText>
									</Combobox.Item>
								))}
							</Combobox.ItemGroup>
						)}
					</Combobox.Content>
				</Combobox.Positioner>
			</Portal>
		</Combobox.Root>
	);
};
