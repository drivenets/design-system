import classNames from 'classnames';
import { useState } from 'react';
import { DsButtonV3 } from '../../../ds-button-v3';
import { DsIcon } from '../../../ds-icon';
import { DsTag } from '../../../ds-tag';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import styles from '../../ds-filters-bar.module.scss';
import type { DsFilterCondition } from '../../ds-filters-bar.types';
import {
	describeCondition,
	filtersDialogFields,
	fromFiltersDialogValue,
	toFiltersDialogValue,
} from '../../ds-filters-bar.utils';
import { FiltersDialog, type DsFiltersBarFiltersDialogValue } from '../ds-filters-bar-filters-dialog';
import {
	defaultDsFiltersBarConditionsLocale,
	type DsFiltersBarConditionsProps,
} from './ds-filters-bar-conditions.types';

const EMPTY_DRAFT: DsFiltersBarFiltersDialogValue = Object.freeze([]);

type Locale = Required<NonNullable<DsFiltersBarConditionsProps['locale']>>;

interface ConditionChipProps {
	condition: DsFilterCondition;
	locale: Locale;
}

/**
 * Field condition chips are not built yet, so only search conditions render.
 */
const ConditionChip = ({ condition, locale }: ConditionChipProps) => {
	const { fields, search, removeCondition } = useDsFiltersBarContext();

	if (condition.kind !== 'search') {
		return null;
	}

	const { value } = describeCondition(condition, fields);

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
			label={value}
			locale={{ deleteAriaLabel: locale.removeCondition(value) }}
			slots={{ icon: <DsIcon icon="search" size="tiny" aria-hidden /> }}
			onClick={handleEdit}
			onDelete={() => removeCondition(condition.id)}
		/>
	);
};

/**
 * Owns the dialog draft: seeded from the filter document on open, written back only on Save, and
 * dropped on any other close.
 */
export const Conditions = ({ locale: localeProp, className, style }: DsFiltersBarConditionsProps) => {
	const { fields, conditions, pins, setConditions, setPins } = useDsFiltersBarContext();
	const locale = { ...defaultDsFiltersBarConditionsLocale, ...localeProp };

	const [open, setOpen] = useState(false);
	const [draft, setDraft] = useState(EMPTY_DRAFT);

	const handleOpen = () => {
		setDraft(toFiltersDialogValue(fields, conditions, pins));
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
				onClick={handleOpen}
			/>
			<FiltersDialog
				open={open}
				fields={filtersDialogFields(fields)}
				value={draft}
				locale={{ ...locale.filtersDialog, title: locale.filtersDialogTitle, save: locale.saveFilters }}
				onOpenChange={setOpen}
				onChange={(_changed, value) => setDraft(value)}
				onSave={handleSave}
			/>
			{conditions.map((condition) => (
				<ConditionChip key={condition.id} condition={condition} locale={locale} />
			))}
		</div>
	);
};

Conditions.displayName = 'DsFiltersBar.Conditions';
