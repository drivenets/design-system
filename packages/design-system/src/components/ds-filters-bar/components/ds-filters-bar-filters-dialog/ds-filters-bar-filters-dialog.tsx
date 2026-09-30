import { useId, useState } from 'react';
import classNames from 'classnames';
import { DsButtonV3 } from '../../../ds-button-v3';
import { DsCheckbox } from '../../../ds-checkbox';
import { DsIcon } from '../../../ds-icon';
import { DsModal } from '../../../ds-modal';
import { DsPinToggle } from '../../../ds-pin-toggle';
import { DsSelect } from '../../../ds-select';
import { DsTextInput } from '../../../ds-text-input';
import { DsTypography } from '../../../ds-typography';
import { DsVerticalTabs } from '../../../ds-vertical-tabs';
import type { DsFilterEnumField } from '../../ds-filters-bar.types';
import {
	type DsFiltersBarFiltersDialogEntry,
	type DsFiltersBarFiltersDialogProps,
	type DsFiltersBarFiltersDialogValue,
	defaultDsFiltersBarFiltersDialogLocale,
} from './ds-filters-bar-filters-dialog.types';
import barStyles from '../../ds-filters-bar.module.scss';
import styles from './ds-filters-bar-filters-dialog.module.scss';

type Locale = Required<NonNullable<DsFiltersBarFiltersDialogProps['locale']>>;

const getEntry = (
	value: DsFiltersBarFiltersDialogValue,
	field: DsFilterEnumField,
): DsFiltersBarFiltersDialogEntry =>
	value.find((entry) => entry.field === field.id) ?? {
		field: field.id,
		operator: field.operators[0]?.value ?? '=',
		selected: [],
		pinned: [],
	};

const replaceEntry = (
	value: DsFiltersBarFiltersDialogValue,
	changed: DsFiltersBarFiltersDialogEntry,
): DsFiltersBarFiltersDialogValue => {
	const exists = value.some((entry) => entry.field === changed.field);

	if (!exists) {
		return [...value, changed];
	}

	return value.map((entry) => (entry.field === changed.field ? changed : entry));
};

const toggle = (list: ReadonlyArray<string>, item: string, on: boolean): ReadonlyArray<string> => {
	if (!on) {
		return list.filter((current) => current !== item);
	}

	return list.includes(item) ? list : [...list, item];
};

interface TabLabelProps {
	field: DsFilterEnumField;
	entry: DsFiltersBarFiltersDialogEntry;
	locale: Locale;
}

const TabLabel = ({ field, entry, locale }: TabLabelProps) => {
	const checkedCount = entry.selected.length;
	const hasPins = entry.pinned.length > 0;

	return (
		<>
			<DsTypography variant="body-sm-reg" className={styles.tabLabel}>
				{field.label}
			</DsTypography>
			{checkedCount > 0 && (
				<>
					<span className={styles.counter} aria-hidden>
						<span className={styles.counterDot} />
						<DsTypography variant="body-xs-semi-bold">{checkedCount}</DsTypography>
					</span>
					<span className={barStyles.visuallyHidden}>{locale.selectedCount(checkedCount)}</span>
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

interface FieldPanelProps {
	field: DsFilterEnumField;
	entry: DsFiltersBarFiltersDialogEntry;
	search: string;
	locale: Locale;
	onSearchChange: (search: string) => void;
	onEntryChange: (entry: DsFiltersBarFiltersDialogEntry) => void;
}

const FieldPanel = ({ field, entry, search, locale, onSearchChange, onEntryChange }: FieldPanelProps) => {
	const operatorId = useId();
	const searchId = useId();

	const query = search.trim().toLowerCase();
	const visibleOptions = field.options.filter((option) => option.label.toLowerCase().includes(query));

	const operatorOptions = field.operators.map((operator) => ({
		value: operator.value,
		label: locale.operatorOption(field.label, operator),
	}));

	const handleOperatorChange = (value: string) => {
		const operator = field.operators.find((item) => item.value === value)?.value;

		if (!operator || operator === entry.operator) {
			return;
		}

		onEntryChange({ ...entry, operator });
	};

	return (
		<>
			<div className={styles.panelHeader}>
				<label htmlFor={operatorId} className={barStyles.visuallyHidden}>
					{locale.operator}
				</label>
				<DsSelect
					id={operatorId}
					className={styles.control}
					options={operatorOptions}
					value={entry.operator}
					onValueChange={handleOperatorChange}
				/>
				<label htmlFor={searchId} className={barStyles.visuallyHidden}>
					{locale.search(field.label)}
				</label>
				<DsTextInput
					id={searchId}
					className={styles.control}
					value={search}
					placeholder={locale.searchPlaceholder(field.label)}
					slots={{ startAdornment: <DsIcon icon="search" size="tiny" aria-hidden /> }}
					onValueChange={onSearchChange}
				/>
			</div>

			<div className={styles.options} role="group" aria-label={field.label}>
				{visibleOptions.map((option) => {
					const pinned = entry.pinned.includes(option.value);

					return (
						<DsCheckbox
							key={option.value}
							size="large"
							className={styles.option}
							label={option.label}
							checked={entry.selected.includes(option.value)}
							actions={
								<DsPinToggle
									className={styles.optionPin}
									itemLabel={option.label}
									pinned={pinned}
									onPinnedChange={(next) =>
										onEntryChange({ ...entry, pinned: toggle(entry.pinned, option.value, next) })
									}
								/>
							}
							onCheckedChange={(checked) =>
								onEntryChange({
									...entry,
									selected: toggle(entry.selected, option.value, checked === true),
								})
							}
						/>
					);
				})}
			</div>
		</>
	);
};

/**
 * Local state is limited to the selected tab and the option search, both reset whenever the
 * dialog opens.
 */
export const FiltersDialog = ({
	open,
	fields,
	value,
	locale: localeProp,
	className,
	style,
	onOpenChange,
	onChange,
	onSave,
}: DsFiltersBarFiltersDialogProps) => {
	const locale: Locale = { ...defaultDsFiltersBarFiltersDialogLocale, ...localeProp };

	const [selectedFieldId, setSelectedFieldId] = useState(fields[0]?.id ?? '');
	const [search, setSearch] = useState('');
	const [wasOpen, setWasOpen] = useState(open);

	if (open !== wasOpen) {
		setWasOpen(open);

		if (open) {
			setSelectedFieldId(fields[0]?.id ?? '');
			setSearch('');
		}
	}

	const activeField = fields.find((field) => field.id === selectedFieldId) ?? fields[0];

	const handleTabChange = (fieldId: string | null) => {
		if (!fieldId || fieldId === activeField?.id) {
			return;
		}

		setSelectedFieldId(fieldId);
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
				<DsVerticalTabs className={styles.tabs} value={activeField?.id} onValueChange={handleTabChange}>
					<DsVerticalTabs.List className={styles.tabList}>
						{fields.map((field) => (
							<DsVerticalTabs.Tab key={field.id} value={field.id} className={styles.tab}>
								<TabLabel field={field} entry={getEntry(value, field)} locale={locale} />
							</DsVerticalTabs.Tab>
						))}
					</DsVerticalTabs.List>

					{activeField && (
						<DsVerticalTabs.Content value={activeField.id} className={styles.panel}>
							<FieldPanel
								field={activeField}
								entry={getEntry(value, activeField)}
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
