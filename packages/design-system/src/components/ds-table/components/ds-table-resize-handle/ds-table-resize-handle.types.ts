import type { Header } from '@tanstack/react-table';

/**
 * Props for the column resize handle rendered on the right edge of a resizable
 * header cell.
 */
export interface DsTableResizeHandleProps<TData, TValue> {
	/**
	 * The header (leaf or group) whose right edge this handle resizes. A group
	 * handle uses TanStack's resize handler, which scales that group's leaf
	 * columns.
	 */
	header: Header<TData, TValue>;
}
