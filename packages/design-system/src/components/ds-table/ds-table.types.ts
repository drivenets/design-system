import type React from 'react';
import './ds-table-column.types';
import type {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	Table,
	VisibilityState,
} from '@tanstack/react-table';
import type { IconType } from '../ds-icon';
import type { RowAction, SecondaryRowAction } from './components/ds-table-cell';
import type { InfiniteScrollConfig, ScrollParams } from './components/ds-table-body-virtualized';

/**
 * Row size variants based on Figma design specifications
 */
export type DsTableRowSize = 'small' | 'medium' | 'large';

/**
 * Overridable, user-facing strings used by the table (e.g. accessible labels for
 * the column-group collapse toggle). Pass a partial object via the `locale` prop
 * to localize.
 */
export interface DsTableLocale {
	/**
	 * Accessible label for the toggle that collapses a column group.
	 */
	collapseColumnGroup: string;

	/**
	 * Accessible label for the toggle that expands a column group.
	 */
	expandColumnGroup: string;
}

/**
 * Default English strings for {@link DsTableLocale}.
 */
export const defaultDsTableLocale: DsTableLocale = Object.freeze({
	collapseColumnGroup: 'Collapse column group',
	expandColumnGroup: 'Expand column group',
});

/**
 * API for programmatically controlling a DsTable component.
 * This interface provides methods to interact with the table's selection, sorting, filtering, and pagination features.
 *
 * @template TData - The type of data items in the table
 *
 * @example
 * ```tsx
 * const tableRef = useRef<DsTableApi<Person>>(null);
 *
 * // Select a specific row
 * tableRef.current?.selectRow('row-1');
 *
 * // Select multiple rows
 * tableRef.current?.selectRows(['row-1', 'row-2', 'row-3']);
 *
 * // Get all selected rows
 * const selected = tableRef.current?.getSelectedRows();
 * ```
 */
export interface DsTableApi<TData> {
	/**
	 * Selects a single row by its ID.
	 *
	 * @param rowId - The unique identifier of the row to select
	 *
	 * @example
	 * ```tsx
	 * tableRef.current?.selectRow('user-123');
	 * ```
	 */
	selectRow: (rowId: string) => void;

	/**
	 * Deselects a single row by its ID.
	 *
	 * @param rowId - The unique identifier of the row to deselect
	 *
	 * @example
	 * ```tsx
	 * tableRef.current?.deselectRow('user-123');
	 * ```
	 */
	deselectRow: (rowId: string) => void;

	/**
	 * Selects all visible rows in the table.
	 * This includes rows that are currently filtered or paginated.
	 *
	 * @example
	 * ```tsx
	 * tableRef.current?.selectAllRows();
	 * ```
	 */
	selectAllRows: () => void;

	/**
	 * Deselects all rows in the table.
	 * Clears the current selection state.
	 *
	 * @example
	 * ```tsx
	 * tableRef.current?.deselectAllRows();
	 * ```
	 */
	deselectAllRows: () => void;

	/**
	 * Selects multiple rows by their IDs.
	 *
	 * @param rowIds - Array of unique identifiers for the rows to select
	 *
	 * @example
	 * ```tsx
	 * tableRef.current?.selectRows(['user-1', 'user-2', 'user-3']);
	 * ```
	 */
	selectRows: (rowIds: string[]) => void;

	/**
	 * Returns an array of all currently selected row data.
	 *
	 * @returns Array of selected row data objects
	 *
	 * @example
	 * ```tsx
	 * const selectedUsers = tableRef.current?.getSelectedRows();
	 * console.log('Selected users:', selectedUsers);
	 * ```
	 */
	getSelectedRows: () => TData[];

	/**
	 * Expands a single row by its ID.
	 *
	 * @param rowId - The unique identifier of the row to expand
	 *
	 * @example
	 * ```tsx
	 * tableRef.current?.expandRow('user-123');
	 * ```
	 */
	expandRow: (rowId: string) => void;

	/**
	 * Collapses a single row by its ID.
	 *
	 * @param rowId - The unique identifier of the row to collapse
	 *
	 * @example
	 * ```tsx
	 * tableRef.current?.collapseRow('user-123');
	 * ```
	 */
	collapseRow: (rowId: string) => void;

	/**
	 * Expands all rows in the table.
	 *
	 * @example
	 * ```tsx
	 * tableRef.current?.expandAllRows();
	 * ```
	 */
	expandAllRows: () => void;

	/**
	 * Collapses all rows in the table.
	 *
	 * @example
	 * ```tsx
	 * tableRef.current?.collapseAllRows();
	 * ```
	 */
	collapseAllRows: () => void;

	/**
	 * Expands multiple rows by their IDs.
	 *
	 * @param rowIds - Array of unique identifiers for the rows to expand
	 *
	 * @example
	 * ```tsx
	 * tableRef.current?.expandRows(['user-1', 'user-2', 'user-3']);
	 * ```
	 */
	expandRows: (rowIds: string[]) => void;
}

export type { InfiniteScrollConfig } from './components/ds-table-body-virtualized';

/**
 * Represents a bulk action that can be performed on multiple selected rows
 */
export interface Action<TData> {
	/**
	 * Icon to be displayed for the action
	 */
	icon: IconType;

	/**
	 * Label text for the action
	 */
	label: string;

	/**
	 * Function to be called when the action is clicked, receives the selected rows as parameter
	 */
	onClick: (rows: TData[]) => void;
}

export interface DsDataTableProps<TData, TValue> {
	/**
	 * Ref to the table API
	 */
	ref?: React.RefObject<DsTableApi<TData> | null>;

	/**
	 * Columns of the table
	 */
	columns: ColumnDef<TData, TValue>[];

	/**
	 * Data of the table
	 */
	data: TData[];

	/**
	 * Optional content rendered in a pinned controls bar above the table header
	 * (e.g. filters, action buttons). Layout is owned by the consumer.
	 */
	controls?: React.ReactNode;

	/**
	 * Whether the table is virtualized
	 * @default false
	 */
	virtualized?: boolean;

	/**
	 * Options for the virtualized table
	 */
	virtualizedOptions?: {
		/**
		 * Estimate size of the table
		 */
		estimateSize?: number;

		/**
		 * Overscan of the table
		 */
		overscan?: number;
	};

	/**
	 * Class name of the table
	 */
	className?: string;

	/**
	 * Function to handle row click
	 */
	onRowClick?: (row: TData) => void;

	/**
	 * Function to handle row double click
	 */
	onRowDoubleClick?: (row: TData) => void;

	/**
	 * ID of the currently active row (useful for showing drawer/panel associations)
	 * When set, the row with this ID will be visually highlighted with a persistent active state
	 * @example
	 * ```tsx
	 * const [activeRowId, setActiveRowId] = useState<string | null>(null);
	 * const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	 *
	 * <DsTable
	 *   activeRowId={isDrawerOpen ? activeRowId : null}
	 *   onRowClick={(row) => {
	 *     setActiveRowId(row.id);
	 *     setIsDrawerOpen(true);
	 *   }}
	 * />
	 * ```
	 */
	activeRowId?: string | null;

	/**
	 * Empty state of the table
	 */
	emptyState?: React.ReactNode;

	/**
	 * Whether the table has sticky header
	 */
	stickyHeader?: boolean;

	/**
	 * Whether the table has zebra stripes
	 */
	zebra?: boolean;

	/**
	 * Whether the table has bordered cells
	 */
	bordered?: boolean;

	/**
	 * Whether the table is full width
	 */
	fullWidth?: boolean;

	/**
	 * Row size variant (small: 36px, medium: 48px, large: 64px)
	 * @default 'medium'
	 */
	rowSize?: DsTableRowSize;

	/**
	 * When `true`, renders placeholder skeleton rows instead of the data. Column
	 * headers stay intact and row interactions are disabled while loading.
	 * @default false
	 */
	loading?: boolean;

	/**
	 * Whether the table is expandable or if an individual row should be expandable
	 */
	expandable?: boolean | ((row: TData) => boolean);

	/**
	 * Function to render the expanded row
	 */
	renderExpandedRow?: (row: TData) => React.ReactNode;

	/**
	 * Function to handle table creation
	 */
	onTableCreated?: (table: Table<TData>) => void;

	/**
	 * Whether the table rows are selectable. Can be a boolean or a function that receives row data and returns whether it can be selected.
	 * @default false
	 * @example
	 * ```tsx
	 * // Enable selection for all rows
	 * selectable={true}
	 *
	 * // Disable selection for rows where status is 'archived'
	 * selectable={(rowData) => rowData.status !== 'archived'}
	 *
	 * // Limit selection to max 3 rows (note: use state to track current selection)
	 * selectable={(rowData) => {
	 *   // This will be called for each row during render
	 *   const selectedIds = Object.keys(rowSelection).filter(id => rowSelection[id]);
	 *   return selectedIds.includes(rowData.id) || selectedIds.length < 3;
	 * }}
	 * ```
	 */
	selectable?: boolean | ((rowData: TData) => boolean);

	/**
	 * Whether to show the select/deselect all checkbox in the header
	 * @default true
	 */
	showSelectAllCheckbox?: boolean;

	/**
	 * Function to handle selection change
	 */
	onSelectionChange?: (selectedRows: Record<string, boolean>) => void;

	/**
	 * Function to handle sorting change
	 */
	onSortingChange?: (sorting: SortingState) => void;

	/**
	 * Function to handle scroll events in virtualized tables.
	 * Called when the user scrolls within the table container.
	 *
	 * @param params - Scroll parameters containing scroll position and dimensions
	 *
	 * @example
	 * ```tsx
	 * const handleScroll = ({ scrollOffset, totalContentHeight, viewportHeight }) => {
	 *   const distanceFromBottom = totalContentHeight - scrollOffset - viewportHeight;
	 *   if (distanceFromBottom < 500) {
	 *     // Fetch more data when within 500px of bottom
	 *     fetchNextPage();
	 *   }
	 * };
	 * ```
	 */
	onScroll?: (params: ScrollParams) => void;

	/**
	 * Configures infinite scroll for the virtualized table. The Table owns viewport/scroll
	 * detection and the auto-fill loop; the consumer owns fetching, pagination state,
	 * error handling, and retry.
	 *
	 * Only takes effect when `virtualized` is `true`. Passing this prop without
	 * `virtualized` is ignored.
	 *
	 * @example
	 * ```tsx
	 * <DsTable
	 *   virtualized
	 *   data={rows}
	 *   columns={columns}
	 *   infiniteScroll={{
	 *     hasMore,
	 *     isLoadingMore,
	 *     onLoadMore: fetchNextPage,
	 *   }}
	 * />
	 * ```
	 */
	infiniteScroll?: InfiniteScrollConfig;

	/**
	 * Actions to be shown in the bulk actions
	 */
	actions?: Action<TData>[];

	/**
	 * Primary actions to be shown on each row (on hover)
	 */
	primaryRowActions?: RowAction<TData>[];

	/**
	 * Secondary actions to be shown in a dropdown on each row (on hover)
	 */
	secondaryRowActions?: SecondaryRowAction<TData>[];

	/**
	 * Whether the table rows are reorderable via drag & drop
	 * @note This feature does not work when virtualization is enabled
	 */
	reorderable?: boolean;

	/**
	 * Callback when the order of rows changes via drag & drop
	 */
	onOrderChange?: (newData: TData[]) => void;

	/**
	 * External column filters state
	 */
	columnFilters?: ColumnFiltersState;

	/**
	 * Callback when column filters change
	 */
	onColumnFiltersChange?: (filters: ColumnFiltersState) => void;

	/**
	 * External column visibility state
	 * @example
	 * ```tsx
	 * const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
	 *   age: false, // hide age column
	 *   status: true, // show status column
	 * });
	 *
	 * <DsTable
	 *   columnVisibility={columnVisibility}
	 *   onColumnVisibilityChange={setColumnVisibility}
	 * />
	 * ```
	 */
	columnVisibility?: VisibilityState;

	/**
	 * Callback when column visibility changes
	 */
	onColumnVisibilityChange?: (visibility: VisibilityState) => void;

	/**
	 * Controlled list of collapsed column-group ids. A group is collapsible when its
	 * column def sets `meta.group.collapsible`; collapsing hides every leaf column in
	 * the group except those marked `meta.keepVisibleWhenCollapsed`. Omit for
	 * uncontrolled behavior (seeded from `meta.group.defaultCollapsed`).
	 *
	 * @example
	 * ```tsx
	 * const [collapsed, setCollapsed] = useState<string[]>(['equipment']);
	 *
	 * <DsTable
	 *   collapsedColumnGroups={collapsed}
	 *   onCollapsedColumnGroupsChange={setCollapsed}
	 * />
	 * ```
	 */
	collapsedColumnGroups?: string[];

	/**
	 * Callback fired with the next list of collapsed group ids when a group's
	 * collapse toggle is clicked.
	 */
	onCollapsedColumnGroupsChange?: (collapsedGroupIds: string[]) => void;

	/**
	 * Overrides for user-facing strings (e.g. column-group toggle labels). Merged
	 * over the built-in English defaults.
	 */
	locale?: Partial<DsTableLocale>;

	/**
	 * Commits an edited cell value. Runs when the user confirms (check button or
	 * Enter) after `onCellValidate` passes. This is the authoritative commit: use it
	 * for server-side validation and persistence. Return `void`/`null` to accept
	 * (closes the editor) or an error `string` to reject (keeps the cell open with
	 * the message); may be async. While a returned Promise is pending the editor is
	 * locked. `signal` is aborted when the edit is cancelled (Cancel/Escape) or
	 * superseded by opening another cell, so in-flight requests can be cancelled.
	 */
	onCellEdit?: (
		row: TData,
		columnId: string,
		value: TValue,
		signal: AbortSignal,
	) => string | null | undefined | Promise<string | null | undefined>;

	/**
	 * Synchronous, per-keystroke validation for the active editor. Runs live on
	 * every draft change and once more as a pre-commit gate before `onCellEdit`.
	 * Return `null` to allow or an error `string` to reject. A live error is shown
	 * inline and disables the Confirm button; `onCellEdit` never runs while the
	 * value is invalid. Keep it pure and cheap — for async or server-side checks,
	 * use `onCellEdit` instead.
	 */
	onCellValidate?: (row: TData, columnId: string, value: TValue) => string | null;
}
