/**
 * Column id used for the synthetic expander column injected when `expandable` is set.
 */
export const EXPANDER_COLUMN_ID = 'expander';

/**
 * Width (in px) of the expander column.
 */
export const EXPANDER_COLUMN_WIDTH = 36;

/**
 * Column id used for the synthetic selection column injected when `selectable` is set.
 */
export const SELECT_COLUMN_ID = 'select';

/**
 * Width (in px) of the selection column.
 */
export const SELECT_COLUMN_WIDTH = 36;

/**
 * Column id used for the synthetic reorder column injected when `reorderable` is set
 * (non-virtualized tables only).
 */
export const REORDER_COLUMN_ID = 'reorder';

/**
 * Width (in px) of the reorder column.
 */
export const REORDER_COLUMN_WIDTH = 60;

/**
 * Column id used for the synthetic trailing column injected when row actions are declared.
 * Namespaced because `DsTableCell` swaps this column's content, so it must never match a consumer id.
 */
export const ROW_ACTIONS_COLUMN_ID = '__dsRowActions';

/**
 * Width (in px) of one row action button. Must match `.rowActionIcon` in
 * `ds-table-row-actions-cell.module.scss`.
 */
export const ROW_ACTION_BUTTON_SIZE = 36;

/**
 * Gap (in px) between row action buttons. Must match `.rowActions` (`--xs`) in
 * `ds-table-row-actions-cell.module.scss`.
 */
export const ROW_ACTIONS_GAP = 8;

/**
 * Extra start margin (in px) of the secondary actions trigger. Must match
 * `.secondaryActionsTrigger` (`--sm`) in `ds-table-row-actions-cell.module.scss`.
 */
export const ROW_ACTIONS_TRIGGER_OFFSET = 12;

/**
 * Horizontal padding (in px) on each side of a body cell. Must match the
 * `--standard` cell padding in the row styles.
 */
export const ROW_ACTIONS_CELL_PADDING = 16;

/**
 * Injected utility leaf ids (`select`, `expander`, `reorder`, `__dsRowActions`). Present in internal
 * sizing for layout; omitted from the public `onColumnSizingChange` payload.
 */
export const BUILTIN_COLUMN_IDS: ReadonlySet<string> = Object.freeze(
	new Set([SELECT_COLUMN_ID, EXPANDER_COLUMN_ID, REORDER_COLUMN_ID, ROW_ACTIONS_COLUMN_ID]),
);

/**
 * Number of placeholder skeleton rows rendered while the table is `loading`.
 */
export const SKELETON_ROW_COUNT = 5;

/**
 * Default minimum width (in px) a column can be dragged to when
 * `resizableColumns` is enabled. Overridable per column via `columnDef.minSize`
 * (including values below this default). There is no default max; set
 * `columnDef.maxSize` on a leaf to cap it.
 */
export const RESIZE_MIN_COLUMN_WIDTH = 52;

/**
 * Pixel width of the full-height resize overlay divider. Must match
 * `$resize-divider-width` in `styles/_variables.scss`.
 */
export const RESIZE_DIVIDER_WIDTH = 2;

/**
 * Rest width of the header **Scrollbar spacer** when the body overflows
 * vertically. Must match `$scrollbar-default-size` in `styles/_scrollbars.scss`.
 * Hover (12px) is intentionally not tracked.
 */
export const SCROLLBAR_SPACER_WIDTH = 10;

/**
 * Width change (in px) applied per Arrow key press when a resize handle is
 * focused.
 */
export const RESIZE_KEYBOARD_STEP = 10;

/**
 * Larger width change (in px) applied when Shift is held with an Arrow key on a
 * focused resize handle.
 */
export const RESIZE_KEYBOARD_STEP_LARGE = 40;
