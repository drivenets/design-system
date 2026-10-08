import { createContext, useContext, type RefObject } from 'react';
import type {
	DsFilterCondition,
	DsFilterDocument,
	DsFilterPin,
	DsFilterResolvedField,
	DsFiltersBarResolvedLocale,
	DsFiltersBarSavedFilter,
	DsFiltersBarSavedFiltersConfig,
	DsFiltersBarView,
} from './ds-filters-bar.types';

/**
 * What the mounted `Search` lets other parts do with its pending text
 */
export interface DsFiltersBarSearchHandle {
	/**
	 * Replaces the pending text and focuses the input
	 */
	edit: (text: string) => void;
	focus: () => void;
}

/**
 * The contract every part builds on. Parts read the root-owned state from here and write it back
 * through these actions only, so all views stay one source of truth.
 */
export interface DsFiltersBarContextValue {
	/**
	 * The **Field schema** with built-in operators and presets filled in and worded by the locale
	 */
	fields: ReadonlyArray<DsFilterResolvedField>;
	/**
	 * Whether there is any field to add a condition on. A search-only bar shows no add button.
	 */
	canAdd: boolean;
	document: DsFilterDocument;
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
	 * Switched-on toggles whose pin still exists, on a field `fields` has
	 */
	activeToggles: ReadonlyArray<DsFilterPin>;
	/**
	 * No conditions and no edited query
	 */
	isEmpty: boolean;
	lockedViews: ReadonlyArray<DsFiltersBarView>;
	expanded: boolean;
	/**
	 * The view shown: `advanced` while an Advanced query is the source
	 */
	view: DsFiltersBarView;
	/**
	 * Views the view switch offers, in Figma order
	 */
	views: ReadonlyArray<DsFiltersBarView>;
	/**
	 * Id of the expanded toolbar, referenced by the disclosure button's `aria-controls`
	 */
	toolbarId: string;
	locale: DsFiltersBarResolvedLocale;
	savedFilters: DsFiltersBarSavedFiltersConfig | undefined;
	activeSavedFilterId: string | null;
	/**
	 * The item `activeSavedFilterId` names, while it is still among the items
	 */
	activeSavedFilter: DsFiltersBarSavedFilter | undefined;
	resultCount: number | undefined;
	getPinCount: ((pin: DsFilterPin) => number) | undefined;
	/**
	 * Replaces the whole document and reports it once
	 */
	setDocument: (document: DsFilterDocument) => void;
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
	/**
	 * Also switches off the toggles of removed pins
	 */
	setPins: (pins: ReadonlyArray<DsFilterPin>) => void;
	setActiveToggles: (activeToggles: ReadonlyArray<DsFilterPin>) => void;
	setActiveSavedFilterId: (id: string | null) => void;
	/**
	 * Empties the document. Pins, toggles and the active saved filter stay.
	 */
	clear: () => void;
	setExpanded: (expanded: boolean) => void;
	setView: (view: DsFiltersBarView) => void;
	/**
	 * The mounted `Search`, or `null` before it mounts
	 */
	search: DsFiltersBarSearchHandle | null;
	registerSearch: (search: DsFiltersBarSearchHandle | null) => void;
	/**
	 * The disclosure button, where focus falls back to when the search cannot take it
	 */
	disclosureRef: RefObject<HTMLButtonElement | null>;
}

export const DsFiltersBarContext = createContext<DsFiltersBarContextValue | null>(null);

export const useDsFiltersBarContext = () => {
	const context = useContext(DsFiltersBarContext);

	if (!context) {
		throw new Error('DsFiltersBar parts must be rendered by DsFiltersBar');
	}

	return context;
};
