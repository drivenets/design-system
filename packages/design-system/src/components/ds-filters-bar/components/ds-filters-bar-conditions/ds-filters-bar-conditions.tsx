import { useState } from 'react';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import {
	conditionDialogTab,
	filtersDialogTabs,
	fromFiltersDialogValue,
	conditionsNormalizer,
	normalizeFiltersDialogValue,
	toFiltersDialogValue,
} from '../../ds-filters-bar.utils';
import { ConditionChips } from '../ds-filters-bar-condition-chips';
import {
	FiltersDialog,
	type DsFiltersBarFiltersDialogTab,
	type DsFiltersBarFiltersDialogValue,
} from '../ds-filters-bar-filters-dialog';
import type { DsFilterOption, DsFiltersBarConditionsSlotProps } from '../../ds-filters-bar.types';

const EMPTY_DRAFT: DsFiltersBarFiltersDialogValue = Object.freeze([]);

/**
 * Filters view: the add-filter button with its filters dialog, and one chip per condition. A field
 * chip switches its operator in place, and opens the filters dialog on its field's tab. Renders
 * nothing while an Advanced query is the source.
 *
 * Owns the dialog draft: seeded from the filter document on open, passed through the host's
 * `normalizeDraft` on every change, written back only on Save, and dropped on any other close.
 */
export const Conditions = ({ ref, className, style }: DsFiltersBarConditionsSlotProps) => {
	const { fields, document, conditions, query, pins, locale, normalizeDraft, setConditions, setPins } =
		useDsFiltersBarContext();

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

	const draftDocument = {
		...document,
		conditions: fromFiltersDialogValue(fields, conditions, pins, draft).conditions,
	};

	const isOptionDisabled = (tab: DsFiltersBarFiltersDialogTab, option: DsFilterOption) =>
		tab.schema.type === 'enum' && !!tab.schema.isOptionDisabled?.(option, draftDocument);

	const handleSave = (value: DsFiltersBarFiltersDialogValue) => {
		const next = fromFiltersDialogValue(fields, conditions, pins, value);

		setConditions(conditionsNormalizer(document, normalizeDraft)(next.conditions));
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
				isOptionDisabled={isOptionDisabled}
				locale={locale.conditions}
				onOpenChange={setOpen}
				onChange={(_changed, value) =>
					setDraft(
						normalizeFiltersDialogValue(
							fields,
							conditions,
							pins,
							value,
							conditionsNormalizer(document, normalizeDraft),
						),
					)
				}
				onSave={handleSave}
			/>
		</ConditionChips>
	);
};
