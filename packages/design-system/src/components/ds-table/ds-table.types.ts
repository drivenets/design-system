import type React from 'react';
import type {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	Table,
	VisibilityState,
} from '@tanstack/react-table';
import type { IconType } from '../ds-icon';
import type { RowAction, SecondaryRowAction } from './components/ds-table-cell';

/**
 * Row size variants based on Figma design specifications
 */
export type DsTableRowSize = 'small' | 'medium' | 'large';

/**
 * Parameters passed to the onScroll callback in virtualized tables.
 */
export interface ScrollParams {
	/** The current vertical scroll position from the top of the scrollable content (in pixels) */
	scrollOffset: number;
	/** The total height of all content in the virtualized table (in pixels) */
	totalContentHeight: number;
	/** The visible height of the table container (in pixels) */
	viewportHeight: number;
}

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
}

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
}
