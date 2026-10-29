import { type ClipboardEvent, type KeyboardEvent, useId, useState } from 'react';
import { Combobox, createListCollection, useCombobox } from '@ark-ui/react/combobox';
import { useFilter } from '@ark-ui/react/locale';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import styles from './ds-autocomplete.module.scss';
import type { DsAutocompleteOption, DsAutocompleteProps } from './ds-autocomplete.types';
import { AutocompleteItemContent } from './autocomplete-item-content';
import { DsIcon } from '../ds-icon';
import { DsTag } from '../ds-tag';

type AutocompleteTagsProps = Extract<DsAutocompleteProps, { multiple: true }>;

const CREATE_VALUE = '__ds-autocomplete-create__';
const TAG_SEPARATOR = ',';

const isSameName = (a: string, b: string) => a.toLocaleLowerCase() === b.toLocaleLowerCase();

const findOptionByLabel = (options: DsAutocompleteOption[], name: string) =>
	options.find((option) => isSameName(option.label, name));

export const AutocompleteTags = ({
	id,
	options = [],
	value,
	loading = false,
	size = 'default',
	style,
	className,
	placeholder,
	disabled = false,
	invalid = false,
	onValueChange,
	onCreate,
	onInputValueChange,
	onOpenChange,
	locale: {
		loading: loadingMessage = 'Loading...',
		noMatches: noMatchesMessage = 'No matching tags',
		addTag: addTagPlaceholder = 'Add tag...',
		createTag = (inputValue: string) => `Create new tag '${inputValue}'`,
		removeTag: removeTagAriaLabel = (label: string) => `Remove ${label}`,
	} = {},
	highlightMatch = true,
	showTrigger = true,
	startAdornment,
}: AutocompleteTagsProps) => {
	const generatedId = useId();
	const [inputValue, setInputValue] = useState('');
	const [highlightedValue, setHighlightedValue] = useState<string | null>(null);
	const filterUtils = useFilter({ sensitivity: 'base' });

	const query = inputValue.trim();

	const filteredOptions = query
		? options.filter((option) => filterUtils.contains(option.label, query))
		: options;

	const createItem: DsAutocompleteOption | null =
		onCreate && query && !findOptionByLabel(options, query) ? { value: CREATE_VALUE, label: query } : null;

	const collection = createListCollection<DsAutocompleteOption>({
		items: createItem ? [...filteredOptions, createItem] : filteredOptions,
		itemToString: (item) => item.label,
		itemToValue: (item) => item.value,
	});

	const changeInputValue = (nextInputValue: string) => {
		setInputValue(nextInputValue);
		setHighlightedValue(null);
		onInputValueChange?.(nextInputValue);
	};

	const addTags = (names: string[]) => {
		const nextValue = [...value];
		const createdNames: string[] = [];

		for (const rawName of names) {
			const name = rawName.trim();
			const option = name ? findOptionByLabel(options, name) : undefined;
			const tagValue = option?.value ?? (onCreate && name ? name : null);

			if (tagValue === null || nextValue.some((selected) => isSameName(selected, tagValue))) {
				continue;
			}

			if (!option) {
				createdNames.push(name);
			}

			nextValue.push(tagValue);
		}

		if (nextValue.length === value.length) {
			return;
		}

		createdNames.forEach((name) => onCreate?.(name));
		onValueChange?.(nextValue);
	};

	const removeTag = (tagValue: string) => {
		onValueChange?.(value.filter((selected) => selected !== tagValue));
	};

	const combobox = useCombobox({
		id: id ?? generatedId,
		collection,
		disabled,
		invalid,
		multiple: true,
		value,
		inputValue,
		highlightedValue,
		openOnClick: true,
		loopFocus: false,
		allowCustomValue: true,
		// The input is cleared here on select instead, so a comma remainder survives a value change.
		selectionBehavior: 'preserve',
		onHighlightChange: (details) => setHighlightedValue(details.highlightedValue),
		onInputValueChange: (details) => {
			if (!details.inputValue.includes(TAG_SEPARATOR)) {
				changeInputValue(details.inputValue);
				return;
			}

			const names = details.inputValue.split(TAG_SEPARATOR);
			const remainder = names.pop() ?? '';

			addTags(names);
			changeInputValue(remainder.trimStart());
		},
		onValueChange: (details) => {
			if (details.value.includes(CREATE_VALUE)) {
				addTags([query]);
			} else {
				onValueChange?.(details.value);
			}

			changeInputValue('');
		},
		onOpenChange: (details) => {
			if (!details.open) {
				changeInputValue('');
			}

			onOpenChange?.(details.open);
		},
	});

	const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && !highlightedValue) {
			event.preventDefault();
			addTags([inputValue]);
			changeInputValue('');
			return;
		}

		if (event.key === 'Backspace' && !inputValue && value.length) {
			removeTag(value[value.length - 1] as string);
			return;
		}

		if (event.key === 'Escape') {
			changeInputValue('');
		}
	};

	const handleInputPaste = (event: ClipboardEvent<HTMLInputElement>) => {
		const pasted = event.clipboardData.getData('text');

		if (!pasted.includes(TAG_SEPARATOR)) {
			return;
		}

		event.preventDefault();
		addTags(`${inputValue}${pasted}`.split(TAG_SEPARATOR));
		changeInputValue('');
	};

	const getTagLabel = (tagValue: string) =>
		options.find((option) => option.value === tagValue)?.label ?? tagValue;

	const optionItems = createItem ? collection.items.slice(0, -1) : collection.items;
	const iconSize = size === 'small' ? 'small' : 'medium';

	return (
		<Combobox.RootProvider
			value={combobox}
			className={classNames(
				styles.root,
				{
					[styles.disabled]: disabled,
					[styles.invalid]: invalid,
				},
				className,
			)}
			style={style}
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
					styles.multiple,
					size === 'small' && styles.small,
					size === 'large' && styles.large,
				)}
			>
				{startAdornment && <span className={styles.startAdornment}>{startAdornment}</span>}

				<div className={styles.tags}>
					{value.map((tagValue) => {
						const label = getTagLabel(tagValue);

						return (
							<DsTag
								key={tagValue}
								label={label}
								size="small"
								disabled={disabled}
								locale={{ deleteAriaLabel: removeTagAriaLabel(label) }}
								onDelete={() => removeTag(tagValue)}
							/>
						);
					})}

					<Combobox.Input
						className={styles.input}
						placeholder={
							value.length
								? addTagPlaceholder
								: (placeholder ?? (onCreate ? 'Search or create a tag' : 'Search tags'))
						}
						onKeyDown={handleInputKeyDown}
						onPaste={handleInputPaste}
					/>
				</div>

				{showTrigger && (
					<div className={styles.iconContainer}>
						<Combobox.Trigger className={styles.trigger} aria-label="Toggle dropdown">
							<DsIcon icon="keyboard_arrow_down" size={iconSize} />
						</Combobox.Trigger>
					</div>
				)}
			</Combobox.Control>

			<Portal>
				<Combobox.Positioner className={styles.positioner}>
					<Combobox.Content className={classNames(styles.content, styles.multipleContent)}>
						{loading && <div className={styles.loading}>{loadingMessage}</div>}

						{!loading && collection.items.length === 0 && (
							<div className={styles.noMatches}>{noMatchesMessage}</div>
						)}

						{!loading && optionItems.length > 0 && (
							<Combobox.ItemGroup className={styles.itemGroup}>
								{optionItems.map((option) => (
									<Combobox.Item key={option.value} item={option} className={styles.item}>
										<AutocompleteItemContent option={option} query={query} highlightMatch={highlightMatch} />

										<Combobox.ItemIndicator className={styles.itemIndicator}>
											<DsIcon icon="check" size="small" aria-hidden="true" />
										</Combobox.ItemIndicator>
									</Combobox.Item>
								))}
							</Combobox.ItemGroup>
						)}

						{!loading && createItem && (
							<Combobox.Item item={createItem} className={classNames(styles.item, styles.createItem)}>
								<Combobox.ItemText className={styles.itemText}>
									{createTag(createItem.label)}
								</Combobox.ItemText>
							</Combobox.Item>
						)}
					</Combobox.Content>
				</Combobox.Positioner>
			</Portal>
		</Combobox.RootProvider>
	);
};
