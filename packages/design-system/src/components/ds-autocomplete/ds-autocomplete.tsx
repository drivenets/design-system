import { useAsyncList } from '@ark-ui/react/collection';
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
	onLoadOptions,
	style,
	className,
	placeholder = 'Start typing to search...',
	disabled = false,
	invalid = false,
	onValueChange,
	onInputValueChange,
	noMatchesMessage = 'No matches found',
	loadingMessage = 'Loading...',
	highlightMatch = true,
	showTrigger = true,
	startAdornment,
}: DsAutocompleteProps) => {
	const filterUtils = useFilter({ sensitivity: 'base' });
	const isAsync = Boolean(onLoadOptions);

	const loadHandler = (details: {
		filterText: string;
		signal: AbortSignal | undefined;
	}): Promise<{ items: DsAutocompleteOption[] }> => {
		if (onLoadOptions) {
			return onLoadOptions(details);
		}

		if (!details.filterText) {
			return Promise.resolve({ items: options });
		}

		return Promise.resolve({
			items: options.filter((opt) => filterUtils.contains(opt.label, details.filterText)),
		});
	};

	const list = useAsyncList<DsAutocompleteOption>({
		load: loadHandler,
		initialItems: isAsync ? undefined : options,
	});

	const collection = createListCollection<DsAutocompleteOption>({
		items: list.items,
		itemToString: (item) => item.label,
		itemToValue: (item) => item.value,
	});

	const handleInputValueChange = (details: Combobox.InputValueChangeDetails) => {
		if (!isAsync || details.reason === 'input-change') {
			list.setFilterText(details.inputValue);
		}

		onInputValueChange?.(details.inputValue);
	};

	const handleValueChange = (details: Combobox.ValueChangeDetails) => {
		const selectedValue = details.value[0];

		if (selectedValue) {
			onValueChange?.(selectedValue);
		}
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
			closeOnSelect
		>
			<Combobox.Control className={styles.control}>
				{startAdornment && <span className={styles.startAdornment}>{startAdornment}</span>}

				<Combobox.Input className={styles.input} placeholder={placeholder} />

				<Combobox.Context>
					{(context) => (
						<div className={styles.iconContainer}>
							{context.inputValue && !disabled && (
								<Combobox.ClearTrigger className={styles.clearButton} aria-label="Clear">
									<DsIcon icon="close" size="medium" />
								</Combobox.ClearTrigger>
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
						{list.loading ? (
							<div className={styles.noMatches}>{loadingMessage}</div>
						) : collection.items.length === 0 ? (
							<div className={styles.noMatches}>{noMatchesMessage}</div>
						) : (
							<Combobox.ItemGroup className={styles.itemGroup}>
								{collection.items.map((option) => (
									<Combobox.Item key={option.value} item={option} className={styles.item}>
										{option.icon && (
											<DsIcon className={styles.itemIcon} icon={option.icon} aria-hidden="true" />
										)}

										<Combobox.ItemText className={styles.itemText}>
											{highlightMatch ? (
												<Highlight query={list.filterText} text={option.label} ignoreCase />
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
