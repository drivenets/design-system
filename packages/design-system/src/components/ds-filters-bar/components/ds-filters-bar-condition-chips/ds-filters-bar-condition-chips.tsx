import classNames from 'classnames';
import { DsButtonV3 } from '../../../ds-button-v3';
import { DsDropdownMenu } from '../../../ds-dropdown-menu';
import { DsIcon } from '../../../ds-icon';
import { DsTag } from '../../../ds-tag';
import { DsTypography } from '../../../ds-typography';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import styles from './ds-filters-bar-condition-chips.module.scss';
import type {
	DsFilterFieldCondition,
	DsFilterResolvedOperator,
	DsFilterOperatorValue,
	DsFilterSearchCondition,
} from '../../ds-filters-bar.types';
import { conditionOperators, conditionText, describeCondition, isRange } from '../../ds-filters-bar.utils';
import type { ConditionChipsProps } from './ds-filters-bar-condition-chips.types';

const FIELD_PATH_SEPARATOR = ' › ';

type Locale = ConditionChipsProps['locale'];

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
	operators: ReadonlyArray<DsFilterResolvedOperator>;
	label: string;
	locale: Locale;
	onValueChange: (operator: DsFilterResolvedOperator) => void;
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
	onEdit?: () => void;
}

const FieldChip = ({ condition, locale, onEdit }: FieldChipProps) => {
	const { fields, removeCondition, updateCondition } = useDsFiltersBarContext();

	const description = describeCondition(condition, fields);
	const operators = conditionOperators(condition, fields);
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
			onClick={onEdit}
			onDelete={() => removeCondition(condition.id)}
		/>
	);
};

/**
 * The add button and one chip per condition, shared by the filters and builder views. A field chip
 * switches its operator in place; which dialog the add button and a chip click open is the view's
 * choice.
 */
export const ConditionChips = ({
	locale,
	children,
	ref,
	className,
	style,
	onAdd,
	canEdit,
	onEdit,
}: ConditionChipsProps) => {
	const { conditions, canAdd } = useDsFiltersBarContext();

	return (
		<div ref={ref} className={classNames(styles.conditions, className)} style={style}>
			{canAdd && (
				<DsButtonV3
					variant="secondary"
					color="default"
					size="small"
					icon="add"
					aria-label={locale.addFilter}
					onClick={onAdd}
				/>
			)}
			{children}
			{conditions.map((condition) =>
				condition.kind === 'search' ? (
					<SearchChip key={condition.id} condition={condition} locale={locale} />
				) : (
					<FieldChip
						key={condition.id}
						condition={condition}
						locale={locale}
						onEdit={canEdit(condition) ? () => onEdit(condition) : undefined}
					/>
				),
			)}
		</div>
	);
};
