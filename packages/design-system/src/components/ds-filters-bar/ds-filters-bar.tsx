import classNames from 'classnames';
import { useId, useRef, useState } from 'react';
import {
	Builder,
	ClearAll,
	Conditions,
	Disclosure,
	Pinned,
	Query,
	SavedFilters,
	SaveFilter,
	Search,
	Summary,
	Toolbar,
	ViewSwitch,
} from './components';
import { DsFiltersBarContext, type DsFiltersBarSearchHandle } from './ds-filters-bar.context';
import styles from './ds-filters-bar.module.scss';
import {
	emptyFilterDocument,
	filtersBarViews,
	type DsFilterCondition,
	type DsFilterPin,
	type DsFiltersBarProps,
	type DsFiltersBarView,
} from './ds-filters-bar.types';
import {
	appendCondition,
	isEmptyDocument,
	keepPinned,
	lockedViewsFor,
	normalizeQuery,
	removeConditionById,
	replaceCondition,
	resolveLocale,
	shownViewFor,
} from './ds-filters-bar.utils';
import { toFilterDocument } from './filter-document';
import { serializeFilterQuery } from './query-language';
import { resolveFields } from './resolve-fields';
import { useReportedState } from './use-reported-state';

const EMPTY_FIELDS = Object.freeze([]);
const EMPTY_PINS: ReadonlyArray<DsFilterPin> = Object.freeze([]);
/**
 * With no fields there is nothing to build or query, so only the filters view shows: search and
 * search chips.
 */
const SEARCH_ONLY_VIEWS: ReadonlyArray<DsFiltersBarView> = Object.freeze(['filters']);

/**
 * @summary Filters a table or list by one **Filter document**: search, filter chips, a query
 * builder and an advanced query, with a pinned row of quick toggles and optional saved filters.
 */
export const DsFiltersBar = ({
	fields = EMPTY_FIELDS,
	value: valueProp,
	defaultValue,
	pins: pinsProp,
	defaultPins = EMPTY_PINS,
	activeToggles: activeTogglesProp,
	defaultActiveToggles = EMPTY_PINS,
	expanded: expandedProp,
	defaultExpanded = false,
	view: viewProp,
	defaultView = 'filters',
	views = filtersBarViews,
	savedFilters,
	resultCount,
	getPinCount,
	locale: localeProp,
	slotProps,
	ref,
	className,
	style,
	onValueChange,
	onPinsChange,
	onActiveTogglesChange,
	onExpandedChange,
	onViewChange,
}: DsFiltersBarProps) => {
	// With no document given, the Active saved filter the bar starts on brings its own.
	const initialDocument =
		defaultValue ??
		savedFilters?.items.find((item) => item.id === savedFilters.defaultActiveId)?.document ??
		emptyFilterDocument;
	const [value, setDocument] = useReportedState(
		valueProp && toFilterDocument(valueProp),
		onValueChange,
		toFilterDocument(initialDocument),
	);
	const [pins, setPinsState] = useReportedState(pinsProp, onPinsChange, defaultPins);
	const [toggles, setActiveToggles] = useReportedState(
		activeTogglesProp,
		onActiveTogglesChange,
		defaultActiveToggles,
	);
	const [expanded, setExpanded] = useReportedState(expandedProp, onExpandedChange, defaultExpanded);
	const [requestedView, setView] = useReportedState<DsFiltersBarView>(viewProp, onViewChange, defaultView);
	const [activeSavedFilterId, setActiveSavedFilterId] = useReportedState<string | null>(
		savedFilters?.activeId,
		savedFilters?.onActiveIdChange,
		savedFilters?.defaultActiveId ?? null,
	);
	const [resetRevision, setResetRevision] = useState(0);
	const [search, registerSearch] = useState<DsFiltersBarSearchHandle | null>(null);
	const disclosureRef = useRef<HTMLButtonElement>(null);
	const toolbarId = useId();

	const { conditions, query } = value;
	const activeSavedFilter = savedFilters?.items.find((item) => item.id === activeSavedFilterId);
	const locale = resolveLocale(localeProp);
	const resolvedFields = resolveFields(fields, locale);
	// Toggles of options that are no longer pinned, or whose field is gone, no longer apply.
	const activeToggles = keepPinned(toggles, pins, resolvedFields);
	const canAdd = resolvedFields.length > 0;
	const shownViews = canAdd ? views : SEARCH_ONLY_VIEWS;
	const switchViews = filtersBarViews.filter((item) => shownViews.includes(item));
	// Derived, not reported: the asked-for view shows again once the query is cleared.
	const view = shownViewFor(query, requestedView, shownViews);

	const setConditions = (next: ReadonlyArray<DsFilterCondition>) => setDocument({ conditions: next, query });

	const setPins = (next: ReadonlyArray<DsFilterPin>) => {
		setPinsState(next);

		const kept = keepPinned(activeToggles, next, resolvedFields);

		if (kept.length < activeToggles.length) {
			setActiveToggles(kept);
		}
	};

	const clear = () => {
		setResetRevision((revision) => revision + 1);
		setDocument(emptyFilterDocument);
	};

	return (
		<DsFiltersBarContext.Provider
			value={{
				fields: resolvedFields,
				canAdd,
				document: value,
				conditions,
				query,
				queryText: query ?? serializeFilterQuery(conditions),
				resetRevision,
				pins,
				activeToggles,
				isEmpty: isEmptyDocument(value),
				lockedViews: lockedViewsFor(query),
				expanded,
				view,
				views: switchViews,
				toolbarId,
				locale,
				savedFilters,
				activeSavedFilterId,
				activeSavedFilter,
				resultCount,
				getPinCount,
				setDocument,
				setConditions,
				addCondition: (condition) => setConditions(appendCondition(conditions, condition)),
				updateCondition: (condition) => setConditions(replaceCondition(conditions, condition)),
				removeCondition: (id) => setConditions(removeConditionById(conditions, id)),
				setQuery: (next) => setDocument({ conditions, query: normalizeQuery(next) }),
				setPins,
				setActiveToggles,
				setActiveSavedFilterId,
				clear,
				setExpanded,
				setView,
				search,
				registerSearch,
				disclosureRef,
			}}
		>
			<div
				ref={ref}
				role="region"
				aria-label={locale.label}
				className={classNames(styles.root, className)}
				style={style}
			>
				<Disclosure {...slotProps?.disclosure} />

				{expanded ? (
					<Toolbar {...slotProps?.toolbar}>
						{savedFilters && <SavedFilters {...slotProps?.savedFilters} />}
						<Search {...slotProps?.search} />
						{switchViews.length > 1 && <ViewSwitch {...slotProps?.viewSwitch} />}
						{view === 'filters' && <Conditions {...slotProps?.conditions} />}
						{view === 'builder' && <Builder {...slotProps?.builder} />}
						{view === 'advanced' && <Query {...slotProps?.query} />}
						{savedFilters && <SaveFilter {...slotProps?.saveFilter} />}
						<ClearAll {...slotProps?.clearAll} />
					</Toolbar>
				) : (
					<Summary {...slotProps?.summary} />
				)}

				<Pinned {...slotProps?.pinned} />
			</div>
		</DsFiltersBarContext.Provider>
	);
};

DsFiltersBar.displayName = 'DsFiltersBar';
