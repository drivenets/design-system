import classNames from 'classnames';
import { useId, useState } from 'react';
import {
	Builder,
	ClearAll,
	Conditions,
	Disclosure,
	Pinned,
	PinnedGroup,
	PinnedToggle,
	Query,
	SavedFilters,
	SaveFilter,
	Search,
	Summary,
	Toolbar,
	View,
	ViewSwitch,
} from './components';
import { DsFiltersBarContext, type DsFiltersBarSearchHandle } from './ds-filters-bar.context';
import styles from './ds-filters-bar.module.scss';
import {
	defaultDsFiltersBarLocale,
	type DsFilterCondition,
	type DsFilterPin,
	type DsFiltersBarRootProps,
	type DsFiltersBarView,
} from './ds-filters-bar.types';
import {
	appendCondition,
	lockedViewsFor,
	normalizeQuery,
	removeConditionById,
	replaceCondition,
} from './ds-filters-bar.utils';
import { serializeFilterQuery } from './query-language';
import { useReportedState } from './use-reported-state';

const EMPTY_FIELDS = Object.freeze([]);
const EMPTY_CONDITIONS: ReadonlyArray<DsFilterCondition> = Object.freeze([]);
const EMPTY_PINS: ReadonlyArray<DsFilterPin> = Object.freeze([]);

const Root = ({
	fields = EMPTY_FIELDS,
	conditions: conditionsProp,
	defaultConditions = EMPTY_CONDITIONS,
	query: queryProp,
	defaultQuery = null,
	pins: pinsProp,
	defaultPins = EMPTY_PINS,
	expanded: expandedProp,
	defaultExpanded = false,
	view: viewProp,
	defaultView = 'filters',
	locale: localeProp,
	ref,
	className,
	style,
	children,
	onConditionsChange,
	onQueryChange,
	onPinsChange,
	onExpandedChange,
	onViewChange,
}: DsFiltersBarRootProps) => {
	const [conditions, setConditions] = useReportedState(conditionsProp, onConditionsChange, defaultConditions);
	const [query, setQuery] = useReportedState<string | null>(queryProp, onQueryChange, defaultQuery);
	const [pins, setPins] = useReportedState(pinsProp, onPinsChange, defaultPins);
	const [expanded, setExpanded] = useReportedState(expandedProp, onExpandedChange, defaultExpanded);
	const [view, setView] = useReportedState<DsFiltersBarView>(viewProp, onViewChange, defaultView);
	const toolbarId = useId();
	const locale = { ...defaultDsFiltersBarLocale, ...localeProp };
	const [resetRevision, setResetRevision] = useState(0);
	const [search, registerSearch] = useState<DsFiltersBarSearchHandle | null>(null);

	return (
		<DsFiltersBarContext.Provider
			value={{
				fields,
				conditions,
				query,
				queryText: query ?? serializeFilterQuery(conditions),
				resetRevision,
				pins,
				isEmpty: query === null && conditions.length === 0,
				lockedViews: lockedViewsFor(query),
				expanded,
				view,
				toolbarId,
				locale,
				setConditions,
				addCondition: (condition) => setConditions(appendCondition(conditions, condition)),
				updateCondition: (condition) => setConditions(replaceCondition(conditions, condition)),
				removeCondition: (id) => setConditions(removeConditionById(conditions, id)),
				setQuery: (next) => setQuery(normalizeQuery(next)),
				setPins,
				clear: () => {
					setResetRevision((revision) => revision + 1);
					setConditions(EMPTY_CONDITIONS);
					setQuery(null);
				},
				setExpanded,
				setView,
				search,
				registerSearch,
			}}
		>
			<div
				ref={ref}
				role="region"
				aria-label={locale.label}
				className={classNames(styles.root, className)}
				style={style}
			>
				{children}
			</div>
		</DsFiltersBarContext.Provider>
	);
};

Root.displayName = 'DsFiltersBar.Root';

export const DsFiltersBar = {
	Root,
	Disclosure,
	Summary,
	Toolbar,
	SavedFilters,
	SaveFilter,
	Search,
	ViewSwitch,
	View,
	Conditions,
	Builder,
	Query,
	ClearAll,
	Pinned,
	PinnedGroup,
	PinnedToggle,
};
