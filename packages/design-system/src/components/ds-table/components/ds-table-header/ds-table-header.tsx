import { flexRender } from '@tanstack/react-table';
import classnames from 'classnames';
import { DsIcon } from '../../../ds-icon';
import { TableHead, TableHeader, TableRow } from '../core-table';
import styles from './ds-table-header.module.scss';
import stylesShared from '../../styles/shared/ds-table-shared.module.scss';
import type { DsTableHeaderProps } from './ds-table-header.types';
import { useDsTableContext } from '../../context/ds-table-context';
import { getHeaderCellSizeStyle, isExplicitColumnWidth } from '../../utils/column-size';
import { COLUMN_DISPLAY_COLUMN_ID, ROW_ACTIONS_COLUMN_ID, SELECT_COLUMN_ID } from '../../utils/constants';
import { getStickyCellProps, hasFixedStickyWidth } from '../../utils/sticky-columns';
import { DsStack } from '../../../ds-stack';
import { DsTableColumnFilterPopover } from '../../filters/components/column-filter-popover';
import type { ResolvedColumnFilter } from '../../filters/types/filter-adapter.types';
import { DsTableColumnDisplay } from '../ds-table-column-display';
import { DsTableGroupHeaderCell } from '../ds-table-group-header-cell';
import { DsTableHeaderLabel } from '../ds-table-header-label';
import { DsTableResizeHandle } from '../ds-table-resize-handle';
import { getGroupBoundaryColumnIds, startsAtGroupBoundary } from '../../grouping';

const DsTableHeader = <TData,>({ table }: DsTableHeaderProps<TData>) => {
	const { bordered, virtualized, resizableColumns, resizeSizingReady, columnDisplay } = useDsTableContext<
		TData,
		unknown
	>();
	const groupBoundaryIds = getGroupBoundaryColumnIds(
		table
			.getHeaderGroups()
			.at(-1)
			?.headers.map((header) => header.column) ?? [],
	);

	return (
		<TableHeader className={classnames(styles.header, virtualized && styles.virtualizedHeader)}>
			{table.getHeaderGroups().map((headerGroup, headerGroupIndex) => (
				<TableRow
					key={headerGroup.id}
					className={classnames(
						styles.headerRow,
						!bordered && styles.headerRowNoBorder,
						virtualized && styles.headerRowVirtualized,
					)}
				>
					{headerGroup.headers.map((header) => {
						const columnSizing = table.getState().columnSizing;
						const visibleLeafIds = header.column
							.getLeafColumns()
							.filter((leaf) => leaf.getIsVisible())
							.map((leaf) => leaf.id);
						const { style: stickyStyle, ...stickyAttributes } = getStickyCellProps(
							table,
							visibleLeafIds,
							!!resizeSizingReady,
						);
						// Sticky offsets need real widths, so sticky fill columns take their size.
						const isSticky = hasFixedStickyWidth(
							table,
							stickyAttributes,
							visibleLeafIds,
							!!resizeSizingReady,
						);

						const isRowActionsColumn = header.column.id === ROW_ACTIONS_COLUMN_ID;
						const hostsColumnDisplay =
							header.column.id === COLUMN_DISPLAY_COLUMN_ID || (columnDisplay && isRowActionsColumn);

						if (hostsColumnDisplay) {
							const isTopRow = headerGroupIndex === 0;

							return (
								<TableHead
									// Stable key: a remount would close the open popup.
									key={header.column.id}
									data-column-id={header.isPlaceholder ? undefined : header.column.id}
									className={classnames(
										styles.headerCell,
										header.isPlaceholder && styles.placeholderCell,
										isRowActionsColumn ? styles.rowActionsHeaderCell : styles.columnDisplayHeaderCell,
									)}
									style={{
										...getHeaderCellSizeStyle(
											header.id,
											header.getSize(),
											isExplicitColumnWidth(header.column, resizeSizingReady ? columnSizing : {}),
											!!resizeSizingReady,
										),
										...stickyStyle,
									}}
									{...stickyAttributes}
								>
									{!header.isPlaceholder && flexRender(header.column.columnDef.header, header.getContext())}
									{isTopRow && (
										<span className={styles.columnDisplaySlot}>
											<DsTableColumnDisplay table={table} />
										</span>
									)}
								</TableHead>
							);
						}

						if (header.isPlaceholder) {
							return (
								<TableHead
									key={header.id}
									className={classnames(
										styles.headerCell,
										styles.placeholderCell,
										startsAtGroupBoundary(header.column, groupBoundaryIds) && styles.groupStart,
									)}
									style={{
										...getHeaderCellSizeStyle(
											header.id,
											header.getSize(),
											isExplicitColumnWidth(header.column, resizeSizingReady ? columnSizing : {}) || isSticky,
											!!resizeSizingReady,
										),
										...stickyStyle,
									}}
									{...stickyAttributes}
								/>
							);
						}

						if (header.subHeaders.length > 0) {
							return (
								<DsTableGroupHeaderCell key={header.id} header={header} groupBoundaryIds={groupBoundaryIds} />
							);
						}

						const headerStyle = {
							...getHeaderCellSizeStyle(
								header.id,
								header.column.getSize(),
								isExplicitColumnWidth(header.column, resizeSizingReady ? columnSizing : {}) || isSticky,
								!!resizeSizingReady,
							),
							...stickyStyle,
						};
						const canSort = header.column.getCanSort();
						const sortDirection = header.column.getIsSorted();
						const canResize = resizableColumns && header.column.getCanResize();
						const isSelectColumn = header.column.id === SELECT_COLUMN_ID;
						const isGroupStart = groupBoundaryIds.has(header.column.id);

						const metaFilter = header.column.columnDef.meta?.filter;
						const resolvedFilter: ResolvedColumnFilter | undefined =
							metaFilter && 'render' in metaFilter ? metaFilter : undefined;
						const hasActiveColumnFilter = resolvedFilter?.hasActiveFilter ?? false;
						const headerDef = header.column.columnDef.header;
						const tooltipText = typeof headerDef === 'string' ? headerDef : undefined;

						return (
							<TableHead
								key={header.id}
								data-column-id={header.column.id}
								className={classnames(
									styles.headerCell,
									canSort && styles.sortableHeader,
									isSelectColumn && styles.selectHeaderCell,
									resolvedFilter && styles.filterableHeader,
									hasActiveColumnFilter && styles.filterActive,
									isGroupStart && styles.groupStart,
								)}
								onClick={header.column.getToggleSortingHandler()}
								style={headerStyle}
								{...stickyAttributes}
							>
								<div className={styles.headerSortContainer}>
									<DsStack
										direction="column"
										justifyContent="center"
										width="100%"
										className={styles.headerLabelStack}
									>
										<DsTableHeaderLabel tooltipText={tooltipText}>
											{flexRender(headerDef, header.getContext())}
										</DsTableHeaderLabel>
									</DsStack>
									{canSort && sortDirection && (
										<div className={styles.pageButtonIconContainer}>
											<DsIcon
												icon={sortDirection === 'asc' ? 'arrow_drop_up' : 'arrow_drop_down'}
												className={classnames(styles.pageButtonIcon, stylesShared.pageButtonIcon)}
											/>
										</div>
									)}
									{resolvedFilter && (
										<div className={styles.filterTriggerContainer}>
											<DsTableColumnFilterPopover
												hasActiveFilter={resolvedFilter.hasActiveFilter}
												onApply={resolvedFilter.onApply}
												onClear={resolvedFilter.onClear}
												onCancel={resolvedFilter.onCancel}
											>
												{resolvedFilter.render()}
											</DsTableColumnFilterPopover>
										</div>
									)}
								</div>
								{canResize && <DsTableResizeHandle header={header} />}
							</TableHead>
						);
					})}
				</TableRow>
			))}
		</TableHeader>
	);
};

export default DsTableHeader;
