import { forwardRef, useEffect, useState, useRef } from 'react';
import { Combobox, useListCollection } from '@ark-ui/react/combobox';
import { useFilter } from '@ark-ui/react/locale';
import { Highlight } from '@ark-ui/react/highlight';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import styles from './ds-autocomplete.module.scss';
import type { DsAutocompleteProps } from './ds-autocomplete.types';
import { DsIcon } from '../ds-icon';

export const DsAutocomplete = forwardRef<HTMLInputElement, DsAutocompleteProps>(
	(
		{
			id,
			options,
			value,
			style,
			className,
			placeholder = 'Start typing to search...',
			disabled = false,
			invalid = false,
			onValueChange,
			onOptionSelect,
			onInputValueChange,
			onOpenChange,
			noMatchesMessage = 'No matches found',
			highlightMatch = true,
			showTrigger = true,
			startAdornment,
		},
		ref,
	) => {
		const filterUtils = useFilter({ sensitivity: 'base' });
		const [inputValue, setInputValue] = useState('');
		const inputRef = useRef<HTMLInputElement>(null);

		const { collection, filter } = useListCollection({
			initialItems: options.map((opt) => opt.label),
			filter: (item, query) => filterUtils.contains(item, query),
		});

		useEffect(() => {
			collection.setItems(options.map((opt) => opt.label));
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [options]);

		useEffect(() => {
			if (value) {
				const selectedOption = options.find((opt) => opt.value === value);
				if (selectedOption) {
					setInputValue(selectedOption.label);
				}
			} else {
				setInputValue('');
			}
		}, [value, options]);

		const handleInputValueChange = (details: Combobox.InputValueChangeDetails) => {
			setInputValue(details.inputValue);
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
				onOptionSelect?.(selectedOption);
			}
		};

		const handleClear = () => {
			onValueChange?.('');
		};

		const handleControlClick = () => {
			if (!disabled && inputRef.current) {
				inputRef.current.focus();
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

		const showClearButton = (inputValue || value) && !disabled;

		const selectedLabel = value ? options.find((opt) => opt.value === value)?.label : undefined;

		return (
			<Combobox.Root
				id={id}
				collection={collection}
				className={rootClass}
				style={style}
				disabled={disabled}
				invalid={invalid}
				value={selectedLabel ? [selectedLabel] : []}
				onInputValueChange={handleInputValueChange}
				onValueChange={handleValueChange}
				closeOnSelect
				onOpenChange={(details) => onOpenChange?.(details.open)}
			>
				<Combobox.Control className={styles.control} onClick={handleControlClick}>
					{startAdornment && <span className={styles.startAdornment}>{startAdornment}</span>}

					<Combobox.Input
						ref={(node) => {
							inputRef.current = node;
							if (typeof ref === 'function') {
								ref(node);
							} else if (ref) {
								ref.current = node;
							}
						}}
						className={styles.input}
						placeholder={placeholder}
					/>

					<div className={styles.iconContainer}>
						{showClearButton && (
							<Combobox.ClearTrigger className={styles.clearButton} onClick={handleClear} aria-label="Clear">
								<DsIcon icon="close" size="medium" />
							</Combobox.ClearTrigger>
						)}

						{showTrigger && (
							<Combobox.Trigger className={styles.trigger} aria-label="Toggle dropdown">
								<DsIcon icon="keyboard_arrow_down" size="medium" />
							</Combobox.Trigger>
						)}
					</div>
				</Combobox.Control>

				<Portal>
					<Combobox.Positioner className={styles.positioner}>
						<Combobox.Content className={styles.content}>
							{collection.items.length === 0 ? (
								<div className={styles.noMatches}>{noMatchesMessage}</div>
							) : (
								<Combobox.ItemGroup className={styles.itemGroup}>
									{collection.items.map((item) => {
										const option = options.find((opt) => opt.label === item);
										return (
											<Combobox.Item key={item} item={item} className={styles.item}>
												{option?.icon && (
													<DsIcon className={styles.itemIcon} icon={option.icon} aria-hidden="true" />
												)}
												<Combobox.ItemText className={styles.itemText}>
													{highlightMatch ? <Highlight query={inputValue} text={item} ignoreCase /> : item}
												</Combobox.ItemText>
											</Combobox.Item>
										);
									})}
								</Combobox.ItemGroup>
							)}
						</Combobox.Content>
					</Combobox.Positioner>
				</Portal>
			</Combobox.Root>
		);
	},
);

DsAutocomplete.displayName = 'DsAutocomplete';
