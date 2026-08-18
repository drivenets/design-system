/**
 * Default text for empty table state
 */
export const EMPTY_TABLE_STATE_TEXT = 'No results.';

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
 * Injected utility leaf ids (`select`, `expander`, `reorder`). Present in internal
 * sizing for layout; omitted from the public `onColumnSizingChange` payload.
 */
export const BUILTIN_COLUMN_IDS: ReadonlySet<string> = Object.freeze(
	new Set([SELECT_COLUMN_ID, EXPANDER_COLUMN_ID, REORDER_COLUMN_ID]),
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
 * Width change (in px) applied per Arrow key press when a resize handle is
 * focused.
 */
export const RESIZE_KEYBOARD_STEP = 10;

/**
 * Larger width change (in px) applied when Shift is held with an Arrow key on a
 * focused resize handle.
 */
export const RESIZE_KEYBOARD_STEP_LARGE = 40;
