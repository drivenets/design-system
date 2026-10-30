import type { RowData } from '@tanstack/react-table';
import classnames from 'classnames';
import styles from './ds-table-row-virtualized.module.scss';
import { useDsTableContext } from '../../context/ds-table-context';
import { isEditingCell } from '../../utils/editing';
import { getBodyCellLayoutProps } from '../../utils/sticky-columns';
import { isFirstLeafColumnOfGroup } from '../../grouping';
import { TableCell, TableRow } from '../core-table';
import type { DsTableRowVirtualizedProps } from './ds-table-row-virtualized.types';
import { DsTableCell } from '../ds-table-cell';
import { EXPANDER_COLUMN_ID, ROW_ACTIONS_COLUMN_ID, SELECT_COLUMN_ID } from '../../utils/constants';

export const DsTableRowVirtualized = <TData extends RowData>({
	row,
	isSelected,
	rowsMapRef,
	rowHeightsMapRef,
	rowVirtualizer,
	virtualRow,
	isExpandedRowContent,
}: DsTableRowVirtualizedProps<TData>) => {
	const {
		bordered,
		rowSize,
		activeRowId,
		renderExpandedRow,
		onRowClick,
		onRowDoubleClick,
		loading,
		resizeSizingReady,
		editing,
	} = useDsTableContext<TData, unknown>();
	const isExpanded = row.getIsExpanded();
	const isActive = activeRowId === row.id;

	return (
		<TableRow
			data-index={virtualRow.index}
			ref={(row) => {
				const key = String(virtualRow.key);

				if (row) {
					rowVirtualizer.measureElement(row); // measure dynamic row height
					rowsMapRef.current.set(key, row); // store ref for virtualizer to apply scrolling transforms

					const height = row.getBoundingClientRect().height;
					rowHeightsMapRef.current.set(key, height); // store height for virtualizer to estimate size
				} else {
					rowsMapRef.current.delete(key);
				}
			}}
			data-state={isActive ? 'active' : isSelected ? 'selected' : undefined}
			className={classnames(
				styles.row,
				{
					[styles.sizeSmall]: rowSize === 'small',
					[styles.sizeMedium]: rowSize === 'medium',
					[styles.sizeLarge]: rowSize === 'large',
				},
				isExpandedRowContent && styles.expandedRowContent,
				onRowClick && styles.clickableRow,
				!bordered && styles.rowNoBorder,
				isExpanded && styles.expanded,
				loading && styles.loadingRow,
			)}
			onClick={isExpandedRowContent ? undefined : () => onRowClick?.(row.original)}
			onDoubleClick={isExpandedRowContent ? undefined : () => onRowDoubleClick?.(row.original)}
		>
			{isExpandedRowContent ? (
				<TableCell>
					<div data-expanded-content>{renderExpandedRow?.(row.original)}</div>
				</TableCell>
			) : (
				<>
					{row.getVisibleCells().map((cell) => {
						const { style: cellStyle, stickyAttributes } = getBodyCellLayoutProps(cell, !!resizeSizingReady);

						return (
							<TableCell
								key={cell.id}
								style={cellStyle}
								{...stickyAttributes}
								data-editing={isEditingCell(editing, cell) || undefined}
								className={classnames(
									styles.cell,
									cell.column.id === EXPANDER_COLUMN_ID && styles.expandableCell,
									cell.column.id === SELECT_COLUMN_ID && styles.selectableCell,
									cell.column.id === ROW_ACTIONS_COLUMN_ID && styles.rowActionsCell,
									isFirstLeafColumnOfGroup(cell.column) && styles.groupStart,
									typeof cell.column.columnDef.editCell === 'function' && styles.editableCell,
								)}
							>
								<DsTableCell row={row} cell={cell} />
							</TableCell>
						);
					})}
				</>
			)}
		</TableRow>
	);
};
