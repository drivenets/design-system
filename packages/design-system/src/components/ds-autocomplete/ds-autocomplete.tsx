import { Combobox, useListCollection } from '@ark-ui/react/combobox';
import { useFilter } from '@ark-ui/react/locale';
import { Highlight } from '@ark-ui/react/highlight';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import styles from './ds-autocomplete.module.scss';
import type { DsAutocompleteProps } from './ds-autocomplete.types';
import { DsIcon } from '../ds-icon';

export const DsAutocomplete = ({
	id,
	options,
	style,
	className,
	placeholder = 'Start typing to search...',
	disabled = false,
	invalid = false,
	onValueChange,
	onInputValueChange,
	noMatchesMessage = 'No matches found',
	highlightMatch = true,
	showTrigger = true,
	startAdornment,
}: DsAutocompleteProps) => {
	const filterUtils = useFilter({ sensitivity: 'base' });

	const { collection, filter } = useListCollection({
		initialItems: options.map((opt) => opt.label),
		filter: (item, query) => filterUtils.contains(item, query),
	});

	const handleInputValueChange = (details: Combobox.InputValueChangeDetails) => {
		filter(details.inputValue);
		onInputValueChange?.(details.inputValue);
	};

	const handleValueChange = (details: Combobox.ValueChangeDetails) => {
		const selectedLabel = details.value[0];
		if (!selectedLabel) {
			return;
		}

		const selectedOption = options.find((opt) => opt.label === selectedLabel);

		if (selectedOption) {
			onValueChange?.(selectedOption.value);
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
						{collection.items.length === 0 ? (
							<div className={styles.noMatches}>{noMatchesMessage}</div>
						) : (
							<Combobox.ItemGroup className={styles.itemGroup}>
								<Combobox.Context>
									{(context) =>
										collection.items.map((item) => {
											const option = options.find((opt) => opt.label === item);
											return (
												<Combobox.Item key={item} item={item} className={styles.item}>
													{option?.icon && (
														<DsIcon className={styles.itemIcon} icon={option.icon} aria-hidden="true" />
													)}
													<Combobox.ItemText className={styles.itemText}>
														{highlightMatch ? (
															<Highlight query={context.inputValue} text={item} ignoreCase />
														) : (
															item
														)}
													</Combobox.ItemText>
												</Combobox.Item>
											);
										})
									}
								</Combobox.Context>
							</Combobox.ItemGroup>
						)}
					</Combobox.Content>
				</Combobox.Positioner>
			</Portal>
		</Combobox.Root>
	);
};
