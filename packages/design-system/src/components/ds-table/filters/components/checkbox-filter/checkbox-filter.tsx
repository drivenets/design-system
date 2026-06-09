import { type ReactNode, useState } from 'react';
import classNames from 'classnames';
import styles from './checkbox-filter.module.scss';
import { DsCheckbox } from '../../../../ds-checkbox';
import { DsTextInput } from '../../../../ds-text-input';
import { DsIcon } from '../../../../ds-icon';

export interface CheckboxFilterItem<TValue = string> {
	value: TValue;
	label: string;
	metadata?: Record<string, unknown>;
}

export interface CheckboxFilterLocale {
	/** @default 'All' */
	allLabel?: string;
	/** @default 'Search' */
	searchPlaceholder?: string;
	/** @default 'No matches' */
	noMatchesLabel?: string;
}

export interface CheckboxFilterProps<TValue> {
	items: CheckboxFilterItem<TValue>[];
	/** Custom row renderer; defaults to `item.label`. */
	renderer?: (item: CheckboxFilterItem<TValue>) => ReactNode;
	selectedItems: CheckboxFilterItem<TValue>[];
	onSelectionChange: (selectedItems: CheckboxFilterItem<TValue>[]) => void;
	/** Show a case-insensitive substring search above the list. @default false */
	searchable?: boolean;
	/**
	 * Show an "All" toggle. Checked when every visible item is selected,
	 * indeterminate when some are, unchecked otherwise. @default false
	 */
	selectAll?: boolean;
	locale?: CheckboxFilterLocale;
	className?: string;
}

export const CheckboxFilter = <TValue,>({
	items,
	renderer,
	selectedItems,
	onSelectionChange,
	searchable = false,
	selectAll = false,
	locale,
	className,
}: CheckboxFilterProps<TValue>) => {
	const { allLabel = 'All', searchPlaceholder = 'Search', noMatchesLabel = 'No matches' } = locale ?? {};

	const [query, setQuery] = useState('');

	const visibleItems = searchable
		? items.filter((item) => item.label.toLowerCase().includes(query.trim().toLowerCase()))
		: items;

	const handleCheckedChange = (selected: CheckboxFilterItem<TValue>, checked: boolean) => {
		if (checked) {
			onSelectionChange([...selectedItems, selected]);
		} else {
			onSelectionChange(selectedItems.filter((item) => item.value !== selected.value));
		}
	};

	const visibleSelectedCount = visibleItems.filter((item) =>
		selectedItems.some((selected) => selected.value === item.value),
	).length;

	const allVisibleSelected = visibleItems.length > 0 && visibleSelectedCount === visibleItems.length;
	const someVisibleSelected = visibleSelectedCount > 0 && !allVisibleSelected;

	const handleSelectAllChange = (next: boolean | 'indeterminate') => {
		const shouldSelect = next === true;
		const visibleValues = new Set(visibleItems.map((item) => item.value));
		const withoutVisible = selectedItems.filter((item) => !visibleValues.has(item.value));
		onSelectionChange(shouldSelect ? [...withoutVisible, ...visibleItems] : withoutVisible);
	};

	return (
		<div className={classNames(styles.root, className)}>
			{searchable && (
				<DsTextInput
					value={query}
					placeholder={searchPlaceholder}
					onValueChange={setQuery}
					slots={{
						startAdornment: <DsIcon icon="search" size="tiny" />,
					}}
				/>
			)}

			<div className={styles.list} role="group">
				{selectAll && visibleItems.length > 0 && (
					<DsCheckbox
						className={styles.checkboxItem}
						label={allLabel}
						checked={allVisibleSelected ? true : someVisibleSelected ? 'indeterminate' : false}
						onCheckedChange={handleSelectAllChange}
					/>
				)}

				{visibleItems.length === 0 && <div className={styles.empty}>{noMatchesLabel}</div>}

				{visibleItems.map((item) => {
					const label = renderer ? renderer(item) : item.label;
					const checked = selectedItems.some((selected) => selected.value === item.value);

					return (
						<DsCheckbox
							key={JSON.stringify(item.value)}
							className={styles.checkboxItem}
							label={label}
							checked={checked}
							onCheckedChange={(next) => handleCheckedChange(item, next === true)}
						/>
					);
				})}
			</div>
		</div>
	);
};
