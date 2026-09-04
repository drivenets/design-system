import { flexRender } from '@tanstack/react-table';
import classnames from 'classnames';
import { DsIcon } from '../../../ds-icon';
import { TableHead, TableHeader, TableRow } from '../core-table';
import styles from './ds-table-header.module.scss';
import stylesShared from '../../styles/shared/ds-table-shared.module.scss';
import type { DsTableHeaderProps } from './ds-table-header.types';
import { useDsTableContext } from '../../context/ds-table-context';
import { getHeaderCellSizeStyle, isExplicitColumnWidth } from '../../utils/column-size';
import { SELECT_COLUMN_ID } from '../../utils/constants';
import { DsStack } from '../../../ds-stack';
import { DsTableColumnFilterPopover } from '../../filters/components/column-filter-popover';
import type { ResolvedColumnFilter } from '../../filters/types/filter-adapter.types';
import { DsTableGroupHeaderCell } from '../ds-table-group-header-cell';
import { DsTableHeaderLabel } from '../ds-table-header-label';
import { DsTableResizeHandle } from '../ds-table-resize-handle';
import { isFirstLeafColumnOfGroup } from '../../grouping';

const DsTableHeader = <TData,>({ table }: DsTableHeaderProps<TData>) => {
	const { bordered, virtualized, resizableColumns, resizeSizingReady, scrollbarSpacerWidth } =
		useDsTableContext<TData, unknown>();

	return (
		<TableHeader className={classnames(styles.header, virtualized && styles.virtualizedHeader)}>
			{table.getHeaderGroups().map((headerGroup) => (
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

						if (header.isPlaceholder) {
							return (
								<TableHead
									key={header.id}
									className={styles.headerCell}
									style={getHeaderCellSizeStyle(
										header.id,
										header.getSize(),
										isExplicitColumnWidth(header.column, resizeSizingReady ? columnSizing : {}),
										!!resizeSizingReady,
									)}
								/>
							);
						}

						if (header.subHeaders.length > 0) {
							return <DsTableGroupHeaderCell key={header.id} header={header} />;
						}

						const headerStyle = getHeaderCellSizeStyle(
							header.id,
							header.column.getSize(),
							isExplicitColumnWidth(header.column, resizeSizingReady ? columnSizing : {}),
							!!resizeSizingReady,
						);
						const canSort = header.column.getCanSort();
						const sortDirection = header.column.getIsSorted();
						const canResize = resizableColumns && header.column.getCanResize();
						const isSelectColumn = header.column.id === SELECT_COLUMN_ID;
						const isGroupStart = isFirstLeafColumnOfGroup(header.column);

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
					<TableHead
						aria-hidden
						className={classnames(
							styles.headerCell,
							styles.scrollbarSpacer,
							scrollbarSpacerWidth > 0 && styles.scrollbarSpacerOccupied,
						)}
						style={{
							width: scrollbarSpacerWidth,
							minWidth: scrollbarSpacerWidth,
							flexShrink: 0,
						}}
					/>
				</TableRow>
			))}
		</TableHeader>
	);
};

export default DsTableHeader;
