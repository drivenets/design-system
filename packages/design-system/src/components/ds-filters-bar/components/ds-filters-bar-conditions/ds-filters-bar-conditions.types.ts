import type { CSSProperties } from 'react';
import type { DsFiltersBarFiltersDialogLocale } from '../ds-filters-bar-filters-dialog';

export interface DsFiltersBarConditionsLocale {
	/**
	 * Accessible name of the icon-only button that opens the filters dialog
	 */
	addFilter?: string;
	/**
	 * Accessible name of a chip's remove button. Receives the chip's field label.
	 */
	removeCondition?: (label: string) => string;
	filtersDialogTitle?: string;
	saveFilters?: string;
	/**
	 * The filters dialog's other strings. Its title and save button come from `filtersDialogTitle`
	 * and `saveFilters`.
	 */
	filtersDialog?: Omit<DsFiltersBarFiltersDialogLocale, 'title' | 'save'>;
}

export const defaultDsFiltersBarConditionsLocale: Required<DsFiltersBarConditionsLocale> = Object.freeze({
	addFilter: 'Add filter',
	removeCondition: (label: string) => `Remove filter: ${label}`,
	filtersDialogTitle: 'Filters',
	saveFilters: 'Save filters',
	filtersDialog: Object.freeze({}),
});

/**
 * Filters view: the add-filter button with its filters dialog, and one chip per condition.
 */
export interface DsFiltersBarConditionsProps {
	locale?: DsFiltersBarConditionsLocale;
	className?: string;
	style?: CSSProperties;
}
