import type { Ref } from 'react';
import type { Row, RowData } from '@tanstack/react-table';
import type { DsTableFeatures } from '../../ds-table-features';

/**
 * Props for the table row component
 */
export interface DsTableRowProps<TData extends RowData> {
	/**
	 * Ref for the table row
	 */
	ref?: Ref<HTMLTableRowElement>;
	/**
	 * The row data from the table
	 */
	row: Row<DsTableFeatures, TData>;
	/**
	 * Indicates whether a row is currently selected.
	 */
	isSelected: boolean;
}
