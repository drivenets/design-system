import classNames from 'classnames';
import { useState } from 'react';
import { DsButtonV3 } from '../../../ds-button-v3';
import { DsDropdownMenu } from '../../../ds-dropdown-menu';
import { DsIcon } from '../../../ds-icon';
import { DsTag } from '../../../ds-tag';
import { DsTypography } from '../../../ds-typography';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import styles from '../../ds-filters-bar.module.scss';
import type {
	DsFilterFieldCondition,
	DsFilterOperator,
	DsFilterOperatorValue,
	DsFilterSearchCondition,
} from '../../ds-filters-bar.types';
import {
	conditionDialogTab,
	conditionOperators,
	conditionText,
	describeCondition,
	filtersDialogTabs,
	fromFiltersDialogValue,
	isRange,
	toFiltersDialogValue,
} from '../../ds-filters-bar.utils';
import { FiltersDialog, type DsFiltersBarFiltersDialogValue } from '../ds-filters-bar-filters-dialog';
import {
	defaultDsFiltersBarConditionsLocale,
	type DsFiltersBarConditionsProps,
} from './ds-filters-bar-conditions.types';

const EMPTY_DRAFT: DsFiltersBarFiltersDialogValue = Object.freeze([]);
const FIELD_PATH_SEPARATOR = ' › ';

type Locale = Required<NonNullable<DsFiltersBarConditionsProps['locale']>>;

interface SearchChipProps {
	condition: DsFilterSearchCondition;
	locale: Locale;
}

const SearchChip = ({ condition, locale }: SearchChipProps) => {
	const { search, removeCondition } = useDsFiltersBarContext();

	// Editing hands the text back to the search input, where Enter adds it again.
	const handleEdit = search
		? () => {
				search.edit(condition.text);
				removeCondition(condition.id);
			}
		: undefined;

	return (
		<DsTag
			selected
			label={condition.text}
			locale={{ deleteAriaLabel: locale.removeCondition(condition.text) }}
			slots={{ icon: <DsIcon icon="search" size="tiny" aria-hidden /> }}
			onClick={handleEdit}
			onDelete={() => removeCondition(condition.id)}
		/>
	);
};

interface OperatorMenuProps {
	value: DsFilterOperatorValue;
	symbol: string;
	operators: ReadonlyArray<DsFilterOperator>;
	label: string;
	locale: Locale;
	onValueChange: (operator: DsFilterOperator) => void;
}

const OperatorMenu = ({ value, symbol, operators, label, locale, onValueChange }: OperatorMenuProps) => {
	const handleSelect = (selected: string) => {
		const operator = operators.find((item) => item.value === selected);

		if (operator && operator.value !== value) {
			onValueChange(operator);
		}
	};

	return (
		<DsDropdownMenu.Root onSelect={handleSelect}>
			<DsDropdownMenu.Trigger className={styles.operatorTrigger} aria-label={label}>
				<DsTypography variant="body-sm-reg">{symbol}</DsTypography>
				<DsIcon icon="keyboard_arrow_down" size="tiny" aria-hidden />
			</DsDropdownMenu.Trigger>
			<DsDropdownMenu.Content>
				{operators.map((operator) => (
					<DsDropdownMenu.Item
						key={operator.value}
						value={operator.value}
						selected={operator.value === value}
					>
						{locale.operatorOption(operator)}
						{operator.value === value && (
							<DsDropdownMenu.ItemIndicator>
								<DsIcon icon="check" aria-hidden />
							</DsDropdownMenu.ItemIndicator>
						)}
					</DsDropdownMenu.Item>
				))}
			</DsDropdownMenu.Content>
		</DsDropdownMenu.Root>
	);
};

interface FieldChipProps {
	condition: DsFilterFieldCondition;
	locale: Locale;
	onEdit: (tabId: string) => void;
}

const FieldChip = ({ condition, locale, onEdit }: FieldChipProps) => {
	const { fields, removeCondition, updateCondition } = useDsFiltersBarContext();

	const description = describeCondition(condition, fields);
	const operators = conditionOperators(condition, fields);
	const dialogTab = conditionDialogTab(condition, fields);
	const symbol = description.operatorSymbol ?? condition.operator;

	const renderOperator = () => {
		if (operators) {
			return (
				<OperatorMenu
					value={condition.operator}
					symbol={symbol}
					operators={operators}
					label={locale.operator(description.fieldPath.join(' '))}
					locale={locale}
					onValueChange={(operator) => updateCondition({ ...condition, operator: operator.value })}
				/>
			);
		}

		// A range means "within", so it shows no operator at all.
		if (isRange(condition.value)) {
			return undefined;
		}

		return (
			<DsTypography variant="body-sm-reg" className={styles.operatorText}>
				{symbol}
			</DsTypography>
		);
	};

	return (
		<DsTag
			selected
			variant="operator-filter"
			label={description.fieldPath.join(FIELD_PATH_SEPARATOR)}
			value={description.value}
			locale={{ deleteAriaLabel: locale.removeCondition(conditionText(description)) }}
			slots={{ operator: renderOperator() }}
			onClick={dialogTab ? () => onEdit(dialogTab) : undefined}
			onDelete={() => removeCondition(condition.id)}
		/>
	);
};

/**
 * Owns the dialog draft: seeded from the filter document on open, written back only on Save, and
 * dropped on any other close.
 */
export const Conditions = ({ locale: localeProp, className, style }: DsFiltersBarConditionsProps) => {
	const { fields, conditions, query, pins, setConditions, setPins } = useDsFiltersBarContext();
	const locale = { ...defaultDsFiltersBarConditionsLocale, ...localeProp };

	const [open, setOpen] = useState(false);
	const [draft, setDraft] = useState(EMPTY_DRAFT);
	const [initialTab, setInitialTab] = useState<string | undefined>(undefined);

	// The conditions are ignored while an Advanced query filters, so neither show them nor add to them.
	// A dialog left open would come back with a stale draft once the query clears.
	if (query !== null) {
		if (open) {
			setOpen(false);
		}

		return null;
	}

	const handleOpen = (tabId?: string) => {
		setDraft(toFiltersDialogValue(fields, conditions, pins));
		setInitialTab(tabId);
		setOpen(true);
	};

	const handleSave = (value: DsFiltersBarFiltersDialogValue) => {
		const next = fromFiltersDialogValue(fields, conditions, pins, value);

		setConditions(next.conditions);
		setPins(next.pins);
	};

	return (
		<div className={classNames(styles.conditions, className)} style={style}>
			<DsButtonV3
				variant="secondary"
				color="default"
				size="small"
				icon="add"
				aria-label={locale.addFilter}
				onClick={() => handleOpen()}
			/>
			<FiltersDialog
				open={open}
				tabs={filtersDialogTabs(fields)}
				value={draft}
				initialTab={initialTab}
				locale={{ ...locale.filtersDialog, title: locale.filtersDialogTitle, save: locale.saveFilters }}
				onOpenChange={setOpen}
				onChange={(_changed, value) => setDraft(value)}
				onSave={handleSave}
			/>
			{conditions.map((condition) =>
				condition.kind === 'search' ? (
					<SearchChip key={condition.id} condition={condition} locale={locale} />
				) : (
					<FieldChip key={condition.id} condition={condition} locale={locale} onEdit={handleOpen} />
				),
			)}
		</div>
	);
};

Conditions.displayName = 'DsFiltersBar.Conditions';
