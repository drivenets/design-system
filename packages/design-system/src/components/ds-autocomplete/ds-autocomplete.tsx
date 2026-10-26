import { useState } from 'react';
import { Combobox, createListCollection } from '@ark-ui/react/combobox';
import { useFilter } from '@ark-ui/react/locale';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import styles from './ds-autocomplete.module.scss';
import type { DsAutocompleteOption, DsAutocompleteProps } from './ds-autocomplete.types';
import { DsIcon } from '../ds-icon';
import { AutocompleteItemContent } from './autocomplete-item-content';
import { AutocompleteTags } from './autocomplete-tags';

type AutocompleteSingleProps = Extract<DsAutocompleteProps, { multiple?: false }>;

const AutocompleteSingle = ({
	id,
	options = [],
	loading = false,
	size = 'default',
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
}: AutocompleteSingleProps) => {
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
			// Mount the portalled dropdown only while open. A modal (DsModal, DsDialog) aria-hides
			// everything outside itself when it opens, including an already-mounted dropdown in <body>.
			//
			// See: https://github.com/chakra-ui/ark/issues/3728
			lazyMount
			unmountOnExit
		>
			<Combobox.Control
				className={classNames(
					styles.control,
					size === 'small' && styles.small,
					size === 'large' && styles.large,
				)}
			>
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
									<DsIcon icon="close" size={size === 'small' ? 'small' : 'medium'} />
								</button>
							)}

							{showTrigger && (
								<Combobox.Trigger className={styles.trigger} aria-label="Toggle dropdown">
									<DsIcon icon="keyboard_arrow_down" size={size === 'small' ? 'small' : 'medium'} />
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
										<AutocompleteItemContent
											option={option}
											query={filterText}
											highlightMatch={highlightMatch}
										/>
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

export const DsAutocomplete = (props: DsAutocompleteProps) =>
	props.multiple ? <AutocompleteTags {...props} /> : <AutocompleteSingle {...props} />;

DsAutocomplete.displayName = 'DsAutocomplete';
