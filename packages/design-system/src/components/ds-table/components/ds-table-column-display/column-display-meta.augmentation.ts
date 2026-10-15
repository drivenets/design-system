import '@tanstack/react-table';

declare module '@tanstack/react-table' {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface ColumnMeta<TData, TValue> {
		/**
		 * Plain-text name listed for this column or column group in the
		 * `columnDisplay` popup. Set it when `header` is not a string; otherwise the
		 * popup uses the string `header`, then the column id.
		 */
		columnDisplayLabel?: string;
	}
}

export {};
