import type { CSSProperties } from 'react';
import {
	defaultDsFiltersBarConditionChipsLocale,
	type DsFiltersBarConditionChipsLocale,
} from '../ds-filters-bar-condition-chips';
import type { DsFiltersBarFiltersDialogLocale } from '../ds-filters-bar-filters-dialog';

/**
 * `addFilter` and the chip strings are shared with the builder view's locale.
 */
export interface DsFiltersBarConditionsLocale extends DsFiltersBarConditionChipsLocale {
	filtersDialogTitle?: string;
	saveFilters?: string;
	/**
	 * The filters dialog's other strings. Its title and save button come from `filtersDialogTitle`
	 * and `saveFilters`.
	 */
	filtersDialog?: Omit<DsFiltersBarFiltersDialogLocale, 'title' | 'save'>;
}

export const defaultDsFiltersBarConditionsLocale: Required<DsFiltersBarConditionsLocale> = Object.freeze({
	...defaultDsFiltersBarConditionChipsLocale,
	filtersDialogTitle: 'Filters',
	saveFilters: 'Save filters',
	filtersDialog: Object.freeze({}),
});

/**
 * Filters view: the add-filter button with its filters dialog, and one chip per condition. A field
 * chip switches its operator in place, and opens the filters dialog on its field's tab. Renders
 * nothing while an Advanced query is the source.
 */
export interface DsFiltersBarConditionsProps {
	locale?: DsFiltersBarConditionsLocale;
	className?: string;
	style?: CSSProperties;
}
