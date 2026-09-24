import type { CSSProperties } from 'react';

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
}

export const defaultDsFiltersBarConditionsLocale: Required<DsFiltersBarConditionsLocale> = Object.freeze({
	addFilter: 'Add filter',
	removeCondition: (label: string) => `Remove filter: ${label}`,
	filtersDialogTitle: 'Filters',
	saveFilters: 'Save filters',
});

/**
 * Filters view: the add-filter button with its filters dialog, and one chip per condition.
 */
export interface DsFiltersBarConditionsProps {
	locale?: DsFiltersBarConditionsLocale;
	className?: string;
	style?: CSSProperties;
}
