import type { CSSProperties } from 'react';
import type { DsFilterOperator } from '../../ds-filters-bar.types';
import type { DsFiltersBarFiltersDialogLocale } from '../ds-filters-bar-filters-dialog';

export interface DsFiltersBarConditionsLocale {
	/**
	 * Accessible name of the icon-only button that opens the filters dialog
	 */
	addFilter?: string;
	/**
	 * Accessible name of a chip's remove button. Receives the whole condition in words, for example
	 * `Status not equals Active`, or the text of a search.
	 */
	removeCondition?: (condition: string) => string;
	/**
	 * Accessible name of a chip's operator menu button. Receives the field label, or the field and
	 * subfield labels for a compound field.
	 */
	operator?: (fieldLabel: string) => string;
	/**
	 * Operator menu item text, as in `≠ (not equals)`
	 */
	operatorOption?: (operator: DsFilterOperator) => string;
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
	removeCondition: (condition: string) => `Remove filter: ${condition}`,
	operator: (fieldLabel: string) => `${fieldLabel} operator`,
	operatorOption: (operator: DsFilterOperator) => `${operator.symbol ?? operator.value} (${operator.label})`,
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
