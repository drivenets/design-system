import { forwardRef, useEffect, useState, useRef, useMemo } from 'react';
import { Combobox, useListCollection } from '@ark-ui/react/combobox';
import { useFilter } from '@ark-ui/react/locale';
import { Highlight } from '@ark-ui/react/highlight';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import styles from './ds-autocomplete.module.scss';
import type { DsAutocompleteProps } from './ds-autocomplete.types';
import { DsIcon } from '../ds-icon';

/**
 * @example
 * const options = [
 *   { value: 'apple', label: 'Apple' },
 *   { value: 'banana', label: 'Banana' },
 * ];
 *
 * <DsAutocomplete
 *   initialOptions={options}
 *   value={selectedValue}
 *   onValueChange={(value) => setSelectedValue(value)}
 *   placeholder="Select fruit..."
 * />
 */
export const DsAutocomplete = forwardRef<HTMLInputElement, DsAutocompleteProps>(
	(
		{
			id,
			initialOptions,
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

		const initialItems = useMemo(() => initialOptions.map((opt) => opt.label), [initialOptions]);

		const { collection, filter } = useListCollection({
			initialItems,
			filter: (item, query) => filterUtils.contains(item, query),
		});

		const optionsMap = useMemo(
			() => new Map(initialOptions.map((opt) => [opt.label, opt])),
			[initialOptions],
		);

		useEffect(() => {
			collection.setItems(initialItems);
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [initialItems]);

		useEffect(() => {
			if (value) {
				const selectedOption = initialOptions.find((opt) => opt.value === value);
				if (selectedOption) {
					setInputValue(selectedOption.label);
				}
			} else {
				setInputValue('');
			}
		}, [value, initialOptions]);

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

			const selectedOption = optionsMap.get(selectedLabel);

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

		const selectedLabel = useMemo(() => {
			if (!value) {
				return undefined;
			}
			return initialOptions.find((opt) => opt.value === value)?.label;
		}, [value, initialOptions]);

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
										const option = optionsMap.get(item);
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
