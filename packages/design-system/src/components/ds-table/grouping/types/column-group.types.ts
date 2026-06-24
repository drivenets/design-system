/**
 * Configuration for a grouping column, set on a column definition that nests
 * child columns via TanStack's `columns` array. Lives under `meta.group`.
 *
 * @example
 * ```tsx
 * const columns: ColumnDef<Row>[] = [
 *   {
 *     id: 'equipment',
 *     header: 'Equipment',
 *     meta: { group: { collapsible: true } },
 *     columns: [
 *       { accessorKey: 'cabinetType', header: 'Cabinet Type', meta: { keepVisibleWhenCollapsed: true } },
 *       { accessorKey: 'shelf', header: 'Shelf#' },
 *     ],
 *   },
 * ];
 * ```
 */
export interface DsColumnGroupMeta {
	/**
	 * Renders a collapse/expand toggle in the group header. When collapsed, every
	 * leaf column in the group is hidden except those marked
	 * `meta.keepVisibleWhenCollapsed`.
	 * @default false
	 */
	collapsible?: boolean;

	/**
	 * When the table manages collapse state internally (uncontrolled), start this
	 * group collapsed. Ignored once `collapsedColumnGroups` is provided.
	 * @default false
	 */
	defaultCollapsed?: boolean;
}
