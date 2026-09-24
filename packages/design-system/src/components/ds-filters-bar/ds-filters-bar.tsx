import { useId } from 'react';
import { useControlled } from '../../utils/use-controlled';
import {
	Builder,
	ClearAll,
	Conditions,
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
import { DsFiltersBarContext } from './ds-filters-bar.context';
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

const EMPTY_FIELDS = Object.freeze([]);
const EMPTY_CONDITIONS: ReadonlyArray<DsFilterCondition> = Object.freeze([]);
const EMPTY_PINS: ReadonlyArray<DsFilterPin> = Object.freeze([]);
const formatNothing = () => '';

// TODO: render. Root only provides the context and every part returns null.
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
	formatQuery = formatNothing,
	locale,
	children,
	onConditionsChange,
	onQueryChange,
	onPinsChange,
	onExpandedChange,
	onViewChange,
}: DsFiltersBarRootProps) => {
	const [conditions, setConditions] = useControlled(conditionsProp, onConditionsChange, defaultConditions);
	const [query, setQuery] = useControlled<string | null>(queryProp, onQueryChange, defaultQuery);
	const [pins, setPins] = useControlled(pinsProp, onPinsChange, defaultPins);
	const [expanded, setExpanded] = useControlled(expandedProp, onExpandedChange, defaultExpanded);
	const [view, setView] = useControlled<DsFiltersBarView>(viewProp, onViewChange, defaultView);
	const toolbarId = useId();

	return (
		<DsFiltersBarContext.Provider
			value={{
				fields,
				conditions,
				query,
				queryText: query ?? formatQuery(conditions, fields),
				pins,
				isEmpty: query === null && conditions.length === 0,
				lockedViews: lockedViewsFor(query),
				expanded,
				view,
				toolbarId,
				locale: { ...defaultDsFiltersBarLocale, ...locale },
				setConditions,
				addCondition: (condition) => setConditions(appendCondition(conditions, condition)),
				updateCondition: (condition) => setConditions(replaceCondition(conditions, condition)),
				removeCondition: (id) => setConditions(removeConditionById(conditions, id)),
				setQuery: (next) => setQuery(normalizeQuery(next)),
				setPins,
				clear: () => {
					setConditions(EMPTY_CONDITIONS);
					setQuery(null);
				},
				setExpanded,
				setView,
			}}
		>
			{children}
		</DsFiltersBarContext.Provider>
	);
};

Root.displayName = 'DsFiltersBar.Root';

export const DsFiltersBar = {
	Root,
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
