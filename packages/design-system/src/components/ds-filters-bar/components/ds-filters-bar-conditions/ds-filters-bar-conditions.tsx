import { useState } from 'react';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import {
	conditionDialogTab,
	filtersDialogTabs,
	fromFiltersDialogValue,
	toFiltersDialogValue,
} from '../../ds-filters-bar.utils';
import { ConditionChips } from '../ds-filters-bar-condition-chips';
import { FiltersDialog, type DsFiltersBarFiltersDialogValue } from '../ds-filters-bar-filters-dialog';
import type { DsFiltersBarConditionsSlotProps } from '../../ds-filters-bar.types';

const EMPTY_DRAFT: DsFiltersBarFiltersDialogValue = Object.freeze([]);

/**
 * Filters view: the add-filter button with its filters dialog, and one chip per condition. A field
 * chip switches its operator in place, and opens the filters dialog on its field's tab. Renders
 * nothing while an Advanced query is the source.
 *
 * Owns the dialog draft: seeded from the filter document on open, written back only on Save, and
 * dropped on any other close.
 */
export const Conditions = ({ ref, className, style }: DsFiltersBarConditionsSlotProps) => {
	const { fields, conditions, query, pins, locale, setConditions, setPins } = useDsFiltersBarContext();

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
		<ConditionChips
			ref={ref}
			locale={locale.chips}
			className={className}
			style={style}
			canEdit={(condition) => conditionDialogTab(condition, fields) !== undefined}
			onAdd={() => handleOpen()}
			onEdit={(condition) => handleOpen(conditionDialogTab(condition, fields))}
		>
			<FiltersDialog
				open={open}
				tabs={filtersDialogTabs(fields)}
				value={draft}
				initialTab={initialTab}
				locale={locale.conditions}
				onOpenChange={setOpen}
				onChange={(_changed, value) => setDraft(value)}
				onSave={handleSave}
			/>
		</ConditionChips>
	);
};
