import classnames from 'classnames';
import styles from './ds-table-row-virtualized.module.scss';
import { useDsTableContext } from '../../context/ds-table-context';
import { getColumnSizeStyle } from '../../utils/column-size';
import { TableCell, TableRow } from '../core-table';
import { DsTableRowSelectableCell } from '../ds-table-row-selectable-cell';
import { DsTableRowExpandableCell } from '../ds-table-row-expandable-cell';
import type { DsTableRowVirtualizedProps } from './ds-table-row-virtualized.types';
import { DsTableCell } from '../ds-table-cell';

export const DsTableRowVirtualized = <TData,>({
	row,
	rowsMapRef,
	rowHeightsMapRef,
	rowVirtualizer,
	virtualRow,
	isExpandedRowContent,
}: DsTableRowVirtualizedProps<TData>) => {
	const {
		selectable,
		expandable,
		bordered,
		rowSize,
		activeRowId,
		primaryRowActions,
		secondaryRowActions,
		renderExpandedRow,
		onRowClick,
		onRowDoubleClick,
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
			data-state={isActive ? 'active' : row.getIsSelected() ? 'selected' : undefined}
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
			)}
			onClick={isExpandedRowContent ? undefined : () => onRowClick?.(row.original)}
			onDoubleClick={isExpandedRowContent ? undefined : () => onRowDoubleClick?.(row.original)}
		>
			{isExpandedRowContent ? (
				<TableCell>{renderExpandedRow?.(row.original)}</TableCell>
			) : (
				<>
					{selectable && <DsTableRowSelectableCell row={row} className={styles.selectableCell} />}
					{expandable && <DsTableRowExpandableCell row={row} className={styles.expandableCell} />}
					{row.getVisibleCells().map((cell, idx) => {
						const isLastColumn = idx === row.getVisibleCells().length - 1;
						const cellStyle = getColumnSizeStyle(cell.column.getSize(), true);

						return (
							<TableCell key={cell.id} style={cellStyle} className={styles.cell}>
								{isLastColumn ? (
									<DsTableCell
										row={row}
										cell={cell}
										primaryRowActions={primaryRowActions}
										secondaryRowActions={secondaryRowActions}
									/>
								) : (
									<DsTableCell row={row} cell={cell} />
								)}
							</TableCell>
						);
					})}
				</>
			)}
		</TableRow>
	);
};
