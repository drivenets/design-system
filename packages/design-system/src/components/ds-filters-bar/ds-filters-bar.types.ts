import type { CSSProperties, ReactNode, Ref } from 'react';
import type { DsSavedFiltersSaveProps, DsSavedFiltersTriggerProps } from '../ds-saved-filters';

export interface DsFilterOperator {
	/**
	 * Stable id stored on the condition, for example `!=`
	 */
	value: string;
	/**
	 * Words for the summary line and menus, for example `not equals`
	 */
	label: string;
	/**
	 * Compact form for chips, for example `≠`. Falls back to `label`.
	 */
	symbol?: string;
}

export interface DsFilterOption {
	value: string;
	label: string;
}

interface DsFilterFieldBase {
	id: string;
	label: string;
}

/**
 * Picked from a fixed list of options, possibly several at once
 */
export interface DsFilterEnumField extends DsFilterFieldBase {
	type: 'enum';
	operators: ReadonlyArray<DsFilterOperator>;
	options: ReadonlyArray<DsFilterOption>;
}

export interface DsFilterTextField extends DsFilterFieldBase {
	type: 'text';
	operators: ReadonlyArray<DsFilterOperator>;
}

export interface DsFilterNumberField extends DsFilterFieldBase {
	type: 'number';
	operators: ReadonlyArray<DsFilterOperator>;
}

/**
 * Filtered by a named preset such as "Today", or by a range of ISO 8601 dates
 */
export interface DsFilterDateField extends DsFilterFieldBase {
	type: 'date';
	operators: ReadonlyArray<DsFilterOperator>;
	/**
	 * @default []
	 */
	presets?: ReadonlyArray<DsFilterOption>;
}

/**
 * An object with named parts, for example Input › Name / Vendor / Version. A condition on it names
 * one subfield.
 */
export interface DsFilterCompoundField extends DsFilterFieldBase {
	type: 'compound';
	subfields: ReadonlyArray<DsFilterScalarField>;
}

export type DsFilterScalarField =
	| DsFilterEnumField
	| DsFilterTextField
	| DsFilterNumberField
	| DsFilterDateField;
export type DsFilterField = DsFilterScalarField | DsFilterCompoundField;

/**
 * Inclusive range. `null` leaves that side open.
 */
export interface DsFilterRange<T> {
	from: T | null;
	to: T | null;
}

/**
 * The value shape depends on the field type:
 * - enum: option values, always an array, even for one
 * - text: a string
 * - number: a number, or a range
 * - date: a preset value, or a range of ISO 8601 dates
 */
export type DsFilterValue =
	| ReadonlyArray<string>
	| string
	| number
	| DsFilterRange<number>
	| DsFilterRange<string>;

export interface DsFilterSearchCondition {
	kind: 'search';
	id: string;
	text: string;
}

export interface DsFilterFieldCondition {
	kind: 'field';
	id: string;
	/**
	 * `DsFilterField.id`
	 */
	field: string;
	/**
	 * Subfield id. Required when `field` is a compound field, absent otherwise.
	 */
	subfield?: string;
	/**
	 * `DsFilterOperator.value`
	 */
	operator: string;
	value: DsFilterValue;
}

/**
 * One **Filter condition**: produced by any view, rendered by any view
 */
export type DsFilterCondition = DsFilterSearchCondition | DsFilterFieldCondition;

/**
 * A field option the user pinned for quick access in the pinned row. A user preference, not part
 * of the filter document: loading a saved filter or clearing leaves pins alone.
 */
export interface DsFilterPin {
	field: string;
	value: string;
}

export const filtersBarViews = ['filters', 'builder', 'advanced'] as const;
export type DsFiltersBarView = (typeof filtersBarViews)[number];

export interface DsFiltersBarLocale {
	/**
	 * Accessible name of the region that holds the bar
	 */
	label?: string;
	/**
	 * Accessible name of the disclosure button while collapsed
	 */
	expand?: string;
	/**
	 * Accessible name of the disclosure button while expanded
	 */
	collapse?: string;
}

export const defaultDsFiltersBarLocale: Required<DsFiltersBarLocale> = Object.freeze({
	label: 'Filters',
	expand: 'Show filters',
	collapse: 'Hide filters',
});

export interface DsFiltersBarRootProps {
	/**
	 * What can be filtered. Omit for a search-only bar.
	 * @default []
	 */
	fields?: ReadonlyArray<DsFilterField>;
	/**
	 * Current conditions. Pair with `onConditionsChange`.
	 */
	conditions?: ReadonlyArray<DsFilterCondition>;
	/**
	 * @default []
	 */
	defaultConditions?: ReadonlyArray<DsFilterCondition>;
	/**
	 * Edited advanced query, or `null` while the conditions are the source. While set, it alone
	 * filters the data, the conditions are ignored, and the filters and builder views lock. The bar
	 * never parses it. Pair with `onQueryChange`.
	 */
	query?: string | null;
	/**
	 * @default null
	 */
	defaultQuery?: string | null;
	/**
	 * Pinned field options. Pair with `onPinsChange`.
	 */
	pins?: ReadonlyArray<DsFilterPin>;
	/**
	 * @default []
	 */
	defaultPins?: ReadonlyArray<DsFilterPin>;
	/**
	 * Whether the full toolbar is shown. Collapsed shows the one-line summary. Pair with
	 * `onExpandedChange`.
	 */
	expanded?: boolean;
	/**
	 * @default false
	 */
	defaultExpanded?: boolean;
	/**
	 * Active view. Pair with `onViewChange`.
	 */
	view?: DsFiltersBarView;
	/**
	 * @default 'filters'
	 */
	defaultView?: DsFiltersBarView;
	/**
	 * Renders the conditions as query text, shown by the advanced view while `query` is `null`. The
	 * query language belongs to the consumer.
	 * @default () => ''
	 */
	formatQuery?: (
		conditions: ReadonlyArray<DsFilterCondition>,
		fields: ReadonlyArray<DsFilterField>,
	) => string;
	locale?: DsFiltersBarLocale;
	ref?: Ref<HTMLDivElement>;
	className?: string;
	style?: CSSProperties;
	children: ReactNode;
	onConditionsChange?: (conditions: ReadonlyArray<DsFilterCondition>) => void;
	onQueryChange?: (query: string | null) => void;
	onPinsChange?: (pins: ReadonlyArray<DsFilterPin>) => void;
	onExpandedChange?: (expanded: boolean) => void;
	onViewChange?: (view: DsFiltersBarView) => void;
}

export interface DsFiltersBarSummaryLocale {
	/**
	 * Announced result count. Receives the count.
	 */
	resultCount?: (count: number) => string;
	/**
	 * Label shown before `activeSavedFilterName`
	 */
	activeSavedFilter?: string;
	/**
	 * Label and value shown while there are no conditions, as in `View: All`
	 */
	emptyLabel?: string;
	emptyValue?: string;
}

export const defaultDsFiltersBarSummaryLocale: Required<DsFiltersBarSummaryLocale> = Object.freeze({
	resultCount: (count: number) => `${String(count)} results`,
	activeSavedFilter: 'Filter',
	emptyLabel: 'View',
	emptyValue: 'All',
});

/**
 * Collapsed row. Lists the conditions from the filter document; renders nothing while expanded.
 */
export interface DsFiltersBarSummaryProps {
	/**
	 * Number of results the current filters produce. Omit to hide the trailing count.
	 */
	count?: number;
	/**
	 * Name of the **Active saved filter**, shown before the conditions
	 */
	activeSavedFilterName?: string;
	locale?: DsFiltersBarSummaryLocale;
	className?: string;
	style?: CSSProperties;
}

/**
 * Expanded row. Renders nothing while collapsed.
 */
export interface DsFiltersBarToolbarProps {
	className?: string;
	style?: CSSProperties;
	children: ReactNode;
}

/**
 * Clearing the **Active saved filter** also clears the filter document before `onClear` runs.
 */
export type DsFiltersBarSavedFiltersProps = DsSavedFiltersTriggerProps;

export interface DsFiltersBarSaveFilterProps extends Omit<DsSavedFiltersSaveProps, 'disabled'> {
	/**
	 * Defaults to disabled while the filter document is empty
	 */
	disabled?: boolean;
}

export interface DsFiltersBarSearchLocale {
	label?: string;
	placeholder?: string;
}

export const defaultDsFiltersBarSearchLocale: Required<DsFiltersBarSearchLocale> = Object.freeze({
	label: 'Search',
	placeholder: 'Type ‘/’ to search',
});

/**
 * Free-text input. Enter adds the trimmed text as a search condition and clears the input; `/`
 * focuses it from anywhere outside an editable element.
 */
export interface DsFiltersBarSearchProps {
	/**
	 * Pending text, before it becomes a condition. Pair with `onValueChange`.
	 */
	value?: string;
	/**
	 * @default ''
	 */
	defaultValue?: string;
	/**
	 * @default false
	 */
	disabled?: boolean;
	locale?: DsFiltersBarSearchLocale;
	ref?: Ref<HTMLInputElement>;
	className?: string;
	style?: CSSProperties;
	onValueChange?: (value: string) => void;
}

export interface DsFiltersBarViewSwitchLocale {
	label?: string;
	/**
	 * Accessible names of the icon-only items
	 */
	views?: Partial<Record<DsFiltersBarView, string>>;
	/**
	 * Tooltip on a view locked by an edited advanced query
	 */
	lockedView?: string;
}

export const defaultDsFiltersBarViewSwitchLocale = Object.freeze({
	label: 'Filter view',
	views: Object.freeze({
		filters: 'Filters',
		builder: 'Query builder',
		advanced: 'Advanced query',
	}),
	lockedView: 'Clear the advanced query to switch views',
}) satisfies Required<DsFiltersBarViewSwitchLocale>;

/**
 * While an edited advanced query is the source, the filters and builder views are locked.
 */
export interface DsFiltersBarViewSwitchProps {
	locale?: DsFiltersBarViewSwitchLocale;
	className?: string;
	style?: CSSProperties;
}

export interface DsFiltersBarViewProps {
	/**
	 * Children render only while this view is active
	 */
	value: DsFiltersBarView;
	children: ReactNode;
}

export interface DsFiltersBarClearAllLocale {
	label?: string;
}

export const defaultDsFiltersBarClearAllLocale: Required<DsFiltersBarClearAllLocale> = Object.freeze({
	label: 'Clear all',
});

/**
 * Empties the conditions and drops the advanced query. Renders nothing while the filter document
 * is empty.
 */
export interface DsFiltersBarClearAllProps {
	locale?: DsFiltersBarClearAllLocale;
	ref?: Ref<HTMLButtonElement>;
	className?: string;
	style?: CSSProperties;
	/**
	 * Called after the document is cleared, for example to drop the **Active saved filter**
	 */
	onClick?: () => void;
}

export interface DsFiltersBarPinnedLocale {
	label?: string;
}

export const defaultDsFiltersBarPinnedLocale: Required<DsFiltersBarPinnedLocale> = Object.freeze({
	label: 'Pinned',
});

/**
 * Quick-toggle row, shown in both collapsed and expanded states. Toggles narrow the results the
 * conditions already produced; they never widen them.
 */
export interface DsFiltersBarPinnedProps {
	locale?: DsFiltersBarPinnedLocale;
	className?: string;
	style?: CSSProperties;
	/**
	 * `DsFiltersBar.PinnedGroup` elements
	 */
	children: ReactNode;
}

export interface DsFiltersBarPinnedGroupProps {
	/**
	 * Category name, also the accessible name of the group
	 */
	label: string;
	className?: string;
	style?: CSSProperties;
	/**
	 * `DsFiltersBar.PinnedToggle` elements
	 */
	children: ReactNode;
}

export interface DsFiltersBarPinnedToggleProps {
	label: string;
	/**
	 * Matches within the results the conditions already produced
	 */
	count: number;
	/**
	 * Controlled. Surfaced as `aria-pressed`.
	 */
	active: boolean;
	/**
	 * Defaults to disabled when `count` is 0
	 */
	disabled?: boolean;
	ref?: Ref<HTMLButtonElement>;
	className?: string;
	style?: CSSProperties;
	onActiveChange?: (active: boolean) => void;
}
