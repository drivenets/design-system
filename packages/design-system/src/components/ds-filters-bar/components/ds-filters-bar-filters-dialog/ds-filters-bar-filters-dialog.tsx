import { useId, useState, type ReactNode } from 'react';
import classNames from 'classnames';
import { DsButtonV3 } from '../../../ds-button-v3';
import { DsCheckbox } from '../../../ds-checkbox';
import { DsDateInput } from '../../../ds-date-input';
import { DsIcon } from '../../../ds-icon';
import { DsModal } from '../../../ds-modal';
import { DsNumberInput } from '../../../ds-number-input';
import { DsPinToggle } from '../../../ds-pin-toggle';
import { DsRadioGroup } from '../../../ds-radio-group';
import { DsSelect } from '../../../ds-select';
import { DsTextInput } from '../../../ds-text-input';
import { DsTypography } from '../../../ds-typography';
import { DsVerticalTabs } from '../../../ds-vertical-tabs';
import type { DsFilterOperator, DsFilterRange } from '../../ds-filters-bar.types';
import { emptyFiltersDialogEntry, isFiltersDialogEntrySet } from '../../ds-filters-bar.utils';
import {
	type DsFiltersBarFiltersDialogDateEntry,
	type DsFiltersBarFiltersDialogEntry,
	type DsFiltersBarFiltersDialogEnumEntry,
	type DsFiltersBarFiltersDialogNumberEntry,
	type DsFiltersBarFiltersDialogProps,
	type DsFiltersBarFiltersDialogTab,
	type DsFiltersBarFiltersDialogTextEntry,
	type DsFiltersBarFiltersDialogValue,
	defaultDsFiltersBarFiltersDialogLocale,
} from './ds-filters-bar-filters-dialog.types';
import styles from './ds-filters-bar-filters-dialog.module.scss';

type Locale = Required<NonNullable<DsFiltersBarFiltersDialogProps['locale']>>;

const BETWEEN = 'between';

const isEntryOf = (entry: DsFiltersBarFiltersDialogEntry, tab: DsFiltersBarFiltersDialogTab) =>
	entry.field === tab.field && entry.subfield === tab.subfield && entry.type === tab.schema.type;

const getEntry = (
	value: DsFiltersBarFiltersDialogValue,
	tab: DsFiltersBarFiltersDialogTab,
): DsFiltersBarFiltersDialogEntry =>
	value.find((entry) => isEntryOf(entry, tab)) ?? emptyFiltersDialogEntry(tab);

const isSameTab = (a: DsFiltersBarFiltersDialogEntry, b: DsFiltersBarFiltersDialogEntry) =>
	a.field === b.field && a.subfield === b.subfield;

const replaceEntry = (
	value: DsFiltersBarFiltersDialogValue,
	changed: DsFiltersBarFiltersDialogEntry,
): DsFiltersBarFiltersDialogValue => {
	const exists = value.some((entry) => isSameTab(entry, changed));

	if (!exists) {
		return [...value, changed];
	}

	return value.map((entry) => (isSameTab(entry, changed) ? changed : entry));
};

const toggle = (list: ReadonlyArray<string>, item: string, on: boolean): ReadonlyArray<string> => {
	if (!on) {
		return list.filter((current) => current !== item);
	}

	return list.includes(item) ? list : [...list, item];
};

/**
 * `DsNumberInput` reports an empty input as `NaN`
 */
const toNumberOrNull = (value: number): number | null => (Number.isNaN(value) ? null : value);

interface TabLabelProps {
	tab: DsFiltersBarFiltersDialogTab;
	entry: DsFiltersBarFiltersDialogEntry;
	locale: Locale;
}

const TabLabel = ({ tab, entry, locale }: TabLabelProps) => {
	const setCount = entry.type === 'enum' ? entry.selected.length : Number(isFiltersDialogEntrySet(entry));
	const hasPins = entry.type === 'enum' && entry.pinned.length > 0;

	return (
		<>
			<DsTypography variant="body-sm-reg" className={styles.tabLabel}>
				{tab.label}
			</DsTypography>
			{setCount > 0 && (
				<>
					<span className={styles.counter} aria-hidden>
						<span className={styles.counterDot} />
						<DsTypography variant="body-xs-semi-bold">{setCount}</DsTypography>
					</span>
					<span className={styles.visuallyHidden}>{locale.selectedCount(setCount)}</span>
				</>
			)}
			{hasPins && (
				<span className={styles.tabPin} role="img" aria-label={locale.pinned}>
					<DsIcon icon="keep" size="tiny" filled aria-hidden />
				</span>
			)}
		</>
	);
};

interface LabeledInputProps {
	label: string;
	children: (id: string) => ReactNode;
}

const LabeledInput = ({ label, children }: LabeledInputProps) => {
	const id = useId();

	return (
		<>
			<label htmlFor={id} className={styles.visuallyHidden}>
				{label}
			</label>
			{children(id)}
		</>
	);
};

interface OperatorSelectProps<TOperator extends string> {
	label: string;
	operators: ReadonlyArray<DsFilterOperator>;
	value: TOperator;
	/**
	 * Adds the `between` option, for number and date tabs whose field has `=`
	 */
	withBetween?: boolean;
	locale: Locale;
	onValueChange: (operator: TOperator) => void;
}

const OperatorSelect = <TOperator extends string>({
	label,
	operators,
	value,
	withBetween = false,
	locale,
	onValueChange,
}: OperatorSelectProps<TOperator>) => {
	const options: Array<{ value: string; label: string }> = operators.map((operator) => ({
		value: operator.value,
		label: locale.operatorOption(label, operator),
	}));

	if (withBetween && operators.some((operator) => operator.value === '=')) {
		options.push({ value: BETWEEN, label: locale.betweenOption(label) });
	}

	const handleValueChange = (next: string) => {
		const option = options.find((item) => item.value === next);

		if (option && option.value !== value) {
			onValueChange(option.value as TOperator);
		}
	};

	return (
		<LabeledInput label={locale.operator}>
			{(id) => (
				<DsSelect
					id={id}
					className={styles.control}
					options={options}
					value={value}
					onValueChange={handleValueChange}
				/>
			)}
		</LabeledInput>
	);
};

interface PanelProps<TEntry extends DsFiltersBarFiltersDialogEntry> {
	tab: DsFiltersBarFiltersDialogTab;
	entry: TEntry;
	locale: Locale;
	onEntryChange: (entry: DsFiltersBarFiltersDialogEntry) => void;
}

interface EnumPanelProps extends PanelProps<DsFiltersBarFiltersDialogEnumEntry> {
	search: string;
	onSearchChange: (search: string) => void;
}

const EnumPanel = ({ tab, entry, search, locale, onSearchChange, onEntryChange }: EnumPanelProps) => {
	if (tab.schema.type !== 'enum') {
		return null;
	}

	const query = search.trim().toLowerCase();
	const visibleOptions = tab.schema.options.filter((option) => option.label.toLowerCase().includes(query));
	// A pin names a field, never a subfield.
	const canPin = !tab.subfield;

	return (
		<>
			<div className={styles.panelHeader}>
				<OperatorSelect
					label={tab.label}
					operators={tab.schema.operators}
					value={entry.operator}
					locale={locale}
					onValueChange={(operator) => onEntryChange({ ...entry, operator })}
				/>
				<LabeledInput label={locale.search(tab.label)}>
					{(id) => (
						<DsTextInput
							id={id}
							className={styles.control}
							value={search}
							placeholder={locale.searchPlaceholder(tab.label)}
							slots={{ startAdornment: <DsIcon icon="search" size="tiny" aria-hidden /> }}
							onValueChange={onSearchChange}
						/>
					)}
				</LabeledInput>
			</div>

			<div className={styles.options} role="group" aria-label={tab.label}>
				{visibleOptions.map((option) => (
					<DsCheckbox
						key={option.value}
						size="large"
						className={styles.option}
						label={option.label}
						checked={entry.selected.includes(option.value)}
						actions={
							canPin && (
								<DsPinToggle
									className={styles.optionPin}
									itemLabel={option.label}
									pinned={entry.pinned.includes(option.value)}
									onPinnedChange={(next) =>
										onEntryChange({ ...entry, pinned: toggle(entry.pinned, option.value, next) })
									}
								/>
							)
						}
						onCheckedChange={(checked) =>
							onEntryChange({
								...entry,
								selected: toggle(entry.selected, option.value, checked === true),
							})
						}
					/>
				))}
			</div>
		</>
	);
};

const TextPanel = ({ tab, entry, locale, onEntryChange }: PanelProps<DsFiltersBarFiltersDialogTextEntry>) => {
	if (tab.schema.type !== 'text') {
		return null;
	}

	return (
		<div className={styles.panelHeader}>
			<OperatorSelect
				label={tab.label}
				operators={tab.schema.operators}
				value={entry.operator}
				locale={locale}
				onValueChange={(operator) => onEntryChange({ ...entry, operator })}
			/>
			<LabeledInput label={locale.value(tab.label)}>
				{(id) => (
					<DsTextInput
						id={id}
						className={styles.control}
						value={entry.text}
						onValueChange={(text) => onEntryChange({ ...entry, text })}
					/>
				)}
			</LabeledInput>
		</div>
	);
};

const NumberPanel = ({
	tab,
	entry,
	locale,
	onEntryChange,
}: PanelProps<DsFiltersBarFiltersDialogNumberEntry>) => {
	if (tab.schema.type !== 'number') {
		return null;
	}

	const setRange = (range: DsFilterRange<number>) => onEntryChange({ ...entry, range });

	return (
		<div className={styles.panelHeader}>
			<OperatorSelect
				label={tab.label}
				operators={tab.schema.operators}
				value={entry.operator}
				withBetween
				locale={locale}
				onValueChange={(operator) => onEntryChange({ ...entry, operator })}
			/>
			{entry.operator === BETWEEN ? (
				<div className={styles.range}>
					<LabeledInput label={locale.rangeFrom(tab.label)}>
						{(id) => (
							<DsNumberInput
								id={id}
								className={styles.control}
								value={entry.range.from ?? undefined}
								onValueChange={(from) => setRange({ ...entry.range, from: toNumberOrNull(from) })}
							/>
						)}
					</LabeledInput>
					<LabeledInput label={locale.rangeTo(tab.label)}>
						{(id) => (
							<DsNumberInput
								id={id}
								className={styles.control}
								value={entry.range.to ?? undefined}
								onValueChange={(to) => setRange({ ...entry.range, to: toNumberOrNull(to) })}
							/>
						)}
					</LabeledInput>
				</div>
			) : (
				<LabeledInput label={locale.value(tab.label)}>
					{(id) => (
						<DsNumberInput
							id={id}
							className={styles.control}
							value={entry.value ?? undefined}
							onValueChange={(value) => onEntryChange({ ...entry, value: toNumberOrNull(value) })}
						/>
					)}
				</LabeledInput>
			)}
		</div>
	);
};

const OPEN_RANGE: DsFilterRange<string> = Object.freeze({ from: null, to: null });

const DatePanel = ({ tab, entry, locale, onEntryChange }: PanelProps<DsFiltersBarFiltersDialogDateEntry>) => {
	if (tab.schema.type !== 'date') {
		return null;
	}

	const presets = tab.schema.presets ?? [];
	// `between` saves only a range, so a preset picked under it moves to `=` or the first operator.
	const presetOperator =
		entry.operator === BETWEEN
			? ((tab.schema.operators.find((operator) => operator.value === '=') ?? tab.schema.operators[0])
					?.value ?? '=')
			: entry.operator;
	// A preset and a date never save together: choosing one clears the other.
	const setRange = (range: DsFilterRange<string>) => onEntryChange({ ...entry, preset: null, range });

	return (
		<>
			<div className={styles.panelHeader}>
				<OperatorSelect
					label={tab.label}
					operators={tab.schema.operators}
					value={entry.operator}
					withBetween
					locale={locale}
					onValueChange={(operator) => onEntryChange({ ...entry, operator })}
				/>
				{entry.operator === BETWEEN ? (
					<div className={styles.range}>
						<LabeledInput label={locale.rangeFrom(tab.label)}>
							{(id) => (
								<DsDateInput
									id={id}
									className={styles.control}
									value={entry.range.from ?? undefined}
									onValueChange={(from) => setRange({ ...entry.range, from: from ?? null })}
								/>
							)}
						</LabeledInput>
						<LabeledInput label={locale.rangeTo(tab.label)}>
							{(id) => (
								<DsDateInput
									id={id}
									className={styles.control}
									value={entry.range.to ?? undefined}
									onValueChange={(to) => setRange({ ...entry.range, to: to ?? null })}
								/>
							)}
						</LabeledInput>
					</div>
				) : (
					<LabeledInput label={locale.value(tab.label)}>
						{(id) => (
							<DsDateInput
								id={id}
								className={styles.control}
								value={entry.date ?? undefined}
								onValueChange={(date) => onEntryChange({ ...entry, preset: null, date: date ?? null })}
							/>
						)}
					</LabeledInput>
				)}
			</div>

			{presets.length > 0 && (
				<div className={styles.options} role="group" aria-label={locale.presets(tab.label)}>
					<DsRadioGroup.Root
						value={entry.preset}
						onValueChange={(preset) =>
							onEntryChange({ ...entry, operator: presetOperator, preset, date: null, range: OPEN_RANGE })
						}
					>
						{presets.map((preset) => (
							<DsRadioGroup.Item key={preset.value} value={preset.value} label={preset.label} />
						))}
					</DsRadioGroup.Root>
				</div>
			)}
		</>
	);
};

interface TabPanelProps {
	tab: DsFiltersBarFiltersDialogTab;
	entry: DsFiltersBarFiltersDialogEntry;
	search: string;
	locale: Locale;
	onSearchChange: (search: string) => void;
	onEntryChange: (entry: DsFiltersBarFiltersDialogEntry) => void;
}

const TabPanel = ({ entry, search, onSearchChange, ...props }: TabPanelProps) => {
	switch (entry.type) {
		case 'enum':
			return <EnumPanel entry={entry} search={search} onSearchChange={onSearchChange} {...props} />;
		case 'text':
			return <TextPanel entry={entry} {...props} />;
		case 'number':
			return <NumberPanel entry={entry} {...props} />;
		case 'date':
			return <DatePanel entry={entry} {...props} />;
	}
};

/**
 * Local state is limited to the selected tab and the option search, both reset whenever the
 * dialog opens.
 */
export const FiltersDialog = ({
	open,
	tabs,
	value,
	initialTab,
	locale: localeProp,
	className,
	style,
	onOpenChange,
	onChange,
	onSave,
}: DsFiltersBarFiltersDialogProps) => {
	const locale: Locale = { ...defaultDsFiltersBarFiltersDialogLocale, ...localeProp };
	const openingTabId = initialTab ?? tabs[0]?.id ?? '';

	const [selectedTabId, setSelectedTabId] = useState(openingTabId);
	const [search, setSearch] = useState('');
	const [wasOpen, setWasOpen] = useState(open);

	if (open !== wasOpen) {
		setWasOpen(open);

		if (open) {
			setSelectedTabId(openingTabId);
			setSearch('');
		}
	}

	const activeTab = tabs.find((tab) => tab.id === selectedTabId) ?? tabs[0];

	const handleTabChange = (tabId: string | null) => {
		if (!tabId || tabId === activeTab?.id) {
			return;
		}

		setSelectedTabId(tabId);
		setSearch('');
	};

	const handleEntryChange = (changed: DsFiltersBarFiltersDialogEntry) => {
		onChange(changed, replaceEntry(value, changed));
	};

	const handleSave = () => {
		onSave(value);
		onOpenChange(false);
	};

	return (
		<DsModal
			open={open}
			dividers
			closeOnInteractOutside
			className={classNames(styles.dialog, className)}
			style={style}
			onOpenChange={onOpenChange}
		>
			<DsModal.Header className={styles.header}>
				<DsModal.Title>{locale.title}</DsModal.Title>
				<DsButtonV3
					variant="tertiary"
					size="small"
					icon="close"
					aria-label={locale.close}
					onClick={() => onOpenChange(false)}
				/>
			</DsModal.Header>

			<DsModal.Body className={styles.body}>
				<DsVerticalTabs className={styles.tabs} value={activeTab?.id} onValueChange={handleTabChange}>
					<DsVerticalTabs.List className={styles.tabList}>
						{tabs.map((tab) => (
							<DsVerticalTabs.Tab key={tab.id} value={tab.id} className={styles.tab}>
								<TabLabel tab={tab} entry={getEntry(value, tab)} locale={locale} />
							</DsVerticalTabs.Tab>
						))}
					</DsVerticalTabs.List>

					{activeTab && (
						<DsVerticalTabs.Content value={activeTab.id} className={styles.panel}>
							<TabPanel
								// Number inputs keep their own text, so each tab gets fresh ones.
								key={activeTab.id}
								tab={activeTab}
								entry={getEntry(value, activeTab)}
								search={search}
								locale={locale}
								onSearchChange={setSearch}
								onEntryChange={handleEntryChange}
							/>
						</DsVerticalTabs.Content>
					)}
				</DsVerticalTabs>
			</DsModal.Body>

			<DsModal.Footer className={styles.footer}>
				<DsModal.Actions>
					<DsButtonV3 variant="primary" size="medium" onClick={handleSave}>
						{locale.save}
					</DsButtonV3>
				</DsModal.Actions>
			</DsModal.Footer>
		</DsModal>
	);
};

FiltersDialog.displayName = 'DsFiltersBar.FiltersDialog';
