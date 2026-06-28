import '@tanstack/react-table';
import type { DsColumnGroupMeta } from './column-group.types';

declare module '@tanstack/react-table' {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface ColumnMeta<TData, TValue> {
		/**
		 * Set on a grouping column def (one that nests child `columns`) to configure
		 * the group header and its collapse behavior.
		 */
		group?: DsColumnGroupMeta;

		/**
		 * Set on a leaf column to keep it visible while its parent group is collapsed
		 * (e.g. a key identifier column that should always stay on screen).
		 *
		 * Only affects the collapsed state. When `false` or omitted (the default),
		 * the column is hidden while the group is collapsed and shown again when the
		 * group is expanded — it is never permanently hidden by this flag.
		 * @default false
		 */
		keepVisibleWhenCollapsed?: boolean;
	}
}

export {};
