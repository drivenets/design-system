import type { Header, RowData } from '@tanstack/react-table';
import type { DsTableFeatures } from '../../ds-table-features';

/**
 * Props for the column resize handle rendered on the right edge of a resizable
 * header cell.
 */
export interface DsTableResizeHandleProps<TData extends RowData, TValue> {
	/**
	 * The header (leaf or group) whose right edge this handle resizes. A group
	 * handle uses TanStack's resize handler, which scales that group's leaf
	 * columns.
	 */
	header: Header<DsTableFeatures, TData, TValue>;
}
