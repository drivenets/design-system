import { createContext, useContext } from 'react';
import type {
	DsFilterCondition,
	DsFilterField,
	DsFilterPin,
	DsFiltersBarLocale,
	DsFiltersBarView,
} from './ds-filters-bar.types';

/**
 * The contract every part builds on. View parts read the filter document from here and write it
 * back through these actions only, so all views stay one source of truth.
 */
export interface DsFiltersBarContextValue {
	fields: ReadonlyArray<DsFilterField>;
	conditions: ReadonlyArray<DsFilterCondition>;
	/**
	 * Edited advanced query, or `null` while the conditions are the source
	 */
	query: string | null;
	/**
	 * What the advanced view shows: the edited query, or the consumer's rendering of the conditions
	 */
	queryText: string;
	pins: ReadonlyArray<DsFilterPin>;
	/**
	 * No conditions and no edited query
	 */
	isEmpty: boolean;
	lockedViews: ReadonlyArray<DsFiltersBarView>;
	expanded: boolean;
	view: DsFiltersBarView;
	/**
	 * Id of the expanded toolbar, referenced by the disclosure button's `aria-controls`
	 */
	toolbarId: string;
	locale: Required<DsFiltersBarLocale>;
	setConditions: (conditions: ReadonlyArray<DsFilterCondition>) => void;
	addCondition: (condition: DsFilterCondition) => void;
	/**
	 * Replaces the condition with the same `id`
	 */
	updateCondition: (condition: DsFilterCondition) => void;
	removeCondition: (id: string) => void;
	/**
	 * Setting text makes the query the source; blank text or `null` hands control back to the
	 * conditions.
	 */
	setQuery: (query: string | null) => void;
	setPins: (pins: ReadonlyArray<DsFilterPin>) => void;
	/**
	 * Empties the conditions and drops the edited query. Pins stay.
	 */
	clear: () => void;
	setExpanded: (expanded: boolean) => void;
	setView: (view: DsFiltersBarView) => void;
}

export const DsFiltersBarContext = createContext<DsFiltersBarContextValue | null>(null);

export const useDsFiltersBarContext = () => {
	const context = useContext(DsFiltersBarContext);

	if (!context) {
		throw new Error('DsFiltersBar compound components must be used within DsFiltersBar.Root');
	}

	return context;
};
