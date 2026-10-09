import type {
	DsFilterDateField,
	DsFilterDocumentInput,
	DsFilterField,
	DsFilterPin,
	DsFilterRange,
} from '../ds-filters-bar.types';

export interface DsFilterRowsOptions<TRow> {
	fields: ReadonlyArray<DsFilterField>;
	/**
	 * The **Filter document**: its conditions, or the **Advanced query** while `query` is set
	 */
	value: DsFilterDocumentInput;
	/**
	 * **Pins** switched on. They narrow the rows the document matched: pins on one field combine
	 * with OR, different fields with AND. Only toggles of pins the bar shows count: one whose field is
	 * missing from `fields` is ignored.
	 * @default []
	 */
	activeToggles?: ReadonlyArray<DsFilterPin>;
	/**
	 * Reads a field value from a row
	 * @default reads `row[field]`, or `row[field][subfield]` for a compound field
	 */
	getValue?: (row: TRow, field: string, subfield?: string) => unknown;
	/**
	 * Turns a date preset value into an inclusive range of ISO 8601 dates. Asked first for every
	 * preset, so it can also override a built-in one. Return `null` to fall back to the built-in
	 * preset of that value; a preset that is neither matches nothing.
	 */
	resolveDatePreset?: (preset: string, field: DsFilterDateField) => DsFilterRange<string> | null | undefined;
	/**
	 * The moment built-in date presets count from, in UTC calendar days
	 * @default the time of the call
	 */
	now?: Date;
}

export interface DsFilterRowsResult<TRow> {
	/**
	 * Rows the document matched, narrowed by the active toggles
	 */
	rows: TRow[];
	/**
	 * How many of the document's rows, before toggles, this pin alone matches
	 */
	getPinCount: (pin: DsFilterPin) => number;
}
