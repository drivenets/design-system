export interface DsColumnDisplayMeta {
	/**
	 * Plain-text name listed for this column or column group in the
	 * `columnDisplay` popup. Set it when `header` is not a string; otherwise the
	 * popup uses the string `header`, then the column id.
	 */
	columnDisplayLabel?: string;
}
