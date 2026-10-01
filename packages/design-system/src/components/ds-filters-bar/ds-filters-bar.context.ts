import { createContext, useContext } from 'react';
import type {
	DsFilterCondition,
	DsFilterField,
	DsFilterPin,
	DsFiltersBarLocale,
	DsFiltersBarView,
} from './ds-filters-bar.types';

/**
 * What a mounted `Search` lets other parts do with its pending text
 */
export interface DsFiltersBarSearchHandle {
	/**
	 * Replaces the pending text and focuses the input
	 */
	edit: (text: string) => void;
}

/**
 * The contract every part builds on. View parts read the filter document from here and write it
 * back through these actions only, so all views stay one source of truth.
 */
export interface DsFiltersBarContextValue {
	fields: ReadonlyArray<DsFilterField>;
	conditions: ReadonlyArray<DsFilterCondition>;
	/**
	 * Advanced query, or `null` while the conditions are the source
	 */
	query: string | null;
	/**
	 * What the advanced view shows: the query, or the conditions written in the query language
	 */
	queryText: string;
	/**
	 * Changes on every explicit clear, even when the document is already empty
	 */
	resetRevision: number;
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
	/**
	 * The mounted `Search`, or `null` when the bar has none
	 */
	search: DsFiltersBarSearchHandle | null;
	registerSearch: (search: DsFiltersBarSearchHandle | null) => void;
}

export const DsFiltersBarContext = createContext<DsFiltersBarContextValue | null>(null);

export const useDsFiltersBarContext = () => {
	const context = useContext(DsFiltersBarContext);

	if (!context) {
		throw new Error('DsFiltersBar compound components must be used within DsFiltersBar.Root');
	}

	return context;
};
