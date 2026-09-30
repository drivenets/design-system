import classNames from 'classnames';
import { useState } from 'react';
import { DsButtonV3 } from '../../../ds-button-v3';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import styles from '../../ds-filters-bar.module.scss';
import {
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
		</div>
	);
};

Conditions.displayName = 'DsFiltersBar.Conditions';
