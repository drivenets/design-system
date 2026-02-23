import { flexRender, type Row } from '@tanstack/react-table';
import { type Virtualizer } from '@tanstack/react-virtual';
import classnames from 'classnames';
import styles from './ds-table-row-virtualized.module.scss';
import stylesShared from '../../styles/shared/ds-table-shared.module.scss';
import { useDsTableContext } from '../../context/ds-table-context';
import { DsButton } from '../../../ds-button';
import { DsIcon } from '../../../ds-icon';
import { DsCheckbox } from '../../../ds-checkbox';
import { getColumnSizeStyle } from '../../utils/column-size';
import { TableCell, TableRow } from '../core-table';

export interface DsTableRowVirtualizedProps<TData> {
	row: Row<TData>;
	rowRefsMap: React.RefObject<Map<number, HTMLTableRowElement>>;
	rowVirtualizer: Virtualizer<HTMLDivElement, HTMLTableRowElement>;
	virtualRowIndex: number;
	isExpandedRowContent: boolean;
}

export function DsTableRowVirtualized<TData>({
	row,
	rowRefsMap,
	rowVirtualizer,
	virtualRowIndex,
	isExpandedRowContent,
}: DsTableRowVirtualizedProps<TData>) {
	const {
		selectable,
		expandable,
		bordered,
		rowSize,
		activeRowId,
		renderExpandedRow,
		onRowClick,
		onRowDoubleClick,
	} = useDsTableContext<TData, unknown>();
	const isExpanded = row.getIsExpanded();
	const isExpandable = typeof expandable === 'function' ? expandable(row.original) : expandable;
	const isActive = activeRowId === row.id;

	return (
		<TableRow
			data-index={virtualRowIndex} // needed for dynamic row height measurement
			ref={(node) => {
				if (node) {
					rowVirtualizer.measureElement(node); // measure dynamic row height
					rowRefsMap.current.set(virtualRowIndex, node); // store ref for virtualizer to apply scrolling transforms
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
			onClick={() => onRowClick?.(row.original)}
			onDoubleClick={() => onRowDoubleClick?.(row.original)}
		>
			{isExpandedRowContent ? (
				<TableCell>{renderExpandedRow?.(row.original)}</TableCell>
			) : (
				<>
					{selectable && (
						<TableCell className={classnames(styles.cell, styles.selectableCell)}>
							<DsCheckbox
								className={stylesShared.checkboxContainer}
								checked={row.getIsSelected()}
								disabled={!row.getCanSelect()}
								onClick={(e) => {
									e.stopPropagation();
									const toggleHandler = row.getToggleSelectedHandler();
									toggleHandler(e);
								}}
								onDoubleClick={(e: React.MouseEvent) => {
									e.stopPropagation();
								}}
							/>
						</TableCell>
					)}
					{expandable && (
						<TableCell className={classnames(styles.cell, styles.expandableCell)}>
							{isExpandable && (
								<DsButton
									variant="borderless"
									size="small"
									onClick={(e: React.MouseEvent) => {
										e.stopPropagation();
										row.toggleExpanded();
									}}
									onDoubleClick={(e: React.MouseEvent) => {
										e.stopPropagation();
									}}
								>
									<DsIcon
										icon="chevron_right"
										className={classnames(stylesShared.pageButtonIcon, isExpanded && 'rotate-90')}
									/>
								</DsButton>
							)}
						</TableCell>
					)}
					{row.getVisibleCells().map((cell) => {
						const cellStyle = getColumnSizeStyle(cell.column.getSize(), true);

						return (
							<TableCell key={cell.id} style={cellStyle} className={styles.cell}>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</TableCell>
						);
					})}
				</>
			)}
		</TableRow>
	);
}
