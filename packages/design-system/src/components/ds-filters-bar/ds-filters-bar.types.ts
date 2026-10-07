import type { CSSProperties, ReactNode, Ref } from 'react';
import { defaultDsSavedFiltersLocale, type DsSavedFiltersLocale } from '../ds-saved-filters';
import {
	defaultDsFiltersBarBuilderLocale,
	type DsFiltersBarBuilderLocale,
} from './components/ds-filters-bar-builder/ds-filters-bar-builder.types';
import {
	defaultDsFiltersBarConditionChipsLocale,
	type DsFiltersBarConditionChipsLocale,
} from './components/ds-filters-bar-condition-chips/ds-filters-bar-condition-chips.types';
import {
	defaultDsFiltersBarFiltersDialogLocale,
	type DsFiltersBarFiltersDialogLocale,
} from './components/ds-filters-bar-filters-dialog/ds-filters-bar-filters-dialog.types';
import {
	defaultDsFiltersBarQueryLocale,
	type DsFiltersBarQueryLocale,
} from './components/ds-filters-bar-query/ds-filters-bar-query.types';
import type { DsFilterQueryErrorCode } from './query-language/query-language.types';

export const filterOperatorValues = ['=', '!=', '>', '>=', '<', '<=', 'IN', 'NOT IN', '~', '!~'] as const;
export type DsFilterOperatorValue = (typeof filterOperatorValues)[number];

export const enumFilterOperators = ['=', '!=', 'IN', 'NOT IN'] as const;
export type DsFilterEnumOperator = (typeof enumFilterOperators)[number];

export const textFilterOperators = ['=', '!=', '~', '!~'] as const;
export type DsFilterTextOperator = (typeof textFilterOperators)[number];

/**
 * Shared by number and date fields
 */
export const comparisonFilterOperators = ['=', '!=', '>', '>=', '<', '<='] as const;
export type DsFilterComparisonOperator = (typeof comparisonFilterOperators)[number];

export interface DsFilterOperator<TValue extends DsFilterOperatorValue = DsFilterOperatorValue> {
	/**
	 * Query language token stored on the condition, for example `!=`
	 */
	value: TValue;
	/**
	 * Words for the summary line and menus, for example `not equals`. Overrides
	 * `locale.operators` for this field only.
	 */
	label?: string;
	/**
	 * Compact form for chips and operator menus, for example `≠`. Overrides `locale.operators` for
	 * this field only.
	 */
	symbol?: string;
}

/**
 * Operators a field offers: plain values take their words from `locale.operators`, objects also set
 * them for this field only
 */
export type DsFilterOperators<TValue extends DsFilterOperatorValue> = ReadonlyArray<
	TValue | DsFilterOperator<TValue>
>;

export interface DsFilterOption {
	value: string;
	label: string;
}

export const dateFilterPresets = [
	'today',
	'yesterday',
	'last7Days',
	'last30Days',
	'last90Days',
	'thisMonth',
	'lastMonth',
	'thisYear',
] as const;
/**
 * A built-in date preset. The row matcher resolves each to UTC calendar days: `lastNDays` ends
 * today and includes it, `thisMonth` and `thisYear` run up to today.
 */
export type DsFilterDatePresetValue = (typeof dateFilterPresets)[number];

interface DsFilterFieldBase {
	id: string;
	label: string;
}

/**
 * Picked from a fixed list of options, possibly several at once
 */
export interface DsFilterEnumField extends DsFilterFieldBase {
	type: 'enum';
	/**
	 * @default enumFilterOperators
	 */
	operators?: DsFilterOperators<DsFilterEnumOperator>;
	options: ReadonlyArray<DsFilterOption>;
}

export interface DsFilterTextField extends DsFilterFieldBase {
	type: 'text';
	/**
	 * @default textFilterOperators
	 */
	operators?: DsFilterOperators<DsFilterTextOperator>;
}

export interface DsFilterNumberField extends DsFilterFieldBase {
	type: 'number';
	/**
	 * @default comparisonFilterOperators
	 */
	operators?: DsFilterOperators<DsFilterComparisonOperator>;
}

/**
 * Filtered by a named preset such as "Today", or by a range of ISO 8601 dates
 */
export interface DsFilterDateField extends DsFilterFieldBase {
	type: 'date';
	/**
	 * @default comparisonFilterOperators
	 */
	operators?: DsFilterOperators<DsFilterComparisonOperator>;
	/**
	 * A built-in preset by value, labeled from `locale.datePresets`, or a custom preset with its own
	 * label. The row matcher resolves built-in values itself; custom ones need `resolveDatePreset`.
	 * @default []
	 */
	presets?: ReadonlyArray<DsFilterDatePresetValue | DsFilterOption>;
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
 * An operator with its words filled in, from the field, `locale.operators` or the defaults
 */
export type DsFilterResolvedOperator<TValue extends DsFilterOperatorValue = DsFilterOperatorValue> = Required<
	DsFilterOperator<TValue>
>;

type Resolved<TField extends DsFilterScalarField, TValue extends DsFilterOperatorValue> = Omit<
	TField,
	'operators'
> & {
	operators: ReadonlyArray<DsFilterResolvedOperator<TValue>>;
};

/**
 * Internal: a field with every operator and preset spelled out, as the bar's parts read it
 */
export type DsFilterResolvedScalarField =
	| Resolved<DsFilterEnumField, DsFilterEnumOperator>
	| Resolved<DsFilterTextField, DsFilterTextOperator>
	| Resolved<DsFilterNumberField, DsFilterComparisonOperator>
	| (Omit<Resolved<DsFilterDateField, DsFilterComparisonOperator>, 'presets'> & {
			presets: ReadonlyArray<DsFilterOption>;
	  });

export type DsFilterResolvedCompoundField = Omit<DsFilterCompoundField, 'subfields'> & {
	subfields: ReadonlyArray<DsFilterResolvedScalarField>;
};

export type DsFilterResolvedField = DsFilterResolvedScalarField | DsFilterResolvedCompoundField;

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
 * - date: a preset value, an ISO 8601 date, or a range of ISO 8601 dates
 *
 * A range only goes with the `=` operator, meaning "within", both ends included.
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
	 * `DsFilterOperator.value`. Must be `=` when `value` is a range.
	 */
	operator: DsFilterOperatorValue;
	value: DsFilterValue;
}

/**
 * One **Filter condition**: produced by any view, rendered by any view
 */
export type DsFilterCondition = DsFilterSearchCondition | DsFilterFieldCondition;

/**
 * The **Filter document**: what the bar filters by. `query` is `null` while the conditions are the
 * source; while set, it alone filters and the conditions are ignored.
 */
export interface DsFilterDocument {
	conditions: ReadonlyArray<DsFilterCondition>;
	/**
	 * Advanced query: a valid query the conditions cannot hold (one with `OR` or parentheses)
	 */
	query: string | null;
}

export interface DsFilterSearchConditionInput extends Omit<DsFilterSearchCondition, 'id'> {
	id?: string;
}

export interface DsFilterFieldConditionInput extends Omit<DsFilterFieldCondition, 'id'> {
	id?: string;
}

/**
 * A **Filter condition** whose `id` may be left out
 */
export type DsFilterConditionInput = DsFilterSearchConditionInput | DsFilterFieldConditionInput;

/**
 * A **Filter document** as written by hand. A condition without an `id` gets one from its
 * position, so the same input always gets the same ids. Whatever the bar reports is a full
 * `DsFilterDocument`.
 */
export interface DsFilterDocumentInput {
	/**
	 * @default []
	 */
	conditions?: ReadonlyArray<DsFilterConditionInput>;
	/**
	 * @default null
	 */
	query?: string | null;
}

export const emptyFilterDocument: DsFilterDocument = Object.freeze({
	conditions: Object.freeze([]),
	query: null,
});

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

export interface DsFiltersBarSummaryLocale {
	/**
	 * Announced result count. Receives the count.
	 */
	resultCount?: (count: number) => string;
	/**
	 * Label shown before the name of the **Active saved filter**
	 */
	activeSavedFilter?: string;
	/**
	 * Label and value shown while there are no conditions, as in `View: All`
	 */
	emptyLabel?: string;
	emptyValue?: string;
	/**
	 * Label shown before the text of a search condition, as in `Search: AAA`
	 */
	search?: string;
	/**
	 * Shown in place of the conditions while an Advanced query is the source
	 */
	advancedQuery?: string;
}

export interface DsFiltersBarSearchLocale {
	label?: string;
	placeholder?: string;
	/**
	 * Accessible name of the button that clears the pending text
	 */
	clear?: string;
}

export interface DsFiltersBarViewSwitchLocale {
	label?: string;
	/**
	 * Accessible names of the icon-only items
	 */
	views?: Partial<Record<DsFiltersBarView, string>>;
	/**
	 * Tooltip and accessible description of a view locked by an edited advanced query
	 */
	lockedView?: string;
}

export type { DsFiltersBarBuilderLocale, DsFiltersBarQueryLocale };

/**
 * Strings of the filters dialog that the filters view opens
 */
export type DsFiltersBarConditionsLocale = DsFiltersBarFiltersDialogLocale;

/**
 * Strings of the add button and the condition chips, shared by the filters and builder views
 */
export type DsFiltersBarChipsLocale = DsFiltersBarConditionChipsLocale;

/**
 * Strings of the saved-filters picker and the save button
 */
export type DsFiltersBarSavedFiltersLocale = DsSavedFiltersLocale;

export interface DsFiltersBarClearAllLocale {
	label?: string;
}

export interface DsFiltersBarPinnedLocale {
	label?: string;
}

/**
 * Words for one operator
 */
export interface DsFilterOperatorLocale {
	/**
	 * For the summary line and menus, for example `not equals`
	 */
	label?: string;
	/**
	 * For chips and operator menus, for example `≠`
	 */
	symbol?: string;
}

/**
 * Operator words by field type, since one token reads differently per type: `>` is `greater than`
 * on a number and `after` on a date. An operator object on a field overrides these for that field.
 */
export interface DsFiltersBarOperatorsLocale {
	text?: Partial<Record<DsFilterTextOperator, DsFilterOperatorLocale>>;
	enum?: Partial<Record<DsFilterEnumOperator, DsFilterOperatorLocale>>;
	number?: Partial<Record<DsFilterComparisonOperator, DsFilterOperatorLocale>>;
	date?: Partial<Record<DsFilterComparisonOperator, DsFilterOperatorLocale>>;
}

/**
 * Labels of the built-in date presets
 */
export type DsFiltersBarDatePresetsLocale = Partial<Record<DsFilterDatePresetValue, string>>;

export interface DsFiltersBarResolvedOperatorsLocale {
	text: Readonly<Record<DsFilterTextOperator, Required<DsFilterOperatorLocale>>>;
	enum: Readonly<Record<DsFilterEnumOperator, Required<DsFilterOperatorLocale>>>;
	number: Readonly<Record<DsFilterComparisonOperator, Required<DsFilterOperatorLocale>>>;
	date: Readonly<Record<DsFilterComparisonOperator, Required<DsFilterOperatorLocale>>>;
}

/**
 * Strings by part. Each section is merged over its defaults, so a section may set only the strings
 * it changes.
 */
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
	summary?: DsFiltersBarSummaryLocale;
	search?: DsFiltersBarSearchLocale;
	viewSwitch?: DsFiltersBarViewSwitchLocale;
	/**
	 * The add button and the condition chips of both the filters and builder views
	 */
	chips?: DsFiltersBarChipsLocale;
	/**
	 * The filters dialog
	 */
	conditions?: DsFiltersBarConditionsLocale;
	/**
	 * The query builder dialog
	 */
	builder?: DsFiltersBarBuilderLocale;
	query?: DsFiltersBarQueryLocale;
	/**
	 * The saved-filters picker and the save button
	 */
	savedFilters?: DsFiltersBarSavedFiltersLocale;
	clearAll?: DsFiltersBarClearAllLocale;
	pinned?: DsFiltersBarPinnedLocale;
	/**
	 * Operator labels and symbols by field type, for every field that lists the operator as a plain
	 * value or leaves `operators` out
	 */
	operators?: DsFiltersBarOperatorsLocale;
	/**
	 * Labels of the built-in date presets a date field lists by value
	 */
	datePresets?: DsFiltersBarDatePresetsLocale;
}

/**
 * Every string of the bar, with each section complete
 */
export interface DsFiltersBarResolvedLocale {
	label: string;
	expand: string;
	collapse: string;
	summary: Required<DsFiltersBarSummaryLocale>;
	search: Required<DsFiltersBarSearchLocale>;
	viewSwitch: Required<Omit<DsFiltersBarViewSwitchLocale, 'views'>> & {
		views: Readonly<Record<DsFiltersBarView, string>>;
	};
	chips: Required<DsFiltersBarChipsLocale>;
	conditions: Required<DsFiltersBarConditionsLocale>;
	builder: Required<DsFiltersBarBuilderLocale>;
	query: Required<Omit<DsFiltersBarQueryLocale, 'errors' | 'operators'>> & {
		errors: Readonly<Record<DsFilterQueryErrorCode, (text: string) => string>>;
		operators: Readonly<Record<DsFilterOperatorValue, string>>;
	};
	savedFilters: Required<DsFiltersBarSavedFiltersLocale>;
	clearAll: Required<DsFiltersBarClearAllLocale>;
	pinned: Required<DsFiltersBarPinnedLocale>;
	operators: DsFiltersBarResolvedOperatorsLocale;
	datePresets: Readonly<Record<DsFilterDatePresetValue, string>>;
}

export const defaultDsFiltersBarLocale: DsFiltersBarResolvedLocale = Object.freeze({
	label: 'Filters',
	expand: 'Show filters',
	collapse: 'Hide filters',
	summary: Object.freeze({
		resultCount: (count: number) => `${String(count)} results`,
		activeSavedFilter: 'Filter',
		emptyLabel: 'View',
		emptyValue: 'All',
		search: 'Search',
		advancedQuery: 'Advanced query',
	}),
	search: Object.freeze({
		label: 'Search',
		placeholder: 'Type ‘/’ to search',
		clear: 'Clear search',
	}),
	viewSwitch: Object.freeze({
		label: 'Filter view',
		views: Object.freeze({
			filters: 'Filters',
			builder: 'Query builder',
			advanced: 'Advanced query',
		}),
		lockedView: 'Clear the advanced query to switch views',
	}),
	chips: defaultDsFiltersBarConditionChipsLocale,
	conditions: defaultDsFiltersBarFiltersDialogLocale,
	builder: defaultDsFiltersBarBuilderLocale,
	query: defaultDsFiltersBarQueryLocale,
	savedFilters: defaultDsSavedFiltersLocale,
	clearAll: Object.freeze({ label: 'Clear all' }),
	pinned: Object.freeze({ label: 'Pinned' }),
	operators: Object.freeze({
		text: Object.freeze({
			'~': Object.freeze({ label: 'contains', symbol: '~' }),
			'!~': Object.freeze({ label: 'does not contain', symbol: '≁' }),
			'=': Object.freeze({ label: 'equals', symbol: '=' }),
			'!=': Object.freeze({ label: 'not equals', symbol: '≠' }),
		}),
		enum: Object.freeze({
			'=': Object.freeze({ label: 'is', symbol: '=' }),
			'!=': Object.freeze({ label: 'is not', symbol: '≠' }),
			IN: Object.freeze({ label: 'is any of', symbol: '∈' }),
			'NOT IN': Object.freeze({ label: 'is none of', symbol: '∉' }),
		}),
		number: Object.freeze({
			'=': Object.freeze({ label: 'equals', symbol: '=' }),
			'!=': Object.freeze({ label: 'not equals', symbol: '≠' }),
			'>': Object.freeze({ label: 'greater than', symbol: '>' }),
			'>=': Object.freeze({ label: 'at least', symbol: '≥' }),
			'<': Object.freeze({ label: 'less than', symbol: '<' }),
			'<=': Object.freeze({ label: 'at most', symbol: '≤' }),
		}),
		date: Object.freeze({
			'=': Object.freeze({ label: 'is', symbol: '=' }),
			'!=': Object.freeze({ label: 'is not', symbol: '≠' }),
			'>': Object.freeze({ label: 'after', symbol: '>' }),
			'>=': Object.freeze({ label: 'on or after', symbol: '≥' }),
			'<': Object.freeze({ label: 'before', symbol: '<' }),
			'<=': Object.freeze({ label: 'on or before', symbol: '≤' }),
		}),
	}),
	datePresets: Object.freeze({
		today: 'Today',
		yesterday: 'Yesterday',
		last7Days: 'Last 7 days',
		last30Days: 'Last 30 days',
		last90Days: 'Last 90 days',
		thisMonth: 'This month',
		lastMonth: 'Last month',
		thisYear: 'This year',
	}),
});

/**
 * One **Saved filter**: a named snapshot of a **Filter document**
 */
export interface DsFiltersBarSavedFilter {
	id: string;
	name: string;
	document: DsFilterDocumentInput;
}

/**
 * The product keeps the items and persists them; the bar loads a chosen item into its document,
 * counts its conditions, and marks it dirty once the document differs from it. Every callback may
 * return a Promise to keep the control that launched it loading until it settles.
 */
export interface DsFiltersBarSavedFiltersConfig {
	items: ReadonlyArray<DsFiltersBarSavedFilter>;
	/**
	 * Id of the **Active saved filter**, or `null`. Pair with `onActiveIdChange`. It does not load
	 * the item's document: pair it with the bar's `value`.
	 */
	activeId?: string | null;
	/**
	 * The bar also starts from this item's document when neither `value` nor `defaultValue` is
	 * given.
	 * @default null
	 */
	defaultActiveId?: string | null;
	onActiveIdChange?: (id: string | null) => void;
	/**
	 * Returns the new item's id, which becomes the **Active saved filter**
	 */
	onSaveAs: (name: string, document: DsFilterDocument) => string | Promise<string>;
	/**
	 * Overwrites the **Active saved filter** with the current document
	 */
	onUpdate: (id: string, document: DsFilterDocument) => void | Promise<void>;
	onRename: (id: string, name: string) => void | Promise<void>;
	/**
	 * Deleting the **Active saved filter** also drops the active selection, once this settles
	 */
	onDelete: (id: string) => void | Promise<void>;
}

/**
 * What every part forwards to the element it renders
 */
export interface DsFiltersBarPartSlotProps<TElement extends HTMLElement> {
	ref?: Ref<TElement>;
	className?: string;
	style?: CSSProperties;
}

export type DsFiltersBarDisclosureSlotProps = DsFiltersBarPartSlotProps<HTMLButtonElement>;

export type DsFiltersBarSummarySlotProps = DsFiltersBarPartSlotProps<HTMLDivElement>;

export type DsFiltersBarToolbarSlotProps = DsFiltersBarPartSlotProps<HTMLDivElement>;

export type DsFiltersBarSavedFiltersSlotProps = DsFiltersBarPartSlotProps<HTMLDivElement>;

export interface DsFiltersBarSaveFilterSlotProps extends DsFiltersBarPartSlotProps<HTMLButtonElement> {
	/**
	 * Defaults to disabled while the filter document is empty
	 */
	disabled?: boolean;
}

/**
 * `ref` reaches the input; `className` and `style` its field wrapper.
 */
export interface DsFiltersBarSearchSlotProps extends DsFiltersBarPartSlotProps<HTMLInputElement> {
	/**
	 * Pending text, before Enter adds it as a search condition. Pair with `onValueChange`.
	 */
	value?: string;
	/**
	 * @default ''
	 */
	defaultValue?: string;
	/**
	 * Always disabled while an Advanced query is the source
	 * @default false
	 */
	disabled?: boolean;
	onValueChange?: (value: string) => void;
}

export type DsFiltersBarViewSwitchSlotProps = DsFiltersBarPartSlotProps<HTMLDivElement>;

export type DsFiltersBarConditionsSlotProps = DsFiltersBarPartSlotProps<HTMLDivElement>;

export interface DsFiltersBarBuilderSlotProps extends DsFiltersBarPartSlotProps<HTMLDivElement> {
	/**
	 * Field ids the query builder offers first, in this order. Every field stays searchable.
	 * @default all fields, in `fields` order
	 */
	suggestedFields?: ReadonlyArray<string>;
}

/**
 * `ref` reaches the code editor's textarea; `className` and `style` its field wrapper.
 */
export interface DsFiltersBarQuerySlotProps extends DsFiltersBarPartSlotProps<HTMLTextAreaElement> {
	/**
	 * @default false
	 */
	disabled?: boolean;
	slots?: {
		/**
		 * Replaces the content of the syntax reference, for example with a link to product docs
		 */
		help?: ReactNode;
	};
}

export type DsFiltersBarClearAllSlotProps = DsFiltersBarPartSlotProps<HTMLButtonElement>;

export type DsFiltersBarPinnedSlotProps = DsFiltersBarPartSlotProps<HTMLDivElement>;

export interface DsFiltersBarSlotProps {
	disclosure?: DsFiltersBarDisclosureSlotProps;
	summary?: DsFiltersBarSummarySlotProps;
	toolbar?: DsFiltersBarToolbarSlotProps;
	savedFilters?: DsFiltersBarSavedFiltersSlotProps;
	saveFilter?: DsFiltersBarSaveFilterSlotProps;
	search?: DsFiltersBarSearchSlotProps;
	viewSwitch?: DsFiltersBarViewSwitchSlotProps;
	conditions?: DsFiltersBarConditionsSlotProps;
	builder?: DsFiltersBarBuilderSlotProps;
	query?: DsFiltersBarQuerySlotProps;
	clearAll?: DsFiltersBarClearAllSlotProps;
	pinned?: DsFiltersBarPinnedSlotProps;
}

export interface DsFiltersBarProps {
	/**
	 * What can be filtered. Omit for a search-only bar.
	 * @default []
	 */
	fields?: ReadonlyArray<DsFilterField>;
	/**
	 * The **Filter document**. Conditions may leave out `id`; each gets one from its position. Every
	 * change, from any view, reports the whole document once, with every id. Pair with
	 * `onValueChange`.
	 */
	value?: DsFilterDocumentInput;
	/**
	 * @default the document of `savedFilters.defaultActiveId`, else `emptyFilterDocument`
	 */
	defaultValue?: DsFilterDocumentInput;
	/**
	 * Field options shown in the pinned row, which is built from these and `fields`: one group per
	 * field in `fields` order, one toggle per pin in this order. Pair with `onPinsChange`.
	 */
	pins?: ReadonlyArray<DsFilterPin>;
	/**
	 * @default []
	 */
	defaultPins?: ReadonlyArray<DsFilterPin>;
	/**
	 * Pins switched on in the pinned row. Toggles only count for pins the bar shows: a toggle whose
	 * pin is gone, or whose field is missing from `fields`, no longer counts. Unpinning a switched-on
	 * option from the bar also reports it switched off. Pair with `onActiveTogglesChange`.
	 */
	activeToggles?: ReadonlyArray<DsFilterPin>;
	/**
	 * @default []
	 */
	defaultActiveToggles?: ReadonlyArray<DsFilterPin>;
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
	 * Asked-for view. While an Advanced query is the source, the bar shows the advanced view
	 * instead, and shows this one again once the query is cleared; `onViewChange` does not fire for
	 * either. A view missing from `views` falls back to the first of `views`. Pair with
	 * `onViewChange`.
	 */
	view?: DsFiltersBarView;
	/**
	 * @default 'filters'
	 */
	defaultView?: DsFiltersBarView;
	/**
	 * Views the view switch offers. With one view the switch is hidden. An Advanced query still
	 * shows the advanced view, so it stays visible and clearable.
	 * @default ['filters', 'builder', 'advanced']
	 */
	views?: ReadonlyArray<DsFiltersBarView>;
	/**
	 * Shows the saved-filters picker and the save button
	 */
	savedFilters?: DsFiltersBarSavedFiltersConfig;
	/**
	 * Number of results the document and switched-on pins produce, shown in the summary. Omit to hide
	 * it.
	 */
	resultCount?: number;
	/**
	 * Count shown on a pin's toggle, which is disabled at 0 unless switched on. Omit to show no counts.
	 */
	getPinCount?: (pin: DsFilterPin) => number;
	locale?: DsFiltersBarLocale;
	/**
	 * Props forwarded to one part
	 */
	slotProps?: DsFiltersBarSlotProps;
	ref?: Ref<HTMLDivElement>;
	className?: string;
	style?: CSSProperties;
	onValueChange?: (value: DsFilterDocument) => void;
	onPinsChange?: (pins: ReadonlyArray<DsFilterPin>) => void;
	onActiveTogglesChange?: (activeToggles: ReadonlyArray<DsFilterPin>) => void;
	onExpandedChange?: (expanded: boolean) => void;
	onViewChange?: (view: DsFiltersBarView) => void;
}
