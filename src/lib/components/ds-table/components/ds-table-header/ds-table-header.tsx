import { flexRender } from '@tanstack/react-table';
import classnames from 'classnames';
import { DsCheckbox, DsIcon } from '@design-system/ui';
import { TableHead, TableHeader, TableRow } from '../core-table';
import styles from './ds-table-header.module.scss';
import stylesShared from '../../styles/shared/ds-table-shared.module.scss';
import { DsTableHeaderProps } from './ds-table-header.types';
import { useDsTableContext } from '../../context/ds-table-context';
import { getColumnStyle } from '../../utils/column-styling';

const DsTableHeader = <TData,>({ table }: DsTableHeaderProps<TData>) => {
	const {
		stickyHeader,
		bordered,
		expandable,
		selectable,
		reorderable,
		showSelectAllCheckbox,
		virtualized,
		rowSize = 'medium',
	} = useDsTableContext<TData, unknown>();

	const rowSizeClass = {
		[styles.sizeSmall]: rowSize === 'small',
		[styles.sizeMedium]: rowSize === 'medium',
		[styles.sizeLarge]: rowSize === 'large',
	};

	return (
		<TableHeader className={classnames(stickyHeader && styles.stickyHeader)}>
			{table.getHeaderGroups().map((headerGroup) => (
				<TableRow
					key={headerGroup.id}
					className={classnames(
						styles.headerRow,
						!bordered && styles.headerRowNoBorder,
						virtualized && styles.headerRowVirtualized,
					)}
				>
					{selectable && (
						<TableHead className={classnames(styles.headerCell, styles.selectColumn, rowSizeClass)}>
							{showSelectAllCheckbox && (
								<DsCheckbox
									className={stylesShared.checkboxContainer}
									checked={
										table.getIsAllRowsSelected()
											? true
											: table.getIsSomeRowsSelected()
												? 'indeterminate'
												: false
									}
									onClick={(e) => {
										e.stopPropagation();
										const toggleHandler = table.getToggleAllRowsSelectedHandler();
										toggleHandler(e);
									}}
								/>
							)}
						</TableHead>
					)}
					{expandable && (
						<TableHead className={classnames(styles.headerCell, styles.expandColumn, rowSizeClass)} />
					)}
					{reorderable && (
						<TableHead className={classnames(styles.headerCell, styles.reorderColumn, rowSizeClass)}>
							Order
						</TableHead>
					)}
					{headerGroup.headers.map((header, idx) => {
						const isLastColumn = idx === headerGroup.headers.length - 1;
						const headerStyle = getColumnStyle(header.column.getSize(), virtualized, isLastColumn);

						return (
							<TableHead
								key={header.id}
								className={classnames(
									styles.headerCell,
									rowSizeClass,
									header.column.getCanSort() && styles.sortableHeader,
								)}
								onClick={header.column.getToggleSortingHandler()}
								style={headerStyle}
							>
								{header.isPlaceholder ? null : (
									<div className={styles.headerSortContainer}>
										<div>{flexRender(header.column.columnDef.header, header.getContext())}</div>
										{header.column.getCanSort() && (
											<div className={styles.pageButtonIconContainer}>
												{{
													asc: (
														<DsIcon
															icon="arrow_drop_up"
															className={classnames(styles.pageButtonIcon, stylesShared.pageButtonIcon)}
														/>
													),
													desc: (
														<DsIcon
															icon="arrow_drop_down"
															className={classnames(styles.pageButtonIcon, stylesShared.pageButtonIcon)}
														/>
													),
												}[header.column.getIsSorted() as string] ?? (
													<div className={classnames(styles.pageButtonIcon, stylesShared.pageButtonIcon)} />
												)}
											</div>
										)}
									</div>
								)}
							</TableHead>
						);
					})}
				</TableRow>
			))}
		</TableHeader>
	);
};

export default DsTableHeader;
